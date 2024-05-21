import React from "react";

import { Disclosure } from "@headlessui/react";
// import { BellIcon } from "@heroicons/react/24/outline";
import Nav from "./Nav";
import Container from "./Container";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Profile() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <Container>
        <Disclosure className="bg-white shadow">
          <div className="flex pt-4 gap-1 border-t border-gray-200 pb-3 ">
            <div className=" space-y-1 w-fit h-fit min-w-max ">
              <Disclosure.Button
                as={Link}
                to="/"
                className="block px-4  text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Edit Profile
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Settings
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/Login"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Sign out
              </Disclosure.Button>
            </div>
            <div className="  flex-wrap pb-auto flex  px-4">
              <div className="flex-shrink-0 ">
                <img
                  className="h-10 w-10 mr-3 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3  ">
                <div className="text-base font-medium text-gray-800">
                  <div className="  text-sm font-medium text-gray-500">
                    <label htmlFor="nickname">Nickname:</label>
                    <p className="mb-4">Tommy </p>
                  </div>
                  <div className="  text-sm font-medium text-gray-500">
                    <label htmlFor="First Name">First Name: </label>
                    <p className="mb-4">Tom </p>
                  </div>

                  <div className="  text-sm font-medium text-gray-500">
                    <label htmlFor="Name">Last Name: </label>
                    <p className="mb-4">Cook</p>
                  </div>
                </div>
                <div className="  text-sm font-medium text-gray-500">
                  <label htmlFor="Email">Email: </label>
                  <p className="mb-4">tom@example.com</p>
                </div>
                <div className=" text-sm font-medium text-gray-500">
                  <label htmlFor="phone">Phone:</label>
                  <p>09056644673</p>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
}
