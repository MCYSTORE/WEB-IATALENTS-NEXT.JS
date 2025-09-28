# IA TALENTS - Portal de Empleos Next.js

Portal de empleos profesional construido con Next.js 14+ App Router, optimizado para SEO con SSR/ISR y monetización CPC/afiliados.

## 🚀 Características

- **Next.js 14+ App Router** con SSR/ISR para máximo rendimiento SEO
- **Monetización CPC** integrada con Talent.com y otros partners
- **Afiliación** con Amazon, cursos online y productos profesionales  
- **Blog integrado** en el header con contenido de carrera
- **Chatbot IA 24/7** para captura de leads y FAQs
- **SEO avanzado** con JSON-LD JobPosting Schema completo
- **Responsive** y optimizado para Core Web Vitals
- **Ingesta automática** de feeds XML/API con revalidación on-demand

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Styling**: Tailwind CSS
- **TypeScript** para tipado estático
- **Revalidación**: ISR + on-demand con tags
- **Deployment**: Vercel/Netlify ready

## 📁 Estructura del Proyecto

```
app/
├── layout.tsx              # Layout principal con header/footer
├── page.tsx                # Homepage con hero y empleos destacados
├── globals.css             # Estilos globales con Tailwind
├── (marketing)/
│   └── blog/
│       └── page.tsx        # Blog con artículos de carrera
├── empleos/
│   ├── [id]/
│   │   └── page.tsx        # Detalle de empleo con JSON-LD
│   ├── categoria/
│   │   └── [slug]/
│   │       └── page.tsx    # Listados por categoría
│   └── ubicacion/
│       └── [slug]/
│           └── page.tsx    # Listados por ubicación
├── para-empresas/
│   └── page.tsx            # Página comercial B2B
└── api/
    ├── jobs/
    │   ├── route.ts        # API de empleos con filtros
    │   └── [id]/
    │       └── route.ts    # API empleo individual
    ├── ingest/
    │   └── route.ts        # Ingesta de feeds XML/API
    └── revalidate/
        └── route.ts        # Revalidación on-demand
```

## 🚀 Instalación y Desarrollo

1. **Clonar e instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**
```bash
cp .env.example .env.local
# Editar .env.local con tus API keys
```

3. **Ejecutar en desarrollo:**
```bash
npm run dev
```

4. **Build para producción:**
```bash
npm run build
npm start
```

## 🔧 Configuración

### Variables de Entorno Requeridas

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/iatalents"

# API Keys para feeds
TALENT_API_KEY="your-talent-api-key"
TALENT_PARTNER_ID="your-partner-id"

# Secrets para APIs internas
REVALIDATE_SECRET="your-revalidate-secret"
INGEST_SECRET="your-ingest-secret"

# Analytics
GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"

# Afiliados
AMAZON_ASSOCIATE_ID="iatalents-21"
```

### Revalidación ISR

El sistema utiliza revalidación por tiempo y on-demand:

- **Homepage**: 1 hora (3600s)
- **Fichas de empleo**: 30 minutos (1800s) 
- **Categorías**: 2 horas (7200s)
- **Blog**: 6 horas (21600s)

### API de Ingesta

```bash
# Ingestar empleos desde feeds
POST /api/ingest
{
  "source": "talent",
  "secret": "your-ingest-secret"
}

# Revalidar páginas específicas
POST /api/revalidate  
{
  "tags": ["jobs", "categoria"],
  "secret": "your-revalidate-secret"
}
```

## 📈 SEO y Schema

- **JSON-LD JobPosting** completo en cada ficha de empleo
- **Meta tags** dinámicos con Open Graph y Twitter Cards
- **Breadcrumbs** con microdata en todas las páginas internas
- **URLs semánticamente estructuradas** para categorías y ubicaciones
- **Sitemap XML** automático con Next.js
- **Canonical URLs** para evitar contenido duplicado

## 💰 Monetización

### CPC (Cost Per Click)
- Enlaces de salida trackeados a Talent.com con parámetros UTM
- Tracking de clics con analytics personalizado
- Reportes de ingresos por categoría/ubicación

### Afiliados
- **Amazon Associates**: Productos relevantes por categoría de empleo
- **Cursos online**: Enlaces a plataformas educativas con comisión
- **Disclosure legal**: Cumplimiento FTC con avisos claros

## 🤖 Chatbot IA

- Widget flotante presente en todas las páginas
- FAQs contextuales según la página actual
- Captura de leads con consentimiento GDPR
- Respuestas limitadas al dominio del sitio para seguridad

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Conectar repo y desplegar
vercel --prod
```

### Netlify
```bash
# Con soporte nativo Next.js App Router
netlify deploy --build --prod
```

### Variables de Entorno en Producción
Configurar todas las variables del .env.example en el dashboard de tu plataforma.

## 📊 Analytics y Monitoreo

- **Google Analytics 4** con eventos personalizados
- **Core Web Vitals** tracking automático
- **Hotjar** para heatmaps y grabaciones de usuario
- **Health checks** en /api/ingest para monitoreo uptime

## 🧪 Testing

```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

## 🤝 Soporte

Para soporte técnico o consultas comerciales:
- Email: soporte@iatalents.es
- Documentación: [docs.iatalents.es](https://docs.iatalents.es)
