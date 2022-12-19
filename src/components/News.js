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
      "Mine marketing tiltag er altid målrettet og tilpasset dine behov. Jeg tilbyder en bred vifte af marketingtjenester, der kan hjælpe dig med at nå dine mål.",
      "Jeg har mange års erfaring med markedsføring i en bred vifte af brancher. Vi kommer til at arbejde tæt sammen for at få sat de rette kanaler op, så de kan opfylde dine behov. Om det er brand awareness, øget trafik/salg eller noget helt 3., er jeg klar på at hjælpe.",
      "Udover marketingtjenester, tilbyder jeg også løbende support og vedligeholdelse for at sikre, at din markedsføring forbliver opdateret og fungerer problemfrit.",
      "Hvis du synes det lyder interessant, kan vi tage en helt uforpligtende snak om, hvad der kan lade sig gøre for dig, så vi måske kan få startet et langvarigt samarbejde",
      "Du kan altid fange mig enten på tlf. eller e-mail",
    ],
  },
  {
    title: "Automatisering",
    img: "img/news/settings.png",
    tag: "Læs mere",
    des: [
      "Automatisering har for mig være altafgørende for min succes som iværksætter. Automatisering betyder mange ting - men kan nemt opsummeres. Det handler om løsninger, som skal frigive tid i hverdagen. Digitale løsninger, som eliminerer en del af de manuelle opgaver, som typisk fylder meget.",
      "Jeg har meget erfaring med implementering af løsninger, som hjælpe med dette. Der er næsten altid en løsning, hvis det omhandler opgaver som bliver gjort online manuelt.",
      "Her er det vigtigt at jeg får et godt inblik i, hvordan dine specifikke systemer er sat op, så jeg kan udtænke smarte løsninger og implementere dem. Sammen kan vi gøre din hverdag mere effektiv",
      "Hvis du synes det lyder interessant, kan vi tage en helt uforpligtende snak om, hvad der kan lade sig gøre for dig, så vi måske kan få startet et langvarigt samarbejde",
      "Du kan altid fange mig enten på tlf. eller e-mail",
    ],
  },

  {
    title: "Branding",
    img: "img/news/contacs.png",
    tag: "Læs mere",
    des: [
      "Branding kan være altafgørende for langvarig succes, og det er derfor vigtigt at komme rigtigt i gang med det. Her laver jeg typisk en analyse af din profil, og kommer med idéer til, hvilke tiltag vil hjælpe. Det kan være en bred vifte af tiltag.",
      "Jeg har mange års erfaring med branding, og har hjulpet mange virksomheder med at få deres brand til at fungere optimalt. Vi kommer til at arbejde tæt sammen for at få sat de rette tiltag op, så de kan opfylde dine behov.",
      "Hvis du synes det lyder interessant, kan vi tage en helt uforpligtende snak om, hvad der kan lade sig gøre for dig, så vi måske kan få startet et langvarigt samarbejde",
      "Du kan altid fange mig enten på tlf. eller e-mail",
    ],
  },

  {
    title: "Digital Infrastruktur",
    img: "img/news/bridge.png",
    tag: "Læs mere",
    des: [
      "Digital infrastruktur spænder over en bred vifte af tiltag. Det kan være alt fra regnskab, lager, CRM, salg, marketing, support, hosting, domæner, e-mail, etc.",
      "Her vil jeg typisk tage et grundigt kig ind i din nuværende infrastruktur og se, om noget kan gøres bedre og mere effektivt.",
      "Sparring mellem dig og mig er vigtigt her, så vi sammen kan finde frem til de bedste løsninger for dig.",
      "Hvis du synes det lyder interessant, kan vi tage en helt uforpligtende snak om, hvad der kan lade sig gøre for dig, så vi måske kan få startet et langvarigt samarbejde",
      "Du kan altid fange mig enten på tlf. eller e-mail",
    ],
  },
  {
    title: "Konsulent & Rådgivning",
    img: "img/news/consultant.png",
    tag: "Læs mere",
    des: [
      "Har du et ønske om at få professionel sparring og rådgivning, så er jeg mere end klar til at træde til. Lad os sammen lægge en plan for hvordan du fremadrettet kan vækste og styrke din virksomhed.",
      "Her er det vigtigt med en åben dialog om dine udfordringer og ønsker, så jeg kan komme med mine bud på de rette løsninger. ",
      "Med udgangspunkt i alle de informationer jeg får, udarbejder jeg en grund rapport med idéer til tiltag, og tilbyder naturligvis også at eksekvere dem sammen med dig, skulle det være ønsket.",
      "Hvis du synes det lyder interessant, kan vi tage en helt uforpligtende snak om, hvad der kan lade sig gøre for dig, så vi måske kan få startet et langvarigt samarbejde",
      "Du kan altid fange mig enten på tlf. eller e-mail",
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
