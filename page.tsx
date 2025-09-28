import { Suspense } from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Blog - IA TALENTS | Consejos de Carrera y Desarrollo Profesional",
  description: "Artículos sobre desarrollo profesional, negociación salarial, trabajo remoto, entrevistas laborales y tendencias del mercado laboral.",
};

// Revalidar cada 6 horas
export const revalidate = 21600;

const blogPosts = [
  {
    id: "negociar-salario-2025",
    title: "Cómo negociar salario en 2025: Guía completa",
    excerpt: "Estrategias probadas para negociar hasta €10,000 más en tu próximo empleo. Incluye scripts reales y técnicas de negociación efectivas.",
    readTime: "12 min",
    category: "Carrera",
    author: "Ana García, Career Coach",
    publishDate: "2025-09-20",
    image: "https://via.placeholder.com/400x250?text=Negociación+Salarial",
    featured: true
  },
  {
    id: "trabajo-remoto-practicas",
    title: "Trabajo remoto: 15 mejores prácticas para el éxito",
    excerpt: "Consejos esenciales para ser productivo trabajando desde casa. Desde setup de oficina hasta gestión del tiempo y comunicación.",
    readTime: "8 min",
    category: "Trabajo Remoto",
    author: "Carlos Ruiz, Remote Expert",
    publishDate: "2025-09-18",
    image: "https://via.placeholder.com/400x250?text=Trabajo+Remoto",
    featured: true
  },
  {
    id: "guia-entrevistas-2025",
    title: "Guía de entrevistas laborales 2025",
    excerpt: "Preparación completa para entrevistas: desde investigación de la empresa hasta preguntas frecuentes y follow-up efectivo.",
    readTime: "15 min",
    category: "Entrevistas",
    author: "María López, HR Director",
    publishDate: "2025-09-15",
    image: "https://via.placeholder.com/400x250?text=Entrevistas+Laborales",
    featured: true
  },
  {
    id: "transicion-carrera-exitosa",
    title: "Transición de carrera exitosa: 10 pasos",
    excerpt: "Cómo cambiar de sector profesional sin perder momentum. Estrategias para reinventarte profesionalmente.",
    readTime: "10 min",
    category: "Desarrollo",
    author: "David Martín, Career Strategist",
    publishDate: "2025-09-12",
    image: "https://via.placeholder.com/400x250?text=Transición+Carrera",
    featured: false
  },
  {
    id: "skills-demandados-2025",
    title: "Skills más demandados en 2025 por sector",
    excerpt: "Análisis detallado de las habilidades técnicas y blandas más valoradas por empleadores en cada industria.",
    readTime: "11 min",
    category: "Skills",
    author: "Laura Pérez, Market Research",
    publishDate: "2025-09-10",
    image: "https://via.placeholder.com/400x250?text=Skills+2025",
    featured: false
  },
  {
    id: "cv-perfecto-2025",
    title: "Cómo hacer un CV que destaque en 2025",
    excerpt: "Formato, contenido y trucos para crear un currículum que llame la atención de los reclutadores.",
    readTime: "9 min",
    category: "CV",
    author: "Patricia Moreno, Recruiter",
    publishDate: "2025-09-08",
    image: "https://via.placeholder.com/400x250?text=CV+Perfecto",
    featured: false
  }
];

const categories = [
  "Todos",
  "Carrera", 
  "Trabajo Remoto",
  "Entrevistas",
  "Desarrollo",
  "Skills",
  "CV"
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog IA TALENTS
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consejos, guías y estrategias para impulsar tu carrera profesional. 
              Desde negociación salarial hasta trabajo remoto y desarrollo de skills.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categorías Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "Todos" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos Destacados</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="blog-card group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.publishDate}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Regular Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Más Artículos</h2>

          <div className="space-y-6">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span>Por {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.publishDate}</span>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Te ha gustado nuestro contenido?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe los mejores consejos de carrera 
            directamente en tu inbox. Sin spam, solo contenido de valor.
          </p>

          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Suscribirse
            </button>
          </form>

          <p className="text-blue-200 text-xs mt-4">
            Al suscribirte aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </section>
      </div>
    </div>
  );
}
