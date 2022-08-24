export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 xl:pt-32 xl:pb-56">
      <div className="container">
        <div role="grid">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6" role="row">
            <div className="md:col-span-3" role="gridcell">
              <img className="h-24 w-auto" src="/img/premeditated-logotype.png" alt="Premeditated" />
              <p className="text-lg text-gray-400">Complete your style with awesome Wigs from us.</p>
              <div className="mt-4 inline-flex items-center gap-x-2">
                <a className="flex h-8 w-8 items-center justify-center rounded-lg bg-spring" href="#" target="_blank">
                  <span className="fab fa-facebook text-lg text-black">
                    <span className="sr-only">Visit Facebook</span>
                  </span>
                </a>

                <a className="flex h-8 w-8 items-center justify-center rounded-lg bg-spring" href="#" target="_blank">
                  <span className="fab fa-instagram text-lg text-black">
                    <span className="sr-only">Visit Instagram</span>
                  </span>
                </a>

                <a className="flex h-8 w-8 items-center justify-center rounded-lg bg-spring" href="#" target="_blank">
                  <span className="fab fa-twitter text-lg text-black">
                    <span className="sr-only">Visit Twitter</span>
                  </span>
                </a>
              </div>
            </div>

            <div role="gridcell">
              <h2 className="text-xl font-bold">Company</h2>
              <nav className="mt-4 inline-flex flex-col gap-y-4">
                {['About', 'Contact Us', 'Support'].map((item, i) => (
                  <a className="text-gray-400 hover:text-gray-300" href="#" key={i}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div role="gridcell">
              <h2 className="text-xl font-bold">Quick Links</h2>
              <nav className="mt-4 inline-flex flex-col gap-y-4">
                {['Share Location', 'Orders Tracking', 'Size Guide', 'FAQs'].map((item, i) => (
                  <a className="text-gray-400 hover:text-gray-300" href="#" key={i}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div role="gridcell">
              <h2 className="text-xl font-bold">Legal</h2>
              <nav className="mt-4 inline-flex flex-col gap-y-4">
                {['Terms and Conditions', 'Privacy Policy'].map((item, i) => (
                  <a className="text-gray-400 hover:text-gray-300" href="#" key={i}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
