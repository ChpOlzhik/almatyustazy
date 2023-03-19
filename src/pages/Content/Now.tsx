import React from 'react'
import '../../index.scss'
import Input from '../../components/Input/Input.component'
import CheckBox from '../../components/CheckBox/CheckBox.component'
import { useTranslation } from 'react-i18next'
const Now: React.FC = () => {
  const { t } = useTranslation()

  const handleOpen = () => {}
  return (
    <>
      <div className="now">
        <div className="nowLeft">
          <h1>{t('now')}</h1>
          <p>{t('fast')}</p>
        </div>
        <div>
          <Input handleOpen={handleOpen} />
          <CheckBox />
        </div>
      </div>
      <h1 style={{ marginLeft: 200 }}>{t('create')}</h1>
      <div className="almaty">
        <img
          src="https://almatyustazy.kz/upload/iblock/68e/f61m7w5tp2yats1a3mozn0tvgpj6xnmy/1.png"
          alt=""
          height={100}
          width={100}
        />
        <b>
          <p>{t('almaty')}</p>
        </b>
      </div>
    </>
  )
}

export default Now
