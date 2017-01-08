import React from 'react';

import './styles/typewriter.css';

export default React.createClass({
  getInitialState() {
    return {
      text : ''
    };
  },

  componentDidMount() {
    const children =
      [].concat(this.props.children);
    const words =
      children.map((child) => (child.props.children.trim()));

    const typeWord = (word, index) => {
      return new Promise((resolve, reject) => {
        this.setState({text:''});
        const loop = (word, index) => {
          if (index === word.length) {
            resolve(
              this.setState({text: word})
            );
          } else {
            this.setState((prevState) => ({
              text: prevState.text + word[index]
            }));
            setTimeout(() => {
              loop(word, index + 1)
            }, 250
            );
          }
        }
        loop(word, index);
      })
    }

    const typeWords = (wordsArr, index) => {
      if (wordsArr.length <= index) {
        return setTimeout(
          () => {
            typeWords(words, 0)
          }, 10000
        );
      }
      typeWord(wordsArr[index], 0)
        .then(() => {
          setTimeout(() => {
            typeWords(wordsArr, index + 1);
          }, 2000)
        });
    }

    typeWords(words, 0);
  },

  render() {
    return (
      <div className='typewriter'>
        {this.state.text}
        <span className='cursor'>|</span>
      </div>
    );
  }
});
