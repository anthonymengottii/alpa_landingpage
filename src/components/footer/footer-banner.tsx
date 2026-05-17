"use client";

import FooterBannerMobile from "@/assets/footer-banner-mobile.png";
import FooterBanner from "@/assets/footer-banner.png";
import { motion } from "motion/react";
import Image from "next/image";

export function FooterBannerImages() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="hidden md:flex absolute top-0 right-0 h-full bottom-0 -z-[1] w-full overflow-hidden"
      >
        <Image
          src={FooterBanner}
          alt=""
          width={1920}
          height={600}
          className="w-full h-full opacity-20 lg:opacity-60 object-right object-cover 2xl:object-fill"
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="absolute top-0 h-full left-0 w-full right-0 bottom-0 -z-[2] md:hidden"
      >
        <Image
          src={FooterBannerMobile}
          alt=""
          width={768}
          height={600}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </motion.div>
    </>
  );
}
