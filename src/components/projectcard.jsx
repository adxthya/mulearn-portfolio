import React from "react";

export default function ProjectCard({ title, desc, image }) {
  return (
    <div className="border-2 border-gray-500 rounded-lg w-fit max-w-80 flex flex-col gap-5 mx-auto p-5 justify-between">
      <div className="object-cover">
        <img
          src={image}
          alt="ecommerce app"
          className="object-cover h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="flex justify-between">
        <button className="p-2 border-2 border-gray-500 rounded-md hover:bg-gray-700">
          <a href="#project">Github</a>
        </button>
        <button className="p-2 border-2 border-gray-500 rounded-md hover:bg-gray-700">
          <a href="#project">Host</a>
        </button>
      </div>
    </div>
  );
}
