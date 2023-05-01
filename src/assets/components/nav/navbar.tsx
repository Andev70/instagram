import instagramLogo from "../../icons/nav-icons/instagram.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar w-[72px] border-r border-gray-300 pt-[8px] h-screen pl-[12px] pr-[12px]">
      {/* instagram icon start*/}
      <div className="insta-icon-body w-[48px] h-[92px] flex justify-start items-center ">
        <span className="for-focus w-full h-[48px] rounded-full flex justify-center items-center">
          <Link
            to="/"
            className="w-max h-max flex justify-center
          items-center"
          >
            <img
              src={instagramLogo}
              className="insta-icon w-[24px] h-[24px]"
              alt="instagram"
            />
          </Link>
        </span>
      </div>
      {/*instagram icon end*/}
      {/* home icon start*/}
      <section className="home-icon w-full h-[64px] flex justify-center items-center">
        <Link to="/">
          <span className="home-focus w-[48px] h-[48px] flex rounded-full justify-center items-center ">
            <svg
              aria-label="Home"
              className="home-reguler-icon"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              width="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </span>
        </Link>
      </section>
      {/*home icon end*/}

      {/* search icon start*/}
      <section className="search-icon w-full h-[64px] flex justify-center items-center">
        <Link
          className="rounded-full w-max h-max flex justify-center items-center"
          to="/search"
        >
          <span className="search-focus w-[48px] h-[48px] flex rounded-full justify-center items-center ">
            <svg
              aria-label="Explore"
              className="search-icon"
              color="rgb(38, 38, 38)"
              fill="rgb(38, 38, 38)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
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
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
          </span>
        </Link>
      </section>
      {/*search icon end*/}

      {/* reels icon start*/}
      <section className="reel-icon w-full h-[64px] flex justify-center items-center">
        <Link to="reels">
          <span className="reel-focus w-[48px] h-[48px] flex rounded-full justify-center items-center ">
            <svg
              aria-label="Reels"
              className="reel-svg"
              color="rgb(38, 38, 38)"
              fill="rgb(38, 38, 38)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </Link>
      </section>
      {/*reels icon end*/}

      {/* messanger icon start*/}
      <section className="messanger-icon w-full h-[64px] flex justify-center items-center">
        <Link to="/messanger">
          <span className="messanger-focus w-[48px] h-[48px] flex rounded-full justify-center items-center ">
            <svg
              aria-label="Messenger"
              className="messanger-svg"
              color="rgb(38, 38, 38)"
              fill="rgb(38, 38, 38)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Messenger</title>
              <path
                d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.739"
              ></path>
              <path
                d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </Link>
      </section>
      {/*messanger icon end*/}
    </nav>
  );
};

export default Navbar;