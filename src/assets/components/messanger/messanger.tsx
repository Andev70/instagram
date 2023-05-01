import "./messanger.scss";
import messageUserIcon from "../../images/cld-sample-3.jpg";
import { Link } from "react-router-dom";
const Messanger = () => {
  return (
    <section className="messanger-parent w-screen h-screen ">
      <div className="messanger-wrapper w-full h-full flex flex-col justify-between">
        <MessangerHeader />
        <MessagedUsers />
      </div>
    </section>
  );
};

const MessangerHeader = () => {
  return (
    <div className="header-wrapper w-full h-[44px] pl-4 pr-4 border-b border-gray-300">
      <header className="header-info w-full h-full flex items-center ">
        <div className="back-parent w-[32px] h-[24px]">
          <Link to="/">
            <span className="back-home w-[24px] h-full flex justify-center items-center">
              <svg
                aria-label="Back"
                className="back-svg"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Back</title>
                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
              </svg>
            </span>
          </Link>
        </div>
        <div className="acc-details w-[742.18px] h-[32px] flex justify-center items-center">
          <span className="account w-[78.2px] h-[24px]">
            <h1 className="account-name">jodiactoxic</h1>
          </span>
          <span className="dropdown-svg w-8 h-8 p-2 flex justify-center items-center">
            <svg
              aria-label="Back"
              className="drop-svg"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <title>Back</title>
              <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>
          </span>
        </div>
        <div className="edit-parent w-[32px] h-[24px] flex justify-end">
          <span className="edit-to flex justify-center items-center w-[24px] h-[24px] ">
            <svg
              aria-label="New message"
              className="edit-svg"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>New message</title>
              <path
                d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.848"
                x2="20.076"
                y1="3.924"
                y2="7.153"
              ></line>
            </svg>
          </span>
        </div>
      </header>
    </div>
  );
};

const MessagedUsers = () => {
  return (
    <main className="all-messages-parent w-full pt-2 overflow-scroll">
      <div className="users-scrollable w-full h-max flex flex-col ">
        {/* every users now start */}
        <OneUserMessage />
        <OneUserMessage />
      </div>
    </main>
  );
};

const OneUserMessage = () => {
  return (
    <section className="each-users w-full h-[72px] px-4 py-2">
      <div className="user-message-wrapper w-full h-full flex justify-between items-center">
        <div className="that-user-dp-parent w-[56px] h-full bg flex justify-center items-center">
          <span className="user-dp-holder w-full h-full flex overflow-hidden justify-center items-center  rounded-full">
            <img
              src={messageUserIcon}
              alt="user dp"
              className="user-dp-messanger w-full h-full rounded full"
            />
          </span>
        </div>
        {/*message info user name section*/}
        <section className="user-message-info w-[738.18px] h-9  flex items-center">
          <div className="wrapper-message w-max h-max flex flex-col">
            <span className="user-name-content ">
              <h1 className="name-user">Rifana Farhan</h1>
            </span>
            <span
              className="last-message-hint h-max flex items-center w-max"
              style={{ height: "18px" }}
            >
              <h1 className="hint-msg">test</h1>
              <span className="dot-separator px-1">
                <h1 className="pb-2 dot-bet">.</h1>
              </span>
              <span className="time-ago flex justify-center items-center gap-x-1">
                <h1 className="time-num">55</h1>
                <h2 className="time-unit">m</h2>
              </span>
            </span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Messanger;
