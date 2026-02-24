import React from 'react';
import { Activity, BarChart2, Clock, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Operation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="relative">
        <div className="absolute top-0 right-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">운영 프로세스 및 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">트래킹</span></h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
          광고 대행의 실력 차이는 트래킹과 운영에서 납니다. 
          <strong>"우리가 빠지는 구조"</strong>를 만들기 위한 명확한 룰과 피드백 루프를 세팅합니다.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* 운영 프로세스 룰 */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-emerald-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
              <CheckSquare size={28} />
            </div>
            <div>
              <div className="text-xs font-black text-emerald-500 tracking-widest uppercase mb-1">Process</div>
              <h2 className="text-2xl font-bold text-slate-900">영업 운영 프로세스 (SLA)</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100">
            리드 접수 후 즉각적인 응대가 이루어지지 않으면 광고 효율은 급격히 저하됩니다. 따라서 아래 항목들을 성공적인 운영을 위한 <strong>"핵심 표준"</strong>으로 설정합니다.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <Clock className="text-emerald-600" size={20} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg mb-1">SLA: 10분 내 1차 콜</div>
                <div className="text-sm text-slate-600 leading-relaxed">리드 접수 후 10분 이내 연락을 원칙으로 합니다.</div>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <Activity className="text-emerald-600" size={20} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg mb-1">부재 시 재콜 룰</div>
                <div className="text-sm text-slate-600 leading-relaxed">당일 2회 + 익일 1회 등 명확한 재접촉 시퀀스 적용</div>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <CheckSquare className="text-emerald-600" size={20} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg mb-1">유효리드 기준 명시</div>
                <div className="text-sm text-slate-600 leading-relaxed">중복/결번/욕설 제외, 동일인 7일 내 중복 제외 등 기준 확립</div>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* 트래킹 및 데이터 */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-blue-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <BarChart2 size={28} />
            </div>
            <div>
              <div className="text-xs font-black text-blue-500 tracking-widest uppercase mb-1">Tracking</div>
              <h2 className="text-2xl font-bold text-slate-900">트래킹 및 데이터 측정</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed bg-blue-50/80 p-4 rounded-2xl border border-blue-100">
            광고 운영이 잘 되려면, CRM이 "결과"를 돌려줘야 합니다. CPA에 가까운 최적화를 위한 세팅입니다.
          </p>
          <ul className="space-y-6 text-sm text-slate-700">
            <li className="flex gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0"></div>
              <div>
                <strong className="text-slate-900 block mb-1 text-lg">필수 세팅</strong>
                <span className="leading-relaxed text-slate-600">UTM 규격 통일, 픽셀/전환 이벤트(ViewContent, Lead, Contact), 콜트래킹 번호</span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0"></div>
              <div>
                <strong className="text-slate-900 block mb-1 text-lg">오프라인 전환 피드백</strong>
                <span className="leading-relaxed text-slate-600">CRM 상태코드 중 '예약/방문/계약'을 채널별로 집계하여 광고 플랫폼에 피드백</span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0"></div>
              <div>
                <strong className="text-slate-900 block mb-1 text-lg">개인정보/법적 이슈 대응</strong>
                <span className="leading-relaxed text-slate-600">동의 문구, 보관기간, 제3자 제공 명시. DB 보관 위치 및 권한 관리 철저</span>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* 주간 운영 리듬 */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Activity className="text-blue-400" size={24} />
          </div>
          주간 운영 리듬 <span className="text-slate-400 text-lg font-medium">(1년 내내 동일하게 반복)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="font-black text-blue-400 tracking-widest text-xs uppercase mb-2">Mon</div>
            <div className="font-bold text-white text-lg mb-3">월요일</div>
            <div className="text-sm text-slate-300 leading-relaxed">지난주 데이터 리뷰(30분) + 이번주 실험 1개 선정 (소재/랜딩/타겟)</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors md:col-span-2">
            <div className="font-black text-blue-400 tracking-widest text-xs uppercase mb-2">Tue - Thu</div>
            <div className="font-bold text-white text-lg mb-3">화 ~ 목요일</div>
            <div className="text-sm text-slate-300 leading-relaxed">캠페인 집행 / 실시간 모니터링 / 소재 교체 및 A/B 테스트 진행</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="font-black text-blue-400 tracking-widest text-xs uppercase mb-2">Fri</div>
            <div className="font-bold text-white text-lg mb-3">금요일</div>
            <div className="text-sm text-slate-300 leading-relaxed">영업 피드백 회수(상태코드, 연결률) + 다음주 액션 확정</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
