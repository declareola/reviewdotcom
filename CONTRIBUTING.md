# Contributing to ReviewDotCom

First off, thank you for considering contributing to ReviewDotCom! Your help is essential for building a more transparent and trustworthy platform for everyone in Nigeria.

This document provides guidelines for contributing to the project. Please read it carefully to ensure a smooth and effective collaboration process.

## ❓ How Can I Contribute?

There are many ways to contribute, from improving the documentation to submitting bug reports and feature requests. If you're looking to contribute code, we welcome your pull requests.

### Reporting Bugs
If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/example/repo/issues). If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/example/repo/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements
If you have an idea for an enhancement, feel free to open an issue. Please provide a clear and detailed explanation of the feature you'd like to see, why it's needed, and how it should work.

## 💻 Development Setup

Please refer to the main [README.md](./README.md) file for detailed instructions on how to set up your development environment.

##  Pull Request Process

We follow the "fork-and-pull" Git workflow.

1.  **Fork the repo** on GitHub.
2.  **Clone your fork** to your local machine.
3.  **Create a new branch** for your changes (`git checkout -b feature/your-feature-name`).
4.  **Make your changes**, adhering to the coding style outlined below.
5.  **Commit your changes** with a clear and descriptive commit message.
6.  **Push your branch** to your fork on GitHub (`git push origin feature/your-feature-name`).
7.  **Open a pull request** from your fork to the main ReviewDotCom repository.
8.  **Wait for a review.** A maintainer will review your PR, provide feedback, and merge it if it meets the contribution guidelines.

### Coding Style
-   **TypeScript:** All new code should be written in TypeScript.
-   **React:** Follow modern React best practices (e.g., functional components with hooks).
-   **Styling:** Use Tailwind CSS utility classes for all styling.
-   **Formatting:** Please ensure your code is formatted correctly before committing.
-   **Compatibility:** Due to the in-browser transpiler, avoid complex or highly modern JavaScript syntax that has caused issues in the past (e.g., prefer standard `for` loops over `.map()` for rendering, avoid destructuring in component props). When in doubt, follow the patterns in the existing, stable code.

### Commit Messages
Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for your commit messages. This helps us automate changelogs and makes the project history easier to read.

-   **`feat:`**: A new feature.
-   **`fix:`**: A bug fix.
-   **`docs:`**: Documentation only changes.
-   **`style:`**: Changes that do not affect the meaning of the code (white-space, formatting, etc).
-   **`refactor:`**: A code change that neither fixes a bug nor adds a feature.
-   **`perf:`**: A code change that improves performance.
-   **`test:`**: Adding missing tests or correcting existing tests.
-   **`chore:`**: Changes to the build process or auxiliary tools and libraries.

Example: `feat: Add AI-powered photo captioning to review submission`

Thank you again for your contribution!
