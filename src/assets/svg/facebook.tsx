import type { SVGProps } from "react";

interface SafeProps extends SVGProps<SVGSVGElement> {}

export function Facebook({ ...rest }: SafeProps) {
  return (
    <svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M30.334 16C30.334 23.2 24.934 29.1 18.034 29.9V19.1H21.334L21.834 15.3H18.134V13C18.134 11.9 18.434 11.2 20.034 11.2H22.034V7.7C21.034 7.6 20.134 7.6 19.134 7.6C16.234 7.6 14.234 9.4 14.234 12.6V15.4H10.934V19.2H14.234V29.9C7.43398 28.8 2.33398 23 2.33398 16C2.33398 8.3 8.63398 2 16.334 2C24.034 2 30.334 8.3 30.334 16Z"
        fill="#FF3D02"
      />
    </svg>
  );
}
