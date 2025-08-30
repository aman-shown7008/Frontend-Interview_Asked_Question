1.  What is NextJS? Use-case.
A.  Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
    Think of React as a car engine.
    Next.js is the entire car with the engine inside it—plus wheels, brakes, gears, and navigation.

    Why do we need Next.js if React already exists?
    🔹React by itself is not opinionated. If you want:
    🔹Routing → you install react-router
    🔹State management → Redux / Zustand
    🔹Build system → Webpack / Vite
    🔹API handling → Express or other backend framework
    🔹SEO → You need SSR setup manually

    In contrast, Next.js has most of these built-in:
    🔹File-based routing (pages or app directory)
    🔹Automatic code splitting & optimized bundling
    🔹API routes (no need for a separate backend for simple APIs)
    🔹Middleware support (auth, logging, redirects, etc.)
    🔹Server-side rendering (SSR) & Static site generation (SSG)
    🔹Image optimization & font optimization
    🔹TypeScript, Tailwind, ESLint support out-of-the-box

    👉Use React when you only need a frontend UI.
    👉Use Next.js when you need a production-ready, SEO-optimized, full-stack application with routing, APIs, performance optimizations, and middleware already included
