import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function RiskManagement() {
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

  const risks = [
    {
      id: 1,
      title: "영업팀이 빠르게 연락 안 함",
      desc: "리드가 식어버려 CPL을 아무리 낮춰도 최종 계약으로 이어지지 않습니다.",
      defense: "SLA 강제: 리드 접수 후 10분 내 1차 콜 룰을 설정하고 CRM 대시보드로 위반 사항을 모니터링합니다."
    },
    {
      id: 2,
      title: "상태코드 피드백 없음",
      desc: "최적화가 CPL에서 멈춰서 \"싸고 질 낮은 리드\"만 늘어납니다.",
      defense: "입력 의무화: 최소한 예약/방문/계약 상태코드 입력을 의무화하여 CPA 기반 최적화 루프를 완성합니다."
    },
    {
      id: 3,
      title: "플랫폼 리드폼 무분별 사용",
      desc: "품질 관리 없이 리드폼만 쓰면 허수 리드가 폭발하여 영업팀이 광고를 불신하게 됩니다.",
      defense: "유효리드 기준 명시: 중복/결번/스팸 제외 기준을 명확히 하고, 접수 즉시 자동 문자로 1차 필터링을 수행합니다."
    }
  ];

  return (
    <motion.div 
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="relative">
        <div className="absolute top-0 right-10 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">리스크 관리</h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
          이 구조에서 가장 흔한 실패 원인은 광고 자체가 아니라 <strong>운영의 디테일</strong>입니다. 
          발생 가능한 리스크를 사전에 정의하고 명확한 대응책을 수립하여 프로젝트의 안정성을 확보합니다.
        </p>
      </motion.section>

      <motion.div variants={itemVariants} className="bg-white border border-slate-200/60 rounded-3xl p-10 shadow-lg shadow-slate-200/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-red-500/20">
            <ShieldAlert size={28} />
          </div>
          <div>
            <div className="text-xs font-black text-red-500 tracking-widest uppercase mb-1">Security</div>
            <h2 className="text-2xl font-bold text-slate-900">흔한 실패 원인과 방어책</h2>
          </div>
        </div>

        <div className="space-y-8">
          {risks.map((risk, idx) => (
            <motion.div 
              key={risk.id}
              whileHover={{ scale: 1.01 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row gap-8 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all group"
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest mb-3">
                  <AlertTriangle size={16} /> Risk 0{risk.id}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{risk.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{risk.desc}</p>
              </div>
              <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10">
                <div className="flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest mb-3">
                  <CheckCircle size={16} /> Defense Strategy
                </div>
                <p className="text-sm text-slate-700 leading-relaxed bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                  {risk.defense}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Info className="text-red-400" size={24} />
          </div>
          프로젝트 성공을 위한 필수 전제 조건
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {[
              "영업팀 SLA 준수 (최소한의 KPI로 묶기)",
              "상태코드 입력 의무 (성과 측정용)",
              "개인정보 처리 역할/책임 명확화"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                <span className="text-slate-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {[
              "유효리드 기준 정의 (분쟁 예방)",
              "콘텐츠 제공 일정 협의 (로고 사전 제공)",
              "정기 피드백 미팅 (주간/월간)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                <span className="text-slate-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
