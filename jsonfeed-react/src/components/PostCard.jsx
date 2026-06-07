import { cn } from '../lib/utils'

export default function PostCard({ post, index = 0 }) {
  return (
    <article
      className={cn(
        'gradient-border card-hover rounded-xl p-5 cursor-default animate-fade-up',
      )}
      style={{
        background: '#111118',
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="tag-accent">#{post.id}</span>
        <span className="tag font-mono text-[10px]">user {post.userId}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-base font-bold leading-snug mb-2 capitalize"
        style={{ color: '#FAFAF7' }}>
        {post.title}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#9999AA' }}>
        {post.body}
      </p>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t flex items-center gap-2" style={{ borderColor: '#252535' }}>
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
          style={{ background: 'linear-gradient(135deg, #FBBF24, #FB7185)', color: '#0A0A0F' }}>
          {post.userId}
        </div>
        <span className="text-xs font-mono" style={{ color: '#9999AA' }}>
          post/{post.id}
        </span>
      </div>
    </article>
  )
}
