// src/http/get-cats/index.js
exports.handler = async function http(req) {
  return {
    type: "application/json",
    status: 201,
    body: JSON.stringify({ cats: ["sutr0"] })
  }
}
