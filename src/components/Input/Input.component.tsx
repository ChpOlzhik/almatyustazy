import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import ButtonComponent from '../Button/Button.component'

export default function Input() {
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
          window.location.href = '/login'
        }}
      />
    </Paper>
  )
}
