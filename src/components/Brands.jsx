const logos = [
  'Bosch',
  'Delphi',
  'Siemens',
  'VDO',
  'Continental',
  'Denso',
]

export default function Brands() {
  return (
    <section id="brands" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">Ondersteunde merken</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-16 rounded-lg border border-gray-200 bg-white grid place-items-center text-gray-600 font-semibold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
