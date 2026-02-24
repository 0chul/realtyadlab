import React from 'react';
import { Target, ArrowRight, CheckCircle2, Zap, BarChart3, Users, Filter, Database, RefreshCw } from 'lucide-react';
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Goal 1: Main Objective */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Target size={22} className="text-blue-600" />
              </div>
              목표 정의
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <strong className="text-slate-900 block mb-2 text-lg">핵심 파이프라인</strong>
                <p className="text-slate-600 leading-relaxed">
                  노출 → 홈페이지(랜딩) → 리드 획득 → (오프라인 영업팀) 상담/방문/계약
                </p>
              </div>
              <div className="w-px bg-slate-100 hidden sm:block"></div>
              <div className="flex-1">
                <strong className="text-slate-900 block mb-2 text-lg">최종 성과</strong>
                <p className="text-slate-600 leading-relaxed">
                  단순 리드 숫자가 아닌, 실제 <span className="text-blue-600 font-bold">계약 전환율</span>을 최우선 지표로 관리합니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Goal 2: Scope */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Zap size={22} className="text-white" />
              </div>
              대행 범위
            </h3>
            <ul className="space-y-3 text-blue-100 text-sm relative z-10">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-300" /> 디지털 캠페인 운영
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-300" /> 랜딩 페이지 최적화
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-300" /> 리드 정제 및 전달
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-300" /> 실시간 성과 리포팅
              </li>
            </ul>
          </motion.div>

          {/* Goal 3: Out of Scope */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900 rounded-3xl p-8 text-slate-300 shadow-xl shadow-slate-900/20 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-0 -translate-x-1/2 translate-y-1/2"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                <Users size={22} className="text-slate-400" />
              </div>
              아웃 범위
            </h3>
            <p className="text-sm leading-relaxed relative z-10">
              상담 및 계약은 오프라인 영업팀이 수행합니다. 단, 성과 측정을 위한 <span className="text-white font-bold">피드백 루프</span>는 필수적으로 구축합니다.
            </p>
          </motion.div>

          {/* Goal 4: Technology */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-8 group"
          >
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
              <Database size={40} className="text-indigo-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">데이터 기반 의사결정</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                모든 리드 유입 경로와 영업 결과를 매칭하여, 어떤 광고 소재가 실제 계약으로 이어지는지 분석합니다. 
                단순 클릭이 아닌 <span className="text-indigo-600 font-bold">ROAS(광고비 대비 매출액)</span> 관점의 운영을 지향합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">전체 시스템 구조</h2>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            <RefreshCw size={12} className="animate-spin-slow" /> 실시간 데이터 흐름 시뮬레이션
          </div>
        </div>
        
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          {/* Animated Lead Particles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "10%", y: "50%", opacity: 0 }}
                animate={{ 
                  x: ["10%", "90%"],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 1.5,
                  ease: "linear"
                }}
                className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[1px] shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Connecting Line with Gradient Animation */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-slate-100 -z-10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />
            </div>
            
            {steps.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center w-full md:w-auto relative group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-24 h-24 rounded-2xl ${item.bg} border ${item.border} flex flex-col items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 relative overflow-hidden backdrop-blur-sm`}>
                  <div className="absolute top-2 left-2 text-[10px] font-black text-slate-300/50">{item.step}</div>
                  <item.icon size={32} className={`${item.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  
                  {/* Active Pulse Effect */}
                  <motion.div 
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                    className="absolute inset-0 bg-white"
                  />
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
