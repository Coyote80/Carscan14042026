function ResultCard({ result, hasPreview, previewUrl }) {
  return (
    <div className="card result-card">
      <div className="result-header">
        <span className="badge">Auto Identificado</span>
        <h2>{result.title}</h2>
      </div>

      <div className="result-image-wrap">
        <img
          src={hasPreview ? previewUrl : result.imageUrl}
          alt="Auto identificado"
          className="result-image"
        />
      </div>

      <div className="info-grid">
        {result.specs.map((item) => (
          <div key={item.label} className="info-item">
            <span className="info-label">{item.label}</span>
            <span className="info-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="result-footer">
        <span>Datos simulados estáticamente para mostrar la interfaz.</span>
      </div>
    </div>
  );
}

export default ResultCard;
