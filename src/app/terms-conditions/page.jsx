import {
  FilePenLine,
  Shield,
  KeyRound,
  AlertTriangle,
  Database,
  Lock,
  ExternalLink,
  Newspaper,
  Gavel,
  Mail,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";  

const termsContent = [
  {
    title: "Right to Modify Content",
    content:
      "GO MBA reserves the right, at its sole discretion, to edit, update, or delete any information, content, or materials posted on the website without prior notice.",
    icon: FilePenLine,
  },
  {
    title: "Indemnification",
    content:
      "By using this website, you agree to indemnify, defend, and hold harmless GO MBA, its affiliates, partners, employees, and representatives (“Affiliated Parties”) from any claims, losses, liabilities, damages, and expenses (including legal fees) arising out of your misuse of the site, violation of these terms, or infringement of any rights of a third party.",
    icon: Shield,
  },
  {
    title: "Non-Transferability",
    content:
      "Your access to and use of this website is non-transferable. Any credentials (including usernames and passwords) issued for accessing restricted areas or services are intended solely for your personal use and must not be shared or transferred to others.",
    icon: KeyRound,
  },
  {
    title: "Disclaimer of Warranties and Liability",
    content:
      "The content and services on this website may contain errors, inaccuracies, or technical issues. GO MBA and its affiliated parties shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the website or any content therein. This includes, but is not limited to, loss of business, data, revenue, or profits, even if we were advised of the possibility of such damages. The limitations of liability are essential to the agreement between you and GO MBA and reflect an understanding of risk allocation.",
    icon: AlertTriangle,
  },
  {
    title: "Use of Information",
    content:
      "By using this site, you consent to our right to collect, use, and assign information you provide or that is collected during your interaction with the site, in accordance with our Privacy Policy.",
    icon: Database,
  },
  {
    title: "Privacy Policy",
    content:
      "Your use of this website is also governed by our Privacy Policy, which forms an integral part of this Agreement. Please review it to understand how your information is collected and used.",
    icon: Lock,
  },
  {
    title: "Third-Party Links",
    content:
      "The GO MBA website may contain links to third-party websites for your convenience. We do not monitor or review the content of external websites and are not responsible for their content, accuracy, or any opinions expressed therein. The inclusion of such links does not imply our endorsement. Users who access these external sites do so at their own risk.",
    icon: ExternalLink,
  },
  {
    title: "Information & Press Releases",
    content:
      "The website may include press releases or announcements concerning GO MBA. While we endeavor to ensure that the information is accurate at the time of publication, we do not commit to updating it regularly. Information regarding other entities should not be considered as being endorsed or verified by GO MBA.",
    icon: Newspaper,
  },
  {
    title: "Governing Law",
    content:
      "These terms and conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of or in connection with this Agreement shall be subject to the jurisdiction of the courts located in Mathura, Uttar Pradesh.",
    icon: Gavel,
  },
  {
    title: "Contact Us",
    content: (
      <>
        If you have any questions or concerns regarding these terms, please
        contact us at:
        <br />
        Email:{" "}
        <a
          href="mailto:info@gla.ac.in"
          className="text-primary hover:underline"
        >
          info@gla.ac.in
        </a>
        <br />
        Website:{" "}
        <a
          href="https://gomba.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          https://gomba.online
        </a>
      </>
    ),
    icon: Mail,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-12 md:px-6 md:py-20 lg:py-24">
        <Card className="max-w-4xl mx-auto shadow-lg dark:shadow-2xl">
          <CardHeader className="text-center pt-8 md:pt-12">
            <CardTitle className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Terms & Conditions
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              By using our website, you agree to the following terms.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <div className="space-y-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using the official website of GO MBA,
                you agree to comply with and be bound by the following terms and
                conditions. Please read them carefully. If you do not agree with
                these terms, you are advised not to access or use the site.
              </p>
              <Separator />
              {termsContent.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 md:gap-8"
                  >
                    <div className="flex-shrink-0 flex sm:flex-col items-center gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-3">
                        <Icon className="h-6 w-6" />
                      </div>
                      {index < termsContent.length - 1 && (
                        <div className="hidden sm:block w-px h-full bg-gray-200 dark:bg-gray-700 flex-grow" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-semibold tracking-tight mb-3">
                        {section.title}
                      </h2>
                      <div className="text-gray-600 dark:text-gray-400 leading-relaxed prose prose-gray dark:prose-invert max-w-none">
                        <p>{section.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
