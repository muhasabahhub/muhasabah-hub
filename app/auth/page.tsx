"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, applyActionCode } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getFirebaseAuth() {
  const app =
    getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
  return getAuth(app);
}

type Status = "loading" | "verified" | "deep-link-fallback" | "error";

function Spinner() {
  return (
    <div
      className="w-12 h-12 rounded-full border-4 mx-auto mb-6 animate-spin"
      style={{ borderColor: "#222", borderTopColor: "#C9A84C" }}
    />
  );
}

function attemptDeepLink(path: string, params: string) {
  const deepLink = `muhasabahhub://qadhatracker/${path}${params ? `?${params}` : ""}`;
  window.location.href = deepLink;
}

function VerifyEmailFlow({ oobCode }: { oobCode: string }) {
  const [status, setStatus] = useState<Status>("loading");

  const handleVerify = useCallback(async () => {
    try {
      const auth = getFirebaseAuth();
      await applyActionCode(auth, oobCode);
      setStatus("verified");

      attemptDeepLink("verify", "verified=true");

      const fallbackTimer = setTimeout(() => {
        setStatus("deep-link-fallback");
      }, 2500);

      const handlePageHide = () => clearTimeout(fallbackTimer);
      window.addEventListener("pagehide", handlePageHide);

      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener("pagehide", handlePageHide);
      };
    } catch {
      setStatus("error");
    }
  }, [oobCode]);

  useEffect(() => {
    handleVerify();
  }, [handleVerify]);

  if (status === "loading") {
    return (
      <>
        <Spinner />
        <h1
          className="text-xl font-semibold mb-3"
          style={{ color: "#C9A84C" }}
        >
          Verifying your email...
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
          Please wait a moment.
        </p>
      </>
    );
  }

  if (status === "verified") {
    return (
      <>
        <Spinner />
        <h1
          className="text-xl font-semibold mb-3"
          style={{ color: "#C9A84C" }}
        >
          Email verified successfully!
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
          Redirecting to Qadha Tracker...
        </p>
      </>
    );
  }

  if (status === "deep-link-fallback") {
    return (
      <>
        <h1
          className="text-xl font-semibold mb-3"
          style={{ color: "#C9A84C" }}
        >
          Email Verified
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
          Your email has been verified. You can now open Qadha Tracker on your
          phone to continue.
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
        Verification Failed
      </h1>
      <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
        This link has expired or has already been used.
      </p>
    </>
  );
}

function ResetPasswordFlow({
  oobCode,
  searchParams,
}: {
  oobCode: string;
  searchParams: URLSearchParams;
}) {
  const [status, setStatus] = useState<Status>("loading");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobile =
      /iphone|ipad|ipod|android|webos|blackberry|windows phone/.test(
        userAgent,
      );
    setIsDesktop(!mobile);

    if (!mobile) {
      setStatus("deep-link-fallback");
      return;
    }

    const params = new URLSearchParams();
    params.set("oobCode", oobCode);
    const continueUrl = searchParams.get("continueUrl");
    if (continueUrl) params.set("continueUrl", continueUrl);

    attemptDeepLink("reset-password", params.toString());

    const fallbackTimer = setTimeout(() => {
      setStatus("deep-link-fallback");
    }, 2500);

    const handlePageHide = () => clearTimeout(fallbackTimer);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [oobCode, searchParams]);

  if (status === "loading") {
    return (
      <>
        <Spinner />
        <h1
          className="text-xl font-semibold mb-3"
          style={{ color: "#C9A84C" }}
        >
          Opening Qadha Tracker...
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
          Redirecting to Qadha Tracker to complete your password reset.
        </p>
      </>
    );
  }

  if (isDesktop) {
    return (
      <>
        <h1
          className="text-xl font-semibold mb-3"
          style={{ color: "#C9A84C" }}
        >
          Reset Password
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
          Password reset links must be opened on your phone where Qadha Tracker
          is installed.
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
        Reset Password
      </h1>
      <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
        Please open Qadha Tracker on your phone to reset your password.
      </p>
    </>
  );
}

function AuthContent() {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");

  if (!mode || !oobCode) {
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
        {(mode === "verifyEmail" || mode === "recoverEmail" || mode === "verifyAndChangeEmail") && (
          <VerifyEmailFlow oobCode={oobCode} />
        )}
        {mode === "resetPassword" && (
          <ResetPasswordFlow oobCode={oobCode} searchParams={searchParams} />
        )}
        {mode !== "verifyEmail" &&
          mode !== "recoverEmail" &&
          mode !== "verifyAndChangeEmail" &&
          mode !== "resetPassword" && (
            <>
              <h1
                className="text-xl font-semibold mb-3"
                style={{ color: "#C9A84C" }}
              >
                Invalid Link
              </h1>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#999" }}
              >
                This link is not valid. Please check your email and try again.
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
            <Spinner />
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
