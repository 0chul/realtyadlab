import React from 'react';
import { 
  MonitorPlay, Search, MousePointerClick, RefreshCw, 
  Briefcase, AlertCircle, CheckCircle2, Layers, 
  Youtube, Facebook, MessageCircle, Globe, MapPin, 
  Smartphone, Phone, BarChart
} from 'lucide-react';

const ChannelCard = ({ platform, format, purpose, warning, icon: Icon, colorClass }: any) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
        <Icon size={20} />
      </div>
      <h4 className="font-bold text-slate-900 text-lg">{platform}</h4>
    </div>
    
    <div className="space-y-4 flex-1">
      <div>
        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">형태</div>
        <p className="text-sm text-slate-700 font-medium">{format}</p>
      </div>
      <div>
        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">용도</div>
        <p className="text-sm text-slate-600">{purpose}</p>
      </div>
    </div>
    
    <div className="mt-5 pt-4 border-t border-slate-100">
      <div className="flex items-start gap-2 text-amber-700 bg-amber-50 p-3 rounded-lg">
        <AlertCircle size={16} className="shrink-0 mt-0.5" />
        <p className="text-xs leading-relaxed"><strong>주의:</strong> {warning}</p>
      </div>
    </div>
  </div>
);

export default function ChannelStrategy() {
  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">구체적인 채널별 전략</h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          "채널을 다 쓴다"는 말이 제안서에서 설득력이 생기려면, <strong>플랫폼명 + 상품명(형태) + 용도 + 주의점</strong>이 명확해야 합니다. 
          채널을 너무 많이 동시에 열면 학습이 분산되므로, 풀세트를 기획하되 운영은 단계적으로 진행합니다.
        </p>
        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-900/20">
          <p className="text-lg font-medium leading-relaxed flex items-start gap-3">
            <Layers className="shrink-0 mt-1" size={24} />
            "포털/동영상/SNS로 도달을 만들고, 검색으로 고의도 유입을 회수하며, 리타겟으로 CPL을 낮추고, 최종 리드는 웹폼/메신저/리드폼을 표준화해 CRM로 자동 유입시켜 영업팀이 즉시 처리하는 구조로 운영합니다."
          </p>
        </div>
      </section>

      {/* 1. 노출/인지 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <MonitorPlay size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">1. 노출 / 인지 (Awareness)</h2>
        </div>
        <p className="text-slate-600 mb-6">모수 만들기 + 리타겟 풀 확보</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChannelCard 
            platform="유튜브 (YouTube Ads)"
            format="인스트림 스킵/논스킵, 범퍼(6초), 인피드, 쇼츠"
            purpose="반경 지역 + 관심(부동산/이사) 도달, 영상시청 기반 리타겟 풀 생성"
            warning="영상 퀄리티가 낮으면 CPM만 소진하고 기억에 남지 않음. 최소 6초/15초 버전 필수."
            icon={Youtube}
            colorClass="bg-red-50 text-red-600 border border-red-100"
          />
          <ChannelCard 
            platform="메타 (Instagram/Facebook)"
            format="피드/릴스/스토리, 캐러셀, 컬렉션"
            purpose="라이프 이벤트/관심사 기반 확산 + 클릭/영상시청 리타겟 풀"
            warning="분양은 '정보성' 메시지 없으면 클릭 낭비가 흔함. 감성만으로는 CPL이 떨어지지 않음."
            icon={Facebook}
            colorClass="bg-blue-50 text-blue-600 border border-blue-100"
          />
          <ChannelCard 
            platform="카카오모먼트"
            format="디스플레이/동영상 (카카오톡/다음 지면), 타겟팅"
            purpose="지역 생활권 도달 + 클릭 리타겟 모수 만들기"
            warning="'광고는 노출되는데 리드가 안 잡히는' 전형 구간. 리타겟과 세트로 설계해야 함."
            icon={MessageCircle}
            colorClass="bg-yellow-50 text-yellow-600 border border-yellow-100"
          />
          <ChannelCard 
            platform="네이버 GFA"
            format="디스플레이/동영상 (네이버 내외 지면)"
            purpose="네이버 생태계에서 리타겟 풀 만들기, 네이버 검색과 시너지"
            warning="소재/카피가 약하면 '광고 같아 보이는 배너'로 소멸. 첫 프레임이 중요."
            icon={Globe}
            colorClass="bg-green-50 text-green-600 border border-green-100"
          />
          <ChannelCard 
            platform="포털 메인/프리미엄 지면"
            format="메인 롤링/스페셜 등 프리미엄 패키지"
            purpose="단기간 '알려야 하는' 타이밍(오픈/청약 직전)에 도달 폭발"
            warning="비싸고 성과형이 아니라 '타이밍용'. 성과는 리타겟/검색에서 회수해야 함."
            icon={Layers}
            colorClass="bg-slate-50 text-slate-600 border border-slate-200"
          />
          <ChannelCard 
            platform="네이티브 광고 네트워크"
            format="데이블, 타불라, 아웃브레인 계열 (기사/콘텐츠형)"
            purpose="스토리텔링(입지/호재/생활권) → 랜딩 유입"
            warning="자극적 제목을 쓰면 클릭은 나오지만 허수 유입으로 리드 품질이 망가질 수 있음."
            icon={Globe}
            colorClass="bg-indigo-50 text-indigo-600 border border-indigo-100"
          />
        </div>
      </section>

      {/* 2. 방문/관심 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <Search size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">2. 방문 / 관심 (Consideration)</h2>
        </div>
        <p className="text-slate-600 mb-6">의도 트래픽을 홈페이지로</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChannelCard 
            platform="네이버 검색광고"
            format="파워링크, 브랜드검색, 파워컨텐츠"
            purpose="분양에서 제일 강한 축. 고의도 검색 유저 확보"
            warning="'키워드만 많다'는 게 능력이 아님. 3단 구조(브랜드/지역/니즈)로 나눠야 최적화됨."
            icon={Search}
            colorClass="bg-green-50 text-green-600 border border-green-100"
          />
          <ChannelCard 
            platform="구글 검색광고"
            format="Search + 확장(전화/리드폼/사이트링크)"
            purpose="네이버 대비 물량은 적으나 특정 니즈 키워드에서 고효율 발생"
            warning="키워드 매칭/검색어 관리 안 하면 쓸데없는 해외/정보성 쿼리로 새기 쉬움."
            icon={Search}
            colorClass="bg-blue-50 text-blue-600 border border-blue-100"
          />
          <ChannelCard 
            platform="네이버 블로그/카페"
            format="콘텐츠 제작(SEO), 지면 광고, 체험단"
            purpose="'검색 → 비교 → 후기/분석' 흐름에서 신뢰 보강"
            warning="분양은 과장하면 역풍. 정보성 톤 + 근거(지도/생활권/호재)가 핵심."
            icon={MessageCircle}
            colorClass="bg-green-50 text-green-600 border border-green-100"
          />
          <ChannelCard 
            platform="지역 기반 커뮤니티"
            format="지역 맘카페, 부동산 카페, 네이버 밴드"
            purpose="'생활권 사람들'에게 노출 및 유입"
            warning="운영정책/광고 금지 룰이 강한 곳이 많음. 무리하면 브랜드만 손상."
            icon={MapPin}
            colorClass="bg-orange-50 text-orange-600 border border-orange-100"
          />
          <ChannelCard 
            platform="부동산 플랫폼/앱"
            format="네이버부동산, 직방, 다방, 호갱노노 등"
            purpose="부동산 관심층에게 직접 노출 (인지~방문 단계)"
            warning="매체마다 분양/광고 집행 제약이 있을 수 있어 런칭 시 확정하는 게 현실적."
            icon={Smartphone}
            colorClass="bg-teal-50 text-teal-600 border border-teal-100"
          />
        </div>
      </section>

      {/* 3. 리드 획득 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <MousePointerClick size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">3. 리드 획득 (Conversion)</h2>
        </div>
        <p className="text-slate-600 mb-6">폼/상담 채널을 '표준화'해서 CRM으로</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChannelCard 
            platform="자체 랜딩 폼 (웹)"
            format="광고 → 랜딩 → 폼 제출 → CRM 자동 등록"
            purpose="데이터/트래킹/리타겟이 가장 깨끗한 메인 전환 경로"
            warning="폼이 길면 전환이 죽음. 질문을 늘릴수록 CPL이 올라감 (품질은 영업 프로세스로 보정)."
            icon={Globe}
            colorClass="bg-slate-100 text-slate-700 border border-slate-200"
          />
          <ChannelCard 
            platform="전화/문자 클릭 전환"
            format="랜딩 내 전화하기, 문자상담 CTA"
            purpose="즉각적인 문의 및 상담 접수"
            warning="실제 통화/응대가 안 되면 '전환 로그만 쌓이고 계약은 0'이 나옴. SLA 필수."
            icon={Phone}
            colorClass="bg-emerald-50 text-emerald-600 border border-emerald-100"
          />
          <ChannelCard 
            platform="메타 Lead Ads"
            format="인스타/페북 앱 내 리드폼"
            purpose="클릭 없이 앱 내에서 폼 제출 → 빠르게 리드 볼륨 확보"
            warning="허수/중복이 늘기 쉬움. 인증/중복필터 + 즉시 응대가 없으면 영업팀이 싫어함."
            icon={Facebook}
            colorClass="bg-blue-50 text-blue-600 border border-blue-100"
          />
          <ChannelCard 
            platform="구글 Lead Form"
            format="검색/유튜브 리드폼 확장"
            purpose="검색에서 바로 리드 수집 (고의도 구간에 특히 좋음)"
            warning="한국에서는 트래킹/품질 관리가 세팅 미스 나기 쉬워서 초기 검증 필요."
            icon={Search}
            colorClass="bg-red-50 text-red-600 border border-red-100"
          />
          <ChannelCard 
            platform="카카오톡 채널"
            format="채널 추가 유도 → 채팅 상담/상담신청"
            purpose="상담/방문 예약을 대화형으로 전환 (여성/가족 타깃에 강함)"
            warning="친구추가 유도만 하고 상담으로 안 끌고 가면 의미 없음. 대화 시나리오 필요."
            icon={MessageCircle}
            colorClass="bg-yellow-50 text-yellow-600 border border-yellow-100"
          />
        </div>
      </section>

      {/* 4. 리타겟 & 5. 영업지원 */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <RefreshCw size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">4. 리타겟/재유입</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
            <p className="text-sm text-slate-600 mb-6 bg-slate-50 p-3 rounded-lg">
              <strong>주의점:</strong> 리타겟은 "따라다니기"가 아니라 <strong>메시지를 바꾸는 것</strong>이 핵심입니다. (처음엔 존재 알리기, 재유입엔 반박처리/예약 유도)
            </p>
            <ul className="space-y-4">
              <li className="border-b border-slate-100 pb-4">
                <div className="font-bold text-slate-900 mb-1">메타 리타겟</div>
                <div className="text-sm text-slate-600">대상: 랜딩 방문/스크롤/CTA 클릭/영상시청자<br/>소재: FAQ 반박(대출/분양가), 방문예약 강조</div>
              </li>
              <li className="border-b border-slate-100 pb-4">
                <div className="font-bold text-slate-900 mb-1">구글/유튜브 리타겟</div>
                <div className="text-sm text-slate-600">대상: 사이트 방문자/유튜브 시청자<br/>소재: 6초 범퍼로 리마인드 + 15초로 베네핏 강화</div>
              </li>
              <li>
                <div className="font-bold text-slate-900 mb-1">네이버 GFA 리타겟</div>
                <div className="text-sm text-slate-600">대상: 네이버 기반 방문자/전환 신호<br/>소재: "상담신청/방문예약" 전환 전용 배너 반복</div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">5. 오프라인 영업 지원</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
            <p className="text-sm text-slate-600 mb-6 bg-slate-50 p-3 rounded-lg">
              디지털이지만 <strong>'영업 효율'</strong> 영역입니다. CRM 대시보드에서 채널별 유효리드율/연결률/예약률/방문률까지 봐야 광고 최적화가 가능합니다.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone className="text-slate-400 mt-0.5 shrink-0" size={18} />
                <div>
                  <div className="font-bold text-slate-900 mb-1">콜트래킹 번호 (채널별 분리)</div>
                  <div className="text-sm text-slate-600">광고/랜딩별로 서로 다른 번호를 부여하여 실제 통화/연결 데이터 수집</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MessageCircle className="text-slate-400 mt-0.5 shrink-0" size={18} />
                <div>
                  <div className="font-bold text-slate-900 mb-1">자동 문자/톡 시퀀스</div>
                  <div className="text-sm text-slate-600">
                    - 접수 즉시: "접수 완료 + 상담 가능 시간 + 방문 예약 링크"<br/>
                    - 부재 시: "재콜 예정 안내 + 자주 묻는 질문 링크"
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <BarChart className="text-slate-400 mt-0.5 shrink-0" size={18} />
                <div>
                  <div className="font-bold text-slate-900 mb-1">CRM 대시보드 피드백</div>
                  <div className="text-sm text-slate-600">단순 CPL이 아닌 최종 전환(예약/방문) 데이터를 광고 플랫폼에 피드백하여 CPA 최적화</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. 단계별 확장 로드맵 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">채널 조합 확장 로드맵</h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-slate-200 md:hidden"></div>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
            
            <div className="relative pl-14 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white md:hidden shadow-sm"></div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <div className="text-blue-600 font-bold mb-2">1단계 (런칭 ~ 2주)</div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">핵심 코어 세팅</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> 검색 (네이버/구글)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> 리타겟 (메타/구글/네이버)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> 최소 노출 (카카오/메타)</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-14 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white md:hidden shadow-sm"></div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                <div className="text-indigo-600 font-bold mb-2">2단계 (학습 후)</div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">인지 및 모수 확장</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500" /> 유튜브 영상/쇼츠</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500" /> 네이버 GFA 확장</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500" /> 네이티브(콘텐츠형) 테스트</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-14 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-orange-600 border-4 border-white md:hidden shadow-sm"></div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                <div className="text-orange-600 font-bold mb-2">3단계 (타이밍 승부)</div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">이벤트 버스트</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> 포털 프리미엄 지면</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> 부동산 플랫폼 광고</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> 지역 커뮤니티 패키지</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
