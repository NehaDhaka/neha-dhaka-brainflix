import ActiveVideoDetails from "../ActiveVideoDetails/ActiveVideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import ActiveVideoComments from "../ActiveVideoComments/ActiveVideoComments";
import VideoList from "../VideoList/VideoList";
import "./AdditionalContent.scss";

export default function AdditionalContent({
  activeVideo,
  filteredList,
  handleOnSubmit,
  handleOnClick,
}) {
  return (
    <section className="additional">
      <div className="additional__active">
        <ActiveVideoDetails activeVideo={activeVideo} />
        <CommentForm handleOnSubmit={handleOnSubmit} />
        <ActiveVideoComments
          activeVideo={activeVideo.comments}
          handleOnClick={handleOnClick}
        />
      </div>
      <VideoList filteredList={filteredList} />
    </section>
  );
}
