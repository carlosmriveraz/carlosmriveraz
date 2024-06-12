/*
--- 01 TYPOGRAPHY SYSTEM
- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 / 114 / 132

-Font Weights
Default: 400
Semi-Bold: 600


--- 02 Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160 / 192 / 224 / 256

--- 03 Boder radius

Small: 4px
Medium: 8px

*/

html {
  font-size: 62.5%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--body-font);
  font-weight: 400;
  font-size: 1.8rem;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  overflow-x: hidden;
}

li {
  list-style: none;
}

.container {
  max-width: 140rem;
  width: 100%;
  margin: 0 auto;
}

.container-md {
  max-width: 70%;
  width: 100%;
  /* background-color: red; */
  margin: 0 auto;
}

/* ANIMATION */

.slide-left {
  animation: slideleft 1s linear forwards;
}

@keyframes slideleft {
  0% {
    transform: translate(10rem);
    opacity: 0;
  }

  100% {
    transform: translate(0);
    opacity: 1;
  }
}

.description-box.slide-left {
  animation-delay: 1s;
}

/* SECTION */

section {
  transition: transform 1s, opacity 1s;
}

.section--hidden {
  opacity: 0;
  transform: translateY(8rem);
}

.padd-section {
  padding: 9.6rem 0;
}

/* TEXT */

.text {
  font-size: 1.8rem;
  line-height: 1.8;
}

/* **** */

/* FLEX */

.flex-row {
  display: flex;
}

.flex-row-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

/* **** */

.link:link,
.link:visited {
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;
}

.link:hover,
.link:active {
  color: var(--color-primary);
}

.hidden {
  display: none;
}

.nav-icon {
  font-size: 3.6rem;
  color: #fff;
}

.nav-icon:hover {
  cursor: pointer;
}

.nav-icon[name='close-outline'], .nav-icon[name='menu-outline'] {
  color: var(--color-on-surface-variant);

}
/* ********* BTN *********** */
.btn,
.btn:link,
.btn:visited {
  cursor: pointer;
  display: inline-block;
  padding: 1rem 3rem;

  color: var(--color-primary);
  border-radius: var(--border-radius-sm);
  border: 2px solid;

  transition: all 0.4s;
}

.btn-outline:link,
.btn-outline:visited {
  border-color: var(--color-primary);
}

.btn-outline:hover,
.btn-outline:active {
  color: #fff;
  background-color: var(--color-primary);
}

.btn-full:link,
.btn-full:visited {
  color: var(--color-surface);
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-full:hover,
.btn-full:active {
  background-color: var(--color-on-primary-container);
  border-color: var(--color-on-primary-container);
}
/* ********** HEADINGS *********** */

.heading-primary {
  font-weight: 600;
  font-size: 5.2rem;
  line-height: 1.1;
  letter-spacing: 3px;
  color: var(--color-primary);
}

.heading-secondary {
  color: var(--color-primary);
  font-size: 3rem;
  flex: none;
}

.heading-secondary span {
  color: var(--color-secondary);
}

.heading-secondary--left,
.heading-secondary--right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.2rem;
}

.heading-secondary--right {
  justify-content: flex-end;
}

.heading-secondary--left::after,
.heading-secondary--right::before {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--color-tertiary);
}

/* ********* SIDE-LINKS ********* */

.side-social-links--left,
.side-social-links--rigth {
  display: none;

  position: fixed;
  bottom: 0;
}

.side-social-links--left {
  left: 4rem;
  right: auto;
}

.side-social-links--rigth {
  right: 4rem;
  left: auto;
}

.side-social-links--rigth a {
  color: inherit;
  writing-mode: vertical-rl;
}
.side-social-links--rigth a:hover,
.side-social-links--rigth a:active {
  transform: translateY(-3px);
}

.social-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.social-links--side {
  flex-direction: column;
}

.social-links--side::after {
  content: '';
  display: block;
  width: 1px;
  height: 20rem;
  margin: 0 auto;
  background-color: var(--color-tertiary);
}

.social-link {
  padding: 0.12rem;
}

.social-icon {
  font-size: 2.4rem;
  color: var(--color-secondary);
  transition: transform 0.3s;
}

.social-icon:hover,
.social-icon:active {
  transform: translateY(-5px);
}
