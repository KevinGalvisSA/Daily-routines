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
            name: name,
            email: email,
            password: password  
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
        const usuario = await User.findOne({ email });
        if (!usuario) return res.status(400).json({ message: 'Usuario no encontrado' });

        const esContrasenaValida = await bcrypt.compare(password, usuario.password);
        if (!esContrasenaValida) return res.status(400).json({ message: 'Contraseña incorrecta' });

        // Generar el token JWT con un tiempo de expiración de 30 minutos
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '30m' });

        // Almacenar el token en la sesión del usuario
        req.session.token = token;
        req.session.user = { id: usuario._id, email: usuario.email };  // Almacenar información adicional si es necesario

        console.log(req.session.token, req.session.user);

        // Devolver el token en la respuesta también, si lo necesitas en el cliente
        res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};
