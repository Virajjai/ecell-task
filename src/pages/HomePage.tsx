import React from 'react';
import '../pages/Homepage.css';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/yehaiviraj/', '_blank'); // Replace with your Instagram URL
  };

  const redirectToPortfolio = () => {
    window.open('https://virajjai.github.io/personal-portfolio/', '_blank'); // Replace with your portfolio URL
  };

  return (
    <div><Navbar />
      <div className="squid-game-container">
        {/* Main Profile Card */}
        <div className="profile-card">
          <div className="image-container">
            <img
              src="public\the-boys-billy-butcher.gif" // Replace with your picture link
              alt="Your Profile"
              className="profile-picture"
            />
          </div>
          <div className="details">
            <img
              src="public\7ba64b8de0cf18c61a2e93d713cd78f6.png" // Replace this with the link to your Squid Game font image
              alt="Your Name in Squid Game Font"
              className="name-image"
            />
            <img
              src="public\2327c7d43e5c61a516b0b0cc477dbe6f.png" // Replace this with the link to your Squid Game font registration number image
              alt="Registration Number in Squid Game Font"
              className="registration-number-image"
            />
            <div className="button-container">
              <button className="redirect-button" onClick={redirectToInstagram}>
                Visit Instagram
              </button>
              <button className="portfolio-button" onClick={redirectToPortfolio}>
                Visit Portfolio
              </button>
            </div>
          </div>


          {/* Circular Mask */}
          <div className="mask-container">
            <div className="mask-circle">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBut1Ozjwlm_BEfhZaRxj-R64Pp3ufebomE6GlXqDRAvjfWNxycOL_IvVHX8fY33ppyIE&usqp=CAU" // Replace with mask image link
                alt="Squid Game Mask"
              />
            </div>
          </div>

          {/* Squid Game Background Figures */}
          <div className="background-figures">
            <div className="figure circle"></div>
            <div className="figure triangle"></div>
            <div className="figure square"></div>
          </div>

          {/* Transparent Glowing Cards */}
          <div className="game-card circle"></div>
          <div className="game-card triangle"></div>
          <div className="game-card square"></div>
        </div>
        {/* Squid Game Symbols */}
        <div className="symbol-container">
          <div className="symbol circle"></div>
          <div className="symbol triangle"></div>
          <div className="symbol square"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
