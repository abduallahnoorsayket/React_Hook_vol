import React from "react";
import { UserContext, channelContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context value {user}. channel Name {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
