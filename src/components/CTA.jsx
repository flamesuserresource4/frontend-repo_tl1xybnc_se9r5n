function CTA() {
  return (
    <section id="contact" className="py-20 bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Book a Free Trial Lesson</h2>
        <p className="mt-3 text-indigo-50 max-w-2xl mx-auto">
          Send us a message and we’ll help you pick the perfect class for your child.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@brightenglish.school?subject=Free%20Trial%20Request" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:shadow-lg transition">Email Us</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="px-6 py-3 bg-indigo-800/40 border border-white/40 font-semibold rounded-xl hover:bg-indigo-800/60 transition">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
