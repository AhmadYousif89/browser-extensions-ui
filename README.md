# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Dark theme](./public/Browser%20Extension%20Manager%20-%20dark.png)
![Light theme](./public/Browser%20Extension%20Manager%20-%20light.png)

### Links

- Solution URL: [Github Link](https://github.com/AhmadYousif89/browser-extensions-ui)
- Live Site URL: [Link](https://vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```css
.extension-list {
  display: grid;

  --grid-gap: 1rem;
  --grid-max-col-count: 3;
  --grid-min-col-size: 20rem;
  --grid-col-size-calc: calc(
    (100% - var(--grid-max-col-count) * var(--grid-gap)) / var(--grid-max-col-count)
  );
  --grid-min-col-size-calc: min(100%, max(var(--grid-min-col-size), var(--grid-col-size-calc)));

  gap: var(--grid-gap);
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-col-size-calc), 1fr));
}
```

I have learned how to use a more advanced CSS Grid layout. This approach creates an elegantly responsive grid that maintains consistent spacing and optimal column sizes across different viewport widths without requiring media queries. I used the `repeat(auto-fit, minmax())` function to create a responsive grid layout that adjusts the number of columns based on the available space. The `minmax()` function allows me to set a minimum and maximum size for each column, ensuring that they remain flexible and adapt to different screen sizes.

Thanks to [Kevin Powell](https://www.youtube.com/watch?v=CHULPvkXIRo&pp=0gcJCX4JAYcqIYzv) for his amazing tutorials.

### Useful resources

- [Kevin Powell](https://www.youtube.com/@KevinPowell) - This youtube channel has helped me a lot in learning advanced CSS techniques and best practices. I highly recommend checking it out for anyone looking to improve their CSS skills.

## Author

- Frontend Mentor - [@ahmadyousif89](https://www.frontendmentor.io/profile/ahmadyousif89)
