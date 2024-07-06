const express = require("express")
const router  = express.Router()
const {todosProductos,unProd, agregaProd, actualiza,eliminarReg} = require('../controllers/productoCont.js')

router.get("/", todosProductos)
router.get("/:id", unProd)
router.post("/",agregaProd)
router.put("/:id",actualiza)
router.delete("/:id",eliminarReg)


module.exports = router