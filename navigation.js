const navigation = Vue.createApp({
  data() {
    return {
      navigationItems: [{
        name: "index",
        link: "index.html",
      },{
        name: "Vue School Foundations",
        link: "vueSchoolFundamentals.html"
      }]
    };
  }
}).mount(".navigation");
