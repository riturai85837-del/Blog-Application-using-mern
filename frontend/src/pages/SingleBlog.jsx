import Navbar from "../components/Navbar";

const SingleBlog = () => {
  return (
    <>
      <Navbar />

      <div className="single-blog px-[100px] mt-4">
        
        <div className="flex w-full min-h-[400px] gap-5 pt-5 items-start">
          
          {/* LEFT IMAGE */}
          <div className="left w-[40%] h-full">
            <img
              className="w-full rounded-lg"
              src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg"
              alt=""
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[60%]">
            
            <h2 className="text-3xl font-[500]">
              Web Development
            </h2>

            <p className="text-gray-500 text-[14px] mt-3 mb-3">
              Created : 16 March 2025.
            </p>

            {/* DESCRIPTION */}
            <div>
              <b>Description</b>
              <p className="text-gray-500 text-[14px] mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati laboriosam iste odit nesciunt fugiat? Dolorum,
                repudiandae eum.
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default SingleBlog;
          

