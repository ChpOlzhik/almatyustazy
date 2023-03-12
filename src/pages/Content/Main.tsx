import React from 'react'
import '../../index.scss'
import CheckBox from '../../components/CheckBox/CheckBox.component'
import Input from '../../components/Input/Input.component'
const main: React.FC = () => {
  return (
    <div className="content" id="section1">
      <div className="contentLeft">
        <h1>Көрсетіңіз, шабыттандырыңыз және басқарыңыз</h1>
        <h5 style={{ marginTop: 25 }}>
          Алматыдағы «Almaty Ustazy» қалалық жас мұғалімдер байқауына қатысып,
          Финляндияда оқу тәжірибесінің иегері болыңыз
        </h5>
        <Input />
        <CheckBox />
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
