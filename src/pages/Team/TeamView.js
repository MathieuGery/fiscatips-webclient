import NavBar from "../../components/NavBar";
import MemberComponent from "./Components/Member";

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function Team() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <NavBar />
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
                <p className="text-xl text-gray-500">
                  Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
                  neque.
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
              >
                {people.map((person) => (<MemberComponent person={person} />))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

