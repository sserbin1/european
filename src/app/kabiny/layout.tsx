import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Акустичні кабіни SilentBox — каталог для офісу',
  description:
    'Акустичні кабіни SilentBox для офісу: Classic (1 особа), Duet (2 особи), Quartet (4 особи). Звукоізоляція до 35 дБ, LED-освітлення, вентиляція. Замовити кабіну.',
  alternates: {
    canonical: 'https://european.com.ua/kabiny/',
  },
  openGraph: {
    title: 'Акустичні кабіни SilentBox — каталог для офісу',
    description: 'Звукоізоляційні кабіни для open-space офісів. 3 моделі від SilentBox.',
  },
}

export default function KabinyLayout({ children }: { children: React.ReactNode }) {
  return children
}
