const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/.cache/dev-404-page.js"))),
  "component---web-pages-index-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/index.tsx")))
}

