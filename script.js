const btn = document.getElementById("btn");

            btn.addEventListener('click', run);

            // console.log(name, age)

            function checkAge() {
                const umar = document.getElementById('age').value;
                const naam = document.getElementById('name').value;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (umar >= 18) {
                            resolve("Welcome "+ naam +" You can vote")
                        }
                        else {
                            reject("Sorry "+ naam +" You can not vote");
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