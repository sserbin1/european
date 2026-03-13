import Link from "next/link";
import { siteConfig } from "../../../site.config";

const TOPICS = [
  { label: "Стандарти EN/ISO", href: "/blog/yevropeyski-standarty-ofisnogo-prostoru" },
  { label: "Акустика офісу", href: "/blog/akustyka-v-ofisi-chomu-tysha-tse-produktyvnist" },
  { label: "Ергономіка", href: "/blog/ergonomika-robochogo-mistsya-za-yevropeyskimi-normamy" },
  { label: "Open Space", href: "/blog/open-space-vs-kabinetna-systema" },
  { label: "Звукоізоляція", href: "/blog/zvukoizolyatsiyni-rishennya-dlya-ofisu" },
  { label: "Приватність", href: "/blog/yak-stvoryty-zonu-pryvatnosti-v-ofisi" },
];

const RESOURCES = [
  { label: "Блог", href: "/blog/" },
  { label: "Каталог кабін", href: "/kabiny/" },
  { label: "Карта сайту", href: "/sitemap.xml" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
                <path d="M3 9h6" />
                <path d="M3 15h6" />
              </svg>
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Портал про європейські стандарти організації офісного простору.
              Ергономіка, акустика та продуктивність за нормами EN та ISO.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3
              className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Тематика
            </h3>
            <ul className="space-y-2.5">
              {TOPICS.map((topic) => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="cursor-pointer text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ресурси
            </h3>
            <ul className="space-y-2.5">
              {RESOURCES.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="cursor-pointer text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Контакти
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-slate-400">{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="cursor-pointer text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm text-slate-400">{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {siteConfig.name} &copy; {currentYear}. Усі права захищено.
          </p>
          <p className="text-xs text-slate-600">
            Європейські стандарти офісного простору
          </p>
        </div>
      </div>
    </footer>
  );
}
