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
                    <p> 
                      Mit formål er at levere de løsninger, du har brug for, og tilbyde ekspertrådgivning til en overkommelig pris. 
                      Jeg bygger og optimerer hjemmesider for at sikre, at du får det, du ønsker, og at du er et skridt foran dine konkurrenter. <br></br><br></br>
                      Det kan du gøre med hurtige, responsive og visuelt tiltalende hjemmesider, der hjælper dine kunder med at bevæge sig smidigt gennem købs- eller kontaktprocessen. Sammen finder vi frem til en løsning, der passer perfekt til dig.
                      Du fortæller mig, hvad du vil have, og jeg kommer med mine ideer. Du kan altid kontakte mig enten på tlf. eller e-mail.
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
