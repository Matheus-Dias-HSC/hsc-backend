module.exports = (req, res, next) => {
    if(!req.headers.hsc_key || 
        req.headers.hsc_key !== process.env.HSC_KEY_FRONT) return res.status(403).json({ status: 403, msg: "Access Forbidden" });
    next();
}