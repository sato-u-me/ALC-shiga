export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 左: ラベル + 見出し */}
          <div>
            <p className="font-[Outfit] text-xs tracking-[0.2em] uppercase text-[#2B55A8] mb-5">
              // About
            </p>
            <h2
              className="font-extrabold leading-tight text-[#0A1628] mb-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              ALCとは
            </h2>
          </div>

          {/* 右: 本文 */}
          <div className="space-y-5 text-[#3D5070] leading-relaxed">
            <p className="text-lg font-medium text-[#0A1628]">
              AIツールを学び、自分で試す滋賀大学公認のサークルです。
            </p>
            <p>
              AIを用いたコンテストの開催や、AIツールの勉強会を行なっています。DS・経済学部問わず誰でも歓迎です!プログラミング、PCやAIに詳しくなくても、興味があれば気軽に参加してください。
            </p>
          </div>

        </div>

        {/* 区切り線 */}
        <div className="mt-16 border-t border-[#DDE4EF]" />
      </div>
    </section>
  )
}
