window.onscroll = function() {myFunction()};
        
        let navbar = document.getElementById("navbar");
        let sticky = navbar.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }

        function openpage(){
            let x=document.getElementById("search-bar").value;

            if(x==="html"){
                window.open("/html-page.html");
            }
            else if(x==="css"){
                window.open("/css-page.html");
            }
            else if(x==="about"){
                window.open("/about.html");
            }
            else if(x==="home"){
                window.open("/home.html");
            }
        }