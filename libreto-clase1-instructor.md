# Libreto del instructor · Clase 1 · Misión 1: levantamiento y diagnóstico

*Programa Tecnología en Gestión Eficiente de la Energía · SENA · Instructor: Andrés Felipe Valencia*

Presentación: `clase1-levantamiento-de-cargas.html` · 28 láminas · 293 min en total.

Recorrido de una casa ya construida (120/240 V): magnitudes, L1/L2/N/T, potencia aparente, circuitos requeridos, protección y calibre, cuadro encontrado, balanceo, carga demandada y matriz de hallazgos.

## Cómo usar este libreto

- Cada lámina trae: objetivo, qué preparar, palabras nuevas, **qué decir** (guion), actividad, solución paso a paso, errores comunes, preguntas de comprobación y notas para ti.
- Lo que está entre corchetes `[ ]` es una acción tuya, no se dice en voz alta.
- Regla de la clase: fórmula → ejemplo resuelto → «tu turno» a mano → recién entonces se descubre la respuesta (tecla R).
- Los tiempos son una guía; las secciones «Si falta / sobra tiempo» te dicen qué recortar o ampliar.
- Teclas: ← → cambiar de lámina · F pantalla completa · R descubrir respuesta · D descargar el .html (solo para ti).

**Materiales:** Calculadora y cuaderno por aprendiz; el deck en pantalla completa (F); hoja de cálculo para el taller; copia impresa del plano si es posible.

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

Sugerencia: dos sesiones. Sesión A: láminas 1–15 (138 min). Sesión B: láminas 16–28 (155 min).

| # | Lámina | Min |
|---|---|---|
| 1 | Portada | 2 |
| 2 | Su encargo: una casa ya construida | 5 |
| 3 | La casa del bulevar | 10 |
| 4 | Objetivos | 3 |
| 5 | ¿Por qué levantar cargas? | 8 |
| 6 | Dos documentos que no se separan | 10 |
| 7 | ¿Qué le pregunta el RETIE a una instalación existente? | 10 |
| 8 | La NTC 2050 como un mapa | 8 |
| 9 | El lenguaje básico: magnitudes y unidades | 12 |
| 10 | Acometida 120/240 V: L1, L2, neutro y tierra | 18 |
| 11 | En Colombia conviven 120/240 V y 120/208 V | 10 |
| 12 | Fórmulas 1: de vatios a voltio-amperios y amperios | 12 |
| 13 | Fórmulas 2: el triángulo de potencias | 10 |
| 14 | ¿De dónde sale el factor de potencia? | 8 |
| 15 | Tu turno: calcula S e I a mano | 12 |
| 16 | Levantar una instalación existente: 5 pasos | 12 |
| 17 | Circuitos que exige la NTC 2050 en una vivienda | 10 |
| 18 | ¿Dónde van los tomacorrientes? Art. 210.52 | 10 |
| 19 | Inventario de cargas fijas del caso | 12 |
| 20 | Fórmulas 3: breaker y calibre de cada circuito | 18 |
| 21 | ¿Cómo clasificamos lo que encontramos? | 8 |
| 22 | Cuadro de cargas tal como lo encontramos | 18 |
| 23 | Balanceo: ¿cuánto lleva cada línea? | 14 |
| 24 | Carga instalada vs. carga demandada (Art. 220) | 18 |
| 25 | Matriz de hallazgos: la entrada de la Misión 2 | 10 |
| 26 | Los 9 hallazgos sobre el plano | 10 |
| 27 | Taller: su cuadro de cargas | 10 |
| 28 | Lo que nos llevamos | 5 |
| | **Total** | **293** |

---

## Lámina 1 · Portada  (2 min)

**Objetivo:** Que el grupo sepa qué se hará hoy y cómo se va a trabajar.

**Preparar:** Pantalla completa con F. Calculadora y cuaderno por aprendiz. Si hay computador, la hoja de cálculo abierta para el taller.

**Palabras nuevas**

- *Misión:* Cada clase es una misión del mismo proyecto. Hoy es la Misión 1: levantar y diagnosticar una casa que ya existe.

**Qué decir**

> Bienvenidos. Hoy empieza el trabajo de un consultor eléctrico de verdad: llegar a una casa que ya funciona y entenderla antes de tocar un solo cable.

> No vamos a diseñar todavía. Primero vamos a mirar, medir y calcular. Eso es un levantamiento, y es la Misión 1.

> Les aviso cómo vamos a trabajar. Yo explico, les muestro un ejemplo resuelto y luego ustedes calculan a mano en su cuaderno. Solo cuando todos terminan, descubrimos la respuesta. Equivocarse en el cuaderno es parte del método.

**Nota para ti:** Teclas: flechas para cambiar de lámina, F pantalla completa, R descubre la siguiente respuesta, D descarga el .html (solo tú).

---

## Lámina 2 · Su encargo: una casa ya construida  (5 min)

**Objetivo:** Ubicar la Misión 1 dentro de las cuatro misiones y entender la regla de trabajo.

**Preparar:** Dejar visible la lámina de las cuatro misiones. Nada más.

**Palabras nuevas**

- *Levantamiento:* Registrar lo que hay instalado: espacios, salidas, equipos, tablero, circuitos.
- *Diagnóstico:* Decir qué está bien y qué está mal, y qué tan grave es.
- *Consultor:* Profesional que da una solución técnica a un cliente: no construye, analiza y recomienda.

**Qué decir**

> Imaginen que somos una firma consultora y nos contrata el dueño de una casa. La casa funciona, pero nadie tiene planos ni cuentas de cuánta electricidad usa.

> Piensen en un médico: primero hace el diagnóstico y solo después receta el tratamiento. Nosotros igual: la Misión 1 es el diagnóstico.

> Son cuatro misiones. La 1, hoy, es levantar la casa y diagnosticarla. En la 2 corregimos la instalación y la dibujamos. La 3 es iluminación y la 4, pruebas e inspección.

> La regla de oro la repito porque es la más importante: fórmula, ejemplo resuelto, ustedes calculan a mano, y solo al final descubrimos la respuesta.

**Actividad:** Pregunta de arranque, sin presión: ¿alguien ha visto una instalación eléctrica en su casa o en la de un familiar que le haya dado desconfianza? Dos o tres respuestas rápidas.

**Preguntas de comprobación**

- ¿Qué es un levantamiento? → *Registrar lo que hay instalado en una casa que ya existe, antes de diseñar.*
- ¿Qué hacemos primero, corregir o diagnosticar? → *Diagnosticar: no se corrige lo que no se ha entendido.*

**Si falta o sobra tiempo:** Si falta tiempo, omita la pregunta de arranque. Si sobra, deje que cuenten dos experiencias y sáquelas del miedo: lo que vieron suele aparecer luego como hallazgo.

---

## Lámina 3 · La casa del bulevar  (10 min)

**Objetivo:** Conocer el plano del caso, convertir medidas de pies a metros y calcular un área.

**Preparar:** Dejar el plano en pantalla. Tener a mano la fórmula 1 pie = 0,3048 m y 1 pulgada = 0,0254 m en el tablero.

**Palabras nuevas**

- *Plano de planta:* Dibujo de la casa vista desde arriba.
- *Pie y pulgada:* Unidades del plano original. 1 pie = 12 pulgadas = 0,3048 m.
- *Área:* Superficie. Largo × ancho. Se mide en metros cuadrados (m²).

**Qué decir**

> Este es el plano de nuestra casa. Es de un solo piso, con dos alcobas, dos baños, sala, comedor, cocina con desayunador, lavandería, garaje y terraza. Suponemos que está en Colombia, con servicio de 120/240 V.

> [Señale cada espacio con el puntero.] Fíjense que el plano original venía en pies y pulgadas. Aquí lo convertimos a metros porque en Colombia trabajamos en metros.

> Para convertir: un pie son 0,3048 metros. Una medida como 14 pies 2 pulgadas significa 14 pies más 2 doceavos de pie. Ahora lo hacemos paso a paso.

> El área que nos interesa para el cálculo de carga es de unos 110 metros cuadrados. No cuenta el garaje ni la terraza, porque la norma no los incluye en el área de vivienda. Más adelante veremos por qué.

**Actividad:** Tu turno: la sala mide 14 pies 2 pulgadas por 17 pies 2 pulgadas. Conviértanla a metros y calculen su área. Tres minutos.

**Solución paso a paso**

1. Paso 1: pasar las pulgadas a pies. 2 pulgadas = 2 ÷ 12 = 0,1667 pies.
2. Paso 2: 14,1667 pies × 0,3048 = 4,32 m. Y 17,1667 pies × 0,3048 = 5,23 m.
3. Paso 3: área = largo × ancho = 4,32 × 5,23 = 22,6 m².

**Errores comunes**

- Escribir 14 pies 2 pulgadas como 14,2 pies. Son 14,17 pies: 2 pulgadas no son dos décimas de pie.
- Multiplicar pies por 0,3048 y olvidar que el resultado es en metros, no en pies.
- Dar el área en metros en lugar de metros cuadrados.

**Preguntas de comprobación**

- ¿Por qué no se cuentan el garaje ni la terraza en el área de cálculo? → *Porque la norma excluye garajes y porches abiertos del área de vivienda para la carga de alumbrado general (Art. 220.12).*
- ¿Cuántos metros son 10 pies? → *3,048 m.*

**Si falta o sobra tiempo:** Si sobra tiempo, pida que calculen el área de la alcoba 2 (10'0" × 12'9" = 3,05 × 3,89 m = 11,8 m²). Si falta, calcule solo una dimensión y deje la otra de tarea.

**Nota para ti:** El plano base se trazó a partir de un plano de Zillow (recorrido 3D): los puntos verdes y azules del original son marcadores del recorrido, no símbolos eléctricos. El área de 110 m² es una estimación sumando los espacios más muros, despensa, clósets y depósito. Confírmala con el dato oficial.

---

## Lámina 4 · Objetivos  (3 min)

**Objetivo:** Que cada aprendiz sepa qué sabrá hacer al terminar y qué debe entregar.

**Preparar:** Nada especial.

**Qué decir**

> Al terminar la clase ustedes van a poder cuatro cosas. Primero, explicar qué son L1, L2, neutro y tierra, que es el concepto que más confunde al comienzo.

> Segundo, calcular la potencia aparente en voltio-amperios y la corriente en amperios de cada carga.

> Tercero, levantar los circuitos, tomas y equipos de una casa que ya existe.

> Y cuarto, diagnosticar: armar un cuadro de cargas, ver cómo está balanceado entre L1 y L2 y hacer una matriz de hallazgos con la gravedad de cada uno.

> El entregable es el cuadro «tal como lo encontramos» y la matriz de hallazgos. Esa matriz es la materia prima de la Misión 2.

**Preguntas de comprobación**

- ¿Qué se entrega al final? → *El cuadro de cargas «tal como lo encontramos» y la matriz de hallazgos.*

---

## Lámina 5 · ¿Por qué levantar cargas?  (8 min)

**Objetivo:** Reconocer los riesgos básicos de una instalación mal hecha y por qué se levantan las cargas antes de intervenir.

**Preparar:** Si puede, un ejemplo real y corto (sin nombres) de una falla eléctrica en una vivienda.

**Palabras nuevas**

- *Choque eléctrico:* Paso de corriente por el cuerpo. Puede causar quemaduras, paro cardíaco o la muerte.
- *Sobrecarga:* Más corriente de la que el cable puede llevar. El cable se calienta.
- *Cortocircuito:* Falla de muy baja resistencia: la corriente se dispara.
- *Arco eléctrico:* Chispa eléctrica que genera calor muy alto.
- *Falla a tierra:* Fuga de corriente hacia tierra o hacia una parte metálica.
- *Mal contacto:* Conexión floja que se calienta.

**Qué decir**

> Antes de las fórmulas, una razón para hacer esto bien. La electricidad no avisa: una instalación sobrecargada o mal conectada simplemente falla, y a veces falla con fuego.

> [Recorra las seis tarjetas.] Choque eléctrico: cuando la corriente pasa por una persona. Sobrecarga: un cable que lleva más corriente de la que aguanta. Piensen en una tubería de agua delgada con demasiado caudal: se revienta. Con el cable, lo que pasa es que se calienta.

> Cortocircuito y arco: una falla fuerte, con chispa y calor. Falla a tierra: la corriente se va por donde no debe, por ejemplo por el cuerpo de una lavadora. Malos contactos: un tornillo flojo en una conexión calienta ese punto, y muchos incendios empiezan así.

> Por eso levantamos cargas: para saber qué tan exigida está una instalación antes de que falle. Levantar, calcular y comparar con la norma.

**Actividad:** Pregunta de discusión: ¿cuál de estos riesgos creen que causa más incendios en viviendas? No hay una cifra oficial en la lámina; no se invente una. Lo importante es que razonen.

**Errores comunes**

- Pensar que si el breaker no salta la instalación está bien. Un cable puede estar sobrecargado sin que el breaker dispare, y ese es justo uno de nuestros hallazgos.

**Preguntas de comprobación**

- ¿Qué le pasa a un cable que lleva más corriente de la que aguanta? → *Se calienta, se degrada el aislamiento y puede iniciar un incendio.*
- ¿Cuál es la idea de fondo del curso? → *Levantar, calcular y comparar con la norma antes de que algo falle.*

**Nota para ti:** No cite estadísticas si no las tiene verificadas.

---

## Lámina 6 · Dos documentos que no se separan  (10 min)

**Objetivo:** Distinguir qué es el RETIE y qué es la NTC 2050, y para qué sirve cada uno.

**Preparar:** Si tiene el texto impreso de la NTC 2050, llévelo a clase para que lo vean físicamente.

**Palabras nuevas**

- *RETIE:* Reglamento Técnico de Instalaciones Eléctricas. Lo expide el Ministerio de Minas y Energía y es obligatorio.
- *NTC 2050:* Código Eléctrico Colombiano. Explica cómo se hace una instalación bien: circuitos, cargas, protecciones, cables.
- *Norma técnica:* Documento de buenas prácticas. Obliga cuando un reglamento la acoge.
- *Operador de red:* Empresa que distribuye la energía en la zona (ESSA, EPM, Enel, etc.) y exige requisitos de conexión.
- *RETILAP:* Reglamento técnico de iluminación y alumbrado público. Lo veremos en la Misión 3.

**Qué decir**

> Hay dos documentos que van siempre juntos. El primero es el RETIE. Es un reglamento: lo expide el Ministerio de Minas y Energía y es obligatorio. Nuestra referencia es la Resolución 40284 del 23 de junio de 2026, que modifica la Resolución 40117 de 2024.

> El segundo es la NTC 2050, el Código Eléctrico Colombiano. Está basado en el código norteamericano NEC. Es el «cómo se hace bien»: cuántos circuitos, qué cable, qué protección. El reglamento la usa como referente técnico.

> Una forma sencilla de verlo: el RETIE es la ley que dice que hay que hacerlo bien y demostrarlo, y la NTC 2050 es el manual que explica cómo.

> Hay dos más que no olvidamos: el RETILAP, para iluminación, que veremos en la Misión 3, y el operador de red, la empresa de energía de la zona, que tiene sus propios requisitos de conexión.

> Un consejo de ingeniero: antes de citar un artículo en un informe, confírmenlo en el texto oficial vigente.

**Actividad:** Pregunta: si el RETIE obliga y la NTC 2050 es técnica, ¿cuál me pueden exigir en una inspección?

**Solución paso a paso**

1. El RETIE es lo que se exige en la inspección.
2. La NTC 2050 es el referente técnico con el que se demuestra el cumplimiento.

**Errores comunes**

- Creer que la NTC 2050 es solo una sugerencia. Es obligatoria en la práctica porque el RETIE la acoge.

**Preguntas de comprobación**

- ¿Quién expide el RETIE? → *El Ministerio de Minas y Energía.*
- ¿Para qué sirve la NTC 2050? → *Para saber cómo hacer bien una instalación: circuitos, cargas, protecciones, conductores.*

**Nota para ti:** Contenido verificado contra el texto de la Resolución 40284 de 2026 (Libros 1 a 4).

---

## Lámina 7 · ¿Qué le pregunta el RETIE a una instalación existente?  (10 min)

**Objetivo:** Conocer los seis frentes de evidencia del RETIE y saber si el caso exige diseño detallado.

**Preparar:** Tener claro el dato de 15 kVA: es la frontera entre esquema constructivo y diseño detallado.

**Palabras nuevas**

- *Certificado de conformidad:* Documento que demuestra que un producto (breaker, toma, cable) cumple el reglamento.
- *Matrícula profesional:* Registro que habilita a una persona para ejercer, con un alcance definido.
- *Dictamen de inspección:* Informe de un inspector que verifica la instalación.
- *Declaración de cumplimiento:* Documento firmado por quien diseñó o construyó, afirmando que cumple.
- *Esquema constructivo:* Plano sencillo que se entrega en instalaciones pequeñas sin diseño.
- *Diseño detallado:* Diseño completo con cálculos, unifilar y planos, hecho por un ingeniero.
- *Certificación plena:* Dictamen de inspección más declaración de cumplimiento.
- *kVA:* Mil voltio-amperios.

**Qué decir**

> Cuando levantamos una instalación, el RETIE nos sirve de lista de preguntas. Son seis frentes, y cada uno tiene su artículo en la resolución.

> Uno: diseño y memorias, Libro 3 artículos 3.3.1 y 3.3.2. ¿Existen planos y cálculos? Dos: productos, Libros 2 y 4. ¿Los breakers, tomas y cables son productos certificados? Tres: protecciones, artículo 3.8.1. Cuatro: puesta a tierra, título 12. Cinco: personal competente, artículo 3.2.1: quién diseñó y quién construyó, con qué matrícula. Seis: verificación, artículo 4.3.2: ¿hubo inspección?

> Ahora lo más importante para nuestro caso. Una vivienda pequeña, hasta 15 kVA y hasta 4 cuentas de energía, solo necesita un esquema constructivo y no requiere certificación plena.

> Pero si pasa de 15 kVA, necesita diseño detallado hecho por un ingeniero y certificación plena. Nuestra casa tiene casi 24 kVA conectados, así que cae en el segundo caso. Por eso en la Misión 2 el plano que dibujamos hace parte de un diseño detallado.

**Actividad:** Pregunta: ¿qué evidencia pediríamos para saber si los breakers del tablero son productos certificados?

**Solución paso a paso**

1. Mirar la marcación legible en el producto.
2. Pedir el certificado de conformidad del fabricante o importador.

**Errores comunes**

- Pensar que cualquier casa necesita certificación plena. Solo cuando supera 15 kVA o por remodelaciones grandes.

**Preguntas de comprobación**

- ¿Qué necesita una vivienda de 12 kVA y una cuenta? → *Un esquema constructivo, firmado por una persona competente.*
- ¿Y una de 24 kVA? → *Diseño detallado de un ingeniero y certificación plena.*

**Nota para ti:** Verificado: arts. 3.3.1 y 3.3.2 (diseño y esquema), 3.2.1 (personas), 3.8.1 (protecciones), 3.12.1 a 3.12.4 (puesta a tierra), 4.2 (productos), 4.3.2 (certificación plena). Una remodelación residencial también exige certificación plena si supera 10 kVA de ampliación, o si se remodela más del 50 % de dispositivos o conductores y la parte remodelada supera 10 kVA (4.3.2.2, literal a).

---

## Lámina 8 · La NTC 2050 como un mapa  (8 min)

**Objetivo:** Saber navegar la NTC 2050 y leer una cita como 210.11(C)(1).

**Preparar:** Si tiene el libro, ábralo en el Artículo 210 para mostrar cómo luce una cita.

**Palabras nuevas**

- *Capítulo:* Gran división del código (1 a 9).
- *Artículo:* Tema dentro de un capítulo, por ejemplo el 210 (circuitos ramales).
- *Sección y literal:* 210.11(C)(1) significa artículo 210, sección 11, literal C, numeral 1.

**Qué decir**

> La NTC 2050 es enorme. No se memoriza: se aprende a navegar. Piénsenla como un mapa por capítulos.

> Hoy usamos cuatro artículos del capítulo 2: el 210 para circuitos ramales, el 220 para cálculo de cargas, el 240 para protección contra sobrecorriente y el 250 para puesta a tierra. Del capítulo 3 usamos el 310, que trata de conductores, y del 4 el 408, de tableros.

> Un truco: 210, ¿cuántos circuitos? 220, ¿cuánta carga? 240, ¿qué breaker? 310, ¿qué cable?

> Y cómo se lee una cita. 210.11(C)(1): artículo 210, sección 11, literal C, numeral 1. Es como una dirección: ciudad, barrio, calle y número.

**Actividad:** Pregunta sin mirar: ¿qué artículo consulta si quiere saber qué cable va con un breaker de 20 A?

**Solución paso a paso**

1. El 310 (capacidad de corriente de los conductores).
2. Junto con el 240.4(D), que limita la protección de los conductores pequeños.

**Preguntas de comprobación**

- ¿Qué trata el artículo 220? → *El cálculo de cargas.*
- Lea esta cita: 210.8(A)(1). → *Artículo 210, sección 8, literal A, numeral 1: GFCI en baños de vivienda.*

---

## Lámina 9 · El lenguaje básico: magnitudes y unidades  (12 min)

**Objetivo:** Distinguir tensión, corriente, resistencia y los tres tipos de potencia, con sus unidades.

**Preparar:** Dibujar una tubería con agua en el tablero si ayuda: presión y caudal.

**Palabras nuevas**

- *Tensión (V):* Voltios. El «empuje» que mueve la corriente. En casa, 120 V o 240 V.
- *Corriente (I):* Amperios. Cuánta carga circula. Es lo que calienta el cable.
- *Resistencia (R):* Ohmios. Qué tanto se opone el material al paso de la corriente.
- *Potencia activa (P):* Vatios (W). La que se vuelve trabajo útil: luz, calor, movimiento.
- *Potencia aparente (S):* Voltio-amperios (VA). La que realmente exige a la instalación.
- *Potencia reactiva (Q):* VAR. Va y viene sin hacer trabajo útil.

**Qué decir**

> Antes de calcular necesitamos el vocabulario. Imaginen una tubería de agua. La presión del agua es la tensión. El caudal, cuánta agua pasa, es la corriente. Y qué tan angosta es la tubería es la resistencia.

> La tensión se mide en voltios. En casa tenemos 120 y 240. La corriente se mide en amperios, y es la que calienta el cable. La resistencia, en ohmios. Relacionadas por la ley de Ohm: V = I × R.

> Ahora la potencia. La potencia activa, en vatios, es la que hace el trabajo: la luz del bombillo, el calor de la estufa. La potencia aparente, en voltio-amperios, es la que la instalación realmente tiene que soportar. Y la reactiva, en VAR, es una parte que va y viene sin hacer nada útil.

> La idea para llevarse: los cables y los breakers se dimensionan por corriente, y la corriente depende de los voltio-amperios, no de los vatios. Eso lo vamos a ver con ejemplos.

**Actividad:** Pregunta: un equipo de 1000 W, ¿exige siempre 1000 VA a la instalación?

**Solución paso a paso**

1. No. Solo si el factor de potencia es 1.
2. Con factor de potencia menor, los voltio-amperios son mayores que los vatios.

**Errores comunes**

- Usar vatios (W) y voltio-amperios (VA) como si fueran lo mismo. Solo coinciden cuando el factor de potencia es 1.
- Confundir corriente con tensión.

**Preguntas de comprobación**

- ¿En qué se mide la corriente? → *En amperios.*
- ¿Qué calienta el cable, la tensión o la corriente? → *La corriente.*
- ¿Con cuál potencia se dimensionan cables y breakers? → *Con la aparente (VA), a través de la corriente.*

---

## Lámina 10 · Acometida 120/240 V: L1, L2, neutro y tierra  (18 min)

**Objetivo:** Explicar qué son L1, L2, neutro y tierra, qué tensión hay entre ellos y qué carga usa cada uno.

**Preparar:** Dibujar en el tablero tres líneas horizontales (L1 arriba, neutro en medio, L2 abajo) antes de proyectar. Dejar la lámina como apoyo.

**Palabras nuevas**

- *Acometida:* Los cables que llevan la energía desde la red del operador hasta el medidor y el tablero de la casa.
- *L1 y L2:* Las dos líneas o conductores energizados. Antes se decía «fases».
- *Neutro (N):* Conductor de retorno. Está conectado a tierra en el origen.
- *Tierra o PE:* Conductor de protección. No lleva corriente en operación normal.
- *Breaker de 1 polo:* Toma una sola línea y alimenta cargas de 120 V.
- *Breaker de 2 polos:* Toma L1 y L2 y alimenta cargas de 240 V.
- *Monofásico trifilar:* Servicio de una fase con tres conductores: L1, L2 y neutro.

**Qué decir**

> Este es el concepto que más se confunde, así que vamos despacio. El transformador que alimenta una casa entrega tres conductores activos: dos líneas, que llamamos L1 y L2, y un neutro.

> Una forma de imaginarlo: dos pilas de 120 voltios puestas en serie. El punto donde se unen es el neutro. Entre cada pila y el neutro hay 120 V. Entre los dos extremos, 120 más 120, hay 240 V.

> Entonces: L1 contra neutro, 120 voltios. L2 contra neutro, 120 voltios. L1 contra L2, 240 voltios. [Dibuje las tres flechas de tensión en el tablero.]

> ¿Qué carga usa cada conexión? Los bombillos y los tomacorrientes comunes usan una línea y el neutro, 120 V. Equipos grandes como el cooktop, el horno o los aires acondicionados usan L1 y L2, 240 V.

> En el tablero se nota: un breaker de un polo toma una sola línea. Un breaker de dos polos, que son dos palancas unidas, toma L1 y L2.

> El neutro es el camino de regreso. Pero ojo con una idea importante: el neutro solo lleva la diferencia de corriente entre L1 y L2. Si las dos líneas llevan la misma carga de 120 V, la corriente por el neutro es casi cero. Por eso es tan importante balancear, y por eso lo vamos a calcular hoy.

> Y la tierra, que no es lo mismo que el neutro. La tierra es un conductor de protección. En funcionamiento normal no lleva corriente: solo la lleva cuando hay una falla, para que el breaker dispare y la persona no se electrocute.

> Una nota de seguridad: tocar una línea y el neutro, o una línea y la tierra, da 120 V. Tocar L1 y L2 al mismo tiempo da 240 V. Nunca se toca nada sin verificar que está sin tensión.

**Actividad:** Pregunta de comprobación: si apago el breaker de 2 polos del cooktop, ¿qué dejó sin energía? ¿Y si apago uno de 1 polo?

**Solución paso a paso**

1. Un breaker de 2 polos corta L1 y L2 de ese circuito.
2. Uno de 1 polo corta solo una línea.

**Errores comunes**

- Confundir neutro con tierra. El neutro lleva corriente de retorno; la tierra no, salvo en fallas.
- Creer que el neutro es seguro de tocar: puede estar energizado si hay una falla o un mal conexionado.
- Pensar que las cargas de 240 V necesitan neutro. Normalmente solo usan L1 y L2.
- Decir «fase» y «línea» como si fueran cosas distintas: aquí se usan como sinónimos.

**Preguntas de comprobación**

- ¿Cuántos voltios hay entre L1 y neutro? → *120 V.*
- ¿Y entre L1 y L2? → *240 V.*
- ¿Qué lleva el neutro? → *La diferencia de corriente entre L1 y L2.*
- ¿Un aire acondicionado de 240 V usa 1 polo o 2? → *2 polos: L1 y L2.*

**Si falta o sobra tiempo:** Si falta tiempo, no abra la nota de seguridad: la retomamos en el levantamiento. Si sobra, dibuje en el tablero el tablero de la casa con 4 breakers y pida que digan cuántos polos usa cada uno.

**Nota para ti:** La lámina no afirma colores de conductores. Según el RETIE (Libro 3, Título 5, Tabla 3.5.a): neutro blanco, tierra de protección verde o desnuda. Para L1 y L2 en 120/240 V se espera negro y rojo, pero en el .md la tabla quedó desordenada: confírmalo en el original.

---

## Lámina 11 · En Colombia conviven 120/240 V y 120/208 V  (10 min)

**Objetivo:** Saber que existen dos sistemas de baja tensión en vivienda y qué cambia al calcular con 208 V.

**Preparar:** Tener la lámina anterior fresca. Si puede, un ejemplo local: «en este barrio el servicio es…».

**Palabras nuevas**

- *Trifásico tetrafilar:* Tres fases y neutro (cuatro hilos).
- *Bifásico (en 120/208):* Dos fases de una red trifásica más el neutro: da 120 V y 208 V.
- *Estrella (Y):* Forma de conectar el transformador trifásico.
- *Derivación central:* Punto medio del devanado: de ahí sale el neutro en 120/240.

**Qué decir**

> Una pregunta que siempre aparece: ¿en Colombia es 120/240 o 120/208? La respuesta es que conviven los dos. Cuál le llega a una casa depende de la red secundaria de la zona.

> El 120/240 V sale de un transformador monofásico con derivación central. Es lo típico de casas independientes, barrios tradicionales y zonas rurales.

> El 120/208 V sale de un transformador trifásico en estrella. Es lo típico de edificios de apartamentos, comercio, industria liviana y zonas densas de ciudades principales; la lámina menciona redes de Enel, EMCALI y EPM.

> ¿Por qué 208 y no 240? En una red trifásica las tres fases están desfasadas 120 grados, y la tensión entre dos de ellas es 120 por raíz de 3, que da unos 208 voltios.

> Para nosotros importa una cosa: las cargas de dos polos toman más corriente a 208 que a 240, porque con menos tensión hace falta más corriente para la misma potencia. Además, en el bifásico el neutro lleva corriente aunque las cargas estén balanceadas.

> Nuestro caso sigue siendo 120/240 V. Esta lámina solo les da el panorama para cuando vean otras casas.

**Actividad:** Tu turno: el cooktop de 7200 VA. ¿Cuánta corriente toma a 240 V y cuánta a 208 V?

**Solución paso a paso**

1. A 240 V: 7200 ÷ 240 = 30,0 A.
2. A 208 V: 7200 ÷ 208 = 34,6 A.
3. Conclusión: menos tensión, más corriente. Puede cambiar el calibre y el breaker.

**Errores comunes**

- Pensar que 208 V es un error de la red. Es un sistema normal y válido.

**Preguntas de comprobación**

- ¿Cuánto es 120 × 1,732? → *Unos 208: de ahí sale la tensión entre fases en estrella.*

**Nota para ti:** Los nombres de operadores (Enel, EMCALI, EPM) los incluí a tu pedido y no los pude verificar. Confírmalos con cada operador y revisa el contador de la zona. Algunas cargas aceptan 208 a 240 V y otras bajan su potencia a 208 V: revisa la placa. Una resistencia entrega aproximadamente (208 ÷ 240)² ≈ 75 % de su potencia a 208 V.

---

## Lámina 12 · Fórmulas 1: de vatios a voltio-amperios y amperios  (12 min)

**Objetivo:** Calcular la potencia aparente y la corriente de una carga a partir de los datos de placa.

**Preparar:** Escribir las dos fórmulas grandes en el tablero: S = P ÷ FP, I = S ÷ V.

**Palabras nuevas**

- *Datos de placa:* Etiqueta del equipo con potencia, tensión, a veces corriente y factor de potencia.
- *Factor de potencia (FP):* Número entre 0 y 1. Dice qué tan bien se aprovecha la corriente para hacer trabajo útil.
- *VA:* Voltio-amperios: potencia aparente.

**Qué decir**

> Tenemos dos fórmulas hoy. La primera: S igual a P dividido FP. Es decir, la potencia aparente en voltio-amperios es los vatios divididos por el factor de potencia.

> La segunda: I igual a S dividido V. La corriente es los voltio-amperios divididos por la tensión.

> ¿Por qué las necesitamos? Porque la placa de un equipo casi siempre dice vatios, pero la instalación se dimensiona con voltio-amperios y amperios.

> [Resuelva en el tablero.] Ejemplo uno: un bombillo LED. 15 vatios, 120 voltios, factor de potencia 0,5. S es 15 dividido 0,5, que da 30 VA. Ahora la corriente: 30 dividido 120 da 0,25 amperios.

> Ejemplo dos: la nevera. 800 vatios, 120 voltios, factor de potencia 0,85. S es 800 dividido 0,85, que da 941 VA. La corriente es 941 dividido 120, que da 7,84 amperios.

> Miren lo que pasó con el bombillo: tiene 15 vatios pero «pesa» 30 voltio-amperios, el doble. Ese es el efecto del factor de potencia bajo.

**Actividad:** Antes de pasar de lámina, pida que repitan el cálculo del bombillo en su cuaderno sin mirar.

**Solución paso a paso**

1. S = 15 ÷ 0,5 = 30 VA.
2. I = 30 ÷ 120 = 0,25 A.
3. Nevera: S = 800 ÷ 0,85 = 941 VA; I = 941 ÷ 120 = 7,84 A.

**Errores comunes**

- Multiplicar por el factor de potencia en vez de dividir.
- Dividir la potencia por 240 cuando la carga es de 120 V.
- Olvidar que primero se halla S y luego I.

**Preguntas de comprobación**

- Un equipo de 600 W con FP 0,8 a 120 V: ¿cuántos VA y cuántos A? → *S = 600 ÷ 0,8 = 750 VA; I = 750 ÷ 120 = 6,25 A.*

**Si falta o sobra tiempo:** Si sobra tiempo, pida el mismo cálculo para una plancha de 1200 W con FP 1 a 120 V: 1200 VA y 10 A.

---

## Lámina 13 · Fórmulas 2: el triángulo de potencias  (10 min)

**Objetivo:** Entender qué son P, Q, S y FP, y calcular Q con un ejemplo sencillo.

**Preparar:** Dibujar un triángulo rectángulo en el tablero.

**Palabras nuevas**

- *Triángulo de potencias:* Dibujo que relaciona P, Q y S como los lados de un triángulo rectángulo.
- *Ángulo φ:* Ángulo entre P y S. El factor de potencia es el coseno de ese ángulo.
- *VAR:* Voltio-amperios reactivos.

**Qué decir**

> Les cuento una imagen. Un vaso de cerveza: lo que realmente se toma es la cerveza, que es la potencia activa P. La espuma es la potencia reactiva Q: ocupa espacio pero no se toma. El vaso lleno es la potencia aparente S. El factor de potencia es qué fracción del vaso es cerveza.

> En el triángulo, P es el cateto horizontal, Q el vertical y S la hipotenusa. El factor de potencia es P dividido S, que es el coseno del ángulo.

> Ejemplo con el LED: P es 15 vatios y S es 30 VA. Q es la raíz de 30 al cuadrado menos 15 al cuadrado, que es la raíz de 675, o 26 VAR. Y el factor de potencia 0,5 corresponde a un ángulo de 60 grados.

> La idea de gestión eficiente de la energía: si cambiamos ese LED por otro con factor de potencia 0,9, consumiría 16,7 VA en lugar de 30. La misma luz con casi la mitad de corriente.

**Actividad:** Pregunta: si el factor de potencia baja, ¿qué pasa con la corriente para la misma potencia útil?

**Solución paso a paso**

1. Sube.
2. Los cables van más cargados y hay más pérdidas.

**Errores comunes**

- Confundir Q con P. Q no hace trabajo útil.
- Creer que el factor de potencia puede ser mayor que 1.

**Preguntas de comprobación**

- ¿Quién es la hipotenusa del triángulo de potencias? → *La potencia aparente S.*
- Si FP = 1, ¿cuánto vale Q? → *Cero.*

---

## Lámina 14 · ¿De dónde sale el factor de potencia?  (8 min)

**Objetivo:** Saber dónde se obtiene el factor de potencia y qué hacer cuando no se tiene.

**Preparar:** Tener la tabla de valores típicos a la vista.

**Palabras nuevas**

- *Corriente de placa:* Corriente que el fabricante marca en el equipo. Se usa en motores.
- *Valores típicos:* Rangos habituales del factor de potencia; no son de la norma.

**Qué decir**

> Una pregunta que ya me están haciendo con la mirada: ¿qué factor de potencia uso para una estufa o un aire acondicionado? La respuesta honesta es que ni el RETIE ni la NTC 2050 asignan un factor de potencia por tipo de carga. Lo informa el fabricante en la placa o en la ficha técnica.

> Cuatro reglas. Una: la NTC 2050 calcula en voltio-amperios, en el artículo 220. Dos: en motores, como aires y nevera, se usa la corriente de placa y la protección máxima, artículos 430 y 440. Tres: en resistencias, estufa, horno o calentador, el factor de potencia es casi 1, así que voltio-amperios y vatios son iguales. Cuatro: si no hay dato, se usa un supuesto conservador, se anota en la memoria de cálculo y se confirma con una medición.

> La tabla de la derecha son valores típicos, no normativos: sirven de orientación.

**Actividad:** Pregunta: ¿qué haría si encuentra un equipo viejo sin placa legible?

**Solución paso a paso**

1. Medir la corriente real con una pinza amperimétrica.
2. Usar un factor de potencia conservador (bajo) y anotarlo en la memoria de cálculo.

**Errores comunes**

- Inventar un factor de potencia sin anotarlo ni justificarlo.

**Preguntas de comprobación**

- ¿Quién da el factor de potencia de un equipo? → *El fabricante, en la placa o la ficha técnica.*
- En un motor, ¿se usa FP o corriente de placa? → *Corriente de placa.*

**Nota para ti:** Los umbrales de la CREG (energía reactiva) y del RETILAP (FP de luminarias) no los pude verificar. Consulta la regulación vigente antes de dar cifras.

---

## Lámina 15 · Tu turno: calcula S e I a mano  (12 min)

**Objetivo:** Practicar S = P ÷ FP e I = S ÷ V con cuatro equipos reales.

**Preparar:** Nada proyectado en la parte de respuestas hasta que todos terminen. Pasar por los puestos mientras calculan.

**Qué decir**

> Cuatro minutos. Cuaderno y calculadora. Usen S igual P dividido FP e I igual S dividido V. Redondeen los voltio-amperios al entero y los amperios a dos decimales.

> Ojo con la tensión de cada fila: el aire acondicionado va a 240 voltios.

> [Camine por el salón. Si alguien se atasca, pregunte: ¿qué tensión usó? ¿Dividió o multiplicó por el factor de potencia?]

> [Cuando casi todos terminen, pulse «Descubrir respuestas» o la tecla R.]

**Actividad:** Calcular S e I del microondas, la lavadora-secadora, el aire acondicionado y el televisor.

**Solución paso a paso**

1. Microondas: S = 1200 ÷ 0,95 = 1263 VA; I = 1263 ÷ 120 = 10,53 A.
2. Lavadora-secadora: S = 1500 ÷ 0,90 = 1667 VA; I = 1667 ÷ 120 = 13,89 A.
3. Aire acondicionado (240 V): S = 1600 ÷ 0,90 = 1778 VA; I = 1778 ÷ 240 = 7,41 A.
4. Televisor: S = 150 ÷ 0,90 = 167 VA; I = 167 ÷ 120 = 1,39 A.

**Errores comunes**

- Usar 120 V para el aire acondicionado.
- Multiplicar por el factor de potencia.
- Redondear antes de tiempo y llegar a resultados distintos.

**Preguntas de comprobación**

- Piensa: ¿por qué el aire acondicionado, con más potencia, tiene menos corriente que el microondas? → *Porque trabaja a 240 V y I = S ÷ V: con más tensión, menos corriente.*

---

## Lámina 16 · Levantar una instalación existente: 5 pasos  (12 min)

**Objetivo:** Seguir un método ordenado de levantamiento y trabajar con seguridad.

**Preparar:** Tener a mano una hoja de ejemplo del formato de campo, o dibujarlo en el tablero.

**Palabras nuevas**

- *Croquis:* Dibujo rápido a mano alzada, no a escala.
- *Pinza amperimétrica:* Instrumento que mide la corriente sin cortar el cable.
- *EPP:* Elementos de protección personal.
- *CAT III:* Categoría de seguridad de un instrumento para uso en tableros.

**Qué decir**

> El levantamiento tiene cinco pasos y siempre se hace en este orden. Uno: recorrer la casa y dibujar un croquis. En cada espacio anotamos las salidas de alumbrado, los tomas, los interruptores y los equipos fijos.

> Dos: leer el tablero. Cuántos polos tiene cada breaker, cuántos amperios, qué calibre se ve y si hay directorio de circuitos. Tres: trazar los circuitos. Apagamos un breaker a la vez y verificamos qué se apaga, con detector o probador y con autorización del propietario.

> Cuatro: registrar las placas de los equipos y medir con la pinza amperimétrica. Cinco: consolidar todo en un inventario, un cuadro de cargas, el balanceo, la carga demandada y los hallazgos.

> Seguridad primero. Usamos EPP y herramienta aislada. No abrimos el tablero sin autorización del propietario. Confirmamos que no hay tensión antes de tocar conductores. Y usamos instrumentos de categoría adecuada, CAT III.

> Una frase para que se les quede: si no está escrito, no existe. Todo lo que vemos se anota en un formato de campo: ubicación, descripción, datos de placa, circuito y observaciones.

**Actividad:** Pregunta: ¿cómo identificarían qué breaker alimenta una toma sin dejar toda la casa a oscuras?

**Solución paso a paso**

1. Apagar un breaker a la vez.
2. Verificar con un detector o probador en la toma, con autorización del propietario.

**Errores comunes**

- Abrir el tablero sin permiso del propietario.
- Confiar en que un cable está sin tensión porque «el breaker está abajo»: se verifica con instrumento.

**Preguntas de comprobación**

- ¿Cuál es el paso cuatro? → *Registrar placas y medir.*
- ¿Qué instrumento mide corriente sin cortar el cable? → *La pinza amperimétrica.*

**Si falta o sobra tiempo:** Si sobra tiempo, pida que planeen el recorrido sobre el plano: qué espacio visitarían primero y por qué.

---

## Lámina 17 · Circuitos que exige la NTC 2050 en una vivienda  (10 min)

**Objetivo:** Conocer los circuitos mínimos de una vivienda y a dónde se aplica GFCI y AFCI.

**Preparar:** Tener presente que esta es la lista de verificación del levantamiento.

**Palabras nuevas**

- *Circuito ramal:* Tramo de instalación desde el breaker hasta las salidas (tomas y luces).
- *Pequeños artefactos:* Tomas de cocina, comedor y desayunador, donde se conectan licuadora, tostadora, etc.
- *GFCI:* Interruptor que detecta una fuga a tierra y desconecta en milésimas de segundo. Protege a las personas.
- *AFCI:* Interruptor que detecta arcos peligrosos. Protege contra incendios.

**Qué decir**

> Esta tabla es la lista de verificación del levantamiento: comparamos lo que hay con lo que la norma pide como mínimo.

> Alumbrado: circuitos de 15 o 20 amperios, sin mezclarse con los de cocina. Pequeños artefactos de cocina y comedor: mínimo dos circuitos de 20 A, y la carga mínima que se cuenta es 1500 VA por circuito. Lavandería: un circuito de 20 A solo para eso. Baños: un circuito de 20 A solo para los tomas de baño. Equipos fijos, como nevera, cooktop y aires: un circuito individual cada uno, según la placa.

> GFCI: protege a las personas contra choques por fuga a tierra. Se exige en baños, mesones de cocina, exteriores, garaje y lavandería, y cerca de lavaplatos. AFCI: protege contra arcos eléctricos, que causan incendios. Se exige en cocinas, salas, comedores, alcobas, armarios y lavandería de la vivienda, artículo 210.12(A).

> Aclaración importante: el alumbrado y los tomacorrientes de uso general se calculan por área, 33 VA por metro cuadrado, en el artículo 220. No se cuentan uno por uno.

**Actividad:** Pregunta: ¿cuántos circuitos mínimos de pequeños artefactos debe tener la cocina?

**Solución paso a paso**

1. Dos, de 20 A cada uno (210.11(C)(1)).

**Errores comunes**

- Confundir GFCI con AFCI: el primero protege personas; el segundo, contra incendio por arcos.
- Creer que un circuito de 15 A basta para los pequeños artefactos.

**Preguntas de comprobación**

- ¿Qué protege el GFCI? → *A las personas contra choque por fuga a tierra.*
- ¿Cuántos circuitos de lavandería exige la norma? → *Al menos uno de 20 A, exclusivo (210.11(C)(2)).*

**Nota para ti:** Verificado contra la NTC 2050 segunda actualización: 210.8(A) (GFCI), 210.11(C) (circuitos), 210.12(A) (AFCI en áreas de vivienda).

---

## Lámina 18 · ¿Dónde van los tomacorrientes? Art. 210.52  (10 min)

**Objetivo:** Aplicar la regla de 1,8 m y las reglas de mesón, baño y exterior.

**Preparar:** Dibujar una pared en el tablero con medidas para el ejemplo.

**Palabras nuevas**

- *Espacio de pared:* Tramo de pared de 0,6 m o más que cuenta para colocar tomas.
- *Mesón:* Superficie de trabajo de la cocina.

**Qué decir**

> Regla de oro: ningún punto de la pared puede quedar a más de 1,8 metros de un tomacorriente. Por qué 1,8: es más o menos el largo de un cable de un electrodoméstico común, y no queremos extensiones.

> Si cada toma cubre 1,8 metros hacia cada lado, los tomas pueden ir separados como máximo 3,6 metros.

> Tres casos especiales. Sala, comedor y alcobas: paredes de 0,6 m o más. Mesones de cocina: un espacio de 0,3 m o más necesita un toma, y ningún punto del mesón puede quedar a más de 0,6 m de un toma. Baño, exterior y lavandería: al menos un toma con GFCI, y en el baño a máximo 0,9 m del lavamanos.

**Actividad:** Tu turno: una pared continua de 5 metros. ¿Cuántos tomas mínimo y dónde?

**Solución paso a paso**

1. Un solo toma cubre como máximo 3,6 m de pared, así que con 5 m hacen falta 2.
2. Por ejemplo a 1,4 m y a 4,0 m de un extremo: del extremo al primero hay 1,4 m (menos de 1,8), entre ambos hay 2,6 m (menos de 3,6) y del segundo al otro extremo 1,0 m.

**Errores comunes**

- Contar la distancia en línea recta y no a lo largo de la pared.
- Olvidar los extremos: el primero y el último toma también deben estar a máximo 1,8 m de las esquinas.

**Preguntas de comprobación**

- ¿Cada cuánto máximo van los tomas en una pared? → *3,6 m de separación.*
- ¿A cuántos metros del lavamanos máximo va el toma del baño? → *0,9 m.*

---

## Lámina 19 · Inventario de cargas fijas del caso  (12 min)

**Objetivo:** Calcular los voltio-amperios de cada equipo fijo del caso y organizar el inventario.

**Preparar:** Reparta calculadoras y avise que solo se calcula la columna S.

**Qué decir**

> Este es el inventario de cargas fijas de la casa, con los datos de placa. Los aires están en la alcoba principal, la alcoba 2 y la sala. Pido que calculen solo la columna de voltio-amperios, con S igual P dividido FP. Dos minutos por tres filas, y comparan con el compañero.

> [Cuando terminen, pulse «Descubrir columna S».]

> Cuando revisen, noten lo siguiente: el cooktop y el horno tienen factor de potencia 1, entonces los voltio-amperios son iguales a los vatios. Los bombillos LED son los que más cambian: de 15 vatios pasan a 30 VA.

> Un recordatorio práctico: en una casa real, para motores y aires acondicionados tomen la corriente de la placa y no un factor de potencia supuesto.

**Actividad:** Calcular S de las 9 filas, en parejas.

**Solución paso a paso**

1. Nevera: 800 ÷ 0,85 = 941 VA.
2. Cooktop: 7200 ÷ 1 = 7200 VA.
3. Horno: 2000 ÷ 1 = 2000 VA.
4. Microondas: 1200 ÷ 0,95 = 1263 VA.
5. Lavadora-secadora: 1500 ÷ 0,90 = 1667 VA.
6. Aires (cada uno): 1600 ÷ 0,90 = 1778 VA.
7. TV: 150 ÷ 0,90 = 167 VA.
8. Sonido: 200 ÷ 0,85 = 235 VA.
9. LED (cada uno): 15 ÷ 0,5 = 30 VA.

**Errores comunes**

- Usar 120 V para dividir cuando solo se pide S (no hace falta tensión aquí).
- Olvidar que los aires son tres, uno por espacio.

**Preguntas de comprobación**

- ¿Por qué el cooktop tiene S igual a P? → *Porque es una resistencia y su factor de potencia es 1.*
- ¿Cuántos VA suman los 15 LED? → *15 × 30 = 450 VA.*

---

## Lámina 20 · Fórmulas 3: breaker y calibre de cada circuito  (18 min)

**Objetivo:** Elegir el breaker y el calibre de un circuito a partir de su corriente.

**Preparar:** Escribir en el tablero la tabla 14 AWG = 15 A, 12 AWG = 20 A, 10 AWG = 30 A.

**Palabras nuevas**

- *Breaker:* Interruptor automático que protege al circuito de sobrecorriente.
- *Calibre AWG:* Grosor del conductor. A mayor número, más delgado: 14 es más delgado que 12.
- *Ampacidad:* Corriente máxima que un conductor puede llevar sin calentarse de más.
- *Carga continua:* Carga que funciona 3 horas o más seguidas.
- *Cobre (Cu):* Material del conductor.

**Qué decir**

> Ya sabemos calcular la corriente de una carga. Ahora, ¿qué breaker y qué cable le ponemos? Cuatro pasos.

> Uno: calculamos la corriente, I igual S dividido V. Dos: si la carga es continua, es decir funciona tres horas o más, multiplicamos por 1,25. Tres: el breaker comercial es el siguiente valor estándar: 15, 20, 25, 30, 35, 40, 45, 50, 60. Cuatro: el cable se elige para que aguante ese breaker.

> Hay un límite que deben aprender de memoria: un conductor 14 AWG de cobre puede protegerse con máximo 15 A, un 12 AWG con máximo 20 A y un 10 AWG con máximo 30 A. Esto está en el artículo 240.4(D). Por eso un breaker de 20 amperios sobre un cable 14 es un error.

> [Resuelva el ejemplo.] Circuito de pequeños artefactos de cocina: 1500 VA a 120 V da 12,5 amperios. Eléctricamente cabría un breaker de 15, pero el artículo 210.11(C)(1) exige que estos circuitos sean de 20 amperios. Entonces el breaker es de 20 A, 1 polo, y el cable es 12 AWG.

> Recuerden una regla práctica para el aire acondicionado y los motores: se usa la corriente y la protección máxima de la placa.

**Actividad:** Tu turno: cooktop de inducción, 7200 VA a 240 V. Calculen I, I de diseño (por 1,25), breaker y calibre.

**Solución paso a paso**

1. I = 7200 ÷ 240 = 30 A.
2. I de diseño = 30 × 1,25 = 37,5 A.
3. Breaker comercial siguiente: 2 polos de 40 A.
4. Conductor: necesita aguantar 40 A, y 10 AWG solo puede protegerse con 30 A. Entonces 8 AWG de cobre.

**Errores comunes**

- Elegir el cable por el breaker más grande que quepa «porque salta mucho»: así se quema el cable antes que el breaker.
- Dejar el cable más delgado que el límite del breaker.
- Olvidar que el cooktop usa 2 polos.

**Preguntas de comprobación**

- ¿Qué breaker máximo protege un cable 14 AWG? → *15 A.*
- ¿Un cable 12 AWG con un breaker de 30 A está bien? → *No: el máximo para 12 AWG es 20 A.*

**Nota para ti:** El 8 AWG para 40 A sale de la tabla de ampacidad, que es imagen en el .md. Confirma la tabla en tu edición impresa. Para aires acondicionados usa la corriente y la protección máxima de la placa.

---

## Lámina 21 · ¿Cómo clasificamos lo que encontramos?  (8 min)

**Objetivo:** Distinguir incumplimiento, mala práctica y oportunidad de eficiencia, y asignar una severidad.

**Preparar:** Escribir en el tablero tres columnas: incumplimiento, mala práctica, oportunidad.

**Palabras nuevas**

- *Incumplimiento:* La norma lo exige o lo prohíbe.
- *Mala práctica:* La norma lo permite, pero baja la seguridad o la calidad.
- *Oportunidad de eficiencia:* Mejora para ahorrar energía.
- *Severidad:* Qué tan grave es: crítico, mayor o menor.

**Qué decir**

> Antes de mirar el tablero, un criterio. Un buen consultor no dice «esto está mal»: dice qué tipo de problema es y qué tan grave.

> Primero el tipo. Incumplimiento: la norma lo exige o lo prohíbe, se corrige sí o sí. Ejemplo: un baño sin GFCI. Mala práctica: la norma lo permite, pero baja la seguridad o el servicio. Ejemplo: alumbrado y tomas en el mismo breaker. Oportunidad de eficiencia: no es una falla, es ahorro. Ejemplo: un LED con factor de potencia bajo.

> Después la gravedad. Crítico: riesgo inmediato de incendio o choque. Mayor: incumple o puede fallar en uso normal. Menor: mejora recomendada.

> Les aviso algo importante: la casa que vamos a revisar es un caso didáctico con deficiencias sembradas a propósito. No es una vivienda real, aunque en Colombia hemos visto cosas parecidas.

**Actividad:** Pregunta: alumbrado y tomas en el mismo breaker de una alcoba, ¿incumplimiento o mala práctica?

**Solución paso a paso**

1. Mala práctica: la norma lo permite en habitaciones.
2. Pero si el breaker dispara, la persona se queda sin luz y sin tomas.

**Errores comunes**

- Llamar «incumplimiento» a todo lo que no nos gusta. Hay que citar la norma.
- Dar la misma severidad a todo.

**Preguntas de comprobación**

- Un baño sin GFCI, ¿qué tipo es? → *Incumplimiento.*
- Un cooktop con cable que no aguanta la corriente, ¿qué severidad? → *Crítico.*

---

## Lámina 22 · Cuadro de cargas tal como lo encontramos  (18 min)

**Objetivo:** Detectar, fila por fila, qué está mal en un cuadro de cargas y justificarlo con la norma.

**Preparar:** Dar a cada pareja hoja y lápiz. Tener lista la lámina siguiente para el balanceo.

**Qué decir**

> Aquí está el tablero de la casa. Lean cada fila: qué carga alimenta, cuántos voltio-amperios, qué corriente, qué breaker, qué calibre y en qué línea está.

> Tu turno: en parejas y en el cuaderno, ¿qué está mal en cada fila? Tienen cinco minutos. Usen lo que ya vimos: el límite de calibre contra breaker, los circuitos que exige la norma y el GFCI.

> [Pasee y escuche. Cuando haya consenso, pulse «Descubrir estado» y discuta fila por fila. Deje que ellos argumenten antes de confirmar.]

> Al cerrar: la carga conectada total es 23 895 VA, o sea 99,56 amperios. Fíjense que es una carga conectada: lo que realmente hay. No es lo mismo que la carga mínima de diseño que veremos en la Misión 2.

**Actividad:** Detectar el problema de cada fila (F1 a F9).

**Solución paso a paso**

1. F1: 1710 VA, 14,25 A, breaker de 20 A con cable 14 AWG. Un 14 AWG solo puede protegerse con 15 A (240.4(D)). MAYOR.
2. F2: 1620 VA, 13,5 A, 20 A con 12 AWG. Calibre y breaker son correctos, pero mezcla alumbrado y tomas. MENOR (mala práctica).
3. F3: 720 VA, 6 A. Tomas de los baños y del garaje en el mismo circuito y sin GFCI. Cada uno debe tener su circuito y GFCI (210.8(A), 210.11(C)(3) y (4)). MAYOR.
4. F4: 3644 VA = 30,37 A en un breaker de 40 A con cable 12 AWG, que solo aguanta 20 A. Además, un solo circuito en la cocina y sin GFCI en el mesón. CRÍTICO.
5. F5: lavadora-secadora, 13,89 A, 20 A con 12 AWG. Cumple en breaker y calibre.
6. F6: horno, 8,33 A, 2×20 A con 12 AWG. Cumple.
7. F7: cooktop, 30 A, con 12 AWG que solo aguanta 20 A (breaker 2×40 A). CRÍTICO.
8. F8: aire alcoba principal, 7,41 A, 2×20 A, 12 AWG. Cumple.
9. F9: aires de la alcoba 2 y la sala en un solo breaker, 14,82 A. Cada aire debe tener su circuito. MENOR.

**Errores comunes**

- Decir que F1 está bien porque 14,25 A es menor que 15 A: el problema es el breaker de 20 A sobre el cable 14 AWG, no la corriente de carga.
- No ver que F4 y F7 tienen un breaker más grande que lo que el cable aguanta: el cable puede calentarse sin que el breaker dispare.
- Dar por correcto lo que solo parece correcto: revisar siempre calibre contra breaker.

**Preguntas de comprobación**

- ¿Por qué F4 es crítico? → *Porque el breaker de 40 A no protege al cable 12 AWG, que aguanta 20 A: el cable puede incendiarse con 30 A sin que el breaker dispare.*
- ¿Qué significa «carga conectada»? → *Lo que realmente hay instalado, medido o contado en la casa.*

**Nota para ti:** Totales: 23 895 VA y 99,56 A a 240 V. En una lavandería el toma de la lavadora también requiere GFCI (210.8(A)(10)): la lámina da F5 por «cumple» en calibre y breaker; si un aprendiz lo señala, es un buen punto para la Misión 2.

---

## Lámina 23 · Balanceo: ¿cuánto lleva cada línea?  (14 min)

**Objetivo:** Calcular cuánta carga lleva L1 y L2, el desbalance y la corriente del neutro.

**Preparar:** Dibujar dos filas de caja de supermercado: una con 10 personas y otra con 4.

**Palabras nuevas**

- *Balanceo:* Repartir la carga de forma pareja entre L1 y L2.
- *Desbalance:* Diferencia entre las dos líneas respecto al promedio.
- *Corriente de neutro:* Lo que el neutro lleva: la diferencia de las corrientes de 120 V de cada línea.

**Qué decir**

> Piensen en dos filas de caja en un supermercado. Si una tiene diez personas y la otra cuatro, el sistema está mal repartido. Con L1 y L2 pasa igual: queremos cargas parejas.

> Fórmulas. La carga de L1 es la suma de los circuitos de un polo que están en L1, más la mitad de los circuitos de dos polos. La de L2 igual. El desbalance es la diferencia entre ambas, dividida por el promedio, por cien. La corriente del neutro es la diferencia entre las corrientes de 120 voltios de cada línea.

> Ejemplo: el cooktop de 7200 VA a 240 V usa las dos líneas. Aporta la mitad, 3600, a L1 y 3600 a L2, y no lleva corriente por el neutro.

> Tu turno con el cuadro «tal como lo encontramos»: los circuitos de un polo suman 9361 VA y todos están en L1. Los de dos polos suman 14 534 VA, que son 7267 por línea. Calculen L1, L2, desbalance y la corriente del neutro y de cada línea.

> [Cuando terminen, pulse «Descubrir respuesta».]

> Miren la última cifra: L1 llevaría 138,6 amperios en una acometida de 100 amperios. Eso es lo que pasa cuando todo el 120 voltios cuelga de una sola línea.

**Actividad:** Calcular L1, L2, desbalance y corrientes con el cuadro de la lámina anterior.

**Solución paso a paso**

1. Circuitos de 2 polos: 2000 + 7200 + 1778 + 3556 = 14 534 VA; mitad por línea: 7267 VA.
2. L1 = 9361 + 7267 = 16 628 VA. L2 = 0 + 7267 = 7267 VA.
3. Desbalance = (16 628 − 7267) ÷ ((16 628 + 7267) ÷ 2) × 100 = 9361 ÷ 11 947,5 × 100 = 78,4 %.
4. Corriente de neutro = 9361 ÷ 120 = 78,0 A.
5. I de L1 = 9361 ÷ 120 + 14 534 ÷ 240 = 78,0 + 60,6 = 138,6 A. I de L2 = 60,6 A.

**Errores comunes**

- Sumar los circuitos de 2 polos completos en cada línea en lugar de la mitad.
- Dividir por 240 todas las corrientes: los circuitos de un polo van a 120 V.
- Usar el total de VA como promedio.

**Preguntas de comprobación**

- ¿Cuánto aporta a cada línea un circuito de 2 polos de 3000 VA? → *1500 VA a cada una.*
- ¿Qué pasa con el neutro si L1 y L2 están perfectamente balanceadas? → *Su corriente es casi cero.*

**Nota para ti:** Con factores de demanda no sería siempre 139 A, pero en un pico simultáneo el breaker general dispara o los conductores se sobrecargan.

---

## Lámina 24 · Carga instalada vs. carga demandada (Art. 220)  (18 min)

**Objetivo:** Calcular la carga demandada con los factores de la norma y entender por qué difiere de la conectada.

**Preparar:** Escribir las dos palabras en el tablero: conectada y demandada, con una flecha entre ellas.

**Palabras nuevas**

- *Carga demandada:* La que se espera que funcione a la vez, según la norma.
- *Factor de demanda:* Porcentaje de la carga que se cuenta.
- *Carga conectada:* Todo lo que hay instalado, sin factores.

**Qué decir**

> No todo en una casa funciona al mismo tiempo: la licuadora y el cooktop y la lavadora y los tres aires rara vez están encendidos a la vez. Por eso la norma usa factores de demanda: cuenta solo una parte de ciertas cargas.

> Partimos de 110 metros cuadrados, sin garaje ni terraza, y de los mínimos de la norma, no de lo conectado.

> Paso a paso. Uno: alumbrado general, 33 VA por metro cuadrado, artículo 220.12. 110 por 33 son 3630 VA. Dos: dos circuitos de pequeños artefactos, 1500 VA cada uno: 3000. Tres: lavandería, 1500. Esos tres suman 8130.

> Cuatro: a ese subtotal se le aplica el artículo 220.42. Los primeros 3000 VA van al 100 por ciento y el resto, 5130, al 35 por ciento: 1795,5. Con los 3000 son 4796.

> Cinco: el cooktop y el horno, 9200 vatios en total, se calculan con la Tabla 220.55 y quedan en 8000 VA. Seis: nevera y microondas al 100 por ciento: 941 más 1263 son 2204. Siete: los tres aires al 100 por ciento: 3 por 1778 son 5334.

> [Pulse «Descubrir cálculo completo».] El total es 20 334 VA. Dividido entre 240 voltios, 84,7 amperios. Eso cabe en una acometida de 100 amperios, el mínimo para una vivienda unifamiliar, pero con poca holgura.

> Y noten: lo conectado hoy son 99,6 amperios. Ya roza los 100. Esa casa no tiene reserva para ampliar.

**Actividad:** Pida que calculen cada renglón antes de descubrir la tabla. Dos minutos por renglón es suficiente.

**Solución paso a paso**

1. 1) 110 × 33 = 3630. 2) 2 × 1500 = 3000. 3) 1500. Subtotal 8130.
2. 4) 3000 + 5130 × 0,35 = 3000 + 1795,5 = 4795,5 ≈ 4796.
3. 5) Cooktop 7200 + horno 2000 = 9200 W; Tabla 220.55 (hasta 12 kW) = 8000 VA.
4. 6) 941 + 1263 = 2204.  7) 3 × 1778 = 5334.
5. Total = 4796 + 8000 + 2204 + 5334 = 20 334 VA.
6. I = 20 334 ÷ 240 = 84,7 A. Acometida y protección general: 100 A (mínimo vivienda unifamiliar, 225.39(C)).

**Errores comunes**

- Aplicar el 35 % a todo el subtotal, olvidando que los primeros 3000 VA van al 100 %.
- Contar los aires al 35 %.
- Usar los 24 m² de garaje y terraza en el área.
- Confundir esta cifra con la carga conectada.

**Preguntas de comprobación**

- ¿Por qué la demanda es menor que la conectada? → *Porque no todo funciona a la vez y la norma aplica factores de demanda a parte de las cargas.*
- ¿Cuál es el mínimo de acometida para una vivienda unifamiliar? → *100 A (225.39(C)).*

**Nota para ti:** Cabe en 100 A pero sin holgura. Las tablas 220.12, 220.42 y 220.55 no están en el .md (son imágenes): confirma 33 VA/m², 35 % y 8 kW en el impreso. El 100 A sale del 225.39(C); el 230.79 solo trae 15 A, 30 A y la carga calculada. El área de 110 m² es una estimación: confírmala.

---

## Lámina 25 · Matriz de hallazgos: la entrada de la Misión 2  (10 min)

**Objetivo:** Consolidar los hallazgos con ubicación, severidad y referencia, para usarlos como entrada de la Misión 2.

**Preparar:** Reparta un formato impreso con las columnas de la matriz si puede.

**Palabras nuevas**

- *Matriz de hallazgos:* Tabla que resume cada problema: qué es, dónde, qué tan grave, con qué norma, y qué se propone.
- *Referencia:* Artículo de la norma que respalda el hallazgo.

**Qué decir**

> Esta es la entrega estrella de la clase. Cada hallazgo se escribe con cuatro datos: qué es, dónde está, qué tan grave es y qué artículo de la norma lo respalda. La última columna, la propuesta, la llenamos en la Misión 2.

> [Recorra las nueve filas.] Uno: el cooktop con cable 12 AWG, crítico, artículos 240.4(D) y 210.19(A)(3). Dos: la cocina en un solo breaker de 40 A con 12 AWG y 30,4 A, crítico. Tres: mesón sin GFCI, mayor, 210.8(A). Cuatro: baños y garaje sin GFCI y juntos, mayor.

> Cinco: 14 AWG con 20 A, mayor, 240.4(D). Seis: todo el 120 V en L1, 78,4 por ciento de desbalance, mayor. Siete: puesta a tierra sin medir, mayor, artículo 250. Ocho: sin directorio ni reserva, menor, 408.4. Nueve: alumbrado con tomas y dos aires en un breaker, menor, mala práctica.

> Para que cada fila sea buena: debe poder entenderla alguien que no estuvo en la casa. Sin «está mal el tablero»; sí «F4: breaker de 40 A con cable 12 AWG, cocina».

**Actividad:** Discusión de dos minutos: ¿cuál hallazgo es el más peligroso para la vida de las personas? Justifiquen.

**Solución paso a paso**

1. No hay una sola respuesta. Un buen argumento: los dos críticos (cooktop y cocina) por riesgo de incendio, y la puesta a tierra sin medir por riesgo de choque.

**Errores comunes**

- Escribir hallazgos vagos.
- No citar el artículo.
- Mezclar dos problemas en una misma fila.

**Preguntas de comprobación**

- ¿Qué datos lleva cada fila de la matriz? → *Qué es, dónde está, severidad y referencia a la norma.*

---

## Lámina 26 · Los 9 hallazgos sobre el plano  (10 min)

**Objetivo:** Ubicar cada hallazgo en el plano de la casa.

**Preparar:** Mantener la lámina con los marcadores ocultos hasta que terminen.

**Qué decir**

> Ahora ubicamos los hallazgos en el plano de la casa. Primero lo intentan ustedes: un minuto en parejas, sin ver los marcadores.

> [Pulse «Descubrir marcadores».] El uno y el dos están en la cocina: cooktop y circuito de pequeños artefactos. El tres es el mesón. El cuatro está en los baños y el garaje. El cinco, en la zona social. El seis y el ocho, en el tablero del garaje. El siete es la puesta a tierra, fuera de la casa. El nueve son los aires acondicionados.

> Un hallazgo en el papel se vuelve real cuando sabes dónde está.

**Actividad:** Ubicar los 9 marcadores sobre el plano.

**Solución paso a paso**

1. 1 y 2: cocina. 3: mesón de cocina. 4: baños y garaje. 5: zona social. 6 y 8: tablero (garaje). 7: electrodo de puesta a tierra. 9: aires de alcoba principal, alcoba 2 y sala.

**Preguntas de comprobación**

- ¿Qué dos hallazgos están en la cocina y por qué conviene corregirlos juntos? → *El 1 (cooktop) y el 2 (circuito de pequeños artefactos): al replantear la cocina se resuelven ambos y el del GFCI del mesón.*

**Nota para ti:** Los marcadores son ilustrativos; en el plano real cada uno se ubica con la medición en campo.

---

## Lámina 27 · Taller: su cuadro de cargas  (10 min)

**Objetivo:** Dejar claras las tareas, los criterios y la forma de calcular en hoja de cálculo.

**Preparar:** Tener abierta una hoja de cálculo para mostrar dos fórmulas.

**Qué decir**

> El trabajo es en equipos de tres. Cada equipo entrega cuatro cosas: el cuadro «tal como lo encontramos» en una hoja de cálculo con fórmulas, no con valores pegados; el desbalance y las corrientes de L1, L2 y neutro; la carga demandada y la corriente de la acometida; y la matriz de hallazgos completa.

> [En la hoja de cálculo.] Por ejemplo, si el factor de potencia está en la columna D y los vatios en C, el VA se calcula con =C2/D2. Y la corriente, con =E2/120 si la carga es de 120 V.

> Los criterios de evaluación: cálculos de S e I correctos, breaker y calibre coherentes, hallazgos bien clasificados, demanda con los factores de la norma, y orden y trazabilidad: cada cifra debe poder rastrearse a su origen.

> Les anuncio la próxima clase: replanteamos la instalación. Nuevos circuitos, balanceo, GFCI y reserva. Traigan la matriz terminada.

**Actividad:** Asignar equipos y repartir el trabajo. Fijar fecha de entrega.

**Errores comunes**

- Pegar valores calculados con calculadora en la hoja: sin fórmula no hay trazabilidad.
- Entregar un cuadro sin la columna de línea.

**Nota para ti:** Tu clave está en el repositorio: clave-mision2-instructor.md. No la proyectes.

---

## Lámina 28 · Lo que nos llevamos  (5 min)

**Objetivo:** Cerrar con las ideas centrales y una pregunta de salida.

**Qué decir**

> Cinco ideas. Una: L1 y L2 dan 240 voltios, y cada una con el neutro da 120. Dos: S igual P dividido FP e I igual S dividido V. Tres: el breaker y el calibre se eligen por corriente, y el breaker no puede ser mayor de lo que el cable aguanta. Cuatro: clasificamos en incumplimiento, mala práctica y eficiencia. Cinco: carga conectada no es lo mismo que carga demandada.

> Última frase: siempre verifiquen con el texto oficial vigente.

> Pregunta de salida, en una hoja pequeña y sin nombre: ¿qué fue lo más sorprendente que encontraron en el tablero?

**Actividad:** Recoger las hojas de salida y leer dos en voz alta.

---

## Pendiente de confirmar en la norma impresa

Tablas que en el texto digital son imágenes y no pude verificar: 220.12, 220.42, 220.55, Cap. 9 Tablas 4 y 5, 250.122, 310.15(B)(16), 110.26(A)(1), colores del RETIE (3.5.a) y símbolos (1.3.4). Las áreas de vivienda (≈110 m²) son una estimación sobre el plano.
