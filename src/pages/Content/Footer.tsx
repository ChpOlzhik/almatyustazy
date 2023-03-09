import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import Divider from '@mui/material/Divider'
const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer">
        <img src="https://almatyustazy.kz/img_almaty_ustaz/logo.svg" alt="" />
        <div>
          <b>
            <p>Байланыс деректері</p>
            <p></p>
          </b>
        </div>
        <div>
          <TelegramIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
      </div>
      <Divider light />
      <div className="divider">
        © 2022, Almaty Ustazy. Барлық құқықтар сақталған.
      </div>
    </div>
  )
}

export default Footer
