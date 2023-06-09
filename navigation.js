const navigation = Vue.createApp({
  data() {
    return {
      navigationItems: [{
        name: "Playground",
        link: "index.html",
      },{
        name: "Vue School",
        link: "vueSchoolFundamentals.html"
      },{
        name: "Portfolio",
        link: "portfolio.html"
      }]
    };
  }
}).mount(".navigation");
