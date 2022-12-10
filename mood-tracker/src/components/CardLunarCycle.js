import quarterMoonImage from "../assets/quarter_moon.png";
import plusMinusImage from "../assets/plus-minus-thin.svg";
import daylightImage from "../assets/daylight.png";

export default function CardLunarCycle() {
  return (
    <a className="block">
      <div className="max-w-sm p-6 h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          TODAY' S WEATHER
        </h5>
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-items-center items-center mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <img
              src={quarterMoonImage}
              alt="weather"
              className="w-1/3 object-fit: contain"
            />
            <p>Moon: Waning Gibbous</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-items-center items-center mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <img
              src={plusMinusImage}
              alt="weather"
              className="w-1/4 object-fit: contain"
            />
            <p>1m 0s less Daylight than yesterday</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-items-center items-center mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <img
              src={daylightImage}
              alt="weather"
              className="w-1/4 object-fit: contain"
            />
            <p>Daylight: 8hr 20min</p>
          </div>
        </div>
      </div>
    </a>
  );
}
