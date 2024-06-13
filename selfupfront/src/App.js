import { Route,Routes } from "react-router-dom"
import ImageUploadForm from "./components/ImageUploadForm"
import DisplayPage from "./pages/DisplayPage"
import Layout from "./components/Layout"
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<ImageUploadForm/>} />
          <Route path="/display" element={<DisplayPage/>} />
            
          </Route>
      </Routes>
      
    </>
  )
}

export default App
