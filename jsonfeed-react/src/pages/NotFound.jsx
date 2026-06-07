import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-mono text-8xl font-bold mb-4" style={{ color: '#252535' }}>404</p>
      <h1 className="font-display text-2xl font-bold mb-3" style={{ color: '#FAFAF7' }}>
        Página no encontrada
      </h1>
      <p className="text-sm mb-8 max-w-xs" style={{ color: '#9999AA' }}>
        Esta ruta no existe. Vuelve al inicio para explorar el feed.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', color: '#0A0A0F' }}
      >
        <ArrowLeft size={14} />
        Volver al inicio
      </Link>
    </main>
  )
}
