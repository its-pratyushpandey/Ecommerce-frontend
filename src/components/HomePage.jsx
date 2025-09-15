import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>E-Commerce</h1>
        <div className="header-right">
          {isAuthenticated ? (
            <div className="profile-menu">
              <FaUserCircle
                className="profile-icon"
                size={28}
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="dropdown">
                  <Link to="/cart" onClick={() => setDropdownOpen(false)}>Cart</Link>
                  <Link to="/orders" onClick={() => setDropdownOpen(false)}>Orders</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/computers">Computers</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/mobiles" : "/login"}>Mobiles</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/laptops" : "/login"}>Laptops</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/pendrives" : "/login"}>Pendrives</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="footer">@ copyright E-Commerce</div>
    </div>
  );
};

export default HomePage;
