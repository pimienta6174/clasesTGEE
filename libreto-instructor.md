# Libreto del instructor · Clase 1: Levantamiento de cargas

**Instructor:** Andrés Felipe Valencia · Tecnología en Gestión Eficiente de la Energía · SENA

**Duración sugerida:** 223 min (≈ 3 h 43 min), sin descansos. Ajusta según el ritmo del grupo.

## Antes de empezar

- Verifica el texto oficial vigente de la **Resolución 40284 de 2026** y la edición de la **NTC 2050** que usas. Los artículos de este libreto salen de mi conocimiento de la NTC 2050; no pude verificar el articulado de la resolución.
- Lleva calculadora, cuaderno por aprendiz y acceso a hoja de cálculo para el taller.
- Teclas: **flechas** cambian de lámina, **F** pantalla completa, **R** descubre la siguiente respuesta, **D** descarga el .html (solo tú).
- Tu clave para la Misión 2 está en `clave-mision2-instructor.md`. No la proyectes.

## Mapa de tiempos

| # | Lámina | Min |
|---|---|---:|
| 1 | Portada | 2 |
| 2 | Su encargo: una casa ya construida | 5 |
| 3 | Objetivos | 3 |
| 4 | ¿Por qué levantar cargas? | 5 |
| 5 | Dos documentos que no se separan | 8 |
| 6 | ¿Qué le pregunta el RETIE a una instalación existente? | 8 |
| 7 | La NTC 2050 como un mapa | 5 |
| 8 | El lenguaje básico: magnitudes y unidades | 8 |
| 9 | Acometida 120/240 V: L1, L2, N y tierra | 12 |
| 10 | En Colombia conviven 120/240 V y 120/208 V | 8 |
| 11 | Fórmulas 1: de vatios a VA y amperios | 10 |
| 12 | Fórmulas 2: el triángulo de potencias | 8 |
| 13 | ¿De dónde sale el factor de potencia? | 8 |
| 14 | Tu turno: calcula S e I a mano | 10 |
| 15 | Levantar una instalación existente: 5 pasos | 10 |
| 16 | Circuitos que exige la NTC 2050 en una vivienda | 8 |
| 17 | ¿Dónde van los tomacorrientes? Art. 210.52 | 8 |
| 18 | Inventario de cargas fijas del caso | 12 |
| 19 | Fórmulas 3: breaker y calibre de cada circuito | 12 |
| 20 | ¿Cómo clasificamos lo que encontramos? | 6 |
| 21 | Cuadro de cargas tal como lo encontramos | 15 |
| 22 | Balanceo: ¿cuánto lleva cada línea? | 12 |
| 23 | Carga instalada vs. carga demandada (Art. 220) | 15 |
| 24 | Matriz de hallazgos: la entrada de la Misión 2 | 10 |
| 25 | Taller: su cuadro de cargas | 10 |
| 26 | Lo que nos llevamos | 5 |

| | **Total** | **223** |

## 1. Portada · 2 min

**Objetivo:** Abrir la clase y poner el tono.

**Qué decir:**

- Buenos días. Hoy empieza el trabajo que hace un consultor de verdad: llegar a una casa que ya funciona y entender qué tiene, cuánto consume y qué está mal.
- No vamos a diseñar todavía. Primero vamos a **mirar, medir y calcular**.

> **Ojo:** Pulsa **F** para pantalla completa. Las flechas cambian de lámina. **R** descubre respuestas. **D** descarga el .html (solo para ti).

## 2. Su encargo: una casa ya construida · 5 min

**Objetivo:** Ubicar la Misión 1 dentro del curso y fijar la regla de trabajo.

**Qué decir:**

- Imaginen que somos una firma consultora. Nos contrata el dueño de una vivienda que funciona, pero nadie tiene planos ni cuentas de carga.
- Son cuatro misiones. **Hoy: Misión 1**, levantamiento y diagnóstico. En la Misión 2 corregimos y replanteamos la instalación y la dibujamos. La 3 es iluminación y la 4, pruebas e inspección.
- La regla de oro: primero la fórmula, luego un ejemplo resuelto, después **ustedes calculan a mano en su cuaderno**, y solo al final descubrimos la respuesta. Sin celular para calcular, calculadora sí.

**Pregunta o ejercicio:** ¿Alguien ha visto una instalación en su casa o en la de un familiar que le haya dado desconfianza? (2 respuestas rápidas)

## 3. Objetivos · 3 min

**Objetivo:** Que sepan qué se llevan y qué deben entregar.

**Qué decir:**

- Al terminar, ustedes podrán: explicar qué son L1, L2, neutro y tierra; calcular VA y amperios de cada carga; levantar circuitos, tomas y equipos de una casa existente; y **diagnosticar** con un cuadro de cargas, el balanceo y una matriz de hallazgos.
- El entregable es el cuadro «tal como lo encontramos» y la matriz de hallazgos. Esa matriz es la materia prima de la Misión 2.

## 4. ¿Por qué levantar cargas? · 5 min

**Objetivo:** Generar conciencia de riesgo antes de entrar en fórmulas.

**Qué decir:**

- La electricidad no avisa. Una instalación sobrecargada o mal conectada simplemente falla, y a veces falla con fuego.
- Repasen las seis tarjetas: choque, sobrecarga y calor, cortocircuito y arco, falla a tierra, malos contactos. La última dice cómo trabajamos: **levantar, calcular y comparar con la norma antes de que algo falle**.

**Pregunta o ejercicio:** ¿Cuál de estos riesgos creen que causa más incendios en viviendas? (Discusión corta; no hay cifra oficial en la lámina, no inventes una.)

> **Ojo:** No cites estadísticas si no las tienes verificadas.

## 5. Dos documentos que no se separan · 8 min

**Objetivo:** Distinguir RETIE (obliga) de NTC 2050 (cómo se hace).

**Qué decir:**

- El **RETIE** es el reglamento técnico del Ministerio de Minas y Energía. **Es obligatorio**. Nuestra referencia en el curso es la Resolución 40284 del 23 de junio de 2026.
- La **NTC 2050** es el código eléctrico colombiano, basado en el NEC. Es el «cómo se hace bien»: circuitos, cargas, protecciones, conductores. El reglamento la acoge como referente técnico.
- Dos más: **RETILAP** para iluminación (Misión 3) y el **operador de red** (ESSA, EPM, Enel...) con sus requisitos de conexión.
- Mensaje clave: antes de citar un artículo en un informe, **confírmenlo en el texto oficial vigente**.

**Pregunta o ejercicio:** Si el RETIE obliga y la NTC 2050 es técnica, ¿cuál es la que me pueden exigir en una inspección?

**Respuesta:** El RETIE obliga. La NTC 2050 es el referente técnico que el reglamento adopta para demostrar el cumplimiento.

> **Ojo:** No conozco el texto de la Resolución 40284 de 2026. Léelo antes de clase y ajusta lo que digas sobre su articulado.

## 6. ¿Qué le pregunta el RETIE a una instalación existente? · 8 min

**Objetivo:** Dar seis frentes de evidencia para el levantamiento.

**Qué decir:**

- Cuando levantamos, buscamos evidencia en seis frentes: diseño y memorias, productos con certificado de conformidad, protecciones, puesta a tierra, personal competente y verificación (dictamen de inspección y declaración de cumplimiento).
- En una casa antigua casi nunca hay papeles. Eso también es un hallazgo.

**Pregunta o ejercicio:** ¿Qué evidencia pediríamos para saber si los breakers del tablero son productos certificados?

**Respuesta:** La marcación legible en el producto y el certificado de conformidad del fabricante o importador.

> **Ojo:** Los números de artículo y las exigencias por tipo de instalación están pendientes de verificar contra la resolución vigente.

## 7. La NTC 2050 como un mapa · 5 min

**Objetivo:** Enseñar a navegar la norma, no a memorizarla.

**Qué decir:**

- La norma se lee por capítulos. Hoy usamos cuatro artículos del capítulo 2: **210** circuitos ramales, **220** cálculo de cargas, **240** sobrecorriente, **250** puesta a tierra. Y del capítulo 3, el **310** para conductores; del 4, el **408** para tableros.
- Truco mnemotécnico de la lámina: 210 «¿cuántos circuitos?», 220 «¿cuánta carga?», 240 «¿qué breaker?», 310 «¿qué cable?».

**Pregunta o ejercicio:** Sin mirar: ¿qué artículo consultan si quieren saber qué cable va con un breaker de 20 A?

**Respuesta:** El 310 (ampacidad) junto con el 240.4(D) (límite de protección de conductores pequeños).

## 8. El lenguaje básico: magnitudes y unidades · 8 min

**Objetivo:** Fijar vocabulario con una analogía.

**Qué decir:**

- Piensen en una tubería de agua. La **tensión** es la presión; la **corriente** es el caudal; la **resistencia** es qué tan angosta es la tubería.
- Tres potencias: **P** en vatios (la útil), **S** en voltio-amperios (la que realmente exige la instalación) y **Q** en VAR (la que va y viene sin hacer trabajo).
- Lo que quiero que se lleven: **los cables y breakers se dimensionan por corriente, y la corriente depende de los VA, no de los vatios.**

**Pregunta o ejercicio:** Un equipo de 1000 W, ¿exige siempre 1000 VA a la instalación?

**Respuesta:** No. Solo si el factor de potencia es 1. Con FP menor, los VA son mayores.

## 9. Acometida 120/240 V: L1, L2, N y tierra · 12 min

**Objetivo:** Entender qué es cada conductor y qué voltaje hay entre ellos.

**Qué decir:**

- Aquí está el concepto que más confunden. El transformador entrega **tres conductores activos** a la casa: dos líneas y un neutro. Se llama monofásico trifilar.
- **L1** y **L2** son las líneas: conductores energizados. Cada una, respecto al neutro, mide **120 V**. Entre ellas, **240 V**.
- El **neutro** es el retorno, conectado a tierra en el origen. Solo lleva la **diferencia** de corriente entre L1 y L2. La **tierra** es el conductor de protección: **no lleva corriente** en operación normal, solo en una falla.
- En el tablero: un breaker de **1 polo** toma una línea y alimenta cargas de 120 V. Uno de **2 polos** toma L1 y L2 y alimenta cargas de 240 V, como el cooktop o los aires acondicionados.
- Cierre con el cuadro oscuro: L1-N = 120 V, L2-N = 120 V, L1-L2 = 240 V.

**Pregunta o ejercicio:** Si apago el breaker de 2 polos del cooktop, ¿qué dejó de energizar? ¿Y si apago uno de 1 polo?

**Respuesta:** El de 2 polos desenergiza L1 y L2 de ese circuito. El de 1 polo, solo una línea.

> **Ojo:** La lámina no afirma colores de conductores. Pide que verifiquen el código de colores del RETIE vigente.

## 10. En Colombia conviven 120/240 V y 120/208 V · 8 min

**Objetivo:** Aclarar que coexisten dos sistemas y que nuestro caso es 120/240 V.

**Qué decir:**

- Pregunta que van a hacer: «¿en Colombia es 120/240 o 120/208?». Respuesta: **los dos conviven**; cuál llega a un predio depende de la red secundaria de la zona.
- **120/240 V, monofásico trifilar:** transformador monofásico con derivación central. Típico de casas independientes, barrios tradicionales y zonas rurales.
- **120/208 V, trifásico tetrafilar o bifásico:** transformador trifásico en estrella. Típico de edificios de apartamentos, comercio, industria liviana y zonas densas de ciudades principales; la lámina menciona redes de Enel, EMCALI y EPM.
- Lo que cambia al calcular: entre dos líneas hay 240 V en el primero y 208 V en el segundo, así que las cargas de 2 polos toman más corriente a 208 V (I = S ÷ V). Además, en el bifásico las fases están a 120° y el neutro lleva corriente aunque haya balance.
- **Nuestro caso sigue en 120/240 V.** Esta lámina solo les da el panorama.

**Pregunta o ejercicio:** Tu turno: cooktop de 7200 VA. ¿Cuánta corriente toma a 240 V y cuánta a 208 V?

**Respuesta:** A 240 V: 7200 ÷ 240 = **30,0 A**. A 208 V: 7200 ÷ 208 = **34,6 A**. Menos tensión, más corriente.

> **Ojo:** Los nombres de operadores (Enel, EMCALI, EPM) los incluí a tu pedido y no los pude verificar. Confírmalos con cada operador y revisa el contador de la zona. Algunas cargas aceptan 208 a 240 V y otras bajan su potencia a 208 V: revisa la placa.

## 11. Fórmulas 1: de vatios a VA y amperios · 10 min

**Objetivo:** Introducir S = P ÷ FP e I = S ÷ V con ejemplos resueltos.

**Qué decir:**

- Las dos fórmulas de hoy: **S = P ÷ FP** e **I = S ÷ V**. La placa casi siempre da vatios; la instalación se dimensiona con VA y amperios.
- **Ejemplo 1, bombillo LED:** 15 W, 120 V, FP 0,5. S = 15 ÷ 0,5 = **30 VA**. I = 30 ÷ 120 = **0,25 A**.
- **Ejemplo 2, nevera:** 800 W, 120 V, FP 0,85. S = 800 ÷ 0,85 = **941 VA**. I = 941 ÷ 120 = **7,84 A**.
- Un LED de 15 W con FP 0,5 «pesa» 30 VA: el doble de lo que dice su potencia.

> **Ojo:** Resuelve los dos ejemplos en el tablero a mano, despacio. Es el modelo que ellos copiarán.

## 12. Fórmulas 2: el triángulo de potencias · 8 min

**Objetivo:** Relacionar P, Q, S y FP.

**Qué decir:**

- El triángulo: **P** es el cateto horizontal, **Q** el vertical y **S** la hipotenusa. El factor de potencia es **P ÷ S**, o sea el coseno del ángulo.
- Con el LED: Q = √(30² − 15²) = √675 = **26,0 VAR**. El ángulo cumple cos φ = 0,5, así que φ = **60°**.
- Idea de gestión eficiente: un LED con FP 0,9 consumiría 16,7 VA en lugar de 30. La misma luz con casi la mitad de corriente.

**Pregunta o ejercicio:** Si el FP baja, ¿qué pasa con la corriente para la misma potencia útil?

**Respuesta:** Sube. Los cables van más cargados y hay más pérdidas.

## 13. ¿De dónde sale el factor de potencia? · 8 min

**Objetivo:** Aclarar que el FP lo da el fabricante y que la norma calcula en VA.

**Qué decir:**

- Pregunta que seguro hacen: «¿qué FP uso para una estufa o un aire acondicionado?». Respuesta: **ni el RETIE ni la NTC 2050 asignan un FP por tipo de carga**. Lo informa el fabricante en la placa o ficha técnica.
- Cuatro reglas: **1)** la NTC 2050 calcula en VA (Art. 220); **2)** en motores, como aires y nevera, se usa **la corriente de placa** y la protección máxima (Art. 430 y 440); **3)** en resistencias, FP ≈ 1, entonces VA = W; **4)** si no hay dato, supuesto conservador anotado en la memoria y confirmado con una medición.
- La tabla de la derecha son **valores típicos, no normativos**.

> **Ojo:** Los umbrales de CREG (energía reactiva) y RETILAP (FP de luminarias) no los pude verificar. Consulta la regulación vigente antes de dar cifras.

## 14. Tu turno: calcula S e I a mano · 10 min

**Objetivo:** Que cada aprendiz practique S e I antes de ver la respuesta.

**Qué decir:**

- Cuatro minutos. Cuaderno y calculadora. Usen S = P ÷ FP e I = S ÷ V. Redondeen VA al entero y amperios a dos decimales.
- Camina por el salón mientras calculan. Mira si usan la tensión correcta en cada fila: el aire acondicionado va a **240 V**.

**Pregunta o ejercicio:** Piensa: ¿por qué el aire acondicionado, con más potencia, tiene menos corriente que el microondas?

**Respuesta:** Microondas: **1263 VA, 10,53 A**. Lavadora-secadora: **1667 VA, 13,89 A**. Aire acondicionado (240 V): **1778 VA, 7,41 A**. TV: **167 VA, 1,39 A**.

> **Ojo:** Pulsa «Descubrir respuestas» o la tecla **R**. Respuesta a la pregunta: porque trabaja a 240 V, y I = S ÷ V.

## 15. Levantar una instalación existente: 5 pasos · 10 min

**Objetivo:** Enseñar el método de campo y la seguridad.

**Qué decir:**

- Cinco pasos: **1)** recorrer y dibujar un croquis; **2)** leer el tablero; **3)** trazar circuitos; **4)** registrar placas y medir; **5)** consolidar en inventario, cuadro, balanceo, demanda y hallazgos.
- Seguridad primero: EPP, herramienta aislada, no abrir el tablero sin autorización, confirmar ausencia de tensión y usar instrumentos de categoría adecuada (CAT III).
- Frase para que se queden: **«si no está escrito, no existe»**. Usen el formato de campo: ubicación, descripción, placa, circuito, observaciones.

**Pregunta o ejercicio:** ¿Cómo identifican qué breaker alimenta una toma sin desenergizar toda la casa?

**Respuesta:** Apagan un breaker a la vez y verifican con detector o probador, con autorización del propietario.

## 16. Circuitos que exige la NTC 2050 en una vivienda · 8 min

**Objetivo:** Dar la lista de mínimos para comparar con lo encontrado.

**Qué decir:**

- Esta es la lista de verificación del levantamiento. Alumbrado en 15 o 20 A sin mezclarse con los de cocina; **mínimo dos circuitos de 20 A para pequeños artefactos** de cocina y comedor; uno para lavandería; uno para baños; circuitos individuales para equipos fijos.
- GFCI en baños, mesones de cocina, exteriores y lavandería. El AFCI (210.12) depende de la edición adoptada.
- Aclaración importante: el alumbrado y los tomacorrientes de uso general se calculan **por área**, 33 VA/m² (Art. 220), no uno por uno.

**Pregunta o ejercicio:** ¿Cuántos circuitos mínimos de pequeños artefactos debe tener la cocina?

**Respuesta:** Dos, de 20 A cada uno (210.11(C)(1)).

> **Ojo:** Confirma el alcance exacto de AFCI y GFCI en la edición de la NTC 2050 que uses.

## 17. ¿Dónde van los tomacorrientes? Art. 210.52 · 8 min

**Objetivo:** Aplicar la regla de 1,8 m y casos especiales.

**Qué decir:**

- Regla de oro: ningún punto de la pared a más de **1,8 m** de un tomacorriente. Por lo tanto los tomas van separados máximo **3,6 m**.
- Tres casos: sala, comedor y alcobas (paredes de 0,6 m o más); mesones de cocina (espacio de 0,3 m o más, ningún punto a más de 0,6 m); baño, exterior y lavandería con GFCI y, en baño, a máximo 0,9 m del lavamanos.

**Pregunta o ejercicio:** Una pared mide 5 m. ¿Cuántos tomas mínimo y dónde?

**Respuesta:** Dos tomas bien repartidos cumplen la regla de 1,8 m para un tramo continuo de pared; verifica con el plano que ningún punto quede lejos.

> **Ojo:** Haz el dibujo en el tablero si hay dudas con la geometría.

## 18. Inventario de cargas fijas del caso · 12 min

**Objetivo:** Calcular S de cada equipo con datos de placa y descubrirlos.

**Qué decir:**

- Datos de placa tomados en la casa. Pidan que calculen **solo la columna S [VA]**. Dos minutos por tres filas, luego comparan con el compañero.
- Cuando terminen, pulsa «Descubrir columna S».

**Respuesta:** Nevera **941**. Cooktop **7200**. Horno **2000**. Microondas **1263**. Lavadora-secadora **1667**. Aires **1778 c/u**. TV **167**. Sonido **235**. LED **30 c/u**.

> **Ojo:** Recuerda el aviso de la lámina: en una casa real, para motores y aires usen la **corriente de placa**.

## 19. Fórmulas 3: breaker y calibre de cada circuito · 12 min

**Objetivo:** Elegir breaker comercial y calibre a partir de la corriente.

**Qué decir:**

- I = S ÷ V. Si la carga es continua (3 horas o más) o equipo especial, multipliquen por 1,25. El breaker comercial es el siguiente valor estándar: 15, 20, 25, 30, 35, 40, 45, 50, 60.
- Máxima protección por calibre en cobre: **14 AWG a 15 A, 12 AWG a 20 A, 10 AWG a 30 A** (Art. 240.4(D)).
- **Ejemplo resuelto, pequeños artefactos (C6):** 1500 VA a 120 V da 12,5 A. El Art. 210.11(C)(1) pide 20 A: breaker **1×20 A** y conductor **12 AWG Cu**.

**Pregunta o ejercicio:** Tu turno: cooktop de inducción, 7200 VA a 240 V. Calculen I, I de diseño (×1,25), breaker y calibre.

**Respuesta:** I = 7200 ÷ 240 = **30 A**. I de diseño = 30 × 1,25 = **37,5 A**. Breaker **2×40 A** con **8 AWG Cu**.

> **Ojo:** Para aires acondicionados usa la placa (MCA y protección máxima). Aquí: 7,41 A, 2×20 A y 12 AWG.

## 20. ¿Cómo clasificamos lo que encontramos? · 6 min

**Objetivo:** Dar el criterio de clasificación antes de ver el tablero.

**Qué decir:**

- Un buen consultor no dice «está mal». Dice qué tipo de problema es y qué tan grave.
- **Incumplimiento:** la norma lo exige o lo prohíbe, se corrige sí o sí. **Mala práctica:** la norma lo permite, pero baja la seguridad o el servicio. **Oportunidad de eficiencia:** ahorro de energía, se propone.
- Severidad: **crítico** (riesgo inmediato de incendio o choque), **mayor** (incumple o puede fallar en uso normal), **menor** (mejora recomendada).
- Advertencia: esta casa es un caso didáctico con deficiencias sembradas a propósito. No es una vivienda real.

**Pregunta o ejercicio:** Alumbrado y tomas en el mismo breaker de una alcoba: ¿incumplimiento o mala práctica?

**Respuesta:** Mala práctica: la norma lo permite en habitaciones, pero si salta el breaker se queda sin luz ni tomas.

## 21. Cuadro de cargas tal como lo encontramos · 15 min

**Objetivo:** Que los aprendices detecten las fallas fila por fila.

**Qué decir:**

- Aquí está el tablero. Lean cada fila: carga, corriente, breaker, calibre, línea. **Tu turno:** ¿qué está mal en cada una? Tienen cinco minutos, en parejas, anotando en el cuaderno.
- Después pulsa «Descubrir estado» y discute fila por fila. Deja que ellos argumenten antes de que tú confirmes.

**Respuesta:** **F1** mayor: 14 AWG con 20 A. **F2** menor: mezcla alumbrado y tomas. **F3** mayor: baños sin GFCI. **F4** crítico: 12 AWG con 30 A, sin GFCI, todo en un circuito. **F5, F6, F8** cumplen. **F7** crítico: 12 AWG soporta máximo 20 A y la carga es de 30 A. **F9** menor: dos aires en un breaker.

> **Ojo:** Totales: 22 622 VA y 94,26 A a 240 V. «Carga conectada» no es igual a la carga mínima de diseño: no los mezcles.

## 22. Balanceo: ¿cuánto lleva cada línea? · 12 min

**Objetivo:** Calcular L1, L2, desbalance y corriente de neutro.

**Qué decir:**

- Fórmulas: S de L1 es la suma de los circuitos de 1 polo de L1 más la mitad de los de 2 polos. Desbalance es la diferencia entre líneas sobre el promedio. La corriente de neutro es la diferencia entre las corrientes de 120 V de cada línea.
- **Ejemplo resuelto:** el cooktop de 7200 VA aporta 3600 a L1 y 3600 a L2, y no lleva corriente por el neutro.
- Tu turno: con el cuadro anterior, calculen las dos líneas y lo que sigue.

**Pregunta o ejercicio:** ¿Qué pasa con un tablero de 100 A si L1 puede llegar a 128 A?

**Respuesta:** L1 = 8088 + 7267 = **15 355 VA**. L2 = 0 + 7267 = **7267 VA**. Desbalance = 8088 ÷ 11 311 × 100 = **71,5 %**. I del neutro = 8088 ÷ 120 = **67,4 A**. I de L1 = 67,4 + 60,6 = **128,0 A**. I de L2 = **60,6 A**.

> **Ojo:** Con factores de demanda no sería siempre 128 A, pero en un pico simultáneo el breaker general dispara o los conductores se sobrecargan.

## 23. Carga instalada vs. carga demandada (Art. 220) · 15 min

**Objetivo:** Calcular la demanda con los factores de la norma.

**Qué decir:**

- No todo funciona a la vez. La norma usa factores de demanda. Aquí partimos de **120 m²** y de los mínimos de la norma, no de lo conectado.
- Paso a paso, cada renglón lo calculan y luego lo descubren: **1)** alumbrado general 33 VA/m² (220.12); **2)** dos circuitos de pequeños artefactos; **3)** lavandería; **4)** al subtotal se aplica el 220.42: los primeros 3000 VA al 100 % y el resto al 35 %; **5)** cooktop + horno por la Tabla 220.55; **6)** nevera y microondas al 100 %; **7)** los aires al 100 %.

**Respuesta:** **3960**, **3000**, **1500**; subtotal 8460 → 3000 + 5460 × 0,35 = **4911**; cocción **8000**; nevera + micro **2204**; aires **5334**. Total **20 449 VA** = **85,2 A** a 240 V. Acometida y protección general de **100 A** (mínimo para vivienda unifamiliar).

> **Ojo:** Cabe en 100 A pero sin holgura: no hay reserva para ampliar. Confirma Tabla 220.55 y Art. 230.79 en tu edición de la NTC 2050.

## 24. Matriz de hallazgos: la entrada de la Misión 2 · 10 min

**Objetivo:** Consolidar los hallazgos con severidad y referencia.

**Qué decir:**

- Esta es la entrega estrella. Cada hallazgo con su ubicación, severidad y referencia. La última columna, «Propuesta», la llenamos en la **Misión 2**.
- Recorre las nueve filas y pide que justifiquen la severidad: ¿por qué el cooktop con 12 AWG es crítico y el tablero sin directorio es menor?

**Pregunta o ejercicio:** Discusión de dos minutos: ¿cuál hallazgo es el más peligroso para la vida de las personas?

**Respuesta:** No hay una sola. Un buen argumento: los dos críticos (cooktop y cocina) por riesgo de incendio, y la puesta a tierra sin medir por riesgo de choque.

## 25. Taller: su cuadro de cargas · 10 min

**Objetivo:** Dejar claras las tareas y los criterios.

**Qué decir:**

- Trabajo en equipos de tres: cuadro «tal como lo encontramos» en **hoja de cálculo con fórmulas**, no valores pegados; desbalance y corrientes de L1, L2 y neutro; carga demandada y corriente de acometida; matriz de hallazgos completa.
- Criterios: cálculos de S e I, breaker y calibre coherentes, hallazgos bien clasificados, demanda con factores de la norma, orden y trazabilidad.
- Avisen que la próxima clase **replanteamos la instalación**: nuevos circuitos, balanceo, GFCI y reserva. Traigan la matriz terminada.

> **Ojo:** Tu clave está en el repositorio: clave-mision2-instructor.md. No la proyectes.

## 26. Lo que nos llevamos · 5 min

**Objetivo:** Cerrar con cinco ideas.

**Qué decir:**

- L1 y L2 dan 240 V; cada una con el neutro, 120 V. S = P ÷ FP e I = S ÷ V. Breaker y calibre se eligen por corriente. Clasificamos en incumplimiento, mala práctica y eficiencia. Carga conectada no es igual a carga demandada.
- Última frase: **siempre verifiquen con el texto oficial vigente**.

**Pregunta o ejercicio:** Pregunta de salida: ¿qué fue lo más sorprendente que encontraron en el tablero?
