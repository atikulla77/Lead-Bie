// type WebLogoProps = {
//   width?: number;
//   height?: number;
//   color?: string;
//   customClass?: string;
// };
// const WebLogo: React.FC<WebLogoProps> = ({
//   width = 175,
//   height = 28,
//   color = "#ffffff",
//   customClass,
// }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={width}
//       height={height}
//       viewBox="0 0 175 28"
//       className={`${customClass}`}
//       fill="none"
//     >
//       <text
//         x="0"
//         y="22"
//         fontFamily="Poppins, sans-serif"
//         fontWeight="700"
//         fontSize="25"
//         fill={color}
//       >
//         <tspan fill={color}>PENTA</tspan>
//         <tspan fill="#ffff00">BITE</tspan>
//       </text>
//     </svg>
//   );
// };

// export default WebLogo;

type WebLogoProps = {
  width?: number;
  height?: number;
  color?: string;
  customClass?: string;
};

const WebLogo: React.FC<WebLogoProps> = ({
  width = 175,
  height = 28,
  color = "#ffffff",
  customClass,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 175 28"
      className={customClass}
      fill="none"
    >
      {/* Shadow Filter */}
      <defs>
        <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2.8"   // equal to 5px blur (5/2)
            floodColor="#00000030"
          />
        </filter>
      </defs>

      <text
        x="0"
        y="22"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="25"
      >
        <tspan fill={color}>PENTA </tspan>

        {/* BITE with shadow */}
        <tspan
          fill="#ffff00"
          filter="url(#textShadow)"
        >
          BITE
        </tspan>
      </text>
    </svg>
  );
};

export default WebLogo;
