import React, { useContext } from "react";
import { channelContext, UserContext } from "../../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(channelContext);

  return (
    <div>
      {user} - {channel}
      {/* <ComponentF /> */}
    </div>
  );
}

export default ComponentE;
