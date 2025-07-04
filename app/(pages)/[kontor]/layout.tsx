import { notFound } from 'next/navigation'

type props = {
  children: React.ReactNode
  params: Promise<{ kontor: 'alta' | 'bodo' }>
}

export default async function Layout({ children, params }: props) {
  const { kontor } = await params

  if (kontor !== 'alta' && kontor !== 'bodo') return notFound()

  return <>{children}</>
}
