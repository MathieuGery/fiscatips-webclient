import { useState } from "react";
import NavBar from "../../components/NavBar";
import Tabs from "../../components/Tabs";
import BlogCard from "../../components/PostCard";

export default function Company() {
  const [tabs, setTabs] = useState([
    { name: 'Categorie 1', href: '#toto', current: true, content: <BlogCard/> },  
    { name: 'Categorie 2', href: '#', current: false, content: <p>categorie 2</p> },
    { name: 'Categorie 3', href: '#', current: false, content: <p>categorie 3</p> },
    { name: 'Categorie 4', href: '#', current: false, content: <p>categorie 4</p> },
    { name: 'Categorie 5', href: '#', current: false, content: <p>categorie 5</p> },
  ])

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <NavBar />
          <div className="bg-white overflow-hidden">
            <div className="relative">
              <Tabs tabs={tabs} setTabs={setTabs}/>            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

