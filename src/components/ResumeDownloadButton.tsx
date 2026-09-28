import { Button } from "./ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { resumeDownloadPath } from "@/paths";

export default function ResumeDownloadButton() {
  return (
    <Button asChild variant="ghost">
      <Link
        href={resumeDownloadPath}
        target="_blank"
        download="Tauhid_Ahmed_Full_Stack_Developer.pdf"
        className="group"
        title="Download Resume"
      >
        <Download className="group-hover:scale-105 group-hover:text-primary" />
        <span className="hidden sm:inline">Resume</span>
      </Link>
    </Button>
  );
}
