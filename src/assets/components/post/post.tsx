import "./post.scss";
import demoPicture from "../../images/cld-sample-3 (1).jpg";
import verified from "../../icons/posts-icons/verified.svg";
import demoPostImg from "../../images/cld-sample-3.jpg";

const Post = () => {
  return (
    <div className="post-area-parent for-padding pt-6 w-full h-max pr-2 pl-2">
      <div className="post-wrapper post-background w-full h-max  flex flex-col items-center gap-y-5">
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};

const SinglePost = () => {
  return (
    <section className="post-first-parent h-max w-[470px] ">
      <div className="post-second-parent w-full h-max flex flex-col">
        <PostHeader />
        <PostImageSection />
        <div className="all-iterection-parent w-full h-max border-l border-gray-300">
          <PostInterections />
          <LikeCount />
          <CaptionArea />
          <CommentViewer />
          <FirstTwoComment />
          <PostedTimesAgo />
          <PostCommentArea />
        </div>
      </div>
    </section>
  );
};

const PostHeader = () => {
  return (
    <header className="post-header w-full h-[60.36px] flex items-center">
      <div className="profile-info w-[422px] h-full pl-4 pr-1 pt-[14px] pb-[14px] flex items-center">
        <span className="profile-dp-post w-8 h-8 rounded-full flex justify-center items-center overflow-hidden">
          <img
            className="w-full h-full rounded-full"
            src={demoPicture}
            alt="dp"
          />
        </span>
        <span className="profile-name-post flex items-center  pl-[16px] pr-[2px] pt-[2px] pb-[2px]">
          <h1 className="user-name-post">cristiano</h1>
          <div className="checked-account pl-[2px]">
            <img
              src={verified}
              alt="verified"
              className="blue-check-post w-[16px] h-[16px]"
            />
          </div>
        </span>
      </div>
      {/* threedot post*/}
      <section className="three-dot-post w-[48px] h-[40px] pr-2 flex justify-center items-center">
        <div className="for-focus-effect w-full h-full flex justify-center items-center">
          <svg
            aria-label="More Options"
            className="threedot-svg"
            color="rgb(115, 115, 115)"
            fill="rgb(115, 115, 115)"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
      </section>
    </header>
  );
};

const PostImageSection = () => {
  return (
    <section className="post-images w-full h-[587.5px] bg-blue-500">
      <img src={demoPostImg} className="w-full h-full" alt="post image" />
    </section>
  );
};

const PostInterections = () => {
  return (
    <section className="post-interection-area flex justify-between mt-1 pt-[6px] pl-4 pr-4 pb-2  w-full h-[54px]">
      <div className="w-max h-full flex items-center gap-x-4">
        {/* like svg */}
        <svg
          aria-label="Like"
          className="like-regular-svg"
          color="rgb(142, 142, 142)"
          fill="rgb(142, 142, 142)"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Like</title>
          <path
            fill="#000"
            d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
          ></path>
        </svg>
        {/*comment*/}

        <svg
          aria-label="Comment"
          className="comment-svg"
          color="#000"
          fill="#000"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Comment</title>
          <path
            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
        {/*sharepost*/}

        <svg
          aria-label="Share Post"
          className="share-svg"
          color="#000"
          fill="rgb(115, 115, 115)"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Share Post</title>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
          ></line>
          <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polygon>
        </svg>
      </div>
      <div className="shave-icon-area h-full flex items-center">
        <svg
          aria-label="Save"
          className="save-svg"
          color="rgb(0, 0, 0)"
          fill="rgb(0, 0, 0)"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Save</title>
          <polygon
            fill="none"
            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
            stroke="currentColor"
            strokeLinecap="round"
            stroke-linejoin="round"
            strokeWidth="2"
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

const LikeCount = () => {
  return (
    <section className="like-count-area flex items-center gap-x-1 w-full px-4 h-[18px]">
      <span className="count">
        <h1 className="count-number">6,035,275</h1>
      </span>
      <span className="count-text-area">
        <h1 className="count-text">likes</h1>
      </span>
    </section>
  );
};

const CaptionArea = () => {
  return (
    <section className="caption-parent w-full mt-2 h-max px-4  flex flex-col">
      <div className="caption-area w-full h-max">
        <h1 className="wrap-cap ">
          <span className="name">cristiano</span>
          <span className="caption ml-1 ">
            Very proud to have supported the Singapore Olympic Foundation Peter
            Lim Scholarship for the past 10 years....
          </span>
        </h1>
      </div>
      <button className="more-caption w-max h-max">more</button>
    </section>
  );
};

const CommentViewer = () => {
  return (
    <section className="all-comment w-full h-max px-4 flex gap-x-1 mt-1">
      <span className="comment-all-text">View all</span>
      <span className="comment-count">40,610</span>
      <span className="comment-text">comments</span>
    </section>
  );
};

const FirstTwoComment = () => {
  return (
    <section className="two-comment-parent w-full px-4 h-max flex flex-col ">
      <div className="first-comment-area w-full flex items-center justify-between">
        <span className="comment-wrapper flex items-center gap-x-1">
          <h1 className="comment-user">andrewhenderson</h1>
          <h2 className="comment">💖</h2>
        </span>
        <span className="like-two-comment-first h-full ">
          <svg
            aria-label="Like"
            className="small-like-svg"
            color="#000"
            fill="#000"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
        </span>
      </div>
      {/*second comment area*/}

      <div className="second-comment-area w-full flex items-center justify-between">
        <span className="comment-wrapper flex items-center gap-x-1">
          <h1 className="comment-user">kimlimhl</h1>
          <h2 className="comment">💖</h2>
        </span>
        <span className="like-two-comment-second h-full ">
          <svg
            aria-label="Like"
            className="small-like-svg"
            color="#000"
            fill="#000"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

const PostedTimesAgo = () => {
  return (
    <section className="times-ago-parent pl-4 w-full h-[22px]  border-b border-gray-300">
      <span className="posted-time-wrapper flex mt-[2px]  gap-x-1 w-full items-center h-[7px]">
        <h1 className="time-num">2</h1>
        <h2 className="time-text">DAYS AGO</h2>
      </span>
    </section>
  );
};

const PostCommentArea = () => {
  return (
    <section className="comment-input-area h-[30.73px] w-full pr-4 py-[6px]">
      <div className="content-wrapper w-full h-full flex justify-between items-center">
        <input
          className="comment-input w-[424.47px] outline-none"
          name="comment-input"
          placeholder="Add a comment..."
          type="text"
        />

        <div className="post-btn-area w-[28.8px] ">
          <button className="post-btn">Post</button>
        </div>
      </div>
    </section>
  );
};
export default Post;
