const navigation = Vue.createApp({
  data() {
    return {
      navigationItems: [{
        name: "Playground",
        link: "index.html",
      },{
        name: "Vue School Foundations",
        link: "vueSchoolFundamentals.html"
      },{
        name: "Portfolio Page",
        link: "portfolio.html"
      }]
    };
  }
}).mount(".navigation");
