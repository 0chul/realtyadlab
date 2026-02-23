import React from 'react';
import { LayoutDashboard, Database, Settings, Search, Filter, MoreVertical, Phone, MessageSquare, Calendar, CheckCircle2, Clock, AlertCircle, Users, TrendingUp, BarChart3, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';

export default function SystemCRM() {
  const performanceData = [
    { name: '김영업', leads: 45, connected: 38, visited: 12, contracted: 3 },
    { name: '이대리', leads: 42, connected: 31, visited: 8, contracted: 1 },
    { name: '박과장', leads: 50, connected: 45, visited: 18, contracted: 5 },
    { name: '최사원', leads: 30, connected: 20, visited: 5, contracted: 0 },
  ];

  const funnelData = [
    { name: '신규 리드', count: 167 },
    { name: '연결 성공', count: 134 },
    { name: '방문 예약', count: 65 },
    { name: '실제 방문', count: 43 },
    { name: '계약 완료', count: 9 },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">랜딩 & CRM 시스템 구축</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          랜딩 페이지는 '예쁜 소개'가 아니라 <strong>'전환 장치'</strong>이며, 
          CRM은 단순 '리드 저장소'가 아니라 <strong>'영업 행동을 강제하는 워크플로우'</strong>입니다.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 외부 노출 홈페이지 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <LayoutDashboard className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900">외부 홈페이지 (전환용)</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">A. 사이트 구성 (모듈형 템플릿)</h3>
              <p className="text-sm text-slate-600 mb-3">사업지 디테일이 늦어도 사이트는 "틀"을 먼저 만듭니다.</p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside bg-slate-50 p-4 rounded-xl">
                <li><strong>메인:</strong> 사업지 요약 + 핵심 CTA 2개 (상담신청/방문예약)</li>
                <li><strong>상세:</strong> 입지/교통/호재/특장점 (섹션 모듈)</li>
                <li><strong>전환 전용 랜딩:</strong> 정보 밀도 최소화 + 폼 집중</li>
                <li><strong>기타:</strong> FAQ, 개인정보 처리방침</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-2">B. 전환 설계</h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>폼 필드는 최소화 (이름/연락처/관심유형)</li>
                <li>추가 질문은 접수 후 자동 문자/톡으로 보강</li>
                <li>톡상담과 웹폼 병행하되, 리드는 CRM에 동일 포맷으로 합류</li>
                <li>A/B 테스트 대상: 헤드라인 / CTA 문구 / 폼 길이</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 내부 영업팀용 CRM */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900">내부 영업팀용 CRM (MVP)</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-sm text-slate-600">
              기능 욕심을 내면 늪에 빠집니다. 분양 CRM MVP는 아래 필수 기능만 있으면 굴러갑니다.
            </p>
            
            <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-3">필수 기능 7가지</h3>
              <ul className="space-y-3 text-sm text-indigo-800">
                <li className="flex gap-2"><span className="font-bold">1. 리드 인박스:</span> 신규 리드 자동 유입, 중복/스팸 표시</li>
                <li className="flex gap-2"><span className="font-bold">2. 리드 배정:</span> 담당자 자동 배정 및 즉시 알림</li>
                <li className="flex gap-2"><span className="font-bold">3. 상태코드:</span> 신규 → 연결/부재 → 예약 → 방문 → 계약 (표준화)</li>
                <li className="flex gap-2"><span className="font-bold">4. 활동기록:</span> 콜/문자 로그, 다음 액션(재콜 시간)</li>
                <li className="flex gap-2"><span className="font-bold">5. SLA 모니터링:</span> 10분 내 1차 콜 위반 알림</li>
                <li className="flex gap-2"><span className="font-bold">6. 대시보드:</span> 담당자별 처리속도, 채널별 유효 리드율</li>
                <li className="flex gap-2"><span className="font-bold">7. 내보내기/권한:</span> 엑셀 백업 및 권한 관리</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Settings size={16} /> 기술 스택 선택지
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li><strong>노코드/로우코드 CRM:</strong> 최단기(2~3주), 유지보수 쉬움</li>
                <li><strong>경량 커스텀 웹CRM (권장):</strong> 필수 기능만 구현, 권한/확장성 균형</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Mockup Section - Manager Dashboard */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="text-slate-900" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">관리자 모니터링 대시보드 (Mockup)</h2>
        </div>
        <p className="text-slate-600 mb-8">
          영업 관리자 및 대행사가 캠페인 성과와 영업팀의 퍼포먼스를 한눈에 파악하고 병목 구간을 찾아내는 화면입니다.
        </p>

        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-xl mb-12">
          {/* Top Bar */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg text-blue-400">Realty Adlab Admin</div>
              <div className="hidden md:flex gap-4 text-sm font-medium text-slate-300">
                <span className="text-white">대시보드</span>
                <span className="hover:text-white cursor-pointer">리드 관리</span>
                <span className="hover:text-white cursor-pointer">캠페인 성과</span>
                <span className="hover:text-white cursor-pointer">설정</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 border border-slate-700">
                <Calendar size={14} /> 이번 주 <ChevronDown size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                M
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-sm font-bold text-slate-500 mb-1">총 유입 리드</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-black text-slate-900">167</div>
                  <div className="text-sm font-bold text-emerald-500 mb-1 flex items-center"><TrendingUp size={14} /> 12%</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-sm font-bold text-slate-500 mb-1">SLA 준수율 (10분 내)</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-black text-slate-900">84%</div>
                  <div className="text-sm font-bold text-red-500 mb-1 flex items-center"><TrendingUp size={14} className="rotate-180" /> 3%</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-sm font-bold text-slate-500 mb-1">방문 예약률</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-black text-slate-900">38.9%</div>
                  <div className="text-sm font-bold text-emerald-500 mb-1 flex items-center"><TrendingUp size={14} /> 5%</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-sm font-bold text-slate-500 mb-1">CPA (예약 당 단가)</div>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-black text-slate-900">₩45,000</div>
                  <div className="text-sm font-bold text-emerald-500 mb-1 flex items-center"><TrendingUp size={14} className="rotate-180" /> 8%</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Funnel Chart */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm lg:col-span-1">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Filter size={18} className="text-blue-600" /> 전체 전환 퍼널
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                      <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24}>
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#94a3b8' : index === 4 ? '#10b981' : '#3b82f6'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Team Performance */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm lg:col-span-2">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Users size={18} className="text-indigo-600" /> 담당자별 퍼포먼스
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar dataKey="leads" name="배정 리드" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={16} />
                      <Bar dataKey="connected" name="연결 성공" fill="#60a5fa" radius={[4, 4, 0, 0]} barSize={16} />
                      <Bar dataKey="visited" name="실제 방문" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={16} />
                      <Bar dataKey="contracted" name="계약" fill="#10b981" radius={[4, 4, 0, 0]} barSize={16} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* SLA Warning List */}
            <div className="mt-6 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertCircle size={18} className="text-red-500" /> SLA 초과 / 미처리 리드 경고
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-4 py-2 font-semibold rounded-l-lg">접수 시간</th>
                      <th className="px-4 py-2 font-semibold">고객명</th>
                      <th className="px-4 py-2 font-semibold">유입 채널</th>
                      <th className="px-4 py-2 font-semibold">담당자</th>
                      <th className="px-4 py-2 font-semibold">경과 시간</th>
                      <th className="px-4 py-2 font-semibold rounded-r-lg">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 text-slate-600">오늘 14:20</td>
                      <td className="px-4 py-3 font-bold text-slate-900">정*호</td>
                      <td className="px-4 py-3 text-slate-600">메타 리드폼</td>
                      <td className="px-4 py-3 font-medium text-slate-700">최사원</td>
                      <td className="px-4 py-3 font-bold text-red-600">45분</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">미연락</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-600">오늘 10:15</td>
                      <td className="px-4 py-3 font-bold text-slate-900">강*수</td>
                      <td className="px-4 py-3 text-slate-600">네이버 검색</td>
                      <td className="px-4 py-3 font-medium text-slate-700">이대리</td>
                      <td className="px-4 py-3 font-bold text-amber-600">4시간 (재콜필요)</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">부재중(1차)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Mockup Section - Agent Dashboard */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <LayoutDashboard className="text-slate-900" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">영업팀 실무자 화면 (Mockup)</h2>
        </div>
        <p className="text-slate-600 mb-8">
          영업 담당자가 매일 보게 될 화면입니다. 직관적인 상태 관리와 SLA(응답 시간) 준수에 초점을 맞췄습니다.
        </p>

        {/* Mockup Container */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-xl">
          {/* Top Bar */}
          <div className="bg-white border-b border-slate-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg text-indigo-600">Realty Adlab CRM</div>
              <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-sm text-slate-600">
                <Search size={16} />
                <input type="text" placeholder="이름, 연락처 검색..." className="bg-transparent border-none outline-none w-48" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-medium text-slate-700">김영업 차장</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[600px]">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-white border-r border-slate-200 p-4 flex flex-col gap-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">메뉴</div>
              <button className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium text-sm">
                <LayoutDashboard size={18} /> 인박스 (미처리)
                <span className="ml-auto bg-indigo-600 text-white text-xs py-0.5 px-2 rounded-full">3</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium text-sm">
                <Calendar size={18} /> 방문 예약 일정
              </button>
              <button className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium text-sm">
                <CheckCircle2 size={18} /> 계약 완료 건
              </button>
              
              <div className="mt-8 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">나의 SLA 현황</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">10분 내 응답률</span>
                  <span className="text-sm font-bold text-emerald-600">92%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">신규 인박스</h3>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                  <Filter size={16} /> 필터
                </button>
              </div>

              {/* Lead List */}
              <div className="space-y-3">
                {/* Lead Item 1 - SLA Warning */}
                <div className="bg-white border border-red-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold">
                        이
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-900">이*훈</h4>
                          <span className="text-xs text-slate-500">010-****-1234</span>
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">SLA 초과 임박</span>
                        </div>
                        <div className="text-sm text-slate-600 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Clock size={14} className="text-red-500" /> 8분 전 접수</span>
                          <span className="text-slate-300">|</span>
                          <span>유입: 네이버 검색 (파워링크)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 font-medium text-slate-700 outline-none focus:border-indigo-500">
                        <option>상태 변경</option>
                        <option>연결 완료 (관심)</option>
                        <option>부재중 (1차)</option>
                        <option>방문 예약</option>
                      </select>
                      <button className="p-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors" title="전화 걸기">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lead Item 2 - Normal */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                        김
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-900">김*지</h4>
                          <span className="text-xs text-slate-500">010-****-5678</span>
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-100">신규 접수</span>
                        </div>
                        <div className="text-sm text-slate-600 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Clock size={14} /> 3분 전 접수</span>
                          <span className="text-slate-300">|</span>
                          <span>유입: 메타 (인스타그램 릴스)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 font-medium text-slate-700 outline-none focus:border-indigo-500">
                        <option>상태 변경</option>
                        <option>연결 완료 (관심)</option>
                        <option>부재중 (1차)</option>
                        <option>방문 예약</option>
                      </select>
                      <button className="p-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors" title="전화 걸기">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lead Item 3 - Follow up */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden opacity-75">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                        박
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-900">박*민</h4>
                          <span className="text-xs text-slate-500">010-****-9012</span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded">부재중 (1차)</span>
                        </div>
                        <div className="text-sm text-slate-600 flex items-center gap-3">
                          <span className="flex items-center gap-1"><AlertCircle size={14} className="text-amber-500" /> 2시간 뒤 2차 콜 예정</span>
                          <span className="text-slate-300">|</span>
                          <span>유입: 카카오톡 채널</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 font-medium text-slate-700 outline-none focus:border-indigo-500" defaultValue="부재중 (1차)">
                        <option>상태 변경</option>
                        <option>연결 완료 (관심)</option>
                        <option value="부재중 (1차)">부재중 (1차)</option>
                        <option>부재중 (2차)</option>
                        <option>방문 예약</option>
                      </select>
                      <button className="p-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors" title="전화 걸기">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
