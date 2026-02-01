import { Component } from 'react';
import type { CSSProperties } from 'react';
import './QuestionPage.css';

interface QuestionPageProps {
  onYesClick: () => void;
}

interface QuestionPageState {
  noButtonPosition: { top: number; left: number };
  yesButtonScale: number;
  noButtonText: string;
}

class QuestionPage extends Component<QuestionPageProps, QuestionPageState> {
  private noButtonTexts: string[] = [
    'No',
    'You think you have a choice?',
    'Really?',
    'Still trying to escape?',
    'There is no escape...',
    'Just accept it',
  ];
  private textIndex: number = 0;

  constructor(props: QuestionPageProps) {
    super(props);
    this.state = {
      noButtonPosition: { top: 50, left: 50 },
      yesButtonScale: 1,
      noButtonText: 'No',
    };
  }

  private getRandomPosition = (): { top: number; left: number } => {
    const padding = 15;
    const top = Math.random() * (100 - padding * 2) + padding;
    const left = Math.random() * (100 - padding * 2) + padding;
    return { top, left };
  };

  private moveNoButton = (): void => {
    const newPosition = this.getRandomPosition();
    this.textIndex = (this.textIndex + 1) % this.noButtonTexts.length;

    this.setState({
      noButtonPosition: newPosition,
      yesButtonScale: this.state.yesButtonScale + 0.15,
      noButtonText: this.noButtonTexts[this.textIndex],
    });
  };

  handleNoButtonInteraction = (e: React.MouseEvent | React.TouchEvent): void => {
    // Prevent the default behavior and stop propagation
    e.preventDefault();
    e.stopPropagation();
    this.moveNoButton();
  };

  handleYesClick = (): void => {
    this.props.onYesClick();
  };

  render() {
    const { noButtonPosition, yesButtonScale, noButtonText } = this.state;

    const noButtonStyle: CSSProperties = {
      position: 'absolute',
      top: `${noButtonPosition.top}%`,
      left: `${noButtonPosition.left}%`,
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.3s ease',
    };

    const yesButtonStyle: CSSProperties = {
      transform: `scale(${yesButtonScale})`,
      transition: 'transform 0.3s ease',
    };

    return (
      <div className="question-page">
        <div className="flowers-background">
          {/* Shiuli flowers - the special ones! */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="flower shiuli"
              style={{
                animationDelay: `${i * 0.3}s`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
          {/* Accent flowers */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`accent-${i}`}
              className="flower accent"
              style={{
                animationDelay: `${i * 0.5}s`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="content">
          <div className="name-header">
            <span className="dear">Dear</span>
            <h2 className="name-text">Poushali</h2>
          </div>

          <h1 className="question">Will you be my Valentine?</h1>
          <p className="subtitle">You already know the answer...</p>

          <div className="buttons-container">
            <button
              className="yes-button"
              onClick={this.handleYesClick}
              style={yesButtonStyle}
            >
              <span className="button-flower"></span>
              Yes!
              <span className="button-flower"></span>
            </button>

            <button
              className="no-button"
              onMouseEnter={this.moveNoButton}
              onTouchStart={this.handleNoButtonInteraction}
              onMouseDown={this.handleNoButtonInteraction}
              style={noButtonStyle}
            >
              {noButtonText}
            </button>
          </div>
        </div>

        <div className="floating-flowers">
          <div className="big-flower flower-1"></div>
          <div className="big-flower flower-2"></div>
          <div className="big-flower flower-3"></div>
          <div className="big-flower flower-4"></div>
        </div>
      </div>
    );
  }
}

export default QuestionPage;
