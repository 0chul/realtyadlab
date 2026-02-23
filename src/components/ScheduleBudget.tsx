import React from 'react';
import { Calendar, PieChart as PieChartIcon, DollarSign, BarChart } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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

  const renderGanttSection = (title: string, ganttData: any[], objectives: any[], startMonth: number) => (
    <div className="flex flex-col lg:flex-row gap-6 mb-12">
      {/* Left: Gantt Chart */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">M = Month</span>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <div className="w-full">
            {/* Header */}
            <div className="flex border-b border-slate-100 pb-3 mb-4">
              <div className="w-[35%] text-xs font-bold text-slate-400 uppercase tracking-wider">Activity</div>
              <div className="w-[65%] flex">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex-1 text-center text-sm font-bold text-slate-700">
                    M{startMonth + i}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Rows */}
            <div className="space-y-4 relative">
              {/* Grid lines */}
              <div className="absolute top-0 bottom-0 right-0 w-[65%] flex pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex-1 border-l border-slate-50"></div>
                ))}
              </div>
              
              {ganttData.map((row, idx) => (
                <div key={idx} className="flex items-center relative z-10">
                  <div className="w-[35%] pr-2 text-[13px] font-bold text-slate-700 leading-tight">{row.title}</div>
                  <div className="w-[65%] flex h-6 relative">
                    {Array.from({ length: 6 }).map((_, i) => {
                      const currentMonth = startMonth + i;
                      const isActive = row.spans.some((span: number[]) => currentMonth >= span[0] && currentMonth <= span[1]);
                      const isStart = row.spans.some((span: number[]) => currentMonth === span[0]);
                      const isEnd = row.spans.some((span: number[]) => currentMonth === span[1]);
                      
                      return (
                        <div key={i} className="flex-1 px-0.5">
                          {isActive && (
                            <div className={`h-full ${row.color} ${isStart ? 'rounded-l-md' : ''} ${isEnd ? 'rounded-r-md' : ''}`}></div>
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
        <div className="mt-8 bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 items-start">
          <div className="text-amber-500 mt-0.5">💡</div>
          <p className="text-sm text-slate-700">
            "6개월로 늘리되, 월 1회 몰아서 하면 성과가 나오지 않습니다.<br/>
            최소 <strong>주간 단위</strong>로 '운영 루틴'이 유지되어야 합니다."
          </p>
        </div>
      </div>
      
      {/* Right: Objectives */}
      <div className="w-full lg:w-80 bg-slate-900 rounded-2xl p-6 text-white shadow-sm shrink-0">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
          기간별 핵심 목표
        </h3>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:h-full before:w-px before:bg-slate-700">
          {objectives.map((obj, idx) => (
            <div key={idx} className="relative flex gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-slate-600 bg-slate-900 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0 z-10">
                {obj.month}
              </div>
              <div className="pt-1.5">
                <h4 className="font-bold text-sm mb-1">{obj.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">일정 및 예산 계획</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          이벤트 드리븐(모집공고/홍보관 오픈/청약/계약) 구간을 유연하게 배치할 수 있는 
          <strong> 12개월 5억 원 규모</strong>의 실행 계획입니다.
        </p>
      </section>

      {/* 12개월 일정 간트 차트 */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <BarChart className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">12개월 실행 로드맵 (Gantt)</h2>
        </div>
        
        {renderGanttSection('상반기 실행 로드맵 (M1~M6)', ganttDataH1, objectivesH1, 1)}
        {renderGanttSection('하반기 실행 로드맵 (M7~M12)', ganttDataH2, objectivesH2, 7)}
      </div>

      {/* 예산안 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <PieChartIcon className="text-indigo-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">연간 예산 배분 (총 5억 원)</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Donut Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}백만 원`, '금액']}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Budget Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">구분</th>
                  <th className="px-4 py-3 font-semibold text-right">금액 (원)</th>
                  <th className="px-4 py-3 font-semibold text-right">비중</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {budgetData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-4 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pieData[idx].color }}></div>
                        {row.category}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right font-mono font-medium text-slate-700">{row.amount}</td>
                    <td className="px-4 py-4 text-right font-semibold text-blue-600">{row.percent}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 border-t border-slate-200 font-bold text-slate-900">
                <tr>
                  <td className="px-4 py-4">합계</td>
                  <td className="px-4 py-4 text-right font-mono text-lg">500,000,000</td>
                  <td className="px-4 py-4 text-right text-blue-600">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-900">세부 내용</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {budgetData.map((row, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-900 text-sm mb-1">{row.category}</div>
                <div className="text-xs text-slate-600">{row.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-xl text-sm flex gap-3 items-start text-amber-800">
          <DollarSign className="shrink-0 mt-0.5" size={18} />
          <p>
            <strong>구축비를 줄여서 광고비로 밀어 넣으면</strong> 초반 2~3개월은 "리드만 쌓이고 영업 전환이 안 되는" 구간이 나올 확률이 높습니다. CRM·SLA·상태코드가 안정화되지 않으면 CPL 최적화만 하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
