import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg from "../assets/img/home1.png";
import wall from "../assets/img/home2.png";
import pizza from "../assets/img/home-pizza.jpg";
import rice from "../assets/img/home-rice.jpg";
import salad from "../assets/img/home-salad.jpg";
import pasta from "../assets/img/home-pasta.jpg";
import burger from "../assets/img/home4.png";
import coffe from "../assets/img/home3.png";
import flower from "../assets/img/home5.png";
import Slider from 'react-slick';
import simg1 from "../assets/img/home3.jpg";
import simg2 from "../assets/img/home5.jpg";
import simg3 from "../assets/img/home4.jpg";
import simg4 from "../assets/img/home1.jpg"; 
import bgImg from "../assets/img/home-res.jpg";
import chefs1 from "../assets/img/chefs1.jpg";
import chefs2 from "../assets/img/chefs2.jpg";
import chefs3 from "../assets/img/chefs3.jpg";
import chefs4 from "../assets/img/chefs4.jpg";
import chefs5 from "../assets/img/chefs5.jpg";
import chefs6 from "../assets/img/chefs6.jpg";
import chefs7 from "../assets/img/chefs7.jpg";
import chefs8 from "../assets/img/chefs8.jpg";
import chefs9 from "../assets/img/chefs9.jpg";
import { Link } from "react-router-dom";


export default function Home() {

  const chefsDate = [
  {
    id: 1,
    name: "Marco Rossi",
    type: "Senior Cafe",
    img: chefs1
  },
  {
    id: 2,
    name: "Luca Bianchi",
    type: "Senior Cafe",
    img: chefs2
  },
  {
    id: 3,
    name: "Antonio Romano",
    type: "Senior Cafe",
    img: chefs3
  },
  {
    id: 4,
    name: "Giovanni Ferrari",
    type: "Junior Cafe",
    img: chefs4
  },
  {
    id: 5,
    name: "Alessandro Costa",
    type: "Junior Cafe",
    img: chefs5
  },
  {
    id: 6,
    name: "Matteo Ricci",
    type: "Junior Cafe",
    img: chefs6
  },
  {
    id: 7,
    name: "Francesco Marino",
    type: "Junior Cafe",
    img: chefs7
  },
  {
    id: 8,
    name: "Davide Greco",
    type: "Junior Cafe",
    img: chefs8
  },
  {
    id: 9,
    name: "Stefano Lombardi",
    type: "Junior Cafe",
    img: chefs9
  }
  ];
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};

  return (
    <>
    {/* ----------------------section one------------------------ */}
      <section className='hero-section' style={{
    background: `
      url(${wall}) right center no-repeat,
      linear-gradient(90deg, #eef3e3 64%, #7fbf3f 64%)
    `,
    backgroundSize: "contain, 100%"
  }}>
        <div className='container'>
            <div className='row align-items-center'>
                 {/* LEFT SIDE */}
                <div className='col-lg-6 hero-left'>
                    <p className='sub-title'>High Quality Test Station</p>

                    <h1>
                    Choosing The <br />
                    Best <span>Quality Food</span>
                    </h1>

                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className='hero-button'>
                        <Link to="/shop" className='btn-book'>book a table</Link>
                        <button className='btn-view'> view more</button>
                    </div>
                </div>
                {/* right SIDE */}
                <div className='col-lg-6 hero-right'>
                    <img src={heroImg} alt="food" className='heroimg'/>
                    
                </div>
            </div>
        </div>
       
      </section>

      {/* ----------------------section two------------------------ */}
      <section className='sec-section'>
        <img src={burger} alt='burger' className='home-burger'/>
        <img src={coffe} alt='coffe' className='home-coffe' />
        <div className='container'>
          <h1 className='sec-title'>Our Popular Food</h1>
          <div className='row'>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='food-card'>
                <img src={pizza} alt='pizza'/>
                <h4>Pizza</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <h6>$200</h6>
                <button>add to cart</button>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='food-card'>
                <img src={rice} alt='rice'/>
                <h4>Rice</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <h6>$150</h6>
                <button>add to cart</button>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='food-card'>
                <img src={salad} alt='salad'/>
                <h4>Green Salad</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <h6>$100</h6>
                <button>add to cart</button>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='food-card'>
                <img src={pasta} alt='pasta'/>
                <h4>Pasta</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <h6>$67.00</h6>
                <button>add to cart</button>
              </div>
            </div>

          </div>
        </div>
        
      </section>

      {/* ----------------------section three------------------------ */}
      <section className='third-section'>
        <img src={flower} alt='flower' className='home-flower'/>
        <div className='container'>
          <h1 className='third-title'>Today's Menu</h1>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='third-card1 '>
                <span className="top-seller">Top Seller</span>
                <div className="hover-content">
                <h4>Pasta</h4>
                <p>Terms of Service and<br/>acknowledge you've read our</p>
                <p>$12.99</p>
              </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='third-card2 '>
              <span className="top-seller">Top Seller</span>
              <div className='hover-content'>
                <h4>Shake</h4>
                <p>Terms of Service and<br/>acknowledge you've read our</p>
                <p>$24.90</p>
              </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='third-card3 '>
              <span className="top-seller">Top Seller</span>
              <div className='hover-content'>
                <h4>Dal Fry</h4>
                <p>Terms of Service and<br/>acknowledge you've read our</p>
                <p>$44.90</p>
              </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='third-card4 '>
              <span className="top-seller">Top Seller</span>
              <div className='hover-content'>
                <h4>Pizza</h4>
                <p>Terms of Service and<br/>acknowledge you've read our</p>
                <p>$44.90</p>
              </div>
              </div>
            </div>
            </div>
            <Link to="/blog" className='btn-dish'>See All Dishes</Link>
        </div>
      </section>

        {/* ----------------------section four------------------------ */}
        <section className='fourth-section'>
        <div className='container'>
          <h1 className='four-title'>From Our Menu</h1>
          <div>
          <Slider {...settings}>
            {/* CARD 1 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg1})`}}>
            <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Dal Fry</h4>
            <p>$65.00</p>
            </div>
            </div>
            </div>

            {/* CARD 2 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg2})`}}>
              <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Burger</h4>
            <p>$80.00</p>
            </div>
            </div>
            </div>

            {/* CARD 3 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg3})`}}>
              <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Pizza</h4>
            <p>$90.00</p>
            </div>
            </div>
            </div>

            {/* CARD 4 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg4})`}}>
              <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Pasta</h4>
            <p>$75.00</p>
            </div>
            </div>
            </div>

            {/* CARD 5 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg1})`}}>
            <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Dal Fry</h4>
            <p>$65.00</p>
            </div>
            </div>
            </div>

            {/* CARD 6 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg2})`}}>
              <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Burger</h4>
            <p>$80.00</p>
            </div>
            </div>
            </div>

            {/* CARD 7 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg3})`}}>
              <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Pizza</h4>
            <p>$90.00</p>
            </div>
            </div>
            </div>

            {/* CARD 8 */}
            <div className="menu-card">
            <div className="card-img" style={{backgroundImage:`url(${simg4})`}}>
              <span className="top-seller">Top Seller</span>
            <div className="card-overlay">
            <h4>Pasta</h4>
            <p>$75.00</p>
            </div>
            </div>
            </div>

          </Slider> 
          </div>
        </div>
      </section>

      {/* ----------------------section five------------------------ */}
      <section className='five-section' style={{ backgroundImage: `url(${bgImg})` }}> 
        <div className="overlay"></div>
        <div className='container reservation-content'>
          <h1 className="reservation-title">Reservation</h1>
          <form className="reservation-form">

          {/* First Row */}
          <div className="form-row">
            <div className="input-group">
              <i className="bi bi-person"></i>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-group">
              <i className="bi bi-telephone"></i>
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="input-group">
              <i className="bi bi-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
          </div>

          {/* Second Row */}
          <div className="form-row">
            <div className="input-group">
              <i className="bi bi-people"></i>
              <input type="text" placeholder="Number of People" />
            </div>

            <div className="input-group">
              <i className="bi bi-clock"></i>
              <input type="time"/>
            </div>

            <div className="input-group">
              <i className="bi bi-calendar"></i>
              <input type="date" />
            </div>
          </div>
          </form>
          <button className='btn-table'>Book a Table</button>
          
        </div>
      </section>

      {/* ----------------------section six------------------------ */}
      <section className='six-section'>
        <div className='container'>
          <h1 className="master-title">Master Cafe</h1>
          <div className='row'>
            {chefsDate.map((chefs) => (
              <div className='col-lg-4 col-md-6 mb-4' key={chefs.id}>
                <div className='chefs-card'>
                  <img src={chefs.img} alt={chefs.name} />
                  <div className='chefs-info'>
                    <div>
                    <h5>{chefs.name}</h5>
                    <p>{chefs.type}</p>
                  </div>

                  <button className="btn-chefs">
                    Book Your Private chefs
                  </button>

                  </div>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
