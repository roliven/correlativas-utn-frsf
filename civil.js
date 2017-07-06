cargarPlan(14, [
    // 1er año
    [{
        ord: 1, nombre: "Análisis Matemático I", horas: 5,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 2, nombre: "Álgebra y Geometría Analítica", horas: 5,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 3, nombre: "Ingenería y Sociedad", horas: 2,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 4, nombre: "Ingeniería Civil I", horas: 3,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 5, nombre: "Sistemas de Representación", horas: 3,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 6, nombre: "Química General", horas: 5,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 7, nombre: "Física I", horas: 5,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, {
        ord: 8, nombre: "Fundamentos de Informática", horas: 2,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }],
    // 2do año
    [{
        ord: 9, nombre: "Análisis Matemático II", horas: 5,
        cursadasParaCursar: [1,2], aprobadasParaCursar: [], aprobadasParaRendir: [1,2]
    }, {
        ord: 10, nombre: "Estabilidad", horas: 5,
        cursadasParaCursar: [1,2,7], aprobadasParaCursar: [], aprobadasParaRendir: [1,2,7]
    }, {
        ord: 11, nombre: "Ingeniería Civil II", horas: 3,
        cursadasParaCursar: [4,7], aprobadasParaCursar: [], aprobadasParaRendir: [4,5,7]
    }, {
        ord: 12, nombre: "Tecnología de los Materiales", horas: 4,
        cursadasParaCursar: [6,7], aprobadasParaCursar: [], aprobadasParaRendir: [6,7]
    }, {
        ord: 13, nombre: "Física II", horas: 5,
        cursadasParaCursar: [1,7], aprobadasParaCursar: [], aprobadasParaRendir: [1,7]
    }, {
        ord: 14, nombre: "Probabilidad y Estadística", horas: 3,
        cursadasParaCursar: [1,2], aprobadasParaCursar: [], aprobadasParaRendir: [1,2]
    }, {
        ord: 15, nombre: "Inglés I", horas: 2,
        cursadasParaCursar: [], aprobadasParaCursar: [], aprobadasParaRendir: []
    }, ],
    //3er año
    [{
        ord: 16, nombre: "Resistencia de los Materiales", horas: 4,
        cursadasParaCursar: [10], aprobadasParaCursar: [1,2,7], aprobadasParaRendir: [10]
    }, {
        ord: 17, nombre: "Tecnología del hormigón", horas: 2,
        cursadasParaCursar: [12,14], aprobadasParaCursar: [1,2,6,7], aprobadasParaRendir: [12,14]
    }, {
        ord: 18, nombre: "Tecnología de la Construcción", horas: 6,
        cursadasParaCursar: [10,11,12], aprobadasParaCursar: [1,2,4,6,7,8], aprobadasParaRendir: [10,11,12]
    }, {
        ord: 19, nombre: "Geotopografía", horas: 4,
        cursadasParaCursar: [9,13], aprobadasParaCursar: [1,2,7], aprobadasParaRendir: [9,13]
    }, {
        ord: 20, nombre: "Hidráulica General y Aplicada", horas: 5,
        cursadasParaCursar: [9,10], aprobadasParaCursar: [1,2,7], aprobadasParaRendir: [9,10]
    }, {
        ord: 21, nombre: "Cálculo Avanzado", horas: 2,
        cursadasParaCursar: [9], aprobadasParaCursar: [1,2], aprobadasParaRendir: [9]
    }, {
        ord: 22, nombre: "Instalaciones Eléctricas y Acústicas", horas: 2,
        cursadasParaCursar: [12,13], aprobadasParaCursar: [1,6,7], aprobadasParaRendir: [12,13]
    }, {
        ord: 23, nombre: "Instalaciones Termodinámicas", horas: 2,
        cursadasParaCursar: [12,13], aprobadasParaCursar: [1,6,7], aprobadasParaRendir: [12,13]
    }, {
        ord: 24, nombre: "Economía", horas: 3,
        cursadasParaCursar: [11], aprobadasParaCursar: [3], aprobadasParaRendir: [11]
    }, {
        ord: 25, nombre: "Inglés II", horas: 2,
        cursadasParaCursar: [15], aprobadasParaCursar: [], aprobadasParaRendir: [15]
    }],
    //4to año
    [{
        ord: 26, nombre: "Geotecnia", horas: 5,
        cursadasParaCursar: [16,18,20], aprobadasParaCursar: [9,10,11,12], aprobadasParaRendir: [16,18,20]
    }, {
        ord: 27, nombre: "Instalaciones Sanitarias y de Gas", horas: 3,
        cursadasParaCursar: [12,20], aprobadasParaCursar: [6,7,9,10], aprobadasParaRendir: [12,20]
    }, {
        ord: 28, nombre: "Diseño Arquitectónico, Planeamiento y Urbanismo", horas: 5,
        cursadasParaCursar: [18], aprobadasParaCursar: [10,11,12,15], aprobadasParaRendir: [18]
    }, {
        ord: 29, nombre: "Análisis Estructural I", horas: 5,
        cursadasParaCursar: [11,16], aprobadasParaCursar: [4,7,10], aprobadasParaRendir: [11,16]
    }, {
        ord: 30, nombre: "Estructuras de Hormigón", horas: 5,
        cursadasParaCursar: [16,17,18], aprobadasParaCursar: [10,11,12,14], aprobadasParaRendir: [16,17,18]
    }, {
        ord: 31, nombre: "Hidrología y Obras Hidráulicas", horas: 4,
        cursadasParaCursar: [18,19,20], aprobadasParaCursar: [9,10,11,12,13], aprobadasParaRendir: [18,19,20]
    }, {
        ord: 32, nombre: "Ingeniería Legal", horas: 3,
        cursadasParaCursar: [11], aprobadasParaCursar: [3], aprobadasParaRendir: [11]
    }],
    //5to año
    [{
        ord: 33, nombre: "Construcciones Metálicas y de Madera", horas: 4,
        cursadasParaCursar: [29], aprobadasParaCursar: [11,16], aprobadasParaRendir: [29]
    }, {
        ord: 34, nombre: "Cimentaciones", horas: 3,
        cursadasParaCursar: [26,30], aprobadasParaCursar: [16,17,18,20], aprobadasParaRendir: [26,30]
    }, {
        ord: 35, nombre: "Ingeniería Sanitaria", horas: 3,
        cursadasParaCursar: [31], aprobadasParaCursar: [18,19,20], aprobadasParaRendir: [31]
    }, {
        ord: 36, nombre: "Organización y Conducción de Obras", horas: 5,
        cursadasParaCursar: [22,23,24,27,28,30], aprobadasParaCursar: [11,16,18,20,25], aprobadasParaRendir: [22,23,24,27,28,30]
    }, {
        ord: 37, nombre: "Vías de Comunicación I", horas: 4,
        cursadasParaCursar: [19], aprobadasParaCursar: [9,13], aprobadasParaRendir: [19]
    }, {
        ord: 38, nombre: "Análisis Estructural II", horas: 5,
        cursadasParaCursar: [29,30], aprobadasParaCursar: [16,17,18,21], aprobadasParaRendir: [29,30]
    }, {
        ord: 39, nombre: "Vías de Comunicación II", horas: 4,
        cursadasParaCursar: [19], aprobadasParaCursar: [9,13], aprobadasParaRendir: [19]
    }, {
        ord: 40, nombre: "Proyecto Final Pt. 1", horas: 2,
        cursadasParaCursar: [28,30,31,32], aprobadasParaCursar: [11,14,16,18,20,21], aprobadasParaRendir: [28,30,31,32]
    }],
    //6to año
    [{
        ord: 41, nombre: "Proyecto Final Pt. 2", horas: 2,
        cursadasParaCursar: [28,30,31,32], aprobadasParaCursar: [11,14,16,18,20,21], aprobadasParaRendir: [28,30,31,32]
    }]
]);