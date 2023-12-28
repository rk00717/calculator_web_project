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
    add_button("AC", function(){ clear_values()}, "first-row-set", "btn-invert");
    add_button("CE", function(){ remove_value()}, "first-row-set", "btn-invert");

    add_button("%", function(){ add_value("%") }, "first-row-set");
    add_button("/", function(){ add_value("/") }, "first-row-set");
    
    add_button("7", function(){ add_value("7") });
    add_button("8", function(){ add_value("8") });
    add_button("9", function(){ add_value("9") });

    add_button("*", function(){ add_value("*") });
    
    add_button("4", function(){ add_value("4") });
    add_button("5", function(){ add_value("5") });
    add_button("6", function(){ add_value("6") });

    add_button("-", function(){ add_value("-") });
    
    add_button("1", function(){ add_value("1") });
    add_button("2", function(){ add_value("2") });
    add_button("3", function(){ add_value("3") });

    add_button("+", function(){ add_value("+") });
    
    add_button("0", function(){ add_value("0") });

    add_button(".", function(){ add_value(".") });
    add_button("=", calculate, "w-2", "btn-invert");
}

function add_button(innerElement, clickAction = null, ...classNames){
    var button = document.createElement("button");
    button.innerHTML = innerElement;
    button.classList.add("calc-btn");
    
    classNames.forEach(function (name) {
        button.classList.add(name);
    });

    if(clickAction != null)
        button.addEventListener("click", clickAction);
    
    button_container.appendChild(button);
}

var result_display = document.getElementById("result_display");
var didCalculate = false;

function add_value(value){
    if(result_display.value == "0"){
        result_display.value = value;
        return;
    }

    result_display.value += value;
}

function remove_value(){
    if(didCalculate){
        didCalculate = false;
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
        result_display.value = "ERR";
    }
}