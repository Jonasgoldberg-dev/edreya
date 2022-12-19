import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Jonas",
  lastName: "Goldberg",
  bithday: "01.12.1992",
  address: "København",
  phn: "++45 5335 4858",
  email: "hello@jonasgoldberg.dk",
  serviceLists: [
    "Webudvikling",
    "Digital Markedsføring",
    "Branding",
    "Automatisering",
    "Digital Infrastruktur",
    "Konsulent & Rådgiver",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "95" },
      { name: "JavaScript", value: "80" },
      { name: "React", value: "90" },
      { name: "Vue", value: "70" },
      { name: "Python", value: "70" },
      { name: "TypeScript", value: "90" },
      { name: "Bootstrap", value: "80" },
      { name: "Tailwind CSS", value: "70" },
      { name: "Machine Learning", value: "70" },
      { name: "Shopify", value: "90" },
    ],
    language: [
      { name: "Engelsk", value: "100" },
      { name: "Dansk", value: "100" },
    ],
  },

  working: [
    {
      year: "2016 - nu",
      company: "Skinbjerg Design",
      deg: "Founder & Owner",
    },
    { year: "2018 - nu", company: "Kurvemageren", deg: "Owner" },
    { year: "2019 - nu", company: "J. Goldberg Consult", deg: "Owner" },
    { year: "2014 - 2016", company: "ItAfrica", deg: "Owner" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="public/img/about/1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  Hej! Jeg hedder <span>Jonas Goldberg.</span> Jeg er webudvikler & konsulent med speciale i B2B & B2C online salg.<br></br><br></br>
                  Den konstante søgen efter nye udfordringer har i mange år drevet mit liv som iværksætter. Og nu som selvstændig konsulent og webudvikler, bliver jeg bombarderet med udfordringer og problemer som skal løses. Det er det absolut bedste ved at arbejde i dette felt!
                  <br></br><br></br>
                  Da jeg startede som iværksætter havde jeg ingen idé om, hvad jeg ville blive kastet ud i, og det var bare om at lære on-the-fly. Det har lært mig ting, som ingen uddannelse nogensinde kan. 
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Læs mere
                </a>
              </div>
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
    <b>E-mail:</b>{' '}
    <span style={{ marginRight: '10px' }}>hello@jonasgoldberg</span>
    <b>Tlf.:</b>+45 53354858
  </p>
</div>
      </div>
    </Fragment>
  );
};
export default About;
