import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import ButtonComponent from '../Button/Button.component'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

type Props = {
  handleOpen: () => void
}
export default function Input({ handleOpen }: Props) {
  const storedData = localStorage.getItem('data')
  const data = storedData ? JSON.parse(storedData) : null

  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        marginTop: 2,
        width: 400,
        height: 60,
        borderRadius: 45,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={t('type') + '...'}
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <ButtonComponent
        word={t('register')}
        onClick={() => {
          if (localStorage.getItem('user') && data.category) {
            handleOpen()
          } else if (localStorage.getItem('user') && data.category === null) {
            if (i18n.language == 'kz') {
              alert('Жеке кабинеттегі мәліметтерді толықтырыңыз')
            } else if (i18n.language == 'ru') {
              alert('Добавьте незаполненые данные в профиле')
            }
            navigate('/register')
          } else {
            navigate('/login')
          }
        }}
      />
    </Paper>
  )
}
