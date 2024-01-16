"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// importando apenas o Router do express com destructuring
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update); // loginRequired pois precisamos do ID do user logado
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/**
index -> lista todos os usuarios     -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario           -> DELETE
show -> mostra um usuario            -> GET
update -> atualiza um usuario        -> PATCH ou PUT
*/
