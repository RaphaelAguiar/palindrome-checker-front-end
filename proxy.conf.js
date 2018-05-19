const proxy = [{
  context: "/is-palindrome",
  target: "http://localhost:8080"
}];

module.exports = proxy;