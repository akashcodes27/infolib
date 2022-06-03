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