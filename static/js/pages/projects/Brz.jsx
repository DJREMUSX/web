import React from "react";
import Hero from "../../components/projects/Hero";
import SubWithPar from "../../components/projects/SubWithPar";
import Paragraph from "../../components/projects/Paragraph";
import Images from "../../components/projects/Images";
import TwoSqImg from "../../components/projects/TwoSqImg";
import OneImg from "../../components/projects/OneImg";
import Category from "../../components/projects/Category";
import img1 from "../../assets/projects/brz/thumbnail.png";
import img2 from "../../assets/projects/brz/nor-1-logo-big.png";
import img3 from "../../assets/projects/brz/nor-2-app-icon.png";
import img4 from "../../assets/projects/brz/nor-3-colors.png";
import img5 from "../../assets/projects/brz/nor-4-banners.png";
import img6 from "../../assets/projects/brz/nor-5-hoodie-tshirt.png";
import img7 from "../../assets/projects/brz/nor-6-badges.png";
import img8 from "../../assets/projects/brz/nor-7-mobile-app.png";
import img9 from "../../assets/projects/brz/nor-8-ig-feed.png";
import img10 from "../../assets/projects/brz/nor-9-business-card.png";
import img11 from "../../assets/projects/brz/prim-1-wallposter.png";
import img12 from "../../assets/projects/brz/prim-2-logo.png";
import img13 from "../../assets/projects/brz/prim-3-colors.png";
import img14 from "../../assets/projects/brz/prim-4-notebook.png";
import img15 from "../../assets/projects/brz/prim-5-cap-tshirt-mug.png";
import img16 from "../../assets/projects/brz/hall-1-picture.png";
import img17 from "../../assets/projects/brz/hall-2-logo.png";
import img18 from "../../assets/projects/brz/hall-3-colors.png";
import img19 from "../../assets/projects/brz/hall-4-pins.png";

const brz = () => {
  return (
    <>
      <Hero
        title="BRZ Design"
        descriptionen="My challenge was to create a modern and adaptable visual identity for brz, while still maintaining consistency with the platform's design. The logo fully represents the brand name and the creativity of a designer's mind."
        descriptionro="sdsaddsadsasda"
        image={img1}
        tags={["branding", "proj. manager", "event planning"]}
      />
      <SubWithPar title="Understanding brz's Mission: Bringing Designers Together in Romania">
        <Paragraph text="brz is a community for designers in Romania that aims to unite both experienced professionals and beginners in the field. Its goal is to create a digital central hub where designers can collaborate, share knowledge and expertise, and learn from one another." />
        <Paragraph text="Discord was an obvious choice for brz's platform because of its many advantages over other social-messaging platforms like Facebook. As a fast-growing and user-friendly platform, Discord offers a range of features that facilitate effective communication and collaboration among members." />
      </SubWithPar>
      <Images>
        <OneImg img={img2} class="bw-image-2" scale="1" alt="test" />
      </Images>
      <SubWithPar title="The Process of Creating a Modern and Versatile Visual Identity">
        <Paragraph text="As a designer for brz, my challenge was to create a modern and versatile visual identity that could be customized for different events while staying true to the platform's design. It was important to me that the visual identity reflected the creativity and collaborative spirit of the brz community." />
        <Paragraph text="The logo for brz was a result of collaboration with the community, and I worked closely with them to ensure that the design reflected the community's values of creativity and innovation. Together, we came up with a design that would best represent the community's name and mission, expressing the boundless creativity that can only come from a designer's mind. The end result is a visual identity that embodies the unique spirit of brz and its members." />
      </SubWithPar>
      <Category number="01" title="Main assets" />
      <Images>
        <TwoSqImg
          img1={img3}
          img2={img4}
          class="bw-image-3"
          scale="1.1"
          alt="test"
          class2="bw-image-4"
          scale2="1.1"
          alt2="test"
        />
        <OneImg img={img9} class="bw-image-9" scale="1.15" alt="test" />
        <TwoSqImg
          img1={img5}
          img2={img6}
          class="bw-image-5"
          scale="1.1"
          alt="test"
          class2="bw-image-6"
          scale2="1.1"
          alt2="test"
        />
        <OneImg img={img10} class="bw-image-10" scale="1" alt="test" />
        <TwoSqImg
          img1={img7}
          img2={img8}
          class="bw-image-7"
          scale="1.1"
          alt="test"
          class2="bw-image-8"
          scale2="1.1"
          alt2="test"
        />
      </Images>
      <SubWithPar title="Creating a New Look for brz's Easter Event">
        <Paragraph text="As I mentioned earlier, the brz visual identity was designed to be flexible and adaptable for different events. In Romania, Easter is a significant holiday, and with the arrival of spring, the brz community wanted to capture the spirit of the season in their brand." />
        <Paragraph text="o convey the feeling of spring, I worked on transforming the visual identity to reflect the colors, themes, and imagery associated with the season. The result was a fresh and vibrant design that captured the essence of spring and the excitement of the upcoming Easter event." />
      </SubWithPar>
      <Category number="02" title="Easter" />
      <Images>
        <TwoSqImg
          img1={img12}
          img2={img13}
          class="bw-image-12"
          scale="1.1"
          alt="test"
          class2="bw-image-13"
          scale2="1.1"
          alt2="test"
        />
        <OneImg img={img11} class="bw-image-11" scale="1" alt="test" />
        <TwoSqImg
          img1={img14}
          img2={img15}
          class="bw-image-14"
          scale="1.1"
          alt="test"
          class2="bw-image-15"
          scale2="1.1"
          alt2="test"
        />
      </Images>
      <SubWithPar title="Designing for Halloween: Bringing a Spooky Vibe to brz's Party">
        <Paragraph text="Despite Halloween not being widely celebrated in Romania, the brz community still wanted to host a party that captured the fun and spooky spirit of the holiday. As a designer, my challenge was to create a visual identity that reflected this theme and could be incorporated into the event." />
        <Paragraph text="We decided to focus on a character that was familiar to many people worldwide: Dracula. We modified a part of the community to embody the Halloween feeling and brought in elements of darkness, mystery, and suspense into the visual identity. The end result was a design that perfectly captured the Halloween spirit and made the event a success." />
      </SubWithPar>
      <Category number="03" title="Halloween" />
      <Images>
        <OneImg img={img16} class="bw-image-16" scale="1" alt="test" />
        <TwoSqImg
          img1={img17}
          img2={img18}
          class="bw-image-17"
          scale="1.1"
          alt="test"
          class2="bw-image-18"
          scale2="1.1"
          alt2="test"
        />
        <TwoSqImg img1={img19} class="bw-image-19" scale="1.1" alt="test" />
      </Images>
    </>
  );
};

export default brz;
