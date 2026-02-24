import React from 'react';
import { Target, ArrowRight, CheckCircle2, Zap, BarChart3, Users, Filter, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function Overview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const steps = [
    { step: '1', title: '광고 채널', desc: '검색/디스플레이\n영상/SNS', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
    { step: '2', title: '외부 홈페이지', desc: '소개 + 랜딩\n폼/톡상담', icon: Target, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200' },
    { step: '3', title: '리드 수집/정제', desc: '중복/결번 필터\n동의 로그', icon: Filter, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { step: '4', title: 'CRM 자동 등록', desc: '담당자 배정\n상태코드', icon: Database, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200' },
    { step: '5', title: '영업팀 알림', desc: '실시간 알림\nSLA', icon: Users, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200' },
    { step: '6', title: '결과 피드백', desc: '코드 기반\n캠페인 최적화', icon: BarChart3, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  ];

  return (
    <motion.div 
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-20 right-10 w-60 h-60 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          프로젝트 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">개요 및 목표</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          단순한 광고 대행이 아닙니다. 노출부터 리드 수집, CRM 연동, 오프라인 영업 지원까지 파이프라인을 자동화하여 
          <strong className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-md ml-1">"대행사가 빠져도 계약이 늘어나는 분양 리드 엔진"</strong>을 구축합니다.
        </p>
        
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Target size={22} className="text-blue-600" />
            </div>
            목표 정의
          </h3>
          <ul className="space-y-5 text-slate-700">
            <motion.li whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-blue-600" />
              </div>
              <div>
                <strong className="text-slate-900 block mb-1 text-lg">목표</strong>
                <span className="text-slate-600">노출 → 홈페이지(랜딩) → 리드 획득 → (오프라인 영업팀) 상담/방문/계약</span>
              </div>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-indigo-600" />
              </div>
              <div>
                <strong className="text-slate-900 block mb-1 text-lg">대행 범위</strong>
                <span className="text-slate-600">디지털 캠페인 운영 + 랜딩 최적화 + 리드 획득/정제/전달 + 성과 리포팅</span>
              </div>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-purple-600" />
              </div>
              <div>
                <strong className="text-slate-900 block mb-1 text-lg">아웃 범위(원칙)</strong>
                <span className="text-slate-600">상담/계약은 오프라인 영업팀 수행. 단, “측정”을 위해 최소한의 피드백 루프(상담결과 코드 공유)는 필수.</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">전체 시스템 구조</h2>
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-amber-200 via-indigo-200 to-emerald-200 -z-10 rounded-full"></div>
            
            {steps.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center w-full md:w-auto relative group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-24 h-24 rounded-2xl ${item.bg} border ${item.border} flex flex-col items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute top-2 left-2 text-[10px] font-black text-slate-300/50">{item.step}</div>
                  <item.icon size={32} className={`${item.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base text-center mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 text-center whitespace-pre-line leading-relaxed">{item.desc}</p>
                
                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-4 text-slate-300">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-slate-300 border border-slate-700 shadow-lg flex items-start gap-4"
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <Zap size={20} className="text-blue-400" />
            </div>
            <div>
              <strong className="text-white text-lg block mb-1">핵심 포인트</strong>
              <p className="leading-relaxed">CRM이 단순 "리드 저장소"가 아니라 <strong className="text-blue-400">영업 행동을 강제하는 워크플로우</strong>여야 합니다. 리드가 유입되면 즉각적인 알림과 함께 SLA(Service Level Agreement) 기반의 후속 조치가 이루어지도록 설계합니다.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
