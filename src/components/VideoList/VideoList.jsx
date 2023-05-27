import "./VideoList.scss";

import { Link } from "react-router-dom";

export default function VideoList({ filteredList }) {
  return (
    <div className="additional__next">
      <h5 className="additional__title">NEXT VIDEOS</h5>
      <ul className="additional__list">
        {filteredList.map((video) => {
          return (
            <Link
              key={video.id}
              className="additional__link-container"
              to={`/${video.id}`}
            >
              <li className="additional__item">
                <img
                  className="additional__preview"
                  src={video.image}
                  alt="video preview"
                />
                <div className="additional__info">
                  <span className="additional__name">{video.title}</span>
                  <span className="additional__author">{video.channel}</span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
