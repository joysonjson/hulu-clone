import request from "../utils/request";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <div className="px-5 my-10  sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center  ">
      {results.map((video) => (
        <Thumbnail key={video.id} video={video} />
      ))}
    </div>
  );
};

//

export default Results;
