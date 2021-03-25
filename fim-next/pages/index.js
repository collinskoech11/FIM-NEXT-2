import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavPage from '../components/NavPage'
import CarouselPage from '../components/CarouselPage'
import FooterPage from '../components/FooterPage'
import LiveLink from '../components/LiveLink'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam, aliquid mollitia blanditiis laborum ratione fuga rerum natus consequuntur reprehenderit quasi nihil voluptatum, a sed ut aliquam commodi ipsa modi.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam, aliquid mollitia blanditiis laborum ratione fuga rerum natus consequuntur reprehenderit quasi nihil voluptatum, a sed ut aliquam commodi ipsa modi.
          </div>
      </div>
      <FooterPage/>
    </>
  )
}
