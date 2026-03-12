import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Qadha Tracker",
  description:
    "Privacy Policy for Muhasabah Hub — Qadha Tracker. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen py-12 px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "#C9A84C" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>

        <article className="prose-custom">
          <h1>Privacy Policy</h1>
          <p className="subtitle">Muhasabah Hub — Qadha Tracker</p>
          <p className="last-updated">Last updated: March 12, 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Muhasabah Hub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) operates the Qadha Tracker mobile application.
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our app.
          </p>
          <p>
            By using Qadha Tracker, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li>
              <strong>Account information:</strong> Your name and email address
              when you create an account
            </li>
            <li>
              <strong>Prayer and fast tracking data:</strong> Records of your
              missed and made-up prayers and fasts, including counts and dates
            </li>
            <li>
              <strong>App preferences:</strong> Theme settings, notification
              preferences, app lock settings, and other in-app configurations
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage data:</strong> How you interact with the app (e.g.
              features used, session frequency)
            </li>
            <li>
              <strong>Device information:</strong> Device type, operating system
              version, and app version for troubleshooting purposes
            </li>
          </ul>

          <h3>Information We Do NOT Collect</h3>
          <ul>
            <li>We do not collect your precise location</li>
            <li>
              We do not collect biometric data (Face ID / fingerprint data is
              processed entirely on your device by the operating system and is
              never transmitted to us)
            </li>
            <li>
              We do not sell your personal information to third parties
            </li>
            <li>We do not serve advertisements</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the Qadha Tracker service</li>
            <li>Sync your data across devices via your account</li>
            <li>Improve and develop new features</li>
            <li>Respond to your support requests and feedback</li>
            <li>Ensure the security of your account</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            Your data is stored securely using Google Firebase (Firestore), a
            trusted cloud infrastructure provider. We implement industry-standard
            security measures including:
          </p>
          <ul>
            <li>Encrypted data transmission (HTTPS/TLS)</li>
            <li>Firebase Authentication for secure account access</li>
            <li>
              Firestore Security Rules to ensure users can only access their own
              data
            </li>
          </ul>
          <p>
            While we strive to protect your data, no method of transmission or
            storage is 100% secure. We encourage you to use a strong password
            and keep your account credentials private.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. You may
            delete your account at any time from within the app (Settings →
            Account → Delete Account), which permanently removes all your data
            from our servers.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>Qadha Tracker uses the following third-party services:</p>
          <ul>
            <li>
              <strong>Google Firebase</strong> (Authentication, Firestore
              database) —{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase Privacy Policy
              </a>
            </li>
            <li>
              <strong>Expo</strong> (App infrastructure) —{" "}
              <a
                href="https://expo.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo Privacy Policy
              </a>
            </li>
            <li>
              <strong>Apple App Store / Google Play Store</strong> — subject to
              their respective privacy policies
            </li>
          </ul>
          <p>
            These services may collect information as described in their own
            privacy policies.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Qadha Tracker is not directed at children under the age of 13. We do
            not knowingly collect personal information from children under 13. If
            you believe a child has provided us with personal information, please
            contact us and we will delete it promptly.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>
              Export your data (available via Settings → Export in the app)
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@muhasabahhub.com">info@muhasabahhub.com</a>.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by updating the &ldquo;Last
            updated&rdquo; date at the top of this page. Continued use of the
            app after changes constitutes acceptance of the updated policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@muhasabahhub.com">info@muhasabahhub.com</a>
            <br />
            Website:{" "}
            <a
              href="https://www.muhasabahhub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.muhasabahhub.com
            </a>
          </p>
        </article>
      </div>
    </div>
  );
}
