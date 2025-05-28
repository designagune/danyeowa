"use client";

import { useState } from "react";

interface Schedule {
  id: number;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  participants: number;
  budget: string;
  status: "계획중" | "확정" | "완료";
  memo: string;
}

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: 1,
      title: "도쿄 여행",
      destination: "도쿄",
      startDate: "2024-05-01",
      endDate: "2024-05-05",
      participants: 2,
      budget: "1,500,000",
      status: "계획중",
      memo: "골든위크 기간, 호텔 예약 필요",
    },
  ]);

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newSchedule, setNewSchedule] = useState<Partial<Schedule>>({
    title: "",
    destination: "",
    startDate: "",
    endDate: "",
    participants: 1,
    budget: "",
    status: "계획중",
    memo: "",
  });

  const handleAddSchedule = () => {
    if (
      !newSchedule.title ||
      !newSchedule.destination ||
      !newSchedule.startDate ||
      !newSchedule.endDate
    ) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    setSchedules([
      ...schedules,
      {
        ...(newSchedule as Schedule),
        id: Math.max(0, ...schedules.map((s) => s.id)) + 1,
      },
    ]);
    setIsAddingNew(false);
    setNewSchedule({
      title: "",
      destination: "",
      startDate: "",
      endDate: "",
      participants: 1,
      budget: "",
      status: "계획중",
      memo: "",
    });
  };

  const handleDeleteSchedule = (id: number) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      setSchedules(schedules.filter((schedule) => schedule.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">여행 일정</h1>
        <button
          onClick={() => setIsAddingNew(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          + 새 일정 추가
        </button>
      </div>

      {isAddingNew && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 animate-fadeIn">
          <h2 className="text-xl font-bold mb-4">새 여행 일정 추가</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                여행 제목 *
              </label>
              <input
                type="text"
                value={newSchedule.title}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, title: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="예: 도쿄 여행"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                여행지 *
              </label>
              <input
                type="text"
                value={newSchedule.destination}
                onChange={(e) =>
                  setNewSchedule({
                    ...newSchedule,
                    destination: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="예: 도쿄"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                출발일 *
              </label>
              <input
                type="date"
                value={newSchedule.startDate}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, startDate: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                도착일 *
              </label>
              <input
                type="date"
                value={newSchedule.endDate}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, endDate: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                인원
              </label>
              <input
                type="number"
                value={newSchedule.participants}
                onChange={(e) =>
                  setNewSchedule({
                    ...newSchedule,
                    participants: parseInt(e.target.value),
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                예산 (원)
              </label>
              <input
                type="text"
                value={newSchedule.budget}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, budget: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="예: 1,500,000"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                메모
              </label>
              <textarea
                value={newSchedule.memo}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, memo: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={3}
                placeholder="추가 메모사항을 입력하세요"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setIsAddingNew(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              취소
            </button>
            <button
              onClick={handleAddSchedule}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              저장
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">{schedule.title}</h3>
                <p className="text-gray-600">{schedule.destination}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    schedule.status === "계획중"
                      ? "bg-yellow-100 text-yellow-800"
                      : schedule.status === "확정"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {schedule.status}
                </span>
                <button
                  onClick={() => handleDeleteSchedule(schedule.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">여행 기간</p>
                <p className="font-medium">
                  {schedule.startDate} ~ {schedule.endDate}
                </p>
              </div>
              <div>
                <p className="text-gray-600">인원</p>
                <p className="font-medium">{schedule.participants}명</p>
              </div>
              <div>
                <p className="text-gray-600">예산</p>
                <p className="font-medium">{schedule.budget}원</p>
              </div>
            </div>

            {schedule.memo && (
              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <p className="text-gray-600 text-sm">{schedule.memo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
