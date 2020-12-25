<img width="150px" height="150px" align="center" alt="buzzertech" src="https://buzzertech.com/favicon.png" />

## Portfolio
This repository features the code for my personal website, which features all of my work and little details about who I am and what I do.

## Tech used
The website is built using Next.js - with all the pages being generated statically at build time. I've used [@emotion/styled](https://emotion.sh/docs/@emotion/styled) library for styling components. Moreover, this project uses the ever amazing library, [Rebass](https://rebassjs.org/), for building custom components from the ground up. 

The content is served via contentful. Each part of the website is sliced into a contentful "content type" and "content". Since the entire website is statically generated, I'm using contentful's HTTP API to fetch data. Static assets like images, are also served directly via contentful's CDN.

## Design
While designing the prototype for this, I was mainly focusing on two factors:
1. Simplicitly
2. Accessibility

Simplicitly would mean that the website isn't using some fancy framework at heart and sticks to the very basics. For instance, the color pallette was limited to just 3 or 4 colors. The font used across the website is the same, although, I've used different font weights to emphasize on certain things. 

I believe that with simplicitly in place, accessibility becomes really trivial to achieve. The site is not yet completely accessible but in a way it is almost there.

## Motivation
Previous version of my portfolio was built with Angular and TypeScript. This was when I had just started out my journey as a software developer, back in early 2018. The website's backend was featuring the LAMP stack and was hosted on the cheapest, yet the most amazing shared hosting service, [VapourHost](https://vapourhost.com/). Fast-forward three years, I felt a dire need to revamp the website. But I had lost the source code, cause it was hosted locally on my PC which doesn't function no longer. (Hence kids, it is important to use git). This lead me into building the new version of the website in react/nextjs. Building this entire thing from ground up took me about 3 weeks of work. 
