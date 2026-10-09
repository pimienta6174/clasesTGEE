# Libreto del instructor · Clase 2: Replanteo y planos

**Instructor:** Andrés Felipe Valencia · Tecnología en Gestión Eficiente de la Energía · SENA

**Duración sugerida:** 189 min (≈ 3 h 9 min), sin descansos.

## Antes de empezar

- Verificado contra la **Resolución 40284 de 2026** (Libros 3 y 4) y la **NTC 2050, segunda actualización (2020)**.
- Sin verificar por ser imágenes en el .md: tablas 4 y 5 del Cap. 9, 250.122, 310.15(B)(16), 110.26(A)(1), colores L1/L2 y la nota de caída de tensión.
- Lleva calculadora, cuaderno y el cuadro de la Misión 1 de cada equipo.
- Teclas: flechas, **F** pantalla completa, **R** descubre la respuesta, **D** descarga el .html.

## Mapa de tiempos

| # | Lámina | Min |
|---|---|---:|
| 1 | Portada | 2 |
| 2 | Del diagnóstico al diseño | 5 |
| 3 | Objetivos | 3 |
| 4 | Qué exige el RETIE a nuestro caso | 8 |
| 5 | Del hallazgo a la corrección | 12 |
| 6 | Seis criterios para replantear | 8 |
| 7 | Repaso: corriente, breaker y calibre | 10 |
| 8 | Cuadro de cargas propuesto | 15 |
| 9 | Balanceo del cuadro nuevo | 12 |
| 10 | El tablero: espacios, reserva y ubicación | 10 |
| 11 | Carga de diseño, demanda y acometida | 10 |
| 12 | Caída de tensión en circuitos ramales | 12 |
| 13 | Canalizaciones: ocupación de la tubería | 12 |
| 14 | Conductor de protección y puesta a tierra | 10 |
| 15 | Colores y rotulado de tramos | 10 |
| 16 | Qué debe mostrar el plano | 6 |
| 17 | Cuadro de convenciones | 5 |
| 18 | Plano de planta del caso | 10 |
| 19 | Diagrama unifilar del tablero | 8 |
| 20 | Lista de verificación antes de entregar | 6 |
| 21 | Taller: su paquete de diseño | 10 |
| 22 | Lo que nos llevamos | 5 |

| | **Total** | **189** |

## 1. Portada · 2 min

**Objetivo:** Abrir la clase y conectar con la Misión 1.

**Qué decir:**

- Bienvenidos a la Misión 2. En la anterior encontramos qué estaba mal. Hoy decidimos cómo debe quedar la instalación y la dejamos dibujada.

> **Ojo:** Pulsa **F** para pantalla completa, **R** para descubrir respuestas y **D** para descargar el .html (solo tú).

## 2. Del diagnóstico al diseño · 5 min

**Objetivo:** Ubicar la clase en el flujo de trabajo.

**Qué decir:**

- Cinco pasos: la matriz de hallazgos de la Misión 1, los criterios de replanteo, el cuadro nuevo, los cálculos (caída de tensión, ocupación de tubería, tablero) y el plano.
- La regla de oro no cambia: fórmula, ejemplo resuelto, ustedes calculan a mano y solo al final descubrimos la respuesta.

**Pregunta o ejercicio:** ¿Qué hallazgo de la Misión 1 les parece más urgente corregir? (2 respuestas rápidas)

## 3. Objetivos · 3 min

**Objetivo:** Que sepan qué entregan al final.

**Qué decir:**

- Al terminar: corregir cada hallazgo en una propuesta y armar el cuadro nuevo; calcular caída de tensión, ocupación de tubería, reserva del tablero y acometida; dibujar el plano con convenciones, tramos rotulados y unifilar; y verificar con una lista de control.
- El entregable es un paquete de diseño: cuadro propuesto, plano de planta, unifilar, tabla de tramos y memoria de cálculo.

## 4. Qué exige el RETIE a nuestro caso · 8 min

**Objetivo:** Entender por qué el plano forma parte de un diseño detallado.

**Qué decir:**

- La casa supera los **15 kVA** de capacidad instalable. Por eso necesita **diseño detallado** de un ingeniero (Libro 3, art. 3.3.1, literal q). Hasta 15 kVA y 4 cuentas bastaría un esquema constructivo (3.3.2).
- El diseño detallado incluye cálculo de cargas con factor de potencia y armónicos, protecciones, puesta a tierra, canalizaciones, regulación de tensión, diagramas unifilares y planos (3.3.1.1).
- La remodelación también cuenta: certificación plena si se remodela más del 50 % de dispositivos o conductores y la parte remodelada supera 10 kVA (Libro 4, 4.3.2.2). La certificación plena trae dictamen de inspección y declaración de cumplimiento (4.3.2).
- En el curso hacemos el diseño como práctica de formación. La firma legal es del profesional competente según su matrícula (3.2.1).

**Pregunta o ejercicio:** Si la casa fuera de 12 kVA y tuviera 1 cuenta, ¿qué documento bastaría?

**Respuesta:** Un esquema constructivo firmado por una persona competente (art. 3.3.2). No requeriría diseño detallado ni certificación plena por capacidad, salvo otras causas.

> **Ojo:** Verificado contra la Resolución 40284 de 2026, Libros 3 y 4.

## 5. Del hallazgo a la corrección · 12 min

**Objetivo:** Convertir los 9 hallazgos en propuestas.

**Qué decir:**

- Retomen la matriz de la Misión 1. Cada uno escribe en su cuaderno la propuesta para cada hallazgo. Cinco minutos, luego comparan en parejas.
- Después pulsa «Descubrir propuestas» y discute. Insiste en el porqué de cada una.

**Respuesta:** 1) Cooktop: 2×40 A con 8 AWG (30 × 1,25 = 37,5 A). 2) Cocina: nevera y micro individuales y 2 circuitos de 20 A para el mesón. 3) GFCI en el mesón. 4) Circuito de baños de 20 A con GFCI. 5) Cambiar a 12 AWG o bajar a 15 A. 6) Repartir los de 1 polo entre L1 y L2. 7) Medir y corregir la puesta a tierra (referencia 25 Ω). 8) Rotular y dejar espacios libres. 9) Un circuito por aire; separar alumbrado y tomas.

## 6. Seis criterios para replantear · 8 min

**Objetivo:** Dar el criterio general antes de rediseñar.

**Qué decir:**

- No parchamos, rediseñamos por zona y tipo de carga: un circuito por carga grande; alumbrado separado de tomas, con AFCI donde lo pide el 210.12(A); cocina con dos circuitos de 20 A para el mesón y GFCI; baños con su circuito de 20 A; balanceo; y reserva con directorio.
- Aclaren que la reserva del 25 % y el desbalance menor al 5 % son criterios del curso, no cifras de la norma.

**Pregunta o ejercicio:** ¿Por qué conviene un circuito individual para cada aire acondicionado?

**Respuesta:** Si uno falla o dispara, los demás siguen; cada equipo se protege con la corriente de su placa; y se evitan sobrecargas por compartir breaker.

## 7. Repaso: corriente, breaker y calibre · 10 min

**Objetivo:** Reactivar la fórmula de la Misión 1.

**Qué decir:**

- Recuerden: I = S ÷ V; ×1,25 si la carga es continua; breaker comercial igual o mayor; 14 AWG a 15 A, 12 AWG a 20 A, 10 AWG a 30 A (240.4(D)).
- **Ejemplo resuelto, horno de convección:** 2000 VA a 240 V da 8,33 A. Breaker 2×20 A, conductor 12 AWG Cu.
- Tu turno: nevera, microondas y lavadora-secadora. Tres minutos.

**Respuesta:** **Nevera:** 7,84 A, 1×20 A, 12 AWG. **Microondas:** 10,53 A, 1×20 A, 12 AWG. **Lavadora-secadora:** 13,89 A, 1×20 A, 12 AWG; el circuito de lavandería es de 20 A (210.11(C)(2)).

## 8. Cuadro de cargas propuesto · 15 min

**Objetivo:** Asignar L1 y L2 y descubrir el cuadro limpio.

**Qué decir:**

- Este es el cuadro nuevo: 15 circuitos con carga, corriente, breaker, calibre y conductor PE. La columna de línea está oculta.
- Tu turno: asignen L1 o L2 a cada circuito de 1 polo para balancear. Los de 2 polos ya usan las dos líneas. Cinco minutos en parejas.
- Cuando terminen, pulsa «Descubrir línea de cada circuito» y comparen. Puede haber más de una solución buena; lo que importa es el desbalance.

**Respuesta:** La propuesta: **L1** en C1, C2, C3, C5, C9 y C10. **L2** en C4, C6, C7 y C8. Da L1 = 12 447 VA y L2 = 12 468 VA.

> **Ojo:** La carga de diseño es 24 915 VA (103,8 A) porque cuenta los 3000 VA mínimos de pequeños artefactos. La carga conectada antes era 22 622 VA.

## 9. Balanceo del cuadro nuevo · 12 min

**Objetivo:** Calcular el balanceo y compararlo con el antes.

**Qué decir:**

- Fórmulas: S de L1 = Σ(1 polo en L1) + ½ Σ(2 polos); desbalance = diferencia ÷ promedio × 100.
- Tu turno: los circuitos de 2 polos suman 14 534 VA, o sea 7267 VA por línea. Calculen L1, L2, desbalance y corriente del neutro.

**Respuesta:** L1 = 5180 + 7267 = **12 447 VA**. L2 = 5201 + 7267 = **12 468 VA**. Desbalance = 21 ÷ 12 457,5 × 100 = **0,17 %**. I del neutro = |5180 − 5201| ÷ 120 = **0,17 A** (antes 67,4 A). I de L1 = 103,7 A y de L2 = 103,9 A (antes 128,0 A y 60,6 A).

## 10. El tablero: espacios, reserva y ubicación · 10 min

**Objetivo:** Dimensionar el tablero y ubicarlo bien.

**Qué decir:**

- Fórmula: espacios requeridos = espacios usados ÷ (1 − reserva). Un circuito de 1 polo ocupa 1 espacio y uno de 2 polos, 2.
- **Ejemplo resuelto:** 12 espacios usados con 25 % de reserva: 12 ÷ 0,75 = 16, tablero de 18.
- Tu turno: 10 circuitos de 1 polo y 5 de 2 polos.

**Respuesta:** Usa 10 + 5 × 2 = **20 espacios**. 20 ÷ 0,75 = 26,7, entonces tablero de **30 espacios**.

> **Ojo:** Espacio de trabajo (110.26): ancho el del equipo o 0,76 m, altura 2,0 m, profundidad según la Tabla 110.26(A)(1), que está en imagen. Los tamaños comerciales (12 a 42 espacios) dependen del fabricante.

## 11. Carga de diseño, demanda y acometida · 10 min

**Objetivo:** Cerrar la corriente de acometida y su protección.

**Qué decir:**

- Tres cifras: carga de diseño 24 915 VA, demandada 20 449 VA y la conectada de antes, 22 622 VA.
- Tu turno: corriente de la demanda a 240 V y protección general.

**Respuesta:** I = 20 449 ÷ 240 = **85,2 A**. El comercial sería 90 A, pero la vivienda unifamiliar pide mínimo 100 A (225.39(C)): general **2×100 A**. Conductor **3 AWG Cu** (100 A a 75 °C).

> **Ojo:** El 3 AWG sale de la Tabla 310.15(B)(16), que es imagen en el .md. Confírmalo en la norma impresa.

## 12. Caída de tensión en circuitos ramales · 12 min

**Objetivo:** Calcular la caída de tensión de un ramal.

**Qué decir:**

- Fórmula: ΔV = 2 · ρ · L · I ÷ S, con ρ del cobre = 0,0175 Ω·mm²/m. Luego ΔV % = ΔV ÷ V × 100.
- **Ejemplo resuelto:** 25 m, 16 A, 12 AWG (3,31 mm²), 120 V: ΔV = 4,23 V, o sea 3,5 %. Conviene un calibre mayor si la meta es 3 %.
- Tu turno: el cooktop (18 m, 30 A, 8 AWG, 240 V) y los pequeños artefactos (20 m, 12,5 A, 12 AWG, 120 V).

**Respuesta:** **a)** ΔV = 2 × 0,0175 × 18 × 30 ÷ 8,37 = **2,26 V**, o sea **0,94 %** de 240 V. **b)** ΔV = 2 × 0,0175 × 20 × 12,5 ÷ 3,31 = **2,64 V**, o sea **2,20 %** de 120 V. Ambos cumplen la meta de 3 %.

> **Ojo:** La meta de 3 % en el ramal y 5 % en total es recomendación de diseño: el texto digital de la NTC 2050 no trae la nota informativa. Confírmala en tu edición.

## 13. Canalizaciones: ocupación de la tubería · 12 min

**Objetivo:** Calcular el llenado de una tubería.

**Qué decir:**

- Fórmula: %O = suma de áreas de los conductores ÷ área interior del tubo × 100. Límites del Cap. 9, Tabla 1: 53 % con un conductor, 31 % con dos, 40 % con más de dos. El conductor PE también ocupa espacio.
- **Ejemplo resuelto:** tres conductores 12 AWG (8,58 mm² cada uno) en EMT ½" (196 mm²): 25,74 ÷ 196 = 13,1 %, cumple.
- Tu turno: el tramo del cooktop con 2 conductores 8 AWG y un PE de 10 AWG.

**Respuesta:** Σ = 2 × 23,61 + 13,61 = **60,83 mm²**. En ½": **31,0 %**. En ¾" (343 mm²): **17,7 %**. Ambos cumplen el 40 %, pero ¾" deja más holgura.

> **Ojo:** Las áreas (Tablas 4 y 5 del Cap. 9) están en imagen en el .md; los valores de la lámina son los habituales. Ojo: en el documento «esquema constructivo.md» las áreas de ejemplo (6,02 mm² para 12 AWG y 138 mm² para el tubo ½") difieren de estos valores, aunque su porcentaje de 13,1 % coincide. Confirma ambas en la tabla.

## 14. Conductor de protección y puesta a tierra · 10 min

**Objetivo:** Elegir el PE y reconocer la referencia de resistencia.

**Qué decir:**

- El conductor de protección se elige según el breaker: 15 A, 14 AWG; 20 A, 12 AWG; 30 a 60 A, 10 AWG; 100 A, 8 AWG (Tabla 250.122).
- **Ejemplo resuelto:** varilla de 2,40 m, 0,016 m de diámetro y suelo de 100 Ω·m: R ≈ ρ ÷ (2πL) × [ln(4L ÷ d) − 1] ≈ 35,8 Ω.
- La referencia del RETIE para el punto neutro de acometida en baja tensión es **25 Ω** (Libro 3, Tabla 3.12.3.a).

**Pregunta o ejercicio:** Con 35,8 Ω, ¿cumple la referencia? ¿Qué haría?

**Respuesta:** No cumple. Agregar electrodos en paralelo o mejorar el terreno, y medir en campo: el valor de aceptación es la medición, no la estimación.

> **Ojo:** La Tabla 250.122 es imagen en el .md; los valores son los típicos. Confírmalos.

## 15. Colores y rotulado de tramos · 10 min

**Objetivo:** Rotular tramos con la información completa.

**Qué decir:**

- Código de colores del RETIE (Libro 3, título 5, Tabla 3.5.a): neutro blanco y tierra de protección verde o desnuda. Para L1 y L2 en 120/240 V se espera negro y rojo; confírmalo en la tabla original.
- **Ejemplo resuelto:** T-12: 2 × Cu 8 AWG (L1 + L2) + 1 × Cu 10 AWG (PE), THHN/THWN-2, 600 V, en EMT Ø ¾", circuito C-12, protección 2P-40 A.
- Tu turno: rótulo del tramo del circuito C6, en EMT ½".

**Respuesta:** **T-06:** 1 × Cu 12 AWG (L) + 1 × Cu 12 AWG (N) + 1 × Cu 12 AWG (PE), THHN/THWN-2, 600 V, en EMT Ø ½", circuito C-6, protección 1P-20 A.

> **Ojo:** La tabla de colores en el .md quedó desordenada: no pude confirmar L1 y L2. Verifícalo en el original.

## 16. Qué debe mostrar el plano · 6 min

**Objetivo:** Dar la lista de contenido del plano.

**Qué decir:**

- Seis frentes del artículo 3.3.2.1: puesta a tierra, sistema de medida, tablero, canalizaciones, conductores por tramo y aparatos con puntos de iluminación. Más tres documentos: cuadro de convenciones, cuadro de cargas y espacios de montaje.
- Nuestro caso es diseño detallado, así que además llevan unifilar y memoria de cálculo (3.3.1.1).

## 17. Cuadro de convenciones · 5 min

**Objetivo:** Fijar los símbolos del plano.

**Qué decir:**

- Cada símbolo del plano debe aparecer en el cuadro de convenciones. Lo mostrado es un ejemplo didáctico.
- Para el entregable usen los símbolos oficiales del Libro 1, art. 1.3.4.

> **Ojo:** No verifiqué cada símbolo contra el art. 1.3.4: en el .md son imágenes. Revísalos antes de exigirlos como oficiales.

## 18. Plano de planta del caso · 10 min

**Objetivo:** Leer e interpretar el plano.

**Qué decir:**

- Recorran el plano: TG-1 en el hall técnico, junto al medidor; cargas de 240 V resaltadas (aires, cooktop y horno); tomas con GFCI en baños, mesón, lavandería y terraza; tramos rotulados T-nn.
- Se muestran 4 de los 15 circuitos. En su plano a escala 1:50 deben aparecer todos.

**Pregunta o ejercicio:** ¿Qué tramo atraviesa más espacios y qué problema puede traer?

**Respuesta:** El de las alcobas recorre el pasillo; puede ser largo, lo que afecta la caída de tensión. Se verifica con la fórmula de la lámina 12.

## 19. Diagrama unifilar del tablero · 8 min

**Objetivo:** Leer el unifilar y verificar su consistencia.

**Qué decir:**

- El unifilar muestra red, medidor, protección general de 2×100 A, barras L1, L2, N y PE, cada circuito con su breaker y calibre, y la puesta a tierra.
- Regla: los datos del unifilar deben coincidir con el cuadro de cargas y con los rótulos del plano.

## 20. Lista de verificación antes de entregar · 6 min

**Objetivo:** Autoevaluar el paquete de diseño.

**Qué decir:**

- Diez puntos: coherencia plano-cuadro-unifilar, breaker que protege al conductor, caída de tensión menor al 3 %, ocupación menor al 40 %, desbalance menor al 5 %, GFCI y AFCI, convenciones completas, tablero con espacio y reserva, puesta a tierra definida y directorio de circuitos.
- Un punto sin cumplir es un hallazgo para corregir antes de entregar.

## 21. Taller: su paquete de diseño · 10 min

**Objetivo:** Dejar claras las tareas y los criterios.

**Qué decir:**

- Equipos de tres: matriz de hallazgos con propuesta, cuadro propuesto en hoja de cálculo con fórmulas, memoria con caída de tensión y ocupación de tres circuitos, plano a escala 1:50 con convenciones y tramos rotulados, y unifilar del TG-1.
- Criterios: propuestas coherentes con la norma, cálculos correctos y trazables, balanceo menor al 5 %, plano legible y consistente, lista de verificación completa.

## 22. Lo que nos llevamos · 5 min

**Objetivo:** Cerrar y anunciar la Misión 3.

**Qué decir:**

- Cada hallazgo se convierte en una propuesta. Un circuito por carga grande con L1 y L2 balanceadas. La caída de tensión y la ocupación se calculan, no se adivinan. El plano, el cuadro y el unifilar cuentan la misma historia.
- Siguiente: **iluminación y RETILAP**.

**Pregunta o ejercicio:** Pregunta de salida: ¿qué decisión de replanteo les pareció más importante?
