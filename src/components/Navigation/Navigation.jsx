import React from "react";
import "./Navigation.module.css";

const Navigation = () => {
  const user = "JD";
  /**
   * Only JS expressions are allowed in return statement => js code that evaluates to a value
   * Function calls
   * primitive value
   * variables
   * ternary statements
   */

  return (
    <nav className={"px-12 py-6 flex justify-between items-center"}>
      <div className={"flex items-center gap-3"}>
        <div
          className={
            "w-10 h-10 rounded-full bg-lime-400 flex justify-center items-center"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-wind-icon lucide-wind logo block"
          >
            <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
            <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
            <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
          </svg>
        </div>
        <span className="font-[Inter] text-xl font-semibold">Aelora</span>
      </div>

      <div className={"flex items-center gap-12"}>
        <div className={"flex items-center gap-3 px-3 py-2"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chart-column-icon lucide-chart-column logo w-4 h-4 block"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <path d="M18 17V9" />
            <path d="M13 17V5" />
            <path d="M8 17v-3" />
          </svg>
          <span className="font-[Inter] text-sm font-medium">Dashboard</span>
        </div>
        <div className={"flex items-center gap-2"}>
          <div
            className={
              "w-8 h-8 rounded-full bg-blue-400 flex justify-center items-center"
            }
          >
            <span className="font-[Inter] text-sm font-medium text-white">
              {user}
            </span>
          </div>
          <span className="font-[Inter] text-sm font-medium">Aelora</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
