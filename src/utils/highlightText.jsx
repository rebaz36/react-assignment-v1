// FIX: return an array of <span>{letter}</span> make the span background yellow in the letter is in the search

const highlightText = (searchedText, textToHighlight) => {
  const regex = new RegExp(searchedText, 'gi');
  const splitText = textToHighlight.split(regex);
  const matchedText = textToHighlight.match(regex);

  return splitText.reduce((acc, text, index) => {
    if (matchedText && matchedText[index]) {
      return [
        ...acc,
        text,
        <span style={{ background: 'yellow' }} key={index}>
          {matchedText[index]}
        </span>,
      ];
    }
    return [...acc, text];
  }, []);
};

export default highlightText;
