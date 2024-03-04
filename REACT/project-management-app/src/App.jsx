import RightSection from "./components/rightSection"
import SideBar from "./components/sidebar"
import { useState } from "react";

function App() {
  const [isAdded, setIsAdded] = useState(false)
  const [project, setProject] = useState([])
  const [itemIndex, setItemIndex] = useState()
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className=" flex relative">
      <SideBar setIsAdded={setIsAdded} project={project} setItemIndex={setItemIndex} setIsSelected={setIsSelected} />
      <RightSection isAdded={isAdded} setIsAdded={setIsAdded} project={project} setProject={setProject} itemIndex={itemIndex} isSelected={isSelected} />
    </div>
  )
}

export default App
