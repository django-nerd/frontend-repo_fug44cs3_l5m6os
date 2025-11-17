import { Wrench, Gauge, Cpu, Car, Cable } from 'lucide-react'

const items = [
  {
    icon: Wrench,
    title: 'ABS/ESP Reparatie',
    desc: 'Diagnose en revisie van ABS pompunits en regelmodules. Snelle doorlooptijden en garantie.',
  },
  {
    icon: Cpu,
    title: 'ECU & ECU Tuning',
    desc: 'Reparatie van motorregeleenheden en softwarematige aanpassingen waar toegestaan.',
  },
  {
    icon: Gauge,
    title: 'Instrumentenpanelen',
    desc: 'Reparatie van clusterproblemen: dode pixels, storingen, wijzeruitval en voeding.',
  },
  {
    icon: Cable,
    title: 'Kabelbomen & Connectoren',
    desc: 'Herstel van kabelbomen, stekkerproblemen en vochtschade in elektronische systemen.',
  },
  {
    icon: Car,
    title: 'Sleutel- & Immo-service',
    desc: 'Programmeren en repareren van sleutels, startonderbreker en immobilizer systemen.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Onze diensten</h2>
          <p className="mt-2 text-gray-600">Reparatie, diagnose en revisie voor alle bekende merken en modellen.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-10 h-10 rounded-md bg-blue-600 text-white grid place-items-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
