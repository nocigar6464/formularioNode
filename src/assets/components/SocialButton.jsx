import React from "react";

const SocialButton = ({ icon1, icon2, icon3 }) => {
  return (
    <section>
      <a href="https://www.facebook.com/" target="_blank">
        <img src={icon1} className="logo" alt="logo red social" />
      </a>
      <a href="https://www.github.com/" target="_blank">
        <img src={icon2} className="logo" alt="logo red social" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src={icon3} className="logo" alt="logo red social" />
      </a>
    </section>
  );
};

export default SocialButton;
