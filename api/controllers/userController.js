const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Registrar usuario
exports.registrarUsuario = async (req, res) => {
    const { name, email, password } = req.body;  // Cambiar 'contraseña' por 'password'
    try {
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) return res.status(400).json({ message: 'El usuario ya existe' });

        const nuevoUsuario = new User({
            name: name,
            email: email,
            password: password  // Asegúrate de que el campo coincida
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

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '30m' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
}
