const checkMillionDollarIdea = (req, res, next) => {
    const {weeklyRevenue, numWeeks} = req.body;
    const totalValue = numWeeks * weeklyRevenue;
    if (!numWeeks || !weeklyRevenue || isNaN(totalValue) || totalValue < 1000000) {
        res.status(400).send();
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
