"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const RECOMMENDED_PLACES = [
  {
    id: 1,
    name: "도쿄 디즈니랜드",
    description: "꿈과 모험이 가득한 테마파크",
    image: "/places/disney.jpg",
    price: "150,000",
    rating: 4.8,
  },
  {
    id: 2,
    name: "오사카 도톤보리",
    description: "맛있는 음식의 천국",
    image: "/places/dotonbori.jpg",
    price: "100,000",
    rating: 4.5,
  },
  {
    id: 3,
    name: "후쿠오카 캐널시티",
    description: "쇼핑과 엔터테인먼트의 중심지",
    image: "/places/canal.jpg",
    price: "80,000",
    rating: 4.3,
  },
  {
    id: 4,
    name: "삿포로 맥주 박물관",
    description: "일본 맥주의 역사와 문화",
    image: "/places/sapporo.jpg",
    price: "70,000",
    rating: 4.2,
  },
];

export default function RecommendedPlaces() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === RECOMMENDED_PLACES.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === RECOMMENDED_PLACES.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? RECOMMENDED_PLACES.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gray-100">
      {/* 슬라이더 컨테이너 */}
      <div
        className="relative h-[400px] flex transition-transform duration-500 ease-out"
        style={{
          width: `${RECOMMENDED_PLACES.length * 100}%`,
          transform: `translateX(-${
            (currentIndex * 100) / RECOMMENDED_PLACES.length
          }%)`,
        }}
      >
        {RECOMMENDED_PLACES.map((place) => (
          <div
            key={place.id}
            className="relative w-full h-full"
            style={{ width: `${100 / RECOMMENDED_PLACES.length}%` }}
          >
            <div className="relative w-full h-full">
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={place.id === 1}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {place.name}
                </h3>
                <p className="mb-2 text-white/90">{place.description}</p>
                <div className="flex justify-between items-center text-white">
                  <span className="text-lg font-semibold">
                    1인 예상 비용: {place.price}원
                  </span>
                  <div className="flex items-center bg-black/30 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{place.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white/75 rounded-full transition-colors z-10"
        aria-label="이전 슬라이드"
      >
        <span className="text-2xl">←</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white/75 rounded-full transition-colors z-10"
        aria-label="다음 슬라이드"
      >
        <span className="text-2xl">→</span>
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {RECOMMENDED_PLACES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`${index + 1}번 슬라이드로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
