module.exports = function (req, res, next) {
    let roles = [req.user.role];
    if (!roles.includes("COMPANY")) return res.status(403).send("Access denied");
    next();
};
