// FIX: return an array of <span>{letter}</span> make the span background yellow in the letter is in the search

const highlightText = (searchedText, textToHighlight) => {
  return [<span key={1}>{textToHighlight}</span>];
};

export default highlightText;
