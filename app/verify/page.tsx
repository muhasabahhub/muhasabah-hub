"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyContent() {
  const searchParams = useSearchParams();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const params = searchParams.toString();
    const deepLink = `muhasabahhub://qadhatracker/verify${params ? `?${params}` : ""}`;

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
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#0a0a0a" }}>
      <div className="text-center max-w-[420px]">
        {!showFallback ? (
          <>
            <div
              className="w-12 h-12 rounded-full border-4 mx-auto mb-6 animate-spin"
              style={{ borderColor: "#222", borderTopColor: "#C9A84C" }}
            />
            <h1 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
              Verifying your email...
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
              Redirecting to Qadha Tracker...
            </p>
          </>
        ) : (
          <>
            <h1 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
              Email Verified
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
              Email verified! You can return to Qadha Tracker.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#0a0a0a" }}>
          <div className="text-center">
            <div
              className="w-12 h-12 rounded-full border-4 mx-auto mb-6 animate-spin"
              style={{ borderColor: "#222", borderTopColor: "#C9A84C" }}
            />
            <h1 className="text-xl font-semibold" style={{ color: "#C9A84C" }}>
              Verifying your email...
            </h1>
          </div>
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
