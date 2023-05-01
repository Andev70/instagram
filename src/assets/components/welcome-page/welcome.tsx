import "./welcome.scss";
import { useState } from "react";
import facebookLogo from "../../images/square-facebook.svg";
import metaLogo from "../../images/meta-logo.svg";

const WelcomePage = () => {
  return (
    <main className="parent-welcome w-screen h-screen">
      <div className="all-welcomeholder w-full h-full flex justify-center overflow-scrollr">
        <section className="to-scroll h-max w-max flex flex-col ">
          <WelcomeNav />
          <MainWelcomeArea />
          <MetaLogo />
          <WelcomeFooter />
        </section>
      </div>
    </main>
  );
};

const WelcomeNav = () => {
  return (
    <nav className="welcome-nav w-screen h-10 px-4 pt-4 pb-[6px]">
      <div className="lang-wrapper w-full h-full  flex justify-center items-center">
        <div className="lang-par flex items-center gap-x-1">
          <h1 className="lang-name">English</h1>
          <span className="drop-arrow-wel">
            <svg
              aria-label="Back"
              className="drop-svg-wel"
              color="rgb(115, 115, 115)"
              fill="rgb(115, 115, 115)"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title>Back</title>
              <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

const MainWelcomeArea = () => {
  const [loginPage, setLoginPage] = useState(false);
  return (
    <section className="main-welcome w-screen h-max flex justify-center pt-10">
      <div className="all-wel-wrap w-max h-max mt-3 pb-[60px] ">
        <div className="border-for w-max h-max border py-[10px] border-gray-300  flex flex-col items-center">
          <section className="insta-logo-img w-max h-[103.55] pt-9 pb-3">
            <span className="logo-sit w-[175px] h-[51px]"></span>
          </section>
          <div className="main-login-and-welcome w-full h-full">
            {/* here login or insta welcome shows conditionally*/}
            {!loginPage ? (
              <WelcomeContents setLoginPage={setLoginPage} />
            ) : (
              <LoginPage />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const WelcomeContents = ({ setLoginPage }: any) => {
  return (
    <div className="wel-wrap w-full h-full pt-5">
      <section className="wel-contents-parent w-full text-center h-full flex flex-col items-center">
        <div className="welcome-text-area w-[348.55px] h-[61px] px-7 pb-4 text-center">
          <h1 className="welcome-text">
            Sign up to see <span className="photo-text">photos</span> and{" "}
            <span className="vid-text">videos</span> from your friends.
          </h1>
        </div>
        <div className="get-app w-[348.55px] h-[60px] pt-4 px-10">
          <span className="getapp-btn-area w-full h-fullflex justify-center items-center">
            <button className="getapp-btn w-full h-full py-[13px] px-5">
              Get Instagram Lite
            </button>
          </span>
        </div>

        <div className="signin-signup-btns w-[105.24px] h-[38px] pt-5 flex gap-x-1">
          <button
            className="bring-login"
            onClick={() => {
              setLoginPage(true);
            }}
          >
            Login
          </button>
          <span className="else-text"> or</span>
          <button className="to-signup">sign up</button>
        </div>
      </section>
    </div>
  );
};

/* this the login page from where user will login */

const LoginPage = () => {
  return (
    <section className="login-parent-main pb-[10px] w-[317.09px] h-max pt-6">
      <div className="w-full login-wrapper h-full ">
        {/* facebook login wrapper */}

        <div className="facebook-login-area w-[317.09px] px-10 py-2 h-[50.55px]">
          <button className="log-facebook-btn w-full h-full py-[7px] px-4 flex justify-center items-center gap-x-2">
            <i className="facebook-icon w-[17px] h-[17px]">
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="icon-fa-squar w-full h-full"
              />
            </i>
            <h1 className="text-log-face">Continue with Facebook</h1>
          </button>
        </div>
        {/* or separator start*/}
        <div className="separator-area w-[317.09px] h-[50.99px] pt-[14px] pb-[22px] px-10 flex justify-center items-center ">
          <span className="line-one h-[1px] w-[91.91px] bg-gray-300"></span>
          <span className="or-text-sep">OR</span>
          <span className="line-one h-[1px] w-[91.91px] bg-gray-300"></span>
        </div>
        {/* phone number input area */}

        <div className="email-input-area w-[317.09px] h-max pb-[6px] px-10">
          <input
            type="email"
            name="email"
            className="email-input w-full h-[37px] outline-none pl-2"
            id="main"
            placeholder="Phone number, username, or email"
          />
        </div>

        {/* phone number input area */}

        <div className="password-input-area w-[317.09px] h-max pb-[6px] px-10">
          <input
            type="password"
            name="password"
            className="password-input w-full h-[37px] outline-none pl-2"
            id="passkey"
            placeholder="Password"
          />
        </div>

        {/* forgot password area */}

        <div className="forgot-password-area w-[317.09px] h-[43px]  pb-[8px] px-10">
          <span className="for-forgot-text  w-full h-full py-3 flex flex-col items-end justify-center">
            <h1 className="forgot-text">Forgot password?</h1>
          </span>
        </div>
        {/* login button area */}

        <section className="login-btn-area w-[317.09px] h-12 px-10 py-2">
          <button className="login-btn w-full h-full rounded-lg py-[7px] px-4 flex  justify-center items-center">
            Log in
          </button>
        </section>
        <div className="signup-reminder-area w-[317.09px] h-[55px] pt-4">
          <div className="w-full h-full flex justify-center items-center gap-x-1">
            <h1 className="not-user">Dont't have an account?</h1>
            <h1 className="signup-link">Sign up</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetaLogo = () => {
  return (
    <section className="meta-logo-parent w-screen h-[82px] pt-8 pb-6 flex justify-center items-center">
      <img
        src={metaLogo}
        alt="meta logo"
        className="meta-logo-img w-[52px] h-[26.57px]"
      />
    </section>
  );
};

const WelcomeFooter = () => {
  return (
    <section className="footer-parent w-screen h-[82px] px-4 pb-3">
      <div className="fotter-links h-full w-full pt-6">
        <ul className="list w-full h-full flex justify-center items-center flex-wrap gap-x-3">
          <li className="list-items">Meta </li>
          <li className="list-items">About</li>
          <li className="list-items">Blog</li>
          <li className="list-items">Jobs</li>
          <li className="list-items">Help</li>
          <li className="list-items">Api</li>
          <li className="list-items">Privacy</li>
          <li className="list-items">Terms</li>
          <li className="list-items">Top accounts</li>
          <li className="list-items">Locations</li>
          <li className="list-items">Instagram Lite</li>
          <li className="list-items">Contact Uploading & Non-Users</li>
          <li className="list-items">Meta Verified</li>
        </ul>
      </div>
    </section>
  );
};

export default WelcomePage;
