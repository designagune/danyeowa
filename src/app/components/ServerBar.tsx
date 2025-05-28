"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServerBar() {
  const pathname = usePathname();

  const workspaces = [
    {
      id: "planner",
      icon: "✈️",
      name: "여행 계획",
      href: "/",
      tooltip: "여행 계획 워크스페이스",
    },
    {
      id: "guide",
      icon: "🗺️",
      name: "여행 가이드",
      href: "/guide",
      tooltip: "여행 가이드 워크스페이스",
    },
    {
      id: "profile",
      icon: "🎒",
      name: "프로필",
      href: "/profile",
      tooltip: "개인 프로필 및 설정",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[72px] bg-gray-100 flex flex-col items-center pt-4 gap-2">
      {workspaces.map((workspace) => (
        <Link
          key={workspace.id}
          href={workspace.href}
          className={`relative group w-12 h-12 flex items-center justify-center rounded-[24px] transition-all duration-200 hover:rounded-[16px] ${
            pathname === workspace.href
              ? "bg-blue-500 text-white rounded-[16px]"
              : "hover:bg-gray-200"
          }`}
        >
          <span className="text-2xl">{workspace.icon}</span>
          <div className="absolute left-[calc(100%+8px)] hidden group-hover:block bg-black text-white text-sm py-1 px-2 rounded whitespace-nowrap">
            {workspace.tooltip}
          </div>
        </Link>
      ))}
    </div>
  );
}
