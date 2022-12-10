import React from "react";

export default function DateDisplay() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="mb-2 text-1xl text-gray-900 md:text-2xl lg:text-1xl dark:text-white">
      <h2>The current date is: {date.toLocaleString()}</h2>
    </div>
  );
}
