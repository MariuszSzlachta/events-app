const path = require("path");

const APP_DIR = path.resolve(__dirname, "../src/main/resources");

module.exports.aliases = {
    // Commons
    Common: path.resolve(__dirname, `${APP_DIR}/scripts/common`),
    Utils: path.resolve(__dirname, `${APP_DIR}/scripts/common/utils/index.js`),
    // Components
    Pages: path.resolve(__dirname, `${APP_DIR}/scripts/pages/index.js`),
    Images: path.resolve(__dirname, `${APP_DIR}/images`),
    App: path.resolve(__dirname, APP_DIR)
};
