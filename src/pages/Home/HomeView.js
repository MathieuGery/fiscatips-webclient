import NavBar from '../../components/NavBar'
import Faq from './Components/Faq'
import Features from './Components/Features'
import HeroSection from './Components/HeroSection'
import Tips from './Components/Tips'

export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <NavBar />
            <HeroSection />
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Tips />
        <Features />
        <Faq />
      </div>
    </>
  )
}
