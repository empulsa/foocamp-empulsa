export default function RelevantInfoCards({ fields }) {
  const { infoCardItems } = fields;
  return (
    <section className="relevantCards">
      {infoCardItems.map((card) => (
        <article className="relevantInfocard" key={card.sys.id} style={{ backgroundColor: card.fields.backgroundColor }}>
          <img className="relevantInfocard__icon" src={card.fields.icon.fields.file.url} alt="" />
          <h3 className="relevantInfocard__title">{card.fields.title}</h3>
          <p className="relevantInfocard__info">{card.fields.description}</p>
        </article>
      ))}
    </section>
  );
}
