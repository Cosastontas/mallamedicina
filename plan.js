// plan.js
// IDs en minúsculas, sin tildes ni espacios; usa guiones.
// "requisitos": array de IDs → AND lógico (deben cumplirse TODOS).

window.PLAN_MALLA = {
  // ===== I CICLO =====
  "biologia":                   { nombre: "BIOLOGÍA", ciclo: 1, requisitos: [] },
  "humanismo-persona":          { nombre: "HUMANISMO Y PERSONA", ciclo: 1, requisitos: [] },
  "lenguaje-pensamiento-i":     { nombre: "LENGUAJE Y PENSAMIENTO I", ciclo: 1, requisitos: [] },
  "logica-matematica":          { nombre: "LÓGICA MATEMÁTICA", ciclo: 1, requisitos: [] },
  "morfogenesis-i":             { nombre: "MORFO GÉNESIS I", ciclo: 1, requisitos: [] },
  "morfomacro-i":               { nombre: "MORFO MACRO I", ciclo: 1, requisitos: [] },
  "morfomicro-i":               { nombre: "MORFO MICRO I", ciclo: 1, requisitos: [] },

  // ===== II CICLO =====
  "ambiente-salud":             { nombre: "AMBIENTE Y SALUD", ciclo: 2, requisitos: ["logica-matematica"] },
  "bioquimica":                 { nombre: "BIOQUÍMICA", ciclo: 2, requisitos: ["morfogenesis-i","morfomacro-i","biologia","morfomicro-i"] },
  "epistemologia-medica":       { nombre: "EPISTEMOLOGÍA MÉDICA", ciclo: 2, requisitos: ["logica-matematica"] },
  "fisiologia-i":               { nombre: "FISIOLOGÍA I", ciclo: 2, requisitos: ["biologia","morfomicro-i","morfomacro-i","morfogenesis-i"] },
  "humanismo-sociedad":         { nombre: "HUMANISMO Y SOCIEDAD", ciclo: 2, requisitos: ["humanismo-persona"] },
  "lenguaje-pensamiento-ii":    { nombre: "LENGUAJE Y PENSAMIENTO II", ciclo: 2, requisitos: ["lenguaje-pensamiento-i"] },
  "morfogenesis-ii":            { nombre: "MORFO GÉNESIS II", ciclo: 2, requisitos: ["morfomicro-i","morfogenesis-i","biologia","morfomacro-i"] },
  "morfomacro-ii":              { nombre: "MORFO MACRO II", ciclo: 2, requisitos: ["morfomacro-i","morfomicro-i","biologia","morfogenesis-i"] },
  "morfomicro-ii":              { nombre: "MORFO MICRO II", ciclo: 2, requisitos: ["morfomicro-i","morfogenesis-i","morfomacro-i","biologia"] },

  // ===== III CICLO =====
  "atencion-primaria":          { nombre: "ATENCIÓN PRIMARIA DE SALUD", ciclo: 3, requisitos: ["ambiente-salud"] },
  "competencias-digitales":     { nombre: "COMPETENCIAS DIGITALES", ciclo: 3, requisitos: ["lenguaje-pensamiento-ii"] },
  "fisiologia-ii":              { nombre: "FISIOLOGÍA II", ciclo: 3, requisitos: ["bioquimica","fisiologia-i","morfogenesis-ii","morfomacro-ii","morfomicro-ii"] },
  "metodologia-investigacion-i":{ nombre: "METODOLOGÍA DE LA INVESTIGACION I", ciclo: 3, requisitos: ["epistemologia-medica"] },
  "morfogenesis-iii":           { nombre: "MORFO GÉNESIS III", ciclo: 3, requisitos: ["fisiologia-i","morfogenesis-ii","morfomacro-ii","bioquimica","morfomicro-ii"] },
  "morfomacro-iii":             { nombre: "MORFO MACRO III", ciclo: 3, requisitos: ["morfomacro-ii","morfogenesis-ii","fisiologia-i","bioquimica","morfomicro-ii"] },
  "morfomicro-iii":             { nombre: "MORFO MICRO III", ciclo: 3, requisitos: ["bioquimica","fisiologia-i","morfogenesis-ii","morfomacro-ii","morfomicro-ii"] },
  "psiconeurologia":            { nombre: "PSICONEUROLOGÍA", ciclo: 3, requisitos: ["morfomacro-ii","morfogenesis-ii","fisiologia-i","bioquimica","morfomicro-ii"] },

  // ===== IV CICLO =====
  "bioestadistica-i":           { nombre: "BIOESTADÍSTICA I", ciclo: 4, requisitos: ["competencias-digitales","logica-matematica"] },
  "farmacologia-i":             { nombre: "FARMACOLOGÍA I", ciclo: 4, requisitos: ["morfomicro-iii","fisiologia-ii","morfogenesis-iii","morfomacro-iii"] },
  "fisiopatologia-i":           { nombre: "FISIOPATOLOGÍA I", ciclo: 4, requisitos: ["fisiologia-ii","morfogenesis-iii","morfomacro-iii","morfomicro-iii"] },
  "inmunologia":                { nombre: "INMUNOLOGÍA", ciclo: 4, requisitos: ["morfomicro-iii","morfomacro-iii","morfogenesis-iii","fisiologia-ii"] },
  "medicina-preventiva":        { nombre: "MEDICINA PREVENTIVA", ciclo: 4, requisitos: ["atencion-primaria","fisiologia-ii","ambiente-salud","psiconeurologia"] },
  "microbiologia":              { nombre: "MICROBIOLOGÍA", ciclo: 4, requisitos: ["morfomicro-iii","atencion-primaria","fisiologia-ii","morfogenesis-iii","morfomacro-iii"] },
  "patologia-i":                { nombre: "PATOLOGÍA I", ciclo: 4, requisitos: ["morfogenesis-iii","morfomacro-iii","morfomicro-iii","fisiologia-ii"] },
  "semiologia-i":               { nombre: "SEMIOLOGÍA I", ciclo: 4, requisitos: ["fisiologia-ii","morfogenesis-iii","morfomacro-iii","morfomicro-iii"] },

  // ===== V CICLO =====
  "culturas-contemporaneas":    { nombre: "CULTURAS CONTEMPORÁNEAS", ciclo: 5, requisitos: ["lenguaje-pensamiento-ii"] },
  "epidemiologia-i":            { nombre: "EPIDEMIOLOGÍA I", ciclo: 5, requisitos: ["bioestadistica-i","medicina-preventiva"] },
  "farmacologia-ii":            { nombre: "FARMACOLOGÍA II", ciclo: 5, requisitos: ["farmacologia-i"] },
  "fisiopatologia-ii":          { nombre: "FISIOPATOLOGÍA II", ciclo: 5, requisitos: ["fisiopatologia-i"] },
  "parasitologia-micologia":    { nombre: "PARASITOLOGIA Y MICOLOGIA", ciclo: 5, requisitos: ["semiologia-ii","patologia-ii","fisiopatologia-ii","microbiologia"] },
  "patologia-ii":               { nombre: "PATOLOGÍA II", ciclo: 5, requisitos: ["patologia-i","fisiopatologia-i"] },
  "psicopatologia":             { nombre: "PSICOPATOLOGIA", ciclo: 5, requisitos: ["psiconeurologia"] },
  "semiologia-ii":              { nombre: "SEMIOLOGÍA II", ciclo: 5, requisitos: ["patologia-i","fisiopatologia-i","farmacologia-i","semiologia-i"] },

  // ===== VI CICLO =====
  "bioestadistica-ii":          { nombre: "BIOESTADÍSTICA II", ciclo: 6, requisitos: ["epidemiologia-i"] },
  "clinica-i":                  { nombre: "CLINICA I", ciclo: 6, requisitos: ["semiologia-ii","patologia-ii","fisiopatologia-ii","farmacologia-ii"] },
  "clinica-i-cardiologia":      { nombre: "CLÍNICA I: COMPONENTE CARDIOLOGÍA", ciclo: 6, requisitos: ["semiologia-ii","patologia-ii","fisiopatologia-ii","farmacologia-ii"] },
  "clinica-i-practica":         { nombre: "CLÍNICA I: COMPONENTE CLÍNICA I - PRÁCTICA", ciclo: 6, requisitos: ["semiologia-ii","patologia-ii","fisiopatologia-ii","farmacologia-ii"] },
  "clinica-i-neumologia":       { nombre: "CLÍNICA I: COMPONENTE NEUMOLOGÍA", ciclo: 6, requisitos: ["semiologia-ii","patologia-ii","fisiopatologia-ii","farmacologia-ii"] },
  "etica-medica":               { nombre: "ÉTICA MÉDICA", ciclo: 6, requisitos: ["culturas-contemporaneas"] },
  "historia-medicina":          { nombre: "HISTORIA DE LA MEDICINA", ciclo: 6, requisitos: ["culturas-contemporaneas"] },
  "medicina-tropical":          { nombre: "MEDICINA TROPICAL", ciclo: 6, requisitos: ["parasitologia-micologia","microbiologia","patologia-ii","fisiopatologia-ii","farmacologia-ii","semiologia-ii"] },
  "pediatria-i":                { nombre: "PEDIATRÍA I", ciclo: 6, requisitos: ["patologia-ii","fisiopatologia-ii","farmacologia-ii","semiologia-ii"] },

  // ===== VII CICLO =====
  "antropologia-medica":        { nombre: "ANTROPOLOGÍA MÉDICA", ciclo: 7, requisitos: ["culturas-contemporaneas"] },
  "clinica-ii":                 { nombre: "CLINICA II", ciclo: 7, requisitos: ["clinica-i"] },
  "clinica-ii-dermatologia":    { nombre: "CLINICA II: COMPONENTE DERMATOLOGÍA", ciclo: 7, requisitos: ["clinica-i"] },
  "clinica-ii-gastroenterologia":{ nombre: "CLINICA II: COMPONENTE GASTROENTEROLOGÍA", ciclo: 7, requisitos: ["clinica-i"] },
  "clinica-ii-nutricion":       { nombre: "CLINICA II: COMPONENTE NUTRICIÓN", ciclo: 7, requisitos: ["clinica-i"] },
  "clinica-ii-practica":        { nombre: "CLINICA II: COMPONENTE PRÁCTICA", ciclo: 7, requisitos: ["clinica-i"] },
  "genetica-clinica":           { nombre: "GENETICA CLINICA", ciclo: 7, requisitos: ["pediatria-i"] },
  "ginecologia":                { nombre: "GINECOLOGÍA", ciclo: 7, requisitos: ["clinica-i"] },
  "informatica-medica":         { nombre: "INFORMÁTICA MÉDICA", ciclo: 7, requisitos: ["clinica-i"] },
  "obstetricia":                { nombre: "OBSTETRICIA", ciclo: 7, requisitos: ["clinica-i","pediatria-i"] },

  // ===== VIII CICLO =====
  "clinica-iii":                { nombre: "CLINICA III", ciclo: 8, requisitos: ["clinica-ii"] },
  "clinica-iii-endocrinologia": { nombre: "CLÍNICA III: COMPONENTE ENDOCRINOLOGÍA", ciclo: 8, requisitos: ["clinica-ii"] },
  "clinica-iii-hematologia-oncologia": { nombre: "CLÍNICA III: COMPONENTE HEMATOLOGÍA - ONCOLOGÍA", ciclo: 8, requisitos: ["clinica-ii"] },
  "clinica-iii-nefrologia":     { nombre: "CLÍNICA III: COMPONENTE NEFROLOGÍA", ciclo: 8, requisitos: ["clinica-ii"] },
  "clinica-iii-practica":       { nombre: "CLÍNICA III: COMPONENTE PRÁCTICA", ciclo: 8, requisitos: ["clinica-ii"] },
  "diagnostico-imagenes-i":     { nombre: "DIAGNOSTICO POR IMÁGENES I", ciclo: 8, requisitos: ["epidemiologia-i"] },
  "epidemiologia-ii":           { nombre: "EPIDEMIOLOGÍA II", ciclo: 8, requisitos: ["epidemiologia-i","bioestadistica-ii"] },
  "metodologia-investigacion-ii":{ nombre: "METODOLOGÍA DE LA INVESTIGACION II", ciclo: 8, requisitos: ["metodologia-investigacion-i","informatica-medica"] },
  "pediatria-ii":               { nombre: "PEDIATRIA II", ciclo: 8, requisitos: ["pediatria-i","genetica-clinica"] },

  // ===== IX CICLO =====
  "clinica-iv":                 { nombre: "CLÍNICA IV", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-iv-geriatria":       { nombre: "CLÍNICA IV: COMPONENTE GERIATRÍA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-iv-neurologia":      { nombre: "CLÍNICA IV: COMPONENTE NEUROLOGÍA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-iv-practica":        { nombre: "CLÍNICA IV: COMPONENTE PRÁCTICA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-iv-reumatologia":    { nombre: "CLÍNICA IV: COMPONENTE REUMATOLOGÍA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-quirurgica-i-otorrino-practica": { nombre: "CLÍNICA QUIRÚRGICA I: COMPONENTE OTORRINOLARINGOLOGIA PRÁCTICA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-quirurgica-i-otorrino-teoria":   { nombre: "CLÍNICA QUIRÚRGICA I: COMPONENTE OTORRINOLARINGOLOGIA TEORÍA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-quirurgica-i-trauma-practica":   { nombre: "CLÍNICA QUIRÚRGICA I: COMPONENTE TRAUMATOLOGÍA PRÁCTICA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-quirurgica-i-trauma-teoria":     { nombre: "CLÍNICA QUIRÚRGICA I: COMPONENTE TRAUMATOLOGÍA TEORÍA", ciclo: 9, requisitos: ["clinica-iii"] },
  "clinica-quirurgica-i":       { nombre: "CLÍNICA QUIRÚRGICA I", ciclo: 9, requisitos: ["clinica-iii"] },
  "diagnostico-imagenes-ii":    { nombre: "DIAGNOSTICO POR IMÁGENES II", ciclo: 9, requisitos: ["diagnostico-imagenes-i"] },
  "psiquiatria":                { nombre: "PSIQUIATRÍA", ciclo: 9, requisitos: ["psicopatologia"] },
  "tecnicas-quirurgicas":       { nombre: "TÉCNICAS QUIRÚRGICAS", ciclo: 9, requisitos: ["clinica-iii"] },

  // ===== X CICLO =====
  "administracion-servicios-salud": { nombre: "ADMINISTRACIÓN DE SERVICIOS DE SALUD", ciclo: 10, requisitos: ["clinica-iii"] },
  "anestesiologia-reanimacion": { nombre: "ANESTESIOLOGÍA Y REANIMACIÓN", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-ii":      { nombre: "CLÍNICA QUIRÚRGICA II", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-ii-oftalmo-practica":{ nombre: "CLÍNICA QUIRÚRGICA II: COMPONENTE OFTALMOLOGÍA PRÁCTICA", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-ii-oftalmo-teoria":  { nombre: "CLÍNICA QUIRÚRGICA II: COMPONENTE OFTALMOLOGÍA TEORIA", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-ii-urologia-practica":{ nombre: "CLÍNICA QUIRÚRGICA II: COMPONENTE UROLOGÍA PRÁCTICA", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-ii-urologia-teoria": { nombre: "CLÍNICA QUIRÚRGICA II: COMPONENTE UROLOGÍA TEORÍA", ciclo: 10, requisitos: ["clinica-quirurgica-i"] },
  "diseno-proyectos-investigacion": { nombre: "DISEÑO Y ELABORACIÓN DE PROYECTOS DE INVESTIGACIÓN", ciclo: 10, requisitos: ["metodologia-investigacion-ii"] },
  "legislacion-medica":         { nombre: "LEGISLACION MEDICA", ciclo: 10, requisitos: ["tecnicas-quirurgicas"] },
  "urgencias-medicas":          { nombre: "URGENCIAS MÉDICAS", ciclo: 10, requisitos: ["clinica-quirurgica-i"] }
};
