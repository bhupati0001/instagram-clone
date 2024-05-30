import React from 'react'

import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-direct-links">
                <ul>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Help</li>
                    <li>API</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Locations</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>Contact Uploading & Non-Users</li>
                    <li>Meta Verified</li>
                </ul>
            </div>
            <div className="footer-bottom">
                <select name="language" id="">
                    <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="odia">Odia</option>
                    <option value="chinese">Chinese</option>
                    <option value="bengali">Bengali</option>
                </select>
                <div className="copyright">
                    <p>&copy; 2024 Instagram from Meta</p>
                </div>
            </div>
        </div>
    )
}

export default Footer