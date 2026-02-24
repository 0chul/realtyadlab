import React, { useState, useEffect } from 'react';
import { Target, Menu, X, LayoutDashboard, Filter, Database, Activity, Calendar, ShieldAlert, Layers, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenu(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    menus.forEach((menu) => {
      const el = document.getElementById(menu.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeMenuIndex = menus.findIndex(m => m.id === activeMenu);
  const ActiveComponent = menus[activeMenuIndex]?.component || Overview;

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row selection:bg-blue-200">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="font-bold text-xl flex items-center gap-2">
          <Target className="text-blue-400" size={24} />
          Realty Adlab.
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:sticky top-[60px] md:top-0 left-0 h-[calc(100vh-60px)] md:h-screen 
        w-full md:w-72 bg-slate-900 text-slate-300 flex-shrink-0 z-40
        transition-transform duration-300 ease-in-out flex flex-col border-r border-slate-800
      `}>
        {/* Animated Background Elements for Sidebar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -120, 0],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="p-8 hidden md:block relative z-10">
          <div className="font-bold text-2xl text-white flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Target className="text-white" size={24} />
            </div>
            Realty Adlab.
          </div>
          <div className="text-sm text-slate-400 font-medium tracking-wide mt-4">분양 리드 엔진 제안서</div>
        </div>
        
        <nav className="flex-1 px-4 py-6 md:py-2 space-y-1.5 overflow-y-auto">
          {menus.map((menu) => {
            const isActive = activeMenu === menu.id;
            return (
              <button
                key={menu.id}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    const el = document.getElementById(menu.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    setActiveMenu(menu.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  group w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-600/10 text-blue-400' 
                    : 'hover:bg-slate-800/50 hover:text-slate-200'}
                `}
              >
                <div className="flex items-center gap-3">
                  <menu.icon size={18} className={`transition-colors ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
                  {menu.label}
                </div>
                {isActive && (
                  <motion.div layoutId="activeIndicator" className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 mt-auto">
          <div className="bg-slate-800/50 rounded-2xl p-5 text-xs text-slate-400 border border-slate-700/50 leading-relaxed">
            <span className="text-blue-400 font-bold mb-2 block">Notice</span>
            본 제안서는 상품/사업지 정보가 확정되기 전, 전략과 실행 체계를 중심으로 작성되었습니다.
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        
        {/* Mobile One-Page View */}
        <div className="md:hidden flex flex-col divide-y divide-slate-200">
          {menus.map((menu) => (
            <section key={menu.id} id={menu.id} className="p-6 py-16 scroll-mt-16">
              <menu.component />
            </section>
          ))}
          
          <div className="p-8 bg-slate-900 text-slate-400 text-center text-sm">
            © 2024 Realty Adlab. All rights reserved.
          </div>
        </div>

        {/* Desktop Tabbed View */}
        <div className="hidden md:flex p-6 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto w-full min-h-screen flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
          
          {/* Bottom Navigation (Desktop Only) */}
          <div className="mt-24 pt-8 border-t border-slate-200 flex justify-between items-center">
            {activeMenuIndex > 0 ? (
              <button 
                onClick={() => {
                  setActiveMenu(menus[activeMenuIndex - 1].id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ChevronRight className="rotate-180" size={16} />
                {menus[activeMenuIndex - 1].label}
              </button>
            ) : <div></div>}
            
            {activeMenuIndex < menus.length - 1 ? (
              <button 
                onClick={() => {
                  setActiveMenu(menus[activeMenuIndex + 1].id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                {menus[activeMenuIndex + 1].label}
                <ChevronRight size={16} />
              </button>
            ) : <div></div>}
          </div>
        </div>
      </main>
    </div>
  );
}
