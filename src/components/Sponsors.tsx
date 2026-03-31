export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-[Outfit] text-xs tracking-[0.2em] uppercase text-[#2B55A8] mb-4">
            // Sponsors
          </p>
          <h2
            className="font-extrabold leading-tight text-[#0A1628]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            協賛企業
          </h2>
        </div>

        {/* Sponsor Card */}
        <div className="flex justify-center">
          <div className="bg-[#F5F7FC] border border-[#DDE4EF] rounded-2xl p-10 md:p-14 max-w-2xl w-full flex flex-col items-center gap-8">
            <img
              src="/images/terakoya-logo.jpg"
              alt="Terakoya.AI"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <div className="text-center space-y-3">
              <h3
                className="font-extrabold text-[#0A1628] text-xl"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                Terakoya.AI
              </h3>
              <p className="text-[#3D5070] text-sm leading-relaxed">
                <a
                  href="https://dsaic.shiga-u.ac.jp/member/2305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B55A8] underline underline-offset-2 hover:text-[#3B6FD4] transition-colors"
                >
                  滋賀大学特任講師　ポール・リー先生
                </a>
                が代表を務める企業です。私たちの活動はTerakoyaアプリを中心に行っており、ALCの活動を支援してくださっています。
              </p>
            </div>
            {/* App intro */}
            <div className="w-full bg-white border border-[#DDE4EF] rounded-xl p-6 space-y-4">
              <p className="text-xs tracking-[0.15em] uppercase text-[#2B55A8] font-[Outfit]">// App</p>
              <div className="flex items-center gap-3">
                <img src="/images/app-icon-terakoya.jpg" alt="Terakoya アプリアイコン" className="w-14 h-14 rounded-2xl shadow-sm" />
                <p className="text-[#0A1628] font-semibold text-base" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  Terakoya アプリ
                </p>
              </div>
              <p className="text-[#3D5070] text-sm leading-relaxed">
                学びをシェアし、仲間とつながる滋賀大学専用学習コミュニティアプリです。ALCの活動でも中心的に使用しています。
              </p>
              {/* Screenshots */}
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                {[
                  { src: '/images/app-screenshot-1.jpg', label: 'シェア' },
                  { src: '/images/app-screenshot-2.jpg', label: 'つながる' },
                  { src: '/images/app-screenshot-3.jpg', label: 'チャット' },
                  { src: '/images/app-screenshot-4.jpg', label: 'グループ' },
                ].map(({ src, label }) => (
                  <div key={label} className="flex-shrink-0 w-28">
                    <img src={src} alt={label} className="w-full rounded-xl border border-[#DDE4EF] shadow-sm" />
                    <p className="text-center text-xs text-[#7A8FAD] mt-1.5">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1 items-center">
                <a
                  href="https://apps.apple.com/jp/app/terakoya/id6749531641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <img src="/images/badge-appstore.svg" alt="Download on the App Store" className="h-[40px]" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.terakoya&hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <img src="/images/badge-googleplay.png" alt="Google Playで手に入れよう" className="h-[50px]" />
                </a>
              </div>
            </div>

            <a
              href="https://terakoya.ai/jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2B55A8] text-white text-sm font-semibold hover:bg-[#3B6FD4] transition-colors duration-200"
            >
              公式サイトを見る
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
