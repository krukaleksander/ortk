import video from "../media/pexels-bhumik-photography-6522668(2).mp4";
import bgBefore from "../media/bg_before_movie.jpeg";
export const Video = () => {
  return (
    <div className="video">
      {/* <img src={bgBefore} alt="" /> */}
      <div className="video__container">
        <video autoPlay muted>
          <source src={video} />
        </video>
      </div>
      <div className="video__color"></div>
    </div>
  );
};
