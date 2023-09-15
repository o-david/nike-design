/* eslint-disable no-unused-vars */
// import css from "../../pages/navbar/Navbar.module.css";
// import { Link } from "react-router-dom";
import headerLogo from "../../assets/Logo.png";
import { navLinks } from "../../constants";
import { hamburger } from "../../assets/icons";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../contexts";
import { useLocation } from "react-router-dom";
import css from "../../componets/navbar/NavBar.module.css";

export const NavBar = () => {
  const { showMobileNavBar, setShowMobileNavBar } = useContext(NavContext);
  const toggleTableVisibility = () => {
    setShowMobileNavBar(!showMobileNavBar);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray inline-block hover:border-b-coral-red hover:border-b-[2px] "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="hidden max-lg:block"
          onClick={() => toggleTableVisibility()}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
      <div className={`${showMobileNavBar ? "block" : "hidden"}`}>
        <nav
          className={` w-[50%] max-lg:block lg:hidden`}
          style={{
            backdropFilter: "blur(50px)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <ul className={`flex-1 flex flex-col flex-wrap gap-10 p-10`}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-black font-normal inline-block hover:border-b-coral-red hover:border-b-[2px] "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* {NavState} */}
    </header>
  );
};

// import css from "../../pages/navbar/Navbar.module.css";
// import { Link } from "react-router-dom";
// export const NavBar = () => {
//   return (
//     <div className={`w-[100vw]`}>
//       <ul
//         className={`bg-transparent flex justify-between items-center h-[50px]  px-4`}
//       >
//         <li
//           className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//         >
//           <Link to="/">SAJEF LOGO</Link>
//         </li>

//         <div className="flex gap-10">
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">About Us</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">Car Parts</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto'] uppercase']`}
//           >
//             <Link to="/">Contact Us</Link>
//           </li>
//         </div>
//         <div className="flex gap-10">
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto uppercase']`}
//           >
//             <Link to="/">Shop</Link>
//           </li>
//           <li
//             className={`text-[16.716px] text-[#686C75] font-normal font-['Roboto uppercase']`}
//           >
//             <Link to="/">Login</Link>
//           </li>

//         </div>
//       </ul>
//     </div>
//   );
// };
