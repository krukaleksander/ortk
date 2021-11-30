import video from "../media/pexels-bhumik-photography-6522668(2).mp4";
export const Video = () => {
  return (
    <div className="video">
      {/* <img src={bgBefore} alt="" /> */}
      <div className="video__container">
        <video autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
      <div className="video__color"></div>
      <h1 className="video__title">
        W Twojej FIRMIE ciągle rosną rachunki za prąd i gaz? To nie musi tak
        wyglądać!
      </h1>
    </div>
  );
};
