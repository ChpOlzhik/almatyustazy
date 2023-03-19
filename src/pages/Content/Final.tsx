import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../index.scss'
type FinalProps = {
  refPrize: React.RefObject<HTMLDivElement>
}
const Final = ({ refPrize }: FinalProps) => {
  const { t } = useTranslation()
  return (
    <div className="final" ref={refPrize}>
      <div className="prev">
        <div className="finalLeft">
          <img
            height={200}
            src="https://almatyustazy.kz/img_almaty_ustaz/final_1.png"
            alt=""
          />
          <h1 style={{ color: 'white' }}>Финал</h1>
        </div>

        <img
          className="imgFinal"
          src="https://almatyustazy.kz/img_almaty_ustaz/final_2.png"
          alt=""
        />
      </div>
      <div
        className="right"
        style={{
          marginTop: 50,
        }}
      >
        <h3>{t('race')}</h3>
        <h1>Almaty Ustazy</h1>
        <h1>{t('x')}</h1>
        <div>{t('firstPlace')}</div>
        <p>{t('grand')}</p>
        <div>{t('secondPlace')}</div>
        <p>{t('know')}</p>
        <div>{t('thirdPlace')}</div>
        <p>{t('almatys')}</p>

        <p>{t('screen')}</p>
      </div>
    </div>
  )
}

export default Final
