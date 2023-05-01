import {
  SignupForms,
  PageNotFound,
  Navbar,
  UserStories,
  Reels,
  SearchContent,
  Messanger,
  Post,
  WelcomePage,
} from "./assets/components/";
import { Routes, Route, Link, Outlet } from "react-router-dom";
const InstagramUi = () => {
  return (
    <div className="wrapper w-screen h-screen">
      <section className="main-body w-full h-full flex">
        <Navbar />
        <Outlet />
        {/* this is for storys and all the post to be sitted*/}
      </section>
    </div>
  );
};
const MainAppContent = () => {
  return (
    <main className="main-contents overflow-scroll w-[764.73px] h-screen ">
      {/*this is scrolable */}
      <div className="contents-scrolable w-full h-max flex flex-col">
        <UserStories />
        <Post />
      </div>
    </main>
  );
};

const CompleteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/accounts/signup/phone" element={<SignupForms />}></Route>
      <Route path="/users" element={<InstagramUi />}>
        {/* this is a shared route for reel and search page also */}
        <Route index path="/users" element={<MainAppContent />} />
        <Route path="search" element={<SearchContent />} />
        <Route path="reels" element={<Reels />} />
      </Route>
      {/* this is for the messanger and the error 404 */}
      <Route path="messanger" element={<Messanger />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CompleteApp;
