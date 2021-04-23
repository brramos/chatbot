const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/.cache/dev-404-page.js"))),
  "component---web-pages-404-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/404.tsx"))),
  "component---web-pages-demo-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/demo.tsx"))),
  "component---web-pages-index-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/index.tsx"))),
  "component---web-pages-overview-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/overview.tsx"))),
  "component---web-pages-start-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/start.tsx"))),
  "component---web-pages-train-tsx": hot(preferDefault(require("/Users/frederickforester/Documents/GitHub/chatbot/typescript/web/pages/train.tsx")))
}

