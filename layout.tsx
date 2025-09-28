import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IA TALENTS - Encuentra tu trabajo ideal",
  description: "Portal de empleos especializado en oportunidades profesionales de calidad. Más de 9,247 empleos disponibles con 82% tasa de éxito.",
  keywords: "empleos, trabajo, tecnología, marketing, ventas, diseño, data analytics, empleos remotos",
  openGraph: {
    title: "IA TALENTS - Encuentra tu trabajo ideal",
    description: "Portal de empleos especializado en oportunidades profesionales de calidad",
    url: "https://iatalents.es",
    siteName: "IA TALENTS",
    images: [
      {
        url: "https://iatalents.es/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA TALENTS - Encuentra tu trabajo ideal",
    description: "Portal de empleos con más de 9,247 oportunidades profesionales",
    images: ["https://iatalents.es/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-blue-600">IA TALENTS</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <a href="/empleos" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                    Empleos
                  </a>
                </div>

                <a href="/blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Blog
                </a>

                <a href="/para-empresas" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Para Empresas
                </a>

                <a href="/guias" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Guías de Carrera
                </a>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Publicar Empleo
                </button>
              </div>

              <div className="md:hidden flex items-center">
                <button className="text-gray-900 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-2xl font-bold mb-4">IA TALENTS</h3>
                <p className="text-gray-300 text-sm">
                  Portal de empleos especializado en oportunidades profesionales de calidad.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Empleos</h4>
                <ul className="space-y-2">
                  <li><a href="/empleos" className="text-gray-300 hover:text-white text-sm">Todos los empleos</a></li>
                  <li><a href="/empleos/categoria/tecnologia" className="text-gray-300 hover:text-white text-sm">Tecnología</a></li>
                  <li><a href="/empleos/categoria/marketing" className="text-gray-300 hover:text-white text-sm">Marketing</a></li>
                  <li><a href="/empleos/categoria/ventas" className="text-gray-300 hover:text-white text-sm">Ventas</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Recursos</h4>
                <ul className="space-y-2">
                  <li><a href="/blog" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
                  <li><a href="/guias" className="text-gray-300 hover:text-white text-sm">Guías de Carrera</a></li>
                  <li><a href="/calculadora-salario" className="text-gray-300 hover:text-white text-sm">Calculadora Salario</a></li>
                  <li><a href="/alertas" className="text-gray-300 hover:text-white text-sm">Alertas de Empleo</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/privacidad" className="text-gray-300 hover:text-white text-sm">Política de Privacidad</a></li>
                  <li><a href="/terminos" className="text-gray-300 hover:text-white text-sm">Términos y Condiciones</a></li>
                  <li><a href="/cookies" className="text-gray-300 hover:text-white text-sm">Política de Cookies</a></li>
                  <li><a href="/afiliados" className="text-gray-300 hover:text-white text-sm">Disclosure Afiliados</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-400 text-sm">
                © 2025 IA TALENTS. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
