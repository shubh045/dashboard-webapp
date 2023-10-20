import "@styles/navbar.css";
import Link from "next/link";
import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <>
      <nav className="navbar">
        <h1>Board.</h1>
        <div className="nav-items">
          <ul className="top-items">
            <li className="item">
              <span>
                <FiPieChart />
              </span>
              <Link
                href="/dashboard"
                className={
                  currentPath === "/dashboard" ? "link active" : "link"
                }
              >
                Dashboard
              </Link>
            </li>
            <li className="item">
              <span>
                <BsTags />
              </span>
              <Link
                href="/transactions"
                className={
                  currentPath === "/transactions" ? "link active" : "link"
                }
              >
                Transactions
              </Link>
            </li>
            <li className="item">
              <span id="schedule">
                <AiOutlineSchedule />
              </span>
              <Link
                href="/schedules"
                className={
                  currentPath === "/schedules" ? "link active" : "link"
                }
              >
                Schedules
              </Link>
            </li>
            <li className="item">
              <span>
                <BiUserCircle />
              </span>
              <Link
                href="/users"
                className={currentPath === "/users" ? "link active" : "link"}
              >
                Users
              </Link>
            </li>
            <li className="item">
              <span>
                <IoSettingsOutline />
              </span>
              <Link
                href="/settings"
                className={currentPath === "/settings" ? "link active" : "link"}
              >
                Settings
              </Link>
            </li>
          </ul>

          <ul className="bottom-items">
            <li className="item">
              <Link
                href="/help"
                className={currentPath === "/help" ? "link active" : "link"}
              >
                Help
              </Link>
            </li>
            <li className="item">
              <Link
                href="/contact"
                className={currentPath === "/contact" ? "link active" : "link"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
