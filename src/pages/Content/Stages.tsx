import React from 'react'
import ButtonComponent from '../../components/Button/Button.component'
import '../../index.scss'
type Props = {
  refStage?: React.RefObject<HTMLInputElement>
  refSpeaker?: React.RefObject<HTMLInputElement>
}
const Stages = ({ refSpeaker, refStage }: Props) => {
  return (
    <>
      <div id="id1" className="one" ref={refStage}>
        <h1 className="active">Байқауды өткізу кезеңдері</h1>
        <div className="crd active">
          <h3 style={{ color: 'blue' }}>
            I кезең - 2022 жылғы 01 тамыздан 11 қыркүйекке дейін ONLINE
          </h3>
          <h4>
            «Менің оқыту философиям» тақырыбына мультимедиялық мақала әзірлеу
          </h4>
          <p>
            Түрлі сандық ресурстарды пайдалана отырып, мультимедиялық мақала
            форматында тиімді оқу мен оқыту қағидаттары туралы өз көзқарасыңызды
            ұсыну. Бірінші кезеңнің тапсырмасын нақтылауға арналған бағдарлау
            сессиясы – 2022 жылғы 22 тамыз. Байқауға қатысушылардың бірінші
            кезеңнің жұмысын тапсыру мерзімі – 2022 жылғы 11 қыркүйекке дейін.
          </p>
          <h3 style={{ color: 'blue' }}>
            Қазылар алқасы бірінші кезеңнің қорытындысы негізінде екінші кезеңге
            қатысатын жүз мұғалімді анықтайды.
          </h3>
        </div>
        <div className="crd active">
          <h4 style={{ color: 'blue' }}>
            II кезең - 2022 жылдың 22-24 қыркүйегі аралығында LIVE
          </h4>
          <h3>
            «Кәсіби ұстаз» тақырыбында сайыс сабағын өткізуОқытудың берілген
            тәсілін пайдалана отырып, сайыс сабағын әзірлеу және өткізу.
          </h3>
          <p>
            Eкінші кезеңнің тапсырмасын нақтылауға арналған бағдарлау сессиясы –
            2022 жылғы 21 қыркүйек. Сайыс сабақтарын өткізу – 2022 жылғы 22-24
            қыркүйектері
          </p>
          <h4 style={{ color: 'blue' }}>
            Қазылар алқасы екінші кезеңнің қорытындысы негізінде үшінші кезеңге
            қатысатын бес финалисті анықтайды.
          </h4>
        </div>
        <div className="crd passive">
          <h4 style={{ color: 'blue' }}>
            III кезең - 2022 жылғы 28-30 қыркүйек аралығында LIVE
          </h4>
          <h3>
            «Мен көшбасшы ұстазбын» тақырыбында авторлық шеберлік сабақтарын
            өткізу (педагогикалық тәжірибем мен дағдыларымды таныстыру)
          </h3>
          <p>
            Заманауи стратегияларды, әдістерді және ресурстарды пайдалана
            отырып, өзекті тақырып бойынша шеберлік сабағын әзірлеу және өткізу.
            Бірінші кезеңнің тапсырмасын нақтылауға арналған бағдарлау сессиясы
            – 2022 жылғы 24 қыркүйек. Байқауға қатысушылардың шеберлік сабағын
            әзірлеудің соңғы мерзімі – 2022 жылдың 28 қыркүйегіне дейін.
          </p>
          <h3 style={{ color: 'blue' }}>
            Үшінші кезеңнің қорытындысы бойынша қазылар алқасы байқау жеңімпазын
            анықтайды
          </h3>
        </div>
        <div style={{ marginTop: 50 }}>
          <ButtonComponent
            word="Қатысуға өтінім беру"
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
          Спикерлер
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
