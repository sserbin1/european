import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getPostBySlugWithHtml } from '@/lib/blog'
import { generatePageMetadata, generateArticleJsonLd } from '@/lib/seo'
import PostContent from '@/components/blog/PostContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

/* ── SVG Icons ─────────────────────────────────────────────────────── */

function IconChevronRight() {
  return (
    <svg
      className="w-4 h-4 text-slate-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function IconCalendar() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconClock() {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconUser() {
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

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

/* ── Helpers ────────────────────────────────────────────────────────── */

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function estimateReadingTime(content: string): number {
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

/* ── Static Params & Metadata ──────────────────────────────────────── */

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return generatePageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}/`,
    keywords: post.keywords,
  })
}

/* ── Page Component ────────────────────────────────────────────────── */

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)
  const jsonLd = generateArticleJsonLd(post)
  const readingTime = estimateReadingTime(post.content)

  const allPosts = getAllPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-1.5 text-sm text-slate-500">
            <Link
              href="/"
              className="cursor-pointer hover:text-[#2563EB] transition-colors duration-200"
            >
              Головна
            </Link>
            <IconChevronRight />
            <Link
              href="/blog/"
              className="cursor-pointer hover:text-[#2563EB] transition-colors duration-200"
            >
              Блог
            </Link>
            <IconChevronRight />
            <span className="text-slate-900 font-medium truncate max-w-[240px]">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ── Article Header ────────────────────────────────────────── */}
      <section className="bg-white pt-10 sm:pt-14 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.category && (
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-5">
              {post.category}
            </span>
          )}

          <h1
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1E293B] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <IconCalendar />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <IconClock />
              <span>{readingTime} хв читання</span>
            </div>
          </div>

          <div className="mt-8 border-b border-slate-100" />
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────────────── */}
      <section className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>{post.htmlContent && <PostContent htmlContent={post.htmlContent} />}</article>
        </div>
      </section>

      {/* ── Author / Source Box ───────────────────────────────────── */}
      <section className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#475569] text-white flex items-center justify-center flex-shrink-0">
                <IconUser />
              </div>
              <div>
                <p
                  className="text-base font-semibold text-[#1E293B] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Редакція порталу Євростандарти Офісу
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Матеріал підготовлено на основі офіційних документів EN/ISO та досліджень
                  Європейської агенції з безпеки та здоров&apos;я на роботі (EU-OSHA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Articles ──────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Інші публікації
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}/`}
                  className="cursor-pointer group block"
                >
                  <article className="bg-white rounded-2xl p-7 border border-slate-100 h-full transition-all duration-200 hover:shadow-lg hover:border-slate-200 hover:-translate-y-0.5">
                    {related.category && (
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#2563EB] mb-4">
                        {related.category}
                      </span>
                    )}
                    <h3
                      className="text-lg font-semibold text-[#1E293B] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                      {related.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] group-hover:gap-2.5 transition-all duration-200">
                      Читати <IconArrowRight />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Готові до змін?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Акустичні кабіни SilentBox допоможуть привести ваш офіс у відповідність до
            європейських стандартів комфорту та продуктивності.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kabiny/"
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Переглянути каталог
              <IconArrowRight />
            </Link>
            <Link
              href="/blog/"
              className="cursor-pointer inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              Повернутись до блогу
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
