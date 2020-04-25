import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Peugeot Cycle",
    title: "La mobilité à taille réduite en ville",
    img: "peugeot-min",
    link: "https://carbone-06.netlify.com/ "
  },
  {
    id: 2,
    subtitle: "Toto",
    title: "Les toilettes de luxes à petits prix",
    img: "toto-min",
    link:"https://toto-fr.netlify.com"
  },
  {
    id: 3,
    subtitle: "Lost in chatelet",
    title: "Le labyrinthe à toute épreuve",
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
