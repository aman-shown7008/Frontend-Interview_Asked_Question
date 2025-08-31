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



2.  
A.  Root Files
    🔹README.md → Project guidebook 📖; tells how to install/run your app.
    Ex: A new teammate reads it to set up project quickly.
    🔹package.json → Project’s recipe 🍲; lists ingredients (dependencies) + cooking steps (scripts).
    Ex: Run npm run dev from its scripts to start app.
    🔹package-lock.json → Frozen recipe ❄️; locks exact versions of packages for everyone.
    Ex: Ensures your teammate gets same React version you used.
    🔹.gitignore → Secret keeper 🙊; hides files Git shouldn’t track.
    Ex: Keeps node_modules/ out of GitHub repo.
    🔹eslint.config.mjs → Code policeman 👮; enforces coding rules.
    Ex: Warns if you create a variable but don’t use it.

    Build / Dependency Folders
    🔹.next → Construction site 🏗️; holds compiled build files.
    Ex: Generated when you run npm run build for deployment.
    🔹node_modules/ → Warehouse 📦; stores all installed packages.
    Ex: React, Tailwind, Next.js live here after npm install.

    App Assets
    🔹public/ → Display shelf 🖼️; holds static assets accessible to users.
    Ex: Put logo.png here → open at http://localhost:3000/logo.png.
    🔹global.css → Global fashion designer 👗; applies styles to whole app.
    Ex: Set font-family for entire website.

    Source Code (src/)
    🔹src/ → Main office 🏢; contains all working code.
    Ex: All pages, components, layouts stored here.
    🔹src/layout.js → Common frame 🖼️; wraps every page.
    Ex: Navbar + Footer shown on all pages.
    🔹page.js → Web page 📃; each file defines a route.
    Ex: app/about/page.js → /about route.

    Config Files
    🔹next.config.js → Project control room ⚡; customizes Next.js behavior.
    Ex: Allow images only from unsplash.com.
    🔹jsconfig.json → GPS system 🧭; helps with path shortcuts in imports.
    Ex: Import @components/Button instead of long ../../components/Button.
