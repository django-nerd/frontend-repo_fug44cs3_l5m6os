export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">Diagnose • Reparatie • Revisie</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Specialist in automotive elektronica
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Westtronics repareert en reviseert ABS/ESP pompen, ECU's, instrumentenpanelen en meer. Snelle diagnose, transparante prijzen en 12 maanden garantie.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm">Bekijk diensten</a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">Vrijblijvende offerte</a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-sm text-gray-500">Sinds</dt>
                <dd className="text-2xl font-bold text-gray-900">1998</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Garantie</dt>
                <dd className="text-2xl font-bold text-gray-900">12 mnd</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Beoordeling</dt>
                <dd className="text-2xl font-bold text-gray-900">4.9/5</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-white shadow-lg border"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-blue-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
