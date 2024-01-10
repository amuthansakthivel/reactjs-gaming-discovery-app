import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";

type LikeProps = {
  onClick: () => void;
};

function Like({ onClick }: LikeProps) {
  const [like, setLike] = useState(false);

  function toggle() {
    setLike(!like);
    onClick();
  }

  if (like) {
    return <FcLike color={"#ff6B81"} size={40} onClick={toggle} />;
  }
  return <FcLikePlaceholder color={"#ff6B81"} size={40} onClick={toggle} />;
}
export default Like;
