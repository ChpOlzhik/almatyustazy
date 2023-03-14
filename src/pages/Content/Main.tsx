import React from 'react'
import '../../index.scss'
import CheckBox from '../../components/CheckBox/CheckBox.component'
import Input from '../../components/Input/Input.component'
import ModalRegister from '../../components/Modal/ModalRegister'
const main: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="content" id="section1">
      <div className="contentLeft">
        <h1>Көрсетіңіз, шабыттандырыңыз және басқарыңыз</h1>
        <h5 style={{ marginTop: 25 }}>
          Алматыдағы «Almaty Ustazy» қалалық жас мұғалімдер байқауына қатысып,
          Финляндияда оқу тәжірибесінің иегері болыңыз
        </h5>
        <Input handleOpen={handleOpen} />
        <CheckBox />
        {open && <ModalRegister handleClose={handleClose} open={open} />}
      </div>

      <img
        className="contentRight"
        src="https://almatyustazy.kz/local/templates/ustaz/include_areas/kz/images/taglinemob-img.png"
        alt="log"
      />
    </div>
  )
}

export default main
