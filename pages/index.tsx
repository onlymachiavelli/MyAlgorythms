import React from "react"
import styles from './../styles/Home.module.css'
import Navbar from "../src/UI/Home/navbar"
import Head from 'next/head'
const Home = () => {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
    </main>
  )
}

export default Home
