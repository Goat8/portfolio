import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
      <h1 className="text-6xl font-bold">Hi, </h1>
      <h1 className="text-6xl font-bold">I&apos;m Maria,</h1>
      <h1 className="text-6xl font-bold">Full Stack developer </h1>


      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">NodeJS</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #authentication
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #restApi
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #middleware
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
