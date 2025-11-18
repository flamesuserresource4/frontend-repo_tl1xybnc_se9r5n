function WhyUs() {
  const reasons = [
    {
      title: 'Native, Friendly Teachers',
      text: 'Experienced educators who know how to keep kids smiling and learning.',
    },
    {
      title: 'Small Class Sizes',
      text: 'Average of 6 learners per class for more speaking time and personal attention.',
    },
    {
      title: 'Game-Based Learning',
      text: 'Interactive activities, songs and projects that make English stick.',
    },
    {
      title: 'Flexible Schedule',
      text: 'Online or on-site. After-school and weekend options available.',
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Parents Choose Us</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">We combine proven methods with kid-friendly fun so children build confidence and a lifelong love for English.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-3xl p-6 shadow border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
