import { useEffect, useState } from "react";
import "./_copyright.scss";

interface CopyrightProps {
  author: string;
}

export const Copyright = ({ author }: CopyrightProps) => {
  const [numberOfChars, setNumberOfChars] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(false);
    setNumberOfChars(0);

    setTimeout(() => {
      if (author) {
        setNumberOfChars(author.length);
        setAnimation(true);
      }
    }, 1000);
  }, [author]);

  return (
    <div className="copyright">
      <p className="copyright__tag">Photography by</p>
      <p
        className={
          "copyright__author " + (animation && "copyright__author--animated")
        }
        style={{
          width: `${animation ? numberOfChars : `0`}ch`,
          animationTimingFunction: `steps(${numberOfChars}, end)`,
        }}
      >
        {author}
      </p>
    </div>
  );
};
