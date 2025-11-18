import Hero from './components/Hero'
import Courses from './components/Courses'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-white/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl text-blue-700">BrightEnglish</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#courses" className="hover:text-blue-700">Courses</a>
            <a href="#why-us" className="hover:text-blue-700">Why Us</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a href="/test" className="px-3 py-1.5 rounded bg-blue-600 text-white">System Test</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Courses />
        <WhyUs />
        <CTA />
      </main>

      <footer className="py-10 bg-gray-50 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BrightEnglish Kids. All rights reserved.
      </footer>
    </div>
  )
}

export default App
