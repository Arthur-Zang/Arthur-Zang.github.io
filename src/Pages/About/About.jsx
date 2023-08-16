import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="name">
        <h1 className="text">
          ///ABOUT<br /> ME///
        </h1>
      </div>
      <div className="info">
        <InfoCard
          title="About Me"
          details={
            <>
              Hello there! I'm Arthur Zang, an aspiring software engineer currently studying computer science at Georgia Tech. I was born in China, then moved to the US when I was almost 4. From an early age, I showed an interest in technology, especially computers. I constantly played Roblox and Minecraft, and tried to install all sorts of different mods to enhance my experience. Later on, I began to experiment with coding, first learning Lua to develop Roblox games in high school. I was able to make a little money off my hobby, and later started to branch out into different forms of coding and development. Currently, I use coding as an extension for my creativity, and am looking for an internship where I can grow and develop and unleash my creativity through coding to help make a positive impact on society.
            </>
          }
        />
        <InfoCard
          title="Education"
          details={
            <>
              Livingston High School, NJ, 2018 - 2022. Georgia Institute of Technology, 2022 - present. <br />
              Languages: Java, Javascript, HTML, CSS, Lua. Constantly working to expand my skillset. <br />
              Skills: Data Structures and Algorithms, Problem Solving, Debugging, Good Team Player, Fluent in Mandarin Chinese
            </>
          }
        />
        <InfoCard
          title="Interests"
          details="Crushing PRs in the gym, playing basketball (hopefully dunking soon!), playing video games like Valorant, generating Midjourney images for cool wallpapers, and learning random stuff"
        />
      </div>
    </div>
  );
};

export default About;