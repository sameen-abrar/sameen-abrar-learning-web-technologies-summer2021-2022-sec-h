
    const username = document.getElementById('userid');
    const password = document.getElementById('pass');
    const login = document.getElementById('loginform');
    const errorMes = document.getElementById('error');
    const iderror = document.getElementById('iderror');

    // login.addEventListener('Submit', (e) =>
    // {
        // let messages = []

        // if(username.value == null || username.value == '')
        // {
        //     messages.push('ID is required')
        //     iderror.innerHTML('ID is required')

        // }

        // if(password.value == null || password.value == '')
        // {
        //     messages.push('Password is required')

        // }

        // if (messages.length > 0)
        // {
        //     console.log(messages.length)
        //     // console.log(password.value)
        //     e.preventDefault()
        //     errorMes.innerText = messages.join(', ')
        // }

        function ajax(){
            // e.preventDefault();
            // let username = document.getElementById('userid').value;
            // let password = document.getElementById('pass').value;
            let loginxhttp = new XMLHttpRequest();
            //loginxhttp.open('GET', 'userCheck.php?username='+username, true);
            loginxhttp.open('POST', '../controller/checkUser.php', true);
            loginxhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");     
            loginxhttp.send('username='+username);
            // loginxhttp.send('password='+password);
            loginxhttp.onreadystatechange = function()
            {

                if(this.readyState == 4 && this.status == 200){
                    //document.getElementById('head').innerHTML = this.responseText;
                    alert(this.responseText);
                }             
            }


            let passxhttp = new XMLHttpRequest();
            //passxhttp.open('GET', 'userCheck.php?username='+username, true);
            passxhttp.open('POST', '../controller/checkpass.php', true);
            passxhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");     
            passxhttp.send('password='+password);
            // passxhttp.send('password='+password);
            passxhttp.onreadystatechange = function()
            {

                if(this.readyState == 4 && this.status == 200){
                    //document.getElementById('head').innerHTML = this.responseText;
                    alert(this.responseText);
                }             
            }
            
           

           
        }

    // })
    
                // function validId()
                // {
                //     // document.write();
                //     let username = document.getElementsByName('username').value;
                //     if (username != 'A')
                //     {
                //         document.getElementById("userid").innerHTML = "Enter Valid ID";
                //     }
                //     else
                //     {
                //         document.getElementById("userid").innerHTML = "";
                //     }


                // }
                // function validPass()
                // {
                //     let password = document.getElementsByName('password').value;
                //     var len = password.length;
                //     // document.write(len);
                //     if(len < 8)
                //     {
                //         document.getElementById("pass").innerHTML = "Password must be atleast 8 letters";
                //     }
                // }
