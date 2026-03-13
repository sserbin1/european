import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Акустика офісу — рівні шуму та рішення | European',
  description:
    'Все про акустику сучасного офісу: рівні шуму, вплив на продуктивність, рішення для звукоізоляції. Акустичні кабіни, панелі, зонування.',
};

const noiseScale = [
  { level: 30, label: 'Тиша', sublabel: 'бібліотека, спальня', width: '15%', color: 'bg-emerald-400' },
  { level: 40, label: 'Тихий офіс', sublabel: 'окремий кабінет', width: '20%', color: 'bg-emerald-500' },
  { level: 50, label: 'Нормальна розмова', sublabel: 'переговорна кімната', width: '30%', color: 'bg-amber-400' },
  { level: 60, label: 'Відкритий офіс', sublabel: 'типовий open-space', width: '50%', color: 'bg-amber-500' },
  { level: 70, label: 'Шумний офіс', sublabel: 'call-центр', width: '65%', color: 'bg-orange-500' },
  { level: 80, label: 'Гучне середовище', sublabel: 'виробництво поруч', width: '80%', color: 'bg-red-400' },
  { level: 90, label: 'Небезпечний рівень', sublabel: 'потрібен захист слуху', width: '95%', color: 'bg-red-600' },
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
      'Повністю ізольовані простори для дзвінків, нарад та зосередженої роботи. Зниження шуму до 35 дБ. Найефективніше рішення.',
    effectiveness: 'Висока',
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
    title: 'Шумопоглинаючі меблі',
    description:
      'М\'які перегородки, акустичні дивани та спеціалізовані меблі, що поглинають звук. Додатковий рівень захисту.',
    effectiveness: 'Низька-середня',
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
          <li className="text-[#1E293B] font-medium">Акустика</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Акустика сучасного офісу
          </h1>
          <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-2xl">
            Шум — головний ворог продуктивності у відкритих офісах. Розуміння акустики та правильні
            рішення дозволяють створити комфортне робоче середовище за європейськими нормами.
          </p>
        </div>
      </section>

      {/* Noise Scale */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Рівні шуму в офісі
        </h2>
        <p className="text-[#475569] mb-10 max-w-2xl">
          Від тиші бібліотеки до небезпечного рівня виробництва — кожен децибел має значення.
        </p>
        <div className="space-y-4">
          {noiseScale.map((item) => (
            <div key={item.level} className="group">
              <div className="flex items-baseline gap-3 mb-1.5">
                <span className="text-sm font-bold text-[#1E293B] w-12 shrink-0">
                  {item.level} дБ
                </span>
                <span className="text-sm font-medium text-[#1E293B]">{item.label}</span>
                <span className="text-xs text-[#475569]">{item.sublabel}</span>
              </div>
              <div className="ml-0 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-6 text-xs text-[#475569]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            Комфортно
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            Помірно
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            Небезпечно
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Вплив шуму на продуктивність
          </h2>
          <p className="text-[#475569] text-center max-w-2xl mx-auto mb-12">
            Дослідження показують: навіть помірний шум у відкритому офісі суттєво знижує
            ефективність роботи.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white rounded-lg p-8 text-center border border-slate-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-[#2563EB] mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-[#2563EB] mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Рішення для акустичного комфорту
        </h2>
        <p className="text-[#475569] max-w-2xl mb-12">
          Від простих панелей до повноцінних звукоізоляційних кабін — огляд рішень для різного
          бюджету та потреб.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className={`rounded-lg p-8 border transition-colors ${
                solution.primary
                  ? 'border-[#2563EB] bg-blue-50/50 ring-1 ring-[#2563EB]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`shrink-0 p-3 rounded-lg ${
                    solution.primary
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-slate-100 text-[#475569]'
                  }`}
                >
                  {solution.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="text-lg font-semibold text-[#1E293B]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {solution.title}
                    </h3>
                    {solution.primary && (
                      <span className="text-xs font-semibold text-[#2563EB] bg-blue-100 px-2 py-0.5 rounded">
                        Рекомендовано
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed mb-3">
                    {solution.description}
                  </p>
                  <div className="text-xs text-[#475569]">
                    Ефективність:{' '}
                    <span
                      className={`font-semibold ${
                        solution.primary ? 'text-[#2563EB]' : 'text-[#1E293B]'
                      }`}
                    >
                      {solution.effectiveness}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#1E293B] rounded-2xl p-8 sm:p-12 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Найефективніше рішення — акустичні кабіни
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Зниження шуму до 35 дБ, повна приватність розмов, відповідність стандартам ISO 3382 та
            EN ISO 9612.
          </p>
          <Link
            href="/kabiny/"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition-colors cursor-pointer"
          >
            Обрати кабіну для офісу
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
