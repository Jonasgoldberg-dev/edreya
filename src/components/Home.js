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
                    color:"black",
                    }}> 
                      Som konsulent og webudvikler er jeg dedikeret til at hjælpe virksomheder med at vokse og trives. Med en bred vifte af redskaber og ekspertiser til rådighed, er jeg sikker på at jeg kan hjælpe de fleste firmaer til yderligere vækst. <br></br><br></br>
                      Fra marketing & branding til webudvikling og strategi - jeg tilbyder en komplet pakke af services designet til at vækste din forretning. Om du er på udkig efter en helt ny hjemmeside, forbedre din eksisterende online tilstedeværelse, eller udvikling af målrettede marketing strategier - jeg har evner og erfaring til at hjælpe. <br></br><br></br>
                      
                      
                    </p>
            </div>
          </div>
        </div>
        
      </div>
      
     



      
    </div>

    
  );
};
export default Home;
