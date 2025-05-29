"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/sidebarStore";
import { useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const { navigationActive, setNavigationActive } = useSidebarStore();

  useEffect(() => {
    setNavigationActive(pathname);
  }, [pathname, setNavigationActive]);

  const isActive = (path: string) => {
    if (path === "/" && navigationActive === "/") return true;
    if (path !== "/" && navigationActive.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>DANYEOWA</h1>
      </div>
      <Link
        href="/"
        className={`channel ${isActive("/") ? "active" : ""}`}
        onClick={() => setNavigationActive("/")}
      >
        <span>🏠</span> 홈
      </Link>
      <Link
        href="/popular"
        className={`channel ${isActive("/popular") ? "active" : ""}`}
        onClick={() => setNavigationActive("/popular")}
      >
        <span>🌏</span> 인기 여행지
      </Link>
      <Link
        href="/schedule"
        className={`channel ${isActive("/schedule") ? "active" : ""}`}
        onClick={() => setNavigationActive("/schedule")}
      >
        <span>📅</span> 여행 일정
      </Link>
      <Link
        href="/recommendations"
        className={`channel ${isActive("/recommendations") ? "active" : ""}`}
        onClick={() => setNavigationActive("/recommendations")}
      >
        <span>✨</span> 추천 코스
      </Link>
      <Link
        href="/notices"
        className={`channel ${isActive("/notices") ? "active" : ""}`}
        onClick={() => setNavigationActive("/notices")}
      >
        <span>📢</span> 공지사항
      </Link>
    </nav>
  );
}
