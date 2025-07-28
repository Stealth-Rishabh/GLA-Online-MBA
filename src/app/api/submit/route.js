// src/app/api/submit/route.js

export async function POST(request) {
  // Allow CORS for frontend requests
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method not allowed. Use POST.",
      }),
      {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Parse JSON body
    const formData = await request.json();

    // Validate required fields
    const required = ["name", "email", "phone", "state", "city"];
    const missing = required.filter((k) => !formData[k]);
    if (missing.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing fields: " + missing.join(", "),
        }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format." }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Validate phone number
    if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid phone number." }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Google Apps Script integration
    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbwNlNdUk0dhyu3rXla1HkHskibDUOjRQ6nXzrB7lFcnsAuJIRUf0Q94FSgGjKG6_mBJ/exec";

    // Add hardcoded page value "gomba.online" to the first column
    const payload = {
      ...formData,
      action: "submitLead",
      page: "gomba.online", // Hardcoded page value for first column
    };

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Script Error:", errorText);
      throw new Error(
        `Google Script submission failed with status: ${response.status}`
      );
    }

    const result = await response.json();

    if (result.success) {
      return new Response(
        JSON.stringify({
          success: true,
          message: result.message || "Form submitted successfully.",
        }),
        {
          status: 200,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    } else {
      // Let the script dictate the error message and duplicate status
      return new Response(
        JSON.stringify({
          success: false,
          isDuplicate: result.isDuplicate || false,
          message:
            result.message || "Data submission failed due to script error.",
        }),
        {
          // The original code used 200 for duplicates, so we stick with that for frontend compatibility.
          status: result.isDuplicate ? 200 : 500,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error: " + error.message,
      }),
      {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      }
    );
  }
}
