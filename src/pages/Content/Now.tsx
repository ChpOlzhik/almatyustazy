import React from 'react'
import '../../index.scss'
import Input from '../../components/Input/Input.component'
import CheckBox from '../../components/CheckBox/CheckBox.component'
const Now: React.FC = () => {
  const handleOpen = () => {}
  return (
    <>
      <div className="now">
        <div className="nowLeft">
          <h1>Дәл қазір тіркел!</h1>
          <p>
            2022 жылдың 10 қыркүйегіне дейін тіркелуге және қатысуға өтінім
            беруге асығыңыз
          </p>
        </div>
        <div>
          <Input handleOpen={handleOpen} />
          <CheckBox />
        </div>
      </div>
      <h1 style={{ marginLeft: 200 }}>Байқауды ұйымдастырушы</h1>
      <div className="almaty">
        <img
          src="https://almatyustazy.kz/upload/iblock/68e/f61m7w5tp2yats1a3mozn0tvgpj6xnmy/1.png"
          alt=""
          height={100}
          width={100}
        />
        <b>
          <p>Алматы қаласының Білім басқармасы</p>
        </b>
      </div>
    </>
  )
}

export default Now
