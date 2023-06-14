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



createApp({
    data(){
        return {
            count: 0,
            minVal: 25,
            maxVal: 500,
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    },
    methods: {
        prepTextArea(){
            const textAreaInp = document.querySelector("#your-message");
            textAreaInp.placeholder = `Your message here, max ${this.maxVal} characters`;
            textAreaInp.minLength = this.minVal;
            textAreaInp.maxLength = this.maxVal;

            const maxValBox = document.querySelector(".max-val");
            maxValBox.innerText = this.maxVal;
        },
        getLength(){
            const textAreaInp = document.querySelector("#your-message");
            const counterSpan = document.querySelector(".counter");
            const msgLength = textAreaInp.value.length;
            counterSpan.innerText = msgLength;
            this.count = msgLength;
        },
        giveUserFeedback(){
            const formBox = document.querySelector("form");
            formBox.innerHTML = `Thank you ${this.name} for sending in a message! You will receive feedback to ${this.email} soon.`;
        }
    },
    mounted(){
        this.prepTextArea();
    }
}).mount("#contact-form");