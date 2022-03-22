import React from 'react'
import Styles from './header.module.css'

const Header = () => {
    return (
        <div className={Styles.base}>
            <span className = {Styles.logo}> WEB<span className = {Styles.logo2}>3</span>STAKING</span>
            <div className=''>
                <button className={Styles.connect_wallet}>Connect Wallet</button>
            </div>
        </div>
    )
}
export default Header