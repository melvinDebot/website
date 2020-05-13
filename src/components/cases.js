import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "LSC",
    title: "The association of the second chance to help the person",
    img: "logo-lsc",
    link: "https://www.association-lsc.com "
  },
  {
    id: 2,
    subtitle: "Old Portfolio",
    title: "My first portfolio ",
    img: "logo-portfolio",
    link:"https://melvin-debot.netlify.app/"
  },
  {
    id: 3,
    subtitle: "Lost in chatelet",
    title: "The crazy labyrinth",
    img: "chatelet-min",
    link: "https://thirsty-murdock-50044a.netlify.com/"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        {/* <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div> */}
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <a href={caseItem.link} target="blank">
                <div className='case-details'>
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className='case-image'>
                  <img
                    src={require(`../assets/${caseItem.img}.png`)}
                    alt={caseItem.title}
                  />
                </div>
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
