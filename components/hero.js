import React from "react";

export function HeroSection() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-500">
        Gen AI Exchange Hackathon by Google
      </h1>
      <form className="mt-2  ">

        <input
          type="text"
          placeholder="Enter a Text"
          name="promt"
        />
        <br />
        <button className="btn btn-primary bg-blue-400 hover:bg-blue-600 rounded m-1 p-2">
          Submit
        </button>

      </form>
    </div>
  );
}
