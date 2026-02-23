import React from 'react';
import { Activity, BarChart2, Clock, CheckSquare } from 'lucide-react';

export default function Operation() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">운영 프로세스 및 트래킹</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          광고 대행의 실력 차이는 트래킹과 운영에서 납니다. 
          <strong>"우리가 빠지는 구조"</strong>를 만들기 위한 명확한 룰과 피드백 루프를 세팅합니다.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* 운영 프로세스 룰 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <CheckSquare className="text-emerald-600" size={24} />
            <h2 className="text-xl font-bold text-slate-900">영업 운영 프로세스 (SLA)</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            냉정하게, 영업팀이 빨리 연락 안 하면 광고비는 그냥 타버립니다. 제안서에 다음을 "운영 표준"으로 박아야 합니다.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
              <Clock className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <div className="font-bold text-slate-900 text-sm">SLA: 10분 내 1차 콜</div>
                <div className="text-xs text-slate-500 mt-1">리드 접수 후 10분 이내 연락을 원칙으로 합니다.</div>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
              <Activity className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <div className="font-bold text-slate-900 text-sm">부재 시 재콜 룰</div>
                <div className="text-xs text-slate-500 mt-1">당일 2회 + 익일 1회 등 명확한 재접촉 시퀀스 적용</div>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
              <CheckSquare className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <div>
                <div className="font-bold text-slate-900 text-sm">유효리드 기준 명시</div>
                <div className="text-xs text-slate-500 mt-1">중복/결번/욕설 제외, 동일인 7일 내 중복 제외 등 기준 확립</div>
              </div>
            </li>
          </ul>
        </div>

        {/* 트래킹 및 데이터 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <BarChart2 className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-slate-900">트래킹 및 데이터 측정</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            광고 운영이 잘 되려면, CRM이 "결과"를 돌려줘야 합니다. CPA에 가까운 최적화를 위한 세팅입니다.
          </p>
          <ul className="space-y-4 text-sm text-slate-700">
            <li className="border-b border-slate-100 pb-3">
              <strong className="text-slate-900 block mb-1">필수 세팅</strong>
              UTM 규격 통일, 픽셀/전환 이벤트(ViewContent, Lead, Contact), 콜트래킹 번호
            </li>
            <li className="border-b border-slate-100 pb-3">
              <strong className="text-slate-900 block mb-1">오프라인 전환 피드백</strong>
              CRM 상태코드 중 '예약/방문/계약'을 채널별로 집계하여 광고 플랫폼에 피드백
            </li>
            <li className="pb-3">
              <strong className="text-slate-900 block mb-1">개인정보/법적 이슈 대응</strong>
              동의 문구, 보관기간, 제3자 제공 명시. DB 보관 위치 및 권한 관리 철저
            </li>
          </ul>
        </div>
      </div>

      {/* 주간 운영 리듬 */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Activity className="text-blue-400" size={24} />
          주간 운영 리듬 (1년 내내 동일하게 반복)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="font-bold text-blue-300 mb-2">월요일</div>
            <div className="text-sm text-slate-300">지난주 데이터 리뷰(30분) + 이번주 실험 1개 선정 (소재/랜딩/타겟)</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10 sm:col-span-2">
            <div className="font-bold text-blue-300 mb-2">화 ~ 목요일</div>
            <div className="text-sm text-slate-300">캠페인 집행 / 실시간 모니터링 / 소재 교체 및 A/B 테스트 진행</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="font-bold text-blue-300 mb-2">금요일</div>
            <div className="text-sm text-slate-300">영업 피드백 회수(상태코드, 연결률) + 다음주 액션 확정</div>
          </div>
        </div>
      </div>
    </div>
  );
}
