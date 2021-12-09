import React, { useEffect, useState } from "react";
import "./NoticeBanner.scss";

interface INoticeBannerProps {
  isVisible: boolean;
  textContent?: string;
}

const NoticeBanner: React.FC<INoticeBannerProps> = (
  props: INoticeBannerProps
) => {
  // Default to true because if the component is called, it's probably meant to be displayed.
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [textContent, setTextContent] = useState<string | undefined>(props.textContent); // prettier-ignore

  useEffect(() => {
    console.log(props.textContent);

    // If the text content is empty, don't display.
    if (props.isVisible && !props.textContent) {
      // Courtesy text content.
      console.error(
        "NoticeBanner was meant to be displayed, but no text content was received."
      );
      setTextContent("Text content not set!");
      setIsVisible(false);
    } else {
      setTextContent(props.textContent)
      //prettier-ignore
    }
  }, []);

  if (isVisible) {
    return (
      <div className="NoticeBanner">
        <p>{textContent}</p>
      </div>
    );
  } else {
    return <div className="NoticeBanner" />;
  }
};

export default NoticeBanner;
