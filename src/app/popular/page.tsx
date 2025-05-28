"use client";

import { useState } from "react";
import Image from "next/image";

const POPULAR_PLACES = [
  {
    id: 1,
    name: "도쿄",
    country: "일본",
    rating: 4.8,
    reviewCount: 1242,
    description:
      "현대적인 도시의 매력과 전통적인 일본 문화가 공존하는 곳. 화려한 네온사인의 시부야부터 고즈넉한 아사쿠사까지, 다채로운 매력을 지닌 도시입니다.",
    highlights: [
      "시부야 스크램블 교차로",
      "아사쿠사 센소지",
      "도쿄 스카이트리",
      "하라주쿠",
    ],
    bestSeasons: ["봄", "가을"],
    averageCost: "150,000",
    currency: "원",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    tags: ["도시", "쇼핑", "음식", "문화"],
  },
  {
    id: 2,
    name: "오사카",
    country: "일본",
    rating: 4.7,
    reviewCount: 892,
    description:
      "일본의 부엌이라 불리는 미식의 도시. 화려한 도톤보리의 네온사인과 맛있는 음식, 친근한 사람들이 매력적인 곳입니다.",
    highlights: ["도톤보리", "오사카성", "유니버설 스튜디오", "구로몬 시장"],
    bestSeasons: ["봄", "가을"],
    averageCost: "120,000",
    currency: "원",
    imageUrl: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e",
    tags: ["음식", "쇼핑", "문화", "엔터테인먼트"],
  },
  {
    id: 3,
    name: "후쿠오카",
    country: "일본",
    rating: 4.6,
    reviewCount: 645,
    description:
      "규슈의 현관문이자 아시아와 가장 가까운 대도시. 유명한 라멘과 현대적인 쇼핑몰, 전통적인 사찰이 어우러진 매력적인 도시입니다.",
    highlights: ["캐널시티", "후쿠오카 타워", "오호리 공원", "하카타 역"],
    bestSeasons: ["봄", "가을"],
    averageCost: "100,000",
    currency: "원",
    imageUrl: "https://images.unsplash.com/photo-1575862924838-c166e3814df7",
    tags: ["음식", "쇼핑", "문화", "자연"],
  },
];

export default function PopularPlaces() {
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">인기 여행지</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_PLACES.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() =>
              setSelectedPlace(selectedPlace === place.id ? null : place.id)
            }
          >
            <div className="relative h-48">
              <Image
                src={place.imageUrl}
                alt={place.name}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                ★ {place.rating}
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">{place.name}</h3>
                  <p className="text-gray-600">{place.country}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {place.reviewCount} 리뷰
                </div>
              </div>

              <div className="flex gap-2 mb-3">
                {place.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedPlace === place.id && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <p className="text-gray-700">{place.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">주요 관광지</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {place.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t">
                    <div>
                      <p className="text-sm text-gray-600">추천 여행 시기</p>
                      <p className="font-semibold">
                        {place.bestSeasons.join(", ")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">평균 여행 비용</p>
                      <p className="font-semibold">
                        {place.averageCost} {place.currency}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
