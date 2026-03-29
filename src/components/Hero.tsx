import { useState } from 'react'

const letters = [
  { letter: 'A', word: 'AI' },
  { letter: 'L', word: 'Learning' },
  { letter: 'C', word: 'Community' },
]

// Desktop: fit "Community" (9 chars) in 88vw. Mobile: single letters only, so larger
const FONT_SIZE_DESKTOP = `${88 / (9 * 0.75)}vw`   // ~13vw
const FONT_SIZE_MOBILE = '28vw'                       // A/L/C only, bold impact

export default function Hero() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)

  const fontSize = isMobile ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP

  return (
    <section className="relative min-h-screen flex flex-col" style={{ overflow: 'hidden' }}>
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="ALC"
          className="w-full h-full object-cover object-[center_20%] md:object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 px-5 md:px-6 flex-1 flex flex-col justify-between" style={{ maxWidth: '100vw' }}>
        {/* Top label */}
        <p
          className="text-sm animate-fadeUp"
          style={{ opacity: 0, animationDelay: '0s', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700, color: '#2B55A8', letterSpacing: '0.1em' }}
        >
          滋賀大学公認サークル
        </p>

        {/* A L C */}
        <div className="leading-none select-none">
          {letters.map(({ letter, word }, i) => {
            const displayed = (!isMobile && hovered === i) ? word : letter
            return (
              <div
                key={letter}
                className="animate-fadeUp"
                style={{ animationDelay: '0.1s', opacity: 0 }}
              >
                <h1
                  className="font-extrabold cursor-default"
                  style={{
                    fontSize,
                    fontFamily: "'Noto Sans JP', sans-serif",
                    letterSpacing: '-0.02em',
                    lineHeight: 0.88,
                    color: '#2B55A8',
                    display: 'block',
                  }}
                  onMouseEnter={() => !isMobile && setHovered(i)}
                  onMouseLeave={() => !isMobile && setHovered(null)}
                >
                  {displayed.split('').map((char, j) => (
                    <span
                      key={`${hovered === i ? 'w' : 'l'}-${j}`}
                      style={{
                        display: 'inline-block',
                        animation: 'charIn 0.35s cubic-bezier(0.16,1,0.3,1) both',
                        animationDelay: `${j * 0.04}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              </div>
            )
          })}
        </div>

        {/* ALC full name */}
        <p
          className="font-extrabold text-white animate-fadeUp mt-2 w-fit px-4 py-1"
          style={{ fontSize: 'clamp(0.85rem, 3vw, 1.8rem)', fontFamily: "'Noto Sans JP', sans-serif", animationDelay: '1.6s', opacity: 0, background: 'rgba(43,85,168,0.75)', backdropFilter: 'blur(4px)' }}
        >
          ALC AI Learning Community
        </p>

        {/* Bottom bar */}
        <div
          className="flex items-center gap-3 flex-wrap pb-10 pt-5 animate-fadeUp"
          style={{ animationDelay: '1.8s', opacity: 0 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#EEF3FB] text-[#2B55A8] font-[Outfit] text-xs tracking-wider uppercase px-6 py-3 md:px-7 md:py-3.5 rounded-full transition-all duration-300 font-bold"
          >
            参加する →
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white/90 text-[#2B55A8] hover:bg-white font-[Outfit] text-xs tracking-wider uppercase px-6 py-3 md:px-7 md:py-3.5 rounded-full transition-all duration-300"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </section>
  )
}
