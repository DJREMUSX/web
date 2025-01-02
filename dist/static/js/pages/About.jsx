import ScrollImage from "../components/blocks/ScrollImage";

const About = () => {
  return (
    <div>
      <div className="h-screen bg-red-500"></div>
      <div className="second-div flex h-screen items-center justify-center overflow-hidden bg-blue-500">
        <ScrollImage
          src="https://cdn.cuberto.com/cb/img/riyadh/1.jpg"
          alt="Riyadh 1"
          className="scroll-image-1"
        />
        {/* add more images here */}
      </div>
      <div className="h-screen bg-red-500"></div>
      <div className="second-div h-screen overflow-hidden bg-blue-500">
        <ScrollImage
          src="https://cdn.cuberto.com/cb/img/riyadh/1.jpg"
          alt="Riyadh 2"
          className="scroll-image-2"
        />
        {/* add more images here */}
      </div>
      <div className="h-screen bg-red-500"></div>
      <div className="flex justify-center">
        <div className="second-div my-20 flex aspect-video h-[95vh] overflow-hidden bg-blue-500">
          <ScrollImage
            src="https://cdn.cuberto.com/cb/img/riyadh/16.jpg"
            alt="Riyadh 3"
            className="scroll-image-3"
            scale="1.05"
          />
          {/* add more images here */}
        </div>
      </div>
      <div className="h-screen bg-green-500"></div>
      <div className="flex justify-center">
        <div className="second-div my-20 flex aspect-square h-[75vh] overflow-hidden bg-blue-500">
          <ScrollImage
            src="https://cdn.cuberto.com/cb/img/riyadh/9.jpg"
            alt="Riyadh 4"
            className="scroll-image-4"
            scale="1.10"
          />
          {/* add more images here */}
        </div>
      </div>
    </div>
  );
};

export default About;
