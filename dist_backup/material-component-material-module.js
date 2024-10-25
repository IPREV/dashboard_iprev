(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/buttons/buttons.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/buttons/buttons.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card-content>    \n\t<mat-card-title>Notícias</mat-card-title>\n\t\t\t<mat-card-subtitle>Acompanhe aqui nossas principais notícias</mat-card-subtitle>\n\t\t\t<!-- Card deck -->\n\t\t\t<div class=\"card-deck\">\n\n\t\t\t\t<!-- Card -->\n\t\t\t\t<div class=\"card mb-4\">\n\n\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t<div class=\"view overlay\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/16.jpg\"\n\t\t\t\t\t\t\talt=\"Card image cap\">\n\t\t\t\t\t\t<a href=\"#!\">\n\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t<h4 class=\"card-title\">Card title</h4>\n\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n\t\t\t\t\t\t\tof the card's content.</p>\n\t\t\t\t\t\t<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light-blue btn-md\">Read more</button>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Card -->\n\n\t\t\t\t<!-- Card -->\n\t\t\t\t<div class=\"card mb-4\">\n\n\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t<div class=\"view overlay\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/14.jpg\"\n\t\t\t\t\t\t\talt=\"Card image cap\">\n\t\t\t\t\t\t<a href=\"#!\">\n\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t<h4 class=\"card-title\">Card title</h4>\n\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n\t\t\t\t\t\t\tof the card's content.</p>\n\t\t\t\t\t\t<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light-blue btn-md\">Read more</button>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Card -->\n\n\t\t\t\t<!-- Card -->\n\t\t\t\t<div class=\"card mb-4\">\n\n\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t<div class=\"view overlay\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/15.jpg\"\n\t\t\t\t\t\t\talt=\"Card image cap\">\n\t\t\t\t\t\t<a href=\"#!\">\n\t\t\t\t\t\t\t<div class=\"mask rgba-white-slight\"></div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t<h4 class=\"card-title\">Card title</h4>\n\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk\n\t\t\t\t\t\t\tof the card's content.</p>\n\t\t\t\t\t\t<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light-blue btn-md\">Read more</button>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Card -->\n\n\t\t\t</div>\n\t\t\t<!-- Card deck -->\n\t\t\t\n\t</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/ferias/ferias.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/ferias/ferias.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card-content>    \n\t\t<mat-card-title>Lista de Férias do IPREV/MA</mat-card-title>\n\t\t<mat-card-subtitle>Lista de Férias dos Servidores</mat-card-subtitle>\n\t\t<div class=\"input-group mb-3 col-6 input-group-lg\" style=\"padding: 20px 15px 0px 15px; float: right;\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Digite uma busca\" aria-label=\"Digite uma busca\" aria-describedby=\"button-addon2\"\n       \t\t style=\"border: 0.8px solid #CED4DA;\" [(ngModel)]=\"filter\">\n\t\t</div>\n\t\t <table class=\"table\" style=\" margin-top:50px\">\n\t\t\t<thead style=\"background: white;\">\n\t\t\t  <tr>\n\t\t\t\t<th scope=\"col\">Servidor</th>\n\t\t\t\t<th scope=\"col\">Ano Referência</th>\n\t\t\t\t<th scope=\"col\">Data Início</th>\n                <th scope=\"col\">Data Fim</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody style=\"background: white;\"  style=\"font-size: 12px;\">\n\t\t\t  <tr *ngFor=\"let col of ferias | filter: filter\">\n                <td style=\"font-size: 16px;\" scope=\"row\"> {{ col.servidor.nome}} </td>\n\t\t\t\t<td style=\"font-size: 16px;\" scope=\"row\"> {{ col.ano_referencia }} </td>\n\t\t\t\t<td style=\"font-size: 16px;\" scope=\"row\"> {{ col.data_inicio_formatada }} </td>\n\t\t\t\t<td style=\"font-size: 16px;\" scope=\"row\"> {{ col.data_fim_formatada }} </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t  </table>\n\t\t\t\n\t</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/frequencia/frequencia.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/frequencia/frequencia.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <mat-card-title>Gerar Folha de Frequência</mat-card-title>\n        <mat-card-subtitle>Informe seu CPF, mês e ano para os quais deseja gerar a frequência.</mat-card-subtitle>\n\n        <!--Adicionar uma tag form e colocar um atributo enctype=\"multipart/form-data\" na tag form-->\n        <div class=\"form-row\">\n            <div class=\"col-6\">\n                <p>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>CPF</mat-label>\n                        <input type=\"text\" matInput [(ngModel)]=\"cpf\" mask=\"000.000.000-00\" placeholder=\"Informe seu CPF\">\n                    </mat-form-field>\n                </p>\n            </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"col-6\">\n                <p>\n                    <mat-form-field for=\"inMesAno\" appearance=\"outline\">\n                        <mat-label >Mês e ano</mat-label>\n                        <input type=\"month\" id=\"inMesAno\" matInput [(ngModel)]=\"mesAno\" placeholder=\"Informe o mês e o ano\" min=\"2022-01\">\n                    </mat-form-field>        \n                </p>\n            </div>\n        </div>\n        <button mat-button (click)=\"gerarFrequencia()\">Gerar Frequência</button>\n\n    </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/iprev-play/iprev-play.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/iprev-play/iprev-play.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"input-group mb-3 col-6 input-group-lg\" style=\"padding: 20px 15px 0px 15px; float: right;\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Digite uma busca\" aria-label=\"Digite uma busca\"\n      aria-describedby=\"button-addon2\" style=\"border: 0.8px solid #CED4DA;\" [(ngModel)]=\"filter\">\n  </div>\n  <mat-card-content>\n    <mat-card-title>IPREV Play</mat-card-title>\n\n    <mat-card-subtitle>Tutoriais, cursos e muitos mais...</mat-card-subtitle>\n    <div class=\"row row-cols-1 row-cols-md-2\">\n      <div class=\"col mb-4v card-deck\" style=\"margin-bottom: 30px;\" *ngFor=\"let col of linksAll | filter: filter\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-text\"> {{ col.titulo }} </h4>\n            <p scope=\"col\" class=\"card-title\" style=\"font-size: 14px;\"> {{ col.descricao }} </p>\n\n            <div [innerHTML]=\"transform(col.link)\"> </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/noticias/noticias.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/noticias/noticias.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card-content>\n\t\t<mat-card-title>Notícias</mat-card-title>\n\t\t<mat-card-subtitle>Acompanhe aqui nossas principais notícias</mat-card-subtitle>\n\t\t<!-- 1º Grupo de card -->\n\t\t<div class=\"row row-cols-1 row-cols-md-3\">\n\t\t\t<div class=\"col mb-4v card-deck\" *ngFor=\"let noticia of all_noticias\" style=\"margin-bottom: 30px;\">\n\t\t\t\t<!-- Card -->\n\t\t\t\t<div class=\"card\">\n\n\t\t\t\t\t<!--Card image-->\n\t\t\t\t\t<div class=\"view overlay\">\n\t\t\t\t\t\t<img class=\"card-img-top\" [src]=\"noticia.imagem\"\n\t\t\t\t\t\t\talt=\"Card image cap\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--Card content-->\n\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t<!--Title-->\n\t\t\t\t\t\t<p class=\"card-title\" style=\"font-size: 14px;\">Publicado em: {{noticia.date | date: 'dd/MM/yyyy'}}</p>\n\t\t\t\t\t\t<!--Text-->\n\t\t\t\t\t\t<h4 class=\"card-text\">{{noticia.title.rendered}}</h4>\n\t\t\t\t\t\t<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light-blue btn-md\" style=\"color: #172c4b;\" (click)=\"openDialog(noticia)\">Leia mais</button>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Card -->\n\t\t\t</div>\n\t\t</div>\n\t</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/outros-servicos/outros-servicos.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/outros-servicos/outros-servicos.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card-content>\n\t\t<mat-card-title>Outros Serviços</mat-card-title>\n\t\t<mat-card-subtitle>Formulário de solicitação de outros serviços</mat-card-subtitle>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<p>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>Nome do solicitante</mat-label>\n\t\t\t\t\t\t<input matInput placeholder=\"Nome completo\"\n\t\t\t\t\t\t[(ngModel)]=\"chamadoAtual.nome_solicitante\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<p>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>E-mail</mat-label>\n\t\t\t\t\t\t<input name=\"email\"  matInput placeholder=\"E-mail institucional\"\n\t\t\t\t\t\t[(ngModel)]=\"chamadoAtual.email\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<p>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>Setor</mat-label>\n\t\t\t\t\t\t<input matInput placeholder=\"Setor\"\n\t\t\t\t\t\t[(ngModel)]=\"chamadoAtual.setor\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<p>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>Localização</mat-label>\n\t\t\t\t\t\t<input matInput placeholder=\"(Biadene, Anxos, etc...)\"\n\t\t\t\t\t\t[(ngModel)]=\"chamadoAtual.localizacao\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<p>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>Descrição</mat-label>\n\t\t\t\t\t\t<textarea matInput placeholder=\"Descrição da solicitação\"\n\t\t\t\t\t\t[(ngModel)]=\"chamadoAtual.descricao\"></textarea>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<button mat-button (click)=\"abrirChamado()\">Solicitar serviço</button>\n\t\n\t</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/snackbar/snackbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/snackbar/snackbar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <mat-card-title>Área das Relações Públicas</mat-card-title>\n        <mat-card-subtitle>Envie a imagem para o destaque da Intranet.</mat-card-subtitle>\n\n        <!--Adicionar uma tag form e colocar um atributo enctype=\"multipart/form-data\" na tag form-->\n        <div class=\"row\">\n            <div class=\"custom-file col-md-6\" >\n                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onChange($event)\">\n                <label class=\"custom-file-label\" for=\"customFile\" id=\"customFileLabel\">Selecionar imagem</label>\n            </div>\n\n            <div class=\"col-md-6\" style=\"margin-top:5px; text-align:center;\">\n                <label for=\"meeting-time\" style=\"padding-right: 10px;\">Data de Publicação: </label>\n                <input type=\"datetime-local\" [(ngModel)]=\"data_agendamento\" [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n\n            <div style=\"margin-top: 15px\">\n                <button mat-raised-button color=\"primary\" type=\"button\" [disabled]=\"!arquivo\" (click)= \"onUpload()\">Enviar</button>\n            </div>\n        </div>\n\n    </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/telefones/telefones.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/telefones/telefones.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card-content>    \n\t\t<mat-card-title>Ramais do IPREV/MA</mat-card-title>\n\t\t<mat-card-subtitle>Lista de Ramais</mat-card-subtitle>\n\t\t<div class=\"input-group mb-3 col-6 input-group-lg\" style=\"padding: 20px 15px 0px 15px; float: right;\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Digite uma busca\" aria-label=\"Digite uma busca\" aria-describedby=\"button-addon2\"\n       \t\t style=\"border: 0.8px solid #CED4DA;\" [(ngModel)]=\"filter\">\n\t\t</div>\n\t\t <table class=\"table\" style=\" margin-top:50px\">\n\t\t\t<thead style=\"background: white;\">\n\t\t\t  <tr>\n\t\t\t\t<th scope=\"col\">Ramal</th>\n\t\t\t\t<th scope=\"col\">Setor</th>\n\t\t\t\t<th scope=\"col\">Responsável</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody style=\"background: white;\"  style=\"font-size: 12px;\">\n\t\t\t  <tr *ngFor=\"let col of ramais | filter: filter\">\n\t\t\t\t<td style=\"font-size: 16px;\" scope=\"row\"> {{ col.ramal }} </td>\n\t\t\t\t<td style=\"font-size: 16px;\" scope=\"row\"> {{ col.setor }} </td>\n\t\t\t\t<td style=\"font-size: 16px;\" scope=\"row\"> {{ col.responsavel }} </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t  </table>\n\t\t\t\n\t</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material-component/buttons/buttons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RsaW51eC/DgXJlYSBkZSBUcmFiYWxoby9TSVNURU1BU19JUFJFVi9mcm9udF9kYXNoYm9hcmQvc3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtNQUFBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4iLCIuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/material-component/buttons/buttons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/material-component/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/ferias/ferias.component.css":
/*!****************************************************************!*\
  !*** ./src/app/material-component/ferias/ferias.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9mZXJpYXMvZmVyaWFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/material-component/ferias/ferias.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-component/ferias/ferias.component.ts ***!
  \***************************************************************/
/*! exports provided: FeriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeriasComponent", function() { return FeriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeriasComponent = /** @class */ (function () {
    function FeriasComponent(api) {
        this.api = api;
        this.ferias = [];
    }
    FeriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.listarFerias().subscribe(function (data) {
            console.log(data);
            _this.ferias = data;
        });
    };
    FeriasComponent.ctorParameters = function () { return [
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"] }
    ]; };
    FeriasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ferias',
            template: __webpack_require__(/*! raw-loader!./ferias.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/ferias/ferias.component.html"),
            styles: [__webpack_require__(/*! ./ferias.component.css */ "./src/app/material-component/ferias/ferias.component.css")]
        }),
        __metadata("design:paramtypes", [_api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"]])
    ], FeriasComponent);
    return FeriasComponent;
}());



/***/ }),

/***/ "./src/app/material-component/frequencia/frequencia.component.css":
/*!************************************************************************!*\
  !*** ./src/app/material-component/frequencia/frequencia.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    outline: 0;\n    background: #172c4b;\n    color: #fff;\n    padding: 7px 55px;\n    font-size: 20px;\n    font-weight: lighter;\n}\n\n\ninput[type=\"month\"] {\n    position: relative;\n}\n\n\ninput[type=\"month\"]:after {\n    content: \"\\1F4C6\"; \n    color: #555;\n    padding: 0px 20px 0px 0px;\n}\n\n\ninput[type=\"month\"]:hover:after {\n    color: #172c4b;\n}\n\n\ninput[type=\"month\"]::-webkit-calendar-picker-indicator {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: auto;\n    height: 100%;\n    color: transparent;\n    background: transparent;\n}\n\n\ninput[type=\"month\"]::-webkit-inner-spin-button {\n    z-index: 1;\n}\n\n\ninput[type=\"month\"]::-webkit-clear-button {\n     z-index: 1;\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2ZyZXF1ZW5jaWEvZnJlcXVlbmNpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQztLQUNJLFVBQVU7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9mcmVxdWVuY2lhL2ZyZXF1ZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICMxNzJjNGI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDU1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5cbmlucHV0W3R5cGU9XCJtb250aFwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwibW9udGhcIl06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFwxRjRDNlwiOyBcbiAgICBjb2xvcjogIzU1NTtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMHB4O1xufVxuXG5cbmlucHV0W3R5cGU9XCJtb250aFwiXTpob3ZlcjphZnRlciB7XG4gICAgY29sb3I6ICMxNzJjNGI7XG59XG5pbnB1dFt0eXBlPVwibW9udGhcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dFt0eXBlPVwibW9udGhcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIHotaW5kZXg6IDE7XG59XG5cblxuIGlucHV0W3R5cGU9XCJtb250aFwiXTo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICB6LWluZGV4OiAxO1xuIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/material-component/frequencia/frequencia.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/material-component/frequencia/frequencia.component.ts ***!
  \***********************************************************************/
/*! exports provided: FrequenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequenciaComponent", function() { return FrequenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrequenciaComponent = /** @class */ (function () {
    function FrequenciaComponent(api) {
        this.api = api;
    }
    FrequenciaComponent.prototype.ngOnInit = function () {
    };
    FrequenciaComponent.prototype.gerarFrequencia = function () {
        console.log(this.mesAno);
        if (!this.cpf) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Ops..', 'Informe o CPF para prosseguir.', 'error');
            return;
        }
        if (!this.mesAno) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Ops..', 'Informe o mês e o ano referente à frequência.', 'error');
            return;
        }
        var split_ano_mes = this.mesAno.split('-');
        this.api.gerarPDF(this.cpf, split_ano_mes[0], split_ano_mes[1]).subscribe(function (data) {
            console.log(data);
            var file = new Blob([data], {
                type: 'application/pdf'
            });
            // IE
            /**
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(file);
              return;
            } */
            var blob = window.URL.createObjectURL(file);
            window.open(blob, 'newwindow', 'width=' + screen.width + ', height=' + screen.height);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Informação', 'Sua folha de frequência foi gerada!', 'success');
        }, function (error) {
            if (error.status == 500) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Ops..', 'CPF não encontrado... Tente Novamente!', 'error');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Ops..', 'Servidor Indisponível... Aguarde e Tente Novamente', 'error');
            }
        });
    };
    FrequenciaComponent.ctorParameters = function () { return [
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__["RequisicaoService"] }
    ]; };
    FrequenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frequencia',
            template: __webpack_require__(/*! raw-loader!./frequencia.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/frequencia/frequencia.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./frequencia.component.css */ "./src/app/material-component/frequencia/frequencia.component.css")]
        }),
        __metadata("design:paramtypes", [_api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__["RequisicaoService"]])
    ], FrequenciaComponent);
    return FrequenciaComponent;
}());



/***/ }),

/***/ "./src/app/material-component/iprev-play/iprev-play.component.css":
/*!************************************************************************!*\
  !*** ./src/app/material-component/iprev-play/iprev-play.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9pcHJldi1wbGF5L2lwcmV2LXBsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/material-component/iprev-play/iprev-play.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/material-component/iprev-play/iprev-play.component.ts ***!
  \***********************************************************************/
/*! exports provided: IprevPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IprevPlayComponent", function() { return IprevPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IprevPlayComponent = /** @class */ (function () {
    function IprevPlayComponent(api, sanitizer) {
        this.api = api;
        this.sanitizer = sanitizer;
        this.linksAll = [];
    }
    IprevPlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.listarIprevPlay().subscribe(function (data) {
            _this.linksAll = data;
        });
    };
    IprevPlayComponent.prototype.transform = function (style) {
        console.log(this.sanitizer.bypassSecurityTrustHtml(style));
        return this.sanitizer.bypassSecurityTrustHtml(style);
        // return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    IprevPlayComponent.ctorParameters = function () { return [
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    IprevPlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iprev-play',
            template: __webpack_require__(/*! raw-loader!./iprev-play.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/iprev-play/iprev-play.component.html"),
            styles: [__webpack_require__(/*! ./iprev-play.component.css */ "./src/app/material-component/iprev-play/iprev-play.component.css")]
        }),
        __metadata("design:paramtypes", [_api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IprevPlayComponent);
    return IprevPlayComponent;
}());



/***/ }),

/***/ "./src/app/material-component/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.routing */ "./src/app/material-component/material.routing.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-component/buttons/buttons.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/material-component/snackbar/snackbar.component.ts");
/* harmony import */ var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noticias/noticias.component */ "./src/app/material-component/noticias/noticias.component.ts");
/* harmony import */ var _telefones_telefones_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./telefones/telefones.component */ "./src/app/material-component/telefones/telefones.component.ts");
/* harmony import */ var _outros_servicos_outros_servicos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./outros-servicos/outros-servicos.component */ "./src/app/material-component/outros-servicos/outros-servicos.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _iprev_play_iprev_play_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./iprev-play/iprev-play.component */ "./src/app/material-component/iprev-play/iprev-play.component.ts");
/* harmony import */ var _ferias_ferias_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ferias/ferias.component */ "./src/app/material-component/ferias/ferias.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _frequencia_frequencia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./frequencia/frequencia.component */ "./src/app/material-component/frequencia/frequencia.component.ts");
/* harmony import */ var _dados_previdenciarios_dados_previdenciarios_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dados-previdenciarios/dados-previdenciarios.component */ "./src/app/material-component/dados-previdenciarios/dados-previdenciarios.component.ts");
/* harmony import */ var _gestao_gestao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gestao/gestao.component */ "./src/app/material-component/gestao/gestao.component.ts");
/* harmony import */ var _prova_de_vida_prova_de_vida_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./prova-de-vida/prova-de-vida.component */ "./src/app/material-component/prova-de-vida/prova-de-vida.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_9__["MaterialRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_18__["NgxMaskModule"].forRoot()
            ],
            providers: [],
            entryComponents: [],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
                _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_11__["SnackbarComponent"],
                _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_12__["NoticiasComponent"],
                _telefones_telefones_component__WEBPACK_IMPORTED_MODULE_13__["TelefonesComponent"],
                _outros_servicos_outros_servicos_component__WEBPACK_IMPORTED_MODULE_14__["OutrosServicosComponent"],
                _iprev_play_iprev_play_component__WEBPACK_IMPORTED_MODULE_16__["IprevPlayComponent"],
                _ferias_ferias_component__WEBPACK_IMPORTED_MODULE_17__["FeriasComponent"],
                _frequencia_frequencia_component__WEBPACK_IMPORTED_MODULE_19__["FrequenciaComponent"],
                _dados_previdenciarios_dados_previdenciarios_component__WEBPACK_IMPORTED_MODULE_20__["DadosPrevidenciariosComponent"],
                _gestao_gestao_component__WEBPACK_IMPORTED_MODULE_21__["GestaoComponent"],
                _prova_de_vida_prova_de_vida_component__WEBPACK_IMPORTED_MODULE_22__["ProvaDeVidaComponent"],
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/material-component/material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _prova_de_vida_prova_de_vida_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prova-de-vida/prova-de-vida.component */ "./src/app/material-component/prova-de-vida/prova-de-vida.component.ts");
/* harmony import */ var _gestao_gestao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestao/gestao.component */ "./src/app/material-component/gestao/gestao.component.ts");
/* harmony import */ var _dados_previdenciarios_dados_previdenciarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dados-previdenciarios/dados-previdenciarios.component */ "./src/app/material-component/dados-previdenciarios/dados-previdenciarios.component.ts");
//import { OutrosServicosComponent } from './outros-servicos/outros-servicos.component';
//import { TelefonesComponent } from './telefones/telefones.component';



//import { IprevPlayComponent } from './iprev-play/iprev-play.component';
//import { FeriasComponent } from './ferias/ferias.component';
//import { FrequenciaComponent } from './frequencia/frequencia.component';
var MaterialRoutes = [
    /*  {
       path: 'button',
       component: ButtonsComponent
     },
     {
       path: 'marketing', //Marketing
       component: SnackbarComponent
     },
     {
       path: 'noticias',
       component: NoticiasComponent
     }, */
    {
        path: 'dados-previdenciarios',
        component: _dados_previdenciarios_dados_previdenciarios_component__WEBPACK_IMPORTED_MODULE_2__["DadosPrevidenciariosComponent"]
    },
    {
        path: 'gestao',
        component: _gestao_gestao_component__WEBPACK_IMPORTED_MODULE_1__["GestaoComponent"]
    },
    {
        path: 'prova-de-vida',
        component: _prova_de_vida_prova_de_vida_component__WEBPACK_IMPORTED_MODULE_0__["ProvaDeVidaComponent"],
    }
    /*  {
       path: 'ramal',
       component: TelefonesComponent
     },
     {
       path: 'suporte-logistica',
       component: OutrosServicosComponent
     }, */
    /* {
      path: 'iprev-play',
      component: IprevPlayComponent
    }, */
    /*   {
        path: 'ferias',
        component: FeriasComponent
      },
      {
        path: 'frequencia',
        component: FrequenciaComponent,
      } */
];


/***/ }),

/***/ "./src/app/material-component/noticias/noticias.component.css":
/*!********************************************************************!*\
  !*** ./src/app/material-component/noticias/noticias.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9ub3RpY2lhcy9ub3RpY2lhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/material-component/noticias/noticias.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/noticias/noticias.component.ts ***!
  \*******************************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
/* harmony import */ var _modal_noticia_completa_noticia_completa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/noticia-completa/noticia-completa.component */ "./src/app/modal/noticia-completa/noticia-completa.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(dialog, api) {
        this.dialog = dialog;
        this.api = api;
        this.all_noticias = [];
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.buscarNoticias().subscribe(function (data) {
            var _loop_1 = function (i) {
                if (data[i].featured_media !== 0) {
                    _this.api.buscarImagemNoticia(data[i]._links['wp:featuredmedia'][0].href).subscribe(function (resultado) {
                        // const imagem = imagens_post['media_details'].sizes.large;
                        data[i].imagem = resultado.media_details.sizes.large.source_url;
                        data[i].imagem_leitura = resultado.media_details.sizes.medium.source_url;
                        _this.all_noticias.push(data[i]);
                    });
                }
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
            console.log(data);
            // this.lista_noticias = data;
        });
    };
    NoticiasComponent.prototype.openDialog = function (noticia) {
        var dialogRef = this.dialog.open(_modal_noticia_completa_noticia_completa_component__WEBPACK_IMPORTED_MODULE_3__["NoticiaCompletaComponent"], {
            data: { noticia: noticia }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NoticiasComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"] },
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__["RequisicaoService"] }
    ]; };
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! raw-loader!./noticias.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.css */ "./src/app/material-component/noticias/noticias.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__["RequisicaoService"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/material-component/outros-servicos/outros-servicos.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/material-component/outros-servicos/outros-servicos.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    outline: 0;\n    background: #172c4b;\n    color: #fff;\n    padding: 7px 55px;\n    font-size: 20px;\n    font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L291dHJvcy1zZXJ2aWNvcy9vdXRyb3Mtc2Vydmljb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L291dHJvcy1zZXJ2aWNvcy9vdXRyb3Mtc2Vydmljb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICMxNzJjNGI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDU1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/material-component/outros-servicos/outros-servicos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/outros-servicos/outros-servicos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OutrosServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutrosServicosComponent", function() { return OutrosServicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutrosServicosComponent = /** @class */ (function () {
    function OutrosServicosComponent(api) {
        this.api = api;
        this.chamadoAtual = {};
    }
    OutrosServicosComponent.prototype.ngOnInit = function () {
        /* this.api.listarChamadoLogistica().subscribe(
          data => {
            console.log(data)
        }) */
    };
    OutrosServicosComponent.prototype.abrirChamado = function () {
        var _this = this;
        var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        if (!this.chamadoAtual.nome_solicitante) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Ops..', 'Coloque o Nome Completo', 'error');
            return;
        }
        if (!this.chamadoAtual.email) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Ops..', 'Coloque o seu Email', 'error');
            return;
        }
        if (!er.test(this.chamadoAtual.email)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Ops..', 'Informe um email válido!', 'error');
            return;
        }
        if (!this.chamadoAtual.setor) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Ops..', 'Coloque o Setor', 'error');
            return;
        }
        if (!this.chamadoAtual.localizacao) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Ops..', 'Coloque a Localização', 'error');
            return;
        }
        if (!this.chamadoAtual.descricao) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Ops..', 'Coloque a Descrição do Problema', 'error');
            return;
        }
        var rm = {
            nome_solicitante: this.chamadoAtual.nome_solicitante,
            email: this.chamadoAtual.email,
            setor: this.chamadoAtual.setor,
            localizacao: this.chamadoAtual.localizacao,
            descricao: this.chamadoAtual.descricao
        };
        console.log(this.chamadoAtual);
        this.api.abrirChamadoLogistica(rm).subscribe(function (res) {
            _this.chamadoAtual.nome_solicitante = res.nome_solicitante,
                _this.chamadoAtual.email = res.email,
                _this.chamadoAtual.setor = res.setor,
                _this.chamadoAtual.localizacao = res.localizacao,
                _this.chamadoAtual.descricao = res.descricao;
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Informação', 'Chamado aberto com sucesso!', 'success');
        });
    };
    OutrosServicosComponent.ctorParameters = function () { return [
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"] }
    ]; };
    OutrosServicosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outros-servicos',
            template: __webpack_require__(/*! raw-loader!./outros-servicos.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/outros-servicos/outros-servicos.component.html"),
            styles: [__webpack_require__(/*! ./outros-servicos.component.css */ "./src/app/material-component/outros-servicos/outros-servicos.component.css")]
        }),
        __metadata("design:paramtypes", [_api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"]])
    ], OutrosServicosComponent);
    return OutrosServicosComponent;
}());



/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
/* harmony import */ var _modal_senha_marketing_senha_marketing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/senha-marketing/senha-marketing.component */ "./src/app/modal/senha-marketing/senha-marketing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar, api, _dialog, _formBuilder, router) {
        this.snackBar = snackBar;
        this.api = api;
        this._dialog = _dialog;
        this._formBuilder = _formBuilder;
        this.router = router;
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        this.credencial = this._formBuilder.group({
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    SnackbarComponent.prototype.onChange = function (event) {
        var selectedFiles = event.srcElement.files;
        // console.log(selectedFiles[0].type.includes('pdf'));
        var tamanhoArquivo = (selectedFiles[0].size / 1024) / 1024; // transformando byte em MB.
        if (tamanhoArquivo > 10) {
            alert('O tamanho do arquivo deve ser menor que 10MB.');
        }
        else if (!selectedFiles[0].type.includes('pdf') && !selectedFiles[0].type.includes('png') &&
            !selectedFiles[0].type.includes('bmp') && !selectedFiles[0].type.includes('jpg') &&
            !selectedFiles[0].type.includes('jpeg')) {
            alert('O arquivo deve ser do tipo foto (PNG, BMP, JPG ou JPEG).');
        }
        else {
            document.getElementById(event.target.labels[0].id).innerHTML = selectedFiles[0].name;
            this.arquivo = selectedFiles[0];
        }
    };
    SnackbarComponent.prototype.onUpload = function () {
        var _this = this;
        if (this.arquivo) {
            var caixa = this._dialog.open(_modal_senha_marketing_senha_marketing_component__WEBPACK_IMPORTED_MODULE_3__["SenhaMarketingComponent"], {
                data: {},
                hasBackdrop: true,
                width: '600px',
                disableClose: true
            });
            caixa.afterClosed().subscribe(function (result) {
                if (result !== 0) {
                    _this.api.upload(_this.arquivo, _this.data_agendamento).subscribe(function (res) { return console.log('Upload Success', res); });
                    alert('Upload realizado com sucesso!');
                    _this.router.navigate(['/dashboard']);
                }
            });
            // console.log(this.data_agendamento);
            // this.api.upload(this.arquivo, this.data_agendamento).subscribe(res => console.log('Upload Success', res));
            // alert('Upload realizado com sucesso!');
        }
    };
    SnackbarComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__["RequisicaoService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! raw-loader!./snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/material-component/snackbar/snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _api_requisicao_service__WEBPACK_IMPORTED_MODULE_2__["RequisicaoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/material-component/telefones/telefones.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/material-component/telefones/telefones.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90ZWxlZm9uZXMvdGVsZWZvbmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/material-component/telefones/telefones.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/telefones/telefones.component.ts ***!
  \*********************************************************************/
/*! exports provided: TelefonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefonesComponent", function() { return TelefonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/requisicao.service */ "./src/app/api/requisicao.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TelefonesComponent = /** @class */ (function () {
    function TelefonesComponent(api) {
        this.api = api;
        this.ramais = [];
    }
    TelefonesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.listarRamais().subscribe(function (data) {
            console.log(data);
            _this.ramais = data;
        });
    };
    TelefonesComponent.ctorParameters = function () { return [
        { type: _api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"] }
    ]; };
    TelefonesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-telefones',
            template: __webpack_require__(/*! raw-loader!./telefones.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/telefones/telefones.component.html"),
            styles: [__webpack_require__(/*! ./telefones.component.css */ "./src/app/material-component/telefones/telefones.component.css")]
        }),
        __metadata("design:paramtypes", [_api_requisicao_service__WEBPACK_IMPORTED_MODULE_1__["RequisicaoService"]])
    ], TelefonesComponent);
    return TelefonesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=material-component-material-module.js.map