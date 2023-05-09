const { createApp } = Vue

createApp({
    data() {
        return {
            value: 0,
            btnTxt: "+1"
        }
    },
    methods: {
        increment(){
            this.value++
        }
    }
}).mount("#app");

createApp({
    data() {
        return {
           username: "",
           user: "user"
        }
    },
    methods: {
        submit(){
           let name = document.querySelector("#input").value;
           console.log(name);
           this.user = name;
        }
    }
}).mount("#user");

createApp({
    data(){
        return {
            page: 0,
            count: 1
        }
    },
    methods: {
        nextPage(){
            this.page++;
            this.count++;
            if (this.page >= 5) {
                this.page = 0;
                this.count = 1;
            }
        }
    }
}).mount("#if-statements")

const textAreaInp = document.querySelector("#your-message");

createApp({
    data(){
        return {
            minVal: 25,
            maxVal: 500
        }
    },
    methods: {
        getLength(){
            // let msgLength = textAreaInp.value;
            console.dir(textAreaInp)
        }
    }
}).mount("#contact-form")
