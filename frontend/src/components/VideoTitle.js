const VideoTitle = ({ title, overview }) => {

  // making the overview samller and it contains only "maxChars" characters
  
  const truncateOverview = (text, maxChars) => {
    if (text.length <= maxChars) {
      return text;
    }
  
    // Find the last sentence within the character limit
    const lastSentence = text.substr(0, maxChars).replace(/\s[^\s]*$/, '');
  
    return `${lastSentence.trim()} . . .`;
  };
  
  const truncatedOverview = truncateOverview(overview, 180);

  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-gray-900">
      <h1 className="text-2xl md:text-6xl font-semibold w-1/2">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{truncatedOverview}</p>

      <div className="mt-5 md:mt-0 ">
        <button className="bg-white text-black py-2 md:py-3 px-5 md:px-12 text-lg rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block ml-2 bg-gray-500 text-white p-3 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">
          {" "}
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
