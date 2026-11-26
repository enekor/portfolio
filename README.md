# Portfolio · Eneko Rebollo Hernández

Portfolio personal en Angular 18 (componentes standalone, sin librerías de UI).

## Estructura

| Ruta | Qué hay |
| --- | --- |
| `src/app/data/portfolio.data.ts` | **Todo el contenido**: perfil, experiencia, habilidades, proyectos. Para actualizar el portfolio basta con editar este archivo. |
| `src/app/app.component.html` | Maquetación de las secciones (hero, sobre mí, experiencia, proyectos, CV, contacto). |
| `src/styles.css` | Estilos y tokens de diseño (colores, tipografías, responsive). |
| `src/app/shared/` | Iconos SVG en línea y la directiva de animación al hacer scroll. |
| `cv/` | Carpeta donde va tu CV (`cv/cv.pdf`); se publica en `/cv/cv.pdf`. Ver [`cv/README.md`](cv/README.md). |

## Desarrollo

```sh
npm install
npm start          # http://localhost:4200
npm run build      # salida en dist/portfolio/browser
npx ng deploy      # publica en GitHub Pages (angular-cli-ghpages)
```

Al publicar en `https://enekor.github.io/portfolio/` hay que construir con la ruta base correcta:

```sh
npx ng deploy --base-href=/portfolio/
```

## Licencia

MIT. Consulta [LICENSE](LICENSE).
