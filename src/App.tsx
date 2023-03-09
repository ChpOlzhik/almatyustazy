import Carousel from 'react-bootstrap/esm/Carousel'
import CarouselComponent from './components/Carousel/Carousel.component'
import HeaderComponent from './components/Header/Header.component'
import Main from './pages/Content/Main'
import Stages from './pages/Content/Stages'

function App() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <Main />
      <CarouselComponent />
      <Stages />
    </div>
  )
}
export default App
