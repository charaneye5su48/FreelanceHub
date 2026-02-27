"use client"

import { Mail } from "lucide-react"

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Services", href: "#about" },
      { label: "Why Us", href: "#why-us" },
      { label: "Pricing", href: "#pricing" },
      { label: "Apply Now", href: "#apply" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Career Tips", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-md bg-black">
                <span className="text-sm font-bold text-white">F</span>
              </div>
              <span
                className="text-lg font-semibold tracking-tight text-black"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                FreelanceHub
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-black/45">
              Your hiring experts. We update your resume and apply to jobs on
              your behalf — so you never job hunt alone.
            </p>
            <a
              href="mailto:nani161302@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-black transition-colors hover:text-black/60"
            >
              <Mail className="size-4" />
              nani161302@gmail.com
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-black/30"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-black/50 transition-colors duration-200 hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 md:flex-row">
          <p className="text-[13px] text-black/30">
            &copy; 2026 FreelanceHub. All rights reserved.
          </p>
          <p className="text-[13px] text-black/30">
            Built for job seekers, by hiring experts.
          </p>
        </div>
      </div>
    </footer>
  )
}
