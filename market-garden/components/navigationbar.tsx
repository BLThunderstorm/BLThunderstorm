import { FunctionComponent } from "react"
export const NavigationBar: FunctionComponent = () => {
    return (<div className="navigation-bar-container">
    <div className="navigation-bar">
      <div className="top-category-container">
        <div className="nav-category home-category">
          <div className="home-button button"></div>
        </div>
      </div>
      <div className="nav-category bottom-category">
        <div className="button profile-button"></div>
      </div>
    </div>
  </div>);
}