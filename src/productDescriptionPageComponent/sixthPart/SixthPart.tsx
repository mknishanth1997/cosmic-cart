import React from "react";
import style from "./SixthPart.module.css";

export default function SixthPart() {
  return (
    <div>
      <div className="flex justify-center items-center px-4 sm:px-6 py-6 overflow-x-hidden ">
        <div
          className={`w-full max-w-6xl flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 rounded-2xl p-4 sm:p-6 md:p-8 box-border ${style.cardContainer}`}
        >
          {/* Column 1 */}
          <div className="flex-1 flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1 md:min-w-0">
            <h3 className="pb-2 text-lg sm:text-xl font-semibold">Heading</h3>
            <p className="text-sm sm:text-base leading-relaxed break-words">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quo rerum eaque quam, sit pariatur facilis, itaque reprehenderit
              aspernatur sed repellendus necessitatibus, repudiandae inventore
              omnis aliquam ipsam saepe dolore quae.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex-1 flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1 md:min-w-0">
            <h3 className="pb-2 text-lg sm:text-xl font-semibold">Heading</h3>
            <p className="text-sm sm:text-base leading-relaxed break-words">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quo rerum eaque quam, sit pariatur facilis, itaque reprehenderit
              aspernatur sed repellendus necessitatibus, repudiandae inventore
              omnis aliquam ipsam saepe dolore quae.
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex-1 flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1 md:min-w-0">
            <h3 className="pb-2 text-lg sm:text-xl font-semibold">Heading</h3>
            <p className="text-sm sm:text-base leading-relaxed break-words">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quo rerum eaque quam, sit pariatur facilis, itaque reprehenderit
              aspernatur sed repellendus necessitatibus, repudiandae inventore
              omnis aliquam ipsam saepe dolore quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
