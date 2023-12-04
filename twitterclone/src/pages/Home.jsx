import { useState } from "react";
import { Header, PostForm, PostList } from "../components";
import { Navbar } from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import { ShowAllPosts } from "../components/ShowAllPosts";
function Home() {
  const [refetch, setRefetch] = useState(false);
  const onRefetch = () => {
    setRefetch((prevState) => !prevState);
  };
  return (
    <>
      <main className="w-full md:w-[67.5rem]   xl:w-8/12  md:flex flex-row  flex-grow " >
        <div className="border-r-2 border-color-bordercolor bg-navbarcolor">
          <Navbar />
        </div>
        <section>
          <div className="md:w-[37rem] lg:w-[39.4rem]  border-b-2  border-color-bordercolor bg-bg-web">
            <Header />
          </div>
          <div className="pt-3 bg-bg-web">
            <PostForm onRefetch={onRefetch} />
          </div>
          <div className="pb-6  pt-3 text-center text-bluetext bg-bg-web  ">
            <ShowAllPosts />
          </div>
          <div className="bg-bg-web border-t-2 border-b-2 border-color-bordercolor">
            <PostList refetch={refetch} />
          </div>
        </section>
        <div className="border-l-2 border-color-bordercolor">
          <Navbar2 />
        </div>
      </main>
    </>
  );
}
export default Home;
