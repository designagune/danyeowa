"use client";

export default function GuidePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">여행 가이드</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">🎌 일본 여행 가이드</h2>
          <p className="text-gray-600 mb-4">
            일본 여행에 필요한 모든 정보를 한눈에
          </p>
          <button className="text-blue-500 hover:text-blue-700">
            자세히 보기 →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">🇰🇷 국내 여행 가이드</h2>
          <p className="text-gray-600 mb-4">우리나라 구석구석 여행 정보</p>
          <button className="text-blue-500 hover:text-blue-700">
            자세히 보기 →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">🌏 동남아 여행 가이드</h2>
          <p className="text-gray-600 mb-4">동남아시아 인기 여행지 정보</p>
          <button className="text-blue-500 hover:text-blue-700">
            자세히 보기 →
          </button>
        </div>
      </div>
    </div>
  );
}
