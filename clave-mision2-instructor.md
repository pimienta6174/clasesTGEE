# Clave del instructor · Misión 2 (no va en la presentación)

Caso didáctico de la Clase 1. Las cifras salen de la carga de placa de los equipos del inventario (120/240 V).

## Cuadro propuesto (replanteo)

| Cto | Descripción | Carga [VA] | I [A] | Breaker | Cond. | Línea |
|---|---|---:|---:|---|---|---|
| C1 | Alumbrado zonas sociales (8 × 30 VA) | 240 | 2,00 | 1×15 A | 14 AWG | L1 |
| C2 | Alumbrado alcobas y baños (7 × 30 VA) | 210 | 1,75 | 1×15 A | 14 AWG | L1 |
| C3 | Tomas sala, comedor y terraza (7 × 180, GFCI en exterior) | 1260 | 10,50 | 1×20 A | 12 AWG | L1 |
| C4 | Tomas alcobas (7 × 180) | 1260 | 10,50 | 1×20 A | 12 AWG | L2 |
| C5 | Tomas de baños (3 × 180, GFCI) | 540 | 4,50 | 1×20 A | 12 AWG | L1 |
| C6 | Pequeños artefactos cocina 1 (mesón, GFCI) | 1500 | 12,50 | 1×20 A | 12 AWG | L2 |
| C7 | Pequeños artefactos cocina 2 (mesón, GFCI) | 1500 | 12,50 | 1×20 A | 12 AWG | L2 |
| C8 | Nevera (circuito individual) | 941 | 7,84 | 1×20 A | 12 AWG | L2 |
| C9 | Microondas | 1263 | 10,53 | 1×20 A | 12 AWG | L1 |
| C10 | Lavadora-secadora | 1667 | 13,89 | 1×20 A | 12 AWG | L1 |
| C11 | Horno de convección | 2000 | 8,33 | 2×20 A | 12 AWG | L1+L2 |
| C12 | Cooktop de inducción | 7200 | 30,00 | 2×40 A | 8 AWG | L1+L2 |
| C13 | A/A alcoba principal | 1778 | 7,41 | 2×20 A | 12 AWG | L1+L2 |
| C14 | A/A alcoba 2 | 1778 | 7,41 | 2×20 A | 12 AWG | L1+L2 |
| C15 | A/A alcoba 3 | 1778 | 7,41 | 2×20 A | 12 AWG | L1+L2 |

- Carga de diseño: 24 915 VA (103,8 A a 240 V), con los 3000 VA mínimos de pequeños artefactos.
- Balanceo: L1 = 12 447 VA, L2 = 12 468 VA, desbalance 0,17 %; corriente de neutro 0,17 A.
- Carga demandada (Art. 220): 20 449 VA = 85,2 A; acometida y protección general de 100 A.
- Tablero de reserva: dejar 20 a 25 % de espacios libres y directorio de circuitos (408.4).

## Hallazgo → corrección

| # | Hallazgo | Corrección esperada |
|---|---|---|
| 1 | Cooktop con 12 AWG | Circuito 2×40 A con 8 AWG Cu (30 A × 1,25 = 37,5 A) |
| 2 | Cocina en un breaker de 30 A | Nevera y microondas individuales; 2 circuitos de 20 A para el mesón |
| 3 | Mesón sin GFCI | GFCI en tomas del mesón (210.8(A)) |
| 4 | Baños sin GFCI | Circuito de baños de 20 A con GFCI |
| 5 | 14 AWG con breaker de 20 A | Cambiar a 12 AWG, o bajar el breaker a 15 A |
| 6 | Todo el 120 V en L1 | Repartir 1 polo entre L1 y L2 (ver cuadro) |
| 7 | Tierra sin medir | Medir y corregir el sistema de puesta a tierra (Art. 250) |
| 8 | Sin directorio ni reserva | Rotular y dejar espacios libres |
| 9 | Mezclas y A/A compartidos | Circuito independiente por A/A; separar alumbrado y tomas |

Verifica cada artículo contra la edición de la NTC 2050 y el texto vigente del RETIE antes de evaluar.
