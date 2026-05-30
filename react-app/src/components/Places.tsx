'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Reveal from './Reveal'
import { places, City } from '@/data/places'

type Filter = 'all' | City

const filters: { value: Filter; label: string; count: number }[] = [
  { value: 'all', label: '전체', count: 13 },
  { value: 'shenzhen', label: '선전', count: 5 },
  { value: 'shanghai', label: '상하이', count: 8 },
]

export default function Places() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filtered = activeFilter === 'all'
    ? places
    : places.filter(p => p.city === activeFilter)

  return (
    <section id="places" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">공간 기록</p>
          <h2 className="section-title">탐방 공간 로그</h2>
          <p className="places__sub">
            방문한 모든 공간의 UX와 공간 연출을 기록합니다. 평점·사진은 탐방(7월) 후 업데이트됩니다.
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
                  <figure
                    className={`place-card__photo place-card__photo--${place.city === 'shenzhen' ? 'sz' : 'sh'}`}
                  >
                    {place.emoji}
                    <span className={`place-tag place-tag--${place.city === 'shenzhen' ? 'sz' : 'sh'}`}>
                      {place.cityLabel}
                    </span>
                    <span className="cat-tag">{place.categoryLabel}</span>
                  </figure>
                  <div className="place-card__body">
                    <h3>{place.title}</h3>
                    <div className="rating">
                      <span className="stars">☆☆☆☆☆</span>
                      <span className="rating-note">탐방 후 입력</span>
                    </div>
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
