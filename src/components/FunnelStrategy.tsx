import React from 'react';
import { MonitorPlay, Search, MousePointerClick, Briefcase, RefreshCw, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function FunnelStrategy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="relative">
        <div className="absolute top-0 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">퍼널 전략 및 <span className="text-blue-600">채널 믹스</span></h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
          채널을 "다 한다"가 아니라 <strong>각 채널의 역할을 고정</strong>해야 학습이 쌓입니다. 
          <br className="hidden md:block" />
          <span className="inline-block mt-2 px-3 py-1 bg-slate-100 rounded-lg text-slate-700 font-medium text-sm">전단지(노출) → 매장 앞 유동(방문) → 명함 받기(리드) → 상담 테이블(영업)</span> 의 구조를 명확히 합니다.
        </p>
      </motion.section>

      <div className="space-y-6 relative">
        {/* Connecting Line for Funnel */}
        <div className="hidden md:block absolute left-12 top-24 bottom-32 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-emerald-200 -z-10 rounded-full"></div>

        {/* A. 노출/인지 */}
        <motion.div variants={itemVariants} className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-blue-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <MonitorPlay size={28} />
                </div>
                <div>
                  <div className="text-xs font-black text-blue-500 tracking-widest uppercase mb-1">Step 1. Awareness</div>
                  <h2 className="text-2xl font-bold text-slate-900">노출 / 인지</h2>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">"이 사업지가 존재한다"를 반복 노출하여 초기 관심층 풀을 생성하고 리타겟 모수를 확보합니다.</p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  목적 및 KPI
                </h3>
                <div className="text-sm text-slate-700 font-medium leading-relaxed">
                  CPM / 도달 / 빈도(주당 3~7회) / 영상시청률(VTR) / 랜딩 유입단가(CPC)
                </div>
              </div>
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  주요 채널
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-400">•</span> 유튜브 (인스트림/범퍼/쇼츠)</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> 메타 (IG/FB 라이프 이벤트)</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span> 카카오/네이버 GFA</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:flex justify-center -my-2 text-slate-300 relative z-10">
          <div className="bg-slate-50 p-1 rounded-full"><ArrowDown size={20} /></div>
        </div>

        {/* B. 방문/관심 */}
        <motion.div variants={itemVariants} className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-indigo-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                  <Search size={28} />
                </div>
                <div>
                  <div className="text-xs font-black text-indigo-500 tracking-widest uppercase mb-1">Step 2. Consideration</div>
                  <h2 className="text-2xl font-bold text-slate-900">방문 / 관심</h2>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">'사업지 검색/비교/검토' 단계의 고의도 트래픽을 랜딩으로 끌어옵니다.</p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  목적 및 KPI
                </h3>
                <div className="text-sm text-slate-700 font-medium leading-relaxed">
                  세션당 체류 / 스크롤 / 핵심 CTA 클릭률 / 리타겟 전환율 / CPL
                </div>
              </div>
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  주요 채널
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-indigo-400">•</span> 네이버/구글 검색광고</li>
                  <li className="flex gap-2"><span className="text-indigo-400">•</span> 커뮤니티/콘텐츠 (블로그, 카페)</li>
                  <li className="flex gap-2"><span className="text-indigo-400">•</span> 키워드 3단 구조 설계</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:flex justify-center -my-2 text-slate-300 relative z-10">
          <div className="bg-slate-50 p-1 rounded-full"><ArrowDown size={20} /></div>
        </div>

        {/* C. 리드 획득 */}
        <motion.div variants={itemVariants} className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-emerald-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                  <MousePointerClick size={28} />
                </div>
                <div>
                  <div className="text-xs font-black text-emerald-500 tracking-widest uppercase mb-1">Step 3. Conversion</div>
                  <h2 className="text-2xl font-bold text-slate-900">리드 획득</h2>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">상담/방문 예약이 가능한 '연락처 확보' 및 개인정보 동의 적법 처리</p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  목적 및 KPI
                </h3>
                <div className="text-sm text-slate-700 font-medium leading-relaxed">
                  CPL / 리드 유효율(중복/결번 제외) / 응대 속도(SLA) / 예약 전환율
                </div>
              </div>
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  주요 채널
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-emerald-400">•</span> 웹 기반 자체 랜딩 폼</li>
                  <li className="flex gap-2"><span className="text-emerald-400">•</span> 플랫폼 리드폼 (메타, 카카오)</li>
                  <li className="flex gap-2"><span className="text-emerald-400">•</span> 폼 필드 최소화 및 자동화</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 리타겟 및 영업지원 */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <RefreshCw className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold">리타겟 / 재유입 (Nurture)</h3>
            </div>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">CPL을 떨어뜨리는 핵심 레버. 따라다니기가 아니라 메시지를 바꾸는 것이 핵심입니다.</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></div><span><strong>메타 리타겟:</strong> FAQ 반박, 방문예약 강조</span></li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></div><span><strong>구글/유튜브:</strong> 6초 범퍼 리마인드 + 15초 베네핏</span></li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></div><span><strong>네이버 GFA:</strong> 전환 전용 배너 반복</span></li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                <Briefcase className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-bold">오프라인 영업 전환 지원</h3>
            </div>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">영업팀이 표준 프로세스로 움직이게 만들기 위한 필수 구성입니다.</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div><span>리드 전달 규격 통일 (CRM/구글시트)</span></li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div><span>리드 상태 코드 표준화 (접수/연결/예약/방문 등)</span></li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div><span>응대 스크립트 1장 + 반박처리 FAQ 1장</span></li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div><span><strong className="text-orange-300">SLA:</strong> 리드 접수 후 10분 내 1차 콜</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
