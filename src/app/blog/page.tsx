import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { generatePageMetadata } from '@/lib/seo'
import PostCard from '@/components/blog/PostCard'

export const metadata = generatePageMetadata({
  title: 'Блог - Європейські стандарти офісу',
  description:
    'Статті про європейські стандарти офісного простору, ергономіку та акустику. Корисні матеріали для створення комфортного робочого середовища.',
  path: '/blog/',
})

/* ── SVG Icons ─────────────────────────────────────────────────────── */

function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
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

function IconSearch() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

/* ── Category Filter Chips ─────────────────────────────────────────── */

const CATEGORY_CHIPS = [
  { label: 'Усі', active: true },
  { label: 'Стандарти', active: false },
  { label: 'Акустика', active: false },
  { label: 'Ергономіка', active: false },
  { label: 'Звукоізоляція', active: false },
  { label: 'Приватність', active: false },
  { label: 'Open Space', active: false },
]

/* ── Page Component ────────────────────────────────────────────────── */

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main>
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Наші публікації
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Блог
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Статті про європейські стандарти офісного простору, ергономіку та акустику
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Filter Chips ─────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORY_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  chip.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles Grid ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-6">
                <IconSearch />
              </div>
              <p
                className="text-xl font-semibold text-slate-900 mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Статей поки немає
              </p>
              <p className="text-slate-500">Незабаром тут з&apos;являться нові публікації</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 sm:p-14 border border-slate-100">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Шукаєте акустичне рішення?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Акустичні кабіни SilentBox відповідають найвищим європейським стандартам.
              Перегляньте каталог та оберіть оптимальне рішення для вашого офісу.
            </p>
            <Link
              href="/kabiny/"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Переглянути каталог
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
