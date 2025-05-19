// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Tan Yong Lun. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/yong-lun-tan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <p className="w-5 h-5 hover:text-gray-400">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
