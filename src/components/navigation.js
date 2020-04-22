import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Link</div>
            <ul className='nav-links'>
              <li>
                <a href="https://github.com/melvinDebot" target="blank">Github</a>
              </li>
              <li>
                <a href="https://www.behance.net/melvindeboa7b2?tracking_source=search%7Cpeugeot%20cycle" target="blank">Behance</a>
              </li>
              <li>

                  <a href="https://www.linkedin.com/in/melvin-debot-b22078173/" target="blank">Linkeind</a>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    melvin.debot@hetic.net
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/audit' exact>
                    Free-Lancer
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarter</li>
                <li>73 A rue jean jaures</li>
                <li>77270 Villeparisis</li>
                <li>French</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>07 62 88 60 22</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
