const MISIONES = {
  1: {nombre: 'Misión 1', tema: 'Levantamiento y diagnóstico', color: '#2E8B00'},
  2: {nombre: 'Misión 2', tema: 'Replanteo y planos', color: '#0A6FB5'},
  3: {nombre: 'Misión 3', tema: 'Iluminación y RETILAP', color: '#C26A00'}
};
const LETRAS = ['A', 'B', 'C', 'D'];
const misionDe = n => Math.ceil(n / 15);
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function norm(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}
function preguntaDe(n) { return PREGUNTAS.find(p => p.n === n); }
/* Orden fijo de las opciones de cada pregunta (igual en el panel y en el aprendiz) */
function opcionesDe(p) {
  const r = mulberry32(p.n * 7919 + 13);
  const a = [{t: p.ok, ok: true}].concat(p.otros.map(t => ({t: t, ok: false})));
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
}
function guardar(clave, valor) { try { localStorage.setItem(clave, JSON.stringify(valor)); return true; } catch (e) { return false; } }
function leer(clave) { try { const v = localStorage.getItem(clave); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
function borrar(clave) { try { localStorage.removeItem(clave); } catch (e) {} }
function hora(ts) {
  return new Date(ts).toLocaleTimeString('es-CO', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
