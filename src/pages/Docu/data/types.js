const types = [
  {
    name: 'Logo',
    description: 'Logo / Branding',
    content: `![Logo](/images/app-15-logo.png)
![Logo](/images/app-15-slogan.png)`,
    section: 'header'
  },
  {
    name: 'Title',
    description: 'Why is it needed, who is the intended audience and when will they need this software.',
    content: `# Title
Purpose 1. Purpose 2.`,
    section: 'header'
  },
  {
    name: 'Badges',
    description: 'Metrics about your app',
    content: `[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/metro/blob/HEAD/LICENSE)
[![npm package version](https://img.shields.io/npm/v/metro?color=brightgreen)](https://www.npmjs.com/package/metro)
[![Build status](https://circleci.com/gh/facebook/metro.svg?style=shield)](https://circleci.com/gh/facebook/metro)
[![Code coverage](https://codecov.io/gh/facebook/metro/branch/main/graph/badge.svg?token=oMHdoKhFZB)](https://codecov.io/gh/facebook/metro)
[![Follow @You on Twitter](https://img.shields.io/twitter/follow/you?style=social)](https://twitter.com/intent/follow?screen_name=you)
[![Build Status](https://github.com/prettier/prettier-vscode/workflows/Main/badge.svg?branch=main)](https://github.com/prettier/prettier-vscode/actions?query=workflow%3AMain)
[![VS Code Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[![VS Code Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)]()
`,
    section: 'header'
  },
  {
    name: 'Table of contents',
    description: 'Table of contents',
    content: `## Table of contents
1.  [Introduction](#introduction)
2.  [Topic 1](#topic-1)`,
    section: 'header'
  },

  {
    name: 'Roadmap',
    description: 'Roadmap/Current Status',
    content: `## Roadmap
- Additional browser support
- Add more integrations`,
    section: 'header'
  },
  {
    name: 'Used By',
    description: 'Adoption Statistics/Used By',
    content: `## Used by
- [Facebook](https://www.facebook.com)
- [Google](https://www.google.com)`,
    section: 'header'
  },
  {
    name: 'Related/See Also',
    description: 'Related/See Also',
    content: `## Related
- [Facebook](https://www.facebook.com)
- [Google](https://www.google.com)`,
    section: 'header'
  },
  {
    name: 'Demo',
    description: 'Demo/Screenshots',
    content: `## Demo
![pane-menu](https://explorer-exclude.s3.amazonaws.com/pane-menu.gif?v=1.3.0)`,
    section: 'header'
  },
  {
    name: 'Usage',
    description: 'Usage/Examples',
    content: `## Usage
- Click the home button
- Search for a pet`,
    section: 'header'
  },
  {
    name: 'Features',
    description: 'Features, Components, API',
    content: `## Features
- Features
- Components
- API`,
    section: 'overview'
  },
  {
    name: 'Tech',
    description: 'Tech Stack/Tech Concepts/Software names only with suitable links',
    content: `## Tech Stack
- **Client**: 
  - React
  - Redux
  - TailwindCSS
- **Server**
  - Node
  - Express
`,
    section: 'overview'
  },
  {
    name: 'Requirements',
    description: 'Requirements',
    content: `## Requirements
- Requirements: React v18
`,
    section: 'overview'
  },
  {
    name: 'Level of testing',
    description: 'Level of testing',
    content: `## Level of testing
- Unit
- End-to-end`,
    section: 'overview'
  },
  {
    name: 'Use cases',
    description: 'Who is using this software and for what?',
    content: `## Use Cases
- Real life situations
`,
    section: 'overview'
  },
  {
    name: 'Customer case studies',
    description: 'Customer case studies',
    content: `## Case studies
- Customer case studies:
  - Case Study 1: [Facebook](https://www.facebook.com)
  - Case Study 2: [Google](https://www.google.com)`,
    section: 'overview'
  },
  {
    name: 'Risks of OSS',
    description: 'Risks of open-source software',
    content: `## OSS data
- active users [![Users](https://img.shields.io/visual-studio-marketplace/d/esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- code coverage [![Code coverage](https://codecov.io/gh/facebook/metro/branch/main/graph/badge.svg?token=oMHdoKhFZB)](https://codecov.io/gh/facebook/metro)
- contributors 
- presence of user documentation
- fragility/sustainability
`,
    section: 'overview'
  },
  {
    name: 'Repo stats',
    description: 'Repository stats',
    content: `## Repo stats
- GitHub-like metrics such as commit frequency, pulse etc.
`,
    section: 'overview'
  },
  {
    name: 'Known issues',
    description: 'Known issues',
    content: `## Known issues
[full issue list](www.google.com)
1. Issue 1
2. Issue 2
3. Issue 3
    `,
    section: 'overview'
  },
  {
    name: 'Competitors',
    description: 'Open-source and proprietary competitors',
    content: `## Competitors
- [Alternative 1](www.google.com)
- [Alternative 2](www.google.com)
`,
    section: 'overview'
  },
  {
    name: 'USP',
    description: 'Competitive advantage',
    content: `## USP
- One line USP of this software as opposed to competition
`,
    section: 'overview'
  },
  {
    name: 'Optimizations',
    description: 'Optimizations',
    content: `## Optimizations
- refactors
- performance improvements
- accessibility
- scaling`,
    section: 'overview'
  },

  {
    name: 'Pre-requisites',
    description: 'Pre-requisites/Deps',
    content: `## Pre-requisites
- [Pre-requisites](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'Configuration',
    description: 'Configuration instructions',
    content: `## Configuration
- [Configuration](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'Installation',
    description: 'Installation instructions',
    content: `## Installation
- [Installation/Uninstallation](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'Troubleshooting FAQ',
    description: 'Troubleshooting FAQ / Guide during setup / installation',
    content: `## Troubleshooting FAQ
- [Troubleshooting](https://www.google.com)

`,
    section: 'setup'
  },
  {
    name: 'Testing',
    description: 'Steps to creating an installable, testing, validating the installable',
    content: `## Testing
- [Building](https://www.google.com)
- [Deploying](https://www.google.com)
- [Testing](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'Executing after building',
    description: 'Executing/Running after building',
    content: `## Executing after building
- [Executing after building](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'UX Guide',
    description: 'FAQ/Reference Guide on user actions and commands associated with the software',
    content: `## UX Guide
- [FAQ/Reference Guide on UX](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'After installation',
    description: 'After installation',
    content: `## After installation
- [How-to-use the software after installation](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'Getting Help',
    description: 'Getting Help',
    content: `## Getting Help
- [Getting Help](https://www.google.com)
`,
    section: 'setup'
  },
  {
    name: 'Changelog',
    description: 'Changelog',
    content: `## Changelog
- [Changelog](https://www.google.com)
`,
    section: 'setup'
  },

  {
    name: 'User Guide',
    description: 'Getting Started / User Manual / Deployment Guide',
    content: `## User Guide
- [User Guide](https://www.google.com)
`,
    section: 'references'
  },
  {
    name: 'Tutorial',
    description: 'Tutorial',
    content: `## Tutorial
- [Tutorial](https://www.google.com)
`,
    section: 'references'
  },
  {
    name: 'Reference Guide',
    description: 'Reference Guide',
    content: `## Reference Guide
- [Reference Guide](https://www.google.com)
`,
    section: 'references'
  },
  {
    name: 'OSS Report',
    description: 'OSS Report',
    content: `## OSS Report
- [Performance, scale, benchmarks](https://www.google.com)

`,
    section: 'references'
  },
  {
    name: 'Developer References',
    description: 'Anything else you need to include',
    content: `## References
- [Documentation](https://linktodocumentation)
`,
    section: 'references'
  },

  {
    name: 'Credits',
    description: 'Credits/Authors/Acknowledgements',
    content: `## Credits
- [@handle](https://www.github.com/handle)
`,
    section: 'footer'
  },
  {
    name: 'Authors',
    description: 'Authors',
    content: `## Authors
- [@handle](https://www.github.com/handle)
`,
    section: 'footer'
  },
  {
    name: 'Acknowledgements',
    description: 'Acknowledgements',
    content: `## Acknowledgements
- [@handle](https://www.github.com/handle)
`,
    section: 'footer'
  },
  {
    name: 'Contact',
    description: 'Contact instructions',
    content: `## Contact
If you have any feedback, please reach out to us at google@gmail.com`,
    section: 'footer'
  },
  {
    name: 'Contribute',
    description: 'How to contribute',
    content: `## Contribute
See \`contributing.md\` for ways to get started.
`,
    section: 'footer'
  },
  {
    name: 'Code of conduct',
    description: 'Link to Code of conduct.md',
    content: `## Code of conduct
Please adhere to this project's [code of conduct](https://www.google.com).
`,
    section: 'footer'
  },
  {
    name: 'License',
    description: 'Link to License.md',
    content: `## License
Content submitted to repo is CC-BY-4.0 licensed, as found in the [LICENSE-DOCS](./LICENSE-DOCS.md) file.`,
    section: 'footer'
  }
]
export default types
