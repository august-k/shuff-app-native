import Matter from "matter-js";
import { rgba } from "polished";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { G, Path, Polygon } from "react-native-svg";
import { useTheme } from "../../AppContext";

export const CourtBody = (x: number, y: number, w: number, h: number) => {
  return Matter.Bodies.rectangle(x, y, w, h, { isStatic: true });
};

const Court: React.FC = () => {
  const {
    board: fill,
    border: stroke,
    biscuitColorLeft,
    biscuitColorRight,
  } = useTheme();

  return (
    <SafeAreaView style={{ zIndex: 1 }}>
      <Svg
        x="0px"
        y="0px"
        viewBox="0 0 72 126"
        preserveAspectRatio="xMidYMin meet"
        stroke={stroke}
      >
        <G id="Biscuit_Colors">
          <Polygon
            id="Biscuit_Color_Left"
            points="3.9,12.3 0.1,18 5.5,18.2 "
            fill={rgba(biscuitColorLeft, 0.8)}
            stroke="transparent"
          />
          <Polygon
            id="Biscuit_Color_Right"
            points="66.5,18.2 71.9,18 68.1,12.3 "
            fill={rgba(biscuitColorRight, 0.8)}
            stroke="transparent"
          />
        </G>
        <G id="court">
          <G id="Background_Scoring_Area">
            <Polygon
              id="Kitchen"
              fill={fill}
              stroke="transparent"
              points="1.4,1 70.7,1 66.1,18 5.4,18 	"
            />
            <Polygon
              id="Top_10_Border"
              fill={fill}
              stroke="transparent"
              points="25.41,91 46.58,91 36,122.82 	"
            />
            <Polygon
              id="Left_8_Border"
              fill={fill}
              stroke="transparent"
              points="35.49,55 13.43,55 25.07,90 35.49,90 	"
            />
            <Polygon
              id="Right_8_Border"
              fill={fill}
              stroke="transparent"
              points="36.49,55 58.54,55 46.91,90 36.49,90 	"
            />
            <Polygon
              id="Right_7_Border"
              fill={fill}
              stroke="transparent"
              points="70.49,18.99 36.49,19 36.48,53.98 58.86,53.98 	"
            />
            <Polygon
              id="Left_7_Border"
              fill={fill}
              stroke="transparent"
              points="1.48,18.99 35.47,19 35.49,53.98 13.1,53.98 	"
            />
          </G>
          <Polygon
            id="Kitchen_Triangle"
            fill={stroke}
            stroke="transparent"
            points="33.97,2 37.98,2 36,18.44 "
          />
          <G id="Scoring_Numbers">
            <G id="OFF">
              <Path
                id="O"
                fill={stroke}
                stroke="transparent"
                d="M28.24,9.03c0,0.45-0.08,0.87-0.25,1.25c-0.17,0.39-0.39,0.72-0.69,1.01c-0.29,0.29-0.64,0.51-1.05,0.68
			c-0.41,0.16-0.86,0.24-1.35,0.24c-0.49,0-0.93-0.08-1.34-0.24c-0.41-0.16-0.76-0.39-1.06-0.68c-0.3-0.29-0.53-0.62-0.69-1.01
			s-0.25-0.8-0.25-1.25c0-0.45,0.08-0.87,0.25-1.25c0.17-0.39,0.4-0.72,0.69-1.01c0.3-0.29,0.65-0.51,1.06-0.68
			c0.41-0.16,0.86-0.24,1.34-0.24c0.49,0,0.94,0.08,1.35,0.24c0.41,0.16,0.76,0.39,1.05,0.68s0.52,0.63,0.69,1.01
			C28.16,8.17,28.24,8.58,28.24,9.03z M26.6,9.03c0-0.24-0.04-0.46-0.14-0.66s-0.21-0.38-0.37-0.53c-0.15-0.15-0.33-0.27-0.54-0.35
			c-0.21-0.08-0.42-0.12-0.65-0.12c-0.23,0-0.45,0.04-0.65,0.12c-0.21,0.08-0.39,0.2-0.54,0.35c-0.16,0.15-0.28,0.33-0.37,0.53
			S23.2,8.79,23.2,9.03c0,0.24,0.05,0.46,0.14,0.66c0.09,0.2,0.21,0.38,0.37,0.53s0.34,0.27,0.54,0.35
			c0.21,0.08,0.42,0.12,0.65,0.12c0.23,0,0.45-0.04,0.65-0.12c0.21-0.08,0.39-0.2,0.54-0.35s0.28-0.33,0.37-0.53
			C26.55,9.49,26.6,9.27,26.6,9.03z"
              />
              <Path
                id="Right_F"
                fill={stroke}
                stroke="transparent"
                d="M17.11,10.72H19V9.71h-1.72V8.38H19V6.01h1.57v6.03h-3.46V10.72z"
              />
              <Path
                id="Left_F"
                fill={stroke}
                stroke="transparent"
                d="M12.72,10.72h1.89V9.71h-1.72V8.38h1.72V6.01h1.57v6.03h-3.46V10.72z"
              />
            </G>
            <G id="Kitchen_10">
              <Path
                id="Kitchen_1"
                fill={stroke}
                stroke="transparent"
                d="M56.15,10.72h0.88v1.33h-2.45V6.01h1.57V10.72z"
              />
              <Path
                id="Kitchen_0"
                fill={stroke}
                stroke="transparent"
                d="M53.67,9.03c0,0.45-0.08,0.87-0.25,1.25c-0.17,0.39-0.39,0.72-0.69,1.01c-0.29,0.29-0.64,0.51-1.05,0.68
			c-0.41,0.16-0.86,0.24-1.35,0.24c-0.49,0-0.93-0.08-1.34-0.24c-0.41-0.16-0.76-0.39-1.06-0.68c-0.3-0.29-0.53-0.62-0.69-1.01
			s-0.25-0.8-0.25-1.25c0-0.45,0.08-0.87,0.25-1.25c0.17-0.39,0.4-0.72,0.69-1.01c0.3-0.29,0.65-0.51,1.06-0.68
			c0.41-0.16,0.86-0.24,1.34-0.24c0.49,0,0.94,0.08,1.35,0.24c0.41,0.16,0.76,0.39,1.05,0.68s0.52,0.63,0.69,1.01
			C53.59,8.17,53.67,8.58,53.67,9.03z M52.03,9.03c0-0.24-0.04-0.46-0.14-0.66s-0.21-0.38-0.37-0.53c-0.15-0.15-0.33-0.27-0.54-0.35
			c-0.21-0.08-0.42-0.12-0.65-0.12c-0.23,0-0.45,0.04-0.65,0.12c-0.21,0.08-0.39,0.2-0.54,0.35c-0.16,0.15-0.28,0.33-0.37,0.53
			s-0.14,0.42-0.14,0.66c0,0.24,0.05,0.46,0.14,0.66c0.09,0.2,0.21,0.38,0.37,0.53s0.34,0.27,0.54,0.35
			c0.21,0.08,0.42,0.12,0.65,0.12c0.23,0,0.45-0.04,0.65-0.12c0.21-0.08,0.39-0.2,0.54-0.35s0.28-0.33,0.37-0.53
			C51.99,9.49,52.03,9.27,52.03,9.03z"
              />
            </G>
            <G id="Top_10">
              <Path
                id="Top_1"
                fill={stroke}
                stroke="transparent"
                d="M40.08,100.81h0.88v1.33h-2.45v-6.03h1.57V100.81z"
              />
              <Path
                id="Top_1"
                fill={stroke}
                stroke="transparent"
                d="M37.6,99.13c0,0.45-0.08,0.87-0.25,1.25c-0.17,0.39-0.39,0.72-0.69,1.01c-0.29,0.29-0.64,0.51-1.05,0.68
			c-0.41,0.16-0.86,0.24-1.35,0.24c-0.49,0-0.93-0.08-1.34-0.24c-0.41-0.16-0.76-0.39-1.06-0.68c-0.3-0.29-0.53-0.62-0.69-1.01
			s-0.25-0.8-0.25-1.25c0-0.45,0.08-0.87,0.25-1.25c0.17-0.39,0.4-0.72,0.69-1.01c0.3-0.29,0.65-0.51,1.06-0.68
			c0.41-0.16,0.86-0.24,1.34-0.24c0.49,0,0.94,0.08,1.35,0.24c0.41,0.16,0.76,0.39,1.05,0.68s0.52,0.63,0.69,1.01
			C37.52,98.26,37.6,98.68,37.6,99.13z M35.96,99.13c0-0.24-0.04-0.46-0.14-0.66c-0.09-0.2-0.21-0.38-0.37-0.53
			s-0.33-0.27-0.54-0.35c-0.21-0.08-0.42-0.12-0.65-0.12c-0.23,0-0.45,0.04-0.65,0.12c-0.21,0.08-0.39,0.2-0.54,0.35
			s-0.28,0.33-0.37,0.53c-0.09,0.2-0.14,0.42-0.14,0.66c0,0.24,0.05,0.46,0.14,0.66c0.09,0.2,0.21,0.38,0.37,0.53
			s0.34,0.27,0.54,0.35c0.21,0.08,0.42,0.12,0.65,0.12c0.23,0,0.45-0.04,0.65-0.12c0.21-0.08,0.39-0.2,0.54-0.35
			s0.28-0.33,0.37-0.53C35.91,99.59,35.96,99.37,35.96,99.13z"
              />
            </G>
            <Path
              id="Left_8"
              fill={stroke}
              stroke="transparent"
              d="M29.09,70.02c0.63,0.26,0.94,0.71,0.94,1.33c0,0.26-0.05,0.49-0.15,0.69c-0.1,0.21-0.24,0.38-0.42,0.53
		c-0.18,0.15-0.39,0.26-0.65,0.34c-0.25,0.08-0.53,0.12-0.84,0.12c-0.3,0-0.58-0.04-0.84-0.12c-0.25-0.08-0.47-0.2-0.65-0.34
		c-0.18-0.15-0.32-0.33-0.42-0.53c-0.1-0.21-0.15-0.44-0.15-0.69c0-0.16,0.02-0.3,0.05-0.43c0.03-0.12,0.09-0.24,0.16-0.34
		c0.08-0.1,0.18-0.2,0.3-0.29s0.28-0.18,0.47-0.26c-0.82-0.32-1.23-0.84-1.23-1.55c0-0.26,0.06-0.49,0.17-0.71
		c0.11-0.22,0.27-0.41,0.48-0.57s0.45-0.29,0.73-0.38c0.28-0.09,0.59-0.14,0.92-0.14c0.33,0,0.63,0.04,0.91,0.13
		c0.28,0.09,0.52,0.21,0.73,0.37s0.37,0.35,0.49,0.57s0.18,0.46,0.18,0.72C30.28,69.2,29.89,69.72,29.09,70.02z M28.7,68.66
		c0-0.1-0.02-0.2-0.06-0.29s-0.09-0.17-0.15-0.24c-0.06-0.07-0.14-0.12-0.23-0.16c-0.09-0.04-0.18-0.06-0.28-0.06
		c-0.1,0-0.19,0.02-0.28,0.06c-0.09,0.04-0.17,0.09-0.23,0.16c-0.07,0.07-0.12,0.14-0.16,0.23c-0.04,0.09-0.06,0.18-0.06,0.28
		c0,0.2,0.07,0.37,0.21,0.52c0.14,0.14,0.31,0.21,0.51,0.21c0.2,0,0.37-0.07,0.51-0.21C28.63,69.03,28.7,68.86,28.7,68.66z
		 M28.64,71.33c0-0.19-0.06-0.35-0.19-0.48s-0.29-0.2-0.47-0.2c-0.1,0-0.18,0.02-0.26,0.06c-0.08,0.04-0.15,0.09-0.21,0.15
		c-0.06,0.06-0.1,0.13-0.14,0.21c-0.03,0.08-0.05,0.16-0.05,0.25c0,0.18,0.06,0.34,0.19,0.47c0.13,0.13,0.29,0.2,0.47,0.2
		s0.34-0.06,0.47-0.19S28.64,71.51,28.64,71.33z"
            />
            <Path
              fill={stroke}
              stroke="transparent"
              id="Right_8"
              d="M45.09,70.02c0.63,0.26,0.94,0.71,0.94,1.33c0,0.26-0.05,0.49-0.15,0.69c-0.1,0.21-0.24,0.38-0.42,0.53
		c-0.18,0.15-0.39,0.26-0.65,0.34c-0.25,0.08-0.53,0.12-0.84,0.12c-0.3,0-0.58-0.04-0.84-0.12c-0.25-0.08-0.47-0.2-0.65-0.34
		c-0.18-0.15-0.32-0.33-0.42-0.53c-0.1-0.21-0.15-0.44-0.15-0.69c0-0.16,0.02-0.3,0.05-0.43c0.03-0.12,0.09-0.24,0.16-0.34
		c0.08-0.1,0.18-0.2,0.3-0.29s0.28-0.18,0.47-0.26c-0.82-0.32-1.23-0.84-1.23-1.55c0-0.26,0.06-0.49,0.17-0.71
		c0.11-0.22,0.27-0.41,0.48-0.57s0.45-0.29,0.73-0.38c0.28-0.09,0.59-0.14,0.92-0.14c0.33,0,0.63,0.04,0.91,0.13
		c0.28,0.09,0.52,0.21,0.73,0.37s0.37,0.35,0.49,0.57s0.18,0.46,0.18,0.72C46.28,69.2,45.89,69.72,45.09,70.02z M44.7,68.66
		c0-0.1-0.02-0.2-0.06-0.29s-0.09-0.17-0.15-0.24c-0.06-0.07-0.14-0.12-0.23-0.16c-0.09-0.04-0.18-0.06-0.28-0.06
		c-0.1,0-0.19,0.02-0.28,0.06c-0.09,0.04-0.17,0.09-0.23,0.16c-0.07,0.07-0.12,0.14-0.16,0.23c-0.04,0.09-0.06,0.18-0.06,0.28
		c0,0.2,0.07,0.37,0.21,0.52c0.14,0.14,0.31,0.21,0.51,0.21c0.2,0,0.37-0.07,0.51-0.21C44.63,69.03,44.7,68.86,44.7,68.66z
		 M44.64,71.33c0-0.19-0.06-0.35-0.19-0.48s-0.29-0.2-0.47-0.2c-0.1,0-0.18,0.02-0.26,0.06c-0.08,0.04-0.15,0.09-0.21,0.15
		c-0.06,0.06-0.1,0.13-0.14,0.21c-0.03,0.08-0.05,0.16-0.05,0.25c0,0.18,0.06,0.34,0.19,0.47c0.13,0.13,0.29,0.2,0.47,0.2
		s0.34-0.06,0.47-0.19S44.64,71.51,44.64,71.33z"
            />
            <Path
              id="Left_7"
              fill={stroke}
              stroke="transparent"
              d="M22.79,39.04h2.52v1.33h-4.95l3.46-6.03h1.73L22.79,39.04z"
            />
            <Path
              id="Right_7"
              fill={stroke}
              stroke="transparent"
              d="M48.79,39.04h2.52v1.33h-4.95l3.46-6.03h1.73L48.79,39.04z"
            />
          </G>
          <Path
            id="Board_Lines"
            d="M5.5,18.5l-4.7-18h70.6l-4.9,18 M6.5,18.5H0.8L36,124.4L71.2,18.5l-4.7,0H6.5z M36,18.5v72
	 M12.7,54.5h46.5 M24.5,90.5h22.8"
          />
        </G>
      </Svg>
    </SafeAreaView>
  );
};

export default Court;
