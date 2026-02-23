import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RiskManagement() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">리스크 관리 (악마의 변호사)</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          이 구조에서 가장 흔한 실패 원인은 광고가 아니라 <strong>운영</strong>입니다. 
          제안서에 리스크 방어책을 명확히 박아두어 신뢰를 확보합니다.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <ShieldAlert className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">흔한 실패 원인과 방어책</h2>
        </div>

        <div className="space-y-6">
          <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <AlertTriangle size={18} /> 리스크 1
              </div>
              <h3 className="font-bold text-slate-900 mb-2">영업팀이 빠르게 연락 안 함</h3>
              <p className="text-sm text-slate-600">리드가 식어버려 CPL을 아무리 낮춰도 최종 계약으로 이어지지 않습니다.</p>
            </div>
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <CheckCircle size={18} /> 방어책
              </div>
              <p className="text-sm text-slate-700"><strong>SLA 강제:</strong> 리드 접수 후 10분 내 1차 콜 룰을 설정하고 CRM 대시보드로 위반 사항을 모니터링합니다.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <AlertTriangle size={18} /> 리스크 2
              </div>
              <h3 className="font-bold text-slate-900 mb-2">상태코드 피드백 없음</h3>
              <p className="text-sm text-slate-600">최적화가 CPL에서 멈춰서 "싸고 질 낮은 리드"만 늘어납니다.</p>
            </div>
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <CheckCircle size={18} /> 방어책
              </div>
              <p className="text-sm text-slate-700"><strong>입력 의무화:</strong> 최소한 예약/방문/계약 상태코드 입력을 의무화하여 CPA 기반 최적화 루프를 완성합니다.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <AlertTriangle size={18} /> 리스크 3
              </div>
              <h3 className="font-bold text-slate-900 mb-2">플랫폼 리드폼 무분별 사용</h3>
              <p className="text-sm text-slate-600">품질 관리 없이 리드폼만 쓰면 허수 리드가 폭발하여 영업팀이 광고를 불신하게 됩니다.</p>
            </div>
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <CheckCircle size={18} /> 방어책
              </div>
              <p className="text-sm text-slate-700"><strong>유효리드 기준 명시:</strong> 중복/결번/스팸 제외 기준을 명확히 하고, 접수 즉시 자동 문자로 1차 필터링을 수행합니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">제안서 필수 전제 조건</h2>
        <ul className="space-y-3 text-slate-300 list-disc list-inside">
          <li>영업팀 SLA 준수 (최소한의 KPI로 묶기)</li>
          <li>상태코드 입력 의무 (성과 측정용)</li>
          <li>개인정보 처리 역할/책임 명확화 (수집·보관·파기 주체)</li>
          <li>유효리드 기준 정의 (분쟁 예방)</li>
          <li>콘텐츠 제공 일정 협의 (최소한의 문구/로고 사전 제공)</li>
        </ul>
      </div>
    </div>
  );
}
