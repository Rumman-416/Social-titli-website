import React from "react";
import video from "../assets/video/video.mp4";

const ParallaxVideo = () => {
  return (
    <div className=" w-full overflow-hidden h-[24vh] md:h-[55vh] lg:h-[90vh] relative">
      <video
        src={video}
        className="w-full  -z-10 lg:top-0 top-[50px] lg:bg-cover lg:pt-[110px] fixed"
        autoPlay
        loop
        muted
        preload="auto"
        style={{
          backgroundAttachment: "fixed",
        }}
      />
    </div>
  );
};

export default ParallaxVideo;
