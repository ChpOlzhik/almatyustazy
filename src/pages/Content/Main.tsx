import React from 'react'
import '../../index.scss'
import CheckBox from '../../components/CheckBox/CheckBox.component'
import Input from '../../components/Input/Input.component'
import ModalRegister from '../../components/Modal/ModalRegister'
import { useTranslation } from 'react-i18next'
const main: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { t, i18n } = useTranslation()
  return (
    <div className="content" id="section1">
      <div className="contentLeft">
        <h1>{t('greeting')}</h1>
        <h3 style={{ marginTop: 25 }}>Жаспын, жас та болсам баспын!</h3>
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
