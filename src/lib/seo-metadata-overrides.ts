import type { Locale } from "@/config/site";

/**
 * Search-snippet copy for pages whose dictionary descriptions are overly
 * terse or whose titles obscure the task the page solves.
 *
 * Metadata only: H1, body copy, canonical URL, hreflang, and formulas are not
 * changed. Keep descriptions specific to functionality on the linked page.
 * Based on the 2026-10-16 Bing query export, with EN/ES copy reviewed together.
 */
export interface SeoMetadataOverride {
  title?: string;
  description: string;
}

export const seoMetadataOverrides: Record<Locale, Record<string, SeoMetadataOverride>> = {
  en: {
    calculators: {
      title: "Free Construction & Home Improvement Calculators",
      description: "Browse 25 free calculators for concrete, flooring, tile, paint, roofing, landscaping, and project costs. Estimate material quantities with transparent formulas.",
    },
    categories: {
      title: "Construction Calculator Categories",
      description: "Explore free construction calculator categories for concrete, painting, flooring, roofing, landscaping, decking, and estimates. Find the right tool for your project.",
    },
    "categories/concrete-masonry": {
      title: "Concrete Calculators: Slabs, Bags & Cubic Yards",
      description: "Free concrete calculators for slabs, patios, driveways, and post holes. Estimate cubic yards, bag counts, and waste allowances using visible formulas.",
    },
    "categories/painting-walls": {
      title: "Paint, Drywall & Wallpaper Calculators",
      description: "Estimate paint gallons, drywall sheets, and wallpaper rolls for rooms and walls. Free calculators account for coverage, openings, coats, and material waste.",
    },
    "categories/flooring-tile": {
      title: "Flooring & Tile Calculators: Area, Boxes & Pieces",
      description: "Calculate flooring square footage, carton counts, and ceramic tile quantities for rooms. Allow for plank or tile dimensions, grout gaps, and waste.",
    },
    "categories/roofing": {
      title: "Roofing Shingle Calculator & Material Estimates",
      description: "Estimate roofing squares and shingle bundles from roof dimensions, pitch, and waste. Explore free roofing tools for planning asphalt shingle projects.",
    },
    "categories/landscaping": {
      title: "Mulch, Gravel & Topsoil Calculators",
      description: "Calculate how many cubic yards of mulch, gravel, or topsoil your project needs. Estimate bed coverage, depth, and optional waste before ordering material.",
    },
    "categories/fencing-decking": {
      title: "Fence, Deck & Stair Material Calculators",
      description: "Estimate fence posts, rails, pickets, deck boards, and stair dimensions. Free project calculators help plan quantities, spacing, and material waste.",
    },
    "categories/measurements": {
      title: "Square Footage, Room Volume & Board Feet",
      description: "Measure rooms, calculate cubic feet or meters of space, and estimate lumber board feet. Free measurement calculators support project planning and material orders.",
    },
    "categories/heating-insulation": {
      title: "Insulation & HVAC BTU Calculators",
      description: "Estimate insulation batts and preliminary heating or cooling BTU requirements using room dimensions. View the assumptions and limitations of each calculator.",
    },
    "categories/moving-cleanup": {
      title: "Moving Truck & Dumpster Size Calculators",
      description: "Compare moving truck sizes by bedrooms or cargo volume and estimate dumpster capacity for renovation debris. Free sizing tools for moving and cleanup.",
    },
    "categories/project-costs": {
      title: "Material Cost, Labor Markup & Budget Calculators",
      description: "Estimate project material costs, contractor markup, contingency, and total renovation budgets. Free tools help organize quantities and costs in one estimate.",
    },
    "calculators/drywall": {
      description: "How many drywall sheets do you need? Estimate 4×8 or 4×12 sheets for walls and ceilings with room dimensions and a waste allowance. Free drywall calculator.",
    },
    "calculators/roofing-shingle": {
      description: "Calculate roof shingle squares and bundle counts from roof size, pitch, and waste allowance. Free asphalt roofing estimator with transparent calculations.",
    },
    "calculators/topsoil": {
      description: "How many cubic yards of topsoil do you need? Estimate soil for lawns, garden beds, and grading using area and depth. Supports US customary and metric units.",
    },
    "calculators/deck-board": {
      description: "How many deck boards do you need? Enter deck size, board width and length, spacing, and waste to estimate material quantities for a rectangular deck.",
    },
    "calculators/wallpaper": {
      description: "Estimate wallpaper rolls for a room using wall perimeter, height, and roll coverage. Account for pattern repeat and waste with this free wallpaper calculator.",
    },
    "calculators/insulation": {
      description: "Estimate fiberglass insulation batts for walls or attics using area, batt dimensions, and material waste. Free insulation quantity calculator with assumptions.",
    },
    "calculators/moving-truck-size": {
      description: "What size moving truck do you need? Estimate cargo volume or select a bedroom count to compare moving truck sizes from cargo vans to 26-foot trucks.",
    },
    "calculators/dumpster-size": {
      description: "What dumpster size fits your project? Estimate debris volume for remodels and cleanouts and compare roll-off dumpster capacities before booking a container.",
    },
    "calculators/project-waste-factor": {
      description: "How much extra material should you buy? Calculate waste allowance and total quantities for tile, flooring, lumber, or concrete from a base amount and percentage.",
    },
    "calculators/board-foot": {
      description: "Calculate lumber board feet from board thickness, width, length, and quantity. Free board-foot calculator for rough lumber, woodworking, and material estimates.",
    },
    "calculators/square-footage": {
      description: "How many square feet are in your rooms? Add multiple rectangular areas and calculate total square footage in US or metric units for flooring and project estimates.",
    },
    "calculators/room-volume": {
      description: "Calculate room volume in cubic feet or cubic meters from length, width, and height. Free room volume calculator for space planning and preliminary HVAC estimates.",
    },
    "calculators/labor-markup": {
      description: "Calculate contractor selling price using job cost, labor markup, or profit margin. Compare markup and margin to understand what your project pricing includes.",
    },
    "calculators/material-cost": {
      description: "Calculate total construction material costs from line-item quantities and unit prices, with optional sales tax. Free material list estimator for projects.",
    },
    "calculators/project-budget": {
      description: "Build a renovation budget with materials, labor, permits, and contingency. Estimate total project costs and review an itemized home improvement worksheet.",
    },
    methodology: {
      description: "Learn how BuildSiteCalc estimates materials: conversion factors, waste allowances, rounding rules, source assumptions, and important limits for real projects.",
    },
    glossary: {
      description: "Look up construction and home improvement terms used in our calculators, including material quantities, measurements, waste factors, and estimating terminology.",
    },
    contact: {
      description: "Contact the BuildSiteCalc team about calculator feedback, incorrect results, source references, accessibility concerns, or partnership inquiries by email.",
    },
  },
  es: {
    calculators: {
      title: "Calculadoras de construcción y materiales gratis",
      description: "Explore 25 calculadoras gratuitas de concreto, pisos, azulejos, pintura, techos y presupuestos. Estime materiales con fórmulas claras y unidades métricas o US.",
    },
    categories: {
      title: "Categorías de calculadoras de construcción",
      description: "Encuentre calculadoras gratuitas por categoría: concreto, pintura, pisos, techos, jardinería, decks y costos de obra. Elija la herramienta para su proyecto.",
    },
    "categories/concreto-y-mamposteria": {
      title: "Calculadoras de concreto: losas, sacos y yardas",
      description: "Calcule yardas cúbicas y sacos de concreto para losas, patios, entradas y postes. Herramientas gratuitas con medidas, espesor y margen de desperdicio.",
    },
    "categories/pintura-y-paredes": {
      title: "Calculadoras de pintura, tablaroca y papel tapiz",
      description: "Estime galones de pintura, placas de tablaroca y rollos de papel tapiz para muros. Calcule cobertura, manos, aberturas y desperdicio de materiales.",
    },
    "categories/pisos-y-azulejos": {
      title: "Calculadoras de pisos, cajas y azulejos",
      description: "Calcule metros cuadrados, cajas de piso laminado o vinílico y cantidad de azulejos. Incluya dimensiones de piezas, juntas y margen de desperdicio.",
    },
    "categories/techos": {
      title: "Calculadora de tejas asfálticas y materiales",
      description: "Estime cuadrados de techo y paquetes de tejas asfálticas con área, inclinación y desperdicio. Herramientas gratuitas para planear materiales de techado.",
    },
    "categories/jardineria": {
      title: "Calculadoras de mantillo, grava y tierra vegetal",
      description: "Calcule yardas cúbicas de mantillo, grava o tierra vegetal para jardín, senderos y entradas. Estime material por área, profundidad y desperdicio.",
    },
    "categories/cercas-y-decks": {
      title: "Calculadoras de cercas, decks y escaleras",
      description: "Estime postes, rieles, tablillas y tablas de deck, además de huellas y contrahuellas. Calcule cantidades, separación y desperdicio de materiales.",
    },
    "categories/mediciones": {
      title: "Calculadoras de pies cuadrados y volumen",
      description: "Calcule pies cuadrados, volumen de habitaciones en pies o metros cúbicos y pies tablero de madera. Herramientas gratuitas para medir y estimar materiales.",
    },
    "categories/calefaccion-y-aislamiento": {
      title: "Calculadoras de aislamiento y BTU de HVAC",
      description: "Estime paneles de aislamiento y BTU aproximados de calefacción o aire acondicionado según medidas del espacio. Revise los supuestos y límites de cada cálculo.",
    },
    "categories/mudanza-y-limpieza": {
      title: "Calculadoras de camión de mudanza y contenedor",
      description: "Compare tamaños de camión por habitaciones o volumen de carga y elija capacidad de contenedor para escombros de remodelación. Herramientas gratuitas.",
    },
    "categories/costos-de-proyecto": {
      title: "Calculadoras de costos, margen y presupuesto",
      description: "Sume partidas de materiales, margen de mano de obra, desperdicio y contingencia. Prepare presupuestos de obra y remodelación con herramientas gratuitas.",
    },
    "calculators/bolsas-de-concreto": {
      description: "¿Cuántos sacos de concreto necesita? Calcule bolsas de 40, 60 u 80 lb según volumen, espesor y desperdicio para losas, zapatas, patios o postes.",
    },
    "calculators/pisos": {
      title: "Calculadora de pisos: metros cuadrados y cajas",
      description: "¿Cuántas cajas de piso necesita? Calcule área, desperdicio y cajas de laminado, madera o vinilo según los metros cuadrados y la cobertura de cada paquete.",
    },
    "calculators/azulejos": {
      description: "¿Cuántos azulejos necesita para un piso o pared? Ingrese el área y las dimensiones de la pieza; estime cantidad, juntas y desperdicio con esta calculadora.",
    },
    "calculators/tablaroca": {
      description: "Calcule cuántas placas de tablaroca 4×8 o 4×12 necesita para paredes o techos. Estime superficie, tamaño de placa y margen de desperdicio.",
    },
    "calculators/tejas-asfalticas": {
      description: "¿Cuántos paquetes de tejas asfálticas necesita? Estime cuadrados y paquetes para un techo con sus dimensiones, inclinación y desperdicio.",
    },
    "calculators/mantillo": {
      description: "Calcule yardas cúbicas de mantillo para camas de jardín usando área y profundidad. Incluya desperdicio y compare la cantidad con sacos opcionales.",
    },
    "calculators/grava": {
      description: "Calcule cuántas yardas cúbicas y toneladas de grava necesita para una entrada, sendero o jardín, según área, profundidad, densidad y desperdicio.",
    },
    "calculators/tierra-vegetal": {
      description: "Estime yardas cúbicas de tierra vegetal para césped o jardín a partir del área y la profundidad. Calculadora gratis con medidas métricas y US.",
    },
    "calculators/materiales-de-cerca": {
      description: "Estime postes, rieles y tablillas para una cerca recta de privacidad. Ingrese longitud, separación de postes y dimensiones de materiales.",
    },
    "calculators/tablas-de-deck": {
      description: "¿Cuántas tablas de deck necesita? Calcule cantidad con superficie, ancho, largo, separación entre tablas y margen de desperdicio.",
    },
    "calculators/papel-tapiz": {
      description: "Calcule cuántos rollos de papel tapiz necesita según perímetro y altura de muros. Incluya cobertura por rollo, repetición de patrón y desperdicio.",
    },
    "calculators/aislamiento": {
      description: "Estime paneles de aislamiento para paredes y áticos a partir de superficie, ancho de panel y desperdicio. Calculadora gratuita de materiales.",
    },
    "calculators/btu-hvac": {
      description: "Calcule BTU/h aproximados y tonelaje de aire acondicionado según tamaño de habitación y clima. Estimación preliminar; no sustituye un cálculo Manual J.",
    },
    "calculators/tamano-camion-mudanza": {
      description: "¿Qué tamaño de camión de mudanza necesita? Compare opciones según número de habitaciones o volumen de carga, de furgoneta a camión de 26 pies.",
    },
    "calculators/tamano-contenedor": {
      description: "Elija tamaño de contenedor para retiro de escombros de obra y limpieza. Compare capacidad según volumen estimado y tipo de proyecto.",
    },
    "calculators/pie-tablero": {
      description: "Calcule pies tablero de madera con grosor, ancho, largo y cantidad de piezas. Herramienta para presupuestar madera aserrada y carpintería.",
    },
    "calculators/pies-cuadrados": {
      description: "Calcule los pies cuadrados de varias habitaciones y obtenga el área total en unidades métricas o US para pisos, pintura y estimación de materiales.",
    },
    "calculators/volumen-habitacion": {
      description: "¿Cuántos pies cúbicos tiene una habitación? Calcule volumen en pies o metros cúbicos a partir del largo, ancho y alto del espacio.",
    },
    "calculators/margen-mano-obra": {
      description: "Calcule precio de venta desde costo de mano de obra y compare recargo (markup) con margen de ganancia. Herramienta de precios para contratistas.",
    },
    "calculators/costo-materiales": {
      description: "Sume cantidades y precios unitarios de materiales con impuesto opcional. Calculadora gratuita para elaborar listas de compras y costos de obra.",
    },
    "calculators/presupuesto-proyecto": {
      description: "Prepare un presupuesto de remodelación con materiales, mano de obra, permisos y contingencia. Calcule costos totales de su proyecto.",
    },
    glossary: {
      description: "Consulte el glosario de construcción: unidades de medida, materiales, cobertura, desperdicio y términos de estimación usados en nuestras calculadoras.",
    },
    contact: {
      description: "Escriba a BuildSiteCalc para sugerir mejoras, reportar errores en calculadoras, corregir datos o consultar colaboraciones y accesibilidad.",
    },
    methodology: {
      description: "Conozca cómo funcionan nuestras calculadoras: unidades, fórmulas, factores de desperdicio, redondeo, supuestos y límites de estimación para obras.",
    },
  },
};

export function getSeoMetadataOverride(locale: Locale, pathWithoutLocale: string): SeoMetadataOverride | undefined {
  return seoMetadataOverrides[locale][pathWithoutLocale.replace(/^\//, "")];
}
