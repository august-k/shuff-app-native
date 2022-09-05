import { lighten } from "polished";
import React, { useRef } from "react";
import { Share } from "react-native";
import ViewShot from "react-native-view-shot";
import { Button } from "../../primitives";
import { useTheme } from "../../../AppContext";

const CaptureScreenshot: React.FC = () => {
  const { border, contrastText } = useTheme();

  const viewShotRef = useRef(null);
  const captureViewShot = async () => {
    const imageURI = await viewShotRef.current.capture();
    Share.share({ title: "a shuff.app screenshot", url: imageURI });
  };

  return (
    <ViewShot
      ref={viewShotRef}
      options={{
        format: "jpg",
        quality: 1.0,
      }}
    >
      <Button
        style={{ marginTop: 16 }}
        backgroundColor={lighten(0.05, border)}
        textColor={contrastText}
        onPress={captureViewShot}
      >
        Save a Screenshot
      </Button>
    </ViewShot>
  );
};

export default CaptureScreenshot;
