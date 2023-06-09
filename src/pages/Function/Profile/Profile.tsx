import HeaderComponent from '../../../components/Header/Header.component'
import AuthService from '../../../services/AuthService'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import React from 'react'

const Profile = () => {
  const { t, i18n } = useTranslation()
  const [userProfile, setUserProfile] = React.useState<any>()
  var birthDateFormated = 'Енгізілмеген'
  React.useEffect(() => {
    const user = AuthService.getCurrentUser()
    user.then((res) => {
      setUserProfile(res)
      localStorage.setItem('data', JSON.stringify(res))
    })
  }, [])

  const navigate = useNavigate()
  const birthDate = new Date(userProfile?.birthDate)

  if (userProfile?.birthDate !== null) {
    birthDateFormated = `${birthDate.getDate() + 1}.${
      birthDate.getMonth() + 1
    }.${birthDate.getFullYear()}`
  }
  const scrollTo = () => {}
  if (userProfile?.isKazakhProficient == false) {
    userProfile.isKazakhProficient = 'Орысша'
  }
  if (userProfile?.isKazakhProficient == true) {
    userProfile.isKazakhProficient = 'Қазақша'
  }
  if (userProfile?.isKazakhProficient == false) {
    userProfile.isKazakhProficient = 'Русский'
  }
  if (userProfile?.isKazakhProficient == true) {
    userProfile.isKazakhProficient = 'Казахский'
  }
  if (userProfile?.englishProficiency == false) {
    userProfile.englishProficiency = 'Нет'
  }
  if (userProfile?.englishProficiency == true) {
    userProfile.englishProficiency = 'Да'
  }
  if (userProfile?.englishProficiency == false) {
    userProfile.englishProficiency = 'Жоқ'
  }
  if (userProfile?.englishProficiency == true) {
    userProfile.englishProficiency = 'Иә'
  }

  return (
    <div>
      <HeaderComponent scrollTo={scrollTo} />
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={
                    userProfile?.profilePhoto
                      ? userProfile?.profilePhoto
                      : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAAMFBMVEXK0eL////L0uP8/P3P1eX4+fvT2efY3ero6/L09fna3+vi5u/S2Ofv8fbj5/De4u0xCYVjAAAG/0lEQVR4nO2diZaaMBhGMYSEhO3937ZJwMooKibfx37bOp3OKee/Zl/Nblsjf6Jwv8eYnmagHGgdVVV1AWuttlpr1VNLj3BkhECfA7xHOAryEWaItOxjvYdrA/oeb+1/13Uf9BC3D90RXubzqvs/5qc38/X9HN7TUZhDoHoUqov0T6ijcIeIl0Rk7ThOrXyUIcAQ6DhMsV6UMKT7dSJkVq8dwpKcTLc+l666dA+MOlfNfOkeGX3pHhh7Lt0rdY9Md+kemEv3yJxMt7p0D8zJdNtL98CcTLdcUFdIpbX1SxaPVRa17Lu9mG7dlaYIi09/16OKcsm5wUV0Rd01+fPS24Om03KhZacFdIUuiy8rpYVpFTuMAF9XfZXtjStyHIGGrCurWbKecoFiRda1Zq6sw2hmKAGqrqw+VFBTGZruy9SV5W+2ztfSggkIom79S0a++3asaALC0HR1hK3reFTMFpinq6Jsyb403ZicPPi2PF+WrmhibW/MBpikK8oEW9eJZo0aJEe3+7UFesKQetCyYOjGVlMPSA2w08VXDEkF9+5LSV+KbmpWDpTwsDKOrkjOyp6cUV0xdDuE7e3WouNy1PiqCpO4rvQSkpegqxAl10OY3iDogvKy62zgm0iF121RuoS2CJ+6if3HMfjcrHK0rgT0MQbwTS9BF1QxOxp4G4nXVbMnWr/rwusqDdfVJ9NFNbtuGLgDXYvT3UPqblrXwnVhnap96FaX7mZ0O7gurMt8Pl38zMOlm8a2dW9oXdz4j6Bb3dBTc5fupXvpLqHbblm3vHTT2LYuNrIQ3KWb+MRLNw78GuClm/xEnC66Zhbb1sVGtnVd+JLY2XSbSzeNM+kK3eGWd28d+lI7sK5ocSsmjqIw2L2CYF3gUvYAdsgrsbrpWz/3pYtbyj6nLnaEfzZdA9WNP2+xS118VbVpXXxDhJ3Q2Lwuth/pChvyccANgj059kggWBdx5uKvLrYTidYFDod6XeyB3rqA6iJHf70udkszWhe47SZQYNfaFVgXcoJoBHhXJFoXduxioIFGB9eV4E4zeNlEg3XRdRX4JD46dZEbQD3giyXgqSuwk1XgqTm4LnIXGX7VBK9bAysrgz4FiNcF9jTAHeYs7KRHPxI3KsLvRCHowpKXcASQoYsqvYTT6AzdDJSbCZc5UXQxuRk8GAp0DF0N0TX4wDi6EqLLuGmAopsh6ip8o5uFHj3hqYi6Ct6j8nB0EaNA/F7mLFSinKcmwyi6JF3AFA6l6JJ0AfeiUIouSRdQeCn3GfnBOOOx6efvObdzkXST5zQo9TJPN3Xlk3TXK0s3cZcGeDb9PyVLN6ntBa/7PeDpZgn7BfGzNgNEXRndGtEuxWTqRs/Rca5MDDB1MxuZuLyIqLqRsxqcDpVHnEy32WBmpgz9ApcukEhd3qdfcHUjl7ZPpsv7qACubmS3ea+puz1dw9SNHOPzdOWliyNyiMBrd7m6kRM4O9WN3TDI6zNTdWOnb3gDQJ6uak3s5E3eseZuaLo2bSKSNDXnN8kwnpt6fIqzIEbTTV7xxN/d6yHppp+eAh+5GCDpRg5096qbvt7JWUcg6aavZnPqKo6uBOxYp4wTFEUXsWuOssDr94zgn4rYn0/5NE+OLmTHKyN5Kbqg/cyEykozdEFX5xPGgb5SgT8UdLSmgAdG0YXdroCfb8br/vBR2V9pOqugFZbF6kpdYq9WyIumA+5cgOrKroHfAeOMTQsbLuB0hZ736fYxFI3F5GmQrlAV/H6Qv7gkBhh3CF1OJn6mKHWyMEA3YcrxV+HkPJ2oK5Zz7TFd0hxWlaIrbbOoa7pwgq6sVpANwlV0SxytK9lV8QdyE7vM0MbpqnKdhP2PsVFZOkZXKF6HYj4mpnMZoUvsPf2GafWvSfyz7iZS9k7+a631m65QK1XG78ndiGl+veWn+2fL6rUrqGmKcnZT/IOuXqJjHEc+t+8xW3d72fgvppojPE/Xldm1db6TzxCeoytW71TMxFTfpj1m6MotNT1fMOXnpRafST8nbbde3ziGvPyUpb/oCrsvWc+nbUqfdfdSaP+Sl2+L8EfdneXjB28/XeCDrtxl0va8u/fXp9/kD0TatrfVma6x3ukK4ErPOkz6vtOt9puR70wtD7/RRV9MuwoT5Xdad+fldmDiGLD3evnHegcDgjm8bvKf1EXfoL0Wr7tmp3TRVyyvx/POOzGle5CsfJtI3gldfZjEfd2a5dUOWnI9T2dWxISuLctmjJlB0f8pksgDo++HlzyG/oFPuXlKd/TT7O3HnYi5yK/U0yil+q//v/Vox/BlEv8jNfxX//o9dQ/MpXtkLt0j0+u2H6je0M3CWhteXgjV6P3rU93a17xDVazudfLr9/c6/Lmq982BGP424q77DyADeIdjfOTqAAAAAElFTkSuQmCC'
                  }
                  width="100"
                  className="rounded-circle"
                />
              </div>

              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  {userProfile?.username}
                </span>
                <h5 className="mt-2 mb-0">
                  {t('full')}: {userProfile?.firstName} {userProfile?.lastName}{' '}
                  {userProfile?.middleName}
                </h5>
                <div className="px-4 mt-1">
                  <p className="fonts">
                    {t('school')}:{' '}
                    {i18n.language === 'ru'
                      ? userProfile?.group?.nameRus
                      : userProfile?.group?.nameKaz}
                  </p>
                  <p className="fonts">
                    {t('subject')}:{' '}
                    {i18n.language === 'ru'
                      ? userProfile?.subject?.nameRus
                      : userProfile?.subject?.nameKaz}
                  </p>
                  <p className="fonts">
                    {t('birthday')}: <b>{birthDateFormated}</b>
                  </p>
                  <p className="fonts">
                    {t('degree')}:{' '}
                    {i18n.language === 'ru'
                      ? userProfile?.category?.nameKaz
                      : userProfile?.category?.nameRus}
                  </p>

                  <p className="fonts">
                    {t('language')}:{' '}
                    {userProfile?.isKazakhProficient === 1
                      ? 'Қазақша'
                      : 'Русский'}
                  </p>
                  <p className="fonts">
                    {t('english')}:{' '}
                    {userProfile?.englishProficiency === 1 ? t('no') : t('yes')}
                  </p>
                  <p className="fonts">
                    {t('current')}:{' '}
                    {userProfile?.pedagogicalExperienceCurrent === 0
                      ? ' '
                      : userProfile?.pedagogicalExperienceCurrent}
                  </p>
                  <p className="fonts">
                    {t('time')}:{' '}
                    {userProfile?.pedagogicalExperience === 0
                      ? ' '
                      : userProfile?.pedagogicalExperience}
                  </p>
                </div>
                <div className="buttons d-flex justify-content-around ml-5">
                  <button
                    className="btn btn-outline-primary px-4"
                    onClick={() => {
                      navigate('/')
                    }}
                  >
                    {t('mainPage')}
                  </button>
                  <button
                    className="btn btn-outline-primary px-4"
                    onClick={() => {
                      navigate('/register')
                    }}
                  >
                    {t('more')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
