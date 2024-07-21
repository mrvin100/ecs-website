"use client";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full xl:max-w-[1200px] md:max-w-[680px] sm:max-w-xl max-w-[20rem]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="grid md:grid-cols-[repeat(auto-fit,minmax(30rem,35rem))] grid-cols-[1fr] place-content-center justify-between md:justify-center items-center max-w-screen-xl mx-auto px-4 py-8 xl:gap-0 lg:gap-8 md:gap-4  md:min-h-[70vh]">
                <div className="text-center md:text-left">
                  <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                    Payements tool for software companies
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">
                    From checkout to global sales tax compliance, companies
                    around the world use Flowbite to simplify their payment
                    stack.
                  </p>
                  <Button>
                    Hire us
                    <ArrowRight />
                  </Button>
                </div>
                <div className="hidden lg:mt-0 md:flex">
                  <Image
                    width="500"
                    height="5000"
                    src={"/phone-mockup.png"}
                    alt="mockup"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:flex hidden" />
      <CarouselNext className="md:flex hidden" />
    </Carousel>
  );
}

const Hero = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 grid place-content-center"
      id="home"
    >
      <CarouselPlugin />
    </section>
  );
};

export default Hero;
