const contractAddresses = require("./contractAddresses.json")
const abi = require("./abi.json")

module.exports = {
    contractAddresses,
    abi,
}
//this just helps us instead of importing them seperately we can now just import them using one line in our lottery enterance file.