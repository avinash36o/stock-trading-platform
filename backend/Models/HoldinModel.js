const { HoldingsSchema } = require("../schema/HoldingsSchema.js");
const { model } = require("mongoose");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
