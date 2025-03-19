import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: 'Access Denied! Token is missing.' });
    }

    const token = authHeader.split(" ")[1]; // Pega apenas o token sem o "Bearer"
    
    if (!token) {
        return res.status(401).json({ error: 'Invalid Token format!' });
    }

    try {
        const decoded = jwt.verify(token, 'you-secret-key'); // Verifica o token
        req.doctorId = decoded.doctorId; // Associa o doctorId ao request
        next(); // Passa para a próxima função
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token!' });
    }
}

export default verifyToken;
