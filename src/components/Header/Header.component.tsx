import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import ButtonComponent from '../Button/Button.component'
import { Link as NLink } from 'react-scroll'
import TabsComponent from '../Tabs/Tabs.component'
import { useTranslation } from 'react-i18next'

type Props = {
  scrollTo: (name: string) => void
}
function HeaderComponent({ scrollTo }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleClick = (name: string) => {
    scrollTo(name)
  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const { t, i18n } = useTranslation()

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: 'white',
        padding: '12px 100px',
        height: '90px',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" className="nav-link">
              <img
                src="https://almatyustazy.kz/img_almaty_ustaz/logo.svg"
                alt="almaty"
                height="60"
                width="120"
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className="pages" style={{ color: 'black' }}>
              <button
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  outline: 'none',
                }}
                onClick={() => {
                  handleClick('Спикерлер')
                }}
              >
                <b>{t('speakers')}</b>
              </button>
            </div>
            <div className="pages" style={{ color: 'black' }}>
              <button
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  outline: 'none',
                }}
                onClick={() => {
                  handleClick('Байқау кезеңдері')
                }}
              >
                <b>{t('stages')}</b>
              </button>
            </div>
            <div className="pages" style={{ color: 'black' }}>
              <button
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  outline: 'none',
                }}
                onClick={() => {
                  handleClick('Жүлделер')
                }}
              >
                <b>{t('prize')}</b>
              </button>
            </div>
            <div className="pages" style={{ color: 'black' }}>
              <button
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  outline: 'none',
                }}
                onClick={() => {
                  handleClick('Қатысушы болу')
                }}
              >
                <b>{t('participate')}</b>
              </button>
            </div>
          </Box>
          <Box sx={{ flexGrow: 2 }} className="bet">
            {localStorage.getItem('user') && (
              <ButtonComponent
                word={t('personal')}
                onClick={() => {
                  window.location.href = '/profile'
                }}
              />
            )}
            {!localStorage.getItem('user') ? (
              <ButtonComponent
                word={t('login')}
                onClick={() => {
                  window.location.href = '/login'
                }}
              />
            ) : (
              <ButtonComponent
                word={t('logout')}
                onClick={() => {
                  localStorage.removeItem('user')
                  window.location.href = '/'
                }}
              />
            )}

            <TabsComponent />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default HeaderComponent
function setAnchorElUser(currentTarget: EventTarget & HTMLElement) {
  throw new Error('Function not implemented.')
}
