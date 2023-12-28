const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener('change', function() {
    if(this.checked){
        document.documentElement.style.setProperty("--text-color", "#a492df");
        document.documentElement.style.setProperty("--bg-color", "#18122B");
        document.documentElement.style.setProperty("--display-color", "#443C68");
        document.documentElement.style.setProperty("--btn-bg-color", "#393053");
        document.documentElement.style.setProperty("--btn-bg-color2", "#635985");
    }else{
        document.documentElement.style.setProperty("--text-color", "#BBAB8C");
        document.documentElement.style.setProperty("--bg-color", "#FAEED1");
        document.documentElement.style.setProperty("--display-color", "#DED0B6");
        document.documentElement.style.setProperty("--btn-bg-color", "#BBAB8C");
        document.documentElement.style.setProperty("--btn-bg-color2", "#FDF7E4");
    }
});

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