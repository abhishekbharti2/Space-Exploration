import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>   
      <footer className='web-footer'>
        <div className='footer-div-1'>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>VERSE-EX</h4> <br />
            <p className='footer-paragraph'>High impact blog posts and Informations <br />
              Virtually connect with Universe in our events <br />
              Join a helpful community of Verse-EX</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>ABOUT</h4> <br />
            <p className='footer-paragraph'>Verse-EX is a learning platform
              Here you can learn Cosmology & research
              We provide latest information about sapce
              Also we update information with time
              All informations are collected from NASA</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>DEVELOPER TEAM</h4> <br />
            <p className='fa'>&#xf0e0; verse@ex.in</p>
            <li><a href="https://bhartiabhi.netlify.app" className='contact-dev'>contact developers</a></li>
          </div>
        </div>
        <span className='scl-head'>Our Social Media Handles </span>
        <div className="socialmedia-handles">
          <a href="https://www.facebook.com/profile.php?id=100027548940668" className="fa fa-facebook"> </a>
          <a href="https://x.com/AD_Jack9?t=9DGN-8JDwo4rVMXtPKXpUA&s=08" className="fa fa-twitter"> </a>
          <a href="https://www.instagram.com/ejoyr.fashion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="fa fa-instagram"> </a>
          <a href="https://youtube.com" className="fa fa-youtube"> </a>
        </div>
        <p className='copyright-p'>&copy; www.verse-ex.in || All Right Reserved</p><br />
      </footer>
    </> 
  );
}