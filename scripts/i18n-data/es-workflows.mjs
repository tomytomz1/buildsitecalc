const LAST_UPDATED = "2026-08-03";

function workflow(content) {
  return { ...content, lastUpdated: content.lastUpdated ?? LAST_UPDATED };
}

export const esWorkflows = {
  "deck-build": workflow({
    title: "Secuencia de calculadoras para construir un deck",
    shortDescription: "Todos los cálculos de un deck, en orden de obra.",
    description:
      "Recorra un deck desde la superficie hasta el presupuesto final: bases, tablas, madera de estructura, escaleras, barandal y la lista de materiales que los une.",
    metaTitle: "Cómo estimar un deck: calculadoras en orden de obra",
    metaDescription:
      "Estime un deck paso a paso: superficie, bases, tablas, pies tablero, escaleras, barandal y presupuesto total. Calculadoras gratis en el orden real de obra.",
    intro: [
      "Un deck se descompone en la etapa de pedido mucho más seguido que en la etapa de estructura. La causa casi siempre es la secuencia: alguien cotiza la tabla antes de conocer la superficie, u olvida que las escaleras llevan su propia madera, o descubre en la caja que las bases de los postes necesitan un concreto que nadie contó. Cada cálculo de abajo depende del anterior.",
      "Avance de arriba hacia abajo. Cada paso arrastra su resultado al siguiente, y los dos últimos convierten las cantidades en dinero. Omita un paso solo cuando el deck realmente no tenga ese elemento, y tome en cuenta que las escaleras y el barandal son donde la mayoría de los estimados se queda corta.",
    ],
    outcome:
      "Una lista de materiales con cantidades de bases, tabla, estructura, escaleras y barandal, cotizada y totalizada con mano de obra y contingencia.",
    faqs: [
      {
        question: "¿En qué orden conviene estimar un deck?",
        answer:
          "**Primero la superficie, luego las bases, luego la tabla, luego la madera de estructura, después escaleras y barandal, y el costo al final.** Todas las cantidades dependen de la superficie, y cotizar antes de fijarlas obliga a volver a cotizar. Las escaleras son el paso que más se olvida, y llevan su propia madera y sus propios límites de código.",
      },
      {
        question: "¿Por qué los estimados de deck quedan cortos tan seguido?",
        answer:
          "**Por tres cosas: escaleras, barandal y desperdicio.** La tabla se calcula con cuidado y después los largueros, huellas, balaustres y postes de barandal se agregan de memoria. El desperdicio de corte en tabla de deck también sale más alto de lo esperado, porque el largo de la tabla rara vez divide de forma exacta el ancho del deck.",
      },
      {
        question: "¿Se necesita concreto para un deck?",
        answer:
          "**Sí, para las bases de los postes, salvo que use un sistema de pilotes o helicoidal.** El conteo de sacos depende del diámetro y la profundidad del hoyo, y es fácil quedarse corto: un hoyo de 12 in de diámetro y 36 in de profundidad lleva unos 2,4 ft³ de concreto, es decir cuatro o cinco sacos de 80 lb por hoyo.",
      },
    ],
  }),
  "room-repaint": workflow({
    title: "Secuencia de calculadoras para repintar una habitación",
    shortDescription: "Del área de muro a los galones y a una lista cotizada.",
    description:
      "Repinte una habitación en el orden correcto: mida el área de muro, revise el volumen para ventilación, repare el panel y calcule galones, rollos y costo total.",
    metaTitle: "Cómo estimar el repintado de una habitación, en orden",
    metaDescription:
      "Estime un repintado paso a paso: área de muro, volumen del cuarto, reparación de tablaroca, galones de pintura, rollos de papel tapiz y costo total.",
    intro: [
      "Repintar es el trabajo más subestimado de una casa, y casi siempre por la misma razón: la pintura se compra contra el área de piso en vez del área de muro. Un cuarto de 12 por 10 ft tiene 120 ft² de piso y 352 ft² de muro, y la pintura tiene que cubrir el muro.",
      "Esta secuencia arranca con la medida que de verdad importa, revisa si la superficie necesita trabajo antes de aplicar pintura y termina con una lista cotizada. El margen de retoque cerca del final vale la pena: igualar un color seis meses después es mucho más difícil que comprar un cuarto de galón extra ahora.",
    ],
    outcome:
      "Galones por mano, el panel y la pasta que requieran las reparaciones, un margen de retoque, y todo cotizado.",
    faqs: [
      {
        question: "¿Hay que medir área de piso o área de muro para comprar pintura?",
        answer:
          "**Área de muro, siempre.** Multiplique el perímetro del cuarto por la altura del cielo y luego descuente puertas y ventanas. El área de piso y la de muro no son proporcionales: un cuarto largo y angosto tiene mucho más muro por pie cuadrado de piso que un cuarto cuadrado del mismo tamaño.",
      },
      {
        question: "¿Hay que reparar la tablaroca antes de pintar?",
        answer:
          "**Repare primero, porque la pintura hace más visibles los defectos, no menos.** La pasta fresca y los parches sin sellar también absorben pintura a un ritmo distinto que el muro alrededor, así que una reparación sin sellador se nota como una mancha opaca en el acabado aunque el color coincida.",
      },
      {
        question: "¿Cuánta pintura extra conviene comprar?",
        answer:
          "**La suficiente para retoques, que normalmente significa redondear al siguiente envase en vez de sumar un porcentaje.** La pintura se vende en tamaños fijos, así que 1,7 galones calculados se vuelven 2 galones de todos modos. Guarde el sobrante bien cerrado y etiquetado con el nombre del cuarto.",
      },
    ],
  }),
  "bathroom-tile": workflow({
    title: "Secuencia de calculadoras para enchapar un baño",
    shortDescription: "Piso, muros, panel de respaldo y el desperdicio real.",
    description:
      "Enchape un baño en orden: separe áreas de piso y muro, panel de respaldo para zona húmeda, conteo de azulejo y el factor de desperdicio más alto que exigen los cuartos pequeños.",
    metaTitle: "Cómo estimar el azulejo de un baño, en orden",
    metaDescription:
      "Estime el enchape de un baño paso a paso: áreas de piso y muro, panel de respaldo, conteo de azulejo, factor de desperdicio en cuartos pequeños y costo total.",
    intro: [
      "El baño es el peor cuarto de la casa para estimar azulejo, y la razón es geométrica. Un cuarto pequeño con tina, inodoro, mueble de lavabo y un vano tiene una proporción inusualmente alta de bordes cortados frente a área de campo, lo que significa que el 10% de desperdicio habitual con frecuencia no alcanza.",
      "La otra trampa es el sustrato. La tablaroca común no va detrás del azulejo en zona húmeda, y descubrirlo después de que llegó el material cuesta un viaje y un retraso. Recorra los pasos en orden y trate el paso del factor de desperdicio como una decisión real, no como un valor por defecto.",
    ],
    outcome:
      "Conteos separados de azulejo de piso y muro, hojas de panel de respaldo, un margen de desperdicio realista y una lista cotizada con adhesivo y boquilla.",
    faqs: [
      {
        question: "¿Cuánto desperdicio hay que dejar en azulejo de baño?",
        answer:
          "**Calcule 15% en vez del 10% habitual, y más en trazos diagonales o con patrón.** Los cuartos pequeños cortan una proporción alta de su azulejo, y los muebles multiplican los bordes cortados. Compre todo el pedido de una vez para que las cajas vengan de la misma corrida de producción.",
      },
      {
        question: "¿Se puede enchapar sobre tablaroca común en un baño?",
        answer:
          "**No en la zona húmeda.** Los muros de tina y regadera necesitan panel de cemento o un sustrato resistente al agua equivalente. Fuera de la zona húmeda, en un muro que solo recibe humedad ambiental, el panel común suele ser aceptable, pero confirme su código local antes de decidir.",
      },
      {
        question: "¿Conviene calcular el azulejo de piso y de muro por separado?",
        answer:
          "**Sí, porque normalmente son productos distintos con distinta cobertura por caja.** Además suelen llevar factores de desperdicio diferentes, ya que un muro de regadera tiene más bordes cortados alrededor de llaves y nichos que un piso abierto.",
      },
    ],
  }),
  "driveway-concrete": workflow({
    title: "Secuencia de calculadoras para colar una entrada de concreto",
    shortDescription: "Base, yardas cúbicas, sacos, renivelación y disposición.",
    description:
      "Cole una entrada de concreto en orden: área en la cimbra, base de grava compactada, yardas cúbicas para premezclado o conteo de sacos, y luego renivelación, disposición y costo.",
    metaTitle: "Cómo estimar una entrada de concreto, en orden",
    metaDescription:
      "Estime una entrada de concreto paso a paso: área, base de grava, yardas cúbicas de concreto, conteo de sacos, renivelación, tamaño de contenedor y costo total.",
    intro: [
      "Colar una entrada no perdona, porque el concreto llega en un camión con el reloj corriendo. Pedir de menos deja una junta fría a media losa; pedir de más significa pagar concreto que termina en el desperdicio. Ambas cosas se evitan fijando las cantidades antes de hacer el pedido.",
      "La base es el paso que más se omite al estimar y menos se omite en la práctica, así que va en la secuencia. La disposición también: la tierra excavada y cualquier losa demolida tienen que ir a algún lado, y eso es una partida.",
    ],
    outcome:
      "Volumen de base compactada, concreto en yardas cúbicas con alternativa en sacos, tierra de renivelación, volumen de escombro y un total con cargos por bomba o carga corta.",
    faqs: [
      {
        question: "¿Qué espesor debe tener una entrada de concreto?",
        answer:
          "**Cuatro pulgadas es lo típico para autos, y cinco a seis pulgadas donde vayan a estacionarse camiones o vehículos pesados.** El espesor determina el volumen de forma directa, así que la decisión va antes del pedido: pasar de 4 a 5 in agrega 25% al pedido de concreto sobre la misma área.",
      },
      {
        question: "¿Se necesita base de grava bajo una entrada de concreto?",
        answer:
          "**En casi todos los casos, sí.** Una base granular compactada da soporte uniforme y drenaje, que es lo que evita el agrietamiento por asentamiento diferencial. Es un pedido de material aparte en yardas cúbicas o toneladas, y es fácil dejarlo fuera de un estimado.",
      },
      {
        question: "¿Conviene premezclado o sacos?",
        answer:
          "**Premezclado para cualquier cosa cercana a una entrada completa; sacos solo para plataformas pequeñas y reparaciones.** El punto de cruce suele estar alrededor de una yarda cúbica, que son unos 45 sacos de 80 lb. Por encima de eso, mezclar en sitio es más lento de lo que permite el tiempo de trabajo del concreto.",
      },
    ],
  }),
};
