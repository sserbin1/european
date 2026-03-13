import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стандарти EN та ISO для офісних приміщень | European',
  description:
    'Повний довідник 6 ключових європейських стандартів для офісного простору: EN 12464-1, ISO 3382, EN ISO 9612, Directive 90/270/EEC, EN 13779, ISO 45001. Освітлення, акустика, вентиляція та безпека.',
  alternates: {
    canonical: 'https://european.com.ua/standarty/',
  },
  openGraph: {
    title: 'Стандарти EN та ISO для офісних приміщень',
    description: '6 ключових європейських стандартів для сучасного офісу',
  },
};

const standards = [
  {
    badge: 'EN 12464-1',
    title: 'Освітлення робочих місць',
    description:
      'Визначає вимоги до освітлення внутрішніх робочих просторів. Для офісних приміщень норма — мінімум 500 люкс на робочій поверхні.',
    metric: '500 Lux',
    metricLabel: 'мінімум для офісів',
    category: 'lighting',
    borderColor: 'border-l-amber-400',
    badgeBg: 'bg-amber-50 text-amber-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v1m0 18v1m-9-10H2m20 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    badge: 'ISO 3382',
    title: 'Акустика приміщень',
    description:
      'Регламентує методи вимірювання параметрів акустики. Ключовий показник — час реверберації, що впливає на розбірливість мови.',
    metric: '< 0.6 с',
    metricLabel: 'час реверберації для офісу',
    category: 'acoustics',
    borderColor: 'border-l-blue-400',
    badgeBg: 'bg-blue-50 text-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    badge: 'EN ISO 9612',
    title: 'Шум на робочих місцях',
    description:
      'Встановлює методи оцінки впливу шуму на працівників. Допустимий рівень шумового навантаження — 85 дБ за 8 годин.',
    metric: '85 дБ',
    metricLabel: 'допустимий рівень',
    category: 'acoustics',
    borderColor: 'border-l-blue-400',
    badgeBg: 'bg-blue-50 text-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M11 5L6 9H2v6h4l5 4V5zm8.07.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
      </svg>
    ),
  },
  {
    badge: '90/270/EEC',
    title: 'Робота з екранами (DSE)',
    description:
      'Директива ЄС щодо мінімальних вимог безпеки при роботі з дисплейним обладнанням. Регулює ергономіку робочого місця.',
    metric: 'Директива ЄС',
    metricLabel: "обов'язкова для всіх країн",
    category: 'safety',
    borderColor: 'border-l-emerald-400',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
  },
  {
    badge: 'EN 13779',
    title: 'Вентиляція будівель',
    description:
      'Визначає вимоги до якості повітря у невиробничих будівлях. Класифікує якість повітря за 4 категоріями.',
    metric: '30 м\u00B3/год',
    metricLabel: 'мінімум на особу',
    category: 'ventilation',
    borderColor: 'border-l-green-400',
    badgeBg: 'bg-green-50 text-green-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
      </svg>
    ),
  },
  {
    badge: 'ISO 45001',
    title: 'Управління охороною праці',
    description:
      "Міжнародний стандарт системи менеджменту охорони здоров'я та безпеки праці. Забезпечує безпеку робочого середовища.",
    metric: 'Сертифікація',
    metricLabel: 'системи управління',
    category: 'safety',
    borderColor: 'border-l-emerald-400',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const impacts = [
  {
    title: 'Продуктивність',
    stat: '+23%',
    description:
      'Зростання продуктивності працівників в офісах, що відповідають стандартам освітлення та акустики.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Здоров'я",
    stat: '-40%',
    description:
      "Зменшення скарг на здоров'я при дотриманні ергономічних стандартів та норм вентиляції.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Комплаєнс',
    stat: '100%',
    description:
      'Відповідність вимогам ЄС дозволяє уникнути штрафів та забезпечити правову захищеність.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
];

export default function StandartyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — full-width gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/standarty-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/80" />
        {/* Decorative accent circles */}
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
              <li className="text-slate-200 font-medium">Стандарти</li>
            </ol>
          </nav>

          {/* Hero content */}
          <div className="pt-16 pb-20 lg:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-blue-300 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Довідник нормативів
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Стандарти EN та ISO
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
                  Норми EN та ISO, що визначають вимоги до освітлення, акустики, вентиляції та
                  ергономіки сучасного офісу. Повний довідник для проектування комфортного робочого
                  середовища.
                </p>
              </div>

              {/* Big stat block */}
              <div className="shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center lg:text-right">
                <div
                  className="text-6xl lg:text-7xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  6
                </div>
                <div className="text-sm text-slate-400 mt-1 font-medium tracking-wide uppercase">
                  ключових стандартів
                </div>
                <div className="mt-4 flex items-center gap-3 justify-center lg:justify-end">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-blue-400 to-emerald-400" />
      </section>

      {/* Standards Grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Огляд стандартів
            </h2>
            <p className="mt-4 text-base text-[#475569] max-w-2xl mx-auto">
              Кожен стандарт регулює конкретний аспект офісного середовища — від яскравості
              освітлення до якості повітря.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard) => (
              <article
                key={standard.badge}
                className={`border border-slate-200 border-l-4 ${standard.borderColor} rounded-lg p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-white`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 ${standard.badgeBg} text-xs font-semibold rounded tracking-wide`}
                  >
                    {standard.badge}
                  </span>
                  <span className="text-[#475569]">{standard.icon}</span>
                </div>
                <h3
                  className="text-lg font-semibold text-[#1E293B] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {standard.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed mb-5">
                  {standard.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-3xl font-bold text-[#2563EB]">{standard.metric}</span>
                  <span className="block text-xs text-[#475569] mt-1">{standard.metricLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Accent line */}
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Як стандарти впливають на офіс
          </h2>
          <p className="text-base text-[#475569] text-center max-w-2xl mx-auto mb-14">
            Дотримання європейських норм — це не лише формальність. Це вимірюваний вплив на
            бізнес-результати.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact) => (
              <div
                key={impact.title}
                className="bg-white rounded-xl p-10 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-slate-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#2563EB] mb-6">
                  {impact.icon}
                </div>
                <div
                  className="text-5xl lg:text-6xl font-bold text-[#2563EB] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {impact.stat}
                </div>
                <h3
                  className="text-xl font-semibold text-[#1E293B] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {impact.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-br from-[#1E293B] to-slate-800 rounded-2xl p-8 sm:p-14 text-center overflow-hidden">
            {/* Subtle pattern */}
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
                Акустичні кабіни, що відповідають стандартам
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
                Дізнайтесь, як звукоізоляційні кабіни допомагають офісам відповідати вимогам EN та ISO
                щодо акустичного комфорту.
              </p>
              <Link
                href="/kabiny/"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25"
              >
                Переглянути кабіни
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Also See — internal navigation */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Також дивіться
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/akustyka/"
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M11 5L6 9H2v6h4l5 4V5zm8.07.93a10 10 0 010 14.14" />
                  </svg>
                </div>
                <h3
                  className="text-base font-semibold text-[#1E293B] group-hover:text-[#2563EB] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Акустика офісу
                </h3>
              </div>
              <p className="text-sm text-[#475569]">
                Рівні шуму, вплив на продуктивність та рішення для звукоізоляції
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
