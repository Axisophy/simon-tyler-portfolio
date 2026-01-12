import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-medium text-lg">
          Simon Tyler
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/work" className="text-white hover:text-pink-500 transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-white hover:text-pink-500 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-pink-500 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
