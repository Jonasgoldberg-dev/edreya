import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const homeData = {
  firstName: "Jonas",
  lastName: "Goldberg",
  skills: ["Webudvikler", "Online Strateg", "Konsulent"],
};

const Home = ({ activeWithBtn }) => {
  const navContext = useContext(context);
  const { changeNav } = navContext;

  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home">
          <h3 className="name">
            {homeData.firstName}{" "}
            <span className="coloring">{homeData.lastName}</span>
          </h3>
          <h3 className="job">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button transition_link">
            <a href="#contact" onClick={() => changeNav("contact")}>
              Kontakt mig
            </a>
            <div>
              <br></br> 
                <h4>Speciale I B2B & B2C Salg</h4> 
                  <br></br>
                    <p style={{
                    color:"lightgrey",
                    }}> 
                      Som konsulent og webudvikler er jeg dedikeret til at hjælpe virksomheder med at vokse og trives. Med en bred vifte af redskaber og ekspertiser til rådighed, er jeg sikker på at jeg kan hjælpe de fleste firmaer til yderligere vækst. <br></br><br></br>
                      Fra marketing & branding til webudvikling og strategi - jeg tilbyder en komplet pakke af services designet til at vækste din forretning. Om du er på udkig efter en helt ny hjemmeside, forbedre din eksisterende online tilstedeværelse, eller udvikling af målrettede marketing strategier - jeg har evner og erfaring til at hjælpe. <br></br><br></br>
                      Alle virksomheder er forskellige, og derfor tager jeg altid god tid til at forstå netop dit firma, dine ønsker, mål og udfordringer. Med en grundig dialog og indblik, har jeg mulighed for at udarbejde løsninger som er skræddersyet til dine specifikke behov.
                      <br></br><br></br>
                      Med et sundt og professionelt samarbejde, kan vi tage dit firma til et nyt niveau. 
                      Hvis det lyder interessant, så tøv ikke med at tage fat i mig. Vi kan have en helt uforpligtende snak, og se om vi er et godt match.
                      
                    </p>
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
    <span style={{ marginRight: '10px' }}>hello@jonasgoldberg.dk</span>
    <b>Tlf.:</b>+45 53354858
  </p>
</div>

      
    </div>

    
  );
};
export default Home;
