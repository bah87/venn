import React from 'react';

const BrendanContactInfo = () => {
  return (
    <div>
      <h3 className="brendan-header">Get in Touch with Brendan</h3>
      <ul className="contact-options">
        <li>
          <a href="https://www.brenhiggins.com"
          target="_blank">
            <i className="fa fa-laptop" aria-hidden="true"></i>
            <span className="label">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="mailto:bhiggins033@gmail.com"
          target="_blank">
            <i className="fa fa-send-o" aria-hidden="true"></i>
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/bah87"
          target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a target="_blank"
          href="https://www.linkedin.com/in/bhiggins3/">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://angel.co/brendan-higgins-1?public_profile=1"
          target="_blank">
            <i className="fa fa-angellist" aria-hidden="true"></i>
            <span className="label">AngelList</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BrendanContactInfo;
