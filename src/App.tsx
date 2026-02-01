import { Component } from 'react';
import IntroPage from './components/IntroPage';
import QuestionPage from './components/QuestionPage';
import CelebrationPage from './components/CelebrationPage';
import './App.css';

interface AppState {
  currentPage: 'intro' | 'question' | 'celebration';
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentPage: 'intro',
    };
  }

  handleContinueFromIntro = (): void => {
    this.setState({ currentPage: 'question' });
  };

  handleYesClick = (): void => {
    this.setState({ currentPage: 'celebration' });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="app-container">
        {currentPage === 'intro' && (
          <IntroPage onContinue={this.handleContinueFromIntro} />
        )}
        {currentPage === 'question' && (
          <QuestionPage onYesClick={this.handleYesClick} />
        )}
        {currentPage === 'celebration' && (
          <CelebrationPage />
        )}
      </div>
    );
  }
}

export default App;
