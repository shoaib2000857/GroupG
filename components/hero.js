import React from "react";

export function HeroSection() {
  return (
    <div className="bg-green-200 text-green-900 p-8">
      <h1 className="text-2xl font-bold text-green-700">
        Gen AI Exchange Hackathon by Google
      </h1>
      <form className="mt-2">
        <input
          type="text"
          placeholder="Enter a Text"
          name="promt"
          className="bg-green-100 text-green-900 p-2 rounded"
        />
        <br />
        <button className="btn btn-primary bg-green-500 hover:bg-green-300 rounded m-1 p-2">
          Submit
        </button>
      </form>
    </div>
  );
}