export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Welcome to the yesfam ski trip!",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://yestheory.com/wp-content/themes/prop/images/Final-Yes-Theory-Logo.png",
    "title": "Welcome to the yesfam ski trip!",
    "tagline": "Welcome to the yesfam ski trip! On this page you can find the current status and all the information about the ski trip.",
    "actionText": "Signup Form →",
    "actionLink": "https://forms.gle/wW3zqq3KjP1FDMuc6",
    "features": [
      {
        "title": "When?",
        "details": "05th of March 2022 - 12th of March 2022"
      },
      {
        "title": "Where?",
        "details": "We have some accommodations reservated in the Swiss and Austrian Alps. More Information about the exact accommodation are coming as soon as the signup is finished"
      },
      {
        "title": "Cost",
        "details": "We calculate with around ~600€. For more information see the cost section."
      }
    ],
    "footer": "Made by Chris with ❤️"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Chris",
      "slug": "chris",
      "children": []
    },
    {
      "level": 3,
      "title": "Freddy",
      "slug": "freddy",
      "children": []
    },
    {
      "level": 3,
      "title": "Joshua",
      "slug": "joshua",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "contributors": [
      {
        "name": "Christian Wolter",
        "email": "48556854+chrisWolter@users.noreply.github.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
