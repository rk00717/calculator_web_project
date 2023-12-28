function init_theme(){
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    
    const isDarkTheme = localStorage.getItem("theme") == "dark";
    
    themeToggle.addEventListener('change', function() {
        body.classList.toggle("dark-theme", this.checked);
        body.classList.toggle("light-theme", !this.checked);
        
        let theme = (this.checked)? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
    

    themeToggle.checked = isDarkTheme;
    body.classList.toggle("dark-theme", isDarkTheme);
    body.classList.toggle("light-theme", !isDarkTheme);
}

var button_container;

function init_buttons(){
    button_container = document.getElementById("button_container");

    add_button("AC", "first-row-set", "btn-invert")
    add_button("CE", "first-row-set", "btn-invert")

    add_button("%", "first-row-set")
    add_button("/", "first-row-set")
    
    add_button("7")
    add_button("8")
    add_button("9")

    add_button("*")
    
    add_button("4")
    add_button("5")
    add_button("6")

    add_button("-")
    
    add_button("1")
    add_button("2")
    add_button("3")

    add_button("+")
    
    add_button("0")

    add_button(".")
    add_button("=", "w-2", "btn-invert")
}

function add_button(innerElement, ...classNames){
    var button = document.createElement("button");
    button.innerHTML = innerElement;
    button.classList.add("calc-btn");
    
    classNames.forEach(function (name) {
        button.classList.add(name);
    });
    
    button_container.appendChild(button);
}