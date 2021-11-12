import React , {} from 'react'
import styles from './../../../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () =>{
    return(
        <nav className = {styles.navbar}>
            <div className = {styles.logo}></div>
            <nav className={styles.nav}>

            </nav>
        </nav>
    )
}


export default Navbar