const navigation = Vue.createApp({
  data() {
    return {
      navigationItems: {
        index: {
          name: "index",
          link: "index.html",
        },
        vueSchoolFoundations: {
          name: "Vue School Foundations",
          link: "vueSchoolFoundations.html",
        },
      },
    };
  },
  methods: {
    createNavigation() {
      const navBar = document.querySelector(".navigation");
      console.dir(navBar);
    },
  },
  mounted() {
    this.createNavigation();
  },
}).mount(".navigation");
