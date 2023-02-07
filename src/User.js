class User {
    name;
    age;
    profilepic;
    location;
    isPresent;
    email;
    element;
    static usrCounter = 0;


    constructor(name, age, profilepic, location, email) {
        this.name = name;
        this.age = age;
        this.profilepic = profilepic;
        this.location = location;
        this.email = email;
        this.isPresent = false;

        this.element = this.#generateElement();
        this.element.addEventListener("click", (evt) => {
            this.#checkUncheck(evt);
        })

    }

    #checkUncheck(evt) {
        const counter = document.querySelector(".counter");
        const target = evt.currentTarget;


        let int = parseInt(counter.innerHTML.slice(0, 1));

        let val = true;
        if (target.getAttribute("data-present") === "true") {
            val = false;
            User.usrCounter--;
        } else {
            User.usrCounter++;
        }

        target.setAttribute("data-present", val);
        this.element = val;

        counter.innerHTML = User.usrCounter + "/20 people are here";


    }


    #generateElement() {
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.setAttribute("data-present", "false");

        const childHTML = `
		                <img src="${this.profilepic}">
                <div class="user--info">
                        <h1>${this.name}</h1>
                        <p>${this.age} years old</p>
                        <p>${this.location}</p>
                </div>
                    <a href="mailto:${this.email}">
                        <span class="mail">✉</span>
                    </a>`;


        containerElement.insertAdjacentHTML("afterbegin", childHTML);

        return containerElement;
    }

    display() {
        document.querySelector("main").appendChild(this.element);
    }




}

export default User;

