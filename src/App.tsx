import Carousel from 'react-bootstrap/esm/Carousel'
import CarouselComponent from './components/Carousel/Carousel.component'
import HeaderComponent from './components/Header/Header.component'
import Main from './pages/Content/main'

function App() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <Main />
      <CarouselComponent />
    </div>
  )
}
export default App
