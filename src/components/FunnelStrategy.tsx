import React from 'react';
import { MonitorPlay, Search, MousePointerClick, Briefcase, RefreshCw } from 'lucide-react';

export default function FunnelStrategy() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">퍼널 전략 및 채널 믹스</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          채널을 "다 한다"가 아니라 <strong>각 채널의 역할을 고정</strong>해야 학습이 쌓입니다. 
          전단지(노출) - 매장 앞 유동(방문) - 명함 받기(리드) - 상담 테이블(영업)의 구조를 명확히 합니다.
        </p>
      </section>

      <div className="space-y-8">
        {/* A. 노출/인지 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <MonitorPlay size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-blue-600 tracking-wider uppercase">Step 1. Awareness</div>
              <h2 className="text-2xl font-bold text-slate-900">노출 / 인지</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">목적 및 KPI</h3>
              <p className="text-slate-600 text-sm mb-4">"이 사업지가 존재한다"를 반복 노출하여 초기 관심층 풀을 생성하고 리타겟 모수를 확보합니다.</p>
              <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 font-medium">
                KPI: CPM / 도달 / 빈도(주당 3~7회) / 영상시청률(VTR) / 랜딩 유입단가(CPC)
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3">주요 채널 및 방법론</h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li><strong>유튜브:</strong> 인스트림/범퍼/쇼츠. 반경 지역 + 관심 도달</li>
                <li><strong>메타 (IG/FB):</strong> 라이프 이벤트/관심사 기반 확산</li>
                <li><strong>카카오/네이버 GFA:</strong> 지역 생활권 도달 + 클릭 리타겟 모수</li>
                <li><strong>방법론:</strong> 6초/15초 영상, 카드형으로 인지 신호 쌓기. 조회/체류/클릭 기준으로 리타겟 풀 단계화</li>
              </ul>
            </div>
          </div>
        </div>

        {/* B. 방문/관심 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <Search size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-indigo-600 tracking-wider uppercase">Step 2. Consideration</div>
              <h2 className="text-2xl font-bold text-slate-900">방문 / 관심</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">목적 및 KPI</h3>
              <p className="text-slate-600 text-sm mb-4">'사업지 검색/비교/검토' 단계의 고의도 트래픽을 랜딩으로 끌어옵니다.</p>
              <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 font-medium">
                KPI: 세션당 체류 / 스크롤 / 핵심 CTA 클릭률 / 리타겟 전환율 / CPL
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3">주요 채널 및 방법론</h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li><strong>네이버/구글 검색광고:</strong> 분양에서 가장 강한 축</li>
                <li><strong>커뮤니티/콘텐츠:</strong> 블로그, 지역 맘카페, 부동산 앱</li>
                <li><strong>방법론:</strong> 키워드 3단 구조 (1.브랜드 2.지역+분양 3.니즈). 랜딩은 정보 페이지가 아닌 리드 전환용으로 설계</li>
              </ul>
            </div>
          </div>
        </div>

        {/* C. 리드 획득 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <MousePointerClick size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-emerald-600 tracking-wider uppercase">Step 3. Conversion</div>
              <h2 className="text-2xl font-bold text-slate-900">리드 획득</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">목적 및 KPI</h3>
              <p className="text-slate-600 text-sm mb-4">상담/방문 예약이 가능한 '연락처 확보' 및 개인정보 동의 적법 처리</p>
              <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 font-medium">
                KPI: CPL / 리드 유효율(중복/결번 제외) / 응대 속도(SLA) / 예약 전환율
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3">주요 채널 및 방법론</h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li><strong>웹 기반:</strong> 자체 랜딩 폼, 전화/문자 클릭 전환</li>
                <li><strong>플랫폼 리드폼:</strong> 메타 Lead Ads, 카카오 톡상담</li>
                <li><strong>방법론:</strong> 폼 필드 최소화. 리드 품질 보정은 "후속 자동 질문"으로. 중복/허위 리드 방지 필터 적용</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 리타겟 및 영업지원 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="text-purple-600" size={20} />
              <h3 className="text-lg font-bold text-slate-900">리타겟 / 재유입 (Nurture)</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">CPL을 떨어뜨리는 핵심 레버. 따라다니기가 아니라 메시지를 바꾸는 것이 핵심입니다.</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li><strong>메타 리타겟:</strong> FAQ 반박, 방문예약 강조</li>
              <li><strong>구글/유튜브 리타겟:</strong> 6초 범퍼 리마인드 + 15초 베네핏</li>
              <li><strong>네이버 GFA 리타겟:</strong> 전환 전용 배너 반복</li>
            </ul>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-orange-600" size={20} />
              <h3 className="text-lg font-bold text-slate-900">오프라인 영업 전환 지원</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">영업팀이 표준 프로세스로 움직이게 만들기 위한 필수 구성입니다.</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>리드 전달 규격 통일 (CRM/구글시트)</li>
              <li>리드 상태 코드 표준화 (접수/연결/예약/방문 등)</li>
              <li>응대 스크립트 1장 + 반박처리 FAQ 1장</li>
              <li>SLA: 리드 접수 후 10분 내 1차 콜</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
