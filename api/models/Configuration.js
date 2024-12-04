const mongoose = require("mongoose");

const configurationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true, // Keep some essential fields if needed
    },
    data: {
      type: mongoose.Schema.Types.Mixed, // Allows any data structure
      default: {}, // Default to an empty object if nothing is provided
    },
    is_active: {
      type: Boolean,
      default: true, // Optional field to maintain an active status
    },
  },
  { strict: false } // Allows fields outside the schema to be stored
);

const Configurations = mongoose.model("configurations", configurationSchema);

module.exports = Configurations;