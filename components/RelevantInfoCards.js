export default function RelevantInfoCards({ fields }) {
  const { infoCardItems } = fields;

  return (
    <div className="info-cards-section">
      InfocardsLength:
      {infoCardItems.length}
    </div>
  );
}
