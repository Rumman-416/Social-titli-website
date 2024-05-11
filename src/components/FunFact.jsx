import React, { useState, useEffect } from "react";

const FunFact = () => {
  const [counts, setCounts] = useState({
    coffeeCups: 0,
    clientMeets: 0,
    cookies: 0,
    musicPlayed: 0,
  });

  useEffect(() => {
    const intervals = Object.keys(counts).map((key) => {
      return setInterval(() => {
        const finalCount = {
          coffeeCups: 365,
          clientMeets: 214,
          cookies: 623,
          musicPlayed: 852,
        };

        // Update the count for each category if not final count
        if (counts[key] < finalCount[key]) {
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: prevCounts[key] + 1,
          }));
        }
      }, 3);
    });

    // Clear all intervals if counts reach final values
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [counts]); // Re-run effect when counts change

  return (
    <div className=" bg-white">
      <div className=" container mx-auto">
        <div className=" p-10 ">
          <div className="flex flex-col justify-center items-center p-8 gap-3">
            <h1 className="text-3xl font-light">FUN FACT</h1>
            <p className="text-center text-gray-500">
              Socialtitli digital marketing agency was established in 2015 with
              the aim of providing best and updated marketing services to create
              an unexplored era of growth, productivity and innovation that you
              will have the privilege to experience and cherish indefinitely. We
              moved on with our passion and executed some enthusiastic meets..
            </p>
          </div>
          <div className="flex flex-col gap-7 grid grid-cols-1 md:grid-cols-4 ">
            {Object.keys(counts).map((key) => (
              <div
                className="flex flex-col justify-center items-center gap-2 left-line relative"
                key={key}
              >
                <h1 className="text-3xl ">{counts[key]}</h1>
                <div className="bg-[#f4a210] w-10 h-[3px] md:w-12 "></div>
                <h6>
                  {key
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .toUpperCase()}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
