export const themeData = {
  "repo": "",
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": false,
  "nav": [
    {
      "text": "Accommodation",
      "link": "/#accommodation"
    },
    {
      "text": "Skiarea",
      "link": "/skiarea/"
    },
    {
      "text": "SignUp",
      "link": "https://forms.gle/wW3zqq3KjP1FDMuc6"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "title": "Guide",
        "collapsable": false,
        "children": [
          "",
          "using-vue"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
