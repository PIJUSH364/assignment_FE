import { Route, Routes } from "react-router-dom"
import Lac_03 from "./components/utility_first/Lac_03"
import Home from "./Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="utility" element={<Lac_03 />}/>
      </Routes>
    </>
  )
}

export default App
