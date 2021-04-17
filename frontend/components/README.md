
# /components
This is where we store our Vue components. Feel free to use them as long as you credit me (Nefomemes), it doesn't matter where. Maybe in the README of your project, maybe in the footer of your project's website, or maybe in the 'Credits' page!

## **API**

## Components
### Footer
The footer section on the bottom of the page.

**Props**
### __**Footer#links**__ 
An array containing all data to be put in the navigation links. (expects [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[FooterLinksCategory](#FooterLinksCategory)>)


## Typedefs

### FooterLinksCategory
Represents a navigation link category.

**Properties**
### FooterLinksCategory#title
The title of the category. (expects [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))

### FooterLinksCategory#links
The list of links in the category. (expects [Array<FooterLink>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))