# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### How to get started - Vite
Initialize using Vite → npm create vite@latest my-portfolio --template
Find all instructions in the instructions file.

https://github.com/Technigo/project-portfolio/blob/main/instructions.md

I started by sketching the design on a piece of paper, adding all elements (like h2, body, sections, etc) to it. It made it easier for me to identify reusable components, like the cards for article and project, that both contained image, h3, body and button/-s. It also made me notice that the design were missing an h1, and a paragraph tag styled to look like an h3. After that I started with the typography and global styling by adding all the CSS variables. 

### Problems
**- Finding a good structure**  
I didn't want to start coding before that was set, as I find it hard to reorganize components and code later, especially when there are a lot of changes to make. Hopefully spending time on the structure will make the rest of the project run smoothly.  
**- Creating the components and structure first**  
Since I started by setting up the entire structure of folders and components before adding any code, I found that I to create a lot of code at once just to be able to see any content in the app. Most components and CSS files were empty which made other components render without styles or not appear as intended. Some components couldn’t find the files they were trying to import (e.g., Typography, Footer, etc.) due to incorrect file paths. I needed to add some basic styling for each component, some basic code for each component etc. The paths were tricky to set right, and I mixed up some names like using FooterSection when the component was actually named Footer.  
**- The design**  
I made some adjustments to the structure. The original design was missing an h1 but included two different font sizes for h2, so I used h1 for the largest text. In the Skills section, the design used two text/paragraph tags with different font sizes, and the larger one matched the h3 style, so I used h3 for consistency.
**- 
**- Passing content**  
I used a mix of children and explicit props for passing content, so I couldn't see some sections in my app. Went for explicit props since I couldn't really grasp how children actually work. 
**- Overriding the Global styling**  
In a couple of places the different heading tags had different styling. One example is the Date in the ArticleSection, which had heading h3 but font size 1.125rem, and I solved that issue by changing the h3 to a paragraph.  

*** If I had more time ***  
1. I would create a component for Bio containing the profile image, header, body text, and the social icons/links. This component could then be used in both the Hero and Footer sections. I noticed this while working with the Footer, because I more or less were copying and pasting from the Hero section. 
2. 

### A few useful sources in this project: 
- For the borders between the columns in the Skills text section I found this [Code Pen](https://codepen.io/brendanfalkowski/pen/Mwrywj) and modified it in [My Code Pen](https://codepen.io/joheri1/pen/qBeKLVL). 
- For the card effect, I found this [CodePen](https://codepen.io/william-goldsworthy/pen/JzVajj) and modified it in [My Code Pen](https://codepen.io/joheri1/pen/GRVxByV)


