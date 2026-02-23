import React, { useState } from 'react';
import { Target, Menu, X, LayoutDashboard, Filter, Database, Activity, Calendar, ShieldAlert, Layers } from 'lucide-react';
import Overview from './components/Overview';
import FunnelStrategy from './components/FunnelStrategy';
import ChannelStrategy from './components/ChannelStrategy';
import SystemCRM from './components/SystemCRM';
import Operation from './components/Operation';
import ScheduleBudget from './components/ScheduleBudget';
import RiskManagement from './components/RiskManagement';

const menus = [
  { id: 'overview', label: '제안 개요', icon: LayoutDashboard, component: Overview },
  { id: 'funnel', label: '퍼널 전략', icon: Filter, component: FunnelStrategy },
  { id: 'channel', label: '채널별 전략', icon: Layers, component: ChannelStrategy },
  { id: 'system', label: '랜딩 & CRM', icon: Database, component: SystemCRM },
  { id: 'operation', label: '운영 프로세스', icon: Activity, component: Operation },
  { id: 'schedule', label: '일정 및 예산', icon: Calendar, component: ScheduleBudget },
  { id: 'risk', label: '리스크 관리', icon: ShieldAlert, component: RiskManagement },
];

export default function App() {
  const [activeMenu, setActiveMenu] = useState(menus[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveComponent = menus.find(m => m.id === activeMenu)?.component || Overview;

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row selection:bg-blue-200">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="font-bold text-xl flex items-center gap-2">
          <Target className="text-blue-400" size={24} />
          Realty Adlab.
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} 
        md:block w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 
        md:sticky md:top-0 md:h-screen overflow-y-auto z-40
      `}>
        <div className="p-6 hidden md:block">
          <div className="font-bold text-2xl text-white flex items-center gap-2 mb-2">
            <Target className="text-blue-400" size={28} />
            Realty Adlab.
          </div>
          <div className="text-xs text-slate-500">분양 리드 엔진 제안서</div>
        </div>
        
        <nav className="p-4 space-y-1">
          {menus.map((menu) => {
            const isActive = activeMenu === menu.id;
            return (
              <button
                key={menu.id}
                onClick={() => {
                  setActiveMenu(menu.id);
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'hover:bg-slate-800 hover:text-white'}
                `}
              >
                <menu.icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                {menu.label}
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 mt-auto">
          <div className="bg-slate-800 rounded-xl p-4 text-xs text-slate-400 border border-slate-700">
            본 제안서는 상품/사업지 정보가 확정되기 전, 전략과 실행 체계를 중심으로 작성되었습니다.
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto w-full">
        <ActiveComponent />
      </main>
    </div>
  );
}
