import { CSSProperties } from "styled-components";
import Svg, { G, Polygon } from "react-native-svg";
import { Quadrilateral } from "../utils";

export type HideAreaProps = {
    fill?: CSSProperties["fill"];
    stroke?: CSSProperties["stroke"];
    polygonPoints?: Quadrilateral;
};

const HideArea: React.FC<HideAreaProps> = ({
    fill,
    stroke,
    polygonPoints,
}) => {
    const pointString = `${polygonPoints.a.x},${polygonPoints.a.y} `
        + `${polygonPoints.b.x},${polygonPoints.b.y} `
        + `${polygonPoints.c.x},${polygonPoints.c.y} `
        + `${polygonPoints.d.x},${polygonPoints.d.y}`

    return (
        <Svg
            x="0px"
            y="0px"
            viewBox="0 0 72 126"
            preserveAspectRatio="xMidYMin meet"
            stroke={stroke}
        >
            <G id="hiding_area">
                <Polygon
                    id="Hidden_Area"
                    fill={fill}
                    stroke={stroke}
                    points={pointString}
                />
            </G>
        </Svg>
    )
};