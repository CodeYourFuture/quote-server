const QuoteArea = (props) => {
  return (
    <div className="quote-area">
      <p>{props.data.quote}</p>
      <span>{props.data.author}</span>
      <aside>
        <button onClick={props.handleClick} className="generate">
          Regenerate Quote
        </button>
      </aside>
    </div>
  );
};

export default QuoteArea;
