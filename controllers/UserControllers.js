// const User = require('../models/user')
// const Publicacion = require('../models/publicacion')

// const ProfileController = {}

// /* Getting the publicaciones of a user. OJO!! esto para coger las pelis de un user cambiar parámetros */
// ProfileController.getPublicaciones = async (req, res) => {
//     try{
//         let usuario = req.params.usuario
//         let resp = await Perfil.findAll({
//             where: { nomUsuario: usuario},
//             include: {
//                 model: Publicacion,
//                 attributes: ['texto', 'likes']
//             },
//             attributes: ['nomUsuario', 'usuarioMail']
//         })
//         res.send(resp)
//     } catch (err) {
//         res.send(err)
//     }
// }


// module.exports = ProfileController