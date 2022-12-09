import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "Webudvikling",
    img: "img/news/web-programming.png",
    tag: "Læs mere" ,    
    des: [
      "Jeg tilbyder et komplet udvalg af webudviklingstjenester, fra tilpassede webdesigns til udvikling af komplekse applikationer.",
      "Jeg sætter en ære i at levere højkvalitets og brugervenlige hjemmesider, der ikke kun ser flotte ud, men også præsterer godt og opfylder dine mål. Mit mål er at give dig en hjemmeside, som er nem at navigere i, visuelt tiltalende og optimeret til købsflow og søgemaskiner.",
      "Udover webudviklingtjenester, tilbyder jeg også løbende support og vedligeholdelse for at sikre, at din hjemmeside forbliver opdateret og fungerer problemfrit.",
      "Hvis du synes det lyder interessant, kan vi tage en helt uforpligtende snak om, hvad der kan lade sig gøre for dig, så vi måske kan få startet et langvarigt samarbejde",
      "Du kan altid fange mig enten på tlf. eller e-mail",
    ],
  },
  
  {
    title: "Marketing",
    img: "img/news/campaign.png",
    tag: "Læs mere",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "BrandingI",
    img: "img/news/contacs.png",
    tag: "Læs mere",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Automatisering",
    img: "img/news/settings.png",
    tag: "Læs mere",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Digital Infrastruktur",
    img: "img/news/bridge.png",
    tag: "Læs mere",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Konsulent & Rådgivning",
    img: "img/news/consultant.png",
    tag: "Læs mere",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Services jeg <span className="coloring">Tilbyder</span>
              
              </h3>
              <p>
                Jeg tilbyder en lang række services, som kan kombineres eller ydes hver for sig, men alle med samme formål: vækst. 

Vil du have tilpasset dine marketing kanaler, optimeret din hjemmeside eller ønsker du hjælp til automatisering af den daglige drift? 

Tøv ikke med at tage fat i mig, enhver indledende snak er 100% uforpligtende!
                </p>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
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
            <div>
              <h3 style={{paddingtop: "40px"}}>
              Fra idé til resultat
              </h3>
                <p>
                 Det er meget vigtigt for mig, at mit arbejde er til stor gavn for dig, og at din investering bærer frugt, så vi kan have en langvarigt og sundt samarbejde.
                 Hvis du har en udfordring, idé eller noget helt andet, som du har brug for hjælp til, så tøv ikke med at tage fat i mig. 
                Vi kan tage en snak om det, og i fællesskab snakke om en potentiel løsning.
                </p>
            </div>
        
    
          </div>
        </div>
        
      </div>
      
    </Fragment>
  );
};
export default News;
