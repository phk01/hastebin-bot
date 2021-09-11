let checkcommand = require(`../../handlers/functions`).checkcommand

module.exports = (Discord, client, message) => {
    checkcommand(message, client)
}