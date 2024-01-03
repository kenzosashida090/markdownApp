import * as React from "react";
import { Button } from "./components/ui/button";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "We produce the best markdown web app",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "We produce react  c;",
        1000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
export default function App() {
  return (
    <div className="flex flex-row justify-center align-center items-center h-screen">
      <div className="flex flex-col size-1/2 ml-24">
        <p className="text-9xl font-bold">Welcome, Markdown React</p>
        <div className="flex flex-row space-x-5 mt-5">
          <Button className="rounded-full">Get Started</Button>
          <Button className="rounded-full">Learn more</Button>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
        <div className="bg-gray-100 border-t-0 w-full ">
          <ExampleComponent />
        </div>
      </div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
    </div>
  );
}
