"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

const router = new (0, _express.Router)();

router.get('/', _HomeController2.default.index);

exports. default = router;

/*
* Tabela de padrões para seguir de acordo com o curso
*
* index -> lista todos registros
* create ou store -> cria um novo registro
* delete -> remove um registro
* show -> consulta(exibe) um registro
* update -> atualiza um registro
*/
