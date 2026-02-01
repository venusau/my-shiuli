import { Component } from 'react';
import './IntroPage.css';

interface IntroPageProps {
  onContinue: () => void;
}

interface IntroPageState {
  showText: boolean;
  showButton: boolean;
}

class IntroPage extends Component<IntroPageProps, IntroPageState> {
  constructor(props: IntroPageProps) {
    super(props);
    this.state = {
      showText: false,
      showButton: false,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ showText: true });
    }, 500);

    setTimeout(() => {
      this.setState({ showButton: true });
    }, 4000);
  }

  handleContinue = (): void => {
    this.props.onContinue();
  };

  render() {
    const { showText, showButton } = this.state;

    return (
      <div className="intro-page">
        <div className="intro-background">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*NW7d005xZPhm_7bzi55F0w.png"
            alt="October"
            className="intro-bg-image"
          />
          <div className="intro-overlay"></div>
        </div>

        <div className="intro-content">
          {showText && (
            <div className="monologue">
              <p className="mono-line line-1">October came and went...</p>
              <p className="mono-line line-2">The shiuli flowers bloomed and fell...</p>
              <p className="mono-line line-3">But some things,</p>
              <p className="mono-line line-4">Some feelings,</p>
              <p className="mono-line line-5">They don't fade with the seasons.</p>
              <p className="mono-line line-6">They haunt.</p>
              <p className="mono-line line-7">
                From October's silent devotion...<br />
                To forever's inevitable claim.
              </p>
              <p className="mono-line line-8 special">Poushali,</p>
            </div>
          )}

          {showButton && (
            <button className="continue-button" onClick={this.handleContinue}>
              <span className="flower-icon">💮</span>
              Continue
              <span className="flower-icon">💮</span>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default IntroPage;
