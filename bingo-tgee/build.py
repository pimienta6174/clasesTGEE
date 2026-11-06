#!/usr/bin/env python3
"""Genera bingo-instructor.html y bingo-aprendiz.html (archivos únicos, sin dependencias)."""
import json, pathlib
aqui = pathlib.Path(__file__).parent
preg = json.dumps(json.loads((aqui / 'preguntas.json').read_text(encoding='utf-8')), ensure_ascii=False)
comun = (aqui / 'comun.js').read_text(encoding='utf-8')
for plantilla, salida in [('plantilla-instructor.html', 'bingo-instructor.html'), ('plantilla-aprendiz.html', 'bingo-aprendiz.html')]:
    t = (aqui / plantilla).read_text(encoding='utf-8')
    t = t.replace('/*__PREGUNTAS__*/', preg).replace('/*__COMUN__*/', comun)
    (aqui / salida).write_text(t, encoding='utf-8')
    print('OK', salida, len(t) // 1024, 'KB')
