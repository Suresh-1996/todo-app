import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        {/* Logo */}
        <img
          src="/logo.png" // Replace with your logo path
          alt="Task Manager Logo"
          className="w-80 h-80 mx-auto mb-4 animate-pulse"
        />
        {/* Typing Animation */}
        <h1 className="text-2xl font-bold text-purple-800">
          Welcome to{" "}
          <span className="inline-block font-mono overflow-hidden whitespace-nowrap border-r-4 border-blue-500 animate-typing">
            Task Manager
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
