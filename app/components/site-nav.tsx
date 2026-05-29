const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
const instagramUrl = "https://www.instagram.com/nyxstudioseg?igsh=MW8zNDZlc3N1dTBhcg==";

export default function SiteNav() {
  return (
    <header className="motion-nav-in relative z-20 mx-auto w-full max-w-6xl px-6 pt-5 sm:px-8 lg:px-10">
      <div className="glass-panel rounded-3xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <a
            href="#top"
            className="font-display text-base uppercase tracking-[0.3em] text-white transition-colors hover:text-[#99aaff]"
          >
            NYX
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#d9def0] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:border-[#5f78ff] hover:bg-[#1730d8]"
          >
            Work with NYX
          </a>
        </div>
        <nav
          aria-label="Primary mobile"
          className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-3 text-xs md:hidden"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[#d9def0] transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
