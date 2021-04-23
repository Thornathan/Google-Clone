import Head from "next/head";
import Avatar from "../components/avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone by lanewebdev</title>
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="data:image/jpeg;base64,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" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
                        max-w-md rounded-full border border-gray-200 px-5 py-3
                        items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none"></input>
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>

          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}
