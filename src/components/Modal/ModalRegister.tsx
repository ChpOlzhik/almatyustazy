import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import UploadButtons from '../Upload/Upload.component'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import '../../index.scss'
import { useState } from 'react'
import DatePickerValue from '../DatePicker/DatePicker.component'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 40,
  p: 4,
  backgroundColor: '#fff',
}
type Props = {
  handleClose: () => void
  open: boolean
}
export default function ModalRegister({ handleClose, open }: Props) {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <UploadButtons />
            <Box sx={{ minWidth: 200, margin: '10px 20px' }}>
              <DatePickerValue />
            </Box>
            <Box sx={{ minWidth: 200, margin: '10px 20px' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Subject"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 200, margin: '10px 20px' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">School</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Subject"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              style={{
                backgroundColor: '#3f51b5',
                color: 'white',
                margin: '15px 10px',
                width: '100%',
              }}
              variant="outlined"
            >
              Жіберу
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
