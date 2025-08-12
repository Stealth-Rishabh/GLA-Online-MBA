import {
  ShieldCheck,
  List,
  Cog,
  Cookie,
  Share2,
  Lock,
  FilePenLine,
  CheckCircle,
  Mail,
  Archive,
  UserCheck,
  ShieldOff,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl py-12 px-4 md:py-20 md:px-6">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last updated: August 11, 2025
            </p>
          </header>

          <Card className="w-full">
            <CardContent className="p-6 md:p-8 space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                GO MBA is committed to protecting the privacy of our website
                visitors, students, applicants, and users. This Privacy Policy
                explains what information we collect, how we use it, and the
                choices you have.
              </p>

              <Separator />

              <PolicySection
                icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                title="Scope"
              >
                <p>
                  Welcome to Go MBA from GLA Online, a subsidiary/brand of GLA
                  University. We are committed to protecting the privacy of our
                  visitors and users. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website glaonline.com and interact with our
                  services. This policy applies only to our online activities
                  and to information shared and/or collected on our website. By
                  using our Site, you signify your acceptance of this Privacy
                  Policy. If you do not agree to this policy, please do not use
                  our Site.
                </p>
              </PolicySection>

              <PolicySection
                icon={<List className="h-6 w-6 text-primary" />}
                title="Information We Collect"
              >
                <p>
                  We may collect information when you visit our website,
                  register for programs or services, submit forms or queries, or
                  participate in events, surveys, or assessments.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>
                    <strong>Information you provide:</strong> name, email
                    address, phone number, postal address, academic interests,
                    occupation, preferences, and demographic details (including
                    zip/postal code).
                  </li>
                  <li>
                    <strong>Usage and device data:</strong> IP address, browser
                    type, device identifiers, pages visited, referral sources,
                    timestamps, and similar log data collected via cookies and
                    server logs.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Cog className="h-6 w-6 text-primary" />}
                title="How We Use Your Information"
              >
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>
                    Provide, personalize, and support academic and related
                    services.
                  </li>
                  <li>
                    Respond to inquiries and process applications or requests.
                  </li>
                  <li>
                    Send updates, announcements, and relevant academic content
                    (you can opt out at any time).
                  </li>
                  <li>
                    Improve website functionality, performance, and user
                    experience.
                  </li>
                  <li>
                    Maintain security, prevent misuse, and monitor trends and
                    analytics.
                  </li>
                </ul>
                <p className="mt-4">
                  We may aggregate and de-identify data for reporting and
                  research.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Cookie className="h-6 w-6 text-primary" />}
                title="Cookies and Log Data"
              >
                <p>
                  We use cookies and similar technologies to operate the
                  website, remember preferences, analyze usage, and improve
                  performance. You can manage cookies through your browser
                  settings; disabling some cookies may affect site
                  functionality.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Share2 className="h-6 w-6 text-primary" />}
                title="Information Sharing and Disclosure"
              >
                <p>
                  We do not sell or rent your personal information. We may share
                  information:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>With your explicit consent.</li>
                  <li>
                    With service providers who process data on our behalf under
                    confidentiality and security obligations.
                  </li>
                  <li>To comply with legal obligations or lawful requests.</li>
                  <li>
                    To protect our rights, property, users, or public safety.
                  </li>
                  <li>
                    In connection with a reorganization or similar institutional
                    change, subject to applicable safeguards.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Archive className="h-6 w-6 text-primary" />}
                title="Data Retention"
              >
                <p>
                  We retain personal information only for as long as necessary
                  to fulfill the purposes described in this policy, comply with
                  legal obligations, resolve disputes, and enforce agreements.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Lock className="h-6 w-6 text-primary" />}
                title="Security"
              >
                <p>
                  We use reasonable technical and organizational measures to
                  protect personal information against unauthorized access,
                  alteration, disclosure, or loss. No method of transmission or
                  storage is completely secure.
                </p>
              </PolicySection>

              <PolicySection
                icon={<UserCheck className="h-6 w-6 text-primary" />}
                title="Your Choices and Rights"
              >
                <p>
                  Subject to applicable law, you may have rights to access,
                  correct, update, or delete your personal information, and to
                  withdraw consent where processing is based on consent. To
                  exercise these rights or manage communications, contact us
                  using the details below.
                </p>
              </PolicySection>

              <PolicySection
                icon={<ShieldOff className="h-6 w-6 text-primary" />}
                title="Children’s Privacy"
              >
                <p>
                  Our services are intended for prospective and current students
                  and other adults. If we learn we have collected personal
                  information from a child contrary to applicable law, we will
                  take appropriate steps to delete it.
                </p>
              </PolicySection>

              <PolicySection
                icon={<ExternalLink className="h-6 w-6 text-primary" />}
                title="Third-Party Links"
              >
                <p>
                  Our website may contain links to third-party sites. We are not
                  responsible for the privacy practices of those websites. We
                  encourage you to review their policies.
                </p>
              </PolicySection>

              <PolicySection
                icon={<FilePenLine className="h-6 w-6 text-primary" />}
                title="Changes to This Policy"
              >
                <p>
                  We may update this Privacy Policy from time to time. Material
                  changes will be posted prominently on our website. Your
                  continued use of our website after changes take effect
                  signifies your acceptance of the updated policy.
                </p>
              </PolicySection>

              <PolicySection
                icon={<CheckCircle className="h-6 w-6 text-primary" />}
                title="Your Consent"
              >
                <p>
                  By using the GO MBA website and services, you consent to the
                  collection and use of information as described in this Privacy
                  Policy.
                </p>
              </PolicySection>

              <Separator />

              <PolicySection
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Contact Us"
              >
                <div className="mt-2 space-y-1">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@gla.ac.in"
                      className="text-primary hover:underline"
                    >
                      info@gla.ac.in
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://gomba.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://gomba.online
                    </a>
                  </p>
                </div>
              </PolicySection>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function PolicySection({ icon, title, children }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="prose prose-stone max-w-none dark:prose-invert text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
