'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'

// 인트로 "팡" 이징 — 스프링처럼 강하게 열리는 커브
const SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1]

// basePath 접두사 — <video>/<source>/poster 같은 raw 태그엔 Next가 자동 적용 안 함
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  // 영상 로드 감지
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setVideoReady(true)
    v.addEventListener('canplaythrough', onCanPlay)
    // 이미 로드돼 있는 경우
    if (v.readyState >= 3) setVideoReady(true)
    return () => v.removeEventListener('canplaythrough', onCanPlay)
  }, [])

  // 인트로 시퀀스: 커튼 → 배경 "팡" 열림 → 텍스트 순차 등장
  // prefersReduced면 전부 즉시 표시
  const skip = !!prefersReduced

  // 텍스트 줄별 stagger variants
  const lineVariants = {
    hidden: skip ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }
  const lineTransition = (delay: number) => ({
    duration: skip ? 0 : 0.75,
    delay: skip ? 0 : 1.0 + delay,
    ease: SPRING,
  })

  return (
    <>
      {/* ── 인트로 커튼 (검정 → 사라짐) ── */}
      <AnimatePresence>
        {!introDone && !skip && (
          <motion.div
            className="hero__curtain"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            onAnimationComplete={() => setIntroDone(true)}
          />
        )}
      </AnimatePresence>

      <section id="hero" className="hero">

        {/* ── CSS fallback 배경 (영상 없을 때 도시 야경 분위기) ── */}
        <div className="hero__bg-fallback" />

        {/* ── 실사 영상 배경 ── */}
        {/* 영상 준비되면 fallback 위로 보임 */}
        <motion.video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${BP}/video/hero-poster.jpg`}
          initial={{ opacity: 0, scale: skip ? 1 : 1.12 }}
          animate={videoReady
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: skip ? 1 : 1.12 }
          }
          transition={{ duration: skip ? 0 : 1.1, ease: SPRING }}
        >
          <source src={`${BP}/video/hero.mp4`} type="video/mp4" />
        </motion.video>

        {/* ── CSS 배경도 "팡" 열리는 효과 (영상 없을 때) ── */}
        {!videoReady && (
          <motion.div
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            initial={{ scale: skip ? 1 : 1.12, opacity: skip ? 1 : 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: skip ? 0 : 1.0, delay: skip ? 0 : 0.2, ease: SPRING }}
          />
        )}

        {/* ── 오버레이 레이어들 ── */}
        <div className="hero__overlay" style={{ zIndex: 5 }} />
        <div className="hero__color-grade" />
        <div className="hero__vignette" />

        {/* ── 콘텐츠 ── */}
        <div className="hero__content">

          {/* 로고 */}
          <motion.div
            initial={skip ? false : { opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: skip ? 0 : 0.65, delay: skip ? 0 : 0.85, ease: SPRING }}
          >
            <Image
              src={`${BP}/assets/hansung-mark.png`}
              alt="한성대학교 엠블럼"
              width={130}
              height={52}
              className="hero__crest"
              style={{ margin: '0 auto 4px', width: 'auto', height: 52 }}
              priority
            />
          </motion.div>

          {/* eyebrow */}
          <motion.p
            className="hero__eyebrow"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={lineTransition(0)}
          >
            한성대학교 글로벌 리더십 탐방단 2026 · 4조
          </motion.p>

          {/* 구분선 */}
          <motion.div
            className="hero__rule"
            initial={skip ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: skip ? 0 : 0.8, delay: skip ? 0 : 1.1, ease: SPRING }}
          />

          {/* 메인 타이틀 — 3줄 개별 stagger */}
          <motion.h1 className="hero__title" aria-label="선전과 상하이의 공간 연출 및 사용자 경험 비교">
            {['선전과 상하이의', '공간 연출 및', '사용자 경험 비교'].map((line, i) => (
              <motion.span
                key={line}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={lineTransition(i * 0.12)}
                style={{ display: 'block', willChange: 'transform' }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* 구분선 */}
          <motion.div
            className="hero__rule"
            initial={skip ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: skip ? 0 : 0.8, delay: skip ? 0 : 1.4, ease: SPRING }}
          />

          {/* 서브타이틀 */}
          <motion.p
            className="hero__subtitle"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={lineTransition(0.45)}
          >
            첨단 기술과 문화 융합 기반 글로벌 공간 트렌드 분석
          </motion.p>

          {/* 키워드 */}
          <motion.div
            className="hero__keywords"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={lineTransition(0.55)}
          >
            실증<span className="dot">·</span>융합<span className="dot">·</span>기록
          </motion.div>

          {/* 도시 카드 */}
          <motion.div
            className="hero__cities"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={lineTransition(0.68)}
          >
            <motion.div
              className="hero__city hero__city--sz"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="hero__city-icon">⚡</span>
              <strong>선전</strong>
              <small>첨단 기술 · 미래 도시</small>
            </motion.div>
            <span className="hero__city-divider">vs</span>
            <motion.div
              className="hero__city hero__city--sh"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="hero__city-icon">🏯</span>
              <strong>상하이</strong>
              <small>역사 문화 · 공간 재생</small>
            </motion.div>
          </motion.div>

          {/* 메타 */}
          <motion.p
            className="hero__meta"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={lineTransition(0.8)}
          >
            📅 2026.07.06 – 07.10 · 4박 5일 · 🔥 불사조 기록단
          </motion.p>

          {/* 스크롤 유도 */}
          <motion.a
            href="#about"
            className="hero__scroll"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={lineTransition(0.95)}
            style={{ marginTop: 12 }}
          >
            스크롤
            <motion.span
              animate={skip ? {} : { y: [0, 7, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3v10M3 9l5 4 5-4" />
              </svg>
            </motion.span>
          </motion.a>
        </div>
      </section>
    </>
  )
}
