# Project guidelines

## Component structure

In order to unify html markup across all page sections and make Page's sections to behave in the same way regarding paddings and margins, every component created in the project should contain its internal markup only, the markup for the `<section>` tag will be added by the code responsible for binding all sections togheter while building the page as follows.

!(https://raw.githubusercontent.com/FooCamp/foocamp-empulsa/add-dev-docs/devDocs/img/section-structure.png)

Please keep in mind the following when creating a new component for the project:

* The **componentType** string will be added to the section's *class* attribute in order to provide the class used to wrap the styles of the component.

* The actual component's content will be wrapped by `<div className="section-content">`. This class will be responsible of managing max content width while centering in extra large viewports.

* All the component's code will be returned by the `getComponentTemplate()` function.

## Component file structure

* The component's template file (the JS file with the JSX) must be placed inside the **_components_** folder located at the root of the project.

![](/add-dev-docs/devDocs/img/component-template-file.png?raw=true | width=100)

* The component's *SCSS* file must be placed inside the **_components_** folder located within **_styles_** folder. Remember to make the `@import` of the file in the *main.scss* file.

![](https://raw.githubusercontent.com/FooCamp/foocamp-empulsa/add-dev-docs/devDocs/img/component-sass-file.png | width=100)
