const PLAN_MALLA = {
  // ===== I CICLO =====
  "biologia": { nombre: "BIOLOGÍA", ciclo: 1, requisitos: [], abre: ["bioquimica", "fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "morfomicro-ii"] },
  "humanismo-persona": { nombre: "HUMANISMO Y PERSONA", ciclo: 1, requisitos: [], abre: ["humanismo-sociedad"] },
  "lenguaje-pensamiento-i": { nombre: "LENGUAJE Y PENSAMIENTO I", ciclo: 1, requisitos: [], abre: ["lenguaje-pensamiento-ii"] },
  "logica-matematica": { nombre: "LÓGICA MATEMÁTICA", ciclo: 1, requisitos: [], abre: ["ambiente-salud", "bioestadistica-i", "epistemologia-medica"] },
  "morfogenesis-i": { nombre: "MORFO GÉNESIS I", ciclo: 1, requisitos: [], abre: ["bioquimica", "fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "morfomicro-ii"] },
  "morfomacro-i": { nombre: "MORFO MACRO I", ciclo: 1, requisitos: [], abre: ["bioquimica", "fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "morfomicro-ii"] },
  "morfomicro-i": { nombre: "MORFO MICRO I", ciclo: 1, requisitos: [], abre: ["bioquimica", "fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "morfomicro-ii"] },

  // ===== II CICLO =====
  "ambiente-salud": { nombre: "AMBIENTE Y SALUD", ciclo: 2, requisitos: ["logica-matematica"], abre: ["atencion-primaria-salud", "medicina-preventiva"] },
  "bioquimica": { nombre: "BIOQUÍMICA", ciclo: 2, requisitos: ["morfogenesis-i", "morfomacro-i", "biologia", "morfomicro-i"], abre: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii", "psiconeurologia"] },
  "epistemologia-medica": { nombre: "EPISTEMOLOGÍA MÉDICA", ciclo: 2, requisitos: ["logica-matematica"], abre: ["metodologia-investigacion-i"] },
  "fisiologia-i": { nombre: "FISIOLOGÍA I", ciclo: 2, requisitos: ["biologia", "morfomicro-i", "morfomacro-i", "morfogenesis-i"], abre: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii", "psiconeurologia"] },
  "humanismo-sociedad": { nombre: "HUMANISMO Y SOCIEDAD", ciclo: 2, requisitos: ["humanismo-persona"], abre: [] },
  "lenguaje-pensamiento-ii": { nombre: "LENGUAJE Y PENSAMIENTO II", ciclo: 2, requisitos: ["lenguaje-pensamiento-i"], abre: ["culturas-contemporaneas", "competencias-digitales"] },
  "morfogenesis-ii": { nombre: "MORFO GÉNESIS II", ciclo: 2, requisitos: ["morfomicro-i", "morfogenesis-i", "biologia", "morfomacro-i"], abre: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii", "psiconeurologia"] },
  "morfomacro-ii": { nombre: "MORFO MACRO II", ciclo: 2, requisitos: ["morfomacro-i", "morfomicro-i", "biologia", "morfogenesis-i"], abre: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii", "psiconeurologia"] },
  "morfomicro-ii": { nombre: "MORFO MICRO II", ciclo: 2, requisitos: ["morfomicro-i", "morfogenesis-i", "morfomacro-i", "biologia"], abre: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii", "psiconeurologia"] },

  // ===== III CICLO =====
  "atencion-primaria-salud": { nombre: "ATENCIÓN PRIMARIA DE SALUD", ciclo: 3, requisitos: ["ambiente-salud"], abre: ["microbiologia", "medicina-preventiva"] },
  "competencias-digitales": { nombre: "COMPETENCIAS DIGITALES", ciclo: 3, requisitos: ["lenguaje-pensamiento-ii"], abre: ["bioestadistica-i"] },
  "fisiologia-ii": { nombre: "FISIOLOGÍA II", ciclo: 3, requisitos: ["bioquimica", "fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "morfomicro-ii"], abre: ["farmacologia-i", "fisiopatologia-i", "inmunologia", "microbiologia", "patologia-i", "semiologia-i", "medicina-preventiva"] },
  "metodologia-investigacion-i": { nombre: "METODOLOGÍA DE LA INVESTIGACION I", ciclo: 3, requisitos: ["epistemologia-medica"], abre: ["metodologia-investigacion-ii"] },
  "morfogenesis-iii": { nombre: "MORFO GÉNESIS III", ciclo: 3, requisitos: ["fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "bioquimica", "morfomicro-ii"], abre: ["farmacologia-i", "fisiopatologia-i", "inmunologia", "microbiologia", "patologia-i", "semiologia-i"] },
  "morfomacro-iii": { nombre: "MORFO MACRO III", ciclo: 3, requisitos: ["morfomacro-ii", "morfogenesis-ii", "fisiologia-i", "bioquimica", "morfomicro-ii"], abre: ["farmacologia-i", "fisiopatologia-i", "inmunologia", "microbiologia", "patologia-i", "semiologia-i"] },
  "morfomicro-iii": { nombre: "MORFO MICRO III", ciclo: 3, requisitos: ["bioquimica", "fisiologia-i", "morfogenesis-ii", "morfomacro-ii", "morfomicro-ii"], abre: ["farmacologia-i", "fisiopatologia-i", "inmunologia", "microbiologia", "patologia-i", "semiologia-i"] },
  "psiconeurologia": { nombre: "PSICONEUROLOGÍA", ciclo: 3, requisitos: ["morfomacro-ii", "morfogenesis-ii", "fisiologia-i", "bioquimica", "morfomicro-ii"], abre: ["medicina-preventiva", "psicopatologia"] },

  // ===== IV CICLO =====
  "bioestadistica-i": { nombre: "BIOESTADÍSTICA I", ciclo: 4, requisitos: ["competencias-digitales", "logica-matematica"], abre: ["epidemiologia-i"] },
  "farmacologia-i": { nombre: "FARMACOLOGÍA I", ciclo: 4, requisitos: ["morfomicro-iii", "fisiologia-ii", "morfogenesis-iii", "morfomacro-iii"], abre: ["farmacologia-ii", "fisiopatologia-ii", "parasitologia-micologia", "patologia-ii", "semiologia-ii"] },
  "fisiopatologia-i": { nombre: "FISIOPATOLOGÍA I", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"], abre: ["farmacologia-ii", "fisiopatologia-ii", "parasitologia-micologia", "patologia-ii", "semiologia-ii"] },
  "inmunologia": { nombre: "INMUNOLOGÍA", ciclo: 4, requisitos: ["morfomicro-iii", "morfomacro-iii", "morfogenesis-iii", "fisiologia-ii"], abre: ["medicina-tropical"] },
  "medicina-preventiva": { nombre: "MEDICINA PREVENTIVA", ciclo: 4, requisitos: ["atencion-primaria-salud", "fisiologia-ii", "ambiente-salud", "psiconeurologia"], abre: ["epidemiologia-i"] },
  "microbiologia": { nombre: "MICROBIOLOGÍA", ciclo: 4, requisitos: ["morfomicro-iii", "atencion-primaria-salud", "fisiologia-ii", "morfogenesis-iii", "morfomacro-iii"], abre: ["parasitologia-micologia"] },
  "patologia-i": { nombre: "PATOLOGÍA I", ciclo: 4, requisitos: ["morfogenesis-iii", "morfomacro-iii", "morfomicro-iii", "fisiologia-ii"], abre: ["fisiopatologia-ii", "patologia-ii", "semiologia-ii", "clinica-i"] },
  "semiologia-i": { nombre: "SEMIOLOGÍA I", ciclo: 4, requisitos: ["fisiologia-ii", "morfogenesis-iii", "morfomacro-iii", "morfomicro-iii"], abre: ["semiologia-ii", "clinica-i"] },

  // ===== V CICLO =====
  "culturas-contemporaneas": { nombre: "CULTURAS CONTEMPORÁNEAS", ciclo: 5, requisitos: ["lenguaje-pensamiento-ii"], abre: ["etica-medica", "antropologia-medica"] },
  "epidemiologia-i": { nombre: "EPIDEMIOLOGÍA I", ciclo: 5, requisitos: ["bioestadistica-i", "medicina-preventiva"], abre: ["epidemiologia-ii", "diagnostico-imagenes-i"] },
  "farmacologia-ii": { nombre: "FARMACOLOGÍA II", ciclo: 5, requisitos: ["farmacologia-i"], abre: ["clinica-i", "clinica-ii", "semiologia-ii"] },
  "fisiopatologia-ii": { nombre: "FISIOPATOLOGÍA II", ciclo: 5, requisitos: ["fisiopatologia-i"], abre: ["clinica-i", "clinica-ii", "semiologia-ii", "patologia-ii"] },
  "parasitologia-micologia": { nombre: "PARASITOLOGIA Y MICOLOGIA", ciclo: 5, requisitos: ["semiologia-ii", "patologia-ii", "fisiopatologia-ii", "microbiologia"], abre: ["medicina-tropical"] },
  "patologia-ii": { nombre: "PATOLOGÍA II", ciclo: 5, requisitos: ["patologia-i", "fisiopatologia-i"], abre: ["clinica-i", "clinica-ii", "semiologia-ii"] },
  "psicopatologia": { nombre: "PSICOPATOLOGIA", ciclo: 5, requisitos: ["psiconeurologia"], abre: ["parasitologia-micologia", "psiquiatria"] },
  "semiologia-ii": { nombre: "SEMIOLOGÍA II", ciclo: 5, requisitos: ["patologia-i", "fisiopatologia-i", "farmacologia-i", "semiologia-i"], abre: ["clinica-i", "clinica-ii", "pediatria-i", "ginecologia", "medicina-tropical"] },

  // ===== VI CICLO =====
  "bioestadistica-ii": { nombre: "BIOESTADÍSTICA II", ciclo: 6, requisitos: ["epidemiologia-i"], abre: ["epidemiologia-ii"] },
  "clinica-i": { nombre: "CLINICA I", ciclo: 6, requisitos: ["semiologia-ii", "patologia-ii", "fisiopatologia-ii", "farmacologia-ii"], abre: ["clinica-ii", "pediatria-i", "ginecologia", "informatica-medica", "obstetricia"] },
  "etica-medica": { nombre: "ÉTICA MÉDICA", ciclo: 6, requisitos: ["culturas-contemporaneas"], abre: [] },
  "historia-medicina": { nombre: "HISTORIA DE LA MEDICINA", ciclo: 6, requisitos: ["culturas-contemporaneas"], abre: [] },
  "medicina-tropical": { nombre: "MEDICINA TROPICAL", ciclo: 6, requisitos: ["parasitologia-micologia", "microbiologia", "patologia-ii", "fisiopatologia-ii", "farmacologia-ii", "semiologia-ii"], abre: [] },
  "pediatria-i": { nombre: "PEDIATRÍA I", ciclo: 6, requisitos: ["patologia-ii", "fisiopatologia-ii", "farmacologia-ii", "semiologia-ii"], abre: ["pediatria-ii", "genetica-clinica"] },

  // ===== VII CICLO =====
  "antropologia-medica": { nombre: "ANTROPOLOGÍA MÉDICA", ciclo: 7, requisitos: ["culturas-contemporaneas"], abre: [] },
  "clinica-ii": { nombre: "CLINICA II", ciclo: 7, requisitos: ["clinica-i"], abre: ["clinica-iii", "obstetricia", "ginecologia", "pediatria-ii"] },
  "genetica-clinica": { nombre: "GENETICA CLINICA", ciclo: 7, requisitos: ["pediatria-i"], abre: ["pediatria-ii"] },
  "ginecologia": { nombre: "GINECOLOGÍA", ciclo: 7, requisitos: ["clinica-i"], abre: ["obstetricia"] },
  "informatica-medica": { nombre: "INFORMÁTICA MÉDICA", ciclo: 7, requisitos: ["clinica-i"], abre: ["metodologia-investigacion-ii"] },
  "obstetricia": { nombre: "OBSTETRICIA", ciclo: 7, requisitos: ["clinica-i", "pediatria-i"], abre: [] },

  // ===== VIII CICLO =====
  "clinica-iii": { nombre: "CLINICA III", ciclo: 8, requisitos: ["clinica-ii"], abre: ["clinica-iv", "pediatria-ii", "diagnostico-imagenes-i", "administracion-servicios-salud"] },
  "diagnostico-imagenes-i": { nombre: "DIAGNOSTICO POR IMÁGENES I", ciclo: 8, requisitos: ["epidemiologia-i"], abre: ["diagnostico-imagenes-ii"] },
  "epidemiologia-ii": { nombre: "EPIDEMIOLOGÍA II", ciclo: 8, requisitos: ["epidemiologia-i", "bioestadistica-ii"], abre: [] },
  "metodologia-investigacion-ii": { nombre: "METODOLOGÍA DE LA INVESTIGACION II", ciclo: 8, requisitos: ["metodologia-investigacion-i", "informatica-medica"], abre: ["diseno-proyectos-investigacion"] },
  "pediatria-ii": { nombre: "PEDIATRIA II", ciclo: 8, requisitos: ["pediatria-i", "genetica-clinica"], abre: [] },

  // ===== IX CICLO =====
  "clinica-iv": { nombre: "CLÍNICA IV", ciclo: 9, requisitos: ["clinica-iii"], abre: ["clinica-quirurgica-i"] },
  "clinica-quirurgica-i": { nombre: "CLÍNICA QUIRÚRGICA I", ciclo: 9, requisitos: ["clinica-iii"], abre: ["clinica-quirurgica-ii", "urgencias-medicas", "anestesiologia-reanimacion", "legislacion-medica", "tecnicas-quirurgicas"] },
  "diagnostico-imagenes-ii": { nombre: "DIAGNOSTICO POR IMÁGENES II", ciclo: 9, requisitos: ["diagnostico-imagenes-i"], abre: [] },
  "psiquiatria": { nombre: "PSIQUIATRÍA", ciclo: 9, requisitos: ["psicopatologia"], abre: [] },
  "tecnicas-quirurgicas": { nombre: "TÉCNICAS QUIRÚRGICAS", ciclo: 9, requisitos: ["clinica-iii"], abre: ["legislacion-medica"] },

  // ===== X CICLO =====
  "administracion-servicios-salud": { nombre: "ADMINISTRACIÓN DE SERVICIOS DE SALUD", ciclo: 10, requisitos: ["clinica-iii"], abre: [] },
  "anestesiologia-reanimacion": { nombre: "ANESTESIOLOGÍA Y REANIMACIÓN", ciclo: 10, requisitos: ["clinica-quirurgica-i"], abre: [] },
  "clinica-quirurgica-ii": { nombre: "CLÍNICA QUIRÚRGICA II", ciclo: 10, requisitos: ["clinica-quirurg
