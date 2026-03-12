import Link from "next/link"
import { siteConfig } from "../../site.config"
import { getAllPosts } from "@/lib/blog"

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Європейські стандарти<br />офісного простору
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Портал про організацію робочого середовища за нормами ЄС — ергономіка, акустика, продуктивність та сучасні рішення для офісів.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/blog/" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Читати статті
            </Link>
            <Link href="/kabiny/" className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-sm">
              Акустичні кабіни
            </Link>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Теми порталу</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Стандарти EN та ISO", desc: "Європейські норми освітлення, акустики та організації робочих місць", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Ергономіка офісу", desc: "Правильна організація робочого місця для здоров'я та ефективності працівників", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            { title: "Акустичні рішення", desc: "Звукоізоляційні кабіни, акустичні панелі та технології зниження шуму в офісах", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
            { title: "Open Space тренди", desc: "Дослідження та тренди відкритих офісних просторів у Європі", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { title: "Продуктивність", desc: "Як фізичне середовище впливає на ефективність та концентрацію працівників", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: "Досвід компаній", desc: "Кейси провідних європейських компаній з організації офісного простору", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
          ].map((topic) => (
            <div key={topic.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{topic.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      {posts.length > 0 && (
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Останні публікації</h2>
              <Link href="/blog/" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                Усі статті →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow group">
                  <p className="text-xs text-gray-400 mb-2">{new Date(post.publishedAt).toLocaleDateString("uk-UA")}</p>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-sm leading-snug">{post.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-3">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Шукаєте акустичне рішення для офісу?</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Ознайомтесь з каталогом професійних звукоізоляційних кабін SilentBox — європейська якість для вашого офісу.
        </p>
        <Link href="/kabiny/" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
          Переглянути каталог
        </Link>
      </section>
    </main>
  )
}
