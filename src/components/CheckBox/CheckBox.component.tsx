import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useTranslation } from 'react-i18next'

export default function CheckBox() {
  const { t, i18n } = useTranslation()
  return (
    <FormGroup style={{ marginTop: 30 }}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={t('accept')}
      />
    </FormGroup>
  )
}
