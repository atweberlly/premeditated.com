import Header from '@components/Header'
import Footer from '@components/Footer'

const collections = [
  {
    no: 1,
    image: '/img/collection/wig-05.jpg',
    alt: 'Grand Sunshine',
    type: 'Straight',
    title: 'Grand Sunshine',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Pastel Pink',
    price: 145,
  },
  {
    no: 2,
    image: '/img/collection/wig-06.jpg',
    alt: 'Majestic Starburst',
    type: 'Straight',
    title: 'Majestic Starburst',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Purple',
    price: 145,
  },
  {
    no: 3,
    image: '/img/collection/wig-07.jpg',
    alt: 'Queen of the Martians',
    type: 'Straight',
    title: 'Queen of the Martians',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Neon Green',
    price: 145,
  },
  {
    no: 4,
    image: '/img/collection/wig-12.jpg',
    alt: 'Asteroid Maiden',
    type: 'Straight',
    title: 'Asteroid Maiden',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Silver',
    price: 145,
  },
  {
    no: 5,
    image: '/img/collection/wig-11.jpg',
    alt: 'Queen Neptune',
    type: 'Straight',
    title: 'Queen Neptune',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Black to Blue',
    price: 145,
  },
  {
    no: 7,
    image: '/img/collection/wig-10.jpg',
    alt: 'Cosmic Genie',
    type: 'Straight',
    title: 'Cosmic Genie',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Light Purple',
    price: 145,
  },
  {
    no: 8,
    image: '/img/collection/wig-08.jpg',
    alt: 'Grand Sunshine',
    type: 'Straight',
    title: 'Grand Sunshine',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Yellow',
    price: 145,
  },
]

export default function Collection() {
  return (
    <>
      <Header />

      <main>
        {/* <section className="px-8 py-8">
          <div className="hero rounded-2xl border border-white/25 p-8 supports-backdrop-blur:backdrop-blur-lg">
            <h1 className="text-center md:text-left">
              <span className="block font-display text-3xl tracking-widest lg:text-5xl">
                Straight
              </span>
              <span className="mt-2 block text-2xl lg:text-4xl">Space Babe</span>
              <span className="mt-2 block font-display text-2xl tracking-widest text-spring lg:text-3xl">
                Collection
              </span>
            </h1>

            <div>
              <img className="mt-8" src="/img/collection/wig-04-transparent.png" alt="" />
            </div>
          </div>
        </section> */}

        <section className="mx-auto px-8 py-8">
          <h2 className="text-center text-xl uppercase md:text-2xl">
            <span className="inline-block sm:block">Straight Wigs</span>
            <span className="text-purple">Synthetic Lace Front Wigs, Heat Friendly</span>
          </h2>
          <p className="mt-2 text-center text-gray-300">
            Countless textures, lengths, and colors of synthetic lace front wigs.
          </p>

          <div className="mt-8 xl:mx-auto xl:max-w-4xl" role="grid">
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 lg:gap-y-12"
              role="row"
            >
              {collections.map(({ no, image, alt, type, title, subtitle, color, price }) => (
                <div role="gridcell" key={no}>
                  <div className="">
                    <img src={image} alt={alt} />
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1.5">
                          <svg
                            className="h-5 w-5 text-grandis"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                          </svg>
                          <svg
                            className="h-5 w-5 text-grandis"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                          </svg>
                          <svg
                            className="h-5 w-5 text-grandis"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                          </svg>
                          <svg
                            className="h-5 w-5 text-grandis"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                          </svg>
                          <svg
                            className="h-5 w-5 text-grandis"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                          </svg>
                        </div>
                        <div className="text-sm uppercase tracking-wider">{type}</div>
                      </div>

                      <h3 className="mt-2 text-xl tracking-wide">{title}</h3>
                      <div className="text-sm">
                        {subtitle} | {color} Wig
                      </div>

                      <div className="mt-4 flex items-center gap-x-3">
                        <div className="flex items-center justify-center rounded-full bg-spring p-2">
                          <svg className="h-6 w-6 text-black " viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22.4088 23.2111 20.5847 5.8405c-.0382-.36364-.3448-.63977-.7104-.63977h-3.4285v-.78167C16.4458 1.98248 14.4633 0 12.0268 0 9.58999 0 7.60751 1.98248 7.60751 4.41906v.78167H4.17905c-.36567 0-.67218.27613-.71045.63977L1.6445 23.2111c-.02105.2013.04431.4021.17963.5526.1355.1504.32849.2363.53082.2363H21.6982c.2025 0 .3955-.0859.5308-.2363.1357-.1505.2009-.3513.1798-.5526ZM9.03609 4.41906c0-1.64886 1.34161-2.99047 2.99071-2.99047 1.6488 0 2.9904 1.34161 2.9904 2.99047v.78167H9.03609v-.78167ZM3.14816 22.5714 4.82229 6.62932h2.78522v1.57415c0 .39441.31988.7143.71429.7143s.71429-.31989.71429-.7143V6.62932h5.98111v1.57415c0 .39441.3199.7143.7143.7143.3944 0 .7143-.31989.7143-.7143V6.62932h2.7852l1.6742 15.94208H3.14816Z"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl">${price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button className="mx-auto block border-2 border-spring px-4 py-2" type="button">
              View more
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
