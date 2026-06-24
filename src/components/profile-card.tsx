"use client";

import Image from "next/image";
import { ChevronDown, Mail } from "lucide-react";
import { IconGitHub, IconLinkedin } from "@/components/social-icons";

export function ProfileCard() {
  return (
    <div className="relative shrink-0 w-[333px] h-[620px]">
      <div className="absolute inset-0 bg-white rounded-[25px] shadow-[0_25px_80px_rgba(0,0,0,0.35)]" />

      <div className="absolute overflow-hidden w-[273px] h-[300px] left-[30px] top-[30px] rounded-[15px]">
        <Image
          src="/avatar.png"
          alt="Fatemeh Shojaei"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <h2 className="absolute m-0 left-[30px] top-[350px] w-[273px] font-bold text-[25px] leading-[29px] tracking-[-0.03em] text-black">
        Fatemeh Shojaei
      </h2>

      <p className="absolute m-0 left-[30px] top-[387px] w-[273px] text-[14px] leading-5 text-black/50">
        Front-End Developer with 8+ years of experience building fast,
        responsive, and scalable web applications, primarily using React and
        Next.js
      </p>

      <div className="absolute left-[30px] top-[507px] w-[273px] h-px bg-[rgba(0,187,71,0.25)]" />

      <div className="absolute flex items-center justify-between left-[80px] top-[560px] w-[173px] h-[25px]">
        <a
          href="https://www.linkedin.com/in/fatemeh-shojaei-3929aa18a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors"
        >
          <IconLinkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          href="mailto:fatemeeshojaeii@gmail.com"
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>

        <a
          href="https://github.com/fatemeShj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors"
        >
          <IconGitHub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </div>
  );
}
