# Clave del instructor · Misión 2 (no va en la presentación)

Caso: **la casa del bulevar**, trazada a partir del plano de 20453 Midway Blvd (Port Charlotte), supuesta en Colombia con servicio 120/240 V. Las cifras salen de las cargas de placa del inventario.

## Datos del caso

| Espacio | Medidas del plano | Medidas en m | Área aprox. |
|---|---|---|---:|
| Sala | 14'2" × 17'2" | 4,32 × 5,23 | 22,6 m² |
| Comedor | 14'2" × 8'2" | 4,32 × 2,49 | 10,7 m² |
| Cocina | 7'4" × 8'8" | 2,24 × 2,64 | 5,9 m² |
| Desayunador | 11'2" × 9'3" | 3,40 × 2,82 | 9,6 m² |
| Lavandería | 17'9" × 5'1" | 5,41 × 1,55 | 8,4 m² |
| Alcoba principal | 12'0" × 17'2" | 3,66 × 5,23 | 19,1 m² |
| Vestier | 5'1" × 7'9" | 1,55 × 2,36 | 3,7 m² |
| Baño principal | 6'7" × 7'9" | 2,01 × 2,36 | 4,7 m² |
| Alcoba 2 | 10'0" × 12'9" | 3,05 × 3,89 | 11,8 m² |
| Baño social | 5'3" × 7'9" | 1,60 × 2,36 | 3,8 m² |
| Garaje | 20'8" × 20'4" | 6,30 × 6,20 | 39,0 m² |
| Terraza (lanai) | 16'1" × 11'11" | 4,90 × 3,63 | 17,8 m² |

- Área para el cálculo (Art. 220.12, sin garaje ni terraza): **≈ 110 m²**. Es una estimación que suma los espacios nombrados más despensa, clóset, depósito y muros. Confírmala con el dato oficial.
- Los aires acondicionados (3 × 1600 W) van en la alcoba principal, la alcoba 2 y la sala-comedor.
- Alumbrado: 15 salidas de 15 W con FP 0,5 (30 VA cada una). Tomas de uso general: 28 a 180 VA.

## Reparto de salidas

| Circuito | Contenido |
|---|---|
| C1 | 9 luces: sala 2, comedor, cocina, desayunador, pasillo, lavandería, garaje, terraza |
| C2 | 6 luces: alcoba principal 2, vestier, baño principal, alcoba 2, baño social |
| C3 | 8 tomas: sala 5, pasillo 1, terraza 2 (GFCI en la terraza) |
| C4 | 8 tomas: alcoba principal 4, vestier 1, alcoba 2 con 3 |
| C5 | 2 tomas de baños con GFCI |
| C6 | Pequeños artefactos 1: 4 tomas (2 de mesón y 2 del desayunador), GFCI en el mesón |
| C7 | Pequeños artefactos 2: 4 tomas (2 de mesón y 2 del comedor), GFCI en el mesón |
| C11 | 2 tomas del garaje con GFCI |

Los receptáculos de cocina, desayunador, comedor y despensa deben ir en los circuitos de pequeños artefactos (210.52(B)); la nevera puede ir en circuito individual.

## Cuadro propuesto (replanteo, 16 circuitos)

| Cto | Descripción | Carga [VA] | I [A] | Breaker | Cond. | PE | Línea |
|---|---|---:|---:|---|---|---|---|
| C1 | Alumbrado social y de servicio | 270 | 2,25 | 1×15 A | 14 AWG | 14 AWG | L1 |
| C2 | Alumbrado privado | 180 | 1,50 | 1×15 A | 14 AWG | 14 AWG | L2 |
| C3 | Tomas sala, pasillo y terraza | 1440 | 12,00 | 1×20 A | 12 AWG | 12 AWG | L2 |
| C4 | Tomas alcobas y vestier | 1440 | 12,00 | 1×20 A | 12 AWG | 12 AWG | L2 |
| C5 | Tomas de baños (GFCI) | 360 | 3,00 | 1×20 A | 12 AWG | 12 AWG | L2 |
| C6 | Pequeños artefactos 1 (GFCI) | 1500 | 12,50 | 1×20 A | 12 AWG | 12 AWG | L1 |
| C7 | Pequeños artefactos 2 (GFCI) | 1500 | 12,50 | 1×20 A | 12 AWG | 12 AWG | L1 |
| C8 | Nevera | 941 | 7,84 | 1×20 A | 12 AWG | 12 AWG | L1 |
| C9 | Microondas | 1263 | 10,53 | 1×20 A | 12 AWG | 12 AWG | L1 |
| C10 | Lavadora-secadora | 1667 | 13,89 | 1×20 A | 12 AWG | 12 AWG | L2 |
| C11 | Garaje (GFCI) | 360 | 3,00 | 1×20 A | 12 AWG | 12 AWG | L2 |
| C12 | Horno de convección | 2000 | 8,33 | 2×20 A | 12 AWG | 12 AWG | L1+L2 |
| C13 | Cooktop de inducción | 7200 | 30,00 | 2×40 A | 8 AWG | 10 AWG | L1+L2 |
| C14 | A/A alcoba principal | 1778 | 7,41 | 2×20 A | 12 AWG | 12 AWG | L1+L2 |
| C15 | A/A alcoba 2 | 1778 | 7,41 | 2×20 A | 12 AWG | 12 AWG | L1+L2 |
| C16 | A/A sala-comedor | 1778 | 7,41 | 2×20 A | 12 AWG | 12 AWG | L1+L2 |

- Carga de diseño: **25 455 VA** (106,1 A a 240 V), con C6 y C7 a 1500 VA (220.52(A)).
- Balanceo: L1 = **12 741 VA**, L2 = **12 714 VA**; desbalance **0,21 %**; corriente de neutro **0,23 A**; I de L1 = 106,2 A, I de L2 = 105,9 A.
- Carga demandada (Art. 220): **20 334 VA = 84,7 A**; acometida y protección general **2×100 A**, conductor 3 AWG Cu (confirma la tabla de ampacidad).
- Tablero: 11 circuitos de 1 polo + 5 de 2 polos = 21 espacios; con 25 % de reserva, **30 espacios**.
- Longitudes sobre el plano (aprox.): cooktop 8 m (ΔV 0,42 %), tomas de alcobas 22 m (ΔV 2,33 %).

## Lo que había (caso de la Misión 1)

Carga conectada **23 895 VA** (99,56 A). Con todo el 120 V en L1: L1 = 16 628 VA, L2 = 7267 VA, desbalance **78,4 %**, neutro **78,0 A**, L1 **138,6 A**.

## Hallazgo → corrección

| # | Hallazgo | Corrección esperada |
|---|---|---|
| 1 | Cooktop con 12 AWG (F7) | Circuito 2×40 A con 8 AWG Cu (30 A × 1,25 = 37,5 A) |
| 2 | Cocina en un breaker de 40 A con 12 AWG y 30,4 A (F4) | Nevera y microondas individuales; 2 circuitos de 20 A para mesón, desayunador y comedor |
| 3 | Mesón sin GFCI | GFCI en las tomas del mesón (210.8(A)) |
| 4 | Baños y garaje sin GFCI y juntos (F3) | Circuito de baños y circuito de garaje, ambos 1×20 A con GFCI |
| 5 | 14 AWG con breaker de 20 A (F1) | Cambiar a 12 AWG, o bajar el breaker a 15 A |
| 6 | Todo el 120 V en L1 | Repartir los circuitos de 1 polo entre L1 y L2 (ver cuadro) |
| 7 | Tierra sin medir | Medir y corregir el sistema de puesta a tierra (referencia 25 Ω en el neutro de acometida, 3.12.3) |
| 8 | Sin directorio ni reserva | Rotular (408.4(A)) y dejar espacios libres |
| 9 | Mezclas y aires compartidos (F1, F2, F9) | Un circuito por aire; separar alumbrado y tomas |

## Marco RETIE para el replanteo (Resolución 40284 de 2026, verificado)

- **Diseño:** una vivienda con **más de 15 kVA** de capacidad instalable requiere **diseño detallado** por ingeniero (Libro 3, art. 3.3.1, literal q). Hasta 15 kVA y 4 cuentas basta un **esquema constructivo** (art. 3.3.2).
- **Certificación plena** (dictamen de inspección y declaración de cumplimiento): viviendas de más de 15 kVA (Libro 4, art. 4.3.2.1, literal c).
- **Remodelación residencial** (art. 4.3.2.2, literal a): certificación plena si la ampliación supera 10 kVA, o si se remodela más del 50 % de los dispositivos o conductores y la parte remodelada supera 10 kVA, o si se agregan equipos especiales.
- **Esquema constructivo** (art. 3.3.2.1): puesta a tierra, medida, tablero, canalizaciones con diámetros, número y calibre de conductores por tramo, aparatos y protecciones, cuadro de convenciones, cuadro de cargas por circuito y espacios de montaje.
- **Diseño detallado** (art. 3.3.1.1): cálculo de cargas con factor de potencia y armónicos, protecciones, puesta a tierra, regulación, canalizaciones, diagramas unifilares y planos.
- **Personas** (art. 3.2.1): ingenieros, tecnólogos en electricidad y técnicos, según el alcance de su matrícula.

Nuestro caso (23 895 VA conectados, 25 455 VA de diseño) supera los 15 kVA: el plano de la Misión 2 hace parte de un **diseño detallado**.

Verifica cada artículo contra tu edición de la NTC 2050 y el texto vigente del RETIE antes de evaluar.
