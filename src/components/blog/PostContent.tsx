interface PostContentProps {
  htmlContent: string
}

export default function PostContent({ htmlContent }: PostContentProps) {
  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:text-[#1E293B] prose-headings:font-bold prose-headings:leading-tight
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-[#475569] prose-p:leading-relaxed
        prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline prose-a:font-medium prose-a:transition-colors
        prose-strong:text-[#1E293B] prose-strong:font-semibold
        prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-slate-600
        prose-ul:text-[#475569] prose-ol:text-[#475569]
        prose-li:leading-relaxed prose-li:marker:text-[#2563EB]
        prose-table:border-collapse prose-table:w-full
        prose-th:bg-slate-50 prose-th:text-left prose-th:text-[#1E293B] prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-slate-200
        prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-slate-200 prose-td:text-[#475569]
        prose-img:rounded-xl prose-img:shadow-sm
        prose-hr:border-slate-200
        [&_h1]:![font-family:var(--font-heading)] [&_h2]:![font-family:var(--font-heading)] [&_h3]:![font-family:var(--font-heading)] [&_h4]:![font-family:var(--font-heading)]"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
