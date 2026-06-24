import { useState } from 'react'
import './App.css'

function App() {
  const [view, setView] = useState('main') // 'main' or 'detail'
  const [activeTab, setActiveTab] = useState('overview') // 'overview', 'tech', 'work'
  const [subTab, setSubTab] = useState('review') // 'review', 'support', 'event', 'trouble'
  const [copiedEmail, setCopiedEmail] = useState(false)

  const email = 'skdmlc9@naver.com'
  const contact = '010-9264-4251'

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedState(true)
      setTimeout(() => setCopiedState(false), 2000)
    })
  }

  return (
    <div className="portfolio-container animate-fade-in-up">
      {view === 'main' ? (
        /* ================= MAIN PORTFOLIO VIEW ================= */
        <>
          {/* Profile Card */}
          <header className="glass-card profile-card">
            <div className="avatar-container">
              <div className="avatar-inner">HW</div>
            </div>
            <div>
              <span className="profile-role-badge">QA & Test Manager</span>
              <h1 className="profile-name">양희우</h1>
            </div>
            
            <div className="contact-info-grid">
              {/* Phone contact */}
              <a href={`tel:${contact}`} className="contact-item" title="전화 걸기">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.099.281 1 1 0 01-.172 1.058l-1.136 1.135a15.933 15.933 0 005.692 5.692l1.135-1.136a1 1 0 011.058-.172c.09.042.18.076.28.099l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contact}</span>
              </a>

              {/* Email contact (Click to copy) */}
              <div className="tooltip-container">
                <div className={`tooltip ${copiedEmail ? 'visible' : ''}`}>이메일 복사 완료!</div>
                <button onClick={() => copyToClipboard(email, setCopiedEmail)} className="contact-item" title="이메일 복사하기">
                  <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{email}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Project List Section */}
          <section>
            <div className="section-title-container">
              <svg className="section-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h2 className="section-title">참여 프로젝트</h2>
            </div>

            <div className="glass-card project-card">
              <div className="project-header">
                <div className="project-title-group">
                  <h3>모래묻은 키보드</h3>
                  <a href="https://sandykey.shop" target="_blank" rel="noopener noreferrer" className="project-link-badge">
                    sandykey.shop 
                    <svg className="footer-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="project-role-tag">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  담당 업무: 테스트 관리자 (Test Manager)
                </div>
              </div>

              <p className="project-desc">
                일과 휴식을 동시에 즐기려는 워케이션 공간 탐색 및 예약 시스템으로, 
                사무용 인프라 조건 필터링 기능을 탑재한 워케이션 매칭 웹 플랫폼 서비스입니다.
              </p>

              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  주요 QA 및 테스트 관리 영역 (내가 한 기능)
                </h4>
                <div className="features-grid">
                  <div className="feature-box">
                    <div className="feature-title-row">
                      <svg className="feature-check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <h4>참여후기</h4>
                    </div>
                    <p>이미지 업로드 크기 검증, 비속어 필터링 API 차단 정합성 및 무한 스크롤 정렬 상태 관리 테스트</p>
                  </div>

                  <div className="feature-box">
                    <div className="feature-title-row">
                      <svg className="feature-check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <h4>고객지원</h4>
                    </div>
                    <p>1:1 Q&A 비밀글 권한 설정 차단 검증 및 첨부파일 교체 도중 트랜잭션 장애 복구 롤백 검사</p>
                  </div>

                  <div className="feature-box">
                    <div className="feature-title-row">
                      <svg className="feature-check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <h4>이벤트</h4>
                    </div>
                    <p>선착순 쿠폰 발급 동시성 제어 부하 테스트, 이벤트 노출 스케줄 검증 및 유효기한 만료 테스트</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Action Button */}
          <div className="action-button-container">
            <button className="btn-glow" onClick={() => setView('detail')}>
              <span>포트폴리오 상세보기</span>
              <svg className="btn-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        /* ================= DETAILED QA REPORT VIEW ================= */
        <>
          {/* Detail View Header */}
          <div className="detail-header">
            <button className="btn-back" onClick={() => { setView('main'); setActiveTab('overview'); }}>
              <svg className="btn-back-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>메인으로</span>
            </button>
            <div className="detail-title-group">
              <h2>모래묻은 키보드</h2>
              <p>테스트 관리자(Test Manager) 상세 포트폴리오</p>
            </div>
          </div>

          {/* Interactive QA Tabs */}
          <section className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="tabs-navigation">
              <button 
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => { setActiveTab('overview'); }}
              >
                프로젝트개요
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
                onClick={() => { setActiveTab('tech'); }}
              >
                기술스택개발환경
              </button>
              <button 
                className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
                onClick={() => { setActiveTab('work'); }}
              >
                나의작업내용
              </button>
            </div>

            {/* TAB PANELS */}
            {activeTab === 'overview' && (
              <div className="tab-panel animate-slide-in">
                <p className="panel-intro">
                  <strong>모래묻은 키보드(sandykey.shop)</strong>는 사무 환경에 최적화된 인프라 필터링을 제공하는 워케이션 공간 탐색 및 예약 매칭 서비스입니다. 테스트 관리자로서 플랫폼 릴리즈 전반의 결함 관리 프로세스를 총괄하였습니다.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                  <h4 style={{ fontSize: '15px', color: 'var(--text-primary)' }}>서비스 주요 핵심 가치</h4>
                  <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>사무용 인프라 매칭</strong>: 개발/사무에 적합한 오피스 가구, 초고속 와이파이, 모니터 조건 필터링 탐색.</li>
                    <li><strong>안정적 거래 보장</strong>: Toss Payments API 연동을 통한 예약 및 안전한 이중 결제 방지 락 시스템.</li>
                    <li><strong>비즈니스 생태계 제공</strong>: 판매자(호스트) 백오피스 예약/매출/정산 신청 및 관리자 정산 세금계산서 관제.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="tab-panel animate-slide-in">
                <p className="panel-intro">
                  안정적인 다중 사용자 인입 처리와 예외 거래 롤백 검증을 위해 구축된 프로젝트 스택 및 품질 테스트 개발 환경 명세입니다.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Tech stack category grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <div className="feature-box" style={{ background: 'var(--box-bg)' }}>
                      <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>프로젝트 구현 기술</h4>
                      <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <li><strong>Frontend</strong>: React, Styled-components</li>
                        <li><strong>Backend</strong>: Java Spring Boot, Spring Security</li>
                        <li><strong>Database & ORM</strong>: MySQL, Spring Data JPA, QueryDSL</li>
                        <li><strong>Infrastructure</strong>: AWS (EC2, S3, RDS), GitHub Actions CI/CD</li>
                        <li><strong>Integration</strong>: Toss Payments API</li>
                      </ul>
                    </div>

                    <div className="feature-box" style={{ background: 'var(--box-bg)' }}>
                      <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>QA & 테스트 인프라</h4>
                      <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <li><strong>E2E Test Automation</strong>: Cypress Spec (브라우저 유저 시나리오 검증)</li>
                        <li><strong>Unit & Integration Test</strong>: Jest, JUnit5 (트랜잭션 롤백 및 API 검증)</li>
                        <li><strong>Load & Performance Test</strong>: Apache JMeter (선착순 쿠폰 발급 동시성 검사)</li>
                        <li><strong>Issue Tracking</strong>: Jira Software, GitHub Issues, Slack</li>
                      </ul>
                    </div>
                  </div>

                  <div className="feature-box" style={{ background: 'var(--box-bg)' }}>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>테스트 파이프라인 프로세스</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                      GitHub Actions CI/CD 빌드 단계와 Cypress 테스트 러너를 연계하여 PR 생성 시 자동으로 주요 API 기능의 회귀 테스트(Regression Test)가 수행되도록 자동화 빌드 배포 QA 파이프라인을 구축 및 검증했습니다.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'work' && (
              <div className="tab-panel animate-slide-in">
                <p className="panel-intro">
                  테스트 관리자(Test Manager)로서 참여후기, 고객지원, 이벤트 모듈에 대해 직접 설계하고 수행한 테스트 시나리오 및 검증 이력입니다.
                </p>

                {/* Sub-tab selection inside My Work */}
                <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', overflowX: 'auto' }}>
                  <button 
                    className={`tab-btn ${subTab === 'review' ? 'active' : ''}`}
                    onClick={() => { setSubTab('review'); }}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    참여후기
                  </button>
                  <button 
                    className={`tab-btn ${subTab === 'support' ? 'active' : ''}`}
                    onClick={() => { setSubTab('support'); }}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    고객지원
                  </button>
                  <button 
                    className={`tab-btn ${subTab === 'event' ? 'active' : ''}`}
                    onClick={() => { setSubTab('event'); }}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    이벤트
                  </button>
                  <button 
                    className={`tab-btn ${subTab === 'trouble' ? 'active' : ''}`}
                    onClick={() => { setSubTab('trouble'); }}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    트러블슈팅 사례
                  </button>
                </div>

                {/* Sub Tab contents */}
                {subTab === 'review' && (
                  <div className="animate-slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="test-scenarios-section">
                      <h4 style={{ fontSize: '14px', color: 'var(--text-primary)' }}>참여후기 테스트 시나리오</h4>
                      
                      <div className="scenario-card">
                        <span className="scenario-badge">TS-01</span>
                        <div className="scenario-content">
                          <h5>다중 이미지 파일 업로드 유효성 검증</h5>
                          <p>비허용 확장자(.exe, .zip) 파일 업로드 거절 및 단일 파일 최대 10MB 크기 초과 시 프론트/백엔드 동시 유효성 차단 확인.</p>
                        </div>
                      </div>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-02</span>
                        <div className="scenario-content">
                          <h5>비속어 및 욕설 필터링 엔진 검증</h5>
                          <p>후기 내용 등록 API 호출 시 지정된 사전 비속어 포함 시 알림 발생 및 차단 정합성 검증.</p>
                        </div>
                      </div>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-03</span>
                        <div className="scenario-content">
                          <h5>리뷰 평점 정렬 및 무한 스크롤 성능 검사</h5>
                          <p>누적 리뷰 수가 1,000건 이상일 때 페이징 성능 유지 상태 검증 및 평점순/최신순 스위칭 시 리렌더링 오류 검출.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {subTab === 'support' && (
                  <div className="animate-slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="test-scenarios-section">
                      <h4 style={{ fontSize: '14px', color: 'var(--text-primary)' }}>고객지원 테스트 시나리오</h4>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-04</span>
                        <div className="scenario-content">
                          <h5>비밀글 설정 및 비권한 차단 검증</h5>
                          <p>문의자가 '비밀글'을 체크해 저장한 글은 다른 사용자가 URL(ID값 포함)에 직접 접근하더라도 403 에러로 차단되는지 검사.</p>
                        </div>
                      </div>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-05</span>
                        <div className="scenario-content">
                          <h5>1:1 Q&A 실시간 상태 알림 트리거 검증</h5>
                          <p>관리자 대시보드에서 답변 완료 처리 시, 질문자의 계정 알림 테이블 인입 상태와 실시간 SSE 알림이 정상적으로 수신되는지 확인.</p>
                        </div>
                      </div>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-06</span>
                        <div className="scenario-content">
                          <h5>파일 업로드 장애 시 DB 롤백 정합성 검증</h5>
                          <p>게시글 메타 데이터가 DB에 등록되는 과정 중 저장소 업로드 지연/실패 시 DB 트랜잭션이 온전히 롤백되어 찌꺼기 데이터가 남지 않는지 테스트.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {subTab === 'event' && (
                  <div className="animate-slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="test-scenarios-section">
                      <h4 style={{ fontSize: '14px', color: 'var(--text-primary)' }}>이벤트 테스트 시나리오</h4>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-07</span>
                        <div className="scenario-content">
                          <h5>선착순 쿠폰 발급 동시성 테스트 (1,000 스레드 동시 인입)</h5>
                          <p>JMeter 부하 테스트를 사용하여 쿠폰 100개 한정 발급 요청에 1,000명의 동시 스레드를 발생 시켜 오차 없이 100개만 소진되는지 제어 확인.</p>
                        </div>
                      </div>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-08</span>
                        <div className="scenario-content">
                          <h5>이벤트 배너 노출 기간 스케줄링 검증</h5>
                          <p>배치 프로그램 연동 및 서버 시간 기준으로 노출 스케줄링 시간 이전/이후 화면 노출 여부와 적용 할인 가격 계산 로직 연계 테스트.</p>
                        </div>
                      </div>

                      <div className="scenario-card">
                        <span className="scenario-badge">TS-09</span>
                        <div className="scenario-content">
                          <h5>유효기간 만료 쿠폰의 결제창 적용 테스트</h5>
                          <p>발급된 쿠폰에 설정된 유효 기간이 만료되었을 때, 결제 모듈에서 적용 불가 처리 조건 및 만료 시점의 배치 삭제 스케줄러 작동 여부 검증.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {subTab === 'trouble' && (
                  <div className="animate-slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="trouble-case">
                      <div className="trouble-title">
                        <svg className="trouble-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>이벤트 쿠폰 선착순 발급 초과 지급 결함 해결</span>
                      </div>
                      <div className="trouble-details">
                        <div className="trouble-point">
                          <strong>발견 현상:</strong> 
                          <span>선착순 100명 쿠폰 발급 JMeter 동시성 테스트(1,000 User) 중, DB 커밋 시점 차이로 인해 104명이 쿠폰이 발급되어 재고가 마이너스 처리되는 레이스 컨디션 결함 발견.</span>
                        </div>
                        <div className="trouble-point">
                          <strong>원인 분석:</strong> 
                          <span>쿠폰 수량의 단순 Select 후 Update 구조로 인해 여러 스레드가 남은 재고(예: 1개)를 동시에 읽어 발생한 동시 요청 이슈.</span>
                        </div>
                        <div className="trouble-point">
                          <strong>조치 결과:</strong> 
                          <span>개발팀에 쿠폰 조회/소진 쿼리에 비관적 락(Pessimistic Write Lock) 적용 및 분산락 도입을 건의하여 적용. 재수행 결과 1,000회 동시 요청에서도 정확히 100개 한도로 지급되고 마이너스 재고 유발 이슈 완전히 소멸됨을 재검증 후 릴리즈 승인.</span>
                        </div>
                      </div>
                    </div>

                    <div className="trouble-case" style={{ borderLeftColor: 'var(--accent-primary)' }}>
                      <div className="trouble-title">
                        <svg className="trouble-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--accent-primary)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>고객지원 첨부파일 업로드 트랜잭션 불일치 롤백 해결</span>
                      </div>
                      <div className="trouble-details">
                        <div className="trouble-point">
                          <strong>발견 현상:</strong> 
                          <span>Q&A 등록 실패 테스트 과정에서 본문 유효성 오류 등으로 DB 트랜잭션이 롤백되는 상황임에도, 클라우드 스토리지(S3)에는 업로드되었던 파일이 삭제되지 않고 그대로 유지되어 메모리/스토리지 낭비 및 관리 불일치가 생기는 버그 검출.</span>
                        </div>
                        <div className="trouble-point">
                          <strong>원인 분석:</strong> 
                          <span>Spring Boot of DB 트랜잭션 수명 주기와 외부 클라우드 S3의 API 호출 트랜잭션이 별개로 동작하여 발생한 로직 불일치.</span>
                        </div>
                        <div className="trouble-point">
                          <strong>조치 결과:</strong> 
                          <span>DB 롤백 이벤트 발생 시 외부 스토리지에 업로드 완료된 물리 파일도 동시 삭제를 요청하는 EventListener 연동 테스트 케이스 구축. 예외 시 S3 삭제 API가 즉시 동기화되어 호출됨을 검증 완료.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </>
      )}

      {/* Shared Footer */}
      <footer className="portfolio-footer">
        <a 
          href="https://sandykey.shop" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link-btn"
        >
          <span>실제 배포 사이트 (sandykey.shop) 방문하기</span>
          <svg className="footer-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <span className="copyright-text">
          © {new Date().getFullYear()} 양희우 Portfolio. All Rights Reserved. Designed with premium Glassmorphism.
        </span>
      </footer>
    </div>
  )
}

export default App
