import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavPage from '../components/NavPage'
import CarouselPage from '../components/CarouselPage'
import FooterPage from '../components/FooterPage'
import LiveLink from '../components/LiveLink'
import Twitter from '../components/Twitter'
import Upcoming from '../components/Upcoming'

export default function Home() {
  return (
    <>
      <NavPage/>
      <div className="homeContainer">
        <div className="caousel-container">
          <CarouselPage/>
        </div>
      </div>
      <div className="section">
          <div className="img-container">
            <img src="https://source.unsplash.com/1000x500/?android"
            alt="Picture of the author"
            width={400}
            height={500}
            />
          </div>
          <div className="text-container">
            <h3>Word from our spiritual Father</h3>
            <h2>Bishop Jimmy Bett</h2>
            To make and deploy mature and equipped followers of Christ for the sake of Family, Community and Global Transformation. At Gateway, we are committed to helping every person believe in Jesus, belong to a family, become a disciple and build His kingdom.
          </div>
      </div>
      <div className="section">
        <LiveLink/>
      </div>
      <div className="section">
          <div className="img-container">
            <img src="https://source.unsplash.com/1000x200/?android"
            alt="Picture of the author"
            width={400}
            height={350}
            />
          </div>
          <div className="text-container">
            <h3>Our chairperson shares the vision of our church</h3>
            <h2>Mr Stanley Cheruiyot</h2>
            To welcome the community with open arms. To train an army of people who are passionate about living out God’s purpose for their lives. To then give that army an outlet for sharing the love of Christ through outreach and missions.
            We believe everyone needs the hope Jesus offers, so our passion is to help people find that hope and grow in a relationship with Him. We emphasize grace and acceptance, as we help people understand who Jesus is and how to take the next right step in their journey of faith
          </div>
      </div>
      <div className="section">
        <Twitter/>
      </div>
      <div className="section">
        <Upcoming/>
      </div>
      <FooterPage/>
    </>
  )
}
