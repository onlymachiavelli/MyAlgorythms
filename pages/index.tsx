import React from "react"
import styles from './../styles/Home.module.css'
import Navbar from "../src/UI/Home/navbar"
import Head from 'next/head'
import Image from 'next/image'
import Main from "../src/UI/Home/slide"
const Home = () => {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
      <Main/>
    </main>
  )
}

export default Home
