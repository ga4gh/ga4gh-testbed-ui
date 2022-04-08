<img src="https://www.ga4gh.org/wp-content/themes/ga4gh-theme/gfx/GA-logo-horizontal-tag-RGB.svg" alt="GA4GH Logo" style="width: 400px;"/>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)

# GA4GH Testbed UI

Web UI for the GA4GH Testbed Reporting service 

## Installation

As a prerequisite, please ensure you have Node JS and NPM installed on your machine. The testbed UI is currently being developed on node `v16.13.2`.

Clone the repo and install dependencies:
```
git clone https://github.com/ga4gh/ga4gh-testbed-ui.git
cd ga4gh-testbed-ui
npm install
```

## Usage

To start a local development server:
```
npm run reactStart
```

To create an optimized production build:
```
npm run reactBuild
```

Docker images for the UI are also available on [Docker Hub](https://hub.docker.com/repository/docker/ga4gh/ga4gh-testbed-ui)
