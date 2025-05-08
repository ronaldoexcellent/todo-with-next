import Clock from "@/components/svg/Clock";
import Plus from "@/components/svg/Plus";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Bubbles from "@/components/svg/Bubbles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome To Todo</title>
        <meta name="description" content="Todo App Home" />
      </Head>
      
      <main className="w-screen flex justify-center ">
        <div className="absolute w-10/12 sm:w-96 -z-40 top-0 overflow-hidden">
            {/* Profile Section */}
            <div className="flex flex-col p-5 bg-[#50C2C9] items-center">
                <Bubbles />
                <Image
                    src="/ellipse 3.png"
                    alt="Profile"
                    width={50}
                    height={50}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <p className="mt-4 text-lg font-bold text-white"> 
                    Welcome Jeegar goyani.
                </p>
            </div>
            
            {/* Middle Section: Clock */}
            <div className="flex justify-center my-8">
                <Clock />
            </div>

            <div className="font-semibold mb-7"> Task List </div>
            
            {/* Task List */}
            <div className="p-4 rounded-2xl shadow-3xl bg-white text-sm">
                <div className="flex justify-between">
                    <h2 className="font-bold text-gray-800 mb-4">
                        Daily Task
                    </h2>
                    <Plus />
                </div>

                <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked
                            readOnly
                            className="w-5 h-5 text-teal-500 border-black rounded"
                        />
                        <span className="text-gray-700"> Learning Programming by 12PM </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <input
                        type="checkbox"
                        readOnly
                        className="w-5 h-5 text-teal-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700"> Learn how to cook by 1PM </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <input
                        type="checkbox"
                        readOnly
                        className="w-5 h-5 text-teal-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700"> Learn how to play at 2PM </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <input
                        type="checkbox"
                        readOnly
                        className="w-5 h-5 text-teal-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Have lunch at 4PM</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <input
                        type="checkbox"
                        readOnly
                        className="w-5 h-5 text-teal-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700"> Going to travel 6PM </span>
                    </li>
                </ul>
            </div>
        </div>
      </main>
    </>
  );
};
  
export default Home;
