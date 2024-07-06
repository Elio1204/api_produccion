const modelPost = require("../models/socksModels.js")


const todosProductos = async (req,res)=>{
    // console.log('Estos son todos los productos');
try {
    const allPost = await modelPost.findAll()
    res.json(allPost)
    // console.log('Resultado', allPost);
} catch (error) {
    res.json({message:error.message})
}
}

const unProd = async (req,res)=>{
    try {
        const producto = await modelPost.findByPk(req.params.id)
        res.json(producto)    
    } catch (error) {
        res.json({message:error.message});
    }
    
}

const agregaProd = async (req,res)=>{
    try {
        await modelPost.create(req.body)
        console.log('REgistro insertado correctamente');
    } catch (error) {
        res.json({message:error.message});
        
    }
}

const actualiza = async (req,res)=>{
    try {
        await modelPost.update(req.body,{
            where:{id:req.params.id}
        })
        res.json('Registro editado crrectamente')
    } catch (error) {
        res.json({message:error.message})
    }
}

const eliminarReg = async (req,res)=>{
    try {
        await modelPost.destroy({where:{id:req.params.id}})
        res.json("Registro eliminado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {todosProductos, unProd, agregaProd, actualiza, eliminarReg}