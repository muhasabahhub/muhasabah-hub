import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Qadha Tracker",
  description:
    "Terms of Service for Muhasabah Hub — Qadha Tracker. Read the terms governing your use of our app.",
};

export default function TermsOfServicePage() {
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
          <h1>Terms of Service</h1>
          <p className="subtitle">Muhasabah Hub — Qadha Tracker</p>
          <p className="last-updated">Last updated: March 12, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Qadha Tracker app
            (&ldquo;the App&rdquo;), you agree to be bound by these Terms of
            Service (&ldquo;Terms&rdquo;). If you do not agree, please do not
            use the App.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Qadha Tracker is a personal tracking app that helps Muslims record
            and make up missed (qadha) prayers and fasts. The App is provided by
            Muhasabah Hub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;).
          </p>

          <h2>3. Accounts</h2>
          <ul>
            <li>
              You must provide accurate information when creating an account
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials
            </li>
            <li>
              You are responsible for all activity that occurs under your account
            </li>
            <li>You must be at least 13 years old to use the App</li>
            <li>
              You may not use another person&apos;s account without permission
            </li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>
              Attempt to gain unauthorized access to our systems or other
              users&apos; accounts
            </li>
            <li>Reverse engineer, decompile, or modify the App</li>
            <li>
              Use the App in any way that could damage, disable, or impair our
              servers or networks
            </li>
            <li>Upload or transmit any malicious code or content</li>
          </ul>

          <h2>5. Religious Content Disclaimer</h2>
          <p>
            Qadha Tracker is a personal productivity and tracking tool. The App
            is designed to assist with personal worship tracking and does not
            constitute religious advice or scholarship. For questions regarding
            Islamic rulings (fiqh) related to qadha prayers and fasts, please
            consult a qualified Islamic scholar.
          </p>
          <p>
            Default settings and calculations in the App are based on common
            practices but may vary by madhab (school of thought). You are
            responsible for adjusting the App to match your own religious
            practice.
          </p>

          <h2>6. Data and Privacy</h2>
          <p>
            Your use of the App is also governed by our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which is incorporated
            into these Terms by reference.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the App — including but
            not limited to design, graphics, code, and text — are owned by
            Muhasabah Hub and protected by applicable intellectual property
            laws. You may not reproduce, distribute, or create derivative works
            without our express written permission.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, either express or
            implied. We do not warrant that:
          </p>
          <ul>
            <li>The App will be uninterrupted or error-free</li>
            <li>
              Any data stored in the App will be preserved without loss
            </li>
            <li>The App will meet your specific requirements</li>
          </ul>
          <p>
            We strongly recommend using the Export feature (Settings → Export) to
            regularly back up your data.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Muhasabah Hub shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising from your use of the App, including loss of data.
            Our total liability shall not exceed the amount you paid for the App
            in the twelve months preceding the claim.
          </p>

          <h2>10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at our
            sole discretion if you violate these Terms. You may delete your
            account at any time from within the App (Settings → Account → Delete
            Account).
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            significant changes by updating the &ldquo;Last updated&rdquo; date.
            Continued use of the App after changes constitutes acceptance of the
            updated Terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which
            Muhasabah Hub operates, without regard to conflict of law
            provisions.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
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
