import { FunctionComponent } from "react";
import { NavigationBar } from "./navigationbar";
import { Footer } from "./footer";
import type { ReactElement } from "react";
import "./DefaultLayout.module.scss";
export const DefaultLayout: FunctionComponent<{ children: ReactElement }> = ({ children }) => {



  return (<div>
    <div className="bg-picture"></div>
    <NavigationBar />
    <div className="page-content-container">
      <div className="pagecontent">
        {children}
      </div>

      <Footer disclaimers={[

        {
          id: "credit",
          content: "Made with ♥️ by Nefomemes"
        }
      ]} />
    </div>
  </div>
  );
}