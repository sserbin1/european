import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ергономіка робочого місця за європейськими нормами | European',
  description:
    'Ергономіка офісу за Директивою 90/270/EEC: 5 принципів правильної організації робочого місця — постава, освітлення, температура, акустичний комфорт та простір для руху.',
  openGraph: {
    title: 'Ергономіка робочого місця за європейськими нормами',
    description: '5 принципів ергономічного офісу за Директивою 90/270/EEC',
  },
};

const principles = [
  {
    number: '01',
    title: 'Правильна постава',
    standard: 'Директива 90/270/EEC, Додаток',
    tip: "Монітор на відстані витягнутої руки, верхній край екрану — на рівні очей. Стілець з регулюванням висоти та поперекової підтримки.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2a3 3 0 100 6 3 3 0 000-6z" />
        <path d="M12 8v5" />
        <path d="M8 13h8" />
        <path d="M10 13l-2 8" />
        <path d="M14 13l2 8" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Освітлення',
    standard: 'EN 12464-1',
    tip: "Мінімум 500 люкс для офісної роботи. Уникайте відблисків на моніторі. Перевагу надавайте природному світлу з доповненням штучного.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v1m0 18v1m-9-10H2m20 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Температура та повітря',
    standard: 'EN 13779, ISO 7730',
    tip: "Температура 20-24\u00B0C, вологість 40-60%. Мінімум 30 м\u00B3/год свіжого повітря на особу. Уникайте протягів зі швидкістю повітря понад 0.15 м/с.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Акустичний комфорт',
    standard: 'ISO 3382, EN ISO 9612',
    tip: "Фоновий шум не більше 45 дБ для зосередженої роботи. Використовуйте звукоізоляційні кабіни для дзвінків та нарад.",
    highlighted: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 010 7.07" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Простір для руху',
    standard: 'Директива 89/654/EEC',
    tip: "Мінімум 2 м\u00B2 вільного простору на робочому місці. Можливість змінювати позу: стоячі столи, зони відпочинку, місця для ходьби.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 4h3a2 2 0 012 2v14" />
        <path d="M2 20h3" />
        <path d="M13 20h9" />
        <path d="M10 12V4h0a2 2 0 00-2-2H6a2 2 0 00-2 2v16" />
        <path d="M4 18h12" />
      </svg>
    ),
  },
];

const dseRequirements = [
  {
    title: 'Оцінка робочого місця',
    description:
      "Роботодавець зобов'язаний провести аналіз кожного робочого місця з дисплейним обладнанням на предмет ризиків для зору, фізичного стану та психічного навантаження.",
  },
  {
    title: 'Перерви та зміна діяльності',
    description:
      'Працівники мають право на регулярні перерви або зміну виду діяльності для зниження навантаження від роботи з екраном.',
  },
  {
    title: 'Перевірка зору',
    description:
      "Роботодавець забезпечує перевірку зору до початку роботи, регулярно під час роботи та при виникненні проблем із зором.",
  },
  {
    title: 'Вимоги до обладнання',
    description:
      'Монітор, клавіатура, робочий стіл та стілець повинні відповідати мінімальним ергономічним вимогам, визначеним у Додатку до Директиви.',
  },
];

export default function ErgonomikaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — full-width gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/ergonomika-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/80" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

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
              <li className="text-slate-200 font-medium">Ергономіка</li>
            </ol>
          </nav>

          <div className="pt-16 pb-20 lg:pb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-emerald-300 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M12 2a3 3 0 100 6 3 3 0 000-6zM12 8v5" />
                </svg>
                Директива 90/270/EEC
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ергономіка за європейськими нормами
              </h1>
              <p className="mt-4 text-xl lg:text-2xl text-blue-300 font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                5 принципів комфортного робочого місця
              </p>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Правильна організація робочого місця за стандартами ЄС захищає здоров&#39;я працівників,
                підвищує продуктивність та забезпечує відповідність законодавчим вимогам.
              </p>

              {/* Principle preview pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {principles.map((p) => (
                  <span
                    key={p.number}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300"
                  >
                    <span className="text-blue-400 font-bold text-xs">{p.number}</span>
                    {p.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-slate-400" />
      </section>

      {/* DSE Directive — side-by-side layout */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left — info */}
            <div className="lg:w-5/12">
              <div className="sticky top-8">
                <div className="w-12 h-1 bg-[#2563EB] rounded-full mb-6" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8m8 4H8m2-8H8" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#2563EB] tracking-wide uppercase">
                      Директива ЄС
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Директива 90/270/EEC
                    </h2>
                  </div>
                </div>
                <p className="text-base text-[#475569] leading-relaxed">
                  Директива Ради ЄС від 29 травня 1990 року встановлює мінімальні вимоги безпеки та
                  охорони здоров&#39;я при роботі з дисплейним обладнанням (Display Screen Equipment).
                  Це основний документ, що регулює ергономіку офісних робочих місць у всіх країнах
                  Європейського Союзу.
                </p>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-sm font-medium text-[#1E293B] mb-1">Статус</div>
                  <div className="text-sm text-[#475569]">
                    Обов&#39;язкова для всіх країн-членів ЄС. Імплементована в національне законодавство кожної держави.
                  </div>
                </div>
              </div>
            </div>

            {/* Right — requirements grid */}
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {dseRequirements.map((req, idx) => (
                  <div
                    key={req.title}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold mb-4">
                      {idx + 1}
                    </div>
                    <h3
                      className="text-base font-semibold text-[#1E293B] mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {req.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{req.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Principles — numbered cards, horizontal on desktop */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mb-8" />
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            5 принципів ергономічного офісу
          </h2>
          <p className="text-base text-[#475569] max-w-2xl mb-14">
            Кожен принцип підкріплений конкретним європейським стандартом та практичними
            рекомендаціями для впровадження.
          </p>

          <div className="space-y-6">
            {principles.map((principle) => {
              const isHighlighted = principle.highlighted;
              return (
                <article
                  key={principle.number}
                  className={`flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                    isHighlighted
                      ? 'border-[#2563EB] ring-1 ring-blue-200 bg-white'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  {/* Large number column */}
                  <div
                    className={`flex items-center justify-center px-8 py-6 lg:py-0 lg:w-28 shrink-0 ${
                      isHighlighted
                        ? 'bg-[#2563EB]'
                        : 'bg-slate-100'
                    }`}
                  >
                    <span
                      className={`text-5xl lg:text-6xl font-bold ${
                        isHighlighted ? 'text-white' : 'text-slate-300'
                      }`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {principle.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-start gap-4 p-6 sm:p-8">
                    <div
                      className={`shrink-0 p-2.5 rounded-lg ${
                        isHighlighted
                          ? 'bg-blue-50 text-[#2563EB]'
                          : 'bg-slate-50 text-[#475569]'
                      }`}
                    >
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3
                          className="text-lg font-semibold text-[#1E293B]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {principle.title}
                        </h3>
                        <span className="inline-block text-xs font-medium text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded">
                          {principle.standard}
                        </span>
                        {isHighlighted && (
                          <span className="inline-block text-xs font-semibold text-white bg-[#2563EB] px-2.5 py-0.5 rounded">
                            Ключовий фактор
                          </span>
                        )}
                      </div>
                      <p className="text-base text-[#475569] leading-relaxed">{principle.tip}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acoustic Comfort Highlight */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#2563EB] mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
              </svg>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Акустичний комфорт — ключовий фактор
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mb-10">
              Серед усіх факторів ергономіки, акустика найчастіше ігнорується при проектуванні
              офісів. Водночас дослідження показують, що шум є причиною номер один скарг працівників
              відкритих офісів. Постійний шумовий фон підвищує рівень кортизолу, погіршує
              концентрацію та прискорює професійне вигорання.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div
                  className="text-4xl lg:text-5xl font-bold text-[#2563EB] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  40%
                </div>
                <p className="text-base text-[#475569]">
                  скарг на здоров&#39;я пов&#39;язані з офісним середовищем
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div
                  className="text-4xl lg:text-5xl font-bold text-[#2563EB] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  600
                </div>
                <p className="text-base text-[#475569]">
                  євро на рік — витрати на працівника від поганої ергономіки
                </p>
              </div>
            </div>
            <Link
              href="/akustyka/"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-700 font-medium text-base transition-colors duration-200 cursor-pointer"
            >
              Детальніше про акустику офісу
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
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
                Створіть ергономічний офіс з акустичними кабінами
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
                Звукоізоляційні кабіни вирішують одразу кілька ергономічних проблем: акустичний комфорт,
                приватність та простір для зосередженої роботи.
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
