import { useEffect, useState } from "react";
import Emoji from "../../../components/Emoji";
import Spinner from "../../../components/Spinner";
import { getHeading } from "../../../services/headingServices";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    getHeading().then((resp) => (setHeading(resp.data.attributes.heading), setIsLoading(false)))
  }, [])

  return (
    <>
      <main className="max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        {isLoading ? <Spinner /> :
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Vous êtes</span>{' '}
              <span className="block text-primary-600 xl:inline">?</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {heading}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/individual"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                >
                  Particulier
                </a>
              </div>
              <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/company"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                >
                  Autoentrepreneur
                </a>
              </div>
              <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/manager"
                  className="flex items-center justify-center py-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                >
                  Dirigeant
                </a>
              </div>
            </div>
          </div>

        }
      </main>
    </>
  )
}
