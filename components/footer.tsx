import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 sticky top-full border-t border-secoundary-foreground ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">
              関西の住宅足場は川上建設へ
            </h2>
            <p className="text-sm">(住宅以外も対応可能)</p>
          </div>
          <nav>
            <ul className="flex space-x-2 md:space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-muted-foreground text-xs md:text-sm md:text-md"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/work-flow"
                  className="hover:text-muted-foreground text-xs md:text-sm md:text-md"
                >
                  施工までの流れ
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-muted-foreground text-xs md:text-sm md:text-md"
                >
                  実績
                </Link>
              </li>
              <li>
                <Link
                  href="/regions"
                  className="hover:text-muted-foreground text-xs md:text-sm md:text-md"
                >
                  対応地域
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-muted-foreground text-xs md:text-sm md:text-md"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="border-secondary-foreground my-4" />
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 川上建設</p>
          <Link
            href="https://www.instagram.com/kawakamiconstruction?igsh=Y29nZ2hxbjU1OTNt&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}
