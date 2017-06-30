
//statusData
var estados = ['m-nocursada', 'm-cursada', 'm-aprobada'];
var estadosDOM = ['(no cursada)', '(regular)', '(aprobada)'];
var condiciones = ['m-nocursable', 'm-cursable', 'm-aprobable'];

//variables
var materias = new Array();
var horasObligatoriasTotales = 0;
var horasObligatoriasActuales = 0;
var horasElectivasTotales = 0;
var horasElectivasActuales = 0;
var horasCursadas = 0;
var materiasAprobadas = 0;
var excepcion;

$(document).ready(function() {
    if (!localStorage.getItem("co-materias")) {
        if (window.location.hash) {
            var nomPlan = window.location.hash.substring(1);
        } else {
            var nomPlan = "isi08";
            // var nomPlan = "mec";
        }
        var script = document.createElement('script');
        script.src = nomPlan+".js";
        document.body.appendChild(script);
    } else {
        cargarLocal();
    }
});

function cargarLocal() {
    horasElectivasTotales = parseInt(localStorage.getItem("co-elect"));
    materias = JSON.parse(localStorage.getItem("co-materias"));
    var electivas;

    for (var materia of materias){
        if(materia !== null && materia !== undefined){
            horasObligatoriasTotales += materia.horas;
            if(materia.estado > 0){
                horasCursadas += materia.horas;
                if(materia.estado === 2){
                    horasObligatoriasActuales += materia.horas;
                    materiasAprobadas++;
                }
            }
        }
    }

    iniciar();
    excepcion.checked = ("true" == localStorage.getItem("co-excepcion"));
    electivas = JSON.parse(localStorage.getItem("co-electivas"));

    var i = 0;
    while (i < electivas.length)
        crearElectiva(electivas[i++], electivas[i++]);
}

function cargarPlan(hrsElectivas, plan) {
    horasElectivasTotales = hrsElectivas;
    for (var i=0; i<plan.length; i++) {
        for (var j=0; j<plan[i].length; j++) {
            var condicion;
            if (plan[i][j].cursadasParaCursar.length==0 && plan[i][j].aprobadasParaCursar.length==0) {
                if (plan[i][j].aprobadasParaRendir.length==0) {
                    condicion = 2;
                } else {
                    condicion = 1;
                }
            } else {
                condicion = 0;
            }
            var cascada = new Array();
            var mat = plan[i][j];

            for (var k=i; k<plan.length; k++) {
                for (var l=0; l<plan[k].length; l++) {
                    var cor = plan[k][l];
                    if ($.inArray(mat.ord, cor.cursadasParaCursar)!=-1 || $.inArray(mat.ord, cor.aprobadasParaCursar)!=-1 || $.inArray(mat.ord, cor.aprobadasParaRendir)!=-1) {
                        cascada.push(cor.ord);
                    }
                }
            }

            horasObligatoriasTotales += mat.horas;
            materias[mat.ord] = new Materia(mat.nombre, i+1, mat.horas, condicion, 0, mat.cursadasParaCursar, mat.aprobadasParaCursar, mat.aprobadasParaRendir, cascada);
        }
    }
    iniciar();
}

function iniciar() {
    dibujarMaterias();
    modificarProgreso(0, 0);
    modificarCursadas(0);

    $("#sp-obltot").text(horasObligatoriasTotales);
    $("#sp-eletot").text(horasElectivasTotales);

    $("#sp-oblact-progress").attr('aria-valuemax', horasObligatoriasTotales);
    $("#sp-eleact-progress").attr('aria-valuemax', horasElectivasTotales);

    $('#bt-newElect').click(function() {
        var nombre = $("#in-nomElect").val();
        var horas = parseInt($("#sl-hrsElect").val());
        crearElectiva(nombre, horas);
        $("#in-nomElect").val('');
    });
    $('#bt-guardar').click(function() {
        localStorage.setItem("co-materias", JSON.stringify(materias));
        localStorage.setItem("co-elect", horasElectivasTotales.toString());
        localStorage.setItem("co-excepcion", excepcion.checked.toString());
        var electivas = new Array();
        $("#electivas li").each(function(){
            electivas.push($(this).data("nombre"));
            electivas.push($(this).data("horas"));
        });
        localStorage.setItem("co-electivas", JSON.stringify(electivas));
        alert("Los datos fueron guardados satisfactoriamente.");
    });
    $('#bt-borrar').click(function() {
        localStorage.removeItem("co-materias");
        localStorage.removeItem("co-electivas");
        localStorage.removeItem("co-elect");
        localStorage.removeItem("co-excepcion");
        alert("Los datos fueron limpiados de su navegador.");
    });
    $("#cb-excepcion").change(function(){
        cambioExcepcion();
    });
}

function Materia(nombre, anio, horas, condicion, estado, cursadasParaCursar, aprobadasParaCursar, aprobadasParaRendir, cascada) {
    this.nombre = nombre;
    this.anio = anio;
    this.horas = horas;
    this.condicion = condicion;
    this.estado = estado;
    this.cursadasParaCursar = cursadasParaCursar;
    this.aprobadasParaCursar = aprobadasParaCursar;
    this.aprobadasParaRendir = aprobadasParaRendir;
    this.cascada = cascada;
}

function dibujarMaterias() {
    var anoDOM;

    for (var i=1; i<materias.length; i++) {
        var mat = materias[i];
        anoDOM = 'anio-' + mat.anio;
        if (!document.getElementById(anoDOM)) {
            var newAno = '<div class="col-md-6">' +
                            '<div class="card card-outline-primary mt-3">' +
                                '<div class="card-header"><h6>' + mat.anio + '° año</h6></div>' +
                                '<div class="card-block">' +
                                    '<ul class="materias" id="'+anoDOM+'"></ul>' +
                                '</div></div></div>';
            $(newAno).appendTo("#obligatorias");
        }
        var matJQ = $('<li id="materia-'+i+'">');
        matJQ.addClass(condiciones[mat.condicion]);
        matJQ.addClass(estados[mat.estado]);
        matJQ.data("id", i);
        $('<span class="nombre-mat">'+materias[i].nombre+'</span>').appendTo(matJQ);
        matJQ.appendTo('#'+anoDOM);
        matJQ.click(function() {
            var idMateria = $(this).data("id");
            var estado = (materias[idMateria].estado + 1) % 3;
            setEstado(idMateria, estado);
        });
    }

    var electivas = '<div class="col-md-6">' +
                        '<div class="card card-outline-primary mt-3">' +
                            '<div class="card-header">' +
                                '<h6>Electivas</h6>' +
                            '</div>' +
                                '<ul id="electivas" class="materias"></ul>' +
                        '</div>' +
                    '</div>';

    $(electivas).appendTo("#obligatorias");

    $('#'+anoDOM).after('<div class="container-body"><form><label for="cb-excepcion">'+
        '<input id="cb-excepcion" type="checkbox" disabled>'+
        'Pedir excepción</label></form></div>');
    excepcion = document.getElementById("cb-excepcion");
}

function setEstado(idMateria, nuevoEstado) {
    var materia = materias[idMateria];
    var viejoEstado = materia.estado;
    if (nuevoEstado == viejoEstado) {
        return null;
    } else if (nuevoEstado <= materia.condicion) {
        materia.estado = nuevoEstado;
        if (viejoEstado==0) {
            if (nuevoEstado>=1)
                modificarCursadas(materia.horas);
            if (nuevoEstado==2)
                modificarProgreso(materia.horas, 0);
        } else if (viejoEstado==1) {
            if (nuevoEstado==0)
                modificarCursadas(-materia.horas);
            else if (nuevoEstado==2)
                modificarProgreso(materia.horas, 0);
        } else if (viejoEstado==2) {
            if (nuevoEstado<=1)
                modificarProgreso(-materia.horas, 0);
            if (nuevoEstado==0)
                modificarCursadas(-materia.horas);
        }
        var materiaDOM = '#materia-' + idMateria;
        var materiaJS = $(materiaDOM);
        materiaJS.removeClass();
        materiaJS.addClass(condiciones[materia.condicion]);
        materiaJS.addClass(estados[nuevoEstado]);
        var lista = materia.cascada;
        for (var i=0; i<lista.length; i++) {
            calcularCondicion(lista[i]);
        }
    } else if (viejoEstado == 0) {
        alert("Todavía no puede cursar esta materia.");
    } else {
        setEstado(idMateria, 0);
    }
}

function setCondicion(idMateria, nuevaCond) {
    var materia = materias[idMateria];
    materia.condicion = nuevaCond;
    if (nuevaCond < materia.estado) {
        setEstado(idMateria, nuevaCond);
    } else {
        var materiaDOM = '#materia-' + idMateria;
        var materiaJS = $(materiaDOM);
        materiaJS.removeClass();
        materiaJS.addClass(condiciones[materia.condicion]);
        materiaJS.addClass(estados[materia.estado]);
    }
}

function calcularCondicion(id) {
    var condicion = 0;
    var cursable = true;
    var lista;
    if (!excepcion.checked) {
        lista = materias[id].cursadasParaCursar;
        for (var i=0; i<lista.length; i++)
            cursable = cursable && (materias[lista[i]].estado != 0);
        lista = materias[id].aprobadasParaCursar;
        for (var i=0; i<lista.length; i++)
            cursable = cursable && (materias[lista[i]].estado == 2);
    }
    if (excepcion.checked || cursable) {
        var aprobable = true;
        lista = materias[id].aprobadasParaRendir;
        for (var i=0; i<lista.length; i++) {
            aprobable = aprobable && (materias[lista[i]].estado == 2);
        }
        if (aprobable) {
            condicion = 2;
        } else {
            condicion = 1;
        }
    }
    if (condicion != materias[id].condicion) {
        setCondicion(id, condicion);
    }
}

function modificarProgreso(hrsObl, hrsEle) {
    horasObligatoriasActuales += hrsObl;
    horasElectivasActuales += hrsEle;
    if (hrsObl > 0)
        materiasAprobadas++;
    else if (hrsObl < 0)
        materiasAprobadas--;
    if (hrsEle > 0)
        materiasAprobadas++;
    else if (hrsEle < 0)
        materiasAprobadas--;
    var hrsAct = horasObligatoriasActuales;
    if (horasElectivasActuales < horasElectivasTotales)
        hrsAct += horasElectivasActuales;
    else
        hrsAct += horasElectivasTotales;
    var progreso = hrsAct / (horasObligatoriasTotales+horasElectivasTotales) * 100;

    //Modificar progreso en números y en barras de status

    $("#sp-oblact").text(horasObligatoriasActuales);
    $("#sp-oblact-progress").attr('aria-valuenow', horasObligatoriasActuales);

    $("#sp-eleact").text(horasElectivasActuales);
    $("#sp-eleact-progress").attr('aria-valuenow', horasElectivasActuales);

    $("#sp-matapr").text(materiasAprobadas);
    $("#sp-matapr-progress").attr('aria-valuenow', materiasAprobadas);

    $("#sp-progreso").text(progreso.toFixed(2));
    $("#sp-progreso-progress").attr('aria-valuenow', progreso.toFixed(0));
}

function modificarCursadas(hrsCur) {
    horasCursadas += hrsCur;
    $("#sp-curact").text(horasCursadas);
    if (excepcion.disabled){
        if (horasObligatoriasTotales-horasCursadas <= 60) {
            excepcion.disabled = false;
        }
    } else {
        if (horasObligatoriasTotales-horasCursadas > 60) {
            excepcion.disabled = true;
            excepcion.checked = false;
            cambioExcepcion();
        }
    }
}

function cambioExcepcion() {
    for (var i=0; i<materias.length; i++)
        calcularCondicion(i);
}

function crearElectiva(nombre, horas) {
    try {
        if (!nombre || nombre.length===0)
            throw "Ingrese un nombre.";
        if (!horas)
            throw "Ingrese las horas.";
        var matJQ = $("<li>");
        matJQ.addClass(condiciones[2]);
        matJQ.addClass(estados[2]);
        matJQ.data("horas", horas);
        matJQ.data("nombre", nombre);
        $('<span class="nombre-mat">'+nombre+'</span>').appendTo(matJQ);
        $('<span class="estado-mat">('+horas+' horas)</span>').appendTo(matJQ);
        matJQ.appendTo('#electivas');
        modificarProgreso(0, horas);
        matJQ.click(function() {
            var horas = $(this).data("horas");
            modificarProgreso(0, -horas);
            $(this).remove();
        });
    } catch(err) {
        alert("Error: "+err);
    }
}