const QuoteArea = (props) => {
  return (
    <div>
      <p>{props.data.quote}</p>
      <span>{props.data.author}</span>
      <aside>
        <button>Regenerate Quote</button>
      </aside>
    </div>
  );
};

export default QuoteArea;
