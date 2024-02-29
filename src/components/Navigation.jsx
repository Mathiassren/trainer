import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-center text-black items-center h-screen">
      <ul className="text-2xl text-center">
        <Link className="block mb-4" to="/home">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link className="block mb-4" to="/search">
          <li>
            <a>Search</a>
          </li>
        </Link>
        <Link className="block mb-4" to="/schedule">
          <li>
            <a>My Schedule</a>
          </li>
        </Link>
        <Link className="block mb-4" to="/login">
          <li>
            <a>Log in</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
