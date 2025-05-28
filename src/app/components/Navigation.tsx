"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>DANYEOWA</h1>
      </div>
      <Link href="/" className={`channel ${isActive("/") ? "active" : ""}`}>
        <span>🏠</span> 홈
      </Link>
      <Link
        href="/popular"
        className={`channel ${isActive("/popular") ? "active" : ""}`}
      >
        <span>🌏</span> 인기 여행지
      </Link>
      <Link
        href="/schedule"
        className={`channel ${isActive("/schedule") ? "active" : ""}`}
      >
        <span>📅</span> 여행 일정
      </Link>
      <Link
        href="/recommendations"
        className={`channel ${isActive("/recommendations") ? "active" : ""}`}
      >
        <span>✨</span> 추천 코스
      </Link>
      <Link
        href="/notices"
        className={`channel ${isActive("/notices") ? "active" : ""}`}
      >
        <span>📢</span> 공지사항
      </Link>
    </nav>
  );
}
