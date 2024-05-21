import React from "react";

export default function Container({ children }) {
  return (
    <>
      <div className=" border-2 border-blue mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
}
