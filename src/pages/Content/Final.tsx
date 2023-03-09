import React from 'react'
import '../../index.scss'
const Final: React.FC = () => {
  return (
    <div className="final">
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
      <div className="right">
        <h3>Жарыстың финалы</h3>
        <h1>Almaty Ustazy</h1>
        <h1>марапаттау салтанаты</h1>
        <div>1 орын</div>
        <p>Гран-при иегері 5 000 000 теңгенің сертификатымен марапатталады.</p>
        <div>1-5 орын</div>
        <p>
          «Білім берудегі жаңа технологиялар» саласы бойынша әлемдік қауымдастық
          мойындаған оқу орнында оқу тағылымдамасы
        </p>

        <div>5 финалист</div>
        <p>
          Алматы қаласы Білім басқармасының басшысымен панельдік пікірталасқа
          қатысады
        </p>

        <p>
          Әр кезең интенсивінен өткен барлық педагогтер қатысушы сертификатын
          алады
        </p>
      </div>
    </div>
  )
}

export default Final
