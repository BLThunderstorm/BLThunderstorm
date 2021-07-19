import { FunctionComponent } from "react";
import styles from "./Footer.module.sass";

export const Footer: FunctionComponent<{
  links?: Array<{
    id: string;
    title: string;
    links: Array<{ href: string; title: string }>;
  }>;
  disclaimers?: Array<{ id: string; content: string }>;
}> = function Footer(props) {
  return (
    <footer className={`${styles["nefo-footer"]} footer nefo-footer`}>
      <nav className={`${styles["nefo-navi-links"]} nefo-navi-links`}>
        {props.links?.map((category) => {
          return (
            <ul
              className={`$[styles["nefo-links-bar"]} nefo-links-bar`}
              key={category.id}
            >
              <li className={`${styles["nefo-link-title"]} nefo-link-title`}>
                {" "}
                {category.title}{" "}
              </li>

              {category.links?.map((link) => {
                return (
                  <li key={link.href}>
                    <a href={link.href}> {link.title}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </nav>
      <div>
        {props.disclaimers?.map((disclaimer) => {
          return (
            <div
              className={`${styles["nefo-copyright"]} nefo-copyright`}
              key={disclaimer.id}
            >
              {" "}
              {disclaimer.content}{" "}
            </div>
          );
        })}
      </div>
    </footer>
  );
};
