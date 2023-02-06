import React from "react";

function Title() {
  console.log("Rendering Tilte");
  return (
    <div>
      <h2>Use callback Hook</h2>
    </div>
  );
}

export default React.memo(Title);
