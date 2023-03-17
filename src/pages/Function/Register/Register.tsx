import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import classes from './Register.module.scss'
import { Button, FormControl, InputLabel, Select } from '@mui/material'
import axios, { all } from 'axios'
import MenuItem from '@mui/material/MenuItem'
import UploadButtons from '../../../components/Upload/Upload.component'
import HeaderComponent from '../../../components/Header/Header.component'
import dayjs, { Dayjs } from 'dayjs'
import DatePickerValue from '../../../components/DatePicker/DatePicker.component'
import { schools, subjects } from '../../../models/data'
import AuthService from '../../../services/AuthService'
import TournamentService from '../../../services/TournamentService'
import { useNavigate } from 'react-router-dom'

const languages = [
  {
    id: 1,
    name: 'Қазақ',
  },
  {
    id: 0,
    name: 'Русский',
  },
]

const englishProficiencyInKazakh = [
  {
    id: 1,
    name: 'иә',
  },
  {
    id: 0,
    name: 'жоқ',
  },
]

const englishProficiencyInRussian = [
  {
    id: 1,
    name: 'да',
  },
  {
    id: 0,
    name: 'нет',
  },
]

const RegisterDoctor = () => {
  const navigate = useNavigate()
  const [userProfile, setUserProfile] = React.useState<any>([])
  React.useEffect(() => {
    const user = AuthService.getCurrentUser()
    user.then((res) => setUserProfile(res))
  }, [])
  console.log(userProfile)
  const [value, setValue] = React.useState<Dayjs>(dayjs(''))
  const [all, setAll] = React.useState({
    group: '',
    subject: '',
    category: '',
    isKazakhProficient: '',
    englishProficiency: '',
    pedagogicalExperienceCurrent: '',
    pedagogicalExperience: '',
  })
  console.log(all)

  const scrollTo = (name: string) => {}
  const send = () => {
    TournamentService.updateProfile(
      userProfile.firstName,
      userProfile.lastName,
      userProfile.middleName,
      value,
      all.group,
      all.subject,
      Number(all.category),
      Boolean(all.isKazakhProficient),
      Boolean(all.englishProficiency),
      Number(all.pedagogicalExperienceCurrent),
      Number(all.pedagogicalExperience),
    )
      .then((res: any) =>
        setAll({
          group: '',
          subject: '',
          category: '',
          isKazakhProficient: '',
          englishProficiency: '',
          pedagogicalExperienceCurrent: '',
          pedagogicalExperience: '',
        }),
      )
      .finally(() => navigate('/profile'))
  }

  return (
    <div className={classes.main}>
      <HeaderComponent scrollTo={scrollTo} />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <div>
          <UploadButtons userProfile={userProfile} />
          <DatePickerValue value={value} setValue={setValue} />
          <TextField
            id="outlined"
            label="Біліктілік санаты"
            value={all.category}
            onChange={(e) => setAll({ ...all, category: e.target.value })}
          />
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel>School</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={all.group}
              label="School"
              onChange={(e) => setAll({ ...all, group: e.target.value })}
            >
              {schools.map((item) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-label">subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={all.subject}
              label="Subject"
              onChange={(e) => setAll({ ...all, subject: e.target.value })}
            >
              {subjects.map((item) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required"
            label="Осы мектептегі жұмыс өтілі"
            value={all.pedagogicalExperienceCurrent}
            onChange={(e) =>
              setAll({ ...all, pedagogicalExperienceCurrent: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Жалпы педагогикалық еңбек өтілі"
            value={all.pedagogicalExperience}
            onChange={(e) =>
              setAll({ ...all, pedagogicalExperience: e.target.value })
            }
          />
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-label">Оқыту тілі</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={all.isKazakhProficient}
              label="Subject"
              onChange={(e) =>
                setAll({ ...all, isKazakhProficient: e.target.value })
              }
            >
              {languages.map((item) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-label">
              Ағылшын тілін білуі
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={all.englishProficiency}
              label="Subject"
              onChange={(e) =>
                setAll({ ...all, englishProficiency: e.target.value })
              }
            >
              {englishProficiencyInKazakh.map((item) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            style={{
              margin: '15px',
            }}
            onClick={send}
          >
            Register
          </Button>
        </div>
      </Box>
    </div>
  )
}
export default RegisterDoctor
