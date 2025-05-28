"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

type DestinationType = "도쿄" | "오사카" | "교토" | "후쿠오카";
type FlightClassType = "이코노미" | "비즈니스" | "퍼스트";

interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

interface RecommendedTrip {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
  highlights: string[];
}

export default function HomePage() {
  const [duration, setDuration] = useState(1);
  const [people, setPeople] = useState(1);
  const [destination, setDestination] = useState<DestinationType>("도쿄");
  const [isWeekend, setIsWeekend] = useState(false);
  const [flightClass, setFlightClass] = useState<FlightClassType>("이코노미");

  const calculateCosts = () => {
    const baseCosts = {
      도쿄: {
        hotel: 150000,
        food: 80000,
        transport: 50000,
        flight: {
          이코노미: 400000,
          비즈니스: 1200000,
          퍼스트: 2000000,
        },
      },
      오사카: {
        hotel: 120000,
        food: 70000,
        transport: 40000,
        flight: {
          이코노미: 350000,
          비즈니스: 1000000,
          퍼스트: 1800000,
        },
      },
      교토: {
        hotel: 130000,
        food: 60000,
        transport: 45000,
        flight: {
          이코노미: 350000,
          비즈니스: 1000000,
          퍼스트: 1800000,
        },
      },
      후쿠오카: {
        hotel: 100000,
        food: 50000,
        transport: 35000,
        flight: {
          이코노미: 300000,
          비즈니스: 900000,
          퍼스트: 1500000,
        },
      },
    } as const;

    const costs = baseCosts[destination];
    const weekendMultiplier = isWeekend ? 1.3 : 1;

    return {
      hotel: costs.hotel * duration * weekendMultiplier,
      food: costs.food * duration * people,
      transport: costs.transport * people,
      flight: costs.flight[flightClass] * people,
    };
  };

  const costs = calculateCosts();
  const totalCost = costs.hotel + costs.food + costs.transport + costs.flight;

  const popularDestinations: Destination[] = [
    {
      id: 1,
      name: "도쿄",
      description: "현대와 전통이 공존하는 일본의 수도",
      imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      rating: 4.8,
      reviewCount: 1242,
      tags: ["도시", "쇼핑", "음식"],
    },
    {
      id: 2,
      name: "교토",
      description: "천년 고도의 아름다움을 간직한 도시",
      imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      rating: 4.9,
      reviewCount: 892,
      tags: ["전통", "문화", "절"],
    },
    {
      id: 3,
      name: "오사카",
      description: "맛있는 음식과 즐거움이 가득한 도시",
      imageUrl: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e",
      rating: 4.7,
      reviewCount: 1024,
      tags: ["음식", "쇼핑", "놀이공원"],
    },
    {
      id: 4,
      name: "후쿠오카",
      description: "일본의 관문, 쇼핑과 맛집의 천국",
      imageUrl: "https://images.unsplash.com/photo-1575862924838-c166e3814df7",
      rating: 4.6,
      reviewCount: 645,
      tags: ["라멘", "쇼핑", "온천"],
    },
  ];

  const recommendedTrips: RecommendedTrip[] = [
    {
      id: 1,
      title: "도쿄 벚꽃 여행",
      description:
        "봄의 정취가 가득한 도쿄에서 로맨틱한 벚꽃 여행을 즐겨보세요. 우에노 공원의 벚꽃 터널과 메구로 강변의 야간 벚꽃 라이트업, 신주쿠 교엔의 평화로운 풍경을 만끽할 수 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
      price: "890,000원~",
      duration: "3박 4일",
      highlights: [
        "우에노 공원 벚꽃 터널",
        "메구로 강 야간 벚꽃",
        "신주쿠 교엔",
        "아사쿠사 산책",
      ],
    },
    {
      id: 2,
      title: "오사카 맛집 투어",
      description:
        "일본 최고의 미식 도시 오사카에서 즐기는 특별한 식도락 여행. 도톤보리의 화려한 맛집 거리부터 구로몬 시장의 신선한 해산물까지, 오사카의 모든 맛을 경험해보세요.",
      imageUrl: "https://images.unsplash.com/photo-1542931287-023b922fa89b",
      price: "790,000원~",
      duration: "2박 3일",
      highlights: [
        "도톤보리 맛집 거리",
        "구로몬 시장",
        "신사이바시",
        "타코야키 체험",
      ],
    },
    {
      id: 3,
      title: "교토 고즈넉 여행",
      description:
        "천년 고도 교토에서 일본의 전통과 역사를 느껴보세요. 아름다운 일본 정원, 고즈넉한 절과 신사, 전통 있는 기모노 체험까지 교토만의 특별한 매력을 만날 수 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      price: "990,000원~",
      duration: "4박 5일",
      highlights: [
        "기요미즈데라",
        "후시미이나리 신사",
        "아라시야마 대나무 숲",
        "기모노 체험",
      ],
    },
    {
      id: 4,
      title: "후쿠오카 온천 여행",
      description:
        "규슈의 관문 후쿠오카에서 즐기는 힐링 온천 여행. 유명 온천 료칸에서의 숙박과 함께 신선한 해산물, 유명한 라멘까지 즐겨보세요.",
      imageUrl: "https://images.unsplash.com/photo-1575862924838-c166e3814df7",
      price: "690,000원~",
      duration: "2박 3일",
      highlights: ["유후인 온천", "벳부 온천", "하카타 라멘", "캐널시티"],
    },
    {
      id: 5,
      title: "도쿄 디즈니 패키지",
      description:
        "도쿄 디즈니랜드와 디즈니씨를 모두 즐기는 완벽한 테마파크 여행. 디즈니 호텔 숙박과 패스트패스 이용으로 더욱 특별한 추억을 만들어보세요.",
      imageUrl: "https://images.unsplash.com/photo-1584282617200-32f377e493ef",
      price: "1,290,000원~",
      duration: "4박 5일",
      highlights: [
        "디즈니랜드 1일권",
        "디즈니씨 1일권",
        "디즈니 호텔",
        "쇼핑 투어",
      ],
    },
    {
      id: 6,
      title: "홋카이도 겨울 여행",
      description:
        "새하얀 설경이 펼쳐지는 홋카이도에서 즐기는 완벽한 겨울 여행. 삿포로 눈축제, 오타루의 로맨틱한 운하, 스키장까지 겨울 왕국을 만끽해보세요.",
      imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
      price: "1,190,000원~",
      duration: "5박 6일",
      highlights: ["삿포로 눈축제", "오타루 운하", "니세코 스키", "온천 료칸"],
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-8 md:space-y-12">
      {/* 히어로 섹션 */}
      <section className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542051841857-5f90071e7989"
          alt="일본 여행"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="text-white p-12">
            <h1 className="text-5xl font-bold mb-4">일본 여행의 모든 것</h1>
            <p className="text-xl mb-8">
              지금 &apos;다녀와&apos;에서 함께 여행을 계획해보세요
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              여행 계획하기
            </button>
          </div>
        </div>
      </section>

      {/* 여행 계산기 섹션 */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">여행 비용 계산기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">여행지</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={destination}
                onChange={(e) =>
                  setDestination(e.target.value as DestinationType)
                }
              >
                <option>도쿄</option>
                <option>오사카</option>
                <option>교토</option>
                <option>후쿠오카</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">여행 기간 (일)</span>
              <input
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="숙박 일수"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">인원 (명)</span>
              <input
                type="number"
                min="1"
                value={people}
                onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="여행 인원"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">항공권 등급</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={flightClass}
                onChange={(e) =>
                  setFlightClass(e.target.value as FlightClassType)
                }
              >
                <option>이코노미</option>
                <option>비즈니스</option>
                <option>퍼스트</option>
              </select>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isWeekend}
                onChange={(e) => setIsWeekend(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 shadow-sm"
              />
              <span className="text-gray-700">주말 여행</span>
            </label>
          </div>
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">예상 비용</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>
                  숙박비{" "}
                  {isWeekend && (
                    <span className="text-red-500 text-sm">
                      (주말 30% 할증)
                    </span>
                  )}
                </span>
                <span>{Math.round(costs.hotel).toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span>식비</span>
                <span>{costs.food.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span>교통비</span>
                <span>{costs.transport.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span>항공권 ({flightClass})</span>
                <span>{costs.flight.toLocaleString()} 원</span>
              </div>
              <div className="border-t pt-2 mt-4 flex justify-between font-bold">
                <span>총 예상 비용</span>
                <span>{totalCost.toLocaleString()} 원</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 여행 슬라이드 */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">추천 여행</h2>
          <Link
            href="/recommendations"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            더 보기 →
          </Link>
        </div>
        <div className="h-[450px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="h-full rounded-xl"
          >
            {recommendedTrips.map((trip) => (
              <SwiperSlide key={trip.id}>
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-[250px]">
                    <Image
                      src={trip.imageUrl}
                      alt={trip.title}
                      fill
                      unoptimized
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {trip.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue-600 font-semibold">
                        {trip.price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {trip.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {trip.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <span className="text-blue-500 mr-2">•</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 인기 여행지 섹션 */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">인기 여행지</h2>
          <Link
            href="/popular"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            더 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={destination.imageUrl}
                  alt={destination.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{destination.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {destination.description}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm font-medium">
                      {destination.rating}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    ({destination.reviewCount}개 리뷰)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
