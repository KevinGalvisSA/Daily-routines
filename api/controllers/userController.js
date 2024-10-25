const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Registrar usuario
exports.registrarUsuario = async (req, res) => {
    const { name, email, password } = req.body; 
    try {
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) return res.status(400).json({ message: 'El usuario ya existe' });

        const nuevoUsuario = new User({
            nombre_usuario: name,
            email: email,
            contraseña: password  
        });
        await nuevoUsuario.save();
        res.status(201).json({ message: 'Usuario creado con éxito', user: nuevoUsuario });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
};


// Iniciar sesión
exports.iniciarSesion = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await User.findOne({ email }).select('-contraseña -fecha_de_creacion'); // Excluir contraseña y fecha de creación
        if (!usuario) return res.status(400).json({ message: 'Usuario no encontrado' });

        const esContrasenaValida = await bcrypt.compare(password, usuario.contraseña);
        if (!esContrasenaValida) return res.status(400).json({ message: 'Contraseña incorrecta' });

        // Generar el token JWT
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '30m' });

        // Devolver la información excluyendo contraseña y fecha de creación
        res.json({
            message: 'Inicio de sesión exitoso',
            token,
            user: {
                ...usuario.toObject(),
                fecha_y_hora_de_inicio_de_sesion: new Date() // Añadir fecha y hora actual
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};

exports.validarSesion = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token no proporcionado' });

    const token = authHeader.split(' ')[1]; // Obtener el token del header

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ message: 'Sesión válida', data: decoded }); // Devolver la información del token decodificado
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find().select('-contraseña');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

exports.obtenerUsuarioPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await User.findById(id).select('-contraseña');
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

// userController.js
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const datosActualizados = req.body;

        const usuario = await User.findByIdAndUpdate(usuarioId, datosActualizados, { new: true });
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

        res.json({ message: 'Usuario actualizado con éxito', usuario });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
};


exports.eliminarUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioEliminado = await User.findByIdAndDelete(id);
        if (!usuarioEliminado) return res.status(404).json({ message: 'Usuario no encontrado' });

        res.json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
};

