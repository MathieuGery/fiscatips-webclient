import Emoji from "../../../components/Emoji";

export default function HeroSection() {
  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Vous êtes</span>{' '}
            <span className="block text-indigo-600 xl:inline">?</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/individual"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                <Emoji className="mr-2" symbol="😎" label="cool"/>
                Particulier
              </a>
            </div>
            <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/company"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                <Emoji className="mr-2" symbol="🏦" label="bank"/>
                Société
              </a>
            </div>
            <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/manager"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                <Emoji className="mr-2" symbol="👨‍💻" label="work"/>
                Gérant
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
