<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lighthouse-slack/lighthouse-bolt">
    <img src="https://www.leankoala.com/media/249/download/lighthouse.png?v=1" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Lighthouse</h3>

  <p align="center">
    A Lighthouse Slack integration for everyone.
    <br />
    <a href="https://github.com/lighthouse-slack/lighthouse-bolt#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lighthouse-slack/lighthouse-bolt/">View Demo</a>
    ·
    <a href="https://github.com/lighthouse-slack/lighthouse-bolt/issues">Report Bug</a>
    ·
    <a href="https://github.com/lighthouse-slack/lighthouse-bolt/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A Slack integration for Lighthouse – an open-source, automated tool for improving the quality of web pages.

Lighthouse helps identify and fix common problems that affect your site's performance, accessibility, and user experience. Learn more about it [here](https://developers.google.com/web/tools/lighthouse/?utm_source=devtools).

With our bot, you can choose to run the full report, or select the specific audits you'd like to run. Information on all the audits can be found [here](https://web.dev/learn/#lighthouse).

### Built With
* [Bolt](https://github.com/slackapi/bolt-js)
* [Ngrok](https://ngrok.com/)
* [Nodemon](https://github.com/remy/nodemon)
* [AWS SDK](https://aws.amazon.com/sdk-for-node-js/)
* [Lighthouse](https://github.com/GoogleChrome/lighthouse)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

In your local environment, you need:
* [Node.js](https://nodejs.org/en/) (comes with npm)
* nodemon
```sh
npm i nodemon
```
* [ngrok](https://ngrok.com/)


### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Fork and clone your forked repo
```sh
git clone https://github.com/your_username_/lighthouse-bolt.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```



<!-- USAGE EXAMPLES -->
## Usage

1. Run the app locally
```sh
npm start
```

2. Run ngrok to host Slack bot
```sh
ngrok http 3000
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/lighthouse-slack/lighthouse-bolt/issues?q=is%3Aopen+is%3Aissue) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the Apache 2.0 License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Eivenlour David 
> [![linkedin-shield]](https://www.linkedin.com/in/eivenlour/)
<br> 

Helen Gezahegn 
> [![linkedin-shield]](https://linkedin.com/in/HelenGezahegn)
<br>

Winnie Ren 
> [![linkedin-shield]](https://www.linkedin.com/in/WinnieRen/) 

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lighthouse-slack/lighthouse-bolt.svg?style=flat-square
[contributors-url]: https://github.com/lighthouse-slack/lighthouse-bolt/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lighthouse-slack/lighthouse-bolt.svg?style=flat-square
[forks-url]: https://github.com/lighthouse-slack/lighthouse-bolt/network/members
[stars-shield]: https://img.shields.io/github/stars/lighthouse-slack/lighthouse-bolt.svg?style=flat-square
[stars-url]: https://github.com/lighthouse-slack/lighthouse-bolt/stargazers
[issues-shield]: https://img.shields.io/github/issues/lighthouse-slack/lighthouse-bolt.svg?style=flat-square
[issues-url]: https://github.com/lighthouse-slack/lighthouse-bolt/issues
[license-shield]: https://img.shields.io/github/license/lighthouse-slack/lighthouse-bolt.svg?style=flat-square
[license-url]: https://github.com/lighthouse-slack/lighthouse-bolt/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[product-screenshot]: https://i.ibb.co/J7FQdtM/Screen-Shot-2020-10-30-at-12-31-31-AM.png
