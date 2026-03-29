const INSTAGRAM_URL = 'https://www.instagram.com/shigauniv_alc?igsh=MWx5bmd2cGZwOXB1Zw=='

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#2B55A8] overflow-hidden">
      {/* Bottom-right icon */}
      <div className="absolute bottom-6 right-8 opacity-20">
        <img src="/images/icon.png" alt="" className="w-24 h-24 object-contain" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-[Outfit] text-xs tracking-[0.2em] uppercase text-white/50 mb-5">
          // Contact Us
        </p>
        <h2
          className="font-extrabold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          お気軽にご連絡ください!
        </h2>
        <p className="text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
          入部・見学・質問など、なんでもDMでどうぞ。<br />
          公式Instagramからお気軽にご連絡ください。
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#2B55A8] font-bold hover:bg-[#EEF3FB] px-10 py-4 rounded-full transition-all duration-300 text-sm"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          @shigauniv_alc をフォロー
        </a>
      </div>
    </section>
  )
}
