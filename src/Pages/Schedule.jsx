import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import BurgerMenu from "../components/BurgerMenu";
import Navigation from "../components/Navigation";
import Loading from "../components/Loader";
import { useAuth } from "../Context/Auth";

const Schedule = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userClasses, setUserClasses] = useState([]);
  const { token, userId } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId) {
          console.log("User ID not available");
          setLoading(false);
          return;
        }

        console.log("User ID:", userId);
        console.log("Token:", token);

        const response = await fetch(
          `http://localhost:4000/api/v1/users/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch userID data:", response.statusText);
          setLoading(false);
          return;
        }

        const userData = await response.json();

        setUserClasses(userData.classes || []);
        setIsLoggedIn(true);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token, userId]);

  return (
    <div className="m-4">
      <div className="flex items-center justify-between p-4">
        <Link to="/home">
          <HiArrowNarrowLeft className="text-2xl cursor-pointer text-gray-500" />
        </Link>
        <h1 className="text-2xl">My Schedule</h1>
        <BurgerMenu />
      </div>

      {loading ? (
        <span>
          <Loading />
        </span>
      ) : isLoggedIn ? (
        <div>
          {userClasses.length > 0 ? (
            userClasses.map((classItem) => (
              <Link
                key={classItem.id}
                to={`/class-details/${classItem.id}`}
                className="block"
              >
                <div className="bg-[#FCFBFB] min-w-full h-[100px] p-4 mt-4 rounded border border-[#d4d4d4] flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">
                    {classItem.className}
                  </h3>
                  <p>
                    {classItem.classDay} - {classItem.classTime}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center mt-4">
              You are not enrolled in any classes.
            </p>
          )}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p>You need to log in to see your schedule.</p>
          <Link to="/login">
            <button className="bg-yellow-400 p-4 rounded-full mt-4 w-full font-bold">
              LOG IN
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Schedule;
