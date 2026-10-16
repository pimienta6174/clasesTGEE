# Libreto del instructor · Clase 2 · Misión 2: replanteo, cálculos y planos

*Programa Tecnología en Gestión Eficiente de la Energía · SENA · Instructor: Andrés Felipe Valencia*

Presentación: `clase2-replanteo-y-planos.html` · 22 láminas · 224 min en total.

Del diagnóstico al diseño: criterios de replanteo, cuadro de cargas nuevo (16 circuitos), balanceo, tablero, acometida, caída de tensión, ocupación de tubería, puesta a tierra, rótulos, plano y unifilar.

## Cómo usar este libreto

- Cada lámina trae: objetivo, qué preparar, palabras nuevas, **qué decir** (guion), actividad, solución paso a paso, errores comunes, preguntas de comprobación y notas para ti.
- Lo que está entre corchetes `[ ]` es una acción tuya, no se dice en voz alta.
- Regla de la clase: fórmula → ejemplo resuelto → «tu turno» a mano → recién entonces se descubre la respuesta (tecla R).
- Los tiempos son una guía; las secciones «Si falta / sobra tiempo» te dicen qué recortar o ampliar.
- Teclas: ← → cambiar de lámina · F pantalla completa · R descubrir respuesta · D descargar el .html (solo para ti).

**Materiales:** La matriz de hallazgos de la Misión 1 de cada equipo; calculadora y cuaderno; el deck en pantalla completa (F); computador con CAD para el taller; copias de la lista de verificación.

## Palabras que los aprendices necesitan desde el inicio

- **Levantamiento:** Registrar lo que realmente hay instalado.
- **Diagnóstico:** Decir qué está bien, qué está mal y qué tan grave es.
- **Carga:** Lo que consume un equipo o un circuito (VA o W).
- **Circuito ramal:** Cables que salen del breaker hasta las tomas, luces o equipos.
- **Breaker:** Interruptor automático que protege al cable cortando la corriente si es excesiva.
- **Calibre (AWG):** Grosor del cable. Número menor = cable más grueso.
- **L1, L2, N, PE:** Dos líneas de 120 V, el neutro (retorno) y la protección (tierra).
- **VA y W:** VA es potencia aparente (lo que ve el cable); W es potencia real (lo que hace trabajo).
- **GFCI / AFCI:** Protecciones contra fuga a tierra (zonas húmedas) y contra arcos (alcobas, salas…).
- **Acometida:** Cables que traen la energía de la red al tablero de la casa.

## Mapa de tiempos

Sugerencia: dos sesiones. Sesión A: láminas 1–11 (115 min). Sesión B: láminas 12–22 (109 min).

| # | Lámina | Min |
|---|---|---|
| 1 | Portada | 2 |
| 2 | De la Misión 1 a la Misión 2: del diagnóstico al diseño | 5 |
| 3 | Objetivos | 3 |
| 4 | Qué exige el RETIE a nuestro caso | 10 |
| 5 | Del hallazgo a la corrección | 15 |
| 6 | Seis criterios para replantear los circuitos | 10 |
| 7 | Repaso: corriente, breaker y calibre de cada circuito | 12 |
| 8 | Cuadro de cargas propuesto | 20 |
| 9 | Balanceo del cuadro nuevo: antes y después | 14 |
| 10 | El tablero: espacios, reserva y ubicación | 12 |
| 11 | Carga de diseño, demanda y acometida | 12 |
| 12 | Caída de tensión en circuitos ramales | 15 |
| 13 | Canalizaciones: ocupación de la tubería | 15 |
| 14 | Conductor de protección y puesta a tierra | 12 |
| 15 | Colores y rotulado de tramos | 10 |
| 16 | Qué debe mostrar el plano | 8 |
| 17 | Cuadro de convenciones | 6 |
| 18 | Plano de planta del caso | 12 |
| 19 | Diagrama unifilar del tablero | 8 |
| 20 | Lista de verificación antes de entregar | 8 |
| 21 | Taller: su paquete de diseño | 10 |
| 22 | Lo que nos llevamos | 5 |
| | **Total** | **224** |

---

## Lámina 1 · Portada  (2 min)

**Objetivo:** Conectar la clase con lo que se hizo en la Misión 1.

**Preparar:** Pantalla completa con F. Que cada equipo tenga a mano su cuadro y su matriz de hallazgos de la Misión 1.

**Qué decir**

> Bienvenidos a la Misión 2. En la anterior encontramos qué estaba mal en la casa. Hoy decidimos cómo debe quedar y la dejamos dibujada.

> Es la parte más creativa del trabajo, pero ojo: cada decisión que tomemos hoy debe poder justificarse con un cálculo o con un artículo de la norma.

**Nota para ti:** Teclas: flechas, F pantalla completa, R descubre la respuesta, D descarga el .html (solo tú).

---

## Lámina 2 · De la Misión 1 a la Misión 2: del diagnóstico al diseño  (5 min)

**Objetivo:** Entender el orden de trabajo de la clase: criterios, cuadro nuevo, cálculos y plano.

**Preparar:** Dejar visible la lámina de los cinco pasos.

**Palabras nuevas**

- *Replanteo:* Volver a pensar y rediseñar cómo debe ser la instalación a partir de lo que se encontró.
- *Memoria de cálculo:* Documento que muestra los cálculos que respaldan el diseño.

**Qué decir**

> Recuerden el punto de partida: la matriz con nueve hallazgos que hicimos en la Misión 1. Hoy los convertimos en un diseño.

> Seguimos cinco pasos. Uno: la matriz de hallazgos. Dos: unos criterios de diseño. Tres: el cuadro de cargas nuevo, con circuitos, breakers y calibres. Cuatro: los cálculos que lo respaldan: caída de tensión, ocupación de tubería, tamaño del tablero. Cinco: el plano.

> Primero decidimos y calculamos, y después dibujamos. Dibujar antes de calcular es la forma más segura de tener que rehacer el plano.

> La regla de oro no cambia: fórmula, ejemplo, ustedes calculan a mano y solo después descubrimos la respuesta.

**Actividad:** Pregunta rápida: ¿qué hallazgo de la Misión 1 les parece más urgente corregir y por qué? Dos respuestas.

**Preguntas de comprobación**

- ¿Qué hacemos primero, el plano o los cálculos? → *Los cálculos y el cuadro: el plano debe reflejar decisiones ya tomadas.*

---

## Lámina 3 · Objetivos  (3 min)

**Objetivo:** Que cada aprendiz sepa qué hará hoy y qué entregará.

**Qué decir**

> Al terminar ustedes van a poder cuatro cosas. Corregir: convertir cada hallazgo en una propuesta y armar el cuadro de cargas nuevo. Calcular: caída de tensión, ocupación de tubería, reserva del tablero y acometida.

> Dibujar: el plano de planta con su cuadro de convenciones, los tramos rotulados y el diagrama unifilar. Y verificar: revisar su propio diseño con una lista de control antes de entregarlo.

> El entregable es un paquete de diseño: cuadro propuesto, plano de planta, unifilar, tabla de tramos y memoria de cálculo.

**Preguntas de comprobación**

- Nombre dos documentos del paquete de diseño. → *Por ejemplo cuadro propuesto, plano de planta, unifilar, tabla de tramos, memoria de cálculo.*

---

## Lámina 4 · Qué exige el RETIE a nuestro caso  (10 min)

**Objetivo:** Entender por qué el plano forma parte de un diseño detallado y qué exige el RETIE a una remodelación.

**Preparar:** Tener presente el dato de 15 kVA de la clase anterior.

**Palabras nuevas**

- *Diseño detallado:* Diseño completo hecho por un ingeniero, con cálculos y planos.
- *Armónicos:* Distorsión de la corriente que producen equipos electrónicos. El diseño detallado los considera.
- *Diagrama unifilar:* Dibujo simplificado que muestra todo el circuito con una sola línea por conductor.
- *Certificación plena:* Dictamen de inspección más declaración de cumplimiento.
- *Remodelación:* Cambio importante en una instalación existente.

**Qué decir**

> Hagamos un repaso rápido de lo que dice el RETIE para una casa como la nuestra. Recuerden que supera los 15 kVA instalables.

> Por eso necesita diseño detallado hecho por un ingeniero, libro 3, artículo 3.3.1, literal q. Y ese diseño incluye muchas cosas: cálculo de cargas con factor de potencia y armónicos, protecciones, puesta a tierra, canalizaciones, regulación de tensión, diagramas unifilares y planos, artículo 3.3.1.1.

> La remodelación también cuenta. Si se remodela más del 50 por ciento de los dispositivos o conductores y la parte remodelada supera 10 kVA, hace falta certificación plena, libro 4, artículo 4.3.2.2. En nuestro caso casi toda la instalación se rehace, así que aplica.

> Y la certificación plena es el dictamen de inspección más la declaración de cumplimiento, artículo 4.3.2.

> ¿Quién firma? Las personas con competencia legal según su matrícula: ingenieros, tecnólogos y técnicos, dentro del alcance de su matrícula, artículo 3.2.1. En el curso hacemos el diseño como práctica de formación; la firma legal corresponde al profesional competente.

**Actividad:** Pregunta: si la casa fuera de 12 kVA y tuviera una sola cuenta, ¿qué documento bastaría?

**Solución paso a paso**

1. Un esquema constructivo firmado por una persona competente (artículo 3.3.2).
2. No requeriría diseño detallado ni certificación plena por capacidad.

**Errores comunes**

- Creer que el diseño se reduce al plano: incluye los cálculos y la memoria.

**Preguntas de comprobación**

- ¿Qué dos documentos incluye un diseño detallado, además del plano? → *Cálculos (cargas, protecciones, regulación, canalizaciones) y diagrama unifilar.*
- ¿Quién firma legalmente el diseño? → *El profesional con competencia según su matrícula.*

**Nota para ti:** Verificado contra la Resolución 40284 de 2026, Libros 3 y 4.

---

## Lámina 5 · Del hallazgo a la corrección  (15 min)

**Objetivo:** Convertir cada uno de los 9 hallazgos en una propuesta justificada.

**Preparar:** Cada equipo con su matriz de la Misión 1. No proyecte la respuesta todavía.

**Qué decir**

> Retomen la matriz de la Misión 1. Cada uno escribe en su cuaderno la propuesta para cada hallazgo. Les doy cinco minutos y luego comparan en parejas.

> [Después pulse «Descubrir propuestas» y vaya fila por fila, preguntando primero «¿por qué?» antes de confirmar.]

**Actividad:** Escribir una propuesta para cada hallazgo, con su porqué.

**Solución paso a paso**

1. 1. Cooktop con 12 AWG: el cable no aguanta la corriente (30 A frente a un máximo de 20 A). Propuesta: circuito de 2×40 A con 8 AWG de cobre (30 × 1,25 = 37,5 A).
2. 2. Cocina en un breaker de 40 A con 12 AWG y 30,4 A: el breaker no protege al cable. Propuesta: nevera y microondas individuales, y dos circuitos de 20 A para mesón, desayunador y comedor.
3. 3. Mesón sin GFCI: GFCI en las tomas del mesón (210.8(A)).
4. 4. Baños y garaje sin GFCI y juntos: un circuito de baños y otro de garaje, ambos de 1×20 A con GFCI.
5. 5. 14 AWG con breaker de 20 A: cambiar a 12 AWG, o bajar el breaker a 15 A.
6. 6. Todo el 120 V en L1: repartir los circuitos de un polo entre L1 y L2.
7. 7. Puesta a tierra sin medir: medir y corregir; referencia de 25 Ω en el neutro de acometida (Libro 3, 3.12.3).
8. 8. Sin directorio ni reserva: rotular cada circuito (408.4(A)) y dejar espacios libres.
9. 9. Alumbrado con tomas y dos aires en un breaker: un circuito por aire; separar alumbrado y tomas.

**Errores comunes**

- Proponer «cambiar el breaker por uno más grande»: es exactamente el error que cometió el que instaló.
- Proponer sin justificar: en esta clase cada propuesta debe responder «¿por qué?».

**Preguntas de comprobación**

- ¿Qué se hace con un cable 14 AWG con breaker de 20 A? → *Cambiar el cable a 12 AWG o bajar el breaker a 15 A: el breaker nunca debe superar lo que el cable aguanta.*

**Si falta o sobra tiempo:** Si falta tiempo, reparta los hallazgos 1 al 4 a unos equipos y 5 al 9 a otros, y luego comparten.

---

## Lámina 6 · Seis criterios para replantear los circuitos  (10 min)

**Objetivo:** Conocer los seis criterios con los que se rediseña por zona y tipo de carga.

**Preparar:** Escribir los seis criterios en el tablero abreviados.

**Palabras nuevas**

- *Reserva:* Espacios libres del tablero para ampliaciones futuras.
- *Directorio de circuitos:* Lista rotulada de qué alimenta cada breaker.

**Qué decir**

> No parchamos: rediseñamos por zona y tipo de carga. Son seis criterios.

> Uno: un circuito por carga grande: cooktop, horno, nevera, microondas, lavandería y cada aire. Así, si uno falla, los demás siguen funcionando, y cada equipo tiene el breaker que pide su placa.

> Dos: separar el alumbrado de las tomas, y proteger con AFCI las áreas que pide el 210.12(A): alcobas, salas, cocina y lavandería. Si un toma falla, no nos quedamos a oscuras.

> Tres: la cocina bien resuelta. Dos circuitos de 20 amperios para el mesón, el desayunador y el comedor, GFCI en el mesón, y la nevera en circuito individual. Cuatro: baños y garaje aparte, cada uno con su circuito de 20 A y GFCI.

> Cinco: balancear L1 y L2, con una meta de desbalance menor al 5 por ciento. Seis: dejar reserva y rotular. Aclaro que la reserva del 25 por ciento y el límite del 5 por ciento de desbalance son criterios del curso, no cifras de la norma.

**Actividad:** Pregunta: ¿por qué conviene un circuito individual para cada aire acondicionado?

**Solución paso a paso**

1. Si uno falla o dispara, los demás siguen.
2. Cada equipo se protege con la corriente de su placa.
3. Se evitan sobrecargas por compartir un solo breaker.

**Errores comunes**

- Dejar los tomas de cocina y de sala en el mismo circuito.
- Agrupar equipos grandes para «ahorrar breakers».

**Preguntas de comprobación**

- ¿Cuántos circuitos de 20 A exige el mesón? → *Mínimo dos (210.11(C)(1)).*

---

## Lámina 7 · Repaso: corriente, breaker y calibre de cada circuito  (12 min)

**Objetivo:** Reactivar I = S ÷ V y elegir breaker y calibre para equipos nuevos.

**Preparar:** Escribir la tabla 14 AWG = 15 A, 12 = 20 A, 10 = 30 A en el tablero.

**Qué decir**

> Repasemos lo de la clase anterior, porque lo necesitamos para el cuadro. I igual S dividido V; si la carga es continua, multiplicamos por 1,25; el breaker comercial es el siguiente valor estándar. Y los límites del calibre: 14 AWG hasta 15 A, 12 AWG hasta 20 A, 10 AWG hasta 30 A.

> [Resuelva el ejemplo del horno.] El horno de convección: 2000 VA a 240 V. I es 2000 dividido 240, 8,33 amperios. Escojo breaker de 2 polos y 20 amperios, cable 12 AWG de cobre.

> Tu turno: nevera, microondas y lavadora-secadora. Tres minutos.

**Actividad:** Calcular I, breaker y calibre de la nevera (941 VA), el microondas (1263 VA) y la lavadora-secadora (1667 VA), todos a 120 V.

**Solución paso a paso**

1. Nevera: 941 ÷ 120 = 7,84 A. Breaker 1×20 A, 12 AWG.
2. Microondas: 1263 ÷ 120 = 10,53 A. Breaker 1×20 A, 12 AWG.
3. Lavadora-secadora: 1667 ÷ 120 = 13,89 A. Breaker 1×20 A, 12 AWG; el circuito de lavandería es de 20 A (210.11(C)(2)).

**Errores comunes**

- Usar 240 V para cargas de 120 V.
- Elegir breaker de 15 A «porque 7,84 A es poco»: depende del circuito (aquí la placa y la norma mandan).

**Preguntas de comprobación**

- ¿Qué calibre mínimo protege un breaker de 20 A? → *12 AWG.*

**Nota para ti:** Si preguntan «¿por qué 12 AWG y no 14 en el horno?»: con 8,33 A, el mínimo calculado sería 2×15 A con 14 AWG (240.4(D)(3)), y es válido. El curso adopta 2×20 A y 12 AWG como estándar de circuitos de equipos fijos por uniformidad, holgura y resistencia mecánica. Revisa siempre la placa del equipo: si indica una ampacidad mínima o una protección máxima distintas, manda la placa. El 10 AWG solo aparece cuando el breaker necesario supera 20 A (cargas de más de unos 4,8 kVA a 240 V).

---

## Lámina 8 · Cuadro de cargas propuesto  (20 min)

**Objetivo:** Entender cómo se arma un cuadro de cargas nuevo y asignar L1 y L2 a los circuitos de un polo.

**Preparar:** Imprimir o tener el cuadro con la columna de línea oculta. Tener lápiz y la lista de circuitos de un polo con sus VA.

**Palabras nuevas**

- *PE:* Conductor de protección (tierra) de cada circuito. Se dimensiona según el breaker.
- *Circuito de un polo:* Usa una línea y el neutro (120 V).
- *Circuito de dos polos:* Usa L1 y L2 (240 V).

**Qué decir**

> Este es el cuadro nuevo sobre la casa del bulevar: 16 circuitos con su carga, corriente, breaker, calibre y conductor de protección. La columna de línea está oculta, y esa va a ser su tarea.

> Primero cómo se armó, para que entiendan la lógica. Uno: agrupamos las salidas por zona y tipo: alumbrado, tomas, cocina, equipos. Dos: aplicamos las reglas de la norma: dos circuitos de pequeños artefactos, uno de baños, uno de garaje, uno de lavandería. Tres: calculamos la carga de cada circuito. Cuatro: elegimos el breaker y el calibre. Cinco: asignamos las líneas.

> Fíjense en los circuitos C6 y C7, de pequeños artefactos. Aparecen con 1500 VA porque ese es el mínimo que la norma obliga a contar por circuito, aunque físicamente tengan menos tomas.

> Ahora su tarea. Los circuitos de dos polos ya usan las dos líneas. Ustedes asignan L1 o L2 a cada uno de los 11 circuitos de un polo, tratando de que las dos líneas queden parejas. Cinco minutos en parejas.

> Les doy un método sencillo para hacerlo a mano. Ordenen los circuitos de mayor a menor y vayan poniendo cada uno en la línea que, en ese momento, lleva menos carga. [Muéstrelo en el tablero.]

> [Cuando terminen, pulse «Descubrir línea de cada circuito» y compare.]

**Actividad:** Asignar L1 o L2 a cada circuito de 1 polo para balancear.

**Solución paso a paso**

1. Circuitos de un polo, de mayor a menor: C10 1667, C6 1500, C7 1500, C3 1440, C4 1440, C9 1263, C8 941, C5 360, C11 360, C1 270, C2 180.
2. Método de «la línea más liviana»: C10 a L1 (1667/0), C6 a L2 (1667/1500), C7 a L2 (1667/3000), C3 a L1 (3107/3000), C4 a L2 (3107/4440), C9 a L1 (4370/4440), C8 a L1 (5311/4440), C5 a L2 (5311/4800), C11 a L2 (5311/5160), C1 a L2 (5311/5430), C2 a L1 (5491/5430).
3. Resultado a mano: L1 = 5491 VA y L2 = 5430 VA, una diferencia de 61 VA.
4. La propuesta del cuadro (óptimo hallado por un programa que probó las 2048 combinaciones): L1 = C1, C6, C7, C8, C9 (5474 VA) y L2 = C2, C3, C4, C5, C10, C11 (5447 VA), con 27 VA de diferencia.

**Errores comunes**

- Poner todos los circuitos grandes en la misma línea.
- Olvidar que C6 y C7 se cuentan a 1500 VA.
- Sumar los circuitos de dos polos dentro de una sola línea.

**Preguntas de comprobación**

- ¿Por qué C6 y C7 aparecen con 1500 VA? → *Porque la norma obliga a contar 1500 VA por circuito de pequeños artefactos (220.52(A)).*
- ¿Cuántos circuitos de un polo hay? → *11.*

**Si falta o sobra tiempo:** Si hay tiempo, pida que comparen su resultado con el óptimo: «¿qué tan cerca llegaron?». Nadie tiene que haber acertado exactamente la misma combinación.

**Nota para ti:** La carga de diseño es 25 455 VA (106,1 A) porque cuenta los 3000 VA mínimos de pequeños artefactos. La carga conectada antes era 23 895 VA. Reparto de tomas: C3 sala, pasillo y terraza; C4 alcobas y vestier; C5 baños; C6 mesón y desayunador; C7 mesón y comedor; C11 garaje. El óptimo matemático deja C6 y C7 en la misma línea: si prefieres separarlos, el balanceo apenas empeora.

---

## Lámina 9 · Balanceo del cuadro nuevo: antes y después  (14 min)

**Objetivo:** Calcular el balanceo del cuadro nuevo y compararlo con el de la Misión 1.

**Preparar:** Tener la fórmula de la clase anterior a la vista.

**Qué decir**

> Recuerden las fórmulas. La carga de L1 es la suma de los circuitos de un polo en L1, más la mitad de los de dos polos. El desbalance es la diferencia entre las dos líneas dividida por el promedio, por cien.

> Tu turno con el cuadro propuesto. Los circuitos de dos polos suman 14 534 VA, o sea 7267 por línea. Calculen L1, L2, el desbalance y la corriente del neutro.

> [Cuando terminen, pulse «Descubrir respuesta». Muéstreles las cuatro barras: antes y ahora.]

> Fíjense en la comparación. Antes, L1 llevaba más del doble que L2 y el neutro llevaba casi 78 amperios. Ahora las dos líneas son prácticamente iguales y el neutro casi no lleva corriente.

**Actividad:** Calcular L1, L2, desbalance, corriente del neutro y de cada línea.

**Solución paso a paso**

1. Circuitos de un polo en L1: C1 270 + C6 1500 + C7 1500 + C8 941 + C9 1263 = 5474 VA.
2. Circuitos de un polo en L2: C2 180 + C3 1440 + C4 1440 + C5 360 + C10 1667 + C11 360 = 5447 VA.
3. Circuitos de dos polos: horno 2000 + cooktop 7200 + 3 aires × 1778 (5334) = 14 534 VA; mitad por línea: 7267 VA.
4. L1 = 5474 + 7267 = 12 741 VA. L2 = 5447 + 7267 = 12 714 VA.
5. Desbalance = (12 741 − 12 714) ÷ ((12 741 + 12 714) ÷ 2) × 100 = 27 ÷ 12 727,5 × 100 = 0,21 %.
6. Corriente del neutro = |5474 − 5447| ÷ 120 = 27 ÷ 120 = 0,23 A.
7. I de L1 = 5474 ÷ 120 + 14 534 ÷ 240 = 45,6 + 60,6 = 106,2 A. I de L2 = 5447 ÷ 120 + 60,6 = 105,9 A.

**Errores comunes**

- Mezclar los circuitos de dos polos en la suma de una sola línea.
- Dividir por 240 las corrientes de los circuitos de un polo.
- Usar el total de VA como promedio.

**Preguntas de comprobación**

- ¿Qué corriente lleva el neutro si las dos líneas están perfectamente balanceadas? → *Prácticamente cero.*
- ¿De dónde sale el 7267? → *De dividir entre 2 los 14 534 VA de los circuitos de dos polos.*

---

## Lámina 10 · El tablero: espacios, reserva y ubicación  (12 min)

**Objetivo:** Calcular cuántos espacios necesita el tablero y dónde puede ir.

**Preparar:** Dibujar un tablero con casillas para mostrar los espacios.

**Palabras nuevas**

- *Espacio:* Lugar para un polo de breaker. Uno de 2 polos ocupa 2 espacios.
- *Espacio de trabajo:* Zona libre frente al tablero para operarlo con seguridad.

**Qué decir**

> El tablero tiene espacios, como casillas. Un breaker de un polo ocupa una casilla; uno de dos polos ocupa dos. El breaker general va aparte.

> Fórmula: espacios requeridos igual espacios usados dividido uno menos la reserva. Si queremos 25 por ciento de reserva, dividimos por 0,75.

> Ejemplo: con 12 espacios usados y 25 por ciento de reserva: 12 dividido 0,75 es 16, así que un tablero de 18 espacios, que es el tamaño comercial inmediato.

> Tu turno: nuestro cuadro tiene 11 circuitos de un polo y 5 de dos polos. ¿Cuántos espacios usa y qué tablero necesitamos?

> Y la ubicación. El tablero debe quedar accesible, sin obstáculos, y fuera de los baños. Además necesita espacio de trabajo: de ancho el del equipo o 0,76 metros, el mayor, y de altura libre 2 metros. La profundidad sale de una tabla del artículo 110.26.

**Actividad:** Calcular los espacios del tablero con 25 % de reserva.

**Solución paso a paso**

1. Espacios usados = 11 × 1 + 5 × 2 = 21.
2. Espacios requeridos = 21 ÷ 0,75 = 28.
3. Tablero comercial inmediato: 30 espacios.

**Errores comunes**

- Contar los circuitos de dos polos como un espacio.
- Olvidar la reserva.
- Poner el tablero en el baño o detrás de una puerta que lo tape.

**Preguntas de comprobación**

- ¿Cuántos espacios ocupa un breaker de 2 polos? → *Dos.*
- ¿Cuánto debe medir el espacio de trabajo en ancho y en altura? → *Ancho: el del equipo o 0,76 m, el mayor. Altura: 2,0 m.*

**Nota para ti:** La profundidad del espacio de trabajo está en la Tabla 110.26(A)(1), que es imagen en el .md: confírmala. Los tamaños comerciales (12 a 42 espacios) dependen del fabricante.

---

## Lámina 11 · Carga de diseño, demanda y acometida  (12 min)

**Objetivo:** Determinar la protección general y el conductor de la acometida a partir de la carga demandada.

**Preparar:** Tener abiertas las tres cifras: 25 455, 20 334 y 23 895.

**Palabras nuevas**

- *Carga de diseño:* Carga con los mínimos de la norma para dimensionar el tablero y los circuitos.
- *Carga demandada:* Carga con factores de demanda, para dimensionar la acometida.
- *Carga conectada:* Lo que realmente había instalado (Misión 1).

**Qué decir**

> Hay tres cifras que no hay que confundir. La carga de diseño, 25 455 VA, cuenta los mínimos de la norma para dimensionar los circuitos. La demandada, 20 334 VA, es la de la Misión 1, con factores de demanda, y sirve para dimensionar la acometida. Y la conectada, 23 895, es lo que había instalado antes.

> Tu turno: con la demandada, calculen la corriente a 240 voltios y decidan la protección general y el conductor de la acometida.

> [Pulse «Descubrir respuesta».] La corriente es 84,7 amperios. El valor comercial inmediato sería 90, pero la vivienda unifamiliar pide mínimo 100 amperios, artículo 225.39(C), así que el general es de 2 polos y 100 A. El conductor es 3 AWG de cobre, que soporta 100 A a 75 grados.

> Un dato adicional del RETIE: la regulación de tensión en la acometida, calculada en el dispositivo de corte, no debe pasar del 3 por ciento. Lo veremos en el cálculo de caída de tensión.

**Actividad:** Calcular la corriente de la demanda y elegir protección y conductor.

**Solución paso a paso**

1. I = 20 334 ÷ 240 = 84,7 A.
2. Comercial inmediato: 90 A, pero el mínimo para vivienda unifamiliar es 100 A (225.39(C)).
3. Protección general: 2×100 A.
4. Conductor de la acometida: 3 AWG de cobre (100 A a 75 °C).

**Errores comunes**

- Usar la carga de diseño (25 455) para la acometida en lugar de la demandada.
- Elegir 90 A sin acordarse del mínimo de 100 A.

**Preguntas de comprobación**

- ¿Qué carga se usa para dimensionar la acometida? → *La demandada (20 334 VA).*
- ¿Cuál es el mínimo de protección general en vivienda unifamiliar? → *100 A.*

**Nota para ti:** El 3 AWG sale de la Tabla 310.15(B)(16), que es imagen en el .md: confírmalo en la norma impresa. RETIE Libro 3, Título 26, literal f: regulación en la acometida no mayor al 3 % en el dispositivo de corte.

---

## Lámina 12 · Caída de tensión en circuitos ramales  (15 min)

**Objetivo:** Calcular la caída de tensión de un ramal y comprobar los límites del RETIE y de la NTC 2050.

**Preparar:** Escribir la fórmula en el tablero. Tener a mano el plano con las longitudes.

**Palabras nuevas**

- *Caída de tensión:* Pérdida de voltaje por la resistencia del cable. A mayor longitud y corriente, mayor caída.
- *Resistividad (ρ):* Propiedad del material. Para el cobre, 0,0175 Ω·mm²/m.
- *Sección (S):* Área del conductor en mm². 14 AWG = 2,08, 12 AWG = 3,31, 10 AWG = 5,26, 8 AWG = 8,37.
- *Longitud de ida (L):* Metros desde el tablero hasta el punto más lejano del circuito.

**Qué decir**

> Un cable no es perfecto: tiene resistencia. Cuando pasa corriente, se «pierde» un poco de voltaje en el recorrido. Eso es la caída de tensión. Si es demasiada, los equipos funcionan mal: un motor se calienta, un bombillo pierde brillo.

> La fórmula: ΔV igual 2 por ρ por L por I dividido S. El 2 es porque la corriente va y vuelve: dos conductores. L es la longitud de ida, en metros, hasta la salida más lejana. I es la corriente. S es la sección del cable. Después, el porcentaje es ΔV dividido por la tensión, por cien.

> Ejemplo: 25 metros, 16 amperios, cable 12 AWG, 120 voltios. 2 por 0,0175 por 25 por 16 son 14. Dividido 3,31 da 4,23 voltios. Sobre 120 son 3,5 por ciento: conviene un calibre mayor.

> ¿Qué dice la norma? La NTC 2050, en una nota informativa de los artículos 210.19(A) y 215.2(A)(1), recomienda que el circuito ramal no pase de 3 por ciento hasta la salida más lejana y que, sumando alimentador y ramal, no pase de 5 por ciento. Es una recomendación. Y el RETIE sí lo exige: libro 3, título 26, literal f: la regulación en la acometida no puede pasar del 3 por ciento, y la caída en alimentadores y circuitos ramales a carga plena de diseño, no más del 5 por ciento.

> Tu turno, con longitudes medidas sobre el plano: el cooktop, 8 metros, 30 amperios, cable 8 AWG, 240 voltios; y las tomas de las alcobas, 22 metros, 12 amperios, cable 12 AWG, 120 voltios.

**Actividad:** Calcular ΔV y ΔV % del cooktop y de las tomas de alcobas.

**Solución paso a paso**

1. a) Cooktop: 2 × 0,0175 × 8 × 30 = 8,4; 8,4 ÷ 8,37 = 1,00 V; 1,00 ÷ 240 × 100 = 0,42 %.
2. b) Tomas de alcobas: 2 × 0,0175 × 22 × 12 = 9,24; 9,24 ÷ 3,31 = 2,79 V; 2,79 ÷ 120 × 100 = 2,33 %.
3. Ambos están por debajo del 3 %.

**Errores comunes**

- Olvidar el 2 de la fórmula.
- Dividir por la tensión equivocada: el cooktop va a 240 V.
- Usar la longitud en línea recta en vez del recorrido real.
- Confundir 3 % con 5 %: el 3 % es del ramal y el 5 % es el total.

**Preguntas de comprobación**

- ¿Qué significa el 2 en la fórmula? → *Que la corriente va y vuelve: hay dos conductores.*
- ¿Qué pasa si la caída supera el límite? → *Subir un calibre, acortar el recorrido, dividir el circuito o mover el tablero.*

**Si falta o sobra tiempo:** Con distribuidas las cargas a lo largo del circuito, la caída real es menor que la calculada con toda la corriente al final (la mitad aproximadamente). Aquí usamos el caso más exigente.

**Nota para ti:** 3 % por ramal y 5 % total: nota informativa de 210.19(A) y 215.2(A)(1) de la NTC 2050 (recomendación). 3 % en la acometida y 5 % en alimentadores y ramales: Libro 3, Título 26, literal f del RETIE (exigible). Las longitudes del plano (cooktop 8 m, alcobas 22 m) son aproximaciones con un recargo por bajantes; en obra se miden.

---

## Lámina 13 · Canalizaciones: ocupación de la tubería  (15 min)

**Objetivo:** Calcular el porcentaje de ocupación de una tubería y compararlo con el límite.

**Preparar:** Dibujar el corte de un tubo con tres círculos dentro.

**Palabras nuevas**

- *EMT:* Tubería metálica eléctrica de pared delgada.
- *Ocupación:* Porcentaje del área interior del tubo ocupado por los cables.
- *THHN/THWN-2:* Tipo de aislamiento de cable de uso común.

**Qué decir**

> Un tubo no puede llenarse de cables: se calentarían y sería imposible halarlos. La norma limita cuánto del área interior del tubo pueden ocupar los conductores. Es la ocupación.

> Fórmula: porcentaje de ocupación igual a la suma de las áreas de los conductores dividida por el área interior del tubo, por cien. Los límites del capítulo 9, tabla 1: 53 por ciento con un conductor, 31 con dos y 40 por ciento con más de dos. El conductor de protección también ocupa espacio.

> Áreas de referencia: el cable 12 AWG ocupa 8,58 milímetros cuadrados, el 10 AWG 13,61 y el 8 AWG 23,61. Un tubo EMT de media pulgada tiene 196 milímetros cuadrados de área interior y uno de tres cuartos, 343.

> Ejemplo: tres conductores 12 AWG en EMT de media pulgada. 3 por 8,58 son 25,74. Dividido 196 da 13,1 por ciento. Como hay más de dos conductores el límite es 40: cumple.

> Tu turno: el tramo del cooktop, con dos conductores 8 AWG y un conductor de protección 10 AWG. ¿Qué porcentaje de ocupación hay en EMT de media y de tres cuartos?

**Actividad:** Calcular la ocupación del tramo del cooktop en EMT de ½ y de ¾.

**Solución paso a paso**

1. Suma de áreas = 2 × 23,61 + 13,61 = 60,83 mm².
2. En ½": 60,83 ÷ 196 × 100 = 31,0 %.
3. En ¾": 60,83 ÷ 343 × 100 = 17,7 %.
4. Ambos cumplen (límite 40 %), pero ¾" deja más holgura para halar los cables.

**Errores comunes**

- Olvidar el conductor de protección en la suma.
- Usar el límite de 53 % cuando hay más de un conductor.
- Mezclar áreas: se suma el área exterior de cada conductor, no la del cobre.

**Preguntas de comprobación**

- ¿Qué límite aplica con tres conductores? → *40 %.*
- ¿Cuenta el conductor de protección? → *Sí, ocupa espacio físico aunque no lleve corriente en servicio normal.*

**Si falta o sobra tiempo:** Con 4 o más conductores portadores de corriente en un tubo también se aplica un factor de ajuste de ampacidad (310.15(C)(1)).

**Nota para ti:** Las áreas (Tablas 4 y 5 del Cap. 9) están en imagen en el .md; los valores de la lámina son los habituales. En «esquema constructivo.md» las áreas de ejemplo (6,02 mm² para 12 AWG y 138 mm² para el tubo ½") difieren de estos valores, aunque su 13,1 % coincide. Confirma ambas en la tabla.

---

## Lámina 14 · Conductor de protección y puesta a tierra  (12 min)

**Objetivo:** Elegir el conductor de protección según el breaker y comparar una resistencia de puesta a tierra con la referencia.

**Preparar:** Dibujar una varilla enterrada y el cable que la une al tablero.

**Palabras nuevas**

- *Conductor de protección (PE):* Cable verde o desnudo que va con cada circuito para llevar las fugas a tierra.
- *Electrodo:* Varilla o elemento enterrado que conecta con el suelo.
- *Resistencia de puesta a tierra:* Qué tan fácil le es a la corriente irse al suelo. Menos ohmios es mejor.
- *Resistividad del suelo:* Qué tanto se opone el terreno a la corriente.

**Qué decir**

> Cada circuito lleva, además de los cables que llevan corriente, un conductor de protección, el PE. No lleva corriente en funcionamiento normal: está ahí para que, si algo se energiza por error, la corriente tenga un camino hacia tierra y el breaker dispare.

> Su calibre depende del breaker: con 15 A, 14 AWG; con 20 A, 12 AWG; de 30 a 60 A, 10 AWG; con 100 A, 8 AWG. Así que el cooktop, con 40 A, lleva 10 AWG de protección, aunque sus cables activos son 8 AWG.

> Y la puesta a tierra: se entierra un electrodo, una varilla, y se conecta al tablero. Mientras menor sea la resistencia de esa conexión con el suelo, mejor.

> Ejemplo: una varilla de 2,40 metros y 0,016 de diámetro en un suelo de 100 ohmios-metro. R aproximada igual a ρ dividido 2π L, por el logaritmo natural de 4L sobre d menos 1. Eso da unos 35,8 ohmios.

> La referencia del RETIE para el punto neutro de acometida en baja tensión es de 25 ohmios, Libro 3, Tabla 3.12.3.a. Tu turno: con 35,8 ohmios, ¿cumple? ¿Qué haría?

**Actividad:** ¿Cumple 35,8 Ω la referencia de 25 Ω? ¿Qué se hace?

**Solución paso a paso**

1. No cumple: 35,8 es mayor que 25.
2. Se agregan electrodos en paralelo o se mejora el terreno, y se mide en campo.
3. El valor de aceptación es la medición, no la estimación.

**Errores comunes**

- Creer que una estimación basta: se debe medir.
- Pensar que menos ohmios es peor: es al contrario.

**Preguntas de comprobación**

- ¿Qué PE lleva un circuito de 20 A? → *12 AWG.*
- ¿Por qué el PE del cooktop es 10 AWG si sus cables son 8 AWG? → *Porque el PE se elige según el breaker (40 A → 10 AWG), no según el cable activo.*

**Nota para ti:** La Tabla 250.122 es imagen en el .md; los valores son los típicos: confírmalos. La referencia de 25 Ω sí está en el RETIE (Libro 3, 3.12.3.a).

---

## Lámina 15 · Colores y rotulado de tramos  (10 min)

**Objetivo:** Identificar los colores de los conductores y escribir el rótulo de un tramo.

**Preparar:** Tener cintas o cables de los cuatro colores en la mesa si es posible.

**Palabras nuevas**

- *Tramo:* Parte del recorrido de un conjunto de cables dentro de un tubo.
- *Rótulo:* Texto corto en el plano que describe un tramo.

**Qué decir**

> El RETIE exige un código de colores para evitar errores. Neutro, blanco. Tierra de protección, verde o desnudo. Y para L1 y L2 en 120/240 voltios, negro y rojo, según la Tabla 3.5.a del libro 3, título 5.

> En el plano, cada tramo de tubería lleva un rótulo con toda la información. Por ejemplo: T-13, dos conductores de cobre 8 AWG para L1 y L2, más un conductor de protección de cobre 10 AWG, aislamiento THHN/THWN-2, 600 voltios, dentro de una tubería EMT de tres cuartos, circuito C-13, protección de dos polos y 40 amperios.

> Tu turno: escriban el rótulo del tramo del circuito C6, pequeños artefactos de cocina, en tubería EMT de media pulgada.

**Actividad:** Escribir el rótulo del tramo T-06.

**Solución paso a paso**

1. T-06: 1 × Cu 12 AWG (L) + 1 × Cu 12 AWG (N) + 1 × Cu 12 AWG (PE), THHN/THWN-2, 600 V, en EMT Ø ½", circuito C-6, protección 1P-20 A.

**Errores comunes**

- Olvidar el neutro en un circuito de 120 V.
- Olvidar el conductor de protección.
- Omitir el circuito al que pertenece el tramo.

**Preguntas de comprobación**

- ¿De qué color es el neutro? → *Blanco.*
- ¿Qué lleva un rótulo completo? → *Cantidad y calibre de conductores, aislamiento, tensión, tubería, circuito y protección.*

**Nota para ti:** La tabla de colores en el .md quedó desordenada: no pude confirmar L1 y L2. Verifícalo en el original.

---

## Lámina 16 · Qué debe mostrar el plano  (8 min)

**Objetivo:** Conocer la lista de contenido que debe tener el plano.

**Preparar:** Dejar la lámina en pantalla; los equipos pueden ir marcando lo que ya tienen.

**Qué decir**

> Estos son los seis frentes del artículo 3.3.2.1: puesta a tierra con material y longitud del electrodo y calibre del conductor; sistema de medida; tablero; canalizaciones con tipos y diámetros; conductores por tramo con número, calibre y función; y aparatos y salidas con tipo y capacidad.

> Más tres documentos: un cuadro de convenciones conforme con el RETIE, un cuadro de cargas con potencias y tensiones por circuito, y los espacios de montaje acotados.

> Nuestro caso es un diseño detallado, así que además llevamos diagrama unifilar y memoria de cálculo.

**Actividad:** Pregunta: ¿cuáles de estos frentes ya tienen resueltos en sus cálculos de hoy?

**Solución paso a paso**

1. Conductores por tramo, canalizaciones (ocupación) y tablero (espacios) ya salieron de los cálculos de hoy.
2. Faltan el dibujo de la puesta a tierra, el medidor y los aparatos.

**Preguntas de comprobación**

- ¿Qué tres documentos van además de la planta? → *Cuadro de convenciones, cuadro de cargas y espacios de montaje.*

---

## Lámina 17 · Cuadro de convenciones  (6 min)

**Objetivo:** Usar un cuadro de convenciones consistente con los símbolos del plano.

**Preparar:** Tener el plano a la mano para mostrar los símbolos en uso.

**Palabras nuevas**

- *Convención:* Símbolo con un significado acordado.
- *Cuadro de convenciones:* Leyenda del plano: lista todos los símbolos y su significado.

**Qué decir**

> Cada símbolo que aparece en el plano debe estar explicado en el cuadro de convenciones. Es la leyenda: sin ella, alguien que no estuvo con ustedes no puede leer el plano.

> La lámina muestra un ejemplo didáctico. Para el entregable, usen los símbolos oficiales del Libro 1, artículo 1.3.4.

> Regla práctica: si dibujan un símbolo nuevo, lo agregan al cuadro. Y siempre el mismo símbolo para lo mismo.

**Actividad:** Pida que cada uno dibuje en su cuaderno el símbolo de una luminaria, un toma con GFCI y un interruptor.

**Errores comunes**

- Usar dos símbolos distintos para el mismo elemento.
- No incluir los símbolos de los equipos de 240 V.

**Preguntas de comprobación**

- ¿Para qué sirve el cuadro de convenciones? → *Para que cualquiera pueda leer el plano.*

**Nota para ti:** No verifiqué cada símbolo contra el art. 1.3.4: en el .md son imágenes. Revísalos antes de exigirlos como oficiales.

---

## Lámina 18 · Plano de planta del caso  (12 min)

**Objetivo:** Leer el plano de diseño, interpretar tramos y entender de dónde salen las longitudes.

**Preparar:** Tener el plano en pantalla completa. Opcional: una copia impresa por equipo.

**Qué decir**

> Recorramos el plano. El tablero TG-1 está en el garaje, junto a la lavandería y al medidor. El electrodo de puesta a tierra está fuera de la casa, en el lado del medidor.

> Las cargas de 240 voltios están marcadas: los tres aires, el cooktop y el horno. Los tomas en naranja tienen GFCI: baños, mesón, garaje y terraza.

> Cada tramo lleva su rótulo T-nn. Aquí se muestran cuatro de los 16 circuitos para no saturar: el cooktop, las tomas de las alcobas, los pequeños artefactos y el aire de la alcoba principal. En su plano a escala 1:50 deben aparecer los 16.

> Las longitudes que usamos para la caída de tensión salen de este dibujo: se mide el recorrido, no la línea recta, y se suma un recargo por las subidas y bajadas.

**Actividad:** Pregunta: ¿qué tramo atraviesa más espacios y qué problema puede traer?

**Solución paso a paso**

1. El de las alcobas: sale del garaje, cruza la cocina y el pasillo y llega al fondo de la alcoba principal, unos 22 m.
2. Es el que más caída de tensión acumula; se verifica con la fórmula de la lámina 12.

**Errores comunes**

- Medir en línea recta en lugar de por el recorrido real.
- Dibujar los tramos cruzando muros sin indicar la canalización.

**Preguntas de comprobación**

- ¿Dónde está el tablero? → *En el garaje, junto a la lavandería y al medidor.*
- ¿Qué color tiene la marca de los tomas con GFCI en el plano? → *Naranja.*

**Nota para ti:** El trazado de tramos y las longitudes (cooktop 8 m, alcobas 22 m) son aproximaciones sobre el plano a 15 px por pie, con un recargo por bajantes. En obra se miden. Las posiciones del TG-1 y del medidor son un supuesto didáctico.

---

## Lámina 19 · Diagrama unifilar del tablero  (8 min)

**Objetivo:** Leer un diagrama unifilar y comprobar que coincide con el cuadro y el plano.

**Preparar:** Dibujar en el tablero la secuencia: red, medidor, general, barras.

**Palabras nuevas**

- *Barras:* Platinas de cobre donde se conectan los breakers: L1, L2, neutro y PE.
- *Protección general:* Breaker principal que corta toda la casa.

**Qué decir**

> El unifilar es el dibujo más simple y más útil: muestra todo el circuito con una sola línea por conductor. Se lee de izquierda a derecha: la red del operador, el medidor, la protección general de 2×100 amperios y las barras L1, L2, neutro y protección.

> De las barras salen los circuitos, cada uno con su breaker y su calibre, agrupados para que quepa en la lámina. Abajo, la puesta a tierra con su electrodo.

> Una regla de oro: los datos del unifilar deben coincidir con el cuadro de cargas y con los rótulos del plano. Si dicen cosas distintas, hay un error en alguno de los tres.

**Actividad:** Compare el unifilar con el cuadro: ¿cuántos circuitos aparecen agrupados en la fila C14–C16 y por qué?

**Solución paso a paso**

1. Son los tres aires acondicionados, todos de 2×20 A con 12 AWG, por eso se agrupan.

**Errores comunes**

- Dibujar el unifilar sin el general o sin la puesta a tierra.
- Cambiar un calibre en el unifilar y no en el cuadro.

**Preguntas de comprobación**

- ¿Qué protección general muestra el unifilar? → *2×100 A.*
- ¿Qué tres documentos deben coincidir? → *Unifilar, cuadro de cargas y plano.*

---

## Lámina 20 · Lista de verificación antes de entregar  (8 min)

**Objetivo:** Autoevaluar el paquete de diseño con diez puntos.

**Preparar:** Reparta una copia impresa de la lista a cada equipo.

**Qué decir**

> Antes de entregar, revisen su paquete con estos diez puntos: que cada circuito del cuadro aparezca en el plano y en el unifilar; que el breaker proteja al conductor; que la caída de tensión sea menor al 3 por ciento en cada ramal; que la ocupación de cada tubería sea menor al 40 por ciento; que el desbalance sea menor al 5 por ciento.

> También: GFCI en baños, mesón, exteriores y lavandería, y AFCI donde corresponde; el cuadro de convenciones completo; el tablero con espacio de trabajo y reserva; la puesta a tierra definida y con medición prevista; y el directorio de circuitos y los rótulos legibles.

> Un punto sin cumplir es un hallazgo en nuestro propio diseño: lo corregimos antes de entregar.

**Actividad:** Intercambio de paquetes: cada equipo revisa el de otro con la lista y marca lo que falta. Cinco minutos.

**Solución paso a paso**

1. La lista se aplica punto por punto; lo que no cumpla se anota como hallazgo para corregir.

**Preguntas de comprobación**

- ¿Cuál es el límite de ocupación de un tubo con tres conductores? → *40 %.*
- ¿Qué desbalance máximo usa el curso como meta? → *Menos de 5 %.*

---

## Lámina 21 · Taller: su paquete de diseño  (10 min)

**Objetivo:** Dejar claras las tareas, los criterios y la herramienta.

**Preparar:** Confirmar el software CAD con el que dibujarán y la fecha de entrega.

**Qué decir**

> Trabajan en equipos de tres. Entregan: la matriz de hallazgos con su propuesta completa; el cuadro propuesto en hoja de cálculo con fórmulas; una memoria con la caída de tensión y la ocupación de tubería de tres circuitos; el plano de planta a escala 1:50 con convenciones y tramos rotulados; y el unifilar del tablero TG-1.

> Los criterios de evaluación: propuestas coherentes con la norma, cálculos correctos y trazables, balanceo menor al 5 por ciento, plano legible y consistente con el cuadro, y la lista de verificación completa.

> Dibujan en el software CAD del curso. Lleven el archivo y el cuadro a la próxima clase.

**Actividad:** Formar equipos y repartir el trabajo. Confirmar la fecha de entrega.

**Errores comunes**

- Dibujar primero y calcular después.
- Entregar el plano sin cuadro de convenciones.

---

## Lámina 22 · Lo que nos llevamos  (5 min)

**Objetivo:** Cerrar con las ideas centrales y anunciar la Misión 3.

**Qué decir**

> Cada hallazgo se convierte en una propuesta. Un circuito por carga grande, con L1 y L2 balanceadas. La caída de tensión y la ocupación de tubería se calculan, no se adivinan. Y el plano, el cuadro y el unifilar cuentan la misma historia.

> Siguiente misión: iluminación y RETILAP.

**Actividad:** Pregunta de salida: ¿qué decisión de replanteo les pareció más importante?

---

## Pendiente de confirmar en la norma impresa

Tablas que en el texto digital son imágenes y no pude verificar: 220.12, 220.42, 220.55, Cap. 9 Tablas 4 y 5, 250.122, 310.15(B)(16), 110.26(A)(1), colores del RETIE (3.5.a) y símbolos (1.3.4). Las áreas de vivienda (≈110 m²) son una estimación sobre el plano.
