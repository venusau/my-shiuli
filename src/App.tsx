import { Component } from 'react';
import QuestionPage from './components/QuestionPage';
import CelebrationPage from './components/CelebrationPage';
import './App.css';

interface AppState {
  showCelebration: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showCelebration: false,
    };
  }

  handleYesClick = (): void => {
    this.setState({ showCelebration: true });
  };

  render() {
    const { showCelebration } = this.state;

    return (
      <div className="app-container">
        {!showCelebration ? (
          <QuestionPage onYesClick={this.handleYesClick} />
        ) : (
          <CelebrationPage />
        )}
      </div>
    );
  }
}

export default App;
