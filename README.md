<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Depyloment](https://github.com/SteinCodeAT/astro-starter-template/actions/workflows/deploy.yml/badge.svg)

</div>

<div align="center">

<img src="https://raw.githubusercontent.com/SteinCodeAT/astro-starter-template/main/src/img/Placeholder-1.webp"
  height=200
 />

 </div>

# Astro Starter Template

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Development](#development)
  - [Build & Deploy](#build--deploy)
- [Starter Files](#starter-files)
- [Packages & Pre-Configurations](#packages--pre-configurations)
  - [Astro-Compress](#astro-compress)
  - [Astro-Icons & Iconify](#astro-icons--iconify)
  - [Astro-Sitemap](#astro-sitemap)
  - [Code Quality Tools: Prettier, ESLint, & Husky](#code-quality-tools-prettier-eslint--husky)
  - [GitHub Action](#github-action)
- [Additional Useful Resources](#additional-useful-resources)
- [Sources](#sources)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Introduction
Astro is a modern front-end framework designed to help developers build faster websites with less client-side JavaScript. This minimalistic starter template is tailored to help you kickstart your Astro project quickly and efficiently, focusing on essential features and configurations. 

Explore more advanced templates at the [official astro theme page](https://astro.build/themes/4/).


## Features

- **Pre-configured Astro JS Environment**: Set up with the necessary configurations to start building right away.
- **Optimized for Performance**: Minimalistic design and compression for blazing-fast load times.
- **SEO Friendly**: Structured for optimal search engine visibility.
- **Pre-Configured Deployment**: Deployment to Github Pages is preconfigured with a Github Action workflow file.


## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) (version 20.9.0 or later) installed on your machine.

## Getting Started

### Installation

Start by cloning the repository and installing dependencies:

```bash
git clone https://github.com/SteinCodeAT/astro-starter-template.git
cd astro-starter-template
npm install
```

### Development

Before launching the development server, ensure you:

1. Replace the site-name in `astro.config.mjs` with your domain and remove or update the `base` variable.
2. Populate `src/const.js` with your site's metadata and social links.
3. Replace the `logo.svg` in `src/icons` and the placeholder image in `src/img`.


Run `npm run dev` to start the Astro development server. Your site will be available at [localhost:4321](http://localhost:4321).


### Build & Deploy

#### Deploy using Github Actions

If you merge your changes to the `main` branch of your repository the pre-configured github action will attempt to build and deploy your app to the Github Pages associated with your repository. 

To learn more about Github Pages and how to enable it check out the main documentation by github: https://docs.github.com/en/pages

#### Deploy the app yourself
To build your project for production, run:

```bash
npm run build
```

This will generate a static build of your project in the `dist/` directory. You can deploy this build to any static hosting service using for instance FTP.

## Starter Files

The project contains a few minimalistic starter components and files to kickstart your development.

`src/components/`: Reusable components.

- `BaseHead.astro` contains all necessary html head tags. Configure them according to your needs.
- `Header.astro` contains the navigation. It is preconfigured with a few standard links and a mobile version.
- `Footer.astro` contains a footer component with basic links and a copyright notice.

`src/pages/`: Site routes.

- `index.astro` is the home page and `404.astro` the not-found page.
- `ping.ts` is a static JSON health check endpoint served at `/ping`. It returns `{ "status": "ok", "timestamp": "<ISO 8601>" }`. Because the site is built statically, the timestamp reflects the last build time in production.
- `health.ts` is a more detailed static health check served at `/health`. It returns `{ "status": "ok", "service": "<name>", "version": "<version>", "environment": "production" | "development", "timestamp": "<ISO 8601>" }`, with name and version read from `package.json`. Same build-time timestamp caveat as `/ping`.

`astro.config.mjs`: Astro configuration file.

`.eslintrc.cjs`: Eslint configuration file.

`.prettierrc.mjs`: Prettier configuration file.

## Packages & Pre-Configurations

This template comes pre-configured with essential packages and settings optimized for performance, development ease, and best practices in web standards.

### Astro-Compress

Compresses HTML, CSS, and image files out-of-the-box, ensuring your site loads quickly by reducing file sizes with no additional setup required.

### Astro-Icons & iconify

[astro-icons](https://www.astroicon.dev/) is used to load local svg-icons from `src/icons` and [iconfiy](https://iconify.design/) icon sets. The icon set material design icons was already added and can be used by specifiying the name of the icon with the prefix `mdi:` like this

```javascript
<Icon name="mdi:user" />
```

You can find more icon sets [here](https://icon-sets.iconify.design/) and add them by installing the corresponding icon set package for iconfiy

```bash
npm install @iconify-json/mdi
```

### Astro-Sitemap

Generates a sitemap automatically on build, improving your SEO by making sure search engines can easily index your site's pages.


### Code Quality Tools: Prettier, ESLint, & Husky

- [Prettier](https://prettier.io/) is configured for consistent code formatting across your project.
- [ESLint](https://eslint.org/) ensures code quality and catches JavaScript errors before they go live.
- [Husky](https://typicode.github.io/husky/) manages pre-commit hooks, running Prettier and ESLint to maintain code standards with each commit.


### Github Action

In the folder `.github\.workflows\` the file `deploy.yml` contains all configurations needed to automatically build and deploy your application on github pages on any change to the `main` branch. This process can also be triggered manually within Github.


## Additional useful Resources

Building a good website is difficult as it encompasses a lot of topics such as performance, accessibility and asthetics. The following links and resources provided us with tremendous insights and helped us in our journey.

| Name | Description | Link |
|:-------------- |:-------------- |:-------------- |
|HTML Boilerplate | This excellent article by Manuel Matuzović shows his boilerplate HTML 5 template with detailled explanations on each tag  |https://www.matuzo.at/blog/html-boilerplate/ |
|Default CSS |A great default css file defining base variables and styles to start your project| [https://github.com/HermanMartinus/bearblog/...](https://github.com/HermanMartinus/bearblog/blob/297026a877bc2ab2b3bdfbd6b9f7961c350917dd/templates/styles/blog/default.css) |
| SVGCo.de | Transform any image to svg in your browser | https://svgco.de/ |


## Sources

**CSS:** The `global.css` file located in `src/styles` is inspired by Bear Blog's default [CSS](https://github.com/HermanMartinus/bearblog/blob/297026a877bc2ab2b3bdfbd6b9f7961c350917dd/templates/styles/blog/default.css).

**Theme:** The site uses a light royal blue theme. All colors are defined as CSS custom properties in the `:root` block of `src/styles/global.css` (`--accent` is royal blue `rgb(65, 105, 225)`, `--main-bg` is a blue-tinted white, `--dark-bg` is navy for the footer). The browser `theme-color` meta tags in `src/components/BaseHead.astro` match these values. Change the theme by editing those variables; components reference them rather than hardcoding colors.
  

**Image and Brand icon:** The placeholder image located in `src/img` and the brand svg in `src/icons` were created using DALL-E and are meant for illustrational and demonstrational purposes only.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements.

## License
This project is open source and available under the [MIT License](https://github.com/SteinCodeAT/astro-starter-template/blob/main/LICENSE).

## Support
If you need help or have any questions, please open an issue for support.