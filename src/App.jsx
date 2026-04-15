import { useState, useCallback } from 'react';
import Header from './Header.jsx';
import UploadCard from './UploadCard.jsx';
import ResultCard from './ResultCard.jsx';
import './App.css';

const staticResult = {
  title: 'Kia Forte 2018 LX',
  imageUrl: 'https://images.unsplash.com/photo-1541447276831-0ef0c57ae7f6?auto=format&fit=crop&w=800&q=80',
  specs: [
    { label: 'Motor', value: '2.0L MPI I4, 147 hp' },
    { label: 'Transmisión', value: 'Automática de 6 velocidades' },
    { label: 'Rendimiento', value: '13.2 km/l combinado' },
    { label: 'Historial', value: 'Mantenimiento al día' },
    { label: 'Valoración', value: '4.6/5' },
  ],
};

function App() {
  const [previewUrl, setPreviewUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFile = useCallback((file) => {
    setErrorMessage('');

    if (!file) {
      return;
    }

    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 10 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      setPreviewUrl('');
      setErrorMessage('Solo se permiten imágenes JPG o PNG.');
      setImageLoaded(false);
      return;
    }

    if (file.size > maxSize) {
      setPreviewUrl('');
      setErrorMessage('El archivo supera el límite de 10 MB.');
      setImageLoaded(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewUrl(event.target.result);
      setImageLoaded(true);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main className="content-area">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">¿Qué auto es este?</span>
            <h1>Sube una foto y descúbrelo todo.</h1>
            <p>
              Identifica instantáneamente cualquier vehículo y obtén detalles técnicos,
              historial, valoración y más con solo una imagen.
            </p>
          </div>
        </section>

        <section className="main-grid">
          <UploadCard
            previewUrl={previewUrl}
            errorMessage={errorMessage}
            onFileChange={handleFile}
            onDropFile={handleFile}
            imageLoaded={imageLoaded}
          />

          <ResultCard
            result={staticResult}
            hasPreview={imageLoaded}
            previewUrl={previewUrl}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
