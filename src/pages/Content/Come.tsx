import React from 'react'
import '../../index.scss'
import ButtonComponent from '../../components/Button/Button.component'
import { useTranslation } from 'react-i18next'
const Come = ({
  refParticipant,
}: {
  refParticipant: React.RefObject<HTMLInputElement>
}) => {
  const { t } = useTranslation()
  return (
    <div ref={refParticipant}>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {t('come')}
      </h1>
      <div className="come">
        <div className="comeLeft">
          <b>
            <p>{t('age')}</p>
          </b>
          <div className="insidePaper">
            <img
              src="https://almatyustazy.kz/upload/iblock/83e/l34q4vdxijf5lunum0ho0p98ki9i24ng/become_a_member_heart.svg"
              alt=""
            />
            <b>
              <p>{t('wifi')}</p>
            </b>
          </div>

          <div className="insidePaper">
            <img
              src="https://almatyustazy.kz/upload/iblock/9e3/70vkm6oyo623ttn1hpwop57q9r33dfmh/become_a_member_arrow.svg"
              alt=""
            />
            <b>
              <p>{t('down')}</p>
            </b>
          </div>

          <div className="insidePaper">
            <img
              src="https://almatyustazy.kz/upload/iblock/bd2/zj06nwnbqwk12v1hwi32e2qftln7ti4f/become_a_member_heart.svg"
              alt=""
            />
            <b>
              <p>{t('like')}</p>
            </b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonComponent
              word={t('register')}
              onClick={() => {
                window.location.href = '/login'
              }}
            />
          </div>
        </div>
        <img
          src="https://almatyustazy.kz/img_almaty_ustaz/join_img.png"
          alt="almatyustazy"
        />
      </div>
    </div>
  )
}

export default Come
