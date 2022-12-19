import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Udvalgt <span className="coloring">Arbejde</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/portfolio/skinbjerg.jpg" alt="Skinbjerg Design" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/skinbjerg.jpg"
                        />
                      </div>
                      <div className="details">
                        <a href="https://www.skinbjergdesign.dk" target="_blank" rel="noreferrer">
                        <h3>B2B Webshop</h3>
                        <span>Skinbjerg Design</span>
                        </a>
                      </div>
                    
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/portfolio/kurvemageren.jpg" alt="Kurvemageren" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/kurvemageren.jpg"
                        />
                      </div>
                      <div className="details">
                      <a href="https://www.kurvemageren.dk" target="_blank" rel="noreferrer">
                        <h3>B2C Webshop</h3>
                        <span>Kurvemageren</span>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/portfolio/kurvemagerne.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/kurvemagerne.jpg"
                        />
                      </div>
                      <div className="details">
                      <a href="https://www.kurvemagerne.dk" target="_blank" rel="noreferrer"> 
                        <h3>Promoverende Site</h3>
                        <span>Kurvemagerne</span>
                        </a>
                      </div>
                      
                    </div>
                  </SwiperSlide>
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="global_text" style={{ textAlign: 'center' }}>
  <p style={{
    backgroundColor: 'rgba(243, 153, 119)',
    borderRadius: '10px',
    padding: '5px',
    color: 'black',
    marginTop: "20px",
  }}>
    <b>E-mail:</b> <a href="mailto:hello@jonasgoldberg">hello@jonasgoldberg.dk</a>
    <br />
    <b>Tlf.:</b> <a href="tel:+45 53354858"  >+45 53354858</a>
  </p>
</div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
