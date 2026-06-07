import { NavLink } from 'react-router-dom'
import { Rss, Layers } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ 
      background: 'rgba(10,10,15,0.85)', 
      backdropFilter: 'blur(20px)',
      borderColor: '#252535'
    }}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FBBF24, #FB7185)' }}>
            <Rss size={14} className="text-black" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight" style={{ color: '#FAFAF7' }}>
            JSON<span className="text-gradient">Feed</span>
          </span>
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-1">
          {[
            { to: '/', label: 'Home', exact: true },
            { to: '/entities', label: 'Entities' },
          ].map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) => cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'text-amber-400 bg-amber-400/10'
                  : 'text-[#9999AA] hover:text-[#FAFAF7] hover:bg-[#1A1A26]'
              )}
            >
              {label === 'Entities' && <Layers size={13} />}
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
