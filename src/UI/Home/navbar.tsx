import React , {} from 'react'
import styles from './../../../styles/Home.module.css'
import Link from 'next/link'
import { Logo } from '../SVG'
const Navbar = () =>{
    return(
        <nav className = {styles.navbar}>
            <div className = {styles.logo}>
                <Link href="/">
                    <a>
                    <Logo Width="200" Height="50"  />
                    </a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="">Home</Link>
                <Link href="">DeskTop App</Link>
                <Link href="">Android App</Link>
                <Link href="">About</Link>
            </nav>

            <div className={styles.login}>
                <Link href="/">Login / SignUp</Link>
            </div>
        </nav>
    )
}


export default Navbar