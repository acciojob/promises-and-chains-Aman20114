const btn = document.getElementById("btn");

            btn.addEventListener('click', run);

            function checkAge() {
				const form = document.querySelector("form");
                const umar = document.getElementById('age').value;
                const naam = document.getElementById('name').value;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (umar >= 18) {
                            resolve("Welcome "+ naam +". You can vote")
                        }
                        else {
                            reject("Oh sorry "+ naam +". You aren't old enough.");
                        }
                    }, 4000);

                })


            }

           // function run(){
           //       checkAge().then((res) => {
           //      alert(res);
           //  })
           //      .catch((err) => {
           //          alert(err);
           //      });
           //  }