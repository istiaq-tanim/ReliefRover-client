import { FaPlusSquare, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full h-screen p-2  bg-green-100 text-gray-800 font-semibold">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                    : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                }
              >
                <svg
                  className="w-5 h-5 fill-current dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                    : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                </svg>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                rel="noopener noreferrer"
                to="/dashboard/supplies"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                    : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-600"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
                <span>All Supply</span>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                rel="noopener noreferrer"
                to="/dashboard/create-supply"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                    : "text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                }
              >
                <FaPlusSquare className="w-5 h-5 fill-current dark:text-gray-600"></FaPlusSquare>
                <span>Create Supply </span>
              </NavLink>
            </li>

            <li className="rounded-sm">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-gray-500 flex items-center p-2 space-x-3 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                <FaSignOutAlt className="w-5 h-5 fill-current" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
