const ERROR_DISPLAY = "ERR"

function set_theme(value){
    document.body.classList.toggle("dark-theme", value);
    document.body.classList.toggle("light-theme", !value);
}

function init_theme(){
    const themeToggle = document.getElementById("themeToggle");    
    
    themeToggle.addEventListener('change', function() {
        set_theme(this.checked);
        
        let theme = (this.checked)? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
    
    const isDarkTheme = localStorage.getItem("theme") == "dark";
    themeToggle.checked = isDarkTheme;
    set_theme(isDarkTheme);
}

var button_container = document.getElementById("button_container");

function init_buttons(){
    add_button("AC", "CLEAR", "first-row-set", "btn-invert");
    add_button("CE", "REMOVE", "first-row-set", "btn-invert");

    add_button("%", "ADD", "first-row-set");
    add_button("/", "ADD", "first-row-set");
    
    add_button("7");
    add_button("8");
    add_button("9");

    add_button("*");
    
    add_button("4");
    add_button("5");
    add_button("6");

    add_button("-");
    
    add_button("1");
    add_button("2");
    add_button("3");

    add_button("+");
    
    add_button("0");

    add_button(".");
    add_button("=", "CALCULATE", "w-2", "btn-invert");
}

function add_button(innerElement, clickAction = "ADD", ...classNames){
    var button = document.createElement("button");
    button.innerHTML = innerElement;
    button.classList.add("calc-btn");
    
    classNames.forEach(function (name) {
        button.classList.add(name);
    });

    switch(clickAction){
        case "ADD":
            button.addEventListener("click", function(){add_value(innerElement)});
            break;
        case "CLEAR":
            button.addEventListener("click", function(){clear_values()});
            break;
        case "REMOVE":
            button.addEventListener("click", function(){remove_value()});
            break;
        case "CALCULATE":
            button.addEventListener("click", function(){calculate()});
            break;
        default:
            console.log(typeof(innerElement) + " " + innerElement);
            break;
    }
    
    button_container.appendChild(button);
}

var result_display = document.getElementById("result_display");
var didCalculate = false;

function add_value(value){
    if(result_display.value == "0" || result_display.value == ERROR_DISPLAY){
        result_display.value = value;
        return;
    }
    
    result_display.value += value;
}

function remove_value(){
    if(result_display.value == ERROR_DISPLAY){
        result_display.value = "0";
        return;
    }

    result_display.value = result_display.value.slice(0, -1);
    
    if(result_display.value == ""){
        result_display.value = "0";
    }
}

function clear_values(){
    result_display.value = "0";
}

function calculate(){
    didCalculate = true;

    try{
        if(result_display.value == ""){
            result_display.value = "0";
        }

        result_display.value = eval(result_display.value);
    }catch(e){
        result_display.value = ERROR_DISPLAY;
    }
}