import Carousel from 'react-bootstrap/esm/Carousel'
import CarouselComponent from './components/Carousel/Carousel.component'
import HeaderComponent from './components/Header/Header.component'
import Come from './pages/Content/Come'
import Final from './pages/Content/Final'
import Footer from './pages/Content/Footer'
import Main from './pages/Content/Main'
import Now from './pages/Content/Now'
import Stages from './pages/Content/Stages'

function App() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <Main />
      <CarouselComponent />
      <Stages />
      <Come />
      <Final />
      <Now />
      <Footer />
    </div>
  )
}
export default App
