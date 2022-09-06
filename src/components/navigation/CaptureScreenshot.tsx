import { lighten } from "polished";
import React, { forwardRef } from "react";
import { Share } from "react-native";
import { Button } from "../../primitives";
import { useTheme } from "../../../AppContext";

const CaptureScreenshot = forwardRef((props, ref: any) => {
  const { border, contrastText } = useTheme();

  const captureViewShot = async () => {
    const imageURI = await ref.current?.capture();
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
