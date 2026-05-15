import '../globals.css'

export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg-primary text-white">
        {children}
      </body>
    </html>
  )
}