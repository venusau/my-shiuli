# Valentine's Day Proposal App 💕

A beautiful, interactive Valentine's Day proposal app built with React and TypeScript using Object-Oriented Programming principles.

## Features

- **Beautiful UI**: Gradient backgrounds with animated hearts
- **Interactive "No" Button**: The "No" button moves away when you hover over it, making "Yes" the only option!
- **Growing "Yes" Button**: Each time the user tries to click "No", the "Yes" button grows larger
- **Celebration Page**: After clicking "Yes", enjoy a festive celebration with confetti, floating hearts, and an animated GIF
- **Fully Responsive**: Works perfectly on mobile and desktop devices
- **OOP Architecture**: Built using React class components following Object-Oriented Programming principles

## Technology Stack

- React 18
- TypeScript
- Vite
- CSS3 with animations

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   ├── QuestionPage.tsx       # Main question page with moving "No" button
│   ├── QuestionPage.css       # Styles for question page
│   ├── CelebrationPage.tsx    # Success celebration page
│   └── CelebrationPage.css    # Styles for celebration page
├── App.tsx                     # Main app component (manages state)
├── App.css                     # Global app styles
├── index.css                   # Root styles
└── main.tsx                    # App entry point
```

## OOP Implementation

The app follows Object-Oriented Programming principles:

- **App Component**: Main controller class managing application state
- **QuestionPage Component**: Encapsulates the proposal logic and button interactions
- **CelebrationPage Component**: Handles the celebration display and animations

Each component is implemented as a TypeScript class with proper type definitions, private methods, and state management.

## How It Works

1. User sees the question "Will you be my Valentine?"
2. When hovering over the "No" button, it moves to a random position
3. Each hover attempt makes the "Yes" button grow larger
4. Clicking "Yes" triggers the celebration page with:
   - Confetti animation
   - Floating hearts
   - Celebratory GIF
   - Love message

## Customization

You can customize the GIF by changing the URL in `CelebrationPage.tsx`:

```typescript
<img
  src="YOUR_GIF_URL_HERE"
  alt="Celebration"
  className="celebration-gif"
/>
```

## License

This project is open source and available for personal use.

## Inspiration

Based on the popular Valentine's Day proposal trend where the "No" button playfully avoids being clicked!

## References

- [GitHub - JulerAnderson/valentines-day-proposal](https://github.com/JulerAnderson/valentines-day-proposal)
- [GitHub - Xeven777/valentine](https://github.com/Xeven777/valentine)
- [GitHub - naomit9/valentine-day](https://github.com/naomit9/valentine-day)
