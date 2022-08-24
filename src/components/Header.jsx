export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="bg-black py-2">
          <p className="text-center text-sm font-medium uppercase tracking-wide">
            Free expedited shipping on all U.S. orders!
          </p>
        </div>

        <div>
          <span className="sr-only">Home</span>
          <img
            className="mx-auto h-24 w-auto"
            src="/img/premeditated-logotype.png"
            alt="Premeditated"
          />
        </div>

        <nav className="mt-2 flex items-center justify-center gap-x-4">
          <a className="text-sm uppercase tracking-wide" href="/">
            Home
          </a>
          <a className="text-sm uppercase tracking-wide" href="#">
            Wigs
          </a>
          <a className="text-sm uppercase tracking-wide" href="#">
            Shop now
          </a>
          <a className="text-sm uppercase tracking-wide" href="#">
            About Us
          </a>
          <a className="text-sm uppercase tracking-wide" href="#">
            Blog
          </a>
        </nav>
      </div>
    </header>
  )
}
