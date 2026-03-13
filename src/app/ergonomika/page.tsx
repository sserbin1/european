import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ергономіка робочого місця за європейськими нормами — European',
  description:
    'Ергономіка офісу за Директивою 90/270/EEC: правильна постава, освітлення, температура, акустичний комфорт та простір для руху.',
};

const principles = [
  {
    number: '01',
    title: 'Правильна постава',
    standard: 'Директива 90/270/EEC, Додаток',
    tip: 'Монітор на відстані витягнутої руки, верхній край екрану — на рівні очей. Стілець з регулюванням висоти та поперекової підтримки.',
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
    tip: 'Мінімум 500 люкс для офісної роботи. Уникайте відблисків на моніторі. Перевагу надавайте природному світлу з доповненням штучного.',
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
    tip: 'Температура 20-24°C, вологість 40-60%. Мінімум 30 м\u00B3/год свіжого повітря на особу. Уникайте протягів зі швидкістю повітря понад 0.15 м/с.',
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
    tip: 'Фоновий шум не більше 45 дБ для зосередженої роботи. Використовуйте звукоізоляційні кабіни для дзвінків та нарад.',
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
    tip: 'Мінімум 2 м\u00B2 вільного простору на робочому місці. Можливість змінювати позу: стоячі столи, зони відпочинку, місця для ходьби.',
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
    description: 'Роботодавець зобов\'язаний провести аналіз кожного робочого місця з дисплейним обладнанням на предмет ризиків для зору, фізичного стану та психічного навантаження.',
  },
  {
    title: 'Перерви та зміна діяльності',
    description: 'Працівники мають право на регулярні перерви або зміну виду діяльності для зниження навантаження від роботи з екраном.',
  },
  {
    title: 'Перевірка зору',
    description: 'Роботодавець забезпечує перевірку зору до початку роботи, регулярно під час роботи та при виникненні проблем із зором.',
  },
  {
    title: 'Вимоги до обладнання',
    description: 'Монітор, клавіатура, робочий стіл та стілець повинні відповідати мінімальним ергономічним вимогам, визначеним у Додатку до Директиви.',
  },
];

export default function ErgonomikaPage() {
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
          <li className="text-[#1E293B] font-medium">Ергономіка</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ергономіка за європейськими нормами
          </h1>
          <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-2xl">
            Правильна організація робочого місця за стандартами ЄС захищає здоров'я працівників,
            підвищує продуктивність та забезпечує відповідність законодавчим вимогам.
          </p>
        </div>
      </section>

      {/* DSE Directive */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-8">
            <div className="shrink-0 p-3 bg-white rounded-lg border border-slate-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M16 13H8m8 4H8m2-8H8" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#2563EB] tracking-wide">
                ДИРЕКТИВА ЄС
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1E293B] mt-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Директива 90/270/EEC
              </h2>
              <p className="text-[#475569] mt-2 max-w-2xl">
                Директива Ради ЄС від 29 травня 1990 року встановлює мінімальні вимоги безпеки та
                охорони здоров'я при роботі з дисплейним обладнанням (Display Screen Equipment).
                Це основний документ, що регулює ергономіку офісних робочих місць у всіх країнах
                Європейського Союзу.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dseRequirements.map((req) => (
              <div key={req.title} className="bg-white rounded-lg p-6 border border-slate-100">
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
      </section>

      {/* 5 Principles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          5 принципів ергономічного офісу
        </h2>
        <p className="text-[#475569] max-w-2xl mb-12">
          Кожен принцип підкріплений конкретним європейським стандартом та практичними
          рекомендаціями для впровадження.
        </p>
        <div className="space-y-6">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className={`flex flex-col sm:flex-row gap-6 rounded-lg p-6 sm:p-8 border transition-colors ${
                principle.title === 'Акустичний комфорт'
                  ? 'border-[#2563EB] bg-blue-50/30 ring-1 ring-blue-200'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex items-start gap-4 sm:w-16 shrink-0">
                <span className="text-3xl font-bold text-slate-200">{principle.number}</span>
              </div>
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`shrink-0 p-2.5 rounded-lg ${
                    principle.title === 'Акустичний комфорт'
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-slate-100 text-[#475569]'
                  }`}
                >
                  {principle.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-[#1E293B] mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {principle.title}
                  </h3>
                  <span className="inline-block text-xs font-medium text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded mb-3">
                    {principle.standard}
                  </span>
                  <p className="text-sm text-[#475569] leading-relaxed">{principle.tip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Acoustic Comfort Highlight */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-[#2563EB] mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
              </svg>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Акустичний комфорт — ключовий фактор
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              Серед усіх факторів ергономіки, акустика найчастіше ігнорується при проектуванні
              офісів. Водночас дослідження показують, що шум є причиною номер один скарг працівників
              відкритих офісів. Постійний шумовий фон підвищує рівень кортизолу, погіршує
              концентрацію та прискорює професійне вигорання.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 border border-slate-100">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">40%</div>
                <p className="text-sm text-[#475569]">
                  скарг на здоров'я пов'язані з офісним середовищем
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-slate-100">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">600</div>
                <p className="text-sm text-[#475569]">
                  євро на рік — витрати на працівника від поганої ергономіки
                </p>
              </div>
            </div>
            <Link
              href="/akustyka/"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-700 font-medium transition-colors cursor-pointer"
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-[#1E293B] rounded-2xl p-8 sm:p-12 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Створіть ергономічний офіс з акустичними кабінами
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Звукоізоляційні кабіни вирішують одразу кілька ергономічних проблем: акустичний комфорт,
            приватність та простір для зосередженої роботи.
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
