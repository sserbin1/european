import Link from "next/link";
import { siteConfig } from "../../../site.config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{siteConfig.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3">Навігація</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Головна</Link></li>
              <li><Link href="/kabiny/" className="text-sm text-gray-400 hover:text-white transition-colors">Кабіни SilentBox</Link></li>
              <li><Link href="/blog/" className="text-sm text-gray-400 hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3">Контакти</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{siteConfig.address}</li>
              <li><a href={"tel:" + siteConfig.phone.replace(/\s/g, "")} className="hover:text-white transition-colors">{siteConfig.phone}</a></li>
              <li>{siteConfig.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-500">{siteConfig.name} &copy; 2025. Усі права захищено.</p>
        </div>
      </div>
    </footer>
  );
}
