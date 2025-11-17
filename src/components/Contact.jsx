import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Verzenden...')
    try {
      // Demo submit
      await new Promise((r) => setTimeout(r, 900))
      setStatus('Bedankt! We nemen z.s.m. contact op.')
    } catch {
      setStatus('Er ging iets mis. Probeer opnieuw.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Vraag een vrijblijvende offerte aan</h2>
            <p className="mt-2 text-gray-600">Omschrijf het probleem en uw voertuiggegevens. We reageren meestal binnen 1 werkdag.</p>
            <div className="mt-6 rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-700"><span className="font-semibold">Adres:</span> Industrieweg 12, 1234 AB, Nederland</p>
              <p className="text-sm text-gray-700 mt-2"><span className="font-semibold">Telefoon:</span> +31 00 000 00 00</p>
              <p className="text-sm text-gray-700 mt-2"><span className="font-semibold">E-mail:</span> info@westtronics.nl</p>
              <p className="text-xs text-gray-500 mt-4">Open: ma-vr 09:00 - 17:30</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 p-6 bg-gray-50/50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Naam</label>
                <input required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Voertuig</label>
                <input placeholder="Merk, model, bouwjaar" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Probleemomschrijving</label>
                <textarea rows={4} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm">Versturen</button>
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
