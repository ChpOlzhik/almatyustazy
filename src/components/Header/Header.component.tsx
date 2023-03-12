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

const pages = ['Спикерлер', 'Байқау кезеңдері', 'Жүлделер', 'Қатысушы болу']

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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Link to="/" className="nav-link">
                <img
                  src="https://astanait.edu.kz/wp-content/uploads/2020/05/aitu-logo-3.png"
                  alt="almaty"
                  height="60"
                  width="120"
                />
              </Link>
            </div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ color: 'black' }}
                className="pages"
              >
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
                  <b>Спикерлер</b>
                </button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ color: 'black' }}
                className="pages"
              >
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
                  <b>Байқау кезеңдері</b>
                </button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ color: 'black' }}
                className="pages"
              >
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
                  <b>Жүлделер</b>
                </button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ color: 'black' }}
                className="pages"
              >
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
                  <b>Қатысушы болу</b>
                </button>
              </MenuItem>
            </Menu>
          </Box>

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
                <b>Спикерлер</b>
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
                <b>Байқау кезеңдері</b>
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
                <b>Жүлделер</b>
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
                <b>Қатысушы болу</b>
              </button>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="bet">
            <ButtonComponent
              word="Кіру"
              onClick={() => {
                window.location.href = '/login'
              }}
            />
            {localStorage.getItem('user') && (
              <ButtonComponent
                word="Жеке кабинет"
                onClick={() => {
                  window.location.href = '/profile'
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
