import React from 'react'
import HeaderComponent from '../../../components/Header/Header.component'
import Come from '../../Content/Come'
import Final from '../../Content/Final'
import Footer from '../../Content/Footer'
import Main from '../../Content/Main'
import Now from '../../Content/Now'
import Stages from '../../Content/Stages'

const All: React.FC = () => {
  const refStage = React.useRef<HTMLInputElement>(null)
  const refSpeaker = React.useRef<HTMLInputElement>(null)
  const refPrize = React.useRef<HTMLInputElement>(null)
  const refParticipants = React.useRef<HTMLInputElement>(null)
  const scrollTo = (name: string) => {
    if (name === 'Спикерлер')
      refSpeaker.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (name === 'Байқау кезеңдері')
      refStage.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (name === 'Жүлделер')
      refPrize.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    if (name === 'Қатысушы болу')
      refParticipants.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <div>
      <HeaderComponent scrollTo={scrollTo} />
      <Main />
      <Stages refStage={refStage} refSpeaker={refSpeaker} />
      <Come refParticipant={refParticipants} />
      <Final refPrize={refPrize} />
      <Now />
      <Footer />
    </div>
  )
}

export default All
