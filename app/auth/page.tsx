"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Mode = "verifyEmail" | "resetPassword" | "recoverEmail";

const MODE_CONFIG: Record<
  Mode,
  {
    deepLinkPath: string;
    loadingTitle: string;
    loadingMessage: string;
    fallbackTitle: string;
    fallbackMessage: string;
  }
> = {
  verifyEmail: {
    deepLinkPath: "verify",
    loadingTitle: "Verifying your email...",
    loadingMessage: "Redirecting to Qadha Tracker.",
    fallbackTitle: "Email Verified",
    fallbackMessage: "Email verified! You can return to Qadha Tracker.",
  },
  resetPassword: {
    deepLinkPath: "reset-password",
    loadingTitle: "Opening Qadha Tracker...",
    loadingMessage: "Redirecting to complete your password reset.",
    fallbackTitle: "Reset Password",
    fallbackMessage:
      "The app could not be opened. Please make sure Qadha Tracker is installed, then try again.",
  },
  recoverEmail: {
    deepLinkPath: "verify",
    loadingTitle: "Verifying your email...",
    loadingMessage: "Redirecting to Qadha Tracker.",
    fallbackTitle: "Email Verified",
    fallbackMessage: "Email verified! You can return to Qadha Tracker.",
  },
};

function AuthContent() {
  const searchParams = useSearchParams();
  const [showFallback, setShowFallback] = useState(false);

  const mode = searchParams.get("mode") as Mode | null;
  const config = mode && MODE_CONFIG[mode] ? MODE_CONFIG[mode] : null;

  useEffect(() => {
    if (!config) return;

    const params = searchParams.toString();
    const deepLink = `muhasabahhub://qadhatracker/${config.deepLinkPath}${params ? `?${params}` : ""}`;

    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 2500);

    const handlePageHide = () => clearTimeout(fallbackTimer);
    window.addEventListener("pagehide", handlePageHide);

    window.location.href = deepLink;

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [searchParams, config]);

  if (!config) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ background: "#0a0a0a" }}
      >
        <div className="text-center max-w-[420px]">
          <h1
            className="text-xl font-semibold mb-3"
            style={{ color: "#C9A84C" }}
          >
            Invalid Link
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
            This link is not valid. Please check your email and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="text-center max-w-[420px]">
        {!showFallback ? (
          <>
            <div
              className="w-12 h-12 rounded-full border-4 mx-auto mb-6 animate-spin"
              style={{ borderColor: "#222", borderTopColor: "#C9A84C" }}
            />
            <h1
              className="text-xl font-semibold mb-3"
              style={{ color: "#C9A84C" }}
            >
              {config.loadingTitle}
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
              {config.loadingMessage}
            </p>
          </>
        ) : (
          <>
            <h1
              className="text-xl font-semibold mb-3"
              style={{ color: "#C9A84C" }}
            >
              {config.fallbackTitle}
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
              {config.fallbackMessage}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center p-6"
          style={{ background: "#0a0a0a" }}
        >
          <div className="text-center">
            <div
              className="w-12 h-12 rounded-full border-4 mx-auto mb-6 animate-spin"
              style={{ borderColor: "#222", borderTopColor: "#C9A84C" }}
            />
            <h1
              className="text-xl font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Loading...
            </h1>
          </div>
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
