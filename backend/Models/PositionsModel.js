const { model } = require("mongoose");

const { PositionsSchema } = require("../schema/PositionsSchema.js");

const PositionsModel = new model("postion", PositionsSchema);

module.exports = { PositionsModel };
