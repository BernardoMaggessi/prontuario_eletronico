import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: 'Access Denied! Token is missing.' });
    }

    const token = authHeader; // Pega o token diretamente

    if (!token) {
        return res.status(401).json({ error: 'Invalid Token format!' });
    }

    try {
        // Verifique se a chave secreta é a mesma que usou na criação do token
        console.log('Verificando token com a chave secreta:', process.env.JWT_SECRET_KEY || 'you-secret-key');
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || 'you-secret-key');
        req.doctorId = decoded.doctorId; // Associa o doctorId ao request
        next(); // Passa para a próxima função
    } catch (error) {
        console.error('Token verification error:', error); // Log de erro para depuração
        return res.status(401).json({ error: 'Invalid token!' });
    }
}

export default verifyToken;
