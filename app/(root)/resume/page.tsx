"use client";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    const resumeUrl =
      process.env.NEXT_PUBLIC_RESUME_LINK || "/resume/dominion_resume.pdf";
    window.location.replace(resumeUrl);
  }, []);
  return <div>Redirecting to the resume...</div>;
}
