import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Globe, Layers } from 'lucide-react'
import { usePosts } from '../hooks/usePosts'
import PostCard from '../components/PostCard'
import SkeletonCard from '../components/SkeletonCard'

export default function Home() {
  const { posts, loading, error } = usePosts(12)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 px-6">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #FBBF24, transparent 70%)' }} />
          <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-8"
            style={{ background: 'radial-gradient(circle, #FB7185, transparent 70%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 animate-fade-up"
            style={{ background: '#1A1A26', border: '1px solid #252535' }}>
            <Zap size={12} className="text-amber-400" />
            <span className="text-xs font-mono" style={{ color: '#9999AA' }}>
              JSONPlaceholder API · Live data
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up delay-100"
            style={{ color: '#FAFAF7' }}>
            JSON<span className="text-gradient italic">Feed</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal" style={{ color: '#9999AA' }}>
              simulated social posts
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg max-w-xl leading-relaxed mb-10 animate-fade-up delay-200"
            style={{ color: '#9999AA' }}>
            Una interfaz minimalista que consume datos en tiempo real desde{' '}
            <span className="font-mono text-amber-400 text-sm">jsonplaceholder.typicode.com</span>.
            Explora publicaciones simuladas con React + Vite.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up delay-300">
            <a href="#feed"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(251,191,36,0.3)]"
              style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', color: '#0A0A0F' }}>
              Ver el feed
              <ArrowRight size={15} />
            </a>
            <Link to="/entities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[#1A1A26]"
              style={{ border: '1px solid #252535', color: '#FAFAF7' }}>
              <Layers size={15} />
              Ver entidades
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 animate-fade-up delay-400">
            {[
              { label: 'Posts totales', value: '100', icon: Globe },
              { label: 'Usuarios', value: '10', icon: Layers },
              { label: 'Endpoint', value: '/posts', icon: Zap },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: '#1A1A26', border: '1px solid #252535' }}>
                  <Icon size={14} className="text-amber-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl" style={{ color: '#FAFAF7' }}>{value}</div>
                  <div className="text-xs font-mono" style={{ color: '#9999AA' }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feed ── */}
      <section id="feed" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-2xl font-bold mb-1" style={{ color: '#FAFAF7' }}>
                Últimas publicaciones
              </h2>
              <p className="text-sm font-mono" style={{ color: '#9999AA' }}>
                GET /posts?_limit=12
              </p>
            </div>
            {!loading && (
              <span className="tag-accent">{posts.length} resultados</span>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-xl p-6 text-center" style={{ background: '#1A1A26', border: '1px solid rgba(251,113,133,0.3)' }}>
              <p className="text-sm font-mono" style={{ color: '#FB7185' }}>⚠ Error al cargar: {error}</p>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading
              ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
              : posts.map((post, i) => <PostCard key={post.id} post={post} index={i} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}
