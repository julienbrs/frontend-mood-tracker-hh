import weatherImage from "../assets/sunny.png";

export default function CardMeteo() {
  return (
    <a className="block">
      <div className="max-w-sm p-6 h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          TODAY' S WEATHER
        </h5>
        <div className="flex flex-row items-end">
          <div className="flex flex-col justify-items-center items-center mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <img src={weatherImage} alt="weather" />
            <p>Sunny</p>
            <p>34°C</p>

            <p>Paris, France</p>
          </div>
          <div className="px-8">
            The sun is shining brightly and it's a beautiful day outside! Enjoy
            the warm weather and make the most of it!
          </div>
        </div>
      </div>
    </a>
  );
}
