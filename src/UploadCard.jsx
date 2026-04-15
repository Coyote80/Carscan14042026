import { useRef, useState } from 'react';

const carIconUrl = 'https://img.icons8.com/fluency/96/000000/car.png';

function UploadCard({ previewUrl, errorMessage, onFileChange, onDropFile, imageLoaded }) {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];
    onFileChange(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];
    onDropFile(file);
  };

  return (
    <div className="card upload-card">
      <div
        className={`drop-zone ${dragActive ? 'drag-active' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img className="upload-icon" src={carIconUrl} alt="Icono de coche" />
        <div className="upload-copy">
          <h2>Sube una foto del auto</h2>
          <p>Arrastra y suelta aquí o haz clic para seleccionar. Supports JPG, PNG, max 10MB.</p>
        </div>
        <button type="button" className="primary-button" onClick={handleButtonClick}>
          Subir Imagen (Foto)
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="file-input"
          onChange={handleInputChange}
        />
      </div>

      {errorMessage && <p className="error-text">{errorMessage}</p>}

      {imageLoaded && previewUrl && (
        <div className="preview-box">
          <span>Vista previa:</span>
          <img src={previewUrl} alt="Preview de la imagen subida" />
        </div>
      )}
    </div>
  );
}

export default UploadCard;
