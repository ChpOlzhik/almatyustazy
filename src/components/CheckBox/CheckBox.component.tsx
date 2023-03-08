import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function CheckBox() {
  return (
    <FormGroup style={{ marginTop: 30 }}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Жеке деректерімді өңдеу саясатымен келісемін"
      />
    </FormGroup>
  )
}
