import React from "react";
import { Link } from "react-router-dom";

interface LeeButtonProps {
  pathToURL: string;
  displayText: string;
  fontAwesomeIconCode: string;
  bootstrapBtnMode?: string;
}

const LeeButton: React.FC<LeeButtonProps> = (props: LeeButtonProps) => {
  return (
    <div className="LeeButton">
      <Link to={`${props.pathToURL}`}>
        <button
          type="button"
          className={`btn btn-${
            props.bootstrapBtnMode ?? "secondary"
          } btn-lg btn-block mb-2`}
        >
          {props.displayText}
        </button>
      </Link>
    </div>
  );
};

export default LeeButton;
