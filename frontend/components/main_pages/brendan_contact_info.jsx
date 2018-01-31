import React from 'react';

const BrendanContactInfo = () => {
  return (
    <div className="contact-brendan">
      <h3 className="brendan-header">Contact Brendan</h3>
      <ul className="contact-options">
        <li className="contact-item">
          <a href="http://www.brenhiggins.com"
          target="_blank">
            <i className="fa fa-laptop" aria-hidden="true"></i>
            <span>brenhiggins.com</span>
          </a>
        </li>
        <li className="contact-item">
          <a href="mailto:bhiggins033@gmail.com"
          target="_blank">
            <i className="fa fa-send-o" aria-hidden="true"></i>
            <span>bhiggins033@gmail.com</span>
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/bah87"
          target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
            <span>/bah87</span>
          </a>
        </li>
        <li className="contact-item">
          <a target="_blank"
          href="https://www.linkedin.com/in/bhiggins3/">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <span>/in/bhiggins3</span>
          </a>
        </li>
        <li className="contact-item">
          <a href="https://angel.co/brendan-higgins-1?public_profile=1"
          target="_blank">
            <i className="fa fa-angellist" aria-hidden="true"></i>
            <span>/bhiggins3</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BrendanContactInfo;
