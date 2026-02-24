import React from 'react';
import { Calendar, PieChart as PieChartIcon, DollarSign, BarChart, Clock, Target, Lightbulb } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'motion/react';

export default function ScheduleBudget() {
  const ganttDataH1 = [
    { title: '요구사항 확정 및 트래킹 설계', spans: [[1, 1]], color: 'bg-slate-500' },
    { title: '홈페이지/CRM MVP 구축', spans: [[1, 2]], color: 'bg-slate-500' },
    { title: '검색광고 세팅 및 운영', spans: [[2, 6]], color: 'bg-blue-700' },
    { title: '리타겟팅 캠페인', spans: [[3, 6]], color: 'bg-blue-500' },
    { title: '콘텐츠/SNS 확산', spans: [[3, 6]], color: 'bg-blue-500' },
    { title: '랜딩 A/B 테스트', spans: [[3, 4], [6, 6]], color: 'bg-indigo-500' },
    { title: '영업 퍼포먼스 최적화', spans: [[4, 6]], color: 'bg-emerald-500' },
  ];

  const objectivesH1 = [
    { month: 'M1', title: '설계 및 세팅', desc: '트래킹 구조 완성 및 광고 계정 세팅' },
    { month: 'M2', title: '인프라 구축 완료', desc: '홈페이지 및 CRM MVP 배포, 첫 리드 발생' },
    { month: 'M3', title: '소프트 런칭', desc: '광고 최소 운영 시작, 영업팀 온보딩' },
    { month: 'M4', title: '학습 및 최적화', desc: '검색 확장, 리드 품질 개선, A/B 테스트' },
    { month: 'M5', title: '스케일업 1차', desc: '노출 예산 확대, 리타겟 세분화' },
    { month: 'M6', title: '스케일업 2차', desc: '채널 테스트, 영업 퍼포먼스 개선' },
  ];

  const ganttDataH2 = [
    { title: '검색광고 (핵심 유지)', spans: [[7, 12]], color: 'bg-blue-700' },
    { title: '리타겟팅 캠페인', spans: [[7, 12]], color: 'bg-blue-500' },
    { title: '이벤트 버스트 (오픈/청약)', spans: [[7, 7], [9, 9]], color: 'bg-orange-500' },
    { title: '효율 회수 및 예산 재배치', spans: [[8, 8]], color: 'bg-slate-500' },
    { title: '잔여세대 타겟팅', spans: [[10, 12]], color: 'bg-indigo-500' },
    { title: '운영 매뉴얼 정리', spans: [[11, 12]], color: 'bg-slate-600' },
    { title: '내재화 교육 및 인수인계', spans: [[12, 12]], color: 'bg-slate-700' },
  ];

  const objectivesH2 = [
    { month: 'M7', title: '이벤트 버스트 1', desc: '오픈/홍보관/모집공고 타이밍 집중 운영' },
    { month: 'M8', title: '효율 회수', desc: '버스트 후 데이터 기반 예산 재배치' },
    { month: 'M9', title: '이벤트 버스트 2', desc: '청약/계약 직전 타이밍 대응' },
    { month: 'M10', title: '잔여세대 전환', desc: '잔여세대 대비 축소 운영 및 타겟팅 변경' },
    { month: 'M11', title: '운영 고도화', desc: '운영 룰 정리 및 매뉴얼화' },
    { month: 'M12', title: '인수인계', desc: '내재화 교육 및 프로젝트 마감' },
  ];

  const budgetData = [
    { category: '구축비', amount: '90,000,000', percent: '18%', desc: '외부 홈페이지 + CRM + 자동화 + 트래킹 (M1~M2 집중)' },
    { category: '크리에이티브 제작', amount: '40,000,000', percent: '8%', desc: '초기 배너/영상/랜딩 카피 + 이벤트 전 리프레시 3회' },
    { category: '광고 매체비', amount: '310,000,000', percent: '62%', desc: '검색(45%), SNS/디스플레이(29%), 영상(19%), 기타(7%)' },
    { category: '운영비', amount: '50,000,000', percent: '10%', desc: '캠페인 운영 / 리포트 / AB테스트 / 영업연동' },
    { category: '예비비', amount: '10,000,000', percent: '2%', desc: '테스트 / 법무·개인정보 보완 / 이슈 대응' },
  ];

  const pieData = [
    { name: '구축비', value: 90, color: '#3b82f6' }, // blue-500
    { name: '크리에이티브 제작', value: 40, color: '#8b5cf6' }, // violet-500
    { name: '광고 매체비', value: 310, color: '#10b981' }, // emerald-500
    { name: '운영비', value: 50, color: '#f59e0b' }, // amber-500
    { name: '예비비', value: 10, color: '#64748b' }, // slate-500
  ];

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

  const renderGanttSection = (title: string, ganttData: any[], objectives: any[], startMonth: number) => (
    <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-8 mb-16">
      {/* Left: Gantt Chart */}
      <div className="flex-1 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 flex flex-col overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            {title}
          </h3>
          <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-widest">M = Month</span>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Header */}
            <div className="flex border-b border-slate-100 pb-4 mb-6">
              <div className="w-[35%] text-[10px] font-black text-slate-400 uppercase tracking-widest">Activity</div>
              <div className="w-[65%] flex">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex-1 text-center text-sm font-black text-slate-800">
                    M{startMonth + i}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Rows */}
            <div className="space-y-5 relative">
              {/* Grid lines */}
              <div className="absolute top-0 bottom-0 right-0 w-[65%] flex pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex-1 border-l border-slate-50"></div>
                ))}
              </div>
              
              {ganttData.map((row, idx) => (
                <div key={idx} className="flex items-center relative z-10 group">
                  <div className="w-[35%] pr-4 text-sm font-bold text-slate-700 leading-tight transition-colors group-hover:text-blue-600">{row.title}</div>
                  <div className="w-[65%] flex h-7 relative">
                    {Array.from({ length: 6 }).map((_, i) => {
                      const currentMonth = startMonth + i;
                      const isActive = row.spans.some((span: number[]) => currentMonth >= span[0] && currentMonth <= span[1]);
                      const isStart = row.spans.some((span: number[]) => currentMonth === span[0]);
                      const isEnd = row.spans.some((span: number[]) => currentMonth === span[1]);
                      
                      return (
                        <div key={i} className="flex-1 px-0.5">
                          {isActive && (
                            <motion.div 
                              initial={{ scaleX: 0, originX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.05) }}
                              className={`h-full ${row.color} ${isStart ? 'rounded-l-lg' : ''} ${isEnd ? 'rounded-r-lg' : ''} shadow-sm group-hover:brightness-110 transition-all`}
                            ></motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Note */}
        <div className="mt-10 bg-blue-50/80 border border-blue-100 rounded-2xl p-5 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
            <Lightbulb size={20} className="text-blue-600" />
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            "6개월로 늘리되, 월 1회 몰아서 하면 성과가 나오지 않습니다.<br/>
            최소 <strong className="text-blue-700">주간 단위</strong>로 '운영 루틴'이 유지되어야 합니다."
          </p>
        </div>
      </div>
      
      {/* Right: Objectives */}
      <div className="w-full lg:w-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl shadow-slate-900/20 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Target size={20} className="text-blue-400" />
          </div>
          기간별 핵심 목표
        </h3>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[19px] before:h-full before:w-px before:bg-slate-700/50">
          {objectives.map((obj, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex gap-5 group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center text-xs font-black text-blue-400 shrink-0 z-10 group-hover:border-blue-500 transition-colors">
                {obj.month}
              </div>
              <div className="pt-1.5">
                <h4 className="font-bold text-base mb-1.5 group-hover:text-blue-400 transition-colors">{obj.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{obj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="relative">
        <div className="absolute top-0 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">일정 및 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">예산 계획</span></h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
          이벤트 드리븐(모집공고/홍보관 오픈/청약/계약) 구간을 유연하게 배치할 수 있는 
          <strong> 12개월 5억 원 규모</strong>의 실행 계획입니다.
        </p>
      </motion.section>

      {/* 12개월 일정 간트 차트 */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <BarChart size={28} />
          </div>
          <div>
            <div className="text-xs font-black text-blue-500 tracking-widest uppercase mb-1">Timeline</div>
            <h2 className="text-2xl font-bold text-slate-900">12개월 실행 로드맵 (Gantt)</h2>
          </div>
        </div>
        
        {renderGanttSection('상반기 실행 로드맵 (M1~M6)', ganttDataH1, objectivesH1, 1)}
        {renderGanttSection('하반기 실행 로드맵 (M7~M12)', ganttDataH2, objectivesH2, 7)}
      </motion.div>

      {/* 예산안 */}
      <motion.div variants={itemVariants} className="bg-white border border-slate-200/60 rounded-3xl p-10 shadow-lg shadow-slate-200/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-full -z-10"></div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
            <PieChartIcon size={28} />
          </div>
          <div>
            <div className="text-xs font-black text-indigo-500 tracking-widest uppercase mb-1">Budget</div>
            <h2 className="text-2xl font-bold text-slate-900">연간 예산 배분 (총 5억 원)</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Donut Chart */}
          <div className="h-80 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}백만 원`, '금액']}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total</span>
              <span className="text-slate-900 text-3xl font-black">5.0억</span>
            </div>
          </div>

          {/* Budget Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/50 border-b border-slate-100 text-slate-500">
                <tr>
                  <th className="px-4 py-4 font-black uppercase tracking-widest text-[10px]">구분</th>
                  <th className="px-4 py-4 font-black uppercase tracking-widest text-[10px] text-right">금액 (원)</th>
                  <th className="px-4 py-4 font-black uppercase tracking-widest text-[10px] text-right">비중</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {budgetData.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 py-5 font-bold text-slate-900">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: pieData[idx].color }}></div>
                        {row.category}
                      </div>
                    </td>
                    <td className="px-4 py-5 text-right font-mono font-bold text-slate-700">{row.amount}</td>
                    <td className="px-4 py-5 text-right font-black text-blue-600">{row.percent}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-900 text-white rounded-xl overflow-hidden">
                <tr>
                  <td className="px-6 py-5 font-bold rounded-l-2xl">합계</td>
                  <td className="px-6 py-5 text-right font-mono text-xl font-black">500,000,000</td>
                  <td className="px-6 py-5 text-right text-blue-400 font-black rounded-r-2xl">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
            세부 내용
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {budgetData.map((row, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -3 }}
                className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pieData[idx].color }}></div>
                  {row.category}
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">{row.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="mt-12 bg-amber-50/80 border border-amber-100 p-6 rounded-3xl text-sm flex gap-5 items-start text-amber-900 shadow-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
            <DollarSign className="text-amber-600" size={24} />
          </div>
          <p className="leading-relaxed">
            <strong className="text-amber-700 text-lg block mb-1">구축비 최적화의 함정</strong>
            구축비를 줄여서 광고비로 밀어 넣으면 초반 2~3개월은 "리드만 쌓이고 영업 전환이 안 되는" 구간이 나올 확률이 높습니다. <strong className="text-amber-700 underline underline-offset-4">CRM·SLA·상태코드가 안정화되지 않으면 CPL 최적화만 하게 됩니다.</strong>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
