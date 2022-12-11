import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Skriv til <span className="coloring">Mig</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        Svansmosen 4, 3200 Helsinge
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">+45 5335 4858</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href="mailto:hello@jonasgoldberg.dk">hello@jonasgoldberg.dk</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-github-2" />
                    <span>
                      <a href="https://github.com/Jonasgoldberg-dev" target="_blank" rel="noreferrer">Github</a>
                    </span>
                  </div>
                  
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-linkedin-1" />
                    <span>
                      <a href="https://www.linkedin.com/in/jonas-goldberg-4a7577103/" target="blank" rel="noreferrer">LinkedIn</a>
                    </span>
                  </div>
                  
                </li>
              </ul>
            </div>
            <div>
            <h4> Jeg ser frem til at høre fra dig</h4>
            <p style = {{
              paddingTop:"10px"
            }}>
              Lad os tage en åben dialog om, hvordan vi kan<br></br> løse de udfordringer og muligheder du står overfor. <br></br> 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
