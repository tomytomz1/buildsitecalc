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
        answer:
          "Sí. Esta calculadora asume espesor uniforme. Sume un volumen aparte para zapatas o vigas perimetrales.",
      },
      {
        question: "¿Qué porcentaje de desperdicio usar?",
        answer:
          "10% es habitual en losas. Use 5% en rectángulos simples o 15% en formas irregulares.",
      },
      {
        question: "¿Incluye la base de grava?",
        answer:
          "No. Use las calculadoras de grava o tierra vegetal para la base por separado.",
      },
    ],
    resultLabels: { volumeYd3: "Concreto a pedir (yd³)" },
    inputLabels: { thickness: "Espesor de la losa" },
    metaTitle: "Calculadora de losa de concreto — Yardas cúbicas | BuildSiteCalc",
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
        answer:
          "Los de 80 lb cubren más volumen por saco y suelen costar menos por pie cúbico, pero los de 40 lb son más fáciles de manejar solo.",
      },
      {
        question: "¿Puedo ingresar volumen en yardas cúbicas?",
        answer:
          "Sí. Cambie la unidad de volumen y la calculadora convierte internamente.",
      },
      {
        question: "¿Cuánta agua por saco?",
        answer:
          "Siga la etiqueta — típicamente unos 3 qt para 80 lb. Exceso de agua debilita la mezcla.",
      },
      {
        question: "¿Sirve para un sonotube?",
        answer:
          "Mida diámetro interior y profundidad del tubo. Agujeros cilíndricos pueden ingresarse como volumen directo.",
      },
    ],
    resultLabels: { bagsNeeded: "Sacos premix a comprar" },
    inputLabels: { bagSize: "Peso del saco premix" },
    metaTitle: "Calculadora de sacos de concreto | BuildSiteCalc",
    metaDescription:
      "Calcule cuántos sacos de 40, 60 u 80 lb necesita para losas, zapatas y postes. Gratis con factor de desperdicio.",
  }),

  paint: calc({
    title: "Calculadora de pintura",
    description:
      "Estime galones de pintura interior o exterior desde dimensiones de habitación o área directa de pared. Descuenta puertas y ventanas y aplica manos y desperdicio.",
    shortDescription: "Galones de pintura para paredes y habitaciones.",
    formula:
      "Área pintable = área de pared − aberturas (todo convertido a m² internamente). Galones = (área pintable × manos ÷ rendimiento) × (1 + desperdicio%). Resultado redondeado al cuarto de galón más cercano. Rendimiento y aberturas usan las unidades de área que seleccione (ft² o m²).",
    assumptions: [
      "Rendimiento predeterminado: 350 ft² por galón por mano (≈32,5 m²/gal) en látex de calidad sobre superficie lisa.",
      "Descuento predeterminado: puerta 21 ft² (≈1,95 m²), ventana 15 ft² (≈1,39 m²) cada una.",
      "Se asumen dos manos salvo que cambie el valor.",
      "No incluye cielo raso salvo que lo sume al área.",
      "Imprimador se calcula aparte si el rendimiento difiere.",
    ],
    workedExample: {
      title: "Habitación 12 × 10 ft, cielos 8 ft, 2 manos",
      body: "Perímetro = 2×(12+10) = 44 ft. Área pared = 44 × 8 = 352 ft². Menos 1 puerta (21) y 2 ventanas (30) = 301 ft² pintables. Dos manos a 350 ft²/gal: (301×2)÷350 = 1,72 gal → 1,75 gal redondeado, más desperdicio. Equivalente métrico: longitudes en m y aberturas/rendimiento en m² dan el mismo resultado físico.",
    },
    howToMeasure:
      "Mida largo y ancho en el piso. Mida altura en una esquina. Cuente puertas y ventanas estándar, o ingrese áreas personalizadas con unidades ft² o m² coherentes para puertas corredizas grandes.",
    commonMistakes: [
      "Usar pies cuadrados de piso en lugar de superficie de pared.",
      "Olvidar la segunda mano en tablaroca nueva o cambios de color fuerte.",
      "Usar el rendimiento ideal del fabricante en paredes texturizadas.",
      "Ingresar áreas métricas de aberturas dejando la unidad en ft² (o al revés).",
    ],
    faqs: [
      {
        question: "¿Necesito imprimador?",
        answer:
          "Tablaroca nueva, manchas o cambios de color oscuro a claro suelen requerir imprimador. Calcúlelo como mano aparte.",
      },
      {
        question: "¿Qué rendimiento usar?",
        answer:
          "Revise la lata. Paredes lisas: 350–400 ft²/gal (≈32–37 m²/gal); texturizadas: 250–300 ft²/gal. Cambie la unidad de rendimiento para coincidir con la etiqueta.",
      },
      {
        question: "¿Incluyo el cielo raso?",
        answer: "Sume el área del cielo o calcúlelo como rectángulo separado.",
      },
      {
        question: "¿Por qué redondear a cuartos de galón?",
        answer:
          "La pintura se vende en incrementos de cuarto de galón. Evita quedarse corto a mitad del trabajo.",
      },
    ],
    resultLabels: { gallons: "Galones a comprar" },
    inputLabels: {
      coverageRate: "Rendimiento por galón",
      coverageRateUnit: "Unidad de rendimiento",
      doorAreaUnit: "Unidad de área de puertas",
      windowAreaUnit: "Unidad de área de ventanas",
    },
    metaTitle: "Calculadora de pintura — Galones necesarios | BuildSiteCalc",
    metaDescription:
      "Calculadora gratuita de pintura para habitaciones y paredes. Estime galones con descuentos, manos y desperdicio. Unidades US y métricas.",
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
        answer:
          "Guarde una caja si puede — los lotes de color cambian y los modelos se descontinúan.",
      },
      {
        question: "¿Habitaciones en metros?",
        answer: "Ingrese en metros o centímetros; los resultados muestran ft² y m².",
      },
    ],
    resultLabels: { areaWithWasteFt2: "Piso a pedir (ft²)" },
    metaTitle: "Calculadora de pisos — Pies cuadrados y cajas | BuildSiteCalc",
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
        answer:
          "Mínimo 15% de desperdicio. Los cortes diagonales consumen más en el perímetro.",
      },
      {
        question: "¿Necesito piezas de remate?",
        answer:
          "Esto cuenta azulejo de campo. Mida pies lineales de bordes expuestos para bullnose aparte.",
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
    metaTitle: "Calculadora de azulejos | BuildSiteCalc",
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
        answer:
          "4×12 reduce juntas en muros largos pero pesa más. 4×8 es estándar para bricolaje.",
      },
      {
        question: "¿Más desperdicio con muchas ventanas?",
        answer: "Suba a 12–15% con muchos recortes y esquinas.",
      },
      {
        question: "¿Incluye compuesto para juntas?",
        answer:
          "No. Solo conteo de placas. Compuesto y cinta dependen de juntas lineales.",
      },
      {
        question: "¿Placa ignífuga o acústica?",
        answer: "El conteo es igual por área; pida el tipo correcto según código.",
      },
    ],
    resultLabels: { sheetsNeeded: "Placas de tablaroca" },
    inputLabels: { sheetSize: "Tamaño de placa" },
    metaTitle: "Calculadora de tablaroca — Placas necesarias | BuildSiteCalc",
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
        answer:
          "Cubre 100 ft² de área inclinada. Las tejas se venden por paquete; típicamente 3 paquetes = 1 cuadrado.",
      },
      {
        question: "¿Cómo obtengo el factor de inclinación?",
        answer:
          "Ingrese subida y recorrido (ej. 4 y 12) o el factor directo si lo conoce.",
      },
      {
        question: "¿Techo de varias aguas?",
        answer:
          "Techos complejos necesitan más desperdicio. Use 12–15% y verifique con profesional.",
      },
      {
        question: "¿Paquetes en tejas 3-tab vs arquitectónicas?",
        answer: "Varía por línea de producto — revise el empaque de su teja.",
      },
    ],
    resultLabels: { squares: "Cuadrados de techo", bundles: "Paquetes de tejas" },
    metaTitle: "Calculadora de tejas asfálticas | BuildSiteCalc",
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
        question: "¿Qué profundidad debe tener el mantillo en jardineras?",
        answer:
          "**De tres a cuatro pulgadas es una profundidad terminada práctica para muchas jardineras nuevas.** EPA WaterSense recomienda 3–4 in para la mayoría de las plantas y advierte que el exceso puede restringir el paso del agua a las raíces. Si queda material sano, mídalo y calcule solo la reposición necesaria.",
      },
      {
        question: "¿Cuántos sacos de mantillo hay en una yarda cúbica?",
        answer:
          "**Catorce sacos estándar de 2 ft³ aportan al menos una yarda cúbica de mantillo.** Una yarda contiene 27 ft³: 27 ÷ 2 = 13,5 sacos, que se redondean a 14. Para sacos de 1,5 ft³ compre 18; para sacos de 3 ft³, compre 9.",
      },
      {
        question: "¿Cuántos pies cuadrados cubre una yarda cúbica de mantillo?",
        answer:
          "**Una yarda cúbica cubre unos 108 ft² a 3 in de profundidad.** La misma yarda cubre 324 ft² a 1 in, 162 ft² a 2 in u 81 ft² a 4 in. Son rendimientos de una capa uniforme antes del margen por curvas, puntos bajos o redondeo del proveedor.",
      },
      {
        question: "¿Cuánto pesa un saco de mantillo?",
        answer:
          "**Un saco de mantillo no tiene un peso estándar único, por lo que debe pedirse según el volumen impreso.** La humedad, especie de madera, tamaño de partícula y producto hacen que sacos iguales en volumen pesen distinto. Use peso para manipulación o carga del vehículo y volumen para calcular cobertura.",
      },
      {
        question: "¿Cuánto mantillo necesito para 100 pies cuadrados?",
        answer:
          "**Necesita unos 0,93 yd³, o 13 sacos de 2 ft³, para cubrir 100 ft² a 3 in antes del margen.** El cálculo es 100 × 0,25 ÷ 27 = 0,926 yd³. Con 10% de margen, planee 1,02 yd³, que se redondea a 14 sacos.",
      },
      {
        question: "¿Es más barato comprar mantillo en sacos o por yarda?",
        answer:
          "**El granel suele ser más barato en proyectos de varias yardas, pero la entrega determina el punto de equilibrio.** Compare el total entregado con el número de sacos enteros por el precio actual. Los sacos pueden convenir en áreas pequeñas, acceso difícil, poco almacenamiento o trabajos repartidos en varios fines de semana.",
      },
      {
        question: "¿Con qué frecuencia se reemplaza o repone el mantillo?",
        answer:
          "**Reponga el mantillo cuando la capa existente se haya descompuesto o asentado por debajo de la profundidad deseada.** Mida varios puntos con una regla y agregue solo lo faltante. Afloje primero material apelmazado, mantenga la capa terminada lejos de troncos y tallos leñosos y retire producto inadecuado cuando el sitio lo requiera.",
      },
    ],
    sections: [
      {
        heading: "¿Cómo se calcula cuánto mantillo se necesita?",
        paragraphs: [
          "Comience con el área neta, convierta la profundidad a pies y multiplique: área × profundidad = pies cúbicos. Divida entre 27 para obtener yardas cúbicas, pues una yarda cúbica contiene 27 ft³. Por ejemplo, 300 ft² a 3 in son 300 × 0,25 = 75 ft³, o 2,78 yd³ antes del margen. El método sirve para corteza, astillas de arborista, madera triturada y otras coberturas sueltas. El peso no entra en la fórmula porque la humedad, el tamaño de partícula y la especie cambian la densidad.",
          "Mida solo el suelo que recibirá material. Reste patios, adoquines, estanques y zonas grandes sin cobertura. Agregue el margen después de hallar el área neta: 5% puede cubrir un rectángulo bien medido; 10–15% resulta más práctico para curvas, desniveles, distribución manual o profundidad incierta. El margen cubre incertidumbre de estimación; no permite acumular material a una profundidad dañina.",
        ],
      },
      {
        heading: "¿Cuántos sacos de mantillo hay en una yarda?",
        paragraphs: [
          "Una yarda cúbica equivale a 27 ft³: contiene 27 sacos de 1 ft³, 18 de 1,5 ft³, 14 de 2 ft³ al redondear hacia arriba o 9 de 3 ft³. Use el volumen impreso. Un saco de 2 ft³ cubre 24 ft² a 1 in, 12 ft² a 2 in, 8 ft² a 3 in o 6 ft² a 4 in. Catorce sacos aportan 28 ft³, uno más que una yarda.",
          "Los sacos se trasladan fácilmente a áreas pequeñas o inaccesibles; el granel evita abrir decenas. Compare total entregado, pedido mínimo y sobrante útil. Con un ejemplo hipotético de $2–$7 por saco de 2 ft³, 14 sacos cuestan unos $28–$98 antes de impuestos. Es aritmética ilustrativa, no precio actual: use cotizaciones locales para comprar.",
        ],
      },
      {
        heading:
          "¿Qué profundidad debe tener el mantillo alrededor de árboles y plantas?",
        paragraphs: [
          "EPA WaterSense indica que 3–4 in dan cobertura adecuada para la mayoría de las plantas y advierte que el exceso puede restringir el paso del agua a las raíces [1]. La guía USDA NRCS establece 2 in como mínimo para madera en aplicaciones de conservación expuestas a lluvia o viento [2]. Son fines distintos; también importan la planta, la capa existente, el drenaje, el clima y la textura.",
          "Deje un espacio libre alrededor de troncos y tallos, mantenga visible el ensanchamiento de la raíz y distribuya una capa uniforme en vez de formar un volcán. Si quedan 2 in y la meta es 3 in, calcule solo 1 in de reposición. Afloje la superficie apelmazada para que el agua llegue al suelo. La EPA también aconseja separar la cobertura orgánica de plantas leñosas para prevenir pudrición [1].",
        ],
      },
      {
        heading: "¿Es más barato el mantillo a granel que en sacos?",
        paragraphs: [
          "El granel suele resultar atractivo al llegar a varias yardas, pero no existe un punto de equilibrio universal. Compare cotización a granel + entrega + impuestos contra número redondeado de sacos × precio actual. Pregunte si venden medias yardas, si el volumen es una medición suelta al cargar y dónde puede descargar el camión con seguridad.",
          "Los sacos pueden convenir cuando el camión no llega, falta almacenamiento, importa igualar el color o el trabajo abarca varios fines de semana. Las astillas sueltas necesitan un lugar limpio de descarga y quizá protección climática. La calculadora estima volumen; no selecciona un producto hortícola, predice descomposición ni garantiza coincidencia entre lotes.",
        ],
      },
      {
        heading: "¿Cuánto mantillo necesita un jardín irregular de 420 pies cuadrados?",
        paragraphs: [
          "Divida el área en rectángulos de 24 ft × 12 ft y 12 ft × 11 ft: 288 + 132 = 420 ft². Reste un descanso de piedra de 6 ft × 3 ft: 420 − 18 = 402 ft². Para 3 in, la profundidad es 0,25 ft: 402 × 0,25 = 100,5 ft³. Divida entre 27 para obtener 3,72 yd³. Con 12% por curvas y puntos bajos: 3,72 × 1,12 = 4,17 yd³. Pida unos 4,25–4,5 yd³ según los incrementos del proveedor, o 57 sacos enteros de 2 ft³. El resultado mantiene el margen separado y redondea una sola vez.",
          "Para un alcorque circular, use la misma secuencia con el área del círculo. Un anillo con radio exterior de 6 ft y radio interior sin cobertura de 1 ft tiene π × (6² − 1²) = unos 110 ft². A 3 in son 27,5 ft³, o 1,02 yd³ antes del margen. Mida el radio desde el centro, no el diámetro de borde a borde, y nunca cuente como cubierta la abertura protegida junto al tronco.",
          "Antes de comprar, recorra el área con el croquis y confirme que cada sección aparece una sola vez. Marque dónde el borde real se aparta de la línea medida, revise puntos altos y bajos y anote la capa existente. Compare la cantidad con el tamaño de saco o incremento de carga disponible. Ese control evita que un error de unidades o un área duplicada se convierta en decenas de sacos sobrantes.",
        ],
      },
    ],
    dataTables: [
      {
        title: "¿Cuántos sacos de mantillo equivalen a una yarda cúbica?",
        columns: [
          "Volumen del saco",
          "Sacos exactos por yd³",
          "Sacos enteros para 1 yd³",
          "Volumen comprado",
        ],
        rows: [
          ["1 ft³", "27", "27", "27 ft³"],
          ["1,5 ft³", "18", "18", "27 ft³"],
          ["2 ft³", "13,5", "14", "28 ft³"],
          ["2,5 ft³", "10,8", "11", "27,5 ft³"],
          ["3 ft³", "9", "9", "27 ft³"],
        ],
        note: "Una yarda cúbica equivale exactamente a 27 pies cúbicos. Redondee solo al comprar sacos individuales.",
      },
      {
        title: "¿Cuánta área cubre el mantillo a cada profundidad?",
        columns: [
          "Profundidad instalada",
          "Cobertura de 1 yd³",
          "Cobertura de saco de 2 ft³",
          "Mantillo para 100 ft²",
        ],
        rows: [
          ["1 in", "324 ft²", "24 ft²", "0,31 yd³"],
          ["2 in", "162 ft²", "12 ft²", "0,62 yd³"],
          ["3 in", "108 ft²", "8 ft²", "0,93 yd³"],
          ["4 in", "81 ft²", "6 ft²", "1,23 yd³"],
        ],
        note: "La cobertura supone una capa uniforme antes del margen o redondeo del proveedor.",
      },
      {
        title: "¿Cuánto podría costar una yarda de mantillo ensacado?",
        columns: [
          "Precio por saco de 2 ft³",
          "Equivalente de 14 sacos",
          "Costo por ft³",
          "Escenario",
        ],
        rows: [
          ["$2", "$28", "$1,00", "Oferta económica"],
          ["$4", "$56", "$2,00", "Ejemplo intermedio"],
          ["$7", "$98", "$3,50", "Ejemplo prémium"],
        ],
        note: "Aritmética ilustrativa, no cotización. Compare precios locales actuales en sacos y a granel entregado.",
      },
    ],
    references: [
      {
        label: "Consejos de jardinería: profundidad y protección con mantillo",
        publisher: "U.S. Environmental Protection Agency WaterSense",
        year: "2026",
        url: "https://www.epa.gov/watersense/landscaping-tips",
      },
      {
        label: "Norma de práctica de conservación: Mulching (Código 484)",
        publisher: "USDA Natural Resources Conservation Service",
        year: "2017",
        url: "https://www.nrcs.usda.gov/sites/default/files/2022-09/Mulching_CPS_484_Oct_2017.pdf",
      },
    ],
    lastUpdated: "2026-07-29",
    resultLabels: { volumeYd3: "Mantillo a pedir (yd³)" },
    metaTitle: "Calculadora de mantillo — Yardas cúbicas | BuildSiteCalc",
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
        question: "¿Cuál es la diferencia entre grava de río y piedra triturada?",
        answer:
          "**La grava de río es redondeada y móvil, mientras la piedra triturada es angular y se traba mejor.** La grava redonda suele servir en senderos decorativos contenidos; piedra triturada o base graduada resulta más apropiada cuando importan compactación y reparto de carga. Confirme la granulometría y uso con el proveedor local.",
      },
      {
        question: "¿Debo pedir grava por tonelada o por yarda cúbica?",
        answer:
          "**Pida en la unidad que usa el proveedor y compare toneladas con yardas mediante la densidad de ese producto.** Las yardas cúbicas miden volumen; las toneladas cortas miden 2.000 lb de masa. La calculadora muestra ambas, pero el boleto de báscula y la conversión de la cantera son más precisos.",
      },
      {
        question: "¿Qué profundidad debe tener la grava de una entrada vehicular?",
        answer:
          "**Una entrada suele usar varias capas compactadas, no una profundidad universal de grava.** Capacidad del suelo, drenaje, heladas, vehículos y especificación local determinan la sección. Calcule base y acabado por separado y siga el diseño o recomendación local en vez de tomar una profundidad general como aprobación estructural.",
      },
      {
        question: "¿Cuánto pesa una yarda cúbica de grava?",
        answer:
          "**Una yarda cúbica de piedra triturada pesa cerca de 1,35 toneladas cortas con la densidad de planificación de 1.600 kg/m³.** La calculadora estima grava suelta en 1,28 ton/yd³ y compactada en 1,48. Humedad, origen y granulometría cambian el peso; use datos del proveedor cuando existan.",
      },
      {
        question: "¿Cuánta grava necesito para 100 pies cuadrados?",
        answer:
          "**A 4 in de profundidad, 100 ft² necesitan unos 1,23 yd³ o 1,67 toneladas de piedra triturada antes del margen.** A 2 in son unos 0,62 yd³; a 6 in, unos 1,85 yd³. Agregue margen después de confirmar profundidad compactada y conversión del proveedor.",
      },
      {
        question: "¿Cuántas toneladas necesito para una entrada de 12 por 50 pies?",
        answer:
          "**Una entrada de 12 por 50 ft a 4 in necesita unas 10 toneladas con la densidad de piedra triturada de la calculadora.** El área es 600 ft², el volumen unos 200 ft³ o 7,41 yd³ y el peso aproximadamente 20.000 lb antes del margen. Verifique densidad y diseño de capas.",
      },
      {
        question: "¿Cuánta grava adicional debo pedir por compactación y desperdicio?",
        answer:
          "**De cinco a quince por ciento es un rango práctico cuando medidas, subrasante y rendimiento no son exactos.** Use menos en una excavación contenida y verificada y más con bordes irregulares o puntos bajos. No agregue un porcentaje genérico si la cantera ya convirtió la meta compactada a cantidad suelta entregada.",
      },
    ],
    sections: [
      {
        heading: "¿Cómo se calculan yardas cúbicas y toneladas de grava?",
        paragraphs: [
          "Multiplique el área neta por la profundidad compactada, con unidades consistentes. Una entrada de 600 ft² a 4 in da 600 × 0,333 = unos 200 ft³; entre 27 son 7,41 yd³. El peso es volumen × densidad. Con la densidad de planificación para piedra triturada de 1.600 kg/m³ (unos 100 lb/ft³), pesa cerca de 20.000 lb o 10 toneladas cortas antes del margen. El boleto de báscula es más preciso porque cantera, granulometría, humedad y compactación cambian la densidad.",
          "Volumen y peso responden preguntas distintas. Las yardas describen espacio; las toneladas, masa. Un vivero puede cotizar grava de río por yarda y una cantera vender piedra #57 o base por tonelada. Distinga la tonelada corta de 2.000 lb de la tonelada métrica de 1.000 kg, unos 2.205 lb, y no convierta yardas a toneladas sin declarar densidad.",
        ],
      },
      {
        heading: "¿Qué profundidad de grava necesita una entrada o sendero?",
        paragraphs: [
          "Un sendero decorativo puede llevar 2–3 in de capa superficial; una entrada residencial suele comenzar con una base compactada más profunda y otra capa de acabado. La sección correcta depende del suelo, drenaje, heladas, vehículos, granulometría y práctica local. FHWA describe la base granular como capa portante y señala que en pavimentos mayores se extiende normalmente en capas de 6–8 in antes de compactar [3]. No es una receta universal para entradas.",
          "Calcule cada capa por separado si usa materiales distintos. Cuatro pulgadas de base compactable más 2 in de grava decorativa no son una sola capa de 6 in con una densidad. ASTM D2940 cubre agregado graduado controlado para bases de carreteras y aeropuertos y enfatiza extensión y compactación sobre una rasante preparada [1]; el proveedor o diseñador local debe especificar el producto residencial.",
        ],
      },
      {
        heading: "¿Cuál es la diferencia entre grava, piedra triturada y base de camino?",
        paragraphs: [
          "La grava natural suele ser redondeada; la piedra triturada tiene caras angulares; la base o crusher run mezcla partículas gruesas y finos para trabarse al compactar. La grava de río drena y resulta cómoda en senderos, pero se desplaza bajo neumáticos. Piedra #57 suele indicar producto limpio, aunque la granulometría cambia por región. Pida la especificación del proveedor y uso previsto, no solo el apodo.",
          "USGS informa que Estados Unidos produjo 1.500 millones de toneladas métricas de piedra triturada en 2024 y cerca de 72% se usó como agregado de construcción, principalmente en caminos [2]. Esa escala explica los nombres locales. El material cambia densidad y desempeño, no el volumen geométrico para llenar el espacio medido.",
        ],
      },
      {
        heading: "¿Cuánta grava adicional se pide por compactación?",
        paragraphs: [
          "Ingrese la profundidad compactada final y use un margen acorde con la cotización de material suelto. Cinco por ciento puede cubrir un área contenida y bien medida; 10–15% puede servir para excavación irregular, puntos bajos, pérdidas laterales y subrasante incierta. No agregue automáticamente otro porcentaje si el proveedor ya convirtió su meta compactada a toneladas sueltas.",
          "Prepare y revise la subrasante antes de la entrega. Zonas blandas y roderas consumen mucho más agregado que un margen normal. Geotextil, drenaje, bordes, excavación y reemplazo de suelo son decisiones aparte. En obra portante siga la especificación y compacte en capas adecuadas, no toda la profundidad a la vez.",
        ],
      },
      {
        heading: "¿Cuánta grava necesita una entrada irregular de 750 pies cuadrados?",
        paragraphs: [
          "Tome una entrada de 60 ft × 12 ft: 720 ft², y agregue un ensanche triangular de 10 ft por 6 ft: 10 × 6 ÷ 2 = 30 ft²; total 750 ft². A 4 in compactados: 750 × 0,333 = 250 ft³ = 9,26 yd³. A 100 lb/ft³ son 25.000 lb = 12,5 toneladas cortas. Con 10%: 10,19 yd³ o 13,75 toneladas. Pregunte si la cantera redondea a 14 toneladas y si su densidad cambia la conversión.",
          "Si la cantera cotiza 1,45 toneladas por yarda en lugar de unas 1,35, entonces 10,19 yd³ son 14,78 toneladas. No cambió la geometría; mejoró la densidad. Confirme carga del camión, cargos por viajes parciales, mínimos, ancho de acceso, cables aéreos y descarga estable. Una cantidad grande puede requerir varios camiones.",
          "Para dos capas, repita el cálculo por profundidad. Una base de 6 in sobre 750 ft² equivale a 13,89 yd³ antes del margen; una superficie de 2 in, a 4,63 yd³. No promedie densidades de productos separados. Anote material, profundidad compactada, margen, densidad y pedido redondeado por entrega.",
          "Revise el área después de excavar y antes de pedir. Si el ancho crece de 12 a 12,5 ft a lo largo de 60 ft, aparecen 30 ft² adicionales; a 4 in son 10 ft³ o 0,37 yd³ antes del margen. Medir la rasante terminada reduce el riesgo de quedar corto.",
        ],
      },
    ],
    dataTables: [
      {
        title: "¿Cuántas yardas de grava cubren 100 pies cuadrados?",
        columns: [
          "Profundidad compactada",
          "Volumen",
          "A 100 lb/ft³",
          "Con margen de 10%",
        ],
        rows: [
          ["2 in", "0,62 yd³", "0,83 ton", "0,68 yd³"],
          ["3 in", "0,93 yd³", "1,25 ton", "1,02 yd³"],
          ["4 in", "1,23 yd³", "1,67 ton", "1,36 yd³"],
          ["6 in", "1,85 yd³", "2,50 ton", "2,04 yd³"],
          ["8 in", "2,47 yd³", "3,33 ton", "2,72 yd³"],
        ],
        note: "El peso usa la densidad de planificación de la calculadora; confirme toneladas por yarda con el proveedor.",
      },
      {
        title: "¿Cuánto pesa una yarda cúbica de grava?",
        columns: ["Opción de densidad", "kg/m³", "lb/ft³ aprox.", "ton/yd³ aprox."],
        rows: [
          ["Grava suelta", "1.520", "94,9", "1,28"],
          ["Piedra triturada", "1.600", "99,9", "1,35"],
          ["Grava compactada", "1.760", "109,9", "1,48"],
        ],
        note: "Valores de planificación, no certificaciones de cantera. Humedad y granulometría cambian la densidad.",
      },
      {
        title: "¿Qué grava se usa para cada proyecto?",
        columns: ["Término", "Comportamiento", "Uso habitual", "Qué confirmar"],
        rows: [
          [
            "Grava de río",
            "Redonda; se mueve",
            "Sendero decorativo",
            "Contención lateral",
          ],
          ["Piedra #57", "Limpia y angular", "Drenaje o acabado", "Granulometría local"],
          [
            "Crusher run / base",
            "Angular con finos",
            "Base compactable",
            "Rendimiento compactado",
          ],
          ["Escollera", "Roca angular grande", "Control de erosión", "Tamaño diseñado"],
        ],
      },
    ],
    references: [
      {
        label: "ASTM D2940/D2940M-20: agregado graduado para bases o subbases",
        publisher: "ASTM International",
        year: "2020",
        url: "https://store.astm.org/d2940_d2940m-20.html",
      },
      {
        label: "Mineral Commodity Summaries 2025: Stone (Crushed)",
        publisher: "U.S. Geological Survey",
        year: "2025",
        url: "https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-stone-crushed.pdf",
      },
      {
        label: "Descripción de aplicación de base granular",
        publisher: "Federal Highway Administration",
        year: "2016",
        url: "https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/97148/073.cfm",
      },
    ],
    lastUpdated: "2026-07-29",
    resultLabels: { tons: "Peso estimado (toneladas)" },
    inputLabels: { densityKey: "Tipo de piedra" },
    metaTitle: "Calculadora de grava — Yardas y toneladas | BuildSiteCalc",
    metaDescription:
      "Calculadora gratuita de grava. Estime yardas cúbicas y toneladas con densidad y desperdicio.",
  }),

  topsoil: calc({
    title: "Calculadora de tierra vegetal",
    description:
      "Calcule yardas cúbicas de tierra vegetal o relleno para nivelación de césped, camas elevadas y jardines nuevos.",
    shortDescription: "Volumen de tierra vegetal para jardín y césped.",
    formula:
      "Volumen = área × profundidad, convertido a yardas cúbicas con margen opcional de desperdicio.",
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
        answer:
          "Vegetal tiene materia orgánica para plantas. Relleno es para nivelación bajo estructuras.",
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
    metaTitle: "Calculadora de tierra vegetal | BuildSiteCalc",
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
        question: "¿A qué distancia se colocan los postes de una cerca de madera?",
        answer:
          "**De seis a ocho pies entre ejes es un rango habitual para cercas residenciales de madera armadas en sitio.** Instrucciones del producto, ancho de panel, largo de riel, altura, suelo, heladas, viento y normas locales pueden exigir menos separación. Mida horizontalmente de centro a centro salvo otra indicación.",
      },
      {
        question: "¿Cuántos postes necesito para 100 pies de cerca?",
        answer:
          "**Un tramo recto de 100 ft necesita 14 postes con separación máxima de 8 ft.** Divida 100 ÷ 8, redondee 12,5 a 13 secciones y agregue un poste final. Con máximo de 6 ft necesita 17 secciones y 18 postes. Concilie esquinas y portones con el trazado real.",
      },
      {
        question: "¿Cuántas tablillas caben en una sección de cerca de 8 pies?",
        answer:
          "**Unas 18 tablillas reales de 5,5 in caben en 96 in con hueco de 1/8 in.** Cada módulo mide 5,625 in y 96 ÷ 5,625 = 17,07, que se redondea. Como los postes ocupan parte de una bahía de 8 ft entre ejes, mida el ancho libre antes de comprar.",
      },
      {
        question: "¿Cuántos rieles necesito para una cerca de privacidad?",
        answer:
          "**Multiplique el número de secciones por los rieles especificados para cada sección.** Un tramo de 100 ft dividido en 13 secciones necesita 39 rieles cuando cada sección usa tres. Convierta el conteo a largos comerciales después de confirmar dónde caen las juntas y si rieles largos pueden abarcar varios postes.",
      },
      {
        question: "¿La calculadora de cerca incluye un portón?",
        answer:
          "**No: los totales ordinarios no incluyen un conjunto completo de portón.** Reste la abertura del tramo normal y agregue poste de bisagra, poste de cierre, marco, bisagras, pestillo, tope, holgura y refuerzo especificados. Portones anchos o dobles pueden necesitar un diseño distinto de los postes de línea.",
      },
      {
        question: "¿Cómo calculo materiales para una cerca con esquina?",
        answer:
          "**Calcule cada pata recta por separado y cuente el poste compartido de esquina una sola vez.** Patas de 96 ft y 68 ft a 8 ft máximos producen 12 y 9 secciones. Sus totales separados son 13 y 10 postes, pero la esquina compartida deja 22 posiciones antes de ajustar portones.",
      },
      {
        question: "¿Cómo calculo materiales de cerca en una pendiente?",
        answer:
          "**Divida la pendiente en tramos medidos y elija un trazado escalonado o inclinado antes de contar.** Los paneles escalonados se miden horizontalmente y dejan huecos variables; una cerca armada siguiendo el terreno cambia cortes de rieles y tablillas. El resultado plano es una base de planificación, no un diseño de pendiente.",
      },
    ],
    sections: [
      {
        heading: "¿Cómo se calculan postes, rieles y tablillas de una cerca?",
        paragraphs: [
          "Divida cada tramo recto entre la separación máxima y redondee hacia arriba para obtener secciones; agregue un poste final. Cuente cada dirección por separado porque una esquina puede servir dos tramos. Los rieles son secciones × rieles por sección. Las tablillas dependen del ancho libre dividido entre ancho real más hueco, redondeado hacia arriba. Las secciones finales pueden ser más cortas que la separación máxima elegida.",
          "Prepare un cómputo por tramos, no todo el perímetro como una recta. Marque postes de extremo, esquina, portón y cambio de pendiente. Cuente una vez los postes compartidos y asegure ambos lados del portón. Los paneles prefabricados usan una distancia entre ejes especificada que puede diferir del ancho nominal por soportes y postes.",
        ],
      },
      {
        heading: "¿A qué distancia se colocan los postes de cerca?",
        paragraphs: [
          "De seis a ocho pies entre ejes es habitual en cercas residenciales de madera, y la guía actual de Lowe's indica ese rango típico [1]. Instrucciones del producto, panel, riel, altura, suelo, viento, heladas y normas locales pueden exigir otra medida. Menor separación reduce la luz del riel, pero no prueba por sí sola resistencia al viento.",
          "Mida horizontalmente y de centro a centro salvo otra indicación. No marque todos los hoyos sin comprobar portón y panel reales. En pendiente, un panel escalonado se mide horizontalmente; una cerca armada en sitio puede seguir el terreno. La calculadora supone una separación y tramo recto y nivelado; calcule segmentos inclinados por separado.",
        ],
      },
      {
        heading: "¿Cuántas tablillas se necesitan para una cerca de privacidad?",
        paragraphs: [
          "En 96 in con tablillas reales de 5,5 in y hueco de 1/8 in, cada módulo mide 5,625 in: 96 ÷ 5,625 = 17,07; redondee a 18 si el ancho libre es realmente 96 in. En una bahía de 8 ft entre ejes, los postes ocupan parte del espacio. Una cerca solapada necesita otro trazado y más tablas que una fila sencilla.",
          "Use el ancho real medido, no el nominal. En cerca decorativa, el hueco elegido cambia privacidad y conteo. En privacidad sólida, respete el movimiento recomendado para madera o compuesto en vez de apretar tablas húmedas. Cuente tapas, molduras, zócalos, celosía y fijaciones aparte.",
        ],
      },
      {
        heading: "¿Cómo cambian los portones y esquinas el cálculo de la cerca?",
        paragraphs: [
          "Un portón reemplaza parte del tramo ordinario y suele necesitar postes de bisagra y pestillo, marco, bisagras, cierre, tope y holgura. Reste la abertura antes de calcular secciones normales y agregue el conjunto según fabricante. Portones anchos o dobles pueden exigir postes o herrajes diseñados.",
          "Cada cambio de dirección crea una condición de esquina o terminal. Postes de extremo, esquina y portón pueden ser mayores o reforzarse distinto. Antes de excavar, confirme linderos, servidumbres, permisos, retiros, altura y localización de servicios. El servicio 811 indica solicitar marcas antes de cavar [2]; las líneas privadas pueden requerir localizador aparte.",
        ],
      },
      {
        heading: "¿Cuántos materiales necesita una cerca de 164 pies con un portón?",
        paragraphs: [
          "Suponga 164 ft totales con portón de 4 ft: quedan 160 ft ordinarios. A 8 ft máximos: 160 ÷ 8 = 20 secciones. Una recta sencilla tiene 21 posiciones de poste, pero el portón puede sustituir dos por postes especificados; concilie el dibujo. Con tres rieles son 60. A 17 tablillas por sección, 340; con 7% por daños y selección, redondee a 364. Agregue el kit y herrajes del portón por separado.",
          "Si la línea gira, calcule ambas patas y comparta la esquina una vez. Patas de 96 ft y 68 ft a 8 ft máximos producen 12 y 9 secciones. Por separado sugieren 13 y 10 postes, pero la esquina compartida deja 22 posiciones únicas antes del portón. La geometría determina cuáles postes sirven más de una sección.",
          "Convierta el cómputo en compra después de elegir productos. Rieles pueden venir en 8 o 16 ft, postes con tratamientos distintos y tablillas por pieza o paquete. Agregue fijaciones aprobadas, concreto o relleno especificado, tapas, protector de cortes y arriostramiento temporal. Esas cantidades no se deducen con seguridad del número de postes.",
          "Para verificar tablillas, calcule una sección real después de instalar dos postes. Mida la luz entre caras, reste separaciones de extremo y divida por el módulo de tabla más hueco. Multiplique el conteo de cada ancho, porque la última sección corta necesita menos piezas que una bahía completa. Redondee por sección solo cuando no sea posible compartir material.",
          "Revise también elevación y secuencia. Una cerca escalonada puede necesitar postes más largos y deja huecos distintos bajo cada panel; una cerca inclinada cambia cortes y unión de rieles. El conteo es una estimación de compra, no un diseño frente a viento, helada, suelo, portón o contención de piscina. Compare la lista final con el croquis poste por poste, identifique cada tipo y confirme que ninguna esquina compartida se haya comprado dos veces. Separe además los postes de línea, terminales, esquinas y portones en renglones distintos para no sustituir piezas que requieren tamaño, refuerzo o herrajes diferentes.",
        ],
      },
    ],
    dataTables: [
      {
        title: "¿Cuántos postes se necesitan según la longitud?",
        columns: ["Tramo recto", "Máximo 6 ft", "Máximo 8 ft", "Postes a 8 ft"],
        rows: [
          ["50 ft", "9 secciones", "7 secciones", "8 postes"],
          ["100 ft", "17 secciones", "13 secciones", "14 postes"],
          ["150 ft", "25 secciones", "19 secciones", "20 postes"],
          ["200 ft", "34 secciones", "25 secciones", "26 postes"],
        ],
        note: "Solo recta sencilla: postes = secciones redondeadas + 1. Concilie esquinas y portones con el plano.",
      },
      {
        title: "¿Cuántas tablillas caben en una sección de 8 pies?",
        columns: ["Ancho real", "Hueco", "Módulo", "Conteo en 96 in"],
        rows: [
          ["3,5 in", "0,125 in", "3,625 in", "27"],
          ["3,5 in", "0,5 in", "4,0 in", "24"],
          ["5,5 in", "0,125 in", "5,625 in", "18"],
          ["5,5 in", "0,25 in", "5,75 in", "17"],
        ],
        note: "El espacio libre puede ser menor que 96 in con postes a 8 ft entre ejes; mida la sección real.",
      },
      {
        title: "¿Qué materiales de cerca se cuentan aparte?",
        columns: ["Condición", "Conteo extra", "Motivo", "Verificar"],
        rows: [
          ["Extremo", "Poste terminal", "Termina tramo", "Tapa y refuerzo"],
          ["Esquina", "Poste de esquina", "Dos direcciones", "Unión de riel"],
          ["Portón", "Dos postes + kit", "Cargas", "Holgura"],
          ["Pendiente", "Rieles por segmento", "Geometría", "Largo de poste"],
        ],
      },
    ],
    references: [
      {
        label: "Cómo construir una cerca de madera",
        publisher: "Lowe's",
        year: "2025",
        url: "https://www.lowes.com/n/how-to/install-a-wood-fence",
      },
      {
        label: "811 antes de excavar",
        publisher: "Common Ground Alliance",
        year: "2026",
        url: "https://call811.com/Before-You-Dig",
      },
    ],
    lastUpdated: "2026-07-29",
    resultLabels: { posts: "Postes", pickets: "Tablillas", rails: "Rieles" },
    metaTitle: "Calculadora de materiales de cerca | BuildSiteCalc",
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
        question: "¿Qué separación se deja entre tablas de deck compuesto?",
        answer:
          "**Use la separación vigente del fabricante y del sistema de fijación exactos.** Trex, por ejemplo, especifica 3/16 in entre lados y juntas de extremo según temperatura. Esas medidas no aplican automáticamente a todo compuesto, PVC o madera, y los clips ocultos pueden establecer su propia separación.",
      },
      {
        question: "¿Cuántas tablas necesito para un deck de 12x16 pies?",
        answer:
          "**Un deck de 12 por 16 ft necesita unas 52 tablas de 12 ft antes del margen cuando tablas de 5,5 in cruzan el ancho de 12 ft.** Una junta de 1/8 in produce 26 filas y cada fila de 16 ft requiere dos piezas. Con 10%, la compra se redondea a 58 tablas.",
      },
      {
        question: "¿Las tablas de deck van paralelas o perpendiculares a la casa?",
        answer:
          "**Las tablas deben seguir el entramado aprobado y normalmente cruzan las viguetas.** Su relación con la casa depende de la dirección de las viguetas, no solo de la apariencia. Para otra dirección o patrón diagonal, verifique separación, bloqueos, luces, fijaciones y requisitos del fabricante.",
      },
      {
        question: "¿Conviene comprar tablas de deck de 12 o 16 pies?",
        answer:
          "**Elija el largo que reduzca recortes inútiles y mantenga cada empalme sobre entramado aprobado.** Piezas de 16 ft eliminan juntas en un tramo de 16 ft; las de 12 ft son más manejables pero requieren dos por fila. Compare piezas enteras, flete, manipulación, disponibilidad y un plan de corte, no solo precio lineal.",
      },
      {
        question: "¿Cuánto desperdicio se agrega a las tablas de deck?",
        answer:
          "**Planee cerca de 5–10% para tablas rectas en un rectángulo sencillo y 15% o más para diseños diagonales o complejos.** Bordes, postes, aberturas, defectos, selección de color y material corto aumentan recortes. Para compuesto costoso prepare un plan fila por fila antes de cambiar el margen.",
      },
      {
        question: "¿La calculadora incluye fascia y escaleras del deck?",
        answer:
          "**No: el resultado cubre únicamente el campo rectangular del deck.** Cuente aparte marco perimetral, fascia, huellas, contrahuellas, tablas divisorias, bancos y faldón según su trazado. Esos elementos también reducen las dimensiones del campo y pueden exigir bloqueos antes de cerrar el pedido.",
      },
      {
        question: "¿Cuántas filas de tablas caben en un deck de 12 pies de ancho?",
        answer:
          "**Caben 26 filas de tablas de 5,5 in en 12 ft de ancho con junta lateral de 1/8 in.** El ancho es 144 in y cada fila ocupa 5,625 in: 144 ÷ 5,625 = 25,6, que se redondea. Quizá deba cortar la última tabla a lo ancho para el ajuste final.",
      },
    ],
    sections: [
      {
        heading: "¿Cómo se calcula cuántas tablas de deck se necesitan?",
        paragraphs: [
          "Elija la dirección de las tablas. Divida la dimensión perpendicular entre el ancho real más la separación lateral y redondee hacia arriba para obtener filas. Divida la dimensión paralela entre el largo comercial y redondee las piezas por fila. Multiplique filas × piezas por fila y agregue desperdicio una vez. Una tabla nominal 2×6 suele medir cerca de 5,5 in de ancho real; usar 6 in nominal reduce erróneamente el conteo.",
          "Este método por piezas es más útil que dividir pies cuadrados entre la cara de una tabla porque revela empalmes. Un tramo de 16 ft con material de 12 ft necesita dos piezas por fila aunque sobren 4 ft de la segunda. Reutilizar recortes depende de la posición de viguetas, apoyo mínimo, zonas de fijación y patrón aprobado.",
        ],
      },
      {
        heading: "¿Qué separación se deja entre tablas de deck?",
        paragraphs: [
          "Siga las instrucciones actuales del fabricante. Trex especifica 3/16 in de lado a lado y juntas de extremo según temperatura: 1/8 in sobre 40°F y 3/16 in bajo 40°F [1]. Esas medidas corresponden a ese sistema, no a toda madera, PVC o compuesto. Los clips ocultos pueden establecer otra separación.",
          "La humedad de la madera cambia después de instalar: tablas tratadas verdes pueden encoger y tablas secas hincharse al mojarse. Especie, tratamiento, estación, ventilación y exposición importan. La calculadora supone una junta lateral uniforme y no modela expansión en empalmes o contra muros. Confirme separaciones laterales y de extremo antes de pedir.",
        ],
      },
      {
        heading: "¿Cuánto desperdicio se agrega a las tablas de deck?",
        paragraphs: [
          "Para tablas rectas en un rectángulo sencillo, 5–10% es una gama de planificación para cortes, defectos y trazado. Bordes complejos, material corto, perforaciones o selección de color pueden exigir más. Un patrón diagonal a 45° produce recortes angulares repetidos y suele requerir 15% o un plan de corte específico. El margen no reemplaza contar el marco decorativo aparte.",
          "Revise largos disponibles antes de elegir porcentaje. Una pieza que cubre todo el tramo elimina empalmes, pero puede costar más, requerir entrega especial y ser difícil de manipular. Compare planes de 12, 16 y 20 ft por piezas enteras, no solo por precio lineal. Guarde repuestos completos solo si importa la disponibilidad futura del color.",
        ],
      },
      {
        heading: "¿Las tablas van paralelas o perpendiculares a la casa?",
        paragraphs: [
          "El decking normalmente cruza las viguetas, por lo que la dirección depende del entramado. La guía DCA 6 del American Wood Council aporta criterios prescriptivos para decks residenciales de madera y conexiones estructurales [2]. Esta calculadora solo cuenta superficie: no verifica luces, separación, voladizos, ledger, vigas, zapatas, barandas ni fijaciones.",
          "En diagonal, el fabricante puede exigir viguetas más próximas. Un marco perimetral también requiere bloqueos y cambia el campo. Ingrese largo y ancho libres para una orientación, cuente marco y fascia aparte por pies lineales y haga revisar el entramado conforme al código adoptado localmente.",
        ],
      },
      {
        heading: "¿Cuántas tablas se necesitan para un deck de 20 por 14 pies?",
        paragraphs: [
          "Suponga tablas de 5,5 in con junta de 1/8 in a lo largo de 20 ft, compradas en 12 ft. Cada fila ocupa 5,625 in y el ancho de 14 ft son 168 in: 168 ÷ 5,625 = 29,87; use 30 filas. Cada fila necesita dos piezas, total 60. Con 10%: 60 × 1,10 = 66 tablas. El pedido suma 792 pies lineales; algunos sobrantes de 4 ft quizá se reutilicen, pero no reduzca el conteo sin comprobar juntas y recortes.",
          "Con piezas de 20 ft, 30 cubren el campo; con 10% son 33 tablas o 660 pies lineales. Parece más eficiente, pero precio, flete, manipulación, curvatura y disponibilidad pueden anular la ventaja. Un plan mixto funciona solo si los empalmes caen en entramado aprobado. Dibuje cada fila y etiquete recortes antes de reducir el conteo conservador.",
          "Un marco perimetral consume piezas aparte, reduce las dimensiones del campo y necesita bloqueos y fijación aprobada. Calcule el campo interior después de fijar el borde; agregue aparte marco, fascia, huellas, contrahuellas, tablas divisorias y bancos. Los pies cuadrados no capturan esos detalles.",
          "Antes de comprar, confirme ancho real, largos disponibles y cobertura del color elegido. Dos perfiles de la misma marca pueden tener caras, clips y separaciones distintas. Anote dirección, ancho de campo, junta, largo comercial, filas, piezas por fila y margen para poder revisar cada redondeo. Confirme además que las piezas largas puedan llegar, girar en pasillos y almacenarse planas sin daño antes de instalarlas.",
        ],
      },
    ],
    dataTables: [
      {
        title: "¿Cuántas filas de tablas caben en cada ancho de deck?",
        columns: [
          "Ancho",
          "Tabla 5,5 in + junta 1/8 in",
          "Tabla 5,5 in + junta 3/16 in",
          "Cobertura real a 1/8 in",
        ],
        rows: [
          ["8 ft", "18 filas", "17 filas", "101,25 in"],
          ["10 ft", "22 filas", "22 filas", "123,75 in"],
          ["12 ft", "26 filas", "26 filas", "146,25 in"],
          ["14 ft", "30 filas", "30 filas", "168,75 in"],
          ["16 ft", "35 filas", "34 filas", "196,88 in"],
        ],
        note: "Se redondean las filas hacia arriba; quizá deba cortar la última tabla a lo ancho.",
      },
      {
        title: "¿Cuántas tablas se necesitan según el tamaño del deck?",
        columns: ["Deck", "Dirección", "Filas", "Piezas de 12 ft sin margen"],
        rows: [
          ["10 × 10 ft", "A lo largo de 10 ft", "22", "22"],
          ["12 × 12 ft", "A lo largo de 12 ft", "26", "26"],
          ["16 × 12 ft", "A lo largo de 16 ft", "26", "52"],
          ["20 × 14 ft", "A lo largo de 20 ft", "30", "60"],
          ["24 × 16 ft", "A lo largo de 24 ft", "35", "70"],
        ],
        note: "Usa tablas de 5,5 in, junta de 1/8 in y material de 12 ft. Agregue después el margen elegido.",
      },
      {
        title: "¿Qué margen de desperdicio se usa para tablas de deck?",
        columns: ["Trazado", "Gama", "Por qué cambia", "Contar aparte"],
        rows: [
          ["Rectángulo recto", "5–10%", "Cortes y defectos", "Fascia"],
          ["Postes o aberturas", "10–15%", "Más cortes cortos", "Bloqueos"],
          ["Diagonal a 45°", "Cerca de 15%+", "Recortes angulares", "Entramado extra"],
          ["Marco decorativo", "Plan de corte", "Acorta el campo", "Tablas de borde"],
        ],
        note: "Son rangos de planificación, no garantías; prepare lista de cortes para compuesto costoso.",
      },
    ],
    references: [
      {
        label: "Cómo espaciar tablas de deck",
        publisher: "Trex Company",
        year: "2025",
        url: "https://www.trex.com/deck-ideas/how-to-space-deck-boards/",
      },
      {
        label: "Guía DCA 6 para construcción prescriptiva de decks residenciales",
        publisher: "American Wood Council",
        year: "2015",
        url: "https://awc.org/topic/decks/",
      },
    ],
    lastUpdated: "2026-07-29",
    resultLabels: { boardsNeeded: "Tablas de deck" },
    metaTitle: "Calculadora de tablas de deck | BuildSiteCalc",
    metaDescription:
      "Calcule tablas de deck para superficie rectangular. Estimador gratuito con separación y desperdicio.",
  }),

  stair: calc({
    title: "Calculadora de escaleras",
    description:
      "Calcule número de contrahuellas, huellas, recorrido horizontal y longitud aproximada del larguero desde ascenso total y altura objetivo. Una sola unidad de longitud compartida. Solo geometría básica — verifique código local.",
    shortDescription: "Contrahuellas y huellas para escaleras.",
    formula:
      "Contrahuellas = ceil(ascenso total ÷ altura objetivo). Contrahuella real = ascenso ÷ contrahuellas. Huellas = contrahuellas − 1. Recorrido = huellas × profundidad. Larguero ≈ √(ascenso² + recorrido²). Todas las longitudes usan la unidad seleccionada.",
    assumptions: [
      "Tramo recto con contrahuellas y huellas uniformes.",
      "Contrahuella objetivo cerca de 7 in (≈178 mm) es común en vivienda US.",
      "No verifica cumplimiento IRC ni código local.",
      "Plataformas intermedias y altura libre no se calculan.",
      "Ascenso total es distancia vertical piso a piso terminado.",
      "El ancho de escalera es opcional e informativo.",
    ],
    workedExample: {
      title: "Ascenso 9 ft, contrahuella objetivo 7 in",
      body: "Ingrese 108 in de ascenso (o 9 ft con unidad Pies — se convierte). Contrahuellas = 108 ÷ 7 ≈ 15,4 → 16 (ceil). Contrahuella real = 108 ÷ 16 = 6,75 in. Huellas = 15. Recorrido = 15 × 10 in = 150 in. Larguero ≈ √(108² + 150²) ≈ 184,9 in.",
    },
    howToMeasure:
      "Mida distancia vertical de piso terminado a piso terminado (o descanso). Ingrese ascenso, contrahuella y huella en la misma unidad. Al cambiar la unidad se convierten todos los campos para que 108 pulgadas nunca se lean como 108 pies.",
    commonMistakes: [
      "Medir a subpiso en lugar de piso terminado.",
      "Contrahuellas desiguales al ajustar solo el primer peldaño.",
      "Ignorar límites de altura de contrahuella y profundidad de huella en código local.",
      "Cambiar la unidad de longitud sin convertir valores (esta herramienta convierte automáticamente).",
    ],
    faqs: [
      {
        question: "¿Altura cómoda de contrahuella?",
        answer:
          "7–7,75 in es típico en casas US. Escaleras exteriores de deck suelen usar 7–7,25 in.",
      },
      {
        question: "¿Cumple código?",
        answer:
          "No. Verifique siempre código local para contrahuella, huella, barandal y descansos.",
      },
      {
        question: "¿Y el nariz de huella?",
        answer:
          "La profundidad aquí es recorrido horizontal. Algunos códigos exigen proyección del nariz.",
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
      stringerLength: "Longitud del larguero (aprox.)",
    },
    inputLabels: {
      totalRise: "Ascenso total (piso a piso)",
      riserHeight: "Altura objetivo / máxima de contrahuella",
      treadDepth: "Profundidad de huella",
      stairWidth: "Ancho de escalera (opcional)",
      lengthUnit: "Unidad de longitud (compartida)",
    },
    metaTitle: "Calculadora de escaleras — Subida y huella | BuildSiteCalc",
    metaDescription:
      "Calcule contrahuellas, huellas, recorrido y larguero desde ascenso piso a piso. Ayuda gratuita de geometría — verifique código aparte.",
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
        answer:
          "Cobertura similar por área, pero verifique pies cuadrados útiles en la etiqueta.",
      },
      {
        question: "¿Cómo afecta la repetición?",
        answer:
          "Repeticiones largas desperdician más al alinear cada tira. Ingrese la distancia en pulgadas.",
      },
      {
        question: "¿Compro un rollo extra?",
        answer:
          "Sí — guarde uno para reparaciones. Los lotes de tinte cambian entre tandas.",
      },
      {
        question: "¿Paredes texturizadas?",
        answer:
          "Textura fuerte reduce cobertura efectiva. Agregue desperdicio o consulte al fabricante.",
      },
    ],
    resultLabels: { rollsNeeded: "Rollos de papel tapiz" },
    metaTitle: "Calculadora de papel tapiz — Rollos necesarios | BuildSiteCalc",
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
        answer:
          "Esta calculadora es para paneles. Soplado usa cobertura por saco según profundidad.",
      },
      {
        question: "¿Barrera de vapor?",
        answer:
          "Depende de zona climática y ensamble — aquí solo cantidad de aislamiento.",
      },
      {
        question: "¿Capas para más valor R?",
        answer: "Solo si el ensamble lo permite — no comprima paneles para que quepan.",
      },
    ],
    resultLabels: { battsNeeded: "Paneles de aislamiento" },
    metaTitle: "Calculadora de aislamiento — Paneles necesarios | BuildSiteCalc",
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
        answer:
          "Reglas generales: 15–25 BTU/ft² según clima. Zonas cálidas húmedas tienden más alto.",
      },
      {
        question: "¿Qué es una tonelada de frío?",
        answer: "Una tonelada = 12.000 BTU/h de capacidad de enfriamiento.",
      },
      {
        question: "¿Importa altura de cielo?",
        answer:
          "Sí para volumen. Esta herramienta usa área de piso con factores — cielos altos pueden necesitar más BTU/ft².",
      },
      {
        question: "¿Dimensionar bomba de calor?",
        answer:
          "Bombas requieren balance calefacción/refrigeración. Consulte profesional para modo dual.",
      },
    ],
    resultLabels: {
      estimatedBtu: "Carga estimada (BTU/h)",
      tonnage: "Toneladas de frío",
    },
    metaTitle: "Calculadora BTU HVAC — Tamaño de AC | BuildSiteCalc",
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
        answer:
          "A menudo 15–20 ft o furgoneta si está poco amueblado; 20 ft si está completo.",
      },
      {
        question: "¿Puedo ingresar ft³ directamente?",
        answer:
          "Sí. Reemplace la estimación por habitaciones con su total de inventario.",
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
    metaTitle: "Calculadora de camión de mudanza | BuildSiteCalc",
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
        answer:
          "10 yd³ para baño pequeño o garaje. 20 yd³ es el más común en remodelación completa.",
      },
      {
        question: "¿Cuánto tiempo puedo tenerlo?",
        answer: "Renta típica 7–10 días — revise términos locales.",
      },
      {
        question: "¿Qué no va al contenedor?",
        answer:
          "Pintura, químicos, llantas y electrodomésticos suelen requerir disposición especial.",
      },
      {
        question: "¿Retiro de techo?",
        answer: "Use preset de tejas o mida cuadrados de retiro × factor de escombros.",
      },
    ],
    resultLabels: { recommendedDumpster: "Tamaño de contenedor recomendado" },
    inputLabels: { projectType: "Tipo de proyecto" },
    metaTitle: "Calculadora de contenedor — Roll-off | BuildSiteCalc",
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
        answer:
          "No. Contracción es curado del concreto o humedad de madera — desperdicio es pérdida por corte.",
      },
      {
        question: "¿Contratistas agregan desperdicio oculto?",
        answer:
          "Estimaciones transparentes muestran desperdicio explícito para que el cliente entienda el pedido.",
      },
    ],
    resultLabels: { adjustedQuantity: "Cantidad a pedir" },
    metaTitle: "Calculadora de factor de desperdicio | BuildSiteCalc",
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
        answer:
          "144 pulgadas cúbicas de madera — equivalente a tabla 1×12 de un pie de largo.",
      },
      {
        question: "¿Nominal vs real?",
        answer:
          "Precio por pie tablero tradicionalmente usa dimensiones nominales antes de cepillar.",
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
    metaTitle: "Calculadora de pie tablero — Volumen de madera | BuildSiteCalc",
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
        question: "¿Cómo calculo los pies cuadrados de una habitación en L?",
        answer:
          "**Divida la habitación en L en dos rectángulos sin superposición, calcule cada área y súmelas.** Compruebe el número calculando el rectángulo exterior grande y restando la esquina faltante. Ambos métodos deben coincidir cuando las medidas y los límites de las figuras son correctos.",
      },
      {
        question: "¿Cómo convierto metros cuadrados a pies cuadrados?",
        answer:
          "**Multiplique los metros cuadrados por aproximadamente 10,7639 para convertirlos a pies cuadrados.** Por ejemplo, 20 m² × 10,7639 = unos 215,28 ft². Para convertir al contrario, multiplique los pies cuadrados por el factor exacto NIST de 0,09290304; la calculadora muestra ambas unidades.",
      },
      {
        question: "¿Cuántos pies cuadrados extra agrego por desperdicio de piso?",
        answer:
          "**Agregue cerca de 5–10% para un trazado sencillo y 10–20% o más para diagonal, espiga o patrones complejos.** Las instrucciones del producto y un plan de corte específico tienen prioridad. Aplique el margen una vez al área neta y redondee a cajas completas con la cobertura del producto exacto.",
      },
      {
        question: "¿Es igual el área para piso que los pies cuadrados de un avalúo?",
        answer:
          "**No: un cómputo interior de piso no es una medición certificada para avalúo.** ANSI Z765-2021 aplica reglas formales para calcular y reportar área residencial que pueden diferir de un cálculo de materiales por cuarto. Use esta herramienta para superficies y la norma aplicable con un profesional para reportes inmobiliarios.",
      },
      {
        question: "¿Cuántos pies cuadrados tiene una habitación de 12x12?",
        answer:
          "**Una habitación de 12 por 12 ft tiene 144 ft².** Multiplique 12 ft × 12 ft para obtener el área rectangular neta. Con 10% de margen, planee 158,4 ft² antes de redondear a cajas, tablas, baldosas u otras unidades completas de venta.",
      },
      {
        question: "¿Cómo convierto pies y pulgadas a pies decimales para calcular área?",
        answer:
          "**Divida las pulgadas entre 12 y sume el decimal a los pies enteros.** Por ejemplo, 12 ft 6 in son 12 + 6 ÷ 12 = 12,5 ft, no 12,6 ft. Multiplique las dimensiones convertidas, conserve precisión durante el cálculo y redondee el área final.",
      },
      {
        question: "¿Se incluyen closets y pasillos en los pies cuadrados?",
        answer:
          "**Incluya cada closet y pasillo que recibirá el mismo material y excluya superficies que no lo recibirán.** Dibuje cada espacio para contarlo una sola vez y decida si el piso pasa bajo gabinetes, islas o electrodomésticos. El área habitable formal sigue otras reglas; no traslade esta decisión a un avalúo.",
      },
    ],
    sections: [
      {
        heading: "¿Cómo se calculan los pies cuadrados?",
        paragraphs: [
          "Para un rectángulo, multiplique largo por ancho en la misma unidad. Un cuarto de 12 ft 6 in por 10 ft es 12,5 × 10 = 125 ft², no 12,6 × 10; seis pulgadas son 0,5 ft. Sume cada área sin superponer una vez. La calculadora convierte a metros cuadrados con el factor exacto de NIST: 1 ft² = 0,09290304 m² [1].",
          "Los pies cuadrados son área bidimensional. Los pies lineales miden longitud y los cúbicos, volumen. Pisos, techos, pintura, cargas térmicas, área rentable, avalúos y permisos pueden usar superficies o definiciones distintas; un área de piso matemáticamente correcta no es automáticamente la cantidad correcta para otro fin.",
        ],
      },
      {
        heading: "¿Cómo se mide una habitación en L o irregular?",
        paragraphs: [
          "Divida una L en dos rectángulos desde la esquina interior, mida y sume. Para triángulo use base × altura perpendicular ÷ 2; para círculo, π × radio². Evite superponer figuras. Compruebe con el rectángulo exterior menos la esquina faltante; ambos métodos deben coincidir.",
          "Mida a nivel de piso desde superficies terminadas consistentes para materiales. Dibuje puertas, nichos, gabinetes, islas, chimeneas, escaleras y closets, y decida qué recibe el mismo acabado. En muros curvos, use figuras manejables o dimensiones de plano/CAD. Anote al menos a la pulgada, convierta una vez y redondee al final.",
        ],
      },
      {
        heading: "¿Cuántos pies cuadrados adicionales se agregan para piso?",
        paragraphs: [
          "Un piso recto sencillo puede usar 5–10% de desperdicio; diagonal, mosaico, espiga, muchos cuartos pequeños o selección de tablas puede exigir 10–20% o lo indicado por fabricante. El margen cubre cortes, roturas, defectos y reparaciones. Aplíquelo una vez al área neta y redondee a cajas completas con la cobertura impresa.",
          "Ejemplo: 520 ft² × 1,10 = 572 ft². Si cada caja cubre 23,5 ft²: 572 ÷ 23,5 = 24,34; compre 25 cajas con 587,5 ft². No agregue 10% aquí y otro 10% en otra calculadora. Confirme devoluciones de cajas cerradas y si el lote de color justifica guardar repuesto.",
        ],
      },
      {
        heading: "¿Es igual el área de un cuarto que los pies cuadrados de un avalúo?",
        paragraphs: [
          "No. Esta herramienta suma rectángulos ingresados para planificar materiales. ANSI Z765-2021 es un método formal para calcular y reportar área de viviendas unifamiliares; Home Innovation Research Labs explica que busca uniformidad [2]. Fannie Mae adoptó esa norma para avalúos pertinentes y separa áreas terminadas sobre y bajo rasante [3].",
          "Un tasador puede usar medidas exteriores, reglas de altura y clasificación de niveles distintas de un cómputo interior de piso. Condominios, catastros, constructores, listados y permisos pueden seguir otras definiciones. No use esta calculadora para certificar área habitable, valor, ocupación, egreso ni cumplimiento de código.",
        ],
      },
      {
        heading: "¿Cuál es el área de un proyecto irregular de tres habitaciones?",
        paragraphs: [
          "Cuarto A: 15 ft × 12 ft = 180 ft². Cuarto B en L: 11 ft × 10 ft más 5 ft × 4 ft = 110 + 20 = 130 ft². Cuarto C: 9 ft 6 in × 8 ft; 9 ft 6 in son 9,5 ft, así que da 76 ft². Agregue closet de 6 ft × 3 ft = 18 ft². Resultado neto: 404 ft². Con 12% para patrón: 452,48 ft² antes de redondear cajas. En métrico, 404 ft² son unos 37,53 m².",
          "Si el piso cubre 22,4 ft² por caja: 452,48 ÷ 22,4 = 20,2 cajas. Redondee a 21, que aportan 470,4 ft². El sobrante efectivo es 66,4 ft² o 16,4% sobre el neto porque las cajas se redondean después del margen. Anote área neta y cobertura comprada para explicar la diferencia.",
          "El área de muros es otro cálculo. Un cuarto de 12 × 10 ft y 8 ft de alto tiene perímetro de 44 ft y 352 ft² brutos de muro antes de aberturas; el cielo mide 120 ft². Sumarlos al piso produce un total inútil para pedir un producto. Identifique material y superficie primero.",
          "La huella exterior también difiere de la suma interior porque muros y huecos ocupan espacio. Para acabados sirven medidas interiores; para avalúo formal use la norma aplicable y un profesional. Guarde croquis, fecha, instrumento, redondeo e inclusiones para que otra persona reproduzca el resultado.",
          "Calcule cada cuarto por separado y compare la suma con un rectángulo exterior aproximado. Una diferencia grande puede revelar un closet omitido, pasillo duplicado, dimensiones intercambiadas o pulgadas tratadas como pies decimales. Corrija el croquis antes de aplicar desperdicio, porque el porcentaje amplifica cualquier error.",
          "Si hay columnas, islas o gabinetes, decida si el producto se instala debajo o alrededor. Reste únicamente áreas que no recibirán material; huecos pequeños pueden costar más en cortes de lo que ahorran. Para baldosa, anote módulo, junta, orientación y arranque, pues áreas iguales pueden exigir distinto número de piezas. Verifique la cobertura por caja en la etiqueta del producto exacto, no en una ficha antigua, y redondee hacia arriba a unidades vendibles completas. Mantenga el sobrante utilizable con su número de lote cuando pueda necesitar reparaciones futuras; un reemplazo comprado años después quizá no coincida en color, textura, calibre o acabado.",
        ],
      },
    ],
    dataTables: [
      {
        title: "¿Cómo se convierten pies y pulgadas para calcular área?",
        columns: ["Dimensión", "Pies decimales", "Ejemplo por 10 ft", "Área"],
        rows: [
          ["6 in", "0,5 ft", "0,5 × 10", "5 ft²"],
          ["9 ft 3 in", "9,25 ft", "9,25 × 10", "92,5 ft²"],
          ["10 ft 6 in", "10,5 ft", "10,5 × 10", "105 ft²"],
          ["12 ft 9 in", "12,75 ft", "12,75 × 10", "127,5 ft²"],
        ],
        note: "Divida pulgadas entre 12 y sume los pies enteros. No escriba 6 pulgadas como 0,6 pies.",
      },
      {
        title: "¿Cuántos pies cuadrados tienen tamaños comunes de habitación?",
        columns: ["Dimensiones", "Pies cuadrados", "Metros cuadrados", "Con 10%"],
        rows: [
          ["8 × 10 ft", "80", "7,43", "88 ft²"],
          ["10 × 12 ft", "120", "11,15", "132 ft²"],
          ["12 × 15 ft", "180", "16,72", "198 ft²"],
          ["15 × 20 ft", "300", "27,87", "330 ft²"],
          ["20 × 25 ft", "500", "46,45", "550 ft²"],
        ],
        note: "Valores métricos con 0,09290304 m² por ft², redondeados para mostrar.",
      },
      {
        title: "¿Qué margen de desperdicio se usa para piso?",
        columns: ["Patrón", "Gama", "Fuente principal", "Antes de pedir"],
        rows: [
          ["Tabla recta", "5–10%", "Cortes extremos", "Revisar defectos"],
          ["Baldosa en retícula", "10%", "Cortes/roturas", "Revisar calibre"],
          ["Diagonal", "10–15%", "Cortes angulares", "Presentar patrón"],
          ["Espiga/complejo", "15–20%+", "Coincidencia", "Plan del fabricante"],
        ],
        note: "Rangos generales. Mandan las instrucciones y un plan de corte específico.",
      },
    ],
    references: [
      {
        label: "Guía NIST del SI: factores de conversión de área",
        publisher: "National Institute of Standards and Technology",
        year: "2026",
        url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9",
      },
      {
        label: "Anuncio de la norma ANSI Z765-2021",
        publisher: "Home Innovation Research Labs",
        year: "2021",
        url: "https://www.homeinnovation.com/insights/company_news/consensus-committee-approves-latest-version-of-ansi-square-footage-standard/44317",
      },
      {
        label: "Selling Guide Announcement SEL-2021-11",
        publisher: "Fannie Mae",
        year: "2021",
        url: "https://singlefamily.fanniemae.com/media/30296/display",
      },
    ],
    lastUpdated: "2026-07-29",
    resultLabels: { totalAreaFt2: "Área combinada (ft²)" },
    inputLabels: { rooms: "Dimensiones de habitaciones" },
    metaTitle: "Calculadora de pies cuadrados — Área múltiple | BuildSiteCalc",
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
        answer:
          "Los equipos mueven aire por el espacio. El volumen ayuda a estimar cambios de aire por hora.",
      },
      {
        question: "¿Dimensionar purificador CADR?",
        answer: "Fabricantes recomiendan CADR según volumen y ACH objetivo.",
      },
      {
        question: "¿Plano abierto?",
        answer:
          "Use dimensiones combinadas del espacio conectado o dimensione cada zona.",
      },
      {
        question: "¿Salida métrica?",
        answer: "Metros cúbicos se muestran junto con pies cúbicos.",
      },
    ],
    resultLabels: { volumeFt3: "Volumen de habitación (ft³)" },
    metaTitle: "Calculadora de volumen de habitación | BuildSiteCalc",
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
        answer:
          "Markup suma sobre costo; margen es utilidad sobre precio. Elija un método y sea consistente.",
      },
      {
        question: "¿Markup típico de contratista?",
        answer: "Varía — 20–50% sobre mano de obra más markup de materiales es común.",
      },
      {
        question: "¿Incluir overhead?",
        answer:
          "El costo debe reflejar tarifas cargadas si busca utilidad más allá del salario base.",
      },
      {
        question: "¿Precios escalonados?",
        answer:
          "Ingrese costo combinado o use partidas separadas en calculadora de materiales.",
      },
    ],
    resultLabels: { sellingPrice: "Precio a cobrar" },
    metaTitle: "Calculadora de margen de mano de obra | BuildSiteCalc",
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
        answer:
          "Sí. Use la calculadora de desperdicio y luego ingrese cantidades ajustadas aquí.",
      },
      {
        question: "¿Puedo exportar la lista?",
        answer:
          "Copie resultados de la página para su hoja de cálculo o plantilla de cotización.",
      },
      {
        question: "¿Descuentos por volumen?",
        answer: "Ingrese el precio unitario que corresponda a la cantidad que comprará.",
      },
      {
        question: "¿Incluir mano de obra?",
        answer:
          "Esto es solo materiales. Use margen de mano de obra o presupuesto de proyecto para cotización completa.",
      },
    ],
    resultLabels: { total: "Total materiales" },
    inputLabels: { lineItems: "Partidas de materiales" },
    metaTitle: "Calculadora de costo de materiales | BuildSiteCalc",
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
        answer:
          "10% en trabajo cosmético, 15–20% al abrir muros o tocar plomería/eléctrico antiguo.",
      },
      {
        question: "¿Presupuesto dueño vs contratista?",
        answer:
          "Dueños pueden excluir markup; contratistas deben incluir mano de obra cargada y utilidad.",
      },
      {
        question: "¿Proyectos por fases?",
        answer:
          "Presupuestos separados por fase o sume fases en una lista de materiales.",
      },
      {
        question: "¿Incluir electrodomésticos?",
        answer: "Agréguelos como partida de materiales si forman parte del alcance.",
      },
    ],
    resultLabels: { grandTotal: "Presupuesto total del proyecto" },
    metaTitle: "Calculadora de presupuesto de proyecto | BuildSiteCalc",
    metaDescription:
      "Arme presupuesto de renovación con materiales, mano de obra, permisos y contingencia. Hoja gratuita.",
  }),
};
