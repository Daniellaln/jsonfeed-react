export default function SkeletonCard() {
  return (
    <div className="rounded-xl p-5" style={{ background: '#111118', border: '1px solid #252535' }}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="skeleton h-5 w-10 rounded-full" />
        <div className="skeleton h-5 w-16 rounded-full" />
      </div>
      <div className="skeleton h-4 w-full rounded mb-1.5" />
      <div className="skeleton h-4 w-4/5 rounded mb-4" />
      <div className="skeleton h-3 w-full rounded mb-1" />
      <div className="skeleton h-3 w-full rounded mb-1" />
      <div className="skeleton h-3 w-3/5 rounded mb-4" />
      <div className="pt-3 border-t flex items-center gap-2" style={{ borderColor: '#252535' }}>
        <div className="skeleton w-5 h-5 rounded-full" />
        <div className="skeleton h-3 w-20 rounded" />
      </div>
    </div>
  )
}
