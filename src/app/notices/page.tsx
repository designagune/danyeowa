"use client";

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  type: "공지" | "업데이트" | "이벤트";
  isImportant?: boolean;
}

export default function NoticesPage() {
  const notices: Notice[] = [
    {
      id: 1,
      title: "일본 입국 규제 완화 안내",
      content:
        "2024년 4월부터 일본 입국시 무비자 입국이 가능하며, 입국 전 PCR 검사가 면제됩니다. 자세한 내용은 공지사항을 확인해주세요.",
      date: "2024-03-15",
      type: "공지",
      isImportant: true,
    },
    {
      id: 2,
      title: "다녀와 앱 업데이트 안내",
      content:
        "다녀와 앱 v1.2.0이 출시되었습니다. 이번 업데이트에서는 여행 일정 관리 기능이 개선되었으며, 새로운 추천 코스가 추가되었습니다.",
      date: "2024-03-10",
      type: "업데이트",
    },
    {
      id: 3,
      title: "봄 시즌 특별 이벤트",
      content:
        "봄 시즌을 맞아 일본 벚꽃 여행 특별 이벤트를 진행합니다. 3월 한정으로 특별 할인과 혜택이 제공됩니다.",
      date: "2024-03-01",
      type: "이벤트",
      isImportant: true,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">공지사항</h1>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${
              notice.isImportant ? "border-l-4 border-red-500" : ""
            }`}
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    notice.type === "공지"
                      ? "bg-blue-100 text-blue-800"
                      : notice.type === "업데이트"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {notice.type}
                </span>
                <span className="text-sm text-gray-500">{notice.date}</span>
                {notice.isImportant && (
                  <span className="text-sm text-red-500">중요</span>
                )}
              </div>

              <h2 className="text-xl font-bold mb-2">{notice.title}</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {notice.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
