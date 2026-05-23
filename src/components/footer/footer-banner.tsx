"use client";

import FooterBannerMobile from "@/assets/footer-banner-mobile.png";
import { motion } from "motion/react";
import Image from "next/image";

export function FooterBannerImages() {
  return (
    <>
      <div className="hidden md:flex absolute top-0 right-0 h-full bottom-0 -z-[1] w-full overflow-hidden">
        <motion.svg
          width="1921"
          height="644"
          viewBox="0 0 1921 644"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20 lg:opacity-60 object-right object-cover pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <g clipPath="url(#clip0_footer_banner)">
            <motion.path
              d="M2117.79 724.145H1995.94C1977.55 724.145 1962.63 709.223 1962.63 690.825V263.013C1962.63 244.614 1947.72 229.692 1929.33 229.692H1734.68C1711.11 229.692 1692 210.569 1692 186.99V0.320915C1692 -18.078 1677.08 -33 1658.69 -33H1341.72C1328.26 -33 1316.02 -24.8871 1310.88 -12.3193L1151.67 376.702C1137.99 410.132 1131 445.952 1131 482.062V953.806C1131 972.205 1145.91 987.127 1164.3 987.127H1220.45C1226.93 987.127 1232.69 982.998 1234.75 976.841L1536.99 245.628C1540.68 236.573 1549.55 230.706 1559.22 230.706H1648.27C1671.83 230.706 1690.95 249.829 1690.95 273.408V733.526C1690.95 873.438 1804.36 986.946 1944.24 986.946H2117.82C2136.21 986.946 2151.13 972.024 2151.13 953.625V757.43C2151.13 739.031 2136.21 724.109 2117.82 724.109"
              stroke="url(#paint0_linear_footer_banner)"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: 3.5, ease: "easeInOut" },
                    opacity: { duration: 1.5, ease: "easeOut" },
                  },
                },
              }}
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_footer_banner"
              x1="1641.06"
              y1="-34.8109"
              x2="1238.76"
              y2="816.099"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBE7D4" />
              <stop offset="0.442785" stopColor="#E8441F" />
              <stop offset="0.685979" stopColor="#FBE7D4" />
            </linearGradient>
            <clipPath id="clip0_footer_banner">
              <rect width="1921" height="644" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
      </div>

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
