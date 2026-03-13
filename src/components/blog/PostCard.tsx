import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

/* -- SVG Icons ----------------------------------------------------------- */

function IconCalendar() {
  return (
    <svg
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/* -- Helper --------------------------------------------------------------- */

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/* -- Component ------------------------------------------------------------ */

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}/`} className="cursor-pointer group block">
      <article className="bg-white rounded-2xl border border-slate-100 h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-slate-200 hover:-translate-y-0.5">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {post.category && (
              <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-[#2563EB]">
                {post.category}
              </span>
            )}
          </div>
        )}

        <div className="p-7 sm:p-8 flex flex-col flex-1">
          {/* Category Badge (only if no cover image) */}
          {!post.coverImage && post.category && (
            <span className="inline-flex items-center self-start rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#2563EB] mb-4">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h2
            className="text-lg font-semibold text-[#1E293B] leading-snug mb-3 group-hover:text-[#2563EB] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-5 flex-1">
            {post.excerpt}
          </p>

          {/* Footer: Date + Read Link */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
            {post.publishedAt ? (
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <IconCalendar />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
            ) : (
              <span />
            )}

            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] group-hover:gap-2.5 transition-all duration-200">
              Читати <IconArrowRight />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
