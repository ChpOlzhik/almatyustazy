import Carousel from 'react-bootstrap/esm/Carousel'
import CarouselComponent from './components/Carousel/Carousel.component'
import HeaderComponent from './components/Header/Header.component'
import Come from './pages/Content/Come'
import Final from './pages/Content/Final'
import Footer from './pages/Content/Footer'
import Main from './pages/Content/Main'
import Now from './pages/Content/Now'
import Stages from './pages/Content/Stages'
import All from './pages/Function/All/All'
import RoutesComponent from './routes/Routes'
import { useTranslation } from 'react-i18next'
function App() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <div className="wrapper">
      <RoutesComponent />
    </div>
  )
}
export default App
