import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="border border-blue-400 rounded-xl max-w-[600px] mx-auto mt-10 flex items-center justify-center p-6">
      <div className="space-y-4">
        <h1 className="text-2xl text-center font-semibold">
          Join as a Business or Commenter
        </h1>
        <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
          <span className="text-lg">I am a business creating posts</span>
          <input
            type="radio"
            name="userType"
            value="business"
            className="form-radio h-5 w-5 text-blue-600"
          />
        </div>
        <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
          <span className="text-lg">I am a commenter</span>
          <input
            type="radio"
            name="userType"
            value="commenter"
            className="form-radio h-5 w-5 text-blue-600"
          />
        </div>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create Account
        </button>
        <div className="text-center">
          <span>Already have an account? </span>
          <Link to="/auth/login" className="text-blue-500 underline hover:text-blue-600">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
