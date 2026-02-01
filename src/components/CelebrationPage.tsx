import { Component } from 'react';
import './CelebrationPage.css';

interface CelebrationPageState {
  showConfetti: boolean;
}

class CelebrationPage extends Component<{}, CelebrationPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showConfetti: true,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ showConfetti: false });
    }, 5000);
  }

  render() {
    const { showConfetti } = this.state;

    return (
      <div className="celebration-page">
        {showConfetti && (
          <div className="confetti-container">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#E67E22', '#D35400', '#F39C12', '#C0392B', '#8B4513'][
                    Math.floor(Math.random() * 5)
                  ],
                }}
              />
            ))}
          </div>
        )}

        {/* Shiuli flower petals falling */}
        <div className="flower-petals">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="petal"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
          {/* Some accent flowers */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`accent-${i}`}
              className="petal accent-petal"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="celebration-content">
          <h1 className="yay-text">I knew you'd say yes, Poushali</h1>

          <div className="sparkle-container">
            <span className="sparkle">✨</span>
            <span className="sparkle"></span>
            <span className="sparkle">✨</span>
          </div>

          <div className="gif-container">
            <div className="flower-frame">
              <div className="frame-flower top-left"></div>
              <div className="frame-flower top-right"></div>
              <div className="frame-flower bottom-left"></div>
              <div className="frame-flower bottom-right"></div>
            </div>
            <img
              src="https://i.pinimg.com/originals/65/71/11/6571113202a23129e160b6f5dfa23cb2.gif"
              alt="Celebration"
              className="celebration-gif"
            />
          </div>

          <p className="love-message">
            Like shiuli flowers that bloom for just one season,<br />
            Some feelings need no reason
          </p>

          <div className="romantic-text">
            <p className="quote">
              "Even if October ends,<br />
              I'll be there... always"
            </p>
          </div>
        </div>

        {/* Orbiting shiuli flowers */}
        <div className="rotating-flowers">
          <div className="orbit-flower orbit-1"></div>
          <div className="orbit-flower orbit-2"></div>
          <div className="orbit-flower orbit-3"></div>
          <div className="orbit-flower orbit-4"></div>
          <div className="orbit-flower orbit-5"></div>
          <div className="orbit-flower orbit-6"></div>
        </div>
      </div>
    );
  }
}

export default CelebrationPage;
