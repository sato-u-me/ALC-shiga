import { useState, useEffect } from 'react'

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'ACTIVITIES', href: '#activities' },
  { label: 'UPCOMING', href: '#upcoming' },
  { label: 'JOIN', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(43,85,168,0.08)] py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 overflow-hidden">
            <img src="/images/icon.png" alt="ALC" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-[Syne] font-extrabold text-xl tracking-tight text-[#0A1628] block leading-none">
              ALC
            </span>
            <span className="font-[Outfit] text-[9px] tracking-widest uppercase text-[#7A8FAD] block">
              AI Learning Community
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="font-[Outfit] text-xs tracking-[0.15em] text-[#7A8FAD] hover:text-[#2B55A8] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex font-[Outfit] text-xs tracking-wider uppercase bg-[#2B55A8] text-white px-6 py-2.5 rounded-full hover:bg-[#3B6FD4] transition-all duration-200"
          >
            参加する
          </a>
          <button
            className="flex flex-col gap-[5px] p-1 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0A1628] transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0A1628] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0A1628] transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4 border-t border-[#DDE4EF] gap-0">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3.5 font-[Outfit] text-xs tracking-[0.15em] text-[#7A8FAD] hover:text-[#2B55A8] border-b border-[#DDE4EF] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center font-[Outfit] text-xs tracking-wider uppercase bg-[#2B55A8] text-white py-3 rounded-full"
          >
            参加する
          </a>
        </nav>
      </div>
    </header>
  )
}
