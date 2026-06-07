import { useState, useEffect } from 'react'
import { Hash, User, FileText, ChevronUp, ChevronDown, Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'

function useAllPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetch100() {
      try {
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetch100()
  }, [])

  return { posts, loading, error }
}

export default function Entities() {
  const { posts, loading, error } = useAllPosts()
  const [sortKey, setSortKey] = useState('id')
  const [sortDir, setSortDir] = useState('asc')
  const [search, setSearch] = useState('')

  const filtered = posts
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      String(p.userId).includes(search) ||
      String(p.id).includes(search)
    )
    .sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      if (typeof aVal === 'string') {
        return sortDir === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      }
      return sortDir === 'asc' ? aVal - bVal : bVal - aVal
    })

  function toggleSort(key) {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const SortIcon = ({ col }) => {
    if (sortKey !== col) return <span className="opacity-20">↕</span>
    return sortDir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
  }

  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="tag-accent font-mono">GET /posts</span>
          </div>
          <h1 className="font-display text-4xl font-bold mb-3" style={{ color: '#FAFAF7' }}>
            Entidades
          </h1>
          <p className="text-sm" style={{ color: '#9999AA' }}>
            Listado completo de publicaciones — 3 propiedades: <span className="font-mono text-amber-400">id</span>,{' '}
            <span className="font-mono text-amber-400">userId</span>,{' '}
            <span className="font-mono text-amber-400">title</span>
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 animate-fade-up delay-100">
          <input
            type="text"
            placeholder="Buscar por título, id o userId..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2.5 rounded-xl text-sm font-body outline-none transition-all duration-200 focus:ring-1 focus:ring-amber-400/40"
            style={{
              background: '#111118',
              border: '1px solid #252535',
              color: '#FAFAF7',
              '::placeholder': { color: '#9999AA' }
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl p-4 mb-6" style={{ background: '#1A1A26', border: '1px solid rgba(251,113,133,0.3)' }}>
            <p className="text-sm font-mono" style={{ color: '#FB7185' }}>⚠ {error}</p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-24 gap-3">
            <Loader2 size={20} className="animate-spin text-amber-400" />
            <span className="text-sm font-mono" style={{ color: '#9999AA' }}>Cargando entidades…</span>
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <div className="animate-fade-up delay-200 overflow-hidden rounded-xl gradient-border"
            style={{ background: '#111118' }}>
            
            {/* Table header */}
            <div className="grid grid-cols-[60px_80px_1fr] gap-4 px-5 py-3 text-xs font-mono uppercase tracking-widest border-b"
              style={{ color: '#9999AA', borderColor: '#252535', background: '#0A0A0F' }}>
              {[
                { key: 'id', label: 'ID', icon: Hash },
                { key: 'userId', label: 'User', icon: User },
                { key: 'title', label: 'Título', icon: FileText },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => toggleSort(key)}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-left"
                >
                  <Icon size={11} />
                  {label}
                  <SortIcon col={key} />
                </button>
              ))}
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: '#252535' }}>
              {filtered.length === 0 ? (
                <div className="px-5 py-12 text-center text-sm font-mono" style={{ color: '#9999AA' }}>
                  Sin resultados para "{search}"
                </div>
              ) : (
                filtered.map((post, i) => (
                  <div
                    key={post.id}
                    className={cn(
                      'grid grid-cols-[60px_80px_1fr] gap-4 px-5 py-4 transition-colors duration-150',
                      'hover:bg-[#1A1A26]'
                    )}
                  >
                    {/* ID */}
                    <span className="tag-accent font-mono text-xs self-center">
                      {post.id}
                    </span>

                    {/* User ID */}
                    <div className="flex items-center gap-1.5 self-center">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #FBBF24, #FB7185)', color: '#0A0A0F' }}>
                        {post.userId}
                      </div>
                      <span className="text-xs font-mono" style={{ color: '#9999AA' }}>{post.userId}</span>
                    </div>

                    {/* Title */}
                    <p className="text-sm capitalize leading-snug self-center line-clamp-1"
                      style={{ color: '#FAFAF7' }}>
                      {post.title}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t flex items-center justify-between"
              style={{ borderColor: '#252535', background: '#0A0A0F' }}>
              <span className="text-xs font-mono" style={{ color: '#9999AA' }}>
                {filtered.length} de {posts.length} entidades
              </span>
              <span className="text-xs font-mono text-amber-400">
                jsonplaceholder.typicode.com
              </span>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
