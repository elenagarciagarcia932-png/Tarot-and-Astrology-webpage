
export const metadata = {
  title: "Tarot y Astrología Pro",
  description: "Tarot profesional y carta astral real"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
