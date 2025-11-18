import { GraduationCap, Sparkles } from "lucide-react"

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white">
      {/* playful shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-4 backdrop-blur">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Fun, friendly, and effective</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            English Courses for Kids
            <span className="block text-yellow-300">Learn. Play. Shine!</span>
          </h1>
          <p className="mt-5 text-lg text-blue-50/90 max-w-xl">
            A playful learning journey designed for ages 4–16. Small groups, native teachers, and engaging lessons your child will love.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollToId('courses')} className="bg-white text-blue-700 font-semibold px-5 py-3 rounded-xl shadow hover:shadow-lg transition">
              Explore Courses
            </button>
            <a href="mailto:hello@brightenglish.school?subject=Enroll%20Inquiry" className="inline-flex items-center gap-2 bg-blue-900/30 border border-white/30 px-5 py-3 rounded-xl hover:bg-blue-900/40 transition">
              <GraduationCap className="w-5 h-5" />
              Book a Free Trial
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'Ages', value: '4–16' },
              { label: 'Avg. Class', value: '6 Kids' },
              { label: 'Format', value: 'Online/Onsite' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop" alt="Kids learning English" className="rounded-3xl shadow-2xl border-4 border-white/40" />
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-700 rounded-2xl p-4 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-blue-500">Trusted by parents</div>
              <div className="text-lg font-bold">500+ happy learners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
