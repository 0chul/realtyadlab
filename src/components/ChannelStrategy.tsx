import React from 'react';
import { 
  MonitorPlay, Search, MousePointerClick, RefreshCw, 
  Briefcase, AlertCircle, CheckCircle2, Layers, 
  Youtube, Facebook, MessageCircle, Globe, MapPin, 
  Smartphone, Phone, BarChart
} from 'lucide-react';
import { motion } from 'motion/react';

const ChannelCard = ({ platform, format, purpose, warning, icon: Icon, colorClass, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-blue-200 transition-all flex flex-col h-full relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-10 opacity-20 transition-transform group-hover:scale-110 ${colorClass.split(' ')[0]}`}></div>
    
    <div className="flex items-center gap-4 mb-5">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${colorClass}`}>
        <Icon size={24} />
      </div>
      <h4 className="font-bold text-slate-900 text-lg">{platform}</h4>
    </div>
    
    <div className="space-y-4 flex-1">
      <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
        <div className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">형태</div>
        <p className="text-sm text-slate-700 font-medium">{format}</p>
      </div>
      <div className="p-3">
        <div className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">용도</div>
        <p className="text-sm text-slate-600 leading-relaxed">{purpose}</p>
      </div>
    </div>
    
    <div className="mt-5 pt-4 border-t border-slate-100">
      <div className="flex items-start gap-2 text-amber-700 bg-amber-50/80 p-3.5 rounded-xl border border-amber-100/50">
        <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-500" />
        <p className="text-xs leading-relaxed"><strong>주의:</strong> {warning}</p>
      </div>
    </div>
  </motion.div>
);

export default function ChannelStrategy() {
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
        <div className="absolute top-0 right-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">구체적인 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">채널별 전략</span></h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
          단순히 "모든 채널을 활용한다"는 선언보다, <strong>플랫폼별 상품 특성과 용도, 운영 주의점</strong>을 명확히 정의하여 실행력을 높이는 것이 중요합니다. 
          채널을 너무 많이 동시에 열면 학습이 분산되므로, 풀세트를 기획하되 운영은 단계적으로 진행합니다.
        </p>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl shadow-blue-900/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="text-lg font-medium leading-relaxed flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10">
              <Layers size={24} className="text-white" />
            </div>
            <span className="pt-1">"포털/동영상/SNS로 도달을 만들고, 검색으로 고의도 유입을 회수하며, 리타겟으로 CPL을 낮추고, 최종 리드는 웹폼/메신저/리드폼을 표준화해 CRM로 자동 유입시켜 영업팀이 즉시 처리하는 구조로 운영합니다."</span>
          </div>
        </motion.div>
      </motion.section>

      {/* 1. 노출/인지 */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <MonitorPlay size={28} />
          </div>
          <div>
            <div className="text-xs font-black text-blue-500 tracking-widest uppercase mb-1">Step 1. Awareness</div>
            <h2 className="text-2xl font-bold text-slate-900">노출 / 인지</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChannelCard 
            platform="유튜브 (YouTube Ads)"
            format="인스트림 스킵/논스킵, 범퍼(6초), 인피드, 쇼츠"
            purpose="반경 지역 + 관심(부동산/이사) 도달, 영상시청 기반 리타겟 풀 생성"
            warning="영상 퀄리티가 낮으면 CPM만 소진하고 기억에 남지 않음. 최소 6초/15초 버전 필수."
            icon={Youtube}
            colorClass="bg-red-50 text-red-600 border border-red-100"
            delay={0.1}
          />
          <ChannelCard 
            platform="메타 (Instagram/Facebook)"
            format="피드/릴스/스토리, 캐러셀, 컬렉션"
            purpose="라이프 이벤트/관심사 기반 확산 + 클릭/영상시청 리타겟 풀"
            warning="분양은 '정보성' 메시지 없으면 클릭 낭비가 흔함. 감성만으로는 CPL이 떨어지지 않음."
            icon={Facebook}
            colorClass="bg-blue-50 text-blue-600 border border-blue-100"
            delay={0.2}
          />
          <ChannelCard 
            platform="카카오모먼트"
            format="디스플레이/동영상 (카카오톡/다음 지면), 타겟팅"
            purpose="지역 생활권 도달 + 클릭 리타겟 모수 만들기"
            warning="'광고는 노출되는데 리드가 안 잡히는' 전형 구간. 리타겟과 세트로 설계해야 함."
            icon={MessageCircle}
            colorClass="bg-yellow-50 text-yellow-600 border border-yellow-100"
            delay={0.3}
          />
          <ChannelCard 
            platform="네이버 GFA"
            format="디스플레이/동영상 (네이버 내외 지면)"
            purpose="네이버 생태계에서 리타겟 풀 만들기, 네이버 검색과 시너지"
            warning="소재/카피가 약하면 '광고 같아 보이는 배너'로 소멸. 첫 프레임이 중요."
            icon={Globe}
            colorClass="bg-green-50 text-green-600 border border-green-100"
            delay={0.4}
          />
          <ChannelCard 
            platform="포털 메인/프리미엄 지면"
            format="메인 롤링/스페셜 등 프리미엄 패키지"
            purpose="단기간 '알려야 하는' 타이밍(오픈/청약 직전)에 도달 폭발"
            warning="비싸고 성과형이 아니라 '타이밍용'. 성과는 리타겟/검색에서 회수해야 함."
            icon={Layers}
            colorClass="bg-slate-50 text-slate-600 border border-slate-200"
            delay={0.5}
          />
          <ChannelCard 
            platform="네이티브 광고 네트워크"
            format="데이블, 타불라, 아웃브레인 계열 (기사/콘텐츠형)"
            purpose="스토리텔링(입지/호재/생활권) → 랜딩 유입"
            warning="자극적 제목을 쓰면 클릭은 나오지만 허수 유입으로 리드 품질이 망가질 수 있음."
            icon={Globe}
            colorClass="bg-indigo-50 text-indigo-600 border border-indigo-100"
            delay={0.6}
          />
        </div>
      </motion.section>

      {/* 2. 방문/관심 */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
            <Search size={28} />
          </div>
          <div>
            <div className="text-xs font-black text-indigo-500 tracking-widest uppercase mb-1">Step 2. Consideration</div>
            <h2 className="text-2xl font-bold text-slate-900">방문 / 관심</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChannelCard 
            platform="네이버 검색광고"
            format="파워링크, 브랜드검색, 파워컨텐츠"
            purpose="분양에서 제일 강한 축. 고의도 검색 유저 확보"
            warning="'키워드만 많다'는 게 능력이 아님. 3단 구조(브랜드/지역/니즈)로 나눠야 최적화됨."
            icon={Search}
            colorClass="bg-green-50 text-green-600 border border-green-100"
            delay={0.1}
          />
          <ChannelCard 
            platform="구글 검색광고"
            format="Search + 확장(전화/리드폼/사이트링크)"
            purpose="네이버 대비 물량은 적으나 특정 니즈 키워드에서 고효율 발생"
            warning="키워드 매칭/검색어 관리 안 하면 쓸데없는 해외/정보성 쿼리로 새기 쉬움."
            icon={Search}
            colorClass="bg-blue-50 text-blue-600 border border-blue-100"
            delay={0.2}
          />
          <ChannelCard 
            platform="네이버 블로그/카페"
            format="콘텐츠 제작(SEO), 지면 광고, 체험단"
            purpose="'검색 → 비교 → 후기/분석' 흐름에서 신뢰 보강"
            warning="분양은 과장하면 역풍. 정보성 톤 + 근거(지도/생활권/호재)가 핵심."
            icon={MessageCircle}
            colorClass="bg-green-50 text-green-600 border border-green-100"
            delay={0.3}
          />
          <ChannelCard 
            platform="지역 기반 커뮤니티"
            format="지역 맘카페, 부동산 카페, 네이버 밴드"
            purpose="'생활권 사람들'에게 노출 및 유입"
            warning="운영정책/광고 금지 룰이 강한 곳이 많음. 무리하면 브랜드만 손상."
            icon={MapPin}
            colorClass="bg-orange-50 text-orange-600 border border-orange-100"
            delay={0.4}
          />
          <ChannelCard 
            platform="부동산 플랫폼/앱"
            format="네이버부동산, 직방, 다방, 호갱노노 등"
            purpose="부동산 관심층에게 직접 노출 (인지~방문 단계)"
            warning="매체마다 분양/광고 집행 제약이 있을 수 있어 런칭 시 확정하는 게 현실적."
            icon={Smartphone}
            colorClass="bg-teal-50 text-teal-600 border border-teal-100"
            delay={0.5}
          />
        </div>
      </motion.section>

      {/* 3. 리드 획득 */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
            <MousePointerClick size={28} />
          </div>
          <div>
            <div className="text-xs font-black text-emerald-500 tracking-widest uppercase mb-1">Step 3. Conversion</div>
            <h2 className="text-2xl font-bold text-slate-900">리드 획득</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChannelCard 
            platform="자체 랜딩 폼 (웹)"
            format="광고 → 랜딩 → 폼 제출 → CRM 자동 등록"
            purpose="데이터/트래킹/리타겟이 가장 깨끗한 메인 전환 경로"
            warning="폼이 길면 전환이 죽음. 질문을 늘릴수록 CPL이 올라감 (품질은 영업 프로세스로 보정)."
            icon={Globe}
            colorClass="bg-slate-100 text-slate-700 border border-slate-200"
            delay={0.1}
          />
          <ChannelCard 
            platform="전화/문자 클릭 전환"
            format="랜딩 내 전화하기, 문자상담 CTA"
            purpose="즉각적인 문의 및 상담 접수"
            warning="실제 통화/응대가 안 되면 '전환 로그만 쌓이고 계약은 0'이 나옴. SLA 필수."
            icon={Phone}
            colorClass="bg-emerald-50 text-emerald-600 border border-emerald-100"
            delay={0.2}
          />
          <ChannelCard 
            platform="메타 Lead Ads"
            format="인스타/페북 앱 내 리드폼"
            purpose="클릭 없이 앱 내에서 폼 제출 → 빠르게 리드 볼륨 확보"
            warning="허수/중복이 늘기 쉬움. 인증/중복필터 + 즉시 응대가 없으면 영업팀이 싫어함."
            icon={Facebook}
            colorClass="bg-blue-50 text-blue-600 border border-blue-100"
            delay={0.3}
          />
          <ChannelCard 
            platform="구글 Lead Form"
            format="검색/유튜브 리드폼 확장"
            purpose="검색에서 바로 리드 수집 (고의도 구간에 특히 좋음)"
            warning="한국에서는 트래킹/품질 관리가 세팅 미스 나기 쉬워서 초기 검증 필요."
            icon={Search}
            colorClass="bg-red-50 text-red-600 border border-red-100"
            delay={0.4}
          />
          <ChannelCard 
            platform="카카오톡 채널"
            format="채널 추가 유도 → 채팅 상담/상담신청"
            purpose="상담/방문 예약을 대화형으로 전환 (여성/가족 타깃에 강함)"
            warning="친구추가 유도만 하고 상담으로 안 끌고 가면 의미 없음. 대화 시나리오 필요."
            icon={MessageCircle}
            colorClass="bg-yellow-50 text-yellow-600 border border-yellow-100"
            delay={0.5}
          />
        </div>
      </motion.section>

      {/* 4. 리타겟 & 5. 영업지원 */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-purple-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/20">
              <RefreshCw size={28} />
            </div>
            <div>
              <div className="text-xs font-black text-purple-500 tracking-widest uppercase mb-1">Step 4. Nurture</div>
              <h2 className="text-2xl font-bold text-slate-900">리타겟/재유입</h2>
            </div>
          </div>
          <div className="h-full">
            <p className="text-sm text-slate-700 mb-8 bg-purple-50/80 p-4 rounded-2xl border border-purple-100 leading-relaxed">
              <strong className="text-purple-700">주의점:</strong> 리타겟은 "따라다니기"가 아니라 <strong>메시지를 바꾸는 것</strong>이 핵심입니다. (처음엔 존재 알리기, 재유입엔 반박처리/예약 유도)
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
                <div>
                  <div className="font-bold text-slate-900 mb-1 text-lg">메타 리타겟</div>
                  <div className="text-sm text-slate-600 leading-relaxed">대상: 랜딩 방문/스크롤/CTA 클릭/영상시청자<br/>소재: FAQ 반박(대출/분양가), 방문예약 강조</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
                <div>
                  <div className="font-bold text-slate-900 mb-1 text-lg">구글/유튜브 리타겟</div>
                  <div className="text-sm text-slate-600 leading-relaxed">대상: 사이트 방문자/유튜브 시청자<br/>소재: 6초 범퍼로 리마인드 + 15초로 베네핏 강화</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
                <div>
                  <div className="font-bold text-slate-900 mb-1 text-lg">네이버 GFA 리타겟</div>
                  <div className="text-sm text-slate-600 leading-relaxed">대상: 네이버 기반 방문자/전환 신호<br/>소재: "상담신청/방문예약" 전환 전용 배너 반복</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden group hover:border-orange-200 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
              <Briefcase size={28} />
            </div>
            <div>
              <div className="text-xs font-black text-orange-500 tracking-widest uppercase mb-1">Step 5. Sales</div>
              <h2 className="text-2xl font-bold text-slate-900">오프라인 영업 지원</h2>
            </div>
          </div>
          <div className="h-full">
            <p className="text-sm text-slate-700 mb-8 bg-orange-50/80 p-4 rounded-2xl border border-orange-100 leading-relaxed">
              디지털이지만 <strong>'영업 효율'</strong> 영역입니다. CRM 대시보드에서 채널별 유효리드율/연결률/예약률/방문률까지 봐야 광고 최적화가 가능합니다.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <Phone className="text-slate-500" size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1 text-lg">콜트래킹 번호 (채널별 분리)</div>
                  <div className="text-sm text-slate-600 leading-relaxed">광고/랜딩별로 서로 다른 번호를 부여하여 실제 통화/연결 데이터 수집</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <MessageCircle className="text-slate-500" size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1 text-lg">자동 문자/톡 시퀀스</div>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    - 접수 즉시: "접수 완료 + 상담 가능 시간 + 방문 예약 링크"<br/>
                    - 부재 시: "재콜 예정 안내 + 자주 묻는 질문 링크"
                  </div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <BarChart className="text-slate-500" size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1 text-lg">CRM 대시보드 피드백</div>
                  <div className="text-sm text-slate-600 leading-relaxed">단순 CPL이 아닌 최종 전환(예약/방문) 데이터를 광고 플랫폼에 피드백하여 CPA 최적화</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 6. 단계별 확장 로드맵 */}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">채널 조합 확장 로드맵</h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-slate-200 md:hidden"></div>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            
            <motion.div whileHover={{ y: -5 }} className="relative pl-14 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white md:hidden shadow-sm"></div>
              <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl -z-10 group-hover:bg-blue-100 transition-colors"></div>
                <div className="text-blue-600 font-black tracking-widest text-xs uppercase mb-3">Phase 1</div>
                <h3 className="font-bold text-slate-900 text-xl mb-6">런칭 ~ 2주<br/><span className="text-slate-500 text-base font-medium">핵심 코어 세팅</span></h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> 검색 (네이버/구글)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> 리타겟 (메타/구글/네이버)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> 최소 노출 (카카오/메타)</li>
                </ul>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="relative pl-14 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white md:hidden shadow-sm"></div>
              <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-50 rounded-full blur-2xl -z-10 group-hover:bg-indigo-100 transition-colors"></div>
                <div className="text-indigo-600 font-black tracking-widest text-xs uppercase mb-3">Phase 2</div>
                <h3 className="font-bold text-slate-900 text-xl mb-6">학습 후<br/><span className="text-slate-500 text-base font-medium">인지 및 모수 확장</span></h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500" /> 유튜브 영상/쇼츠</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500" /> 네이버 GFA 확장</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-indigo-500" /> 네이티브(콘텐츠형) 테스트</li>
                </ul>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="relative pl-14 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-orange-600 border-4 border-white md:hidden shadow-sm"></div>
              <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-lg shadow-slate-200/40 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-500"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full blur-2xl -z-10 group-hover:bg-orange-100 transition-colors"></div>
                <div className="text-orange-600 font-black tracking-widest text-xs uppercase mb-3">Phase 3</div>
                <h3 className="font-bold text-slate-900 text-xl mb-6">타이밍 승부<br/><span className="text-slate-500 text-base font-medium">이벤트 버스트</span></h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> 포털 프리미엄 지면</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> 부동산 플랫폼 광고</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> 지역 커뮤니티 패키지</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
