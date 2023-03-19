import React from 'react'
import { useTranslation } from 'react-i18next'
import ButtonComponent from '../../components/Button/Button.component'
import '../../index.scss'
type Props = {
  refStage?: React.RefObject<HTMLInputElement>
  refSpeaker?: React.RefObject<HTMLInputElement>
}
const Stages = ({ refSpeaker, refStage }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      <div id="id1" className="one" ref={refStage}>
        <h1 className="active">{t('stages')}</h1>
        <div className="crd active first">
          <h3 style={{ color: 'blue' }}>{t('first')}</h3>
          <h5>{t('second')}</h5>
          <h5>{t('third')}</h5>
          <h5>{t('fourth')}</h5>
          <h5>{t('fifth')}</h5>
          <h3 style={{ color: 'blue' }}>{t('attention')}</h3>
          <p>{t('attentionFirst')}</p>
          <h3 style={{ color: 'blue' }}>{t('important')}</h3>
          <p style={{ color: 'blue' }}>{t('importantFirst')}</p>
        </div>
        <div className="crd active">
          <h4 style={{ color: 'blue' }}>{t('secondStage')}</h4>
          <h3>{t('secondStageFirst')}</h3>
          <h3>{t('secondStageSecond')}</h3>
          <h3 style={{ color: 'blue' }}>{t('important')}</h3>

          <p>{t('importantSecond')}</p>
          <h3 style={{ color: 'blue' }}>{t('attention')}</h3>
          <p style={{ color: 'blue' }}>{t('attentionSecond')}</p>

          <h3>{t('final')}</h3>
        </div>
        <div className="crd passive">
          <h4 style={{ color: 'blue' }}>{t('thirdStageOne')}</h4>
          <p>{t('thirdStageTwo')}</p>
          <p>{t('thirdStageThree')}</p>
          <h3 style={{ color: 'blue' }}>{t('important')}</h3>
          <p>{t('thirdStageFour')}</p>
          <h3 style={{ color: 'blue' }}>{t('attention')}</h3>
          <p>{t('thirdStageFive')}</p>
          <p style={{ color: 'blue' }}>{t('thirdStageSix')}</p>
          <div>{t('thirdStageSeven')}</div>
        </div>
        <div style={{ marginTop: 50 }}>
          <ButtonComponent
            word={t('give')}
            onClick={() => {
              window.location.href =
                'https://docs.google.com/forms/d/e/1FAIpQLSd9XjX6jxZ6JvZ8a7Z6G5U6w5j6r5pYh1r6X1XjK7x6H5D2jQ/viewform?usp=sf_link'
            }}
          />
        </div>
      </div>
      <div>
        <h1
          style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}
          ref={refSpeaker}
        >
          {t('speakers')}
        </h1>
        <div className="speaker">
          <div className="richard">
            <img
              className="img"
              src="https://almatyustazy.kz/upload/iblock/78c/52fr3o0jk8rn1v10901smi8r7wy4hrl7/kulatta_rem_s.png"
              alt=""
            />
            <div>
              <h3 style={{ color: 'white' }}>Ричард Кулатта</h3>
              <p style={{ color: 'white' }}>
                Білім берудегі цифрлық технологиялармен айналысатын АҚШ-тың ең
                ірі компаниясының ISTE директоры
              </p>
              <h3 style={{ color: 'white' }}>
                «Қашықтан оқытудың цифрлық қызметтері мен құралдары»
              </h3>
            </div>
          </div>
          <div className="richardRight">
            <img
              src="https://almatyustazy.kz/upload/iblock/01d/urabak2cld7p439mr9efu4ci1vpo863s/image-83.png"
              alt="1"
            />
            <img
              src="https://almatyustazy.kz/upload/resize_cache/iblock/f63/6lwr2z5ymlshlw9fzh861398a15j1t60/275_275_1/imgonline_com_ua_Resize_vuoir9vVT57.jpg"
              alt="2"
            />
            <img
              src="https://almatyustazy.kz/upload/resize_cache/iblock/87b/979ow4fwknj0vj3h6z1lgxap06fs92pl/275_275_1/ludmila_rojdestvenskaya_cr.png"
              alt="3"
            />
            <img
              src="https://almatyustazy.kz/upload/resize_cache/iblock/0ad/84lmsi294v8zcvk1vqis51sl2i8t8kvo/275_275_1/WhatsApp_Image_2022_08_01_at_23.45.42_removebg_preview.png"
              alt="4"
            />
            <img
              src="https://almatyustazy.kz/upload/resize_cache/iblock/92f/fy2xtxqs8cnk06s6xihs5s5ttw2qp09i/275_275_1/IMG_2612.jpg"
              alt="5"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Stages
