import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-4 mt-4 md:mx-6 md:mt-6">
      <div className="p-4 md:p-5 flex justify-between items-center">
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
