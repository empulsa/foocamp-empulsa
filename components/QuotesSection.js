import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function QuotesSection({ fields }) {
  const { quotes } = fields;

  const getSectionHeadlines = () => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title') ? <h2 className="quotesSection__title">{fields.title}</h2> : false;
    const getSectionText = Object.prototype.hasOwnProperty.call(fields, 'text') ? <div className="quotesSection__text-wrapper">{documentToReactComponents(fields.text)}</div> : false;

    return (
      <>
        {getSectionTitle}
        {getSectionText}
      </>
    );
  };

  const renderQuoteItem = (item) => (
    <div className="quote-item" key={item.sys.id}>
      <div className="quote-item__img-wrapper">
        <img className="quote-item__img" src={item.fields.image.fields.file.url} alt="quote-img" />
      </div>
      <h3 className="quote-item__title">{item.fields.title}</h3>
      <p className="quote-item__subtitle">{item.fields.subtitle}</p>
      <hr />
      <p className="quote-item__info">
        &quot;
        {item.fields.text}
        &quot;
      </p>
    </div>
  );

  return (
    <>
      {getSectionHeadlines()}
      <div className="quotesSection__stories-container">
        {quotes.map((item) => renderQuoteItem(item))}
      </div>
    </>
  );
}
