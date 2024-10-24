// Middleware para verificar si el token almacenado en la sesión es válido
const jwt = require('jsonwebtoken');

const verificarSesion = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No hay token en la sesión.' });
    }

    // Verificar el token JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido o expirado.' });
        }

        // Token válido, almacenar la información del usuario decodificada en la solicitud
        req.user = decoded;
        next();
    });
};

module.exports = verificarSesion;