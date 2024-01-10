import { ReactNode, useState } from "react";

type ExpandableTextProps = {
  children: ReactNode;
  maxLength?: number;
};

function ExpandableText({ children, maxLength = 10 }: ExpandableTextProps) {
  const [isExpanded, setExpanded] = useState(false);

  if (children!.toString().length < maxLength) return <div>{children}</div>;
  const text = isExpanded
    ? children
    : children!.toString().slice(0, maxLength) + "...";
  const buttonText = isExpanded ? "Less" : "More";

  return (
    <div>
      <p>
        {text}
        {children!.toString().length > maxLength && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setExpanded(!isExpanded)}
          >
            {buttonText}
          </button>
        )}
      </p>
    </div>
  );
}

export default ExpandableText;
