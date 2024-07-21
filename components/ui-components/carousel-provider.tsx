"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import image1 from "@/assets/cat.png";
import image2 from "@/assets/dreamer.png";
import image3 from "@/assets/lawrence.png";
import image4 from "@/assets/playground.jpg";
import image5 from "@/assets/yoda.png";
import Image from "next/image";

const images = [image1, image2, image3, image4, image5];

export default function CarouselProvider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=" w-full h-fit flex items-center">
      <Carousel setApi={setApi} className="w-fit h-fit">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-filt h-fit"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-2 left-8 flex items-center space-x-2 p-4">
          <CarouselPrevious className="m-0" />
          <span className="text-sm">
            Slide {current} of {count}
          </span>
          <CarouselNext className="m-0" />
        </div>
      </Carousel>
    </div>
  );
}
