import "./DetailsNext.scss";

export default function DetailsNext({ videoList, updateCurrentVideo }) {
  return (
    <div className="details__next">
      <h5 className="details__next-title">NEXT VIDEOS</h5>
      <ul className="details__next-list">
        {videoList.map((video) => {
          return (
            <li
              onClick={() => {
                updateCurrentVideo(video.id);
              }}
              key={video.id}
              className="details__next-item"
            >
              <img
                className="details__next-preview"
                src={video.image}
                alt="video preview"
              />
              <div className="details__next-info">
                <span className="details__next-name">{video.title}</span>
                <span className="details__next-author">{video.channel}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
