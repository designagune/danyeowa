"use client";

export default function ProfilePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">프로필</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-bold">사용자</h2>
            <p className="text-gray-600">여행 초보자</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">여행 통계</h3>
            <div className="space-y-2">
              <p>총 여행 횟수: 1회</p>
              <p>예정된 여행: 2회</p>
              <p>방문한 국가: 1개국</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">선호 여행 스타일</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                관광
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                맛집
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                문화체험
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">설정</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>알림 설정</span>
            <button className="w-12 h-6 bg-blue-500 rounded-full relative">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>다크 모드</span>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative">
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
