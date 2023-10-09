import { cn } from '@/lib/utils';
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "300" });

export const metadata: Metadata = {
  title: 'Money Manager :: Seu gerenciador financeiro',
  description: 'Projeto de Gerenciador Financeiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(poppins.className, "bg-gray-100")}>{children}</body>
    </html>
  )
}
