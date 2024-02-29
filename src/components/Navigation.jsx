import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-center text-black items-center h-screen">
      <ul className="text-2xl space-y-10 text-center">
        <Link to="/home">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link to="/search">
          <li>
            <a>Search</a>
          </li>
        </Link>
        <Link to="/schedule">
          <li>
            <a>My Schedule</a>
          </li>
        </Link>
        <Link to="/login">
          <li>
            <a>Log in</a>
          </li>
        </Link>
        <li>
          <a>Log out</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
