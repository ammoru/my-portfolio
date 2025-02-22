"use client";

import React from "react";
import { companies, testimonials, skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="">
      <h1 className="heading mb-8">
        My
        <span className="text-purple">Skills </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* i comment it  */}

        {/* <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
        <LampContainer>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 ">
            {skills.map((company) => (
              <React.Fragment key={company.id}>
                <div className="inline-flex flex-col items-center mx-4 animate-shimmer">
                  <Image
                  src={company.img || "/js.svg"}
                  alt={company.name}
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="md:w-10 w-5"
                  />
                  <div className="md:w-24 w-20 text-center">
                  <h1 className="text-xs md:text-sm">{company.name}</h1>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </LampContainer>
      </div>
    </section>
  );
};

export default Clients;
