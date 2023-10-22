import React from "react";
import { Link } from "@shopify/polaris";

const AppNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link url="/">Home</Link>
        </li>
        <li>
          <Link url="/app/additional">Additional page</Link>
        </li>
        <li>
          <Link url="/app/ScriptsPage">Script page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppNavigation;
