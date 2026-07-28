import { calc } from "./helpers.mjs";

export const esCalculators = {
  "concrete-slab": calc({
    title: "Calculadora de losa de concreto",
    description:
      "Estime yardas cúbicas de concreto para losas rectangulares, patios, entradas o cimentaciones. Ingrese largo, ancho y espesor con un margen opcional de desperdicio.",
    shortDescription: "Yardas cúbicas de concreto para losas y patios.",
    formula:
      "Volumen = largo × ancho × espesor (convertido a yardas cúbicas). El resultado suma su porcentaje de desperdicio: volumen a pedir = volumen base × (1 + desperdicio% ÷ 100).",
    assumptions: [
      "La losa es un prisma rectangular uniforme, sin escalones ni bordes engrosados.",
      "El espesor es constante en toda el área de vaciado.",
      "El desperdicio predeterminado es 10% para vaciados residenciales típicos.",
      "1 yarda cúbica = 27 pies cúbicos.",
      "No incluye base de grava, varilla ni bomba de concreto.",
    ],
    workedExample: {
      title: "Patio 10 ft × 10 ft, 4 in de espesor",
      body: "Área = 10 × 10 = 100 ft². Espesor 4 in = 0,333 ft. Volumen = 100 × 0,333 = 33,3 ft³ = 1,23 yd³. Con 10% de desperdicio: 1,23 × 1,10 ≈ 1,36 yd³ a pedir.",
    },
    howToMeasure:
      "Mida el largo y ancho más largos del área a vaciar a nivel de terreno. Para el espesor, use la profundidad indicada en planos — patios suelen ser 3,5–4 in y entradas 4–6 in.",
    commonMistakes: [
      "Confundir pulgadas con pies al ingresar el espesor (4 in ≠ 4 ft).",
      "Olvidar el desperdicio por derrame, terreno irregular o cargas parciales.",
      "Usar medidas interiores en lugar de las dimensiones reales del encofrado.",
    ],
    faqs: [
      {
        question: "¿Cuántos sacos de 80 lb equivalen a una yarda cúbica?",
        answer:
          "Aproximadamente 45 sacos de 80 lb por yarda cúbica, pero el concreto premix en camión suele ser más económico para más de 1 yd³.",
      },
      {
        question: "¿Debo agregar extra por un borde engrosado?",
        answer: "Sí. Esta calculadora asume espesor uniforme. Sume un volumen aparte para zapatas o vigas perimetrales.",
      },
      {
        question: "¿Qué porcentaje de desperdicio usar?",
        answer: "10% es habitual en losas. Use 5% en rectángulos simples o 15% en formas irregulares.",
      },
      {
        question: "¿Incluye la base de grava?",
        answer: "No. Use las calculadoras de grava o tierra vegetal para la base por separado.",
      },
    ],
    resultLabels: { volumeYd3: "Concreto a pedir (yd³)" },
    inputLabels: { thickness: "Espesor de la losa" },
    metaTitle: "Calculadora de losa de concreto — Yardas cúbicas | ProjectCalc Hub",
    metaDescription:
      "Calculadora gratuita de losa de concreto. Ingrese largo, ancho y espesor para estimar yardas cúbicas con factor de desperdicio.",
  }),

  "concrete-bags": calc({
    title: "Calculadora de sacos de concreto",
    description:
      "Convierta el volumen de losa, poste o parche al número de sacos premix necesarios. Compatible con sacos de 40, 60 y 80 lb.",
    shortDescription: "Cuántos sacos de concreto premix necesita.",
    formula:
      "Volumen (ft³) = largo × ancho × espesor, o ingrese el volumen directamente. Sacos = redondeo hacia arriba(volumen con desperdicio ÷ rendimiento por saco). Rendimientos típicos: 40 lb ≈ 0,30 ft³, 60 lb ≈ 0,45 ft³, 80 lb ≈ 0,60 ft³.",
    assumptions: [
      "Los rendimientos siguen datos típicos del fabricante para concreto premix.",
      "Los resultados redondean hacia arriba a sacos enteros.",
      "El agua se agrega según instrucciones del fabricante.",
      "No aplica a mezclas a granel sin premix ni diseños especiales.",
      "Se aplica 10% de desperdicio cuando está activado.",
    ],
    workedExample: {
      title: "Agujero de poste 12 in × 12 in × 36 in de profundidad",
      body: "Volumen = 1 ft × 1 ft × 3 ft = 3 ft³. Con 10% = 3,3 ft³. Con sacos de 80 lb (0,60 ft³): 3,3 ÷ 0,60 = 5,5 → 6 sacos.",
    },
    howToMeasure:
      "Para agujeros, mida diámetro o lado cuadrado y profundidad hasta el fondo de la excavación. Para losas, mida el área encofrada y el espesor.",
    commonMistakes: [
      "Confundir el peso del saco con volumen (80 lb es peso, no 80 ft³).",
      "Ignorar desperdicio en varios vaciados pequeños.",
      "Mezclar tamaños de saco en un mismo cálculo.",
    ],
    faqs: [
      {
        question: "¿Sacos de 40 lb o 80 lb?",
        answer: "Los de 80 lb cubren más volumen por saco y suelen costar menos por pie cúbico, pero los de 40 lb son más fáciles de manejar solo.",
      },
      {
        question: "¿Puedo ingresar volumen en yardas cúbicas?",
        answer: "Sí. Cambie la unidad de volumen y la calculadora convierte internamente.",
      },
      {
        question: "¿Cuánta agua por saco?",
        answer: "Siga la etiqueta — típicamente unos 3 qt para 80 lb. Exceso de agua debilita la mezcla.",
      },
      {
        question: "¿Sirve para un sonotube?",
        answer: "Mida diámetro interior y profundidad del tubo. Agujeros cilíndricos pueden ingresarse como volumen directo.",
      },
    ],
    resultLabels: { bagsNeeded: "Sacos premix a comprar" },
    inputLabels: { bagSize: "Peso del saco premix" },
    metaTitle: "Calculadora de sacos de concreto | ProjectCalc Hub",
    metaDescription:
      "Calcule cuántos sacos de 40, 60 u 80 lb necesita para losas, zapatas y postes. Gratis con factor de desperdicio.",
  }),

  paint: calc({
    title: "Calculadora de pintura",
    description:
      "Estime galones de pintura interior o exterior desde dimensiones de habitación o área directa de pared. Descuenta puertas y ventanas y aplica manos y desperdicio.",
    shortDescription: "Galones de pintura para paredes y habitaciones.",
    formula:
      "Área pintable = área de pared − aberturas. Galones = (área pintable × manos ÷ rendimiento) × (1 + desperdicio%). Resultado redondeado al cuarto de galón más cercano.",
    assumptions: [
      "Rendimiento predeterminado: 350 ft² por galón por mano en látex de calidad sobre superficie lisa.",
      "Descuento predeterminado: puerta 21 ft², ventana 15 ft² cada una.",
      "Se asumen dos manos salvo que cambie el valor.",
      "No incluye cielo raso salvo que lo sume al área.",
      "Imprimador se calcula aparte si el rendimiento difiere.",
    ],
    workedExample: {
      title: "Habitación 12 × 10 ft, cielos 8 ft, 2 manos",
      body: "Perímetro = 2×(12+10) = 44 ft. Área pared = 44 × 8 = 352 ft². Menos 1 puerta (21) y 2 ventanas (30) = 301 ft² pintables. Dos manos a 350 ft²/gal: (301×2)÷350 = 1,72 gal → 1,75 gal redondeado, más desperdicio.",
    },
    howToMeasure:
      "Mida largo y ancho en el piso. Mida altura en una esquina. Cuente puertas y ventanas estándar, o ingrese áreas personalizadas para puertas corredizas grandes.",
    commonMistakes: [
      "Usar pies cuadrados de piso en lugar de superficie de pared.",
      "Olvidar la segunda mano en tablaroca nueva o cambios de color fuerte.",
      "Usar el rendimiento ideal del fabricante en paredes texturizadas.",
    ],
    faqs: [
      {
        question: "¿Necesito imprimador?",
        answer: "Tablaroca nueva, manchas o cambios de color oscuro a claro suelen requerir imprimador. Calcúlelo como mano aparte.",
      },
      {
        question: "¿Qué rendimiento usar?",
        answer: "Revise la lata. Paredes lisas: 350–400 ft²/gal; texturizadas: 250–300 ft²/gal.",
      },
      {
        question: "¿Incluyo el cielo raso?",
        answer: "Sume el área del cielo o calcúlelo como rectángulo separado.",
      },
      {
        question: "¿Por qué redondear a cuartos de galón?",
        answer: "La pintura se vende en incrementos de cuarto de galón. Evita quedarse corto a mitad del trabajo.",
      },
    ],
    resultLabels: { gallons: "Galones a comprar" },
    inputLabels: { coverageRate: "Rendimiento por galón" },
    metaTitle: "Calculadora de pintura — Galones necesarios | ProjectCalc Hub",
    metaDescription:
      "Calculadora gratuita de pintura para habitaciones y paredes. Estime galones con descuentos, manos y desperdicio.",
  }),

  flooring: calc({
    title: "Calculadora de pisos",
    description:
      "Calcule pies cuadrados y número de cajas para madera, laminado, vinilo y otros pisos con margen de desperdicio configurable.",
    shortDescription: "Pies cuadrados y cajas de piso necesarias.",
    formula:
      "Área = largo × ancho (o ingrese área directa). Área a pedir = área × (1 + desperdicio%). Cajas = redondeo hacia arriba(área a pedir ÷ cobertura por caja).",
    assumptions: [
      "La habitación es rectangular o el área se ingresa directamente.",
      "Desperdicio predeterminado 10%; use 12–15% en instalación diagonal.",
      "La cobertura por caja viene de la etiqueta del producto.",
      "No incluye underlayment, transiciones ni adhesivo.",
      "Escalones y closets deben sumarse si no están en las medidas.",
    ],
    workedExample: {
      title: "Recámara 12 × 14 ft, 10% desperdicio",
      body: "Área = 168 ft². Con 10% = 184,8 ft². Si cada caja cubre 24 ft²: 184,8 ÷ 24 = 7,7 → 8 cajas.",
    },
    howToMeasure:
      "Mida las paredes más largas a nivel de piso. En habitaciones en L, divida en rectángulos o use el plano.",
    commonMistakes: [
      "Pedir área exacta sin desperdicio — siempre hay recortes.",
      "Usar cobertura de otra referencia o ancho de tabla distinto.",
      "Olvidar closets y nichos del mismo piso.",
    ],
    faqs: [
      {
        question: "¿Cuánto desperdicio en espiga o diagonal?",
        answer: "Planee 12–15% en diagonal y 15–20% en espiga compleja.",
      },
      {
        question: "¿Sirve para azulejo?",
        answer: "Use la calculadora de azulejos para conteo con juntas.",
      },
      {
        question: "¿Compro extra para reparaciones?",
        answer: "Guarde una caja si puede — los lotes de color cambian y los modelos se descontinúan.",
      },
      {
        question: "¿Habitaciones en metros?",
        answer: "Ingrese en metros o centímetros; los resultados muestran ft² y m².",
      },
    ],
    resultLabels: { areaWithWasteFt2: "Piso a pedir (ft²)" },
    metaTitle: "Calculadora de pisos — Pies cuadrados y cajas | ProjectCalc Hub",
    metaDescription:
      "Calcule pies cuadrados, desperdicio y cajas para madera, laminado y vinilo. Calculadora gratuita.",
  }),

  tile: calc({
    title: "Calculadora de azulejos",
    description:
      "Cuente azulejos de cerámica, porcelanato o mosaico para pisos, regaderas y salpicaderos. Considera tamaño, juntas y desperdicio.",
    shortDescription: "Cantidad de azulejos para pisos y muros.",
    formula:
      "Área efectiva por pieza = (largo + junta) × (ancho + junta). Azulejos = redondeo hacia arriba(área con desperdicio ÷ área efectiva).",
    assumptions: [
      "Los azulejos se colocan en plano con juntas uniformes.",
      "Desperdicio predeterminado 10%; 15% en diagonal o diseños complejos.",
      "Las dimensiones son tamaño nominal antes de la junta.",
      "No incluye piezas de remate, bullnose ni perfiles.",
      "Recortes parciales cuentan como piezas enteras al redondear.",
    ],
    workedExample: {
      title: "Piso 10 × 8 ft, azulejos 12 × 12 in",
      body: "Área = 80 ft² = 11.520 in². Cada azulejo 12×12 = 144 in². Base = 80 piezas. Con 10% = 88 azulejos a pedir.",
    },
    howToMeasure:
      "Mida largo y ancho del área a azulejar. En salpicaderos, mida largo de muro y altura hasta gabinetes. Anote el tamaño del empaque.",
    commonMistakes: [
      "Ignorar el ancho de junta en formatos pequeños.",
      "No agregar desperdicio — recortes alrededor de inodoros consumen extra.",
      "Confundir pulgadas y centímetros en etiquetas importadas.",
    ],
    faqs: [
      {
        question: "¿Cuánto extra en diagonal?",
        answer: "Mínimo 15% de desperdicio. Los cortes diagonales consumen más en el perímetro.",
      },
      {
        question: "¿Necesito piezas de remate?",
        answer: "Esto cuenta azulejo de campo. Mida pies lineales de bordes expuestos para bullnose aparte.",
      },
      {
        question: "¿Desperdicio en formato grande?",
        answer: "Menos cortes pero más roturas — 10–12% sigue siendo prudente.",
      },
      {
        question: "¿Puedo incluir junta de lechada?",
        answer: "Sí. Ingrese la junta y la calculadora expande la huella de cada pieza.",
      },
    ],
    resultLabels: { tilesNeeded: "Azulejos de campo a pedir" },
    metaTitle: "Calculadora de azulejos | ProjectCalc Hub",
    metaDescription:
      "Calculadora gratuita de azulejos. Ingrese tamaño de área y pieza para contar con junta y desperdicio.",
  }),

  drywall: calc({
    title: "Calculadora de tablaroca",
    description:
      "Estime placas 4×8 o 4×12 para muros y cielos. Incluye desperdicio por recortes en puertas, ventanas y esquinas.",
    shortDescription: "Cantidad de placas de tablaroca.",
    formula:
      "Placas = redondeo hacia arriba(área con desperdicio ÷ área de placa). Placas estándar: 4×8 = 32 ft², 4×12 = 48 ft².",
    assumptions: [
      "Tablaroca estándar 1/2 in en muros según tamaño seleccionado.",
      "Desperdicio predeterminado 10%; 15% con muchas aberturas.",
      "No incluye placa verde antihumedad salvo pedido aparte.",
      "Muro y cielo se combinan en un área total.",
      "No descuenta áreas con otro acabado salvo que usted lo reste.",
    ],
    workedExample: {
      title: "Cuarto 12 × 10 ft, muros 8 ft, placas 4×8",
      body: "Área muro ≈ 352 ft². Con 10% = 387 ft². 387 ÷ 32 = 12,1 → 13 placas 4×8.",
    },
    howToMeasure:
      "Calcule el área total de superficies a tablarocar. En cuartos, sume muros y cielo. Reste aberturas grandes solo si ocupan de piso a cielo.",
    commonMistakes: [
      "Olvidar el cielo raso al colgar un cuarto completo.",
      "Usar matemática de 4×8 cuando las placas son 4×12.",
      "Pedir de menos en cielos inclinados o abuhardillados.",
    ],
    faqs: [
      {
        question: "¿Placas 4×8 o 4×12?",
        answer: "4×12 reduce juntas en muros largos pero pesa más. 4×8 es estándar para bricolaje.",
      },
      {
        question: "¿Más desperdicio con muchas ventanas?",
        answer: "Suba a 12–15% con muchos recortes y esquinas.",
      },
      {
        question: "¿Incluye compuesto para juntas?",
        answer: "No. Solo conteo de placas. Compuesto y cinta dependen de juntas lineales.",
      },
      {
        question: "¿Placa ignífuga o acústica?",
        answer: "El conteo es igual por área; pida el tipo correcto según código.",
      },
    ],
    resultLabels: { sheetsNeeded: "Placas de tablaroca" },
    inputLabels: { sheetSize: "Tamaño de placa" },
    metaTitle: "Calculadora de tablaroca — Placas necesarias | ProjectCalc Hub",
    metaDescription:
      "Calcule cuántas placas 4×8 o 4×12 necesita. Calculadora gratuita con factor de desperdicio.",
  }),

  "roofing-shingle": calc({
    title: "Calculadora de tejas asfálticas",
    description:
      "Estime cuadrados de techo y paquetes de tejas desde dimensiones de planta e inclinación. Ajusta por pendiente y desperdicio.",
    shortDescription: "Cuadrados y paquetes de tejas para su techo.",
    formula:
      "Área en planta = largo × ancho. Área del techo = planta × factor de inclinación. Cuadrados = área ÷ 100. Paquetes = cuadrados × paquetes por cuadrado (típico 3).",
    assumptions: [
      "Techo a dos aguas o similar aproximado desde planta rectangular × multiplicador.",
      "Un cuadrado de techo = 100 ft² de área inclinada.",
      "Tres paquetes por cuadrado es habitual en tejas arquitectónicas.",
      "Desperdicio predeterminado 10%; 12–15% en techos complejos.",
      "No incluye cumbrera, fieltro ni goterón.",
    ],
    workedExample: {
      title: "Planta 40 × 30 ft, inclinación 4/12",
      body: "Planta = 1.200 ft². Factor 4/12 ≈ 1,054. Área techo ≈ 1.265 ft². Cuadrados = 12,65 → 13 cuadrados. A 3 paquetes/cuadrado ≈ 39 paquetes, más desperdicio.",
    },
    howToMeasure:
      "Mida la planta del edificio en los aleros de borde a borde. Para inclinación, use subida y recorrido (ej. 4 in por cada 12 in = 4/12).",
    commonMistakes: [
      "Usar área en planta sin ajuste por inclinación.",
      "Confundir paquetes con cuadrados (1 cuadrado ≠ 1 paquete).",
      "Olvidar desperdicio en cumbrera, valles y arranque.",
    ],
    faqs: [
      {
        question: "¿Qué es un cuadrado de techo?",
        answer: "Cubre 100 ft² de área inclinada. Las tejas se venden por paquete; típicamente 3 paquetes = 1 cuadrado.",
      },
      {
        question: "¿Cómo obtengo el factor de inclinación?",
        answer: "Ingrese subida y recorrido (ej. 4 y 12) o el factor directo si lo conoce.",
      },
      {
        question: "¿Techo de varias aguas?",
        answer: "Techos complejos necesitan más desperdicio. Use 12–15% y verifique con profesional.",
      },
      {
        question: "¿Paquetes en tejas 3-tab vs arquitectónicas?",
        answer: "Varía por línea de producto — revise el empaque de su teja.",
      },
    ],
    resultLabels: { squares: "Cuadrados de techo", bundles: "Paquetes de tejas" },
    metaTitle: "Calculadora de tejas asfálticas | ProjectCalc Hub",
    metaDescription:
      "Calculadora gratuita de techado. Estime cuadrados y paquetes con inclinación y desperdicio.",
  }),

  mulch: calc({
    title: "Calculadora de mantillo",
    description:
      "Calcule yardas cúbicas de mantillo para camas y árboles. Conteo opcional de sacos si conoce el volumen por saco.",
    shortDescription: "Yardas cúbicas de mantillo para jardín.",
    formula:
      "Volumen = área × profundidad (unidades consistentes). Yardas cúbicas = volumen ÷ 27 (desde ft³). El pedido incluye porcentaje de desperdicio.",
    assumptions: [
      "Mantillo a profundidad uniforme en la cama.",
      "Profundidad decorativa típica 2–4 in; refresco 1–2 in.",
      "Volumen por saco predeterminado 2 ft³ si está activado.",
      "El volumen asentado es menor que el aireado al entregar.",
      "No incluye bordes ni malla antihierbas.",
    ],
    workedExample: {
      title: "Cama 200 ft², profundidad 3 in",
      body: "3 in = 0,25 ft. Volumen = 200 × 0,25 = 50 ft³ = 1,85 yd³. Con 10% ≈ 2,0 yd³.",
    },
    howToMeasure:
      "Delimite la cama y mida largo × ancho, o divida formas irregulares en rectángulos. La profundidad es la capa extendida después de asentar.",
    commonMistakes: [
      "Confundir pulgadas con pies de profundidad.",
      "Subestimar camas curvas — divídalas en secciones.",
      "Pedir por sacos sin verificar ft³ por saco (2 vs 3 ft³).",
    ],
    faqs: [
      {
        question: "¿Qué profundidad de mantillo?",
        answer: "2–3 in para mantenimiento, 3–4 in en camas nuevas. Más de 4 in puede dañar tallos.",
      },
      {
        question: "¿Sacos o entrega a granel?",
        answer: "Granel por yarda cúbica conviene arriba de ~2 yd³. Sacos son prácticos en camas pequeñas.",
      },
      {
        question: "¿El tipo de mantillo cambia el volumen?",
        answer: "El volumen es igual; la densidad varía. Esta calculadora usa volumen, no peso.",
      },
      {
        question: "¿Con qué frecuencia repongo?",
        answer: "La mayoría de camas necesitan 1–2 in anuales al descomponerse.",
      },
    ],
    resultLabels: { volumeYd3: "Mantillo a pedir (yd³)" },
    metaTitle: "Calculadora de mantillo — Yardas cúbicas | ProjectCalc Hub",
    metaDescription:
      "Calcule yardas cúbicas de mantillo para jardín. Gratis con profundidad, área, desperdicio y sacos opcionales.",
  }),

  gravel: calc({
    title: "Calculadora de grava",
    description:
      "Estime yardas cúbicas y toneladas de grava o piedra triturada para entradas, senderos y capas de drenaje. Seleccione densidad o ingrese personalizada.",
    shortDescription: "Volumen y peso de grava para entradas y senderos.",
    formula:
      "Volumen = área × profundidad. Peso = volumen × densidad. Toneladas cortas US = libras ÷ 2.000. El desperdicio aumenta el volumen pedido.",
    assumptions: [
      "Densidad de piedra triturada cerca de 1.600 kg/m³ según tipo.",
      "La compactación reduce volumen — la profundidad es espesor compactado objetivo.",
      "Entradas suelen usar 4–6 in de base; senderos 2–3 in.",
      "Entrega en toneladas o yardas según proveedor.",
      "No incluye geotextil ni bordes.",
    ],
    workedExample: {
      title: "Sendero 100 ft², grava 4 in triturada",
      body: "Volumen = 100 × (4/12) = 33,3 ft³ = 1,23 yd³. A ~100 lb/ft³ ≈ 3.330 lb ≈ 1,67 toneladas antes de desperdicio.",
    },
    howToMeasure:
      "Mida largo y ancho del área pavimentada. La profundidad debe ser la capa compactada indicada — consulte a su proveedor para bases de entrada.",
    commonMistakes: [
      "No considerar compactación (pida ligeramente más).",
      "Mezclar densidad métrica con área US sin conversión.",
      "Confundir toneladas cortas con toneladas métricas.",
    ],
    faqs: [
      {
        question: "¿Grava de río vs triturada?",
        answer: "Triturada compacta mejor en entradas. Grava de río sirve en senderos decorativos.",
      },
      {
        question: "¿Pedir por tonelada o yarda cúbica?",
        answer: "Ambos sirven si conoce la densidad. La calculadora muestra ambos para comparar cotizaciones.",
      },
      {
        question: "¿Qué profundidad para entrada vehicular?",
        answer: "A menudo 4 in de base más capa superficial. Uso pesado puede requerir 6–8 in compactados.",
      },
      {
        question: "¿Densidad personalizada?",
        answer: "Sí, si su proveedor indica kg/m³ o lb/ft³.",
      },
    ],
    resultLabels: { tons: "Peso estimado (toneladas)" },
    inputLabels: { densityKey: "Tipo de piedra" },
    metaTitle: "Calculadora de grava — Yardas y toneladas | ProjectCalc Hub",
    metaDescription:
      "Calculadora gratuita de grava. Estime yardas cúbicas y toneladas con densidad y desperdicio.",
  }),

  topsoil: calc({
    title: "Calculadora de tierra vegetal",
    description:
      "Calcule yardas cúbicas de tierra vegetal o relleno para nivelación de césped, camas elevadas y jardines nuevos.",
    shortDescription: "Volumen de tierra vegetal para jardín y césped.",
    formula: "Volumen = área × profundidad, convertido a yardas cúbicas con margen opcional de desperdicio.",
    assumptions: [
      "Tierra extendida a profundidad uniforme tras nivelación inicial.",
      "4–6 in es común para césped nuevo; camas elevadas pueden requerir 12+ in.",
      "Asentamiento reduce volumen 10–20% tras riego.",
      "No incluye proporciones de compost.",
      "Densidad varía con humedad.",
    ],
    workedExample: {
      title: "Césped 500 ft², tierra 4 in",
      body: "4 in = 0,333 ft. Volumen = 500 × 0,333 = 167 ft³ = 6,2 yd³. Con 10% ≈ 6,8 yd³.",
    },
    howToMeasure:
      "Delimite el área y mida largo × ancho. Para nivelación, estime profundidad promedio entre puntos altos y bajos.",
    commonMistakes: [
      "Pedir tierra de relleno cuando se necesita tierra vegetal para plantar.",
      "Usar solo la profundidad máxima en zonas bajas.",
      "Ignorar que el camión entrega volumen suelto antes de extender.",
    ],
    faqs: [
      {
        question: "¿Tierra vegetal vs relleno?",
        answer: "Vegetal tiene materia orgánica para plantas. Relleno es para nivelación bajo estructuras.",
      },
      {
        question: "¿Cuánto para preparar césped?",
        answer: "A menudo 2–4 in de vegetal mezclado antes de semilla o pasto en rollo.",
      },
      {
        question: "¿Cama elevada?",
        answer: "Trate huella × altura del borde como volumen rectangular.",
      },
      {
        question: "¿Compactará la tierra?",
        answer: "Sí. Pida un poco más o planee capa superior tras asentamiento.",
      },
    ],
    resultLabels: { volumeYd3: "Tierra vegetal a pedir (yd³)" },
    metaTitle: "Calculadora de tierra vegetal | ProjectCalc Hub",
    metaDescription:
      "Calcule yardas cúbicas de tierra vegetal. Calculadora gratuita en unidades US y métricas.",
  }),

  "fence-material": calc({
    title: "Calculadora de materiales de cerca",
    description:
      "Cuente postes, rieles y tablillas para un tramo recto de cerca según longitud, separación de postes y dimensiones de pickets.",
    shortDescription: "Postes, rieles y tablillas para su cerca.",
    formula:
      "Tramos = redondeo hacia arriba(longitud ÷ separación postes). Postes = tramos + 1. Tablillas = redondeo hacia arriba(longitud tramo ÷ (ancho tablilla + hueco)) × tramos. Rieles = tramos × rieles por tramo.",
    assumptions: [
      "Línea de cerca recta en terreno plano.",
      "Poste en cada extremo y cada intervalo de separación.",
      "Tablillas de ancho uniforme con hueco constante.",
      "Postes de esquina, portón o terminales pueden requerir hardware extra.",
      "Separación típica 6–8 ft en cerca de privacidad de madera.",
    ],
    workedExample: {
      title: "Cerca 100 ft, postes cada 8 ft, tablillas 5,5 in",
      body: "Tramos = 100 ÷ 8 = 12,5 → 13. Postes = 14. ~17 tablillas por tramo de 8 ft × 13 ≈ 221 tablillas. Rieles = 13 × 3 = 39.",
    },
    howToMeasure:
      "Mida la línea de cerca sobre el eje de postes de extremo a extremo siguiendo el terreno. Confirme separación según diseño y viento local.",
    commonMistakes: [
      "Olvidar postes de portón y espacio del pestillo.",
      "Usar ancho nominal sin sumar el hueco.",
      "No agregar postes en cambios de nivel o dirección.",
    ],
    faqs: [
      {
        question: "¿Separación entre postes?",
        answer: "6–8 ft es típico en cercas de privacidad. Más cerca aguanta mejor el viento.",
      },
      {
        question: "¿Incluye portón?",
        answer: "No. Planee ancho, postes y herrajes del portón aparte.",
      },
      {
        question: "¿Malla ciclón vs madera?",
        answer: "Esta calculadora es para pickets. Malla ciclón usa rollos y conteo distinto.",
      },
      {
        question: "¿Pendiente?",
        answer: "Cercas escalonadas o inclinadas necesitan postes más largos y rieles distintos.",
      },
    ],
    resultLabels: { posts: "Postes", pickets: "Tablillas", rails: "Rieles" },
    metaTitle: "Calculadora de materiales de cerca | ProjectCalc Hub",
    metaDescription:
      "Calcule postes, rieles y tablillas para un tramo recto. Estimador gratuito para cercas de privacidad.",
  }),

  "deck-board": calc({
    title: "Calculadora de tablas de deck",
    description:
      "Estime tablas necesarias para un deck rectangular, considerando ancho de tabla, separación y desperdicio.",
    shortDescription: "Tablas para un deck rectangular.",
    formula:
      "Filas = redondeo hacia arriba(ancho deck ÷ (ancho tabla + separación)). Tablas por fila = redondeo hacia arriba(largo deck ÷ largo tabla). Total = filas × tablas por fila × (1 + desperdicio%).",
    assumptions: [
      "Superficie rectangular; escaleras y marcos decorativos excluidos.",
      "Tablas paralelas al lado largo salvo que ajuste dimensiones.",
      "Separación típica 1/8 in para drenaje en madera.",
      "Largo útil de tabla suele ser 12 ft o 16 ft.",
      "No incluye viguetas, vigas ni herrajes.",
    ],
    workedExample: {
      title: "Deck 16 × 12 ft, tablas 5,5 in, largo 12 ft",
      body: "Filas = 12 ÷ (5,5/12 + 0,125/12) ≈ 25. Tablas/fila = 16 ÷ 12 → 2. Base = 50 tablas. Con 10% = 55 tablas.",
    },
    howToMeasure:
      "Mida largo y ancho del marco exterior. Use ancho real (5,5 in para 2×6) y separación planificada. Confirme largos disponibles del proveedor.",
    commonMistakes: [
      "Usar 6 in nominal en lugar de 5,5 in real.",
      "Ignorar empalmes cuando el largo de tabla < largo del deck.",
      "Olvidar desperdicio en patrón diagonal.",
    ],
    faqs: [
      {
        question: "¿Separación en compuesto vs madera?",
        answer: "Compuesto suele indicar 3/16 in o fijación oculta — siga al fabricante.",
      },
      {
        question: "¿Tablas paralelas o perpendiculares a la casa?",
        answer: "Ambas funcionan. Paralelas a la fachada suele verse mejor — ajuste qué dimensión es largo vs ancho.",
      },
      {
        question: "¿Incluye fascia?",
        answer: "No. Fascia y contrahuellas de escalera son cálculo lineal aparte.",
      },
      {
        question: "¿Tablas de 16 ft o 12 ft?",
        answer: "Menos juntas con tablas largas, pero verifique transporte y maniobras.",
      },
    ],
    resultLabels: { boardsNeeded: "Tablas de deck" },
    metaTitle: "Calculadora de tablas de deck | ProjectCalc Hub",
    metaDescription:
      "Calcule tablas de deck para superficie rectangular. Estimador gratuito con separación y desperdicio.",
  }),

  stair: calc({
    title: "Calculadora de escaleras",
    description:
      "Calcule número de contrahuellas, huellas y recorrido horizontal desde ascenso total y altura objetivo de contrahuella. Solo geometría básica — verifique código local.",
    shortDescription: "Contrahuellas y huellas para escaleras.",
    formula:
      "Contrahuellas = redondeo(ascenso total ÷ altura objetivo). Contrahuella real = ascenso ÷ contrahuellas. Huellas = contrahuellas − 1. Recorrido = huellas × profundidad de huella.",
    assumptions: [
      "Tramo recto con contrahuellas y huellas uniformes.",
      "Contrahuella objetivo cerca de 7 in es común en vivienda US.",
      "No verifica cumplimiento IRC ni código local.",
      "Plataformas intermedias y altura libre no se calculan.",
      "Ascenso total es distancia vertical piso a piso terminado.",
    ],
    workedExample: {
      title: "Ascenso 9 ft, contrahuella objetivo 7 in",
      body: "Ascenso = 108 in. Contrahuellas = 108 ÷ 7 ≈ 15,4 → 15. Contrahuella real = 108 ÷ 15 = 7,2 in. Huellas = 14. Recorrido = 14 × 10 in = 140 in (11,67 ft).",
    },
    howToMeasure:
      "Mida distancia vertical de piso terminado a piso terminado (o descanso). En decks exteriores, de superficie terminada del deck a nivel del suelo en la base.",
    commonMistakes: [
      "Medir a subpiso en lugar de piso terminado.",
      "Contrahuellas desiguales al ajustar solo el primer peldaño.",
      "Ignorar límites de altura de contrahuella y profundidad de huella en código local.",
    ],
    faqs: [
      {
        question: "¿Altura cómoda de contrahuella?",
        answer: "7–7,75 in es típico en casas US. Escaleras exteriores de deck suelen usar 7–7,25 in.",
      },
      {
        question: "¿Cumple código?",
        answer: "No. Verifique siempre código local para contrahuella, huella, barandal y descansos.",
      },
      {
        question: "¿Y el nariz de huella?",
        answer: "La profundidad aquí es recorrido horizontal. Algunos códigos exigen proyección del nariz.",
      },
      {
        question: "¿Tramos con descanso?",
        answer: "Calcule cada tramo por separado de descanso a piso.",
      },
    ],
    resultLabels: {
      numberOfRisers: "Contrahuellas",
      numberOfTreads: "Huellas",
      totalRunFt: "Recorrido horizontal (ft)",
    },
    metaTitle: "Calculadora de escaleras — Subida y huella | ProjectCalc Hub",
    metaDescription:
      "Calcule contrahuellas, huellas y recorrido desde ascenso piso a piso. Ayuda gratuita de geometría — verifique código aparte.",
  }),

  wallpaper: calc({
    title: "Calculadora de papel tapiz",
    description:
      "Estime rollos según perímetro, altura, aberturas y repetición del diseño. Considera desperdicio y emparejamiento de patrón.",
    shortDescription: "Rollos de papel tapiz para su habitación.",
    formula:
      "Área neta = (perímetro × altura) − aberturas. Rollos = redondeo hacia arriba(área con desperdicio ÷ cobertura por rollo). La repetición del patrón aumenta desperdicio por tira.",
    assumptions: [
      "Paredes verticales con altura uniforme.",
      "Cobertura por rollo desde dimensiones o entrada manual.",
      "Repetición del patrón agrega desperdicio por emparejar cada tira.",
      "Desperdicio predeterminado 10% más ajuste por repetición.",
      "No incluye cenefas o murales vendidos por pieza.",
    ],
    workedExample: {
      title: "Perímetro 48 ft, altura 8 ft, 28 ft² por rollo",
      body: "Área bruta = 384 ft². Menos 40 ft² aberturas = 344 ft² netos. Con 10% = 378 ft². Rollos = 378 ÷ 28 = 13,5 → 14 rollos.",
    },
    howToMeasure:
      "Mida cada pared y sume el perímetro, o ingrese total. Altura de piso a cielo. Reste puertas y ventanas como área total de aberturas.",
    commonMistakes: [
      "Ignorar repetición del patrón (puede sumar 15–25% extra).",
      "Usar cobertura de rollo con ancho distinto (20,5 in vs 27 in).",
      "Olvidar esquinas interiores que consumen ancho parcial del rollo.",
    ],
    faqs: [
      {
        question: "¿Autoadhesivo vs pasta tradicional?",
        answer: "Cobertura similar por área, pero verifique pies cuadrados útiles en la etiqueta.",
      },
      {
        question: "¿Cómo afecta la repetición?",
        answer: "Repeticiones largas desperdician más al alinear cada tira. Ingrese la distancia en pulgadas.",
      },
      {
        question: "¿Compro un rollo extra?",
        answer: "Sí — guarde uno para reparaciones. Los lotes de tinte cambian entre tandas.",
      },
      {
        question: "¿Paredes texturizadas?",
        answer: "Textura fuerte reduce cobertura efectiva. Agregue desperdicio o consulte al fabricante.",
      },
    ],
    resultLabels: { rollsNeeded: "Rollos de papel tapiz" },
    metaTitle: "Calculadora de papel tapiz — Rollos necesarios | ProjectCalc Hub",
    metaDescription:
      "Calcule rollos de papel tapiz por perímetro y altura. Repetición de patrón y desperdicio incluidos.",
  }),

  insulation: calc({
    title: "Calculadora de aislamiento",
    description:
      "Estime paneles de fibra de vidrio para muros, pisos o áticos según área neta y ancho de panel. El valor R es solo informativo.",
    shortDescription: "Paneles de aislamiento para muros y áticos.",
    formula:
      "Cobertura por panel = ancho panel × largo estándar (típico 48 in en muros). Paneles = redondeo hacia arriba(área neta con desperdicio ÷ cobertura por panel).",
    assumptions: [
      "Paneles estándar 15 in o 23 in según separación de montantes.",
      "Largo de panel asumido 48 in salvo producto distinto.",
      "Valor R no cambia cantidad — refleja elección de producto.",
      "Desperdicio predeterminado 10% por recortes.",
      "No incluye cálculos de soplado.",
    ],
    workedExample: {
      title: "500 ft² de muro, paneles 15 in",
      body: "Cada panel cubre 15 in × 48 in = 5 ft². Base = 500 ÷ 5 = 100 paneles. Con 10% = 110 paneles.",
    },
    howToMeasure:
      "Calcule área neta a aislar — muro menos ventanas, o huella de ático. Ancho de panel según montantes (16 in OC → paneles 15 in).",
    commonMistakes: [
      "Comprimir paneles demasiado anchos para el montante (reduce valor R).",
      "Olvidar muros de rodilla y dintel en ático.",
      "Confundir valor R con pies cuadrados necesarios.",
    ],
    faqs: [
      {
        question: "¿Paneles 15 in o 23 in?",
        answer: "15 in para montantes 16 in OC. 23 in para 24 in OC (común en áticos).",
      },
      {
        question: "¿Soplado vs paneles?",
        answer: "Esta calculadora es para paneles. Soplado usa cobertura por saco según profundidad.",
      },
      {
        question: "¿Barrera de vapor?",
        answer: "Depende de zona climática y ensamble — aquí solo cantidad de aislamiento.",
      },
      {
        question: "¿Capas para más valor R?",
        answer: "Solo si el ensamble lo permite — no comprima paneles para que quepan.",
      },
    ],
    resultLabels: { battsNeeded: "Paneles de aislamiento" },
    metaTitle: "Calculadora de aislamiento — Paneles necesarios | ProjectCalc Hub",
    metaDescription:
      "Calcule paneles de aislamiento para muros y áticos. Calculadora gratuita con ancho de panel y desperdicio.",
  }),

  "hvac-btu": calc({
    title: "Calculadora BTU HVAC",
    description:
      "Estime carga térmica aproximada en BTU/h desde dimensiones y factores de ajuste. Punto de partida — no reemplaza Manual J.",
    shortDescription: "Estimación de BTU y toneladas de AC.",
    formula:
      "BTU base = área piso (ft²) × BTU por ft². BTU ajustado = base × factores clima × aislamiento × sol. Toneladas = BTU ÷ 12.000.",
    assumptions: [
      "20 BTU/ft² predeterminado para climas mixtos moderados.",
      "Zona única, altura de cielo cerca de 8 ft.",
      "Factores son multiplicadores elegidos por el usuario.",
      "No reemplaza Manual J de ACCA ni cálculo profesional.",
      "Infiltración, ductos y cargas de equipos no modelados.",
    ],
    workedExample: {
      title: "Cuarto 20 × 15 ft, 20 BTU/ft²",
      body: "Área = 300 ft². Base = 300 × 20 = 6.000 BTU/h. Con factores 1,0 = 6.000 BTU ≈ 0,5 toneladas. Planos abiertos requieren análisis de toda la vivienda.",
    },
    howToMeasure:
      "Mida largo y ancho en el piso. Para un piso completo, sume cuartos o use huella del edificio. Sea honesto con exposición solar y calidad de aislamiento en los factores.",
    commonMistakes: [
      "Dimensionar toda la casa solo por número de recámaras.",
      "Sobredimensionar AC ignorando factor de aislamiento.",
      "Usar este resultado como selección final sin Manual J.",
    ],
    faqs: [
      {
        question: "¿Cuántos BTU por pie cuadrado?",
        answer: "Reglas generales: 15–25 BTU/ft² según clima. Zonas cálidas húmedas tienden más alto.",
      },
      {
        question: "¿Qué es una tonelada de frío?",
        answer: "Una tonelada = 12.000 BTU/h de capacidad de enfriamiento.",
      },
      {
        question: "¿Importa altura de cielo?",
        answer: "Sí para volumen. Esta herramienta usa área de piso con factores — cielos altos pueden necesitar más BTU/ft².",
      },
      {
        question: "¿Dimensionar bomba de calor?",
        answer: "Bombas requieren balance calefacción/refrigeración. Consulte profesional para modo dual.",
      },
    ],
    resultLabels: { estimatedBtu: "Carga estimada (BTU/h)", tonnage: "Toneladas de frío" },
    metaTitle: "Calculadora BTU HVAC — Tamaño de AC | ProjectCalc Hub",
    metaDescription:
      "Estime BTU y toneladas desde tamaño de cuarto y factores climáticos. Herramienta gratuita — no sustituye Manual J.",
  }),

  "moving-truck-size": calc({
    title: "Calculadora de tamaño de camión de mudanza",
    description:
      "Recomiende tamaño de camión o furgoneta según número de habitaciones o pies cúbicos totales del inventario.",
    shortDescription: "Tamaño de camión de mudanza recomendado.",
    formula:
      "Volumen estimado = habitaciones × 400 ft³ (predeterminado) o entrada directa en ft³. El camión es el tamaño estándar más pequeño que cubre la carga.",
    assumptions: [
      "400 ft³ por habitación es promedio aproximado amueblado.",
      "Garaje, patio y sótano no incluidos salvo en ft³ ingresados.",
      "Tamaños siguen flota típica de renta (furgoneta hasta 26 ft).",
      "Empaque profesional reduce huecos; mudanza DIY necesita margen.",
      "Mudanzas largas pueden requerir viajes más pequeños.",
    ],
    workedExample: {
      title: "Casa 3 habitaciones estimada",
      body: "3 × 400 = 1.200 ft³. Camión 20 ft (~1.000 ft³) puede quedar justo — considere 26 ft o segundo viaje si está muy amueblada.",
    },
    howToMeasure:
      "Cuente habitaciones más comedor, oficina y garaje. Para precisión, liste muebles grandes con dimensiones y sume ft³, o use app de inventario.",
    commonMistakes: [
      "Subestimar garaje, muebles de patio y cajas almacenadas.",
      "Elegir el camión más pequeño para ahorrar — segundo viaje cuesta más.",
      "Ignorar límite de peso con artículos densos (libros, herramientas).",
    ],
    faqs: [
      {
        question: "¿Camión para departamento 2 habitaciones?",
        answer: "A menudo 15–20 ft o furgoneta si está poco amueblado; 20 ft si está completo.",
      },
      {
        question: "¿Puedo ingresar ft³ directamente?",
        answer: "Sí. Reemplace la estimación por habitaciones con su total de inventario.",
      },
      {
        question: "¿Remolcar auto detrás?",
        answer: "La capacidad de remolque afecta carga útil — pregunte a la rentadora.",
      },
      {
        question: "¿Mudanzas comerciales?",
        answer: "No. Oficinas y bodegas requieren análisis por pallets y ft³.",
      },
    ],
    resultLabels: { recommendedTruck: "Camión sugerido" },
    metaTitle: "Calculadora de camión de mudanza | ProjectCalc Hub",
    metaDescription:
      "Encuentre el tamaño de camión adecuado por habitaciones o pies cúbicos. Guía gratuita de furgoneta a 26 ft.",
  }),

  "dumpster-size": calc({
    title: "Calculadora de tamaño de contenedor",
    description:
      "Recomiende tamaño de contenedor roll-off en yardas cúbicas para remodelaciones y limpiezas residenciales comunes.",
    shortDescription: "Tamaño de contenedor para su proyecto.",
    formula:
      "Seleccione preset de proyecto o ingrese volumen personalizado en yd³. El contenedor recomendado es el tamaño estándar más pequeño (10, 20, 30 o 40 yd³) que lo contiene.",
    assumptions: [
      "Volúmenes preset son rangos típicos residenciales.",
      "Escombros sueltos, no demolición compactada salvo nota.",
      "Proveedores locales pueden calificar capacidad distinto.",
      "Límites de peso aplican — concreto y tierra llenan por peso antes que volumen.",
      "Separación de reciclaje puede requerir varios contenedores pequeños.",
    ],
    workedExample: {
      title: "Preset remodelación de cocina",
      body: "Preset ≈ 10 yd³. Contenedor recomendado: roll-off 10 yd³. Si gabinetes son pesados o hay yeso, considere 20 yd³ por peso.",
    },
    howToMeasure:
      "Para proyectos personalizados, estime largo × ancho × altura promedio del montón en pies, convierta a yd³ (÷ 27), o pida referencia a su contratista.",
    commonMistakes: [
      "Pedir muy pequeño y pagar segundo retiro.",
      "Llenar con concreto o tierra — límites de peso generan cargos extra rápido.",
      "Bloquear acceso de colocación — confirme espacio en entrada.",
    ],
    faqs: [
      {
        question: "¿Contenedor 10 vs 20 yardas?",
        answer: "10 yd³ para baño pequeño o garaje. 20 yd³ es el más común en remodelación completa.",
      },
      {
        question: "¿Cuánto tiempo puedo tenerlo?",
        answer: "Renta típica 7–10 días — revise términos locales.",
      },
      {
        question: "¿Qué no va al contenedor?",
        answer: "Pintura, químicos, llantas y electrodomésticos suelen requerir disposición especial.",
      },
      {
        question: "¿Retiro de techo?",
        answer: "Use preset de tejas o mida cuadrados de retiro × factor de escombros.",
      },
    ],
    resultLabels: { recommendedDumpster: "Tamaño de contenedor recomendado" },
    inputLabels: { projectType: "Tipo de proyecto" },
    metaTitle: "Calculadora de contenedor — Roll-off | ProjectCalc Hub",
    metaDescription:
      "Elija el tamaño de contenedor roll-off para remodelaciones y limpiezas. Presets y volumen personalizado gratis.",
  }),

  "project-waste-factor": calc({
    title: "Calculadora de factor de desperdicio",
    description:
      "Aplique porcentaje de desperdicio o margen a cualquier cantidad base de material para pedir madera, azulejo, piso u otros insumos.",
    shortDescription: "Agregue porcentaje de desperdicio a materiales.",
    formula:
      "Desperdicio = cantidad base × (desperdicio% ÷ 100). Cantidad ajustada = base + desperdicio.",
    assumptions: [
      "Desperdicio es porcentaje directo sobre cantidad neta.",
      "No compone varias etapas — ingrese un factor combinado.",
      "Desperdicio típico piso/azulejo 10–15%.",
      "Cortes complejos o diagonal requieren porcentajes mayores.",
      "Mínimos de pedido del proveedor no se aplican aquí.",
    ],
    workedExample: {
      title: "100 ft² de piso, 12% desperdicio",
      body: "Desperdicio = 100 × 0,12 = 12 ft². Pedido ajustado = 112 ft².",
    },
    howToMeasure:
      "Parta de cantidad neta de otra calculadora y aplique desperdicio según complejidad del layout y su experiencia.",
    commonMistakes: [
      "Sumar desperdicio dos veces (en área y aquí).",
      "Usar 5% en azulejo diagonal (suele ser poco).",
      "Confundir desperdicio con contingencia de precio.",
    ],
    faqs: [
      {
        question: "¿Desperdicio en madera dura?",
        answer: "10% tendido recto, 12–15% diagonal o tabla ancha.",
      },
      {
        question: "¿Desperdicio en madera de armazón?",
        answer: "5–10% por cortes en muros típicos; más en techos complejos.",
      },
      {
        question: "¿Desperdicio vs contracción?",
        answer: "No. Contracción es curado del concreto o humedad de madera — desperdicio es pérdida por corte.",
      },
      {
        question: "¿Contratistas agregan desperdicio oculto?",
        answer: "Estimaciones transparentes muestran desperdicio explícito para que el cliente entienda el pedido.",
      },
    ],
    resultLabels: { adjustedQuantity: "Cantidad a pedir" },
    metaTitle: "Calculadora de factor de desperdicio | ProjectCalc Hub",
    metaDescription:
      "Aplique porcentaje de desperdicio a cualquier cantidad de material. Calculadora gratuita de margen para piso, azulejo, madera y más.",
  }),

  "board-foot": calc({
    title: "Calculadora de pie tablero",
    description:
      "Calcule pies tablero de madera desde espesor, ancho y largo nominales. Fórmula estándar para madera dura y lumber rough.",
    shortDescription: "Pies tablero para pedido de madera.",
    formula:
      "Pie tablero por pieza = (espesor in × ancho in × largo in) ÷ 144. Total = pie tablero por pieza × cantidad.",
    assumptions: [
      "Espesor y ancho en pulgadas nominales (convención tradicional).",
      "Largo a lo del grano en pulgadas salvo unidad seleccionada.",
      "1 pie tablero = 144 in³ de madera.",
      "No descuenta pérdida por cepillado o defectos.",
      "Madera dura se vende a menudo por pie tablero; dimensional por pieza.",
    ],
    workedExample: {
      title: "1×6 × 8 ft, 10 piezas",
      body: "Espesor 1 in, ancho 6 in, largo 96 in. PT/pieza = (1×6×96)÷144 = 4 PT. Diez piezas = 40 pies tablero.",
    },
    howToMeasure:
      "Use tamaño nominal de la etiqueta (1×6, 2×8, etc.). Mida largo en pies o pulgadas de forma consistente. Cuente piezas de cada tamaño por separado.",
    commonMistakes: [
      "Usar dimensiones reales cepilladas en lugar de nominales para precio por pie tablero.",
      "Olvidar multiplicar por cantidad de piezas iguales.",
      "Confundir pies lineales con pies tablero.",
    ],
    faqs: [
      {
        question: "¿Qué es un pie tablero?",
        answer: "144 pulgadas cúbicas de madera — equivalente a tabla 1×12 de un pie de largo.",
      },
      {
        question: "¿Nominal vs real?",
        answer: "Precio por pie tablero tradicionalmente usa dimensiones nominales antes de cepillar.",
      },
      {
        question: "¿Sirve para triplay?",
        answer: "Triplay se vende por hoja, no pie tablero. Use para madera maciza.",
      },
      {
        question: "¿Madera dura ancho variable?",
        answer: "Mida cada pieza o use ancho promedio del lote.",
      },
    ],
    resultLabels: { boardFeet: "Total pies tablero" },
    metaTitle: "Calculadora de pie tablero — Volumen de madera | ProjectCalc Hub",
    metaDescription:
      "Calcule pies tablero desde dimensiones de madera. Calculadora gratuita para madera dura y lumber.",
  }),

  "square-footage": calc({
    title: "Calculadora de pies cuadrados",
    description:
      "Sume pies cuadrados de múltiples habitaciones o áreas. Desperdicio opcional para pedido de materiales.",
    shortDescription: "Pies cuadrados totales de varias habitaciones.",
    formula:
      "Área habitación = largo × ancho (cada una). Total = suma de habitaciones. Con desperdicio: total × (1 + desperdicio%).",
    assumptions: [
      "Cada habitación es rectangular.",
      "Desperdicio predeterminado 0% salvo pedido de materiales.",
      "Resultados en ft² y m².",
      "Habitaciones irregulares deben dividirse en rectángulos.",
      "Cielo y muros no incluidos salvo que se ingresen como rectángulos.",
    ],
    workedExample: {
      title: "Dos cuartos: 12×10 y 10×10",
      body: "Cuarto 1 = 120 ft². Cuarto 2 = 100 ft². Total = 220 ft². Con 10% = 242 ft².",
    },
    howToMeasure:
      "Mida cada habitación en sus puntos más largos del piso. En planos abiertos, divida en límites lógicos o use dimensiones del plano.",
    commonMistakes: [
      "Contar dos veces áreas superpuestas en planos abiertos.",
      "Medir inconsistentemente de pared a pared incluyendo nichos.",
      "Olvidar closets que recibirán el mismo piso.",
    ],
    faqs: [
      {
        question: "¿Cómo medir habitación en L?",
        answer: "Divida en dos rectángulos, calcule cada uno y sume.",
      },
      {
        question: "¿Convertir a metros cuadrados?",
        answer: "Los resultados incluyen m² automáticamente.",
      },
      {
        question: "¿Desperdicio aquí o en calculadora de piso?",
        answer: "Use desperdicio en un solo lugar para no contar dos veces.",
      },
      {
        question: "¿Área de avalúo vs material?",
        answer: "GLA para avalúos sigue reglas específicas — esta es herramienta general de área.",
      },
    ],
    resultLabels: { totalAreaFt2: "Área combinada (ft²)" },
    inputLabels: { rooms: "Dimensiones de habitaciones" },
    metaTitle: "Calculadora de pies cuadrados — Área múltiple | ProjectCalc Hub",
    metaDescription:
      "Calcule pies cuadrados totales de varias habitaciones. Calculadora gratuita con salida US y métrica.",
  }),

  "room-volume": calc({
    title: "Calculadora de volumen de habitación",
    description:
      "Calcule pies cúbicos y metros cúbicos desde largo, ancho y altura. Útil para HVAC, ventilación y purificadores.",
    shortDescription: "Volumen de habitación en ft³ y m³.",
    formula: "Volumen = largo × ancho × altura (unidades consistentes).",
    assumptions: [
      "Habitación en forma de caja rectangular.",
      "Altura de piso a cielo.",
      "No descuenta volumen de muebles.",
      "Techos inclinados requieren altura promedio o secciones.",
      "Puertas abiertas a otros espacios cambian volumen efectivo para HVAC.",
    ],
    workedExample: {
      title: "Cuarto 12 × 10 × 8 ft",
      body: "Volumen = 12 × 10 × 8 = 960 ft³ ≈ 27,2 m³.",
    },
    howToMeasure:
      "Mida largo y ancho en el piso y altura al centro. En cielos abuhardillados, use altura promedio o divida en secciones.",
    commonMistakes: [
      "Usar altura inconsistente restando zócalos.",
      "Tratar volumen de toda la casa como un cuarto sin zonificación.",
      "Confundir pies cúbicos con pies cuadrados.",
    ],
    faqs: [
      {
        question: "¿Por qué importa el volumen para HVAC?",
        answer: "Los equipos mueven aire por el espacio. El volumen ayuda a estimar cambios de aire por hora.",
      },
      {
        question: "¿Dimensionar purificador CADR?",
        answer: "Fabricantes recomiendan CADR según volumen y ACH objetivo.",
      },
      {
        question: "¿Plano abierto?",
        answer: "Use dimensiones combinadas del espacio conectado o dimensione cada zona.",
      },
      {
        question: "¿Salida métrica?",
        answer: "Metros cúbicos se muestran junto con pies cúbicos.",
      },
    ],
    resultLabels: { volumeFt3: "Volumen de habitación (ft³)" },
    metaTitle: "Calculadora de volumen de habitación | ProjectCalc Hub",
    metaDescription:
      "Calcule volumen en pies cúbicos y metros cúbicos. Herramienta gratuita para HVAC y ventilación.",
  }),

  "labor-markup": calc({
    title: "Calculadora de margen de mano de obra",
    description:
      "Convierta costo de trabajo a precio de venta con markup o margen porcentual. Muestra utilidad y relación markup/margen.",
    shortDescription: "Markup o margen sobre mano de obra.",
    formula:
      "Modo markup: precio = costo × (1 + markup%). Modo margen: precio = costo ÷ (1 − margen%). Utilidad = precio − costo.",
    assumptions: [
      "Costo incluye mano de obra directa y gastos de obra que usted asigne.",
      "Markup y margen no son intercambiables — el modo importa.",
      "No incluye impuesto sobre ventas salvo que lo agregue aparte.",
      "Overhead y utilidad varían por oficio y región.",
      "Resultados son planificación, no asesoría contable.",
    ],
    workedExample: {
      title: "Costo $1.000, markup 25%",
      body: "Precio = $1.000 × 1,25 = $1.250. Utilidad = $250. Margen efectivo = 250 ÷ 1.250 = 20%.",
    },
    howToMeasure:
      "Sume horas × tarifa cargada más costos específicos de la obra (permisos, subcontratos, materiales si los incluye en su modelo).",
    commonMistakes: [
      "Aplicar fórmula de margen a un objetivo de markup (25% markup ≠ 25% margen).",
      "Excluir cargas patronales y seguros del costo.",
      "Precio bajo usando solo salario base sin carga.",
    ],
    faqs: [
      {
        question: "¿Markup o margen?",
        answer: "Markup suma sobre costo; margen es utilidad sobre precio. Elija un método y sea consistente.",
      },
      {
        question: "¿Markup típico de contratista?",
        answer: "Varía — 20–50% sobre mano de obra más markup de materiales es común.",
      },
      {
        question: "¿Incluir overhead?",
        answer: "El costo debe reflejar tarifas cargadas si busca utilidad más allá del salario base.",
      },
      {
        question: "¿Precios escalonados?",
        answer: "Ingrese costo combinado o use partidas separadas en calculadora de materiales.",
      },
    ],
    resultLabels: { sellingPrice: "Precio a cobrar" },
    metaTitle: "Calculadora de margen de mano de obra | ProjectCalc Hub",
    metaDescription:
      "Calcule precio de venta desde costo con markup o margen. Ayuda gratuita de precios para contratistas.",
  }),

  "material-cost": calc({
    title: "Calculadora de costo de materiales",
    description:
      "Sume partidas de materiales con cantidad y costo unitario, con impuesto opcional. Total rápido para cotizaciones y compras.",
    shortDescription: "Costo total de materiales por partidas.",
    formula:
      "Total línea = cantidad × costo unitario. Subtotal = suma de líneas. Total = subtotal × (1 + impuesto%).",
    assumptions: [
      "Costos unitarios sin impuesto salvo que lo itemice aparte.",
      "Cantidades coinciden con unidades del precio (c/u, pie lineal, ft², etc.).",
      "Sin factor de desperdicio automático — agréguelo a cantidades primero.",
      "Fletes no incluidos salvo como partida.",
      "Moneda USD para formato de visualización.",
    ],
    workedExample: {
      title: "20 montantes a $4,50, 5 lb tornillos a $8,99, impuesto 8%",
      body: "Subtotal = (20×4,50) + (5×8,99) = 90 + 44,95 = $134,95. Impuesto = $10,80. Total ≈ $145,75.",
    },
    howToMeasure:
      "Arme la lista desde metrados. Ingrese cada SKU o material con cantidad y precio de cotización o ticket.",
    commonMistakes: [
      "Mezclar precios con y sin impuesto.",
      "Usar precio de caja sin convertir a cantidad por pieza.",
      "Olvidar tornillería y consumibles que suman en obras grandes.",
    ],
    faqs: [
      {
        question: "¿Agrego desperdicio a cantidades primero?",
        answer: "Sí. Use la calculadora de desperdicio y luego ingrese cantidades ajustadas aquí.",
      },
      {
        question: "¿Puedo exportar la lista?",
        answer: "Copie resultados de la página para su hoja de cálculo o plantilla de cotización.",
      },
      {
        question: "¿Descuentos por volumen?",
        answer: "Ingrese el precio unitario que corresponda a la cantidad que comprará.",
      },
      {
        question: "¿Incluir mano de obra?",
        answer: "Esto es solo materiales. Use margen de mano de obra o presupuesto de proyecto para cotización completa.",
      },
    ],
    resultLabels: { total: "Total materiales" },
    inputLabels: { lineItems: "Partidas de materiales" },
    metaTitle: "Calculadora de costo de materiales | ProjectCalc Hub",
    metaDescription:
      "Sume partidas de materiales con impuesto opcional. Calculadora gratuita de lista de insumos.",
  }),

  "project-budget": calc({
    title: "Calculadora de presupuesto de proyecto",
    description:
      "Arme presupuesto completo con partidas de materiales, mano de obra, permisos y porcentaje de contingencia.",
    shortDescription: "Hoja de presupuesto de renovación completa.",
    formula:
      "Subtotal materiales = suma de montos. Subtotal = materiales + mano de obra + permisos. Contingencia = subtotal × contingencia%. Total = subtotal + contingencia.",
    assumptions: [
      "Montos de materiales son totales o sumas precalculadas.",
      "Mano de obra ingresada como total o costo combinado.",
      "Contingencia cubre imprevistos, no desperdicio planificado (agréguelo en cantidades).",
      "Contingencia típica 10–20% en renovaciones.",
      "No incluye financiamiento ni partidas del propietario salvo que las ingrese.",
    ],
    workedExample: {
      title: "Materiales $3.650, mano de obra $4.000, permisos $250, contingencia 10%",
      body: "Subtotal = 3.650 + 4.000 + 250 = $7.900. Contingencia = $790. Total = $8.690.",
    },
    howToMeasure:
      "Reúna cotizaciones de materiales, estimados de mano de obra y permisos. Use otras calculadoras para cantidades y luego ingrese totales aquí.",
    commonMistakes: [
      "Omitir contingencia en casas antiguas con sorpresas ocultas.",
      "Contar impuesto dos veces si las líneas ya lo incluyen.",
      "Separar markup del contratista de forma inconsistente.",
    ],
    faqs: [
      {
        question: "¿Cuánta contingencia reservar?",
        answer: "10% en trabajo cosmético, 15–20% al abrir muros o tocar plomería/eléctrico antiguo.",
      },
      {
        question: "¿Presupuesto dueño vs contratista?",
        answer: "Dueños pueden excluir markup; contratistas deben incluir mano de obra cargada y utilidad.",
      },
      {
        question: "¿Proyectos por fases?",
        answer: "Presupuestos separados por fase o sume fases en una lista de materiales.",
      },
      {
        question: "¿Incluir electrodomésticos?",
        answer: "Agréguelos como partida de materiales si forman parte del alcance.",
      },
    ],
    resultLabels: { grandTotal: "Presupuesto total del proyecto" },
    metaTitle: "Calculadora de presupuesto de proyecto | ProjectCalc Hub",
    metaDescription:
      "Arme presupuesto de renovación con materiales, mano de obra, permisos y contingencia. Hoja gratuita.",
  }),
};
