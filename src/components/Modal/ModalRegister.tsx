import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import UploadButtons from '../Upload/Upload.component'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import '../../index.scss'
import { useState } from 'react'
import DatePickerValue from '../DatePicker/DatePicker.component'
import dayjs, { Dayjs } from 'dayjs'
import TournamentService from '../../services/TournamentService'
import { schools, subjects } from '../../models/data'
import TextField from '@mui/material/TextField'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 40,
  borderRadius: 10,
  p: 10,
  backgroundColor: '#fff',
}

type Props = {
  handleClose: () => void
  open: boolean
}

export default function ModalRegister({ handleClose, open }: Props) {
  const [selectedFile, setSelectedFiles] = useState<FileList | null>(null)
  const [selectedFile2, setSelectedFiles2] = useState<FileList | null>(null)
  const formData1 = new FormData()
  const formData2 = new FormData()
  formData1.append('file', selectedFile?.item(0) as File)
  formData2.append('file', selectedFile2?.item(0) as File)

  const [link, setLink] = useState('')
  const tournamentId = 0
  const choices = 0
  const name = 'file'
  const url = ''

  const sent = () => {
    TournamentService.sendForm(formData1)
    TournamentService.registerTournament(tournamentId, name, choices, link, url)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{}}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '20px',

              color: '#000',
            }}
          >
            <div>Олимпиадаға тіркелу</div>
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '20px',

              color: '#000',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Презентацияның ссылкасы"
              variant="standard"
              onChange={(e) => setLink(e.target.value)}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Немесе
            </div>
            <FormControl fullWidth>
              <Button variant="contained" component="label" size="large">
                презентация жүктеу
                <input
                  hidden
                  multiple
                  type="file"
                  onChange={(e) => {
                    setSelectedFiles2(e.target.files)
                  }}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth>
              <Button variant="contained" component="label" size="large">
                Нысан бойынша өтінім
                <input
                  hidden
                  multiple
                  type="file"
                  onChange={(e) => {
                    setSelectedFiles(e.target.files)
                  }}
                />
              </Button>
            </FormControl>

            <Button variant="outlined" onClick={sent}>
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
