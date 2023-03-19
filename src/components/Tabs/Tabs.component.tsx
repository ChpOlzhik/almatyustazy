import * as React from 'react'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'

export default function TabsComponent() {
  const { i18n } = useTranslation()
  const handleChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode,
  ) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <FormControl>
        <InputLabel id="language-select-label">Тіл</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language || 'kz'}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="kz">Қазақ тілі</MenuItem>
          <MenuItem value="ru">Русский язьк</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
