"use client";

import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "쉬움" | "보통" | "어려움";
  highlights: string[];
  tags: string[];
  imageUrl: string;
  price: string;
}

export default function RecommendationsPage() {
  const courses: Course[] = [
    {
      id: 1,
      title: "도쿄 3박 4일 벚꽃 여행",
      description: "봄에 떠나는 도쿄의 벚꽃 명소와 현지 맛집 탐방",
      duration: "3박 4일",
      difficulty: "쉬움",
      highlights: [
        "우에노 공원 벚꽃 구경",
        "아사쿠사 센소지 사원",
        "시부야 스크램블 교차로",
        "하라주쿠 다케시타 거리",
      ],
      tags: ["봄", "벚꽃", "도쿄", "맛집"],
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      price: "890,000원~",
    },
    {
      id: 2,
      title: "오사카 먹방 여행",
      description: "오사카의 유명 맛집들을 돌아보는 미식 여행",
      duration: "2박 3일",
      difficulty: "쉬움",
      highlights: [
        "도톤보리 먹거리 탐방",
        "구로몬 시장 방문",
        "오사카성 관광",
        "USJ 방문",
      ],
      tags: ["맛집", "오사카", "도톤보리"],
      imageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549",
      price: "690,000원~",
    },
    {
      id: 3,
      title: "큐슈 온천 여행",
      description: "일본 큐슈의 유명 온천들을 돌아보는 힐링 여행",
      duration: "4박 5일",
      difficulty: "보통",
      highlights: [
        "유후인 온천마을",
        "벳푸 지옥순례",
        "후쿠오카 캐널시티",
        "다자이후 텐만구",
      ],
      tags: ["온천", "큐슈", "힐링"],
      imageUrl: "https://images.unsplash.com/photo-1579634701077-e393c3157d8a",
      price: "990,000원~",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">추천 코스</h1>

      <div className="grid grid-cols-1 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-2/5 h-[300px] bg-gray-100">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={85}
                  priority={course.id === 1}
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                      {course.price}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm text-gray-500">
                      {course.duration}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        course.difficulty === "쉬움"
                          ? "bg-green-100 text-green-800"
                          : course.difficulty === "보통"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {course.difficulty}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">주요 코스</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-blue-500">•</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
