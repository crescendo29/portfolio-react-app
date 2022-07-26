import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import RealEstate from "../assets/realestate.jpg";
import DouceEvasion from "../assets/douceEvasion.png";
import Frontend from "../assets/frontend.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">
            // Check out some of my recent work
          </p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${DouceEvasion})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SvelteKit Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    <a
                      target="_blank"
                      href="https://douce-evasion.vercel.app/"
                    >
                      Demo
                    </a>
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    <a
                      target="_blank"
                      href="https://github.com/crescendo29/marieRose"
                    >
                      Code
                    </a>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${Frontend})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tailwind Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    <a
                      target="_blank"
                      href="https://frontend-mentor-product-card.vercel.app/"
                    >
                      Demo
                    </a>
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    <a
                      target="_blank"
                      href="https://github.com/crescendo29/frontendMentorProductCard"
                    >
                      Code
                    </a>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${WorkImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${RealEstate})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{
              backgroundImage: `url(${WorkImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${RealEstate})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
