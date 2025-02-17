import React, { useEffect, useState } from "react";
import ClassList from "../components/Classes";
import BurgerMenu from "../components/BurgerMenu";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [trainerDetails, setTrainerDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/trainers`)
      .then((response) => response.json())
      .then((data) => setTrainerDetails(data))
      .catch((error) =>
        console.error("Failed to fetch trainer details:", error)
      );
  }, []);

  return (
    <>
      <style>
        {`
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <main>
        <div className="flex items-center justify-between bg-white py-2">
          <FaArrowLeft
            className="h-6 w-6 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="font-semibold">Search</h1>
          <BurgerMenu iconColor="gray" />
        </div>
        <div className="flex items-center rounded-full mb-8 mt-4 shadow-sm border border-solid border-[#D4D4D4]">
          <FaSearch className="text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Search classes"
            className="py-2 pl-4 pr-4 rounded-full w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ClassList title="Popular Classes" searchTerm={searchTerm} />
        <h1 className="font-bold text-2xl mt-10">Popular Trainers</h1>
        <section className="overflow-auto pb-10 scrollbar-hidden h-[400px]">
          {trainerDetails &&
            trainerDetails.map((trainer, index) => (
              <div key={index} className="flex items-center mt-4">
                <img
                  src={trainer.asset.url}
                  alt={`Trainer ${trainer.name}`}
                  className="w-[88px] h-[88px] object-cover mt-2 rounded-2xl"
                />
                <p className="ml-4 font-bold">{trainer.trainerName}</p>
              </div>
            ))}
        </section>
      </main>
    </>
  );
};

export default Search;
