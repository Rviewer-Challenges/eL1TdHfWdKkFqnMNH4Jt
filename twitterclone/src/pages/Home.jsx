import { useState } from "react";
import { Header, PostForm } from "../components";
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
      <main className="w-full md:w-[67.5rem]   xl:w-8/12  md:flex flex-row  flex-grow ">
        <div>
          <Navbar />
        </div>
        <section>
          <div className="md:w-[37rem] lg:w-[39.4rem] ">
            <Header />
          </div>
          <div>
            <PostForm onRefetch={onRefetch} />
          </div>
          <div>
            <ShowAllPosts />
          </div>

          {/*  <div>
            <PostList refetch={refetch} />
          </div> */}
        
        </section>
        <div>
          <Navbar2 />
        </div>
      </main>
    </>
  );
}
export default Home;
