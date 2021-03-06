
document.getElementById("dia_update").innerHTML = 'Update ' + data.dia_update + ' 2021 16:00 hrs';
document.getElementById("inc_positivos").innerHTML += data.inc_positivos;
document.getElementById("cant_positivos").innerHTML = data.cant_positivos;
document.getElementById("inc_activos").innerHTML += data.inc_activos;
document.getElementById("cant_activos").innerHTML = data.cant_activos;
document.getElementById("inc_defunciones").innerHTML += data.inc_defunciones;
document.getElementById("cant_defunciones").innerHTML = data.cant_defunciones;
document.getElementById("inc_recuperados").innerHTML += data.inc_recuperados;
document.getElementById("cant_recuperados").innerHTML = data.cant_recuperados;
document.getElementById("inc_sospechosos").innerHTML += data.inc_sospechosos;
document.getElementById("cant_sospechosos").innerHTML = data.cant_sospechosos;
document.getElementById("inc_negativos").innerHTML += data.inc_negativos;
document.getElementById("cant_negativos").innerHTML = data.cant_negativos;

document.getElementById("inc_letalidad").innerHTML += data.inc_letalidad;
document.getElementById("tasa_letalidad").innerHTML = data.tasa_letalidad;
// document.getElementById("inc_camas").innerHTML += data.inc_camas;
// document.getElementById("cant_camas").innerHTML = data.cant_camas;
document.getElementById("municipio_mas_positivos").innerHTML += data.municipio_mas_positivos;
document.getElementById("semaforo").innerHTML = data.semaforo;
document.getElementById("positivos-defunciones").innerHTML = "Recuperados: " + data.cant_recuperados + " (+" + data.inc_recuperados + ")," + " casos positivos acumulados: " + data.cant_positivos + " (+" + data.inc_positivos + ") y defunciones: " + data.cant_defunciones + " (+" + data.inc_defunciones + ")";
document.getElementById("chart_letalidad_title").innerHTML = data.chart_letalidad_title + data.tasa_letalidad;
document.getElementById("chart_recuperados_title").innerHTML = data.chart_recuperados_title + data.inc_recuperados + ", en promedio: " + data.prom_recuperados;
document.getElementById("chart_defunciones_title").innerHTML = data.chart_defunciones_title + data.inc_defunciones + ", en promedio: " + data.prom_defunciones;
document.getElementById("chart_positivos_title").innerHTML = data.chart_positivos_title + data.inc_positivos + ", en promedio: " + data.prom_acumulados;
document.getElementById("defunciones_title").innerHTML = data.cant_defunciones + data.defunciones_title + data.inc_defunciones;
document.getElementById("inc_vacunados").innerHTML += data.inc_vacunados;
document.getElementById("cant_vacunados").innerHTML = data.cant_vacunados;

// var t = "Manzanillo -> " + data.cant_defunciones_MZO + "(" + data.inc_defunciones_MZO + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_MZO + "</span>";

document.getElementById("defunciones_MZO").innerHTML = "Manzanillo -> " + data.cant_defunciones_MZO + " (" + data.inc_defunciones_MZO + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_MZO + " %</span>";
document.getElementById("bar_def_MZO").setAttribute("style", data.porc_width_def_MZO);
document.getElementById("bar_def_MZO").setAttribute("aria-valuenow", data.value_now_def_MZO);

document.getElementById("defunciones_TEC").innerHTML = "Tecomán -> " + data.cant_defunciones_TEC + " (" + data.inc_defunciones_TEC + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_TEC + " %</span>";
document.getElementById("bar_def_TEC").setAttribute("style", data.porc_width_def_TEC);
document.getElementById("bar_def_TEC").setAttribute("aria-valuenow", data.value_now_def_TEC);

document.getElementById("defunciones_VILLA").innerHTML = "Villa de Álvarez -> " + data.cant_defunciones_VILLA + " (" + data.inc_defunciones_VILLA + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_VILLA + " %</span>";
document.getElementById("bar_def_VILLA").setAttribute("style", data.porc_width_def_VILLA);
document.getElementById("bar_def_VILLA").setAttribute("aria-valuenow", data.value_now_def_VILLA);

document.getElementById("defunciones_COL").innerHTML = "Colima -> " + data.cant_defunciones_COL + " (" + data.inc_defunciones_COL + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_COL + " %</span>";
document.getElementById("bar_def_COL").setAttribute("style", data.porc_width_def_COL);
document.getElementById("bar_def_COL").setAttribute("aria-valuenow", data.value_now_def_COL);

document.getElementById("defunciones_CUA").innerHTML = "Cuauhtémoc -> " + data.cant_defunciones_CUA + " (" + data.inc_defunciones_CUA + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_CUA + " %</span>";
document.getElementById("bar_def_CUA").setAttribute("style", data.porc_width_def_CUA);
document.getElementById("bar_def_CUA").setAttribute("aria-valuenow", data.value_now_def_CUA);

document.getElementById("defunciones_ARM").innerHTML = "Armería -> " + data.cant_defunciones_ARM + " (" + data.inc_defunciones_ARM + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_ARM + " %</span>";
document.getElementById("bar_def_ARM").setAttribute("style", data.porc_width_def_ARM);
document.getElementById("bar_def_ARM").setAttribute("aria-valuenow", data.value_now_def_ARM);

document.getElementById("defunciones_COQ").innerHTML = "Coquimatlán -> " + data.cant_defunciones_COQ + " (" + data.inc_defunciones_COQ + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_COQ + " %</span>";
document.getElementById("bar_def_COQ").setAttribute("style", data.porc_width_def_COQ);
document.getElementById("bar_def_COQ").setAttribute("aria-valuenow", data.value_now_def_COQ);

document.getElementById("defunciones_MIN").innerHTML = "Minatitlán -> " + data.cant_defunciones_MIN + " (" + data.inc_defunciones_MIN + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_MIN + " %</span>";
document.getElementById("bar_def_MIN").setAttribute("style", data.porc_width_def_MIN);
document.getElementById("bar_def_MIN").setAttribute("aria-valuenow", data.value_now_def_MIN);

document.getElementById("defunciones_IXT").innerHTML = "Ixtlahuacán -> " + data.cant_defunciones_IXT + " (" + data.inc_defunciones_IXT + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_IXT + " %</span>";
document.getElementById("bar_def_IXT").setAttribute("style", data.porc_width_def_IXT);
document.getElementById("bar_def_IXT").setAttribute("aria-valuenow", data.value_now_def_IXT);

document.getElementById("defunciones_COM").innerHTML = "Comala -> " + data.cant_defunciones_COM + " (" + data.inc_defunciones_COM + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_defunciones_COM + " %</span>";
document.getElementById("bar_def_COM").setAttribute("style", data.porc_width_def_COM);
document.getElementById("bar_def_COM").setAttribute("aria-valuenow", data.value_now_def_COM);
// ================================================================================================= A C T I V O S
document.getElementById("activos_title").innerHTML = data.cant_activos + data.activos_title + data.inc_activos;

document.getElementById("activos_MZO").innerHTML = "Manzanillo -> " + data.cant_activos_MZO + " (" + data.inc_activos_MZO + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_MZO + " %</span>";
document.getElementById("bar_act_MZO").setAttribute("style", data.porc_width_act_MZO);
document.getElementById("bar_act_MZO").setAttribute("aria-valuenow", data.value_now_act_MZO);

document.getElementById("activos_TEC").innerHTML = "Tecomán -> " + data.cant_activos_TEC + " (" + data.inc_activos_TEC + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_TEC + " %</span>";
document.getElementById("bar_act_TEC").setAttribute("style", data.porc_width_act_TEC);
document.getElementById("bar_act_TEC").setAttribute("aria-valuenow", data.value_now_act_TEC);

document.getElementById("activos_VILLA").innerHTML = "Villa de Álvarez -> " + data.cant_activos_VILLA + " (" + data.inc_activos_VILLA + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_VILLA + " %</span>";
document.getElementById("bar_act_VILLA").setAttribute("style", data.porc_width_act_VILLA);
document.getElementById("bar_act_VILLA").setAttribute("aria-valuenow", data.value_now_act_VILLA);

document.getElementById("activos_COL").innerHTML = "Colima -> " + data.cant_activos_COL + " (" + data.inc_activos_COL + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_COL + " %</span>";
document.getElementById("bar_act_COL").setAttribute("style", data.porc_width_act_COL);
document.getElementById("bar_act_COL").setAttribute("aria-valuenow", data.value_now_act_COL);

document.getElementById("activos_CUA").innerHTML = "Cuauhtémoc -> " + data.cant_activos_CUA + " (" + data.inc_activos_CUA + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_CUA + " %</span>";
document.getElementById("bar_act_CUA").setAttribute("style", data.porc_width_act_CUA);
document.getElementById("bar_act_CUA").setAttribute("aria-valuenow", data.value_now_act_CUA);

document.getElementById("activos_ARM").innerHTML = "Armería -> " + data.cant_activos_ARM + " (" + data.inc_activos_ARM + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_ARM + " %</span>";
document.getElementById("bar_act_ARM").setAttribute("style", data.porc_width_act_ARM);
document.getElementById("bar_act_ARM").setAttribute("aria-valuenow", data.value_now_act_ARM);

document.getElementById("activos_COQ").innerHTML = "Coquimatlán -> " + data.cant_activos_COQ + " (" + data.inc_activos_COQ + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_COQ + " %</span>";
document.getElementById("bar_act_COQ").setAttribute("style", data.porc_width_act_COQ);
document.getElementById("bar_act_COQ").setAttribute("aria-valuenow", data.value_now_act_COQ);

document.getElementById("activos_MIN").innerHTML = "Minatitlán -> " + data.cant_activos_MIN + " (" + data.inc_activos_MIN + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_MIN + " %</span>";
document.getElementById("bar_act_MIN").setAttribute("style", data.porc_width_act_MIN);
document.getElementById("bar_act_MIN").setAttribute("aria-valuenow", data.value_now_act_MIN);

document.getElementById("activos_IXT").innerHTML = "Ixtlahuacán -> " + data.cant_activos_IXT + " (" + data.inc_activos_IXT + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_IXT + " %</span>";
document.getElementById("bar_act_IXT").setAttribute("style", data.porc_width_act_IXT);
document.getElementById("bar_act_IXT").setAttribute("aria-valuenow", data.value_now_act_IXT);

document.getElementById("activos_COM").innerHTML = "Comala -> " + data.cant_activos_COM + " (" + data.inc_activos_COM + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_activos_COM + " %</span>";
document.getElementById("bar_act_COM").setAttribute("style", data.porc_width_act_COM);
document.getElementById("bar_act_COM").setAttribute("aria-valuenow", data.value_now_act_COM);

// =======================================================================================P O S I T I V O S 
document.getElementById("positivos_title").innerHTML = data.positivos_title + data.inc_positivos;

document.getElementById("positivos_MZO").innerHTML = "Manzanillo -> " + data.cant_positivos_MZO + " (" + data.inc_positivos_MZO + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_MZO + " %</span>";

document.getElementById("bar_pos_MZO").setAttribute("style", data.porc_width_pos_MZO);
document.getElementById("bar_pos_MZO").setAttribute("aria-valuenow", data.value_now_pos_MZO);

document.getElementById("positivos_TEC").innerHTML = "Tecomán -> " + data.cant_positivos_TEC + " (" + data.inc_positivos_TEC + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_TEC + " %</span>";
document.getElementById("bar_pos_TEC").setAttribute("style", data.porc_width_pos_TEC);
document.getElementById("bar_pos_TEC").setAttribute("aria-valuenow", data.value_now_pos_TEC);

document.getElementById("positivos_VILLA").innerHTML = "Villa de Álvarez -> " + data.cant_positivos_VILLA + " (" + data.inc_positivos_VILLA + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_VILLA + " %</span>";
document.getElementById("bar_pos_VILLA").setAttribute("style", data.porc_width_pos_VILLA);
document.getElementById("bar_pos_VILLA").setAttribute("aria-valuenow", data.value_now_pos_VILLA);

document.getElementById("positivos_COL").innerHTML = "Colima -> " + data.cant_positivos_COL + " (" + data.inc_positivos_COL + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_COL + " %</span>";
document.getElementById("bar_pos_COL").setAttribute("style", data.porc_width_pos_COL);
document.getElementById("bar_pos_COL").setAttribute("aria-valuenow", data.value_now_pos_COL);

document.getElementById("positivos_CUA").innerHTML = "Cuauhtémoc -> " + data.cant_positivos_CUA + " (" + data.inc_positivos_CUA + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_CUA + " %</span>";
document.getElementById("bar_pos_CUA").setAttribute("style", data.porc_width_pos_CUA);
document.getElementById("bar_pos_CUA").setAttribute("aria-valuenow", data.value_now_pos_CUA);

document.getElementById("positivos_ARM").innerHTML = "Armería -> " + data.cant_positivos_ARM + " (" + data.inc_positivos_ARM + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_ARM + " %</span>";
document.getElementById("bar_pos_ARM").setAttribute("style", data.porc_width_pos_ARM);
document.getElementById("bar_pos_ARM").setAttribute("aria-valuenow", data.value_now_pos_ARM);

document.getElementById("positivos_COQ").innerHTML = "Coquimatlán -> " + data.cant_positivos_COQ + " (" + data.inc_positivos_COQ + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_COQ + " %</span>";
document.getElementById("bar_pos_COQ").setAttribute("style", data.porc_width_pos_COQ);
document.getElementById("bar_pos_COQ").setAttribute("aria-valuenow", data.value_now_pos_COQ);

document.getElementById("positivos_MIN").innerHTML = "Minatitlán -> " + data.cant_positivos_MIN + " (" + data.inc_positivos_MIN + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_MIN + " %</span>";
document.getElementById("bar_pos_MIN").setAttribute("style", data.porc_width_pos_MIN);
document.getElementById("bar_pos_MIN").setAttribute("aria-valuenow", data.value_now_pos_MIN);

document.getElementById("positivos_IXT").innerHTML = "Ixtlahuacán -> " + data.cant_positivos_IXT + " (" + data.inc_positivos_IXT + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_IXT + " %</span>";
document.getElementById("bar_pos_IXT").setAttribute("style", data.porc_width_pos_IXT);
document.getElementById("bar_pos_IXT").setAttribute("aria-valuenow", data.value_now_pos_IXT);

document.getElementById("positivos_COM").innerHTML = "Comala -> " + data.cant_positivos_COM + " (" + data.inc_positivos_COM + ")" + "<span class=" + "'" + "float-right" + "' >" + data.porc_positivos_COM + " %</span>";
document.getElementById("bar_pos_COM").setAttribute("style", data.porc_width_pos_COM);
document.getElementById("bar_pos_COM").setAttribute("aria-valuenow", data.value_now_pos_COM);

document.getElementById("num_reporte").setAttribute("href", data.url_reporte);
document.getElementById("num_reporte").innerHTML = data.url_reporte;
document.getElementById("leyenda_camas").innerHTML = data.camas_title + " " + data.dia + " " + data.mes + " 2021, Informe diario por Coronavirus en México" + " <a id=\"reporte_camas\"></a>";
document.getElementById("reporte_camas").setAttribute("href", data.url_youtube);
document.getElementById("reporte_camas").innerHTML = data.url_youtube;
// console.log(data.camas_title + " " + data.dia + " " + data.mes + " 2020, Informe diario por Coronavirus en México");
// document.getElementById("camas_general").innerHTML = "Disponibilidad camas hospitalización general<br>Lugar en el país: <span class=\"m-0 font-weight-bold text-danger\">" + data.lugar_camas_general + " </span>";
// document.getElementById("camas_ventilador").innerHTML = "Disponibilidad camas con ventilador<br>Lugar en el país: <span class=\"m-0 font-weight-bold text-danger\">" + data.lugar_camas_ventilador + " </span>";
// document.getElementById("lugar_general").innerHTML = "Lugar en el país: <b>" + data.lugar_camas_general + "</b>";
// document.getElementById("porc_barra_camas_general").setAttribute("style", data.leyenda_camas_general);
// document.getElementById("disp_general").innerHTML = data.camas_general;

// document.getElementById("lugar_ventilador").innerHTML = "Lugar en el país: <b>" + data.lugar_camas_ventilador + "</b>";
// document.getElementById("porc_barra_camas_ventilador").setAttribute("style", data.leyenda_camas_ventilador);
// document.getElementById("disp_ventilador").innerHTML = data.camas_ventilador;

// camas_general

var mun_MZO = "<span class=\"mr-2\"> <i class=\"fas fa-circle text-danger\"></i> Manzanillo " + data.porc_tot_activos_MZO + "%</span>";
var mun_TEC = "<span class=\"mr-2\"><i class=\"fas fa-circle text-success\"></i> Tecomán " + data.porc_tot_activos_TEC + "%</span>";
var mun_VILLA = "<span class=\"mr-2\"><i class=\"fas fa-circle text-info\"></i> V. Álvarez " + data.porc_tot_activos_VILLA + "%</span>";
var mun_COL = "<span class=\"mr-2\"><i class=\"fas fa-circle text-primary\"></i> Colima " + data.porc_tot_activos_COL + "%</span>";

var def_tot_ran1 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #3498DB;\" ></i>  0--40 <strong>" + data.porc_defunciones_tot_rango_uno + " %</strong></span>";
var def_tot_ran2 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #512E5F;\" ></i>  41--50 <strong>" + data.porc_defunciones_tot_rango_dos + " %</strong></span>";
var def_tot_ran3 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #1B4F72;\" ></i>  51--60 <strong>" + data.porc_defunciones_tot_rango_tres + " %</strong></span>";
var def_tot_ran4 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #D4AC0D;\" ></i>  61-70 <strong>" + data.porc_defunciones_tot_rango_cuatro + " %</strong></span>";
var def_tot_ran5 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #0E6251;\" ></i>  71-80 <strong>" + data.porc_defunciones_tot_rango_cinco + " %</strong></span>";
var def_tot_ran6 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #D35400;\" ></i>  80+ <strong>" + data.porc_defunciones_tot_rango_seis + " %</strong></span>";


var def_tot_muj_ran1 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #3498DB;\"></i>  0--40 <strong>" + data.porc_defunciones_tot_muj_rango_uno + " %</strong></span>";
var def_tot_muj_ran2 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #512E5F;\"></i>  41--50 <strong>" + data.porc_defunciones_tot_muj_rango_dos + " %</strong></span>";
var def_tot_muj_ran3 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #1B4F72;\" ></i>  51--60 <strong>" + data.porc_defunciones_tot_muj_rango_tres + " %</strong></span>";
var def_tot_muj_ran4 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #D4AC0D;\"></i>  61-70 <strong>" + data.porc_defunciones_tot_muj_rango_cuatro + " %</strong></span>";
var def_tot_muj_ran5 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #0E6251;\" ></i>  71-80 <strong>" + data.porc_defunciones_tot_muj_rango_cinco + " %</strong></span>";
var def_tot_muj_ran6 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #D35400;\" ></i>  80+ <strong>" + data.porc_defunciones_tot_muj_rango_seis + " %</strong></span>";

var def_tot_hom_ran1 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #3498DB;\"></i>  0--40 <strong>" + data.porc_defunciones_tot_hom_rango_uno + " %</strong></span>";
var def_tot_hom_ran2 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #512E5F;\"></i>  41--50 <strong>" + data.porc_defunciones_tot_hom_rango_dos + " %</strong></span>";
var def_tot_hom_ran3 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #1B4F72;\" ></i>  51--60 <strong>" + data.porc_defunciones_tot_hom_rango_tres + " %</strong></span>";
var def_tot_hom_ran4 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #D4AC0D;\"></i>  61-70 <strong>" + data.porc_defunciones_tot_hom_rango_cuatro + " %</strong></span>";
var def_tot_hom_ran5 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #0E6251;\" ></i>  71-80 <strong>" + data.porc_defunciones_tot_hom_rango_cinco + " %</strong></span>";
var def_tot_hom_ran6 = "<span class=\"mr-2\"><i class=\"fas fa-circle\" style=\"color: #D35400;\" ></i>  80+ <strong>" + data.porc_defunciones_tot_hom_rango_seis + " %</strong></span>";


// document.getElementById("porc_def_tot").innerHTML = def_tot_ran1 + def_tot_ran2 + def_tot_ran3 + def_tot_ran4 + def_tot_ran5 + def_tot_ran6;
// document.getElementById("porc_def_tot_muj").innerHTML = def_tot_muj_ran1 + def_tot_muj_ran2 + def_tot_muj_ran3 + def_tot_muj_ran4 + def_tot_muj_ran5 + def_tot_muj_ran6;
// document.getElementById("porc_def_tot_hom").innerHTML = def_tot_hom_ran1 + def_tot_hom_ran2 + def_tot_hom_ran3 + def_tot_hom_ran4 + def_tot_hom_ran5 + def_tot_hom_ran6;
document.getElementById("pos_acum_Municipio").innerHTML = mun_MZO + mun_TEC + mun_VILLA + mun_COL;
// tablas de ocupacion hospitalaria
document.getElementById("hgm_ocupacion_general").innerText = data.hgm_ocupacion_general + "%";
document.getElementById("inc_hgm_ocupacion_general").innerText = data.inc_hgm_ocupacion_general;
document.getElementById("hru_ocupacion_general").innerText = data.hru_ocupacion_general + "%";
document.getElementById("inc_hru_ocupacion_general").innerText = data.inc_hru_ocupacion_general;
document.getElementById("mzo_ocupacion_general").innerText = data.mzo_ocupacion_general + "%";
document.getElementById("inc_mzo_ocupacion_general").innerText = data.inc_mzo_ocupacion_general;
document.getElementById("hgz10_ocupacion_general").innerText = data.hgz10_ocupacion_general + "%";
document.getElementById("inc_hgz10_ocupacion_general").innerText = data.inc_hgz10_ocupacion_general;
document.getElementById("dmto_ocupacion_general").innerText = data.dmto_ocupacion_general + "%";
document.getElementById("inc_dmto_ocupacion_general").innerText = data.inc_dmto_ocupacion_general;
document.getElementById("hgz1_ocupacion_general").innerText = data.hgz1_ocupacion_general + "%";
document.getElementById("inc_hgz1_ocupacion_general").innerText = data.inc_hgz1_ocupacion_general;
document.getElementById("hgtdjfrg_ocupacion_general").innerText = data.hgtdjfrg_ocupacion_general + "%";
document.getElementById("inc_hgtdjfrg_ocupacion_general").innerText = data.inc_hgtdjfrg_ocupacion_general;
document.getElementById("hgsmft_ocupacion_general").innerText = data.hgsmft_ocupacion_general + "%";
document.getElementById("inc_hgsmft_ocupacion_general").innerText = data.inc_hgsmft_ocupacion_general;
document.getElementById("hgm_ocupacion_ventilador").innerText = data.hgm_ocupacion_ventilador + "%";
document.getElementById("inc_hgm_ocupacion_ventilador").innerText = data.inc_hgm_ocupacion_ventilador;
document.getElementById("hru_ocupacion_ventilador").innerText = data.hru_ocupacion_ventilador + "%";
document.getElementById("inc_hru_ocupacion_ventilador").innerText = data.inc_hru_ocupacion_ventilador;
document.getElementById("mzo_ocupacion_ventilador").innerText = data.mzo_ocupacion_ventilador + "%";
document.getElementById("inc_mzo_ocupacion_ventilador").innerText = data.inc_mzo_ocupacion_ventilador;
document.getElementById("hgz10_ocupacion_ventilador").innerText = data.hgz10_ocupacion_ventilador + "%";
document.getElementById("inc_hgz10_ocupacion_ventilador").innerText = data.inc_hgz10_ocupacion_ventilador;
document.getElementById("dmto_ocupacion_ventilador").innerText = data.dmto_ocupacion_ventilador + "%";
document.getElementById("inc_dmto_ocupacion_ventilador").innerText = data.inc_dmto_ocupacion_ventilador;
document.getElementById("hgz1_ocupacion_ventilador").innerText = data.hgz1_ocupacion_ventilador + "%";
document.getElementById("inc_hgz1_ocupacion_ventilador").innerText = data.inc_hgz1_ocupacion_ventilador;
document.getElementById("hgtdjfrg_ocupacion_ventilador").innerText = data.hgtdjfrg_ocupacion_ventilador + "%";
document.getElementById("inc_hgtdjfrg_ocupacion_ventilador").innerText = data.inc_hgtdjfrg_ocupacion_ventilador;
document.getElementById("hgsmft_ocupacion_ventilador").innerText = data.hgsmft_ocupacion_ventilador + "%";
document.getElementById("inc_hgsmft_ocupacion_ventilador").innerText = data.inc_hgsmft_ocupacion_ventilador;
