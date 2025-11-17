import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Diensten', href: '#services' },
    { label: 'Over ons', href: '#about' },
    { label: 'Merken', href: '#brands' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">W</div>
            <div className="leading-tight">
              <p className="text-sm text-gray-500">Westtronics</p>
              <p className="text-base font-semibold">Auto Elektronica</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+31000000000" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
              <Phone className="w-4 h-4" /> Bel ons
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-3 rounded-md shadow-sm">
              <Mail className="w-4 h-4" /> Offerte
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-gray-700">
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex gap-3">
              <a href="tel:+31000000000" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                <Phone className="w-4 h-4" /> Bel ons
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold py-2 px-3 rounded-md">
                <Mail className="w-4 h-4" /> Offerte
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
