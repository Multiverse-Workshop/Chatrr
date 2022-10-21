import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

function ChatHeader() {
  const user = useSelector((store) => store.user);
  let loggedin = user.user.loggedin;

  return (
    <div className="navbar bg-base-100 chat-header">
      <div className="flex-1">
        <div className="user-info-chat-header">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.user.img} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className="user-info-status">
            <p>{user.user.username}</p>
            <p className={loggedin ? "text-green-500" : "text-red-500"}>
              Online
            </p>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <InformationCircleIcon width={25} />
      </div>
    </div>
  );
}

export default ChatHeader;
