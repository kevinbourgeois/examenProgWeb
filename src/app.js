import User from "./User.js";

const getprofiles = fetch("https://randomuser.me/api/?results=20")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        for (const user of res.results) {
            const usr = new User(user.name.title + " " + user.name.first + " " + user.name.last,
                                    user.dob.age,
                                    user.picture.large,
                                    user.location.city + ", " + user.location.country,
                                    user.email);

            usr.display();
        }
    });


