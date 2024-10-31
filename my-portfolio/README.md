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
**- The design**  
I made some adjustments to the structure. The original design was missing an h1 but included two different font sizes for h2, so I used h1 for the largest text. In the Skills section, the design used two text/paragraph tags with different font sizes, and the larger one matched the h3 style, so I used h3 for consistency.


