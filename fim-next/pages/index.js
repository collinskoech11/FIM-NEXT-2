import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavPage from '../components/NavPage'
import CarouselPage from '../components/CarouselPage'
import FooterPage from '../components/FooterPage'

export default function Home() {
  return (
    <>
      <NavPage/>
      <div className="homeContainer">
        <div className="caousel-container">
          <CarouselPage/>
        </div>
      </div>
      <FooterPage/>
    </>
  )
}
