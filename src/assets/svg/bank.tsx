import type { SVGProps } from "react";

interface SafeProps extends SVGProps<SVGSVGElement> {}

export function Bank({ ...rest }: SafeProps) {
  return (
    <svg
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_288_437)">
        <path d="M22.0013 20.5557H0V22.389H22.0013V20.5557Z" fill="#FDE2CB" />
        <path
          d="M22.0013 9.55627V7.63955C22.0013 6.63328 21.4521 5.70735 20.5686 5.22527L12.3181 0.72542C11.4974 0.276423 10.5039 0.276423 9.68315 0.72542L1.43266 5.22527C0.549173 5.70735 0 6.63328 0 7.63955V9.55627H2.75016V16.8889H0.916577V18.7223H21.0847V16.8889H19.2511V9.55627H22.0013ZM7.33391 16.8889H4.58375V9.55627H7.33391V16.8889ZM12.8342 16.8889H9.16706V9.55627H12.8342V16.8889ZM17.4175 16.8889H14.6674V9.55627H17.4175V16.8889ZM1.83358 7.7229V7.63955C1.83358 7.30398 2.01664 6.99548 2.31099 6.83479L10.5615 2.33493C10.8352 2.18584 11.1661 2.18584 11.4398 2.33493L19.6903 6.83479C19.9846 6.99548 20.1677 7.30398 20.1677 7.63955V7.7229H1.83358Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_288_437">
          <rect
            width={22}
            height={22}
            fill="white"
            transform="translate(0 0.388672)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
