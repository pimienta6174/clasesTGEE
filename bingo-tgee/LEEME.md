# Bingo técnico TGEE

- `bingo-instructor.html`: panel del instructor (compartir pantalla en Teams).
- `bingo-aprendiz.html`: archivo que se comparte con los aprendices (WhatsApp, Teams, etc.).

Los dos son archivos únicos, sin conexión. Para cambiar preguntas: editar `preguntas.json` y ejecutar `python3 build.py`.

Reglas: 45 bolitas (1-15 Misión 1, 16-30 Misión 2, 31-45 Misión 3). Cartón de 3 columnas × 5 filas (una columna por misión). Línea = fila (3) o columna (5); luego cartón lleno (15). Una oportunidad por casilla.
