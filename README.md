# PortafolioAC (Andres Cantillo Portfolio)

> **Repositorio GitHub:** `https://github.com/Tupap1/PortafolioAC`  
> **Visibilidad:** Public  
> **Carpeta Local:** `C:\Proyectos\ACPortafolio`  
> **Estado:** Prototipo / Base de Portafolio Personal  

---

## Overview

**PortafolioAC** es el sitio web de portafolio profesional de Andrés Cantillo, diseñado para presentar proyectos de desarrollo de software, casos de estudio de arquitectura, experiencia técnica y canales de contacto directo. Resuelve la necesidad de contar con una presencia web moderna, responsiva y orientada a reclutadores y clientes potenciales interesados en desarrollo Full-Stack e ingeniería de software.

## Architecture

El proyecto está estructurado como una aplicación monorepo/single-page web basada en Next.js (App Router):

- **Renderizado Híbrido:** Utiliza React 19 y Next.js 15 para Server-Side Rendering (SSR) y Static Site Generation (SSG).
- **Estilos Modulares y Tokens:** Configurado con Tailwind CSS v3 y PostCSS para una jerarquía visual limpia y temas claros/oscuros.
- **Tipado Estricto:** Código base estructurado en TypeScript (`tsconfig.json`) con configuración estricta para garantizar seguridad en tiempo de compilación.

## Tech Stack

### Dependencias Principales (confirmadas en `package.json`)
- **Framework Core:** Next.js `^15.1.4`
- **Librería UI:** React `^19.0.0`
- **DOM Engine:** React DOM `^19.0.0`

### Herramientas de Desarrollo y Build
- **Lenguaje:** TypeScript `^5`
- **Estilos:** Tailwind CSS `^3.4.17`, PostCSS `^8.4.49`, Autoprefixer `^10.4.20`
- **Linting:** ESLint `^9`, `eslint-config-next` `15.1.4`

## Key Features

- **Página de Inicio / Landing:** Presentación de perfil profesional y biografía técnica.
- **Showcase de Proyectos:** Galería visual para destacar repositorios, stack tecnológico utilizado y enlaces a demos en vivo.
- **Sección de Habilidades y Stack:** Desglose categorizado de tecnologías (Frontend, Backend, Bases de Datos, DevOps).
- **Integración de Contacto:** Enlaces a perfiles profesionales (GitHub, LinkedIn, correo electrónico).

## Setup & Run

### Requisitos Previos
- Node.js (v18.18+ o v20+)
- npm o yarn / pnpm

### Instalación
```bash
npm install
```

### Servidor de Desarrollo
```bash
npm run dev
# Acceder en http://localhost:3000
```

### Build de Producción
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Status

- **Fase Actual:** Prototipo / En desarrollo activo.
- **Evidencia:** Repositorio público activo en GitHub (`Tupap1/PortafolioAC`), base Next.js 15 inicializada con componentes básicos y configuración de estilos Tailwind.
- [VERIFICAR: ¿Existe un dominio o URL de producción desplegado en Vercel/Netlify actualmente vinculado al repositorio?]
