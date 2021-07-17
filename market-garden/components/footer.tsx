import { FunctionComponent } from "react";
export const Footer: FunctionComponent<{
  links?: Array<{ id: string, links: Array<{ href: string, title: string }> }>
  disclaimers?: Array<{ id: string, content: string }>
}> = function Footer(props) {
  return (
    <footer className="footer nefo-footer">
      <nav className="nefo-navi-links">

        {
          props.links?.map((category) => {
            return (<ul className="nefo-links-bar" key={category.id}>
              <li className="nefo-link-title">  </li>
              <span v-if="category.links && category.links.length">
                {category.links.map((link) => {
                  return <li key={link.href}>
                    <a href={link.href}> {link.title}</a>
                  </li>
                })
                }
              </span>
            </ul>);

          })
        }
      </nav>
      <div>
        {
          props.disclaimers?.map((disclaimer) => {
            return <div className="nefo-copyright" key={disclaimer.id}> {disclaimer.content} </div>
          })
        }
      </div>


    </footer>
  )
}