import React from "react";
import { Link,matchPath,useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";


const Navbar = () => {
  
    const location = useLocation()
  
    const matchRoute = (route) => {
        return matchPath({path:route},location.pathname)
    }
  
  
    return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={42} loading="lazy" />
        </Link>
        <nav>
          <ul className="flex gap-x-6 text-rich ">
            {NavbarLinks?.map((ele, index) => (
              <li key={index}>
                {ele.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link to={ele?.path}>
                    <p className={`${matchRoute(ele.path) ? "text-yellow-25":"text-richblack-25"}`}>{ele.title}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

            {/* login /signup / Dashboard */}

            <div className="flex gap-x-4 ">

            </div>

      </div>
    </div>
  );
};

export default Navbar;
