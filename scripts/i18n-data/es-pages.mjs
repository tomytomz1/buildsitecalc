export const esPages = {
  about: {
    title: "Acerca de ProjectCalc Hub",
    metaDescription:
      "ProjectCalc Hub ofrece calculadoras gratuitas y transparentes para mejoras del hogar. Conozca nuestra misión y cómo usar las herramientas responsablemente.",
    sections: [
      {
        heading: "Nuestra misión",
        paragraphs: [
          "ProjectCalc Hub existe para hacer visible la matemática de la planificación de proyectos. Ya sea que vacíe una losa de patio, pida tejas o arme un presupuesto de renovación, cada calculadora muestra la fórmula, los supuestos y las unidades detrás del número.",
          "Servimos a propietarios en proyectos DIY y contratistas que necesitan una verificación rápida en obra — sin ocultar pasos en una caja negra.",
        ],
      },
      {
        heading: "Fórmulas transparentes",
        paragraphs: [
          "Cada herramienta documenta cómo los datos se convierten en resultados: rendimientos, factores de desperdicio, multiplicadores de inclinación y conversiones de unidades se indican en la página. Puede verificar la aritmética y ajustar supuestos según datos de su proveedor.",
          "Cuando la práctica de la industria varía, lo decimos. Los valores predeterminados son puntos de partida razonables, no garantías de que todo trabajo cumpla todo código o especificación del fabricante.",
        ],
      },
      {
        heading: "No sustituye profesionales",
        paragraphs: [
          "Estas calculadoras son ayudas de planificación. No reemplazan ingeniería estructural, cálculos Manual J de ACCA, trabajo de oficios licenciados ni cumplimiento de códigos locales.",
          "Confirme siempre medidas críticas en sitio, siga instrucciones de instalación del fabricante y consulte profesionales calificados cuando la seguridad o el desempeño estructural estén en juego.",
        ],
      },
      {
        heading: "Contacto y comentarios",
        paragraphs: [
          "¿Preguntas, correcciones o sugerencias? Escríbanos a hello@projectcalchub.com. Mejoramos las herramientas con retroalimentación real de obra.",
        ],
      },
    ],
  },

  methodology: {
    title: "Metodología de cálculo",
    metaDescription:
      "Cómo funcionan las calculadoras de ProjectCalc Hub: unidades, factores de desperdicio, reglas de redondeo y limitaciones.",
    sections: [
      {
        heading: "Cómo funcionan los cálculos",
        paragraphs: [
          "Cada calculadora aplica una fórmula documentada a sus datos. Internamente usamos unidades SI (metros, m², m³) para consistencia y convertimos resultados a unidades US cuando corresponde.",
          "La validación rechaza valores faltantes, no numéricos o no positivos donde las cantidades físicas deben ser mayores que cero.",
        ],
      },
      {
        heading: "Unidades",
        paragraphs: [
          "Campos de longitud, área y volumen aceptan unidades US (pies, pulgadas, ft², yd³) y métricas (metros, cm, m², m³). Las conversiones usan factores fijos — por ejemplo, 1 pulg = 25,4 mm y 1 yd³ = 27 ft³.",
          "Resultados de peso (toneladas de grava) usan toneladas cortas US (2.000 lb) salvo nota contraria.",
        ],
      },
      {
        heading: "Factores de desperdicio",
        paragraphs: [
          "Las calculadoras de materiales pueden sumar desperdicio como porcentaje sobre cantidad neta: ajustado = base × (1 + desperdicio% ÷ 100). Los valores predeterminados reflejan práctica residencial típica, pero deben aumentarse en layouts diagonales, techos complejos o materiales frágiles.",
          "Aplique desperdicio una sola vez — en calculadora dedicada o en la de material, no en ambas.",
        ],
      },
      {
        heading: "Redondeo",
        paragraphs: [
          "Los valores mostrados redondean a precisión práctica (a menudo dos decimales en volúmenes, unidades enteras en conteos). Galones de pintura redondean al cuarto de galón superior. Sacos, azulejos y placas redondean hacia arriba porque no se venden fracciones.",
          "Los valores intermedios mantienen precisión completa antes del redondeo final.",
        ],
      },
      {
        heading: "Limitaciones",
        paragraphs: [
          "Presets (contenedores, camiones, reglas BTU) son aproximaciones. Condiciones de obra, líneas de producto y regulaciones varían.",
          "Enlaces de afiliados o anuncios no influyen en fórmulas. Vea nuestro Aviso legal.",
        ],
      },
    ],
  },

  glossary: {
    title: "Glosario de construcción",
    metaDescription:
      "Definiciones de términos comunes de construcción y mejoras del hogar usados en ProjectCalc Hub.",
    sections: [
      {
        paragraphs: [
          "Referencia rápida de terminología en calculadoras, resultados y guías. Las versiones en inglés aparecen en la página de glosario en inglés.",
        ],
      },
    ],
    terms: [
      { term: "Pie tablero", definition: "Unidad de volumen de madera igual a 144 pulgadas cúbicas — común en precio de madera dura." },
      { term: "Paquete (techo)", definition: "Unidad empaquetada de tejas asfálticas; típicamente tres paquetes cubren un cuadrado de techo." },
      { term: "Rendimiento", definition: "Área que cubre un material por unidad (ej. ft² por galón de pintura)." },
      { term: "Yarda cúbica (yd³)", definition: "Medida de volumen US igual a 27 ft³; común en concreto, mantillo y tierra a granel." },
      { term: "Separación al centro (OC)", definition: "Distancia del centro de un elemento estructural al siguiente (ej. montantes 16 in OC)." },
      { term: "Inclinación (techo)", definition: "Pendiente expresada como subida sobre recorrido (4/12 = 4 in de subida por 12 in horizontal)." },
      { term: "Valor R", definition: "Resistencia térmica del aislamiento; números mayores indican mejor resistencia al flujo de calor." },
      { term: "Contrahuella", definition: "Parte vertical de un escalón entre huellas." },
      { term: "Cuadrado de techo", definition: "100 ft² de área inclinada de techo; pedidos de tejas suelen referirse a cuadrados." },
      { term: "Huella", definition: "Superficie horizontal donde se pisa en un escalón." },
      { term: "Factor de desperdicio", definition: "Porcentaje extra de material sobre cantidad neta para cubrir cortes, roturas y errores." },
      { term: "Markup", definition: "Porcentaje añadido al costo para llegar al precio de venta (% sobre costo)." },
      { term: "Margen", definition: "Utilidad como porcentaje del precio de venta (distinto del markup)." },
      { term: "BTU", definition: "Unidad térmica británica — tasa de energía calorífica para dimensionar calefacción y refrigeración." },
      { term: "Manual J", definition: "Estándar ACCA para carga térmica residencial; más detallado que reglas generales." },
      { term: "Concreto premix", definition: "Mezcla seca en sacos que requiere agua en obra; rendimiento varía por peso del saco." },
      { term: "Contenedor roll-off", definition: "Contenedor abierto de escombros entregado para obra; dimensionado en yardas cúbicas." },
    ],
  },

  contact: {
    title: "Contáctenos",
    metaDescription:
      "Contacte a ProjectCalc Hub por correo. Comentarios, correcciones e consultas de colaboración bienvenidos.",
    sections: [
      {
        heading: "Escríbanos",
        paragraphs: [
          "Envíe correo a hello@projectcalchub.com para comentarios sobre calculadoras, reportes de errores, colaboraciones o licencias.",
          "Leemos cada mensaje y priorizamos correcciones que afecten precisión de cálculo o accesibilidad.",
        ],
      },
      {
        heading: "Formulario de contacto",
        paragraphs: [
          "El formulario de contacto abre su cliente de correo con un mensaje prellenado (enlace mailto). No almacenamos contenido del mensaje en nuestros servidores al usar el formulario.",
          "Si su navegador no abre enlaces mailto, copie la dirección anterior en su aplicación de correo.",
        ],
      },
      {
        heading: "Tiempo de respuesta",
        paragraphs: [
          "Procuramos responder en pocos días hábiles. Preguntas de ingeniería complejas pueden derivarse a profesionales licenciados en su zona.",
        ],
      },
    ],
  },

  privacy: {
    title: "Política de privacidad",
    metaDescription:
      "Política de privacidad de ProjectCalc Hub — recopilación de datos, cookies, analítica y sus derechos. Actualizado 28 jul 2026.",
    sections: [
      {
        paragraphs: [
          "Última actualización: 28 de julio de 2026. ProjectCalc Hub (\"nosotros\") opera https://projectcalchub.com. Esta política describe cómo manejamos información al usar nuestro sitio.",
        ],
      },
      {
        heading: "Información que recopilamos",
        paragraphs: [
          "Los datos de calculadoras se procesan en su navegador. No requiere cuenta para usar las herramientas.",
          "Podemos recopilar registros estándar del servidor (IP, tipo de navegador, páginas visitadas) y datos analíticos si usted consiente cookies analíticas.",
          "Si nos escribe por correo, recibimos la información que elija enviar.",
        ],
      },
      {
        heading: "Uso de la información",
        paragraphs: [
          "Para operar, asegurar y mejorar el sitio; medir tráfico agregado; y responder consultas.",
          "No vendemos información personal.",
        ],
      },
      {
        heading: "Cookies y analítica",
        paragraphs: [
          "Vea nuestra Política de cookies. Herramientas analíticas pueden establecer cookies solo tras consentimiento cuando la ley lo exige.",
        ],
      },
      {
        heading: "Sus derechos",
        paragraphs: [
          "Según su estado de residencia (incluida California), puede tener derechos de acceso, eliminación u oposición a cierto procesamiento. Contacte hello@projectcalchub.com para ejercerlos.",
        ],
      },
      {
        heading: "Cambios",
        paragraphs: [
          "Podemos actualizar esta política. La fecha \"Última actualización\" cambiará al publicar revisiones.",
        ],
      },
    ],
  },

  terms: {
    title: "Términos de servicio",
    metaDescription:
      "Términos de servicio de ProjectCalc Hub. Jurisdicción US. Actualizado 28 jul 2026.",
    sections: [
      {
        paragraphs: [
          "Última actualización: 28 de julio de 2026. Al usar ProjectCalc Hub, acepta estos Términos de servicio.",
        ],
      },
      {
        heading: "Uso del servicio",
        paragraphs: [
          "Calculadoras y contenido se ofrecen gratis para planificación personal y comercial. No puede hacer scraping masivo, ingeniería inversa ni republicar el sitio sin permiso.",
          "Usted es responsable de verificar resultados antes de comprar materiales o ejecutar trabajos.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        paragraphs: [
          "El nombre, marca y contenido original de ProjectCalc Hub nos pertenecen. Fórmulas expresadas como texto pueden citarse con atribución.",
        ],
      },
      {
        heading: "Exclusión de garantías",
        paragraphs: [
          "El sitio se ofrece \"tal cual\" sin garantías de ningún tipo. Vea nuestro Aviso legal sobre limitaciones de cálculo y asesoría profesional.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        paragraphs: [
          "En la máxima medida permitida por ley, ProjectCalc Hub no es responsable por daños indirectos, incidentales o consecuentes derivados del uso del sitio.",
        ],
      },
      {
        heading: "Ley aplicable",
        paragraphs: [
          "Estos términos se rigen por las leyes de los Estados Unidos y del estado donde opera ProjectCalc Hub, sin considerar reglas de conflicto de leyes.",
        ],
      },
    ],
  },

  disclaimer: {
    title: "Aviso legal",
    metaDescription:
      "Aviso importante: las calculadoras de ProjectCalc Hub son solo estimaciones, no asesoría de ingeniería ni de código.",
    sections: [
      {
        paragraphs: ["Última actualización: 28 de julio de 2026."],
      },
      {
        heading: "Solo estimaciones",
        paragraphs: [
          "Todos los resultados son estimaciones para planificación y presupuesto. Las necesidades reales dependen de condiciones de obra, especificaciones de producto, método de instalación y códigos locales.",
        ],
      },
      {
        heading: "No es asesoría profesional",
        paragraphs: [
          "Nada en este sitio constituye ingeniería estructural, arquitectura, legal, fiscal ni asesoría de oficios licenciados. Contrate profesionales calificados para diseño estructural, eléctrico, plomería, gas y cumplimiento de código.",
        ],
      },
      {
        heading: "Productos de terceros",
        paragraphs: [
          "Referencias a marcas, proveedores o tamaños de flota de renta son ilustrativas. No estamos afiliados salvo indicación explícita. Siga instrucciones del fabricante.",
        ],
      },
      {
        heading: "Divulgación de afiliados",
        paragraphs: [
          "Algunos enlaces pueden ser de afiliados. No cambian los resultados de las calculadoras ni aumentan su precio.",
        ],
      },
    ],
  },

  accessibility: {
    title: "Declaración de accesibilidad",
    metaDescription:
      "Compromiso de accesibilidad web de ProjectCalc Hub y cómo reportar barreras. Actualizado 28 jul 2026.",
    sections: [
      {
        paragraphs: [
          "Última actualización: 28 de julio de 2026. Buscamos que ProjectCalc Hub sea usable para personas con diversas capacidades.",
        ],
      },
      {
        heading: "Nuestro compromiso",
        paragraphs: [
          "Procuramos conformidad con WCAG 2.1 nivel AA cuando es practicable: navegación por teclado, contraste de color, encabezados semánticos, etiquetas de formulario y enlaces de salto.",
        ],
      },
      {
        heading: "Limitaciones conocidas",
        paragraphs: [
          "Algunos embeds de terceros (anuncios, analítica) pueden no cumplir plenamente nuestros estándares. Seleccionamos socios con políticas de accesibilidad cuando es posible.",
        ],
      },
      {
        heading: "Comentarios",
        paragraphs: [
          "¿Encontró una barrera? Escriba a hello@projectcalchub.com con la URL y descripción. Atenderemos solicitudes razonables con prontitud.",
        ],
      },
    ],
  },

  cookies: {
    title: "Política de cookies",
    metaDescription:
      "Cómo ProjectCalc Hub usa cookies y tecnologías similares. Actualizado 28 jul 2026.",
    sections: [
      {
        paragraphs: ["Última actualización: 28 de julio de 2026."],
      },
      {
        heading: "Qué son las cookies",
        paragraphs: [
          "Las cookies son archivos de texto pequeños en su dispositivo. Ayudan a recordar preferencias y medir uso.",
        ],
      },
      {
        heading: "Cookies que usamos",
        paragraphs: [
          "Esenciales: necesarias para funcionalidad básica como idioma y elección de consentimiento.",
          "Analíticas: opcionales, para entender tráfico agregado (ej. Google Analytics) solo si usted consiente.",
          "Publicidad: opcionales, pueden ser establecidas por socios publicitarios si los anuncios están activos y usted consiente.",
        ],
      },
      {
        heading: "Administrar cookies",
        paragraphs: [
          "Use nuestro banner de consentimiento para aceptar o rechazar cookies no esenciales. También puede borrar cookies en la configuración del navegador.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: ["Preguntas sobre esta política: hello@projectcalchub.com."],
      },
    ],
  },
};
