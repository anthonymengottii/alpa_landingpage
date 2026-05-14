"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

import { BancoDoBrasil } from "@/assets/svg/banco-do-brasil";
import { Bradesco } from "@/assets/svg/bradesco";
import { Elo } from "@/assets/svg/elo";
import { Inter } from "@/assets/svg/inter";
import { Mastercard } from "@/assets/svg/mastercard";
import { Pix } from "@/assets/svg/pix";
import { Visa } from "@/assets/svg/visa";

const brands = [
  { component: Inter, label: "inter" },
  { component: Bradesco, label: "Bradesco" },
  { component: Mastercard, label: "Mastercard" },
  { component: BancoDoBrasil, label: "BancoDoBrasil" },
  { component: Pix, label: "Pix" },
  { component: Visa, label: "Visa" },
  { component: Elo, label: "Elo" },
  { component: Inter, label: "inter" },
  { component: Bradesco, label: "Bradesco" },
  { component: Mastercard, label: "Mastercard" },
  { component: BancoDoBrasil, label: "BancoDoBrasil" },
  { component: Pix, label: "Pix" },
  { component: Visa, label: "Visa" },
  { component: Elo, label: "Elo" },
];

export function Partners() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        watchDrag: false,
      }}
      className="w-full pt-16 pb-20 "
      plugins={[
        AutoScroll({
          direction: "forward",
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          stopOnInteraction: false,
          speed: 0.7,
        }),
      ]}
    >
      <CarouselContent>
        {brands.map(({ component: Brand, label }, index) => (
          <CarouselItem
            key={`${label}${index}`}
            className="max-w-[192px] pl-6 md:pl-8"
          >
            <Card className="bg-background border-border/20 border px-4 py-6 md:py-8 md:px-6 h-[94px] ">
              <CardContent className="flex items-center justify-center p-0 w-full h-full">
                <Brand className="" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
