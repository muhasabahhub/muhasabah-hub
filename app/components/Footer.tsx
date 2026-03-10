export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
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
            Apps Built for the Muslim Life Journey
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Muhasabah Hub. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
