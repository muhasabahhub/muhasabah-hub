const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#apps", label: "Apps" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="#1a6b3c"
                  stroke="#1a6b3c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-bold">Muhasabah Hub</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Apps Built for the Muslim Journey
            </p>
          </div>

          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Muhasabah Hub. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
