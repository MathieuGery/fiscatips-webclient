import NavBar from "../../components/NavBar";
import Tabs from "../../components/Tabs";

const tabs = [
  { name: 'Categorie 1', href: '#', current: false },
  { name: 'Categorie 2', href: '#', current: true },
  { name: 'Categorie 3', href: '#', current: false },
  { name: 'Categorie 4', href: '#', current: false },
  { name: 'Categorie 5', href: '#', current: false },
]

export default function Individual() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <NavBar />
          <Tabs tabs={tabs}/>
          <h1>Particulier</h1>
        </div>
      </div>
    </>
  )
}

