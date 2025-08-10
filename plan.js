// plan.js
// IDs en minúsculas, sin tildes ni espacios; usa guiones.
// "requisitos": array de IDs (AND lógico — deben cumplirse TODOS).

window.PLAN_MALLA = {
  // ===== 1er CICLO =====
  "biologia":                     { nombre: "Biología", ciclo: 1, requisitos: [] },
  "humanismo-persona":            { nombre: "Humanismo y Persona", ciclo: 1, requisitos: [] },
  "lenguaje-pensamiento-i":       { nombre: "Lenguaje y Pensamiento I", ciclo: 1, requisitos: [] },
  "logica-matematica":            { nombre: "Lógica Matemática", ciclo: 1, requisitos: [] },
  "morfogenesis-i":               { nombre: "Morfogénesis I", ciclo: 1, requisitos: [] },
  "morfomacro-i":                 { nombre: "Morfomacro I", ciclo: 1, requisitos: [] },
  "morfomicro-i":                 { nombre: "Morfomicro I", ciclo: 1, requisitos: [] },

  // ===== 2do CICLO =====
  "ambiente-salud":               { nombre: "Ambiente y Salud", ciclo: 2, requisitos: [] },
  "bioquimica":                   { nombre: "Bioquímica", ciclo: 2, requisitos: [] },
  "epistemologia-medica":         { nombre: "Epistemología Médica", ciclo: 2, requisitos: [] },
  "fisiologia-i":                 { nombre: "Fisiología I", ciclo: 2, requisitos: ["biologia"] },
  "humanismo-sociedad":           { nombre: "Humanismo y Sociedad", ciclo: 2, requisitos: ["humanismo-persona"] },
  "lenguaje-pensamiento-ii":      { nombre: "Lenguaje y Pensamiento II", ciclo: 2, requisitos: ["lenguaje-pensamiento-i"] },
  "morfogenesis-ii":              { nombre: "Morfogénesis II", ciclo: 2, requisitos: ["morfogenesis-i"] },
  "morfomacro-ii":                { nombre: "Morfomacro II", ciclo: 2, requisitos: ["morfomacro-i"] },

  // *** Corrección clave que pediste: requiere 3 de 1er ciclo ***
  "morfomicro-ii":                { nombre: "Morfomicro II", ciclo: 2, requisitos: ["morfomicro-i","morfomacro-i","morfogenesis-i"] },

  // ===== 3er CICLO =====
  "atencion-primaria":            { nombre: "Atención Primaria de la Salud", ciclo: 3, requisitos: ["ambiente-salud"] },
  "competencias-digitales":       { nombre: "Competencias Digitales", ciclo: 3, requisitos: ["lenguaje-pensamiento-ii"] },
  "fisiologia-ii":                { nombre: "Fisiología II", ciclo: 3, requisitos: ["fisiologia-i", "bioquimica"] },
  "metodologia-investigacion-i":  { nombre: "Metodología de la Investigación I", ciclo: 3, requisitos: ["epistemologia-medica"] },
  "morfogenesis-iii":             { nombre: "Morfogénesis III", ciclo: 3, requisitos: ["morfogenesis-ii", "bioquimica"] },
  "morfomacro-iii":               { nombre: "Morfomacro III", ciclo: 3, requisitos: ["morfomacro-ii", "bioquimica"] },
  "morfomicro-iii":               { nombre: "Morfomicro III", ciclo: 3, requisitos: ["morfomicro-ii", "bioquimica"] },
  "psiconeurologia":              { nombre: "Psiconeurología", ciclo: 3, requisitos: ["bioquimica", "fisiologia-i"] },

  // ===== 4to CICLO =====
  "bioestadistica-i":             { nombre: "Bioestadística I", ciclo: 4, requisitos: ["logica-matematica", "competencias-digitales"] },
  "farmacologia-i":               { nombre: "Farmacología I", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"] },
  "fisiopatologia-i":             { nombre: "Fisiopatología I", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"] },
  "inmunologia":                  { nombre: "Inmunología", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"] },
  "medicina-preventiva":          { nombre: "Medicina Preventiva", ciclo: 4, requisitos: ["atencion-primaria", "fisiologia-ii", "ambiente-salud", "psiconeurologia"] },
  "microbiologia":                { nombre: "Microbiología", ciclo: 4, requisitos: ["morfomicro-iii", "atencion-primaria"] },
  "patologia-i":                  { nombre: "Patología I", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"] },
  "semiologia-i":                 { nombre: "Semiología I", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"] },

  // ===== 5to CICLO =====
  "culturas-contemporaneas":      { nombre: "Culturas Contemporáneas", ciclo: 5, requisitos: ["lenguaje-pensamiento-ii"] },
  "epidemiologia-i":              { nombre: "Epidemiología I", ciclo: 5, requisitos: ["bioestadistica-i", "medicina-preventiva"] },
  "farmacologia-ii":              { nombre: "Farmacología II", ciclo: 5, requisitos: ["farmacologia-i"] },
  "fisiopatologia-ii":            { nombre: "Fisiopatología II", ciclo: 5, requisitos: ["fisiopatologia-i"] },
  "parasitologia-micologia":      { nombre: "Parasitología y Micología", ciclo: 5, requisitos: ["microbiologia", "psiconeurologia"] },
  "patologia-ii":                 { nombre: "Patología II", ciclo: 5, requisitos: ["patologia-i", "fisiopatologia-i"] },
  "psicopatologia":               { nombre: "Psicopatología", ciclo: 5, requisitos: ["psiconeurologia"] },
  "semiologia-ii":                { nombre: "Semiología II", ciclo: 5, requisitos: ["patologia-i", "fisiopatologia-i", "farmacologia-i", "semiologia-i"] },

  // ===== 6to CICLO =====
  "bioestadistica-ii":            { nombre: "Bioestadística II", ciclo: 6, requisitos: ["epidemiologia-i"] },
  "clinica-i":                    { nombre: "Clínica I (y componentes)", ciclo: 6, requisitos: ["semiologia-ii", "patologia-ii", "fisiopatologia-ii", "farmacologia-ii"] },
  "etica-medica":                 { nombre: "Ética Médica", ciclo: 6, requisitos: ["culturas-contemporaneas"] },
  "historia-medicina":            { nombre: "Historia de la Medicina", ciclo: 6, requisitos: ["culturas-contemporaneas"] },
  "medicina-tropical":            { nombre: "Medicina Tropical", ciclo: 6, requisitos: ["parasitologia-micologia", "microbiologia", "patologia-ii", "fisiopatologia-ii", "farmacologia-ii", "semiologia-ii"] },
  "pediatria-i":                  { nombre: "Pediatría I", ciclo: 6, requisitos: ["clinica-i"] },

  // ===== 7mo CICLO =====
  "antropologia-medica":          { nombre: "Antropología Médica", ciclo: 7, requisitos: ["culturas-contemporaneas"] },
  "clinica-ii":                   { nombre: "Clínica II (y componentes)", ciclo: 7, requisitos: ["clinica-i"] },
  "genetica-clinica":             { nombre: "Genética Clínica", ciclo: 7, requisitos: ["pediatria-i"] },
  "ginecologia":                  { nombre: "Ginecología", ciclo: 7, requisitos: ["clinica-i"] },
  "informatica-medica":           { nombre: "Informática Médica", ciclo: 7, requisitos: ["clinica-i"] },
  "obstetricia":                  { nombre: "Obstetricia", ciclo: 7, requisitos: ["pediatria-i", "ginecologia", "clinica-ii"] },

  // ===== 8vo CICLO =====
  "clinica-iii":                  { nombre: "Clínica III (y componentes)", ciclo: 8, requisitos: ["clinica-ii"] },
  "diagnostico-imagenes-i":       { nombre: "Diagnóstico por Imágenes I", ciclo: 8, requisitos: ["epidemiologia-i"] },
  "epidemiologia-ii":             { nombre: "Epidemiología II", ciclo: 8, requisitos: ["epidemiologia-i", "bioestadistica-ii"] },
  "metodologia-investigacion-ii": { nombre: "Metodología de la Investigación II", ciclo: 8, requisitos: ["metodologia-investigacion-i", "informatica-medica"] },
  "pediatria-ii":                 { nombre: "Pediatría II", ciclo: 8, requisitos: ["pediatria-i", "genetica-clinica", "clinica-iii"] },

  // ===== 9no CICLO =====
  "clinica-iv":                   { nombre: "Clínica IV (y componentes)", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-quirurgica-i":         { nombre: "Clínica Quirúrgica I (y componentes)", ciclo: 9, requisitos: ["clinica-iii"] },
  "diagnostico-imagenes-ii":      { nombre: "Diagnóstico por Imágenes II", ciclo: 9, requisitos: ["diagnostico-imagenes-i"] },
  "psiquiatria":                  { nombre: "Psiquiatría", ciclo: 9, requisitos: ["psicopatologia"] },
  "tecnicas-quirurgicas":         { nombre: "Técnicas Quirúrgicas", ciclo: 9, requisitos: ["clinica-quirurgica-i"] },

  // ===== 10mo CICLO =====
  "adm-servicios-salud":          { nombre: "Administración de Servicios de Salud", ciclo: 10, requisitos: ["clinica-iii"] },
  "anestesiologia-reanimacion":   { nombre: "Anestesiología y Reanimación", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-ii":        { nombre: "Clínica Quirúrgica II (y componentes)", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "diseno-proyectos-investigacion": { nombre: "Diseño y Elaboración de Proyectos de Investigación", ciclo: 10, requisitos: ["metodologia-investigacion-ii"] },
  "legislacion-medica":           { nombre: "Legislación Médica", ciclo: 10, requisitos: ["tecnicas-quirurgicas"] },
  "urgencias-medicas":            { nombre: "Urgencias Médicas", ciclo: 10, requisitos: ["clinica-quirurgica-i"] }
};
