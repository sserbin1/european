import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

/* ── Inline SVG Icons (Lucide-style) ─────────────────────────────── */

function IconNoise() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h2l3-9 3 18 3-12 3 9 2-6h4" />
    </svg>
  );
}

function IconErgonomics() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconCompliance() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconStandards() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function IconAcoustics() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function IconOpenSpace() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function IconSoundproofing() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );
}

function IconPrivacy() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ── Categories data ─────────────────────────────────────────────── */

const CATEGORIES = [
  {
    icon: <IconStandards />,
    title: "Стандарти EN/ISO",
    desc: "Огляд ключових європейських норм для офісного простору та робочих зон.",
    href: "/blog/yevropeyski-standarty-ofisnogo-prostoru",
  },
  {
    icon: <IconAcoustics />,
    title: "Акустика офісу",
    desc: "Допустимі рівні шуму, вимоги до звукоізоляції та акустичний комфорт.",
    href: "/blog/akustyka-v-ofisi-chomu-tysha-tse-produktyvnist",
  },
  {
    icon: <IconErgonomics />,
    title: "Ергономіка",
    desc: "Стандарти робочого місця, освітлення, меблів та мікроклімату.",
    href: "/blog/ergonomika-robochogo-mistsya-za-yevropeyskimi-normamy",
  },
  {
    icon: <IconOpenSpace />,
    title: "Open Space",
    desc: "Порівняння відкритого планування з кабінетною системою за нормами ЄС.",
    href: "/blog/open-space-vs-kabinetna-systema",
  },
  {
    icon: <IconSoundproofing />,
    title: "Звукоізоляція",
    desc: "Матеріали, рішення та технології для зниження шуму в офісі.",
    href: "/blog/zvukoizolyatsiyni-rishennya-dlya-ofisu",
  },
  {
    icon: <IconPrivacy />,
    title: "Приватність",
    desc: "Зони конфіденційності, телефонні кабіни та простір для зосередженої роботи.",
    href: "/blog/yak-stvoryty-zonu-pryvatnosti-v-ofisi",
  },
];

/* ── Stats data ──────────────────────────────────────────────────── */

const STATS = [
  { value: "85 дБ", label: "Допустимий рівень шуму за EN ISO 9612" },
  { value: "500 Lux", label: "Норма освітлення робочої зони EN 12464-1" },
  { value: "35 дБ", label: "Зниження шуму в кабінах SilentBox" },
  { value: "4 год", label: "Час монтажу акустичної кабіни" },
];

/* ── Helper ──────────────────────────────────────────────────────── */

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ── Page Component ──────────────────────────────────────────────── */

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost =
    posts.find((p) => p.slug === "yevropeyski-standarty-ofisnogo-prostoru") ||
    posts[0];
  const latestPosts = posts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 3);

  return (
    <main>
      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/hero-office.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Знання для сучасного офісу
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Європейські стандарти офісного простору
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Досліджуємо норми EN та ISO, що визначають комфорт, безпеку та
              продуктивність у сучасних офісах Європейського Союзу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog/" className="btn-primary cursor-pointer">
                Дослідити стандарти
              </Link>
              <Link href="/kabiny/" className="btn-outline cursor-pointer">
                Каталог кабін
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-sm text-slate-400 mt-1">Стандартів EN/ISO</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">7</p>
                <p className="text-sm text-slate-400 mt-1">Тематичних розділів</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-sm text-slate-400 mt-1">Країн ЄС з досвідом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Problem Statement ─────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Чому це важливо?
            </h2>
            <p className="text-lg text-slate-500">
              Недотримання стандартів коштує бізнесу мільйони щороку
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <IconNoise />
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">35%</p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Втрата продуктивності
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Офісний шум знижує продуктивність працівників на 35% за даними
                досліджень Європейської агенції з безпеки та здоров&apos;я на роботі.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-14 h-14 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <IconErgonomics />
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">&euro;600</p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Витрати на працівника
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Ергономічні порушення обходяться європейським компаніям у &euro;600 на
                працівника щорічно через лікарняні та зниження ефективності.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <IconCompliance />
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">EU</p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Вимоги відповідності
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Директиви ЄС зобов&apos;язують роботодавців забезпечити відповідність
                робочих місць стандартам безпеки, освітлення та акустики.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Topic Categories ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Тематичні розділи
            </h2>
            <p className="text-lg text-slate-500">
              Досліджуйте європейські стандарти за напрямками
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="cursor-pointer group block bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-200 hover:shadow-lg hover:border-slate-200 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-200">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all duration-200">
                  Читати <IconArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Featured Article ──────────────────────────── */}
      {featuredPost && (
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="cursor-pointer group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-blue-900 p-10 sm:p-14 lg:p-20 transition-all duration-200 hover:shadow-2xl"
            >
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 25%, rgba(255,255,255,.2) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative max-w-2xl">
                <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
                  Рекомендована стаття
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-base font-semibold text-white group-hover:gap-3 transition-all duration-200">
                  Читати статтю <IconArrowRight />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Section 5: Stats / Numbers ───────────────────────────── */}
      <section className="py-20 sm:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Факти та цифри
            </h2>
            <p className="text-blue-200 text-lg">
              Ключові показники європейських стандартів
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Latest Articles ───────────────────────────── */}
      {latestPosts.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                  Останні публікації
                </h2>
                <p className="text-lg text-slate-500">
                  Нові матеріали про стандарти та рішення
                </p>
              </div>
              <Link
                href="/blog/"
                className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Усі статті <IconArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="cursor-pointer group block"
                >
                  <article className="bg-white rounded-2xl p-8 border border-slate-100 h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-slate-200 group-hover:-translate-y-0.5">
                    {post.publishedAt && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                        <IconCalendar />
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all duration-200">
                      Читати <IconArrowRight />
                    </span>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog/"
                className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Усі статті <IconArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Section 7: CTA Banner ────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Шукаєте рішення для вашого офісу?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Акустичні кабіни SilentBox відповідають найвищим європейським стандартам
            звукоізоляції та ергономіки. Перегляньте каталог та оберіть оптимальне рішення.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kabiny/"
              className="btn-primary cursor-pointer"
            >
              Переглянути каталог
            </Link>
            <Link
              href="/blog/"
              className="cursor-pointer inline-flex items-center justify-center px-8 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              Читати блог
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
