export const authMiddleWare = async (req, res, next) => {
    const authHeader = req.headers.authorization    
    if (!authHeader){
        return res.status(401).json({message: 'Unathorized'})
    }
    next()
}