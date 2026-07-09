'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Reveal from './Reveal'
import { places, SpaceType } from '@/data/places'

// basePath 접두사 — unoptimized export에선 <img> src에 자동 적용 안 함
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

type Filter = 'all' | SpaceType

const filters: { value: Filter; label: string; count: number }[] = [
  { value: 'all', label: '전체', count: places.length },
  { value: 'regen', label: '역사재생', count: places.filter(p => p.spaceType === 'regen').length },
  { value: 'commercial', label: '상업건축', count: places.filter(p => p.spaceType === 'commercial').length },
  { value: 'smart', label: '스마트인프라', count: places.filter(p => p.spaceType === 'smart').length },
]

export default function Places() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filtered = activeFilter === 'all'
    ? places
    : places.filter(p => p.spaceType === activeFilter)

  return (
    <section id="places" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">공간 기록</p>
          <h2 className="section-title">4일차 탐방 공간 로그</h2>
          <p className="places__sub">
            자유 탐방에서 방문한 공간의 UX와 공간 연출을 기록합니다. 평점·사진은 탐방(7월) 후 업데이트됩니다.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="places__filters">
            {filters.map(f => (
              <button
                key={f.value}
                className={`filter${activeFilter === f.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label} <span>{f.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <LayoutGroup>
          <motion.div className="places__grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((place, i) => (
                <motion.article
                  key={place.id}
                  className="place-card"
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: (i % 3) * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <figure className={`place-card__photo place-card__photo--${place.spaceType}`}>
                    {place.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`${BP}/assets/places/${place.photo}`}
                        alt={place.title}
                        className="place-card__img"
                        loading="lazy"
                      />
                    ) : (
                      place.emoji
                    )}
                    <span className="cat-tag">{place.categoryLabel}</span>
                  </figure>
                  <div className="place-card__body">
                    <h3>{place.title}</h3>
                    <p>{place.desc}</p>
                    <div className="ux-point">
                      <div className="ux-label">UX 관전 포인트</div>
                      <p>{place.uxPoint}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
