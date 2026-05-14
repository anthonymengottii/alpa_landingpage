import Image from "next/image";

import PageBannerMobileImage from "@/assets/page-banner-mobile.png";
import PageBannerImage from "@/assets/page-banner.png";
import { ReactNode } from "react";
import { Section } from "../section";

interface PageBannerProps {
  title: string;
  children: ReactNode;
}

export function PageLayout({ title, children }: PageBannerProps) {
  return (
    <main>
      <div className="relative flex items-center justify-between w-full h-64 bg-accent">
        <h1 className="text-2xl md:text-[32px] font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          {title}
        </h1>
        <Image
          src={PageBannerImage}
          alt=""
          className="hidden md:flex w-full h-full object-bottom"
          aria-hidden="true"
        />
        <Image
          src={PageBannerMobileImage}
          alt=""
          className="w-full h-full md:hidden object-cover"
          aria-hidden="true"
        />
      </div>

      <Section className="py-20 md:py-36">{children}</Section>
    </main>
  );
}
