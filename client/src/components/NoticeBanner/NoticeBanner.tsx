import React, { useEffect, useState } from "react";
import "./NoticeBanner.scss";

interface INoticeBannerProps {
  isVisible?: boolean;
  textContent?: string;
}

const NoticeBanner: React.FC<INoticeBannerProps> = (
  props: INoticeBannerProps
) => {
  // Default to true because if the component is called, it's probably meant to be displayed.
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [textContent, setTextContent] = useState<string>(props.textContent ?? ""); // prettier-ignore

  useEffect(() => {
    // If the text content is empty, don't display.
    !props.textContent
      ? setIsVisible(false)
      : setTextContent(props.textContent);
  }, []);

  if (isVisible) {
    return (
      <div className="NoticeBanner alert alert-info" role="alert">
        <p>{textContent}</p>
      </div>
    );
  } else {
    return <div className="NoticeBanner" />;
  }
};

export default NoticeBanner;
