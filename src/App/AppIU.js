import React from "react";
import { IssuestManagerContext } from "../IssuestManagerContext";
import { FloatMenu } from "../TopBar/FloatMenu";
import { TopBar } from "../TopBar";

function AppIU() {
  const { openFloatMenu } = React.useContext(IssuestManagerContext);

  return (
    <>
      <TopBar />
      {openFloatMenu && <FloatMenu />}
    </>
  );
}

export { AppIU };
