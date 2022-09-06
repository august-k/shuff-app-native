import { lighten } from "polished";
import React, { useRef, forwardRef } from "react";
import { Share } from "react-native";
import { Button } from "../../primitives";
import { useTheme } from "../../../AppContext";

const CaptureScreenshot = forwardRef((props, ref) => {
  const { border, contrastText } = useTheme();
  const courtRef = useRef(null);

  const captureViewShot = async () => {
    const imageURI = await courtRef.current?.capture();
    Share.share({ title: "a shuff.app screenshot", url: imageURI });
  };

  return (
    <Button
      style={{ marginTop: 16 }}
      backgroundColor={lighten(0.05, border)}
      textColor={contrastText}
      onPress={captureViewShot}
    >
      Save a Screenshot
    </Button>
  );
});

export default CaptureScreenshot;
