import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Акустика офісу — рівні шуму, норми та рішення | European',
  description:
    'Повний гід з акустики сучасного офісу: шкала шуму від 30 до 90 дБ, вплив на продуктивність, порівняння рішень для звукоізоляції. Акустичні кабіни, панелі, зонування.',
  alternates: {
    canonical: 'https://european.com.ua/akustyka/',
  },
  openGraph: {
    title: 'Акустика офісу — рівні шуму та рішення',
    description: 'Шум у відкритому офісі: проблеми, норми та найефективніші рішення',
  },
};

const noiseScale = [
  { level: 30, label: 'Тиша', sublabel: 'бібліотека, спальня', width: '15%', color: 'bg-emerald-400', hoverColor: 'group-hover:bg-emerald-500' },
  { level: 40, label: 'Тихий офіс', sublabel: 'окремий кабінет', width: '22%', color: 'bg-emerald-500', hoverColor: 'group-hover:bg-emerald-600' },
  { level: 50, label: 'Нормальна розмова', sublabel: 'переговорна кімната', width: '35%', color: 'bg-amber-400', hoverColor: 'group-hover:bg-amber-500' },
  { level: 60, label: 'Відкритий офіс', sublabel: 'типовий open-space', width: '50%', color: 'bg-amber-500', hoverColor: 'group-hover:bg-amber-600' },
  { level: 70, label: 'Шумний офіс', sublabel: 'call-центр', width: '65%', color: 'bg-orange-500', hoverColor: 'group-hover:bg-orange-600' },
  { level: 80, label: 'Гучне середовище', sublabel: 'виробництво поруч', width: '80%', color: 'bg-red-400', hoverColor: 'group-hover:bg-red-500' },
  { level: 90, label: 'Небезпечний рівень', sublabel: 'потрібен захист слуху', width: '95%', color: 'bg-red-600', hoverColor: 'group-hover:bg-red-700' },
];

const stats = [
  {
    value: '66%',
    label: 'працівників відволікаються шумом колег',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: '86 хв',
    label: 'на день втрачено через шумові перешкоди',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    value: '35%',
    label: 'зниження концентрації в шумному середовищі',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'Акустичні панелі',
    description:
      'Стінові та стельові панелі зі звукопоглинаючих матеріалів. Знижують реверберацію та загальний рівень шуму на 5-10 дБ.',
    effectiveness: 'Середня',
    effectivenessWidth: '50%',
    primary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Звукоізоляційні кабіни',
    description:
      'Повністю ізольовані простори для дзвінків, нарад та зосередженої роботи. Зниження шуму до 35 дБ. Найефективніше рішення для відкритих офісів.',
    effectiveness: 'Висока',
    effectivenessWidth: '95%',
    primary: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M8 10h.01M8 14h.01M12 6h.01M12 10h.01M12 14h.01M16 6h.01M16 10h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    title: "Шумопоглинаючі меблі",
    description:
      "М'які перегородки, акустичні дивани та спеціалізовані меблі, що поглинають звук. Додатковий рівень захисту.",
    effectiveness: 'Низька-середня',
    effectivenessWidth: '35%',
    primary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3" />
        <path d="M2 11v5a2 2 0 002 2h16a2 2 0 002-2v-5a2 2 0 00-4 0v2H6v-2a2 2 0 00-4 0z" />
        <path d="M4 18v2m16-2v2" />
      </svg>
    ),
  },
  {
    title: 'Зонування простору',
    description:
      'Розподіл офісу на зони за рівнем шуму: тиха зона, зона співпраці, зона дзвінків. Архітектурний підхід.',
    effectiveness: 'Середня-висока',
    effectivenessWidth: '70%',
    primary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

export default function AkustykaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — full-width gradient with noise meter */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/akustyka-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/80" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="pt-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Головна
                </Link>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </li>
              <li className="text-slate-200 font-medium">Акустика</li>
            </ol>
          </nav>

          <div className="pt-16 pb-20 lg:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-center gap-12">
              <div className="max-w-2xl flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-blue-300 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  </svg>
                  Акустичний комфорт
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Акустика сучасного офісу
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
                  Шум — головний ворог продуктивності у відкритих офісах. Розуміння акустики та правильні
                  рішення дозволяють створити комфортне робоче середовище за європейськими нормами.
                </p>
              </div>

              {/* Noise meter graphic */}
              <div className="shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 w-full lg:w-72">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Шкала шуму
                </div>
                <div className="flex items-end gap-1.5 h-32">
                  {[30, 40, 50, 60, 70, 80, 90].map((db, i) => {
                    const heights = ['20%', '30%', '42%', '55%', '70%', '85%', '100%'];
                    const colors = [
                      'bg-emerald-400',
                      'bg-emerald-500',
                      'bg-amber-400',
                      'bg-amber-500',
                      'bg-orange-500',
                      'bg-red-400',
                      'bg-red-600',
                    ];
                    return (
                      <div key={db} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-white/10 rounded-t-sm overflow-hidden flex items-end" style={{ height: '100%' }}>
                          <div
                            className={`w-full ${colors[i]} rounded-t-sm`}
                            style={{ height: heights[i] }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">{db}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                  <span>дБ (тихо)</span>
                  <span>дБ (небезпечно)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500" />
      </section>

      {/* Noise Scale — detailed */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mb-8" />
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Рівні шуму в офісі
          </h2>
          <p className="text-base text-[#475569] mb-12 max-w-2xl">
            Від тиші бібліотеки до небезпечного рівня виробництва — кожен децибел має значення.
          </p>
          <div className="space-y-5">
            {noiseScale.map((item) => (
              <div key={item.level} className="group cursor-default">
                <div className="flex items-center gap-4 mb-2">
                  <span
                    className="text-lg font-bold text-[#1E293B] w-16 shrink-0 tabular-nums"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.level} дБ
                  </span>
                  <span className="text-base font-medium text-[#1E293B]">{item.label}</span>
                  <span className="hidden sm:inline text-sm text-[#475569]">
                    — {item.sublabel}
                  </span>
                </div>
                <div className="ml-0 h-5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} ${item.hoverColor} rounded-full transition-all duration-300`}
                    style={{ width: item.width }}
                  />
                </div>
                {/* Description on hover / always visible on mobile */}
                <p className="sm:hidden text-xs text-[#475569] mt-1 ml-0">{item.sublabel}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-8 text-sm text-[#475569]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-500" />
              Комфортно
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-amber-500" />
              Помірно
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500" />
              Небезпечно
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Вплив шуму на продуктивність
          </h2>
          <p className="text-base text-[#475569] text-center max-w-2xl mx-auto mb-14">
            Дослідження показують: навіть помірний шум у відкритому офісі суттєво знижує
            ефективність роботи.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white rounded-xl p-10 text-center border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#2563EB] mb-6">
                  {stat.icon}
                </div>
                <div
                  className="text-5xl lg:text-6xl font-bold text-[#2563EB] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <p className="text-base text-[#475569] leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mb-8" />
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Рішення для акустичного комфорту
          </h2>
          <p className="text-base text-[#475569] max-w-2xl mb-14">
            Від простих панелей до повноцінних звукоізоляційних кабін — огляд рішень для різного
            бюджету та потреб.
          </p>

          {/* Featured solution — кабіни */}
          {solutions
            .filter((s) => s.primary)
            .map((solution) => (
              <div
                key={solution.title}
                className="mb-8 relative bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 sm:p-10 border-2 border-[#2563EB] overflow-hidden"
              >
                {/* Accent corner */}
                <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
                  Рекомендовано
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 p-4 bg-[#2563EB] text-white rounded-xl">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold text-[#1E293B] mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-base text-[#475569] leading-relaxed mb-6 max-w-2xl">
                      {solution.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#1E293B]">Ефективність:</span>
                      <div className="flex-1 max-w-xs h-3 bg-blue-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2563EB] rounded-full"
                          style={{ width: solution.effectivenessWidth }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#2563EB]">{solution.effectiveness}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/kabiny/"
                      className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      Детальніше
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {/* Other solutions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions
              .filter((s) => !s.primary)
              .map((solution) => (
                <article
                  key={solution.title}
                  className="rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-200 bg-white"
                >
                  <div className="p-3 rounded-lg bg-slate-100 text-[#475569] w-fit mb-5">
                    {solution.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#1E293B] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-base text-[#475569] leading-relaxed mb-5">
                    {solution.description}
                  </p>
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#475569] mb-1.5">
                      <span>Ефективність</span>
                      <span className="font-semibold text-[#1E293B]">{solution.effectiveness}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
                        style={{ width: solution.effectivenessWidth }}
                      />
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-br from-[#1E293B] to-slate-800 rounded-2xl p-8 sm:p-14 text-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Найефективніше рішення — акустичні кабіни
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
                Зниження шуму до 35 дБ, повна приватність розмов, відповідність стандартам ISO 3382 та
                EN ISO 9612.
              </p>
              <Link
                href="/kabiny/"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25"
              >
                Обрати кабіну для офісу
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Also See — internal navigation */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Також дивіться
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/standarty/"
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3
                  className="text-base font-semibold text-[#1E293B] group-hover:text-[#2563EB] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Стандарти EN та ISO
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                6 ключових стандартів для офісного простору
              </p>
            </Link>

            <Link
              href="/ergonomika/"
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 2a3 3 0 100 6 3 3 0 000-6zM12 8v5M8 13h8" />
                  </svg>
                </div>
                <h3
                  className="text-base font-semibold text-[#1E293B] group-hover:text-[#2563EB] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Ергономіка
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                5 принципів ергономічного офісу за європейськими директивами
              </p>
            </Link>

            <Link
              href="/blog/"
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#475569] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                </div>
                <h3
                  className="text-base font-semibold text-[#1E293B] group-hover:text-[#2563EB] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Блог
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                Статті про облаштування офісного простору та європейські норми
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
