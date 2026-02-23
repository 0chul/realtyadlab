import React from 'react';
import { Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">프로젝트 개요 및 목표</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          단순한 광고 대행이 아닙니다. 노출부터 리드 수집, CRM 연동, 오프라인 영업 지원까지 파이프라인을 자동화하여 
          <strong className="text-blue-600 font-semibold"> "대행사가 빠져도 계약이 늘어나는 분양 리드 엔진"</strong>을 구축합니다.
        </p>
        
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Target size={20} className="text-blue-600" />
            목표 정의
          </h3>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <span><strong>목표:</strong> 노출 → 홈페이지(랜딩) → 리드 획득 → (오프라인 영업팀) 상담/방문/계약</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <span><strong>대행 범위:</strong> 디지털 캠페인 운영 + 랜딩 최적화 + 리드 획득/정제/전달 + 성과 리포팅</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <span><strong>아웃 범위(원칙):</strong> 상담/계약은 오프라인 영업팀 수행. 단, “측정”을 위해 최소한의 피드백 루프(상담결과 코드 공유)는 필수.</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">전체 시스템 구조</h2>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 -translate-y-1/2"></div>
            
            {[
              { step: '1', title: '광고 채널', desc: '검색/디스플레이/영상/SNS' },
              { step: '2', title: '외부 홈페이지', desc: '소개 + 랜딩 + 폼/톡상담' },
              { step: '3', title: '리드 수집/정제', desc: '중복/결번 필터, 동의 로그' },
              { step: '4', title: 'CRM 자동 등록', desc: '담당자 배정, 상태코드' },
              { step: '5', title: '영업팀 알림', desc: '실시간 알림 + SLA' },
              { step: '6', title: '결과 피드백', desc: '코드 기반 캠페인 최적화' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white p-2 w-full md:w-auto relative group">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 text-slate-700 font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors shadow-sm">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-sm text-center">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 text-center whitespace-pre-line">{item.desc}</p>
                {idx < 5 && (
                  <div className="md:hidden mt-3 text-slate-300">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-slate-50 rounded-xl text-sm text-slate-600 border border-slate-100">
            <strong className="text-slate-900">핵심 포인트:</strong> CRM이 단순 "리드 저장소"가 아니라 '영업 행동을 강제하는 워크플로우'여야 합니다.
          </div>
        </div>
      </section>
    </div>
  );
}
