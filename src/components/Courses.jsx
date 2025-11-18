function Courses() {
  const items = [
    {
      name: 'Starters (Ages 4–6)',
      desc: 'Songs, stories, colors and first words. Phonics introduced through play.',
      features: ['Phonics Fun', 'Colors & Animals', 'Story Time', 'Tiny Projects'],
      color: 'from-rose-400 to-red-500',
    },
    {
      name: 'Explorers (Ages 7–10)',
      desc: 'Build vocabulary and confidence. Read, speak and write short texts.',
      features: ['Reading Basics', 'Speaking Games', 'Weekly Projects', 'Show & Tell'],
      color: 'from-amber-400 to-orange-500',
    },
    {
      name: 'Achievers (Ages 11–16)',
      desc: 'Stronger grammar, conversation, and exam skills for teens.',
      features: ['Grammar Boost', 'Debates', 'Essay Skills', 'Exam Prep'],
      color: 'from-emerald-400 to-green-500',
    },
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Courses</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">Choose the right path for your child. We group learners by age and level to keep lessons fun and engaging.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.name} className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
