"use client"

import { Mail } from "lucide-react"

const footerLinks = [
  {
    title: "platform",
    links: [
      { label: "services", href: "#about" },
      { label: "why us", href: "#why-us" },
      { label: "pricing", href: "#pricing" },
      { label: "apply now", href: "#apply" },
    ],
  },
  {
    title: "resources",
    links: [
      { label: "faq", href: "#" },
      { label: "blog", href: "#" },
      { label: "career tips", href: "#" },
      { label: "help center", href: "https://mail.google.com/mail/?view=cm&to=nani161302@gmail.com&su=Help%20%26%20Support%20%E2%80%94%20ApplyLegit&body=Hey%20ApplyLegit%20Team%2C%0A%0AI%20need%20some%20help%20with%20your%20service.%20Could%20you%20please%20assist%20me%3F%0A%0ALooking%20forward%20to%20hearing%20from%20you!", target: "_blank" },
    ],
  },
  {
    title: "legal",
    links: [
      { label: "privacy policy", href: "#" },
      { label: "terms of service", href: "#" },
      { label: "cookie policy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3">
              <svg width="38" height="38" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ filter: "drop-shadow(0 0 6px rgba(220, 38, 38, 0.7))" }}
              >
                <rect width="34" height="34" rx="9" fill="#111111" />
                <rect width="34" height="34" rx="9" stroke="#dc2626" strokeWidth="1.5" />
                <path d="M10 26L17 8L24 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12.5" y1="20" x2="21.5" y2="20" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span
                className="text-xl font-black tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                applylegit™
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              we don't just help you get a job. we help you secure the bag and a bulletproof u.s. career path.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=nani161302@gmail.com&su=I%27m%20Interested%20%E2%80%94%20ApplyLegit&body=Hey%20ApplyLegit%20Team%2C%0A%0AI%20came%20across%20your%20platform%20and%20I%27m%20genuinely%20interested%20in%20your%20job%20search%20services.%20Would%20love%20to%20connect%20and%20learn%20more%20about%20how%20you%20can%20help%20me%20land%20a%20role.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#dc2626] transition-colors hover:text-[#dc2626]/70"
            >
              <Mail className="size-4" />
              nani161302@gmail.com
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="mb-6 text-xs font-black uppercase tracking-widest text-[#dc2626]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"target" in link ? (link as { label: string; href: string; target: string }).target : undefined}
                      rel={"target" in link ? "noopener noreferrer" : undefined}
                      className="text-sm font-bold text-white transition-colors duration-200 hover:text-[#dc2626]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          {/* Tagline centered */}
          <p className="text-center text-xs sm:text-sm font-bold text-white/40 mb-4">
            building compliant, future-proof careers for everyone — f-1, opt, h-1b & beyond
          </p>
          {/* Bottom row */}
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs font-bold text-white/30">
              &copy; 2026 applylegit™. all rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-white/30">for queries, reach us at</span>
              <a
                href="https://mail.google.com/mail/?view=cm&to=nani161302@gmail.com&su=I%27m%20Interested%20%E2%80%94%20ApplyLegit&body=Hey%20ApplyLegit%20Team%2C%0A%0AI%20came%20across%20your%20platform%20and%20I%27m%20genuinely%20interested%20in%20your%20job%20search%20services.%20Would%20love%20to%20connect%20and%20learn%20more%20about%20how%20you%20can%20help%20me%20land%20a%20role.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-[#dc2626] hover:text-[#dc2626]/70 transition-colors"
              >
                nani161302@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
