import './App.css';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Subtitle from './components/Subtitle/Subtitle';
import Slider from './components/Slider/Slider';
import SocialNetworks from './components/SocialNetworks/SocialNetworks';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

import Slide1 from "../src/assets/images/slider1.png";
import Slide2 from "../src/assets/images/slider2.png";
import Slide3 from "../src/assets/images/slider3.png";
import Slide4 from "../src/assets/images/slider4.png";

import MainImg from "../src/assets/images/generation.png";
import Line from "../src/assets/images/line.png";
import Customize from "../src/assets/images/customize.png";
import Poster1 from "../src/assets/images/articles-0.png";
import Poster2 from "../src/assets/images/articles-1.png";
import Poster3 from "../src/assets/images/articles-2.png";
import Poster4 from "../src/assets/images/articles-3.png";
import Poster5 from "../src/assets/images/articles-4.png";
 
function App() {
  const slides = [
    {
      src:Slide1,
      id: 1
    },
    {
      src:Slide2,
      id: 2
    }, 
    {
      src:Slide3,
      id: 3
    }, 
    {
      src:Slide4,
      id: 4
    }, 
  ]

  return (
    <>
      <Header/>
      <main className="main-wrapper">
        <section className="section generation background">
          <SocialNetworks/>
          <div className="container generation__content">
            <Subtitle/>
            <h1 className="title generation__title">
              Unleash The <br></br>
              Next <span className="generation__accent">Generation <img src={Line} alt="accent"></img></span><br></br>
              Of Gaming
            </h1>
            <picture className="generation__img">
              <img src={MainImg} alt="soldier"></img>
            </picture>
            <p className="generation__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, <br></br>
              nec donec in morbi pulvinar. Enim non pulvinar neque.
            </p>
            <Button text="Explore More"/>
            <a className="generation__link" href="#Team">View our team</a>
          </div>
        </section>
        <section className="customize section">
          <div className="container customize__content">
            <div className="customize__wrapper">
              <Subtitle/>
              <h2 className="customize__title title">
                Customize your <br></br>
                <span className="customize__title_small">Own Character</span>
              </h2>
              <p className="customize__text">
                Sed ut perspiciatis unde omnis iste natus error sit <br></br>
                voluptatem accusantium doloremque laudantium,  <br></br>
                totam rem aperiam, eaque ipsa quae ab illo  <br></br>
                inventore veritatis et quasi architecto beatae.
              </p>
              <Slider slides={slides}/>
            </div>
            <picture className="customize__img">
              <img src={Customize} alt="soldier"></img>
            </picture>
          </div>
        </section>
        <section className="section news">
          <div className="container news__content">
            <Subtitle/>
            <div className="news__title-wrapper">
              <h2 className="news__title title">
                Latest News & <br></br>
                Articles
              </h2>
              <Button text="Read more" className="news__button"/>
              </div>
              <table className="news__table">
                <tbody>
                  <tr className="news__cells-wrapper">
                    <td className="news__main-article">
                      <Card className="news__main-card" poster={Poster1} date={"April 2, 2021"} title={"Esports Group teams up with the Indianapolis Colts"}/>
                    </td>
                    <td className="news__articles">
                      <Card poster={Poster5} date={"April 2, 2021"} title={"NAVI reveals s1mple fifth anniversary"}/>
                      <Card poster={Poster4} date={"April 2, 2021"} title={"A1esports Shares new picture"}/>
                      <Card poster={Poster3} date={"April 2, 2021"} title={"T1 unveil partnership with Razer"}/>
                      <Card poster={Poster2} date={"April 2, 2021"} title={"RX secures content partnership with"}/>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
