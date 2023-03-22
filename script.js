const btn = document.getElementById("btn");

            btn.addEventListener('click', (event) => {
    event.preventDefault();

            function checkAge() {
				const form = document.querySelector("form");
                const ageIn = document.getElementById('age').value;
                const nameIn = document.getElementById('name').value;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (umar >= 18) {
                            resolve("Welcome "+ nameIn +". You can vote")
                        }
                        else {
                            reject("Oh sorry "+ nameIn +". You aren't old enough.");
                        }
                    }, 4000);

                })


            }

           function run(){
                 checkAge().then((res) => {
                alert(res);
            })
                .catch((err) => {
                    alert(err);
                });
            }