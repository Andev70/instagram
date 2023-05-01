import noProfile from "../../icons/logo-images/no-profile-pic.jpg";
import "./stories.scss";
import sampleStoryProfile from "../../images/cld-sample-3 (1).jpg";
const UserStories = () => {
  return (
    <section className="stories-parent pl-[8px] pr-[8px] border-b border-gray-300 flex w-full h-[95px] ">
      <div className="add-stories w-[80px] h-full flex justify-center items-center">
        <div className="w-[64px] pt-[5px] h-[84px] flex justify-between flex-col items-center ">
          <span className="for-add-input relative flex justify-center items-center w-[56px] h-[56px] rounded-full ">
            <input
              type="file"
              className="story-input w-full h-full rounded-full opacity-0"
              name="add-story"
              id="story-add"
            />
            <img
              src={noProfile}
              alt="profile"
              className="user-img w-full h-full absolute rounded-full pointer-events-none"
            />
            <div className="plus-icon-story bg-white w-[17.45px] h-[17.45px] flex justify-center items-center rounded-full absolute right-0 bottom-0">
              <svg
                aria-label="Plus icon"
                className="blue-plus-svg"
                color="rgb(0, 149, 246)"
                fill="rgb(0, 149, 246)"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <title>Plus icon</title>
                <path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z"></path>
              </svg>
            </div>
          </span>
          <span className="add-text">
            <h1 className="text-story">Your story</h1>
          </span>
        </div>
      </div>
      {/*users stories*/}
      <section className="actual-sories overflow-scroll h-full">
        <div className="story-wrapper h-full  flex items-center">
          {/*story*/}
          <article className="story-showcase  w-[80px] h-full flex justify-center items-center">
            <div className="w-[64px] h-[84px] pt-[1px] flex flex-col justify-between items-center">
              <span className="story-user-image w-[62px] h-[62px] border-2 border-gray-300 rounded-full bg-white flex justify-center items-center">
                <img
                  src={sampleStoryProfile}
                  alt="profile"
                  className="story-profile w-[56px] h-[56px] rounded-full"
                />
              </span>

              <span className="user-name-area">
                <h1 className="story-user-name">cristiano</h1>
              </span>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default UserStories;
