function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by 0";
    }
    return a / b;
}

function calculate() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operator").value;

    let result;

    // 檢查是否為有效數字
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultText").innerText = "Result = Invalid input";
        return;
    }

    switch (op) {
        case "+":
            result = add(n1, n2);
            break;
        case "-":
            result = subtract(n1, n2);
            break;
        case "*":
            result = multiply(n1, n2);
            break;
        case "/":
            result = divide(n1, n2);
            break;
    }

    if (typeof result === "string") {
        document.getElementById("resultText").innerText = result;
    } else {
        document.getElementById("resultText").innerText =
            "Result = " + result.toFixed(2);
    }
}
