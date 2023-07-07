import React, { useState } from "react";

const Header = () => {
  const [menuStates, setMenuStates] = useState({
    isGiftsMenuOpen: false,
    isFollowMenuOpen: false,
    isProfileMenuOpen: false,
    isCartMenuOpen: false,
  });

  const profileArray = [
    { text: "My Profile", link: "/my-account" },
    { text: "Login/Register", link: "/login" },
    { text: "My Orders", link: "/my-orders" },
    { text: "Admin Login", link: "/admin-login" },
  ];

  const giftsArray = [
    { text: 'Flowers', link: '/flowers' },
    { text: 'Plants', link: '/plants' },
    { text: 'Cakes/Chocolates', link: '/cakes' },
    { text: 'Others', link: '/' },
  ];

  const followArray = [
    { text: "Instagram", link: "#" },
    { text: "Facebook", link: "#" },
    { text: "Twitter", link: "#" },
  ];

  const toggleMenu = (menu) => {
    setMenuStates((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [
          key,
          key === menu && !prevState[key],
        ])
      ),
    }));
  };

  return (
    <>
      <header className="bg-gray-900 py-4 shadow-md sticky top-0 z-40">
        <div className="mx-[1.5%] flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.jpeg" alt="Logo" className="h-12 w-auto mr-2" />
            <h1 className="text-3xl text-white font-extrabold -mb-[2%]">
              {" "}
              Giftribute{" "}
            </h1>{" "}
          </div>{" "}
          <nav className="space-x-4 font-semibold">
            <a className="text-white hover:underline text-lg" href="/">
              Home{" "}
            </a>{" "}
            <div className="relative inline-block">
              <a
                className={`text-white hover:underline text-lg cursor-pointer ${
                  menuStates.isGiftsMenuOpen ? "underline" : ""
                }`}
                href="#"
                onClick={() => toggleMenu("isGiftsMenuOpen")}
              >
                Gifts{" "}
              </a>{" "}
              {menuStates.isGiftsMenuOpen && (
                <div className="absolute z-50 top-8 left-0 bg-gray-800 py-2 px-4 rounded-lg text-white text-lg">
                  {" "}
                  {giftsArray.map((item, index) => (
                    <a
                      href={item.link}
                      className="block hover:scale-105 transform duration-200 ease-in-out"
                      key={index}
                    >
                      {" "}
                      {item.text}{" "}
                    </a>
                  ))}{" "}
                </div>
              )}{" "}
            </div>{" "}
            <div className="relative inline-block">
              <a
                className={`text-white hover:underline text-lg cursor-pointer ${
                  menuStates.isFollowMenuOpen ? "underline" : ""
                }`}
                href="#"
                onClick={() => toggleMenu("isFollowMenuOpen")}
              >
                Follow{" "}
              </a>{" "}
              {menuStates.isFollowMenuOpen && (
                <div className="absolute z-10 top-8 left-0 bg-gray-800 py-2 px-4 rounded-lg text-white text-lg">
                  {" "}
                  {followArray.map((item, index) => (
                    <a
                      href={item.link}
                      className="block hover:scale-105 transform duration-200 ease-in-out"
                      key={index}
                    >
                      {" "}
                      {item.text}{" "}
                    </a>
                  ))}{" "}
                </div>
              )}{" "}
            </div>{" "}
            <a
              className="text-white hover:underline text-lg"
              href="/user/contact-us"
            >
              Contact US{" "}
            </a>{" "}
            <div className="relative inline-block">
              <a
                className={`text-white hover:underline text-lg cursor-pointer ${
                  menuStates.isProfileMenuOpen ? "underline" : ""
                }`}
                href="#"
                title="Profile"
                onClick={() => toggleMenu("isProfileMenuOpen")}
              >
                <i className="fa-solid fa-user-large"> </i>{" "}
              </a>{" "}
              {menuStates.isProfileMenuOpen && (
                <div className="absolute z-10 top-8 right-0 bg-gray-800 py-3 px-4 rounded-lg text-white text-lg">
                  {" "}
                  {profileArray.map((item, index) => (
                    <a
                      href={item.link}
                      className="block hover:scale-105 transform duration-200 ease-in-out"
                      key={index}
                    >
                      {" "}
                      {item.text}{" "}
                    </a>
                  ))}{" "}
                </div>
              )}{" "}
            </div>{" "}
            <a
              className="text-white text-2xl px-1"
              href="/my-cart"
              title="Cart"
            >
              <i className="fa-solid fa-cart-shopping"> </i>{" "}
            </a>{" "}
          </nav>{" "}
        </div>{" "}
      </header>{" "}
    </>
  );
};

export default Header;
