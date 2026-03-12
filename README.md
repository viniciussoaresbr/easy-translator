# 🌐 Easy Translator

A modern, elegant, and professional translation tool built with **Angular 14** and **TailwindCSS**. Designed with a focus on visual hierarchy, minimalist aesthetics, and a seamless user experience similar to industry-leading tools like DeepL and Google Translate.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Angular](https://img.shields.io/badge/Angular-14.2-dd0031.svg?logo=angular)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?logo=tailwind-css)

## ✨ Features

- **Modern Dual-Panel UI**: Side-by-side translation panels for desktop and responsive stacked layout for mobile.
- **Real-time Character Counter**: Keep track of your text length with a built-in 500-character limit.
- **Smart Language Swap**: Instantly switch between source and target languages, including automatic content swapping.
- **One-Click Actions**: Quick "Clear Input" and "Copy to Clipboard" buttons for an efficient workflow.
- **Polished UX**: Smooth loading animations, refined focus states, and professional typography using Inter & Barlow Condensed.
- **Responsive Design**: Fully optimized for desktops, tablets, and smartphones.

## 🚀 Technologies

- **Frontend**: [Angular 14](https://angular.io/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: Custom SVG Components
- **Fonts**: Inter & Barlow Condensed (Google Fonts)

## 🛠️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/viniciussoaresbr/easy-translator.git
    cd easy-translator
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    Navigate to `http://localhost:4200/` to see the application in action.

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── form/        # Main translator logic and redesign
│   │   └── header/      # Modern navigation header
│   ├── services/        # Translation and Language services
│   └── icons/           # Custom SVG icon components
├── assets/              # Static assets
└── environments/        # API configuration
```
