import React from "react";
//import OwlCarousel from "react-owl-carousel";//future addition with 4 testimonials active
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import Hannah from "../../../src/img/testimonial/Hannah.jpeg";
import shape from "../../../src/img/testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  /* For Future Testimonials, Implements
  Animation and Side Scrolling of Testimonials */
  // const options = {
  //   loop: true,
  //   margin: 0,
  //   nav: true,
  //   animateIn: "bounceInRight",
  //   animateOut: "bounceOutRight",
  //   dots: true,
  //   autoplay: true,
  //   smartSpeed: 1000,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };
  /* For Future Testimonials, Implements
  Animation and Side Scrolling of Testimonials */
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Clients Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {/* For Future Testimonials, Implements
            Animation and Side Scrolling of Testimonials */}
            {/* <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            > */}
            {/* For Future Testimonials, Implements
            Animation and Side Scrolling of Testimonials */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Michael is a very fun and hard working person. He is a
                      self-starter and as I mentored him in full stack web
                      development, I was impressed by the amount of material he
                      learned on his own and his nearly photographic memory. I
                      would absolutely recommend Michael to be on your team!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Hannah} alt="no internet connection"></img>
                    <h5> Hannah Drury</h5>
                    <p>Full Stack Agile Web Developer at IHS Markit</p>
                  </div>
                </div>
              </div>
            {/* For Future Testimonials, Implements
            Animation and Side Scrolling of Testimonials */}
              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Setting up for future Testimonials
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Image Import Reference} alt="no internet connection"></img>
                    <h5> Tetimonial Name</h5>
                    <p>Clients Current Position In The Industry</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                     setting up for future testimonials
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={Image Import Reference}
                      alt="no 
                  internet connection"
                    ></img>
                    <h5> Testimonial Name</h5>
                    <p>Clients Current Position In The Industry</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Michael and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Image Import Reference} alt="no internet connection"></img>
                    <h5> Testimonial Name</h5>
                    <p>Clients Current Position In The Industry</p>
                  </div>
                </div>
              </div> */}
            {/* </OwlCarousel> */}
            {/* For Future Testimonials, Implements
            Animation and Side Scrolling of Testimonials */}
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
