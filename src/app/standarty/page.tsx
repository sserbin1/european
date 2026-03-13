import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стандарти EN та ISO для офісних приміщень — European',
  description:
    'Довідник європейських стандартів для офісного простору: EN 12464-1, ISO 3382, EN ISO 9612, Directive 90/270/EEC, EN 13779, ISO 45001.',
};

const standards = [
  {
    badge: 'EN 12464-1',
    title: 'Освітлення робочих місць',
    description:
      'Визначає вимоги до освітлення внутрішніх робочих просторів. Для офісних приміщень норма — мінімум 500 люкс на робочій поверхні.',
    metric: '500 Lux',
    metricLabel: 'мінімум для офісів',
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
    metricLabel: 'обов\'язкова для всіх країн',
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
    metric: '30 м³/год',
    metricLabel: 'мінімум на особу',
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
      'Міжнародний стандарт системи менеджменту охорони здоров\'я та безпеки праці. Забезпечує безпеку робочого середовища.',
    metric: 'Сертифікація',
    metricLabel: 'системи управління',
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
    title: 'Здоров\'я',
    stat: '-40%',
    description:
      'Зменшення скарг на здоров\'я при дотриманні ергономічних стандартів та норм вентиляції.',
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
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-[#475569]">
          <li>
            <Link href="/" className="hover:text-[#2563EB] transition-colors cursor-pointer">
              Головна
            </Link>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </li>
          <li className="text-[#1E293B] font-medium">Стандарти</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Європейські стандарти офісного простору
          </h1>
          <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-2xl">
            Норми EN та ISO, що визначають вимоги до освітлення, акустики, вентиляції та
            ергономіки сучасного офісу. Повний довідник для проектування комфортного робочого
            середовища.
          </p>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard) => (
            <article
              key={standard.badge}
              className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-slate-100 text-[#475569] text-xs font-semibold rounded tracking-wide">
                  {standard.badge}
                </span>
                <span className="text-[#475569]">{standard.icon}</span>
              </div>
              <h2
                className="text-lg font-semibold text-[#1E293B] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {standard.title}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                {standard.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-2xl font-bold text-[#2563EB]">{standard.metric}</span>
                <span className="block text-xs text-[#475569] mt-1">{standard.metricLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Як стандарти впливають на офіс
          </h2>
          <p className="text-[#475569] text-center max-w-2xl mx-auto mb-12">
            Дотримання європейських норм — це не лише формальність. Це вимірюваний вплив на
            бізнес-результати.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact) => (
              <div key={impact.title} className="bg-white rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-[#2563EB] mb-4">
                  {impact.icon}
                </div>
                <div className="text-4xl font-bold text-[#2563EB] mb-2">{impact.stat}</div>
                <h3
                  className="text-lg font-semibold text-[#1E293B] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {impact.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-[#1E293B] rounded-2xl p-8 sm:p-12 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Акустичні кабіни, що відповідають стандартам
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Дізнайтесь, як звукоізоляційні кабіни допомагають офісам відповідати вимогам EN та ISO
            щодо акустичного комфорту.
          </p>
          <Link
            href="/kabiny/"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition-colors cursor-pointer"
          >
            Переглянути кабіни
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
