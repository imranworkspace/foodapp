import Navbar from './componants/navbar/Navbar'
import Main from './main/Main'
import Footer from './footer/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Detailspage from './detailspage/Detailspage'
const App = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Main />}></Route>
          <Route path='/details'  element={<Detailspage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
