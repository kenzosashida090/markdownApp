import * as React from "react";
import { Button } from "./components/ui/button";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "We produce the best markdown web app !!!",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "We produce React !!!",
        1000,
        "Save your notes here !!!",
        1000,
        "The best app to make your notes !!!",
        ".......",
      ]}
      wrapper="span"
      speed={30}
      style={{
        fontSize: "2em",
        display: "inline-block",
        color: "white",
        fontFamily: "Roboto",
      }}
      repeat={Infinity}
    />
  );
};

export default function App() {
  return (
    <>
      <div className="flex flex-row justify-center align-center items-center h-screen bg-blue">
        <div className="flex flex-col size-1/2 ml-20">
          <p className="text-9xl font-bold">Welcome, Markdown React</p>
          <div className="flex flex-row space-x-5 mt-5">
            <Button className="rounded-full">Get Started</Button>
            <Button
              onClick={() => window.location.replace("/#about")}
              className="rounded-full"
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="max-w-2xl">
          <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-slate-900 border-t-0 w-96  h-48 ">
            <ExampleComponent />
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
      </div>
      <section className="flex flex-col mt-40 ml-72 ">
        <h1 id="about" className="text-8xl font-bold">
          Why Markdown React ?
        </h1>
        <div className="flex w-3/5  mt-10 items-center justify-center">
          <p className="items-center ml-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo
            molestias non modi, alias architecto nobis harum porro beatae rem
            iure libero in nemo similique nihil voluptas? Magnam, labore
            numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit quibusdam illum mollitia distinctio placeat blanditiis laborum
            quod, porro est! Voluptatem suscipit repudiandae ex ut, placeat
            doloremque cupiditate nesciunt nihil delectus!
          </p>
        </div>
      </section>
    </>
  );
}
