export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">W</div>
              <div className="leading-tight">
                <p className="text-sm text-gray-500">Westtronics</p>
                <p className="text-base font-semibold">Auto Elektronica</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Reparatie en revisie van automotive elektronica met 12 maanden garantie en snelle doorlooptijd.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Diensten</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>ABS/ESP Reparatie</li>
              <li>ECU Reparatie</li>
              <li>Instrumentenpanelen</li>
              <li>Sleutel & Immobilizer</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Industrieweg 12, 1234 AB</li>
              <li>+31 00 000 00 00</li>
              <li>info@westtronics.nl</li>
              <li>Ma–Vr 09:00–17:30</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Westtronics. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Algemene voorwaarden</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
