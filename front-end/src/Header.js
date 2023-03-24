export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="/" className="header-logo-p">
          randomQuote.com
        </a>
      </div>
      <div className="header-quotes-section">
        <div className="header-quotes-section-allQuotes-wrapper">
          <a href="/quotes" className="header-random-text">
            every Quote
          </a>
        </div>
        <div className="header-quotes-section-search-wrapper">
          <a href="/quotes/search" className="header-search-text">
            search Quote
          </a>
        </div>
      </div>
    </header>
  );
};
