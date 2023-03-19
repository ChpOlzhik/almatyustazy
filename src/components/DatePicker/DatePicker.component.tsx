import * as React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useTranslation } from 'react-i18next'

type DatePickerValueProps = {
  value: Dayjs | null
  setValue: (value: Dayjs) => void
}
export default function DatePickerValue({
  value,
  setValue,
}: DatePickerValueProps) {
  const { t } = useTranslation()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label={t('birth')}
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue)
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}
