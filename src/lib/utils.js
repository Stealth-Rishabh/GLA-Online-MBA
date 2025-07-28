import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
 
// Utility function to scroll to lead generation form and focus first field
export const scrollToLeadForm = () => {
  const formElement = document.getElementById("lead-generation-form");
  if (formElement) {
    formElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
 
    // Focus the first input field after a short delay to ensure smooth scroll completes
    setTimeout(() => {
      const nameInput = formElement.querySelector('input[name="name"]');
      if (nameInput) {
        nameInput.focus();
      }
    }, 500);
  }
};
 