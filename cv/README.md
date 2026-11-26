# CV

Deja aquí tu currículum con el nombre **`cv.pdf`** (sustituyendo el que haya).

Al compilar (`npm run build` / `ng deploy`), Angular copia este archivo a `/cv/cv.pdf` en la web
(configurado en `angular.json` → `assets`). Los botones "Descargar CV" y "Abrir" apuntan ahí,
así que no hay que tocar código: cambias el PDF, vuelves a desplegar y listo.

- El archivo se descarga como `CV Eneko Rebollo Hernández.pdf`. Ese nombre se cambia en
  `src/app/data/portfolio.data.ts` (`cvFileName`).
- Con `npm start` en marcha, al cambiar el PDF basta con recargar la página.
