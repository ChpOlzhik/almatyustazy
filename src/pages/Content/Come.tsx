import React from 'react'
import '../../index.scss'
import ButtonComponent from '../../components/Button/Button.component'
const Come: React.FC = () => {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {' '}
        Қатысуға шақырамыз
      </h1>
      <div className="come">
        <div className="comeLeft">
          <b>
            <p>
              Конкурсқа Алматы қаласының мемлекеттік білім беру ұйымдарындағы
              оқу жоспарының барлық пәндері бойынша 36 жасқа дейін қоса алғанда
              1-11 сынып мұғалімдері қатыса алады
            </p>
          </b>
          <div className="insidePaper">
            <img
              src="https://almatyustazy.kz/upload/iblock/83e/l34q4vdxijf5lunum0ho0p98ki9i24ng/become_a_member_heart.svg"
              alt=""
            />
            <b>
              <p>электрондық тіркеуден өтіп, сауалнаманы толтырыңыз</p>
            </b>
          </div>

          <div className="insidePaper">
            <img
              src="https://almatyustazy.kz/upload/iblock/9e3/70vkm6oyo623ttn1hpwop57q9r33dfmh/become_a_member_arrow.svg"
              alt=""
            />
            <b>
              <p>
                түйіндемені, фотосуретті және еңбек өтілі көрсетілген жұмыс
                орнынан анықтаманың скан-көшірмесін жүктеңіз
              </p>
            </b>
          </div>

          <div className="insidePaper">
            <img
              src="https://almatyustazy.kz/upload/iblock/bd2/zj06nwnbqwk12v1hwi32e2qftln7ti4f/become_a_member_heart.svg"
              alt=""
            />
            <b>
              <p>академиялық адалдық қағидаттарын сақтаңыз</p>
            </b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonComponent word="Тіркелу" />
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
