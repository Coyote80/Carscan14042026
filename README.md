# CarScan Static React

Aplicación React estática que simula la interfaz de una página de identificación de autos.

## Características
- Interfaz similar a la imagen de referencia.
- Área de carga de imagen con drag & drop y botón de selección.
- Validación de archivos JPG/PNG y tamaño máximo de 10 MB.
- Vista previa de la imagen subida.
- Resultado fijo de auto identificado con datos estáticos.
- Uso de imágenes externas para el icono y la foto del auto.
- Implementación completamente del lado del cliente, sin base de datos.

## Estructura del proyecto
- `package.json` - configuración del proyecto y scripts.
- `vite.config.js` - configuración para Vite.
- `public/index.html` - plantilla HTML principal.
- `src/main.jsx` - punto de entrada de React.
- `src/App.jsx` - componente principal.
- `src/Header.jsx` - navegación superior.
- `src/UploadCard.jsx` - componente de carga de imagen.
- `src/ResultCard.jsx` - componente de resultado estático.
- `src/App.css` - estilos de la aplicación.
- `src/index.css` - estilos base.

## Cómo ejecutar
1. Abre la carpeta del proyecto en la terminal.
2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre la URL que muestra Vite en el navegador.

## Cómo usar
1. Haz clic en "Subir Imagen (Foto)" o arrastra un archivo JPG/PNG al recuadro.
2. Si el archivo es válido, verás la vista previa de la imagen.
3. La tarjeta de resultado mostrará un auto identificado con datos estáticos.

## Notas
- Este proyecto es una demostración estática y no consulta ninguna base de datos o API externa para identificar autos.
- El resultado es fijo y está hardcodeado en `src/App.jsx`.
