import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import ButtonComponent from '../Button/Button.component'

type Props = {
  handleOpen: () => void
}
export default function Input({ handleOpen }: Props) {
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
        placeholder="Email енгізіңіз"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <ButtonComponent
        word="Тіркелу"
        onClick={() => {
          if (localStorage.getItem('user')) {
            handleOpen()
          } else {
            window.location.href = '/login'
          }
        }}
      />
    </Paper>
  )
}
