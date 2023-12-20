import { play_icon } from "../utils/constant";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black to-black-10 ">
      <h1 className="text-6xl font-semibold w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="">
        <button className="bg-white text-black p-3 px-12 text-lg rounded-lg hover:bg-opacity-80">
          {/* <img
            src={play_icon}
            alt="Play icon"
            className="inline-block w-6 h-6 mr-2"
          />{" "} */}
          ▶ Play
        </button>
        <button className="ml-2 bg-gray-500 text-white p-3 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80"> ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
