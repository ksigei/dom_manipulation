const display_box = document.getElementById("display_box");
const plus_button = document.getElementById("plus");
const minus_button = document.getElementById("minus");
const multiply_button = document.getElementById("multiply");
const divide_button = document.getElementById("divide");
const equal_button = document.getElementById("equal");
const clear_button = document.getElementById("clear");
// numbers
const zero_button = document.getElementById("btn_zero");
const one_button = document.getElementById("btn_one");
const two_button = document.getElementById("btn_two");
const three_button = document.getElementById("btn_three");
const four_button = document.getElementById("btn_four");
const five_button = document.getElementById("btn_five");
const six_button = document.getElementById("btn_six");
const seven_button = document.getElementById("btn_seven");
const eight_button = document.getElementById("btn_eight");
const nine_button = document.getElementById("btn_nine");

// variables for calculation
let left_operand = [];
let right_operand = [];  
let operator = "";
let result = 0;

// event listeners
plus_button.addEventListener("click", () => {
  operator = "+";
  display_box.value = "";
});
minus_button.addEventListener("click", () => {
  operator = "-";
  display_box.value = "";
});
multiply_button.addEventListener("click", () => {
  operator = "*";
  display_box.value = "";
});
divide_button.addEventListener("click", () => {
  operator = "/";
  display_box.value = "";
});
equal_button.addEventListener("click", () => {
  switch (operator) {
    case "+":
      result = parseInt(left_operand.join("")) + parseInt(right_operand.join(""));
      break;
    case "-":
      result = parseInt(left_operand.join("")) - parseInt(right_operand.join(""));
      break;
    case "*":
      result = parseInt(left_operand.join("")) * parseInt(right_operand.join(""));
      break;
    case "/":
      result = parseInt(left_operand.join("")) / parseInt(right_operand.join(""));
      break;
  }
  display_box.value = result;
  left_operand = [];
  right_operand = [];
  operator = "";
});

clear_button.addEventListener("click", () => {
    left_operand = [];
    right_operand = [];
    operator = "";
    display_box.value = "";
    });

// numbers
zero_button.addEventListener("click", () => { //arrow function, es6
  if (operator === "") {
    left_operand.push("0");
    display_box.value = left_operand.join("");
  } else {
    right_operand.push("0");
    display_box.value = right_operand.join("");
  }
});

one_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("1");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("1");
        display_box.value = right_operand.join("");
    }
    }
);

two_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("2");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("2");
        display_box.value = right_operand.join("");
    }
    }
);

three_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("3");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("3");
        display_box.value = right_operand.join("");
    }
    }
);

four_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("4");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("4");
        display_box.value = right_operand.join("");
    }
    }

);

five_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("5");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("5");
        display_box.value = right_operand.join("");
    }
    }

);

six_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("6");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("6");
        display_box.value = right_operand.join("");
    }
    }

);

seven_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("7");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("7");
        display_box.value = right_operand.join("");
    }
    }

);

eight_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("8");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("8");
        display_box.value = right_operand.join("");
    }
    }

);

nine_button.addEventListener("click", () => {
    if (operator === "") {
        left_operand.push("9");
        display_box.value = left_operand.join("");
    } else {
        right_operand.push("9");
        display_box.value = right_operand.join("");
    }
    }

);
