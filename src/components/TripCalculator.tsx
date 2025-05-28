"use client";

import { useState, useEffect } from "react";

const DESTINATIONS = [
  { id: "tokyo", name: "도쿄", country: "일본" },
  { id: "osaka", name: "오사카", country: "일본" },
  { id: "fukuoka", name: "후쿠오카", country: "일본" },
  { id: "sapporo", name: "삿포로", country: "일본" },
];

export default function TripCalculator() {
  const [destination, setDestination] = useState("");
  const [nights, setNights] = useState(3);
  const [includeWeekend, setIncludeWeekend] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState({
    hotel: 0,
    food: 0,
    transportation: 0,
    total: 0,
  });

  // 환율 정보 가져오기 (실제로는 API를 사용해야 합니다)
  useEffect(() => {
    // 임시 환율 데이터
    setExchangeRate(9.5); // 1엔 = 9.5원 가정
  }, []);

  // 비용 계산 함수
  const calculateCost = () => {
    if (!destination) return;

    // 임시 비용 데이터 (실제로는 DB나 API에서 가져와야 합니다)
    const baseCosts = {
      tokyo: { hotel: 15000, food: 8000, transportation: 5000 },
      osaka: { hotel: 12000, food: 7000, transportation: 4000 },
      fukuoka: { hotel: 10000, food: 6000, transportation: 3000 },
      sapporo: { hotel: 13000, food: 7000, transportation: 4000 },
    };

    const base = baseCosts[destination as keyof typeof baseCosts];
    const weekendMultiplier = includeWeekend ? 1.2 : 1;

    const hotel = base.hotel * nights * weekendMultiplier;
    const food = base.food * nights;
    const transportation = base.transportation * nights;
    const total = (hotel + food + transportation) * exchangeRate;

    setEstimatedCost({
      hotel: Math.round(hotel * exchangeRate),
      food: Math.round(food * exchangeRate),
      transportation: Math.round(transportation * exchangeRate),
      total: Math.round(total),
    });
  };

  useEffect(() => {
    calculateCost();
  }, [destination, nights, includeWeekend, exchangeRate]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              여행지 선택
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">여행지를 선택하세요</option>
              {DESTINATIONS.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name} ({dest.country})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              숙박 일수
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="weekend"
              checked={includeWeekend}
              onChange={(e) => setIncludeWeekend(e.target.checked)}
              className="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label htmlFor="weekend" className="ml-2 text-sm text-gray-700">
              주말 포함
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">예상 비용 (원)</h3>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>숙박비:</span>
              <span>{estimatedCost.hotel.toLocaleString()}원</span>
            </p>
            <p className="flex justify-between">
              <span>식비:</span>
              <span>{estimatedCost.food.toLocaleString()}원</span>
            </p>
            <p className="flex justify-between">
              <span>교통비:</span>
              <span>{estimatedCost.transportation.toLocaleString()}원</span>
            </p>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <p className="flex justify-between font-semibold">
                <span>총 예상 비용:</span>
                <span>{estimatedCost.total.toLocaleString()}원</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        * 현재 적용 환율: 1엔 = {exchangeRate}원
        <br />
        * 주말 포함 시 숙박비 20% 할증
        <br />* 실제 비용은 시즌과 환율에 따라 달라질 수 있습니다.
      </div>
    </div>
  );
}
