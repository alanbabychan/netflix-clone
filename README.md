# 🚀 Alan-Netflix Clone 2.0

![Version](https://img.shields.io/badge/version-v2.0-blue)
![Status](https://img.shields.io/badge/status-stable-success)

🎉 This project is a Netflix-inspired web application with a responsive interface for exploring movies and related content.

🔥 **Alan-Netflix Clone 2.0** aims to provide an improved browsing experience with enhanced UI, authentication, and movie playback features where implemented.

## ✨ What's New in Version 2.0

- ✅ Updated Netflix-inspired layout
- ✅ Movie playback support, where configured
- ✅ User avatars and profile selection, where implemented
- ✅ Continue as Guest feature, where implemented
- ✅ Authentication improvements
- ✅ Responsive design improvements
- ✅ Performance optimizations
- ✅ Improved navigation experience

👉 **Check out the latest version:**

[Alan-Netflix Clone 2.0](https://github.com/alanbabychan/Alan-Netflix-Clone-2.0)

---

## ⚠️ Project Status

- **This repository:** Initial Netflix clone project
- **Latest version:** [Alan-Netflix Clone 2.0](https://github.com/alanbabychan/Alan-Netflix-Clone-2.0)

See the linked repository for the latest features and its current development status.

---

## 📖 Overview

The **Netflix Clone** is a responsive video-streaming web application inspired by Netflix. It is intended to let users browse movies, search for titles, and view movie details using data from the **TMDb (The Movie Database) API**.

The project uses **React.js**, **TypeScript**, and **Material UI**, with supporting tools for state management, routing, animations, and efficient data loading.

---

## 🧰 Tech Stack

| Category | Tools / Libraries | Purpose |
|---|---|---|
| Frontend framework | [React](https://react.dev/) | User interface |
| Language | [TypeScript](https://www.typescriptlang.org/) | Type safety |
| Styling | [Material UI](https://mui.com/), [Emotion](https://emotion.sh/docs/introduction) | Component styling |
| Animations | [Framer Motion](https://www.framer.com/motion/) | UI transitions |
| State management | [Redux Toolkit](https://redux-toolkit.js.org/) | Application state |
| Routing | [React Router](https://reactrouter.com/) | Client-side navigation |
| API integration | [TMDb API](https://developer.themoviedb.org/docs) | Movie data |
| Carousel / sliders | [React Slick](https://react-slick.neostack.com/), [Slick Carousel](https://kenwheeler.github.io/slick/) | Horizontal sliders |
| Video player | [Video.js](https://videojs.com/), [videojs-youtube](https://github.com/videojs/videojs-youtube) | Video playback integration |
| Build tool | [Vite](https://vite.dev/) | Development server and build |
| Containerization | [Docker](https://www.docker.com/) (optional) | Containerized deployment |

*Verify that each listed dependency is present in your project's `package.json` before treating it as part of the current implementation.*

---

## ⚙️ Features

The project may include the following features, depending on the current implementation:

- 🎬 **Movie browsing** — Explore movie titles and details.
- 🔎 **Movie search** — Find titles by name.
- 🗂️ **Category browsing** — Explore genres and movie collections.
- 📱 **Responsive interface** — Layouts for mobile, tablet, and desktop.
- ▶️ **Video previews** — Trailer playback, where configured.
- ⚡ **Lazy loading** — Load resources as needed, if implemented.
- 🎠 **Carousel navigation** — Browse titles in horizontal lists.
- 🔐 **Authentication** — Login and session management, if configured.
- 👤 **User profiles** — Profile selection and management, if implemented.
- 💳 **Subscription UI** — Plan displays, if implemented.

---

## 💳 Subscription Plans

If subscription plans are displayed in the application, the following example table can describe the demonstration UI. These prices are illustrative and are not actual Netflix prices.

| Plan | Example price | Example features |
|---|---:|---|
| **Basic** | ₹899/month | 720p HD, one screen |
| **Standard** | ₹1,399/month | 1080p Full HD, two screens |
| **Premium** | ₹1,799/month | 4K Ultra HD, four screens |

*Only retain this section if these plans are actually represented in your project. A displayed plan does not imply that real payments or subscriptions are processed.*

---

## 🧩 Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### Run locally

Clone the repository and install its dependencies:

```bash
git clone https://github.com/alanbabychan/netflix-clone.git
cd netflix-clone
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal.

> If `npm run dev` is unavailable, check the `scripts` section in `package.json` for the correct command.

---

## 🔐 Environment Variables

If the application requires a TMDb API key or other environment variables:

1. Check the project code for the exact variable names.
2. Configure the required values in your local environment file.
3. Use a `.env.example` file to document required variable names with placeholder values.
4. Add secret environment files to `.gitignore`.

**Never commit API secrets, access tokens, or passwords to a public repository.**

---

## 🛠️ Troubleshooting

### App doesn't start

- Make sure Node.js and npm are installed.
- Run `npm install` from the project root.
- Check the terminal for dependency or configuration errors.
- Confirm that `package.json` contains the script you want to run.

### Movies aren't loading

- Check your internet connection.
- Verify that the TMDb API key is configured if the application requires one.
- Open your browser's developer tools and inspect the Console and Network tabs.
- Check the API endpoint, response status, and error messages.

### Styling or layout issues

- Refresh the page and inspect the browser console.
- Test the interface at different screen widths.
- Verify that the required styling dependencies are installed.
- Check for missing assets and failed network requests.

### Before reporting a bug

Please include:

1. A clear description of the problem.
2. Steps to reproduce it.
3. Expected and actual behavior.
4. Relevant error messages, with secrets removed.
5. Browser and device details, when relevant.

Report reproducible bugs through the repository's [Issues page](https://github.com/alanbabychan/netflix-clone/issues).

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Make your changes and test them.
4. Commit your work with a descriptive message.
5. Submit a pull request explaining the changes.

For bugs, open an issue with the steps to reproduce the problem and the expected behavior.

---

## 📄 Disclaimer

This is an independent educational project inspired by the Netflix user interface. It is not affiliated with, endorsed by, or sponsored by Netflix.

Movie data may be provided by TMDb. Review the applicable API terms and attribution requirements before deploying the application.

---

## 👨‍💻 Author

**Alan Babychan**

- GitHub: [@alanbabychan](https://github.com/alanbabychan)
- Portfolio: [alanbabychan.online](https://www.alanbabychan.online)

---

⭐ If you find this project useful, consider giving the repository a star!
