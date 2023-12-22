let default_angle = "deg";

//function to convert degree to radian
function deg_to_rad() {
    rad = deg * Math.PI / 180;
}

//function to calculate the power
function power(x, y) {
    return Math.pow(x, y);
}

//function to calculate the nth root
function nth_root(x, y) {
    return Math.pow(x, 1 / y);
}

//function to calculate the factorial
function factorial(x) {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

//function to calculate the log
function log(x) {
    return Math.log10(x);
}

//function to calculate the natural log
function ln(x) {
    return Math.log(x);
}

//function to calculate the sin
function sin(x) {
    if (default_angle == "deg") {
        return Math.sin(x * Math.PI / 180);
    }
    return Math.sin(x);
}

//function to calculate the cos
function cos(x) {
    if (default_angle == "deg") {
        return Math.cos(x * Math.PI / 180);
    }
    return Math.cos(x);
}

//function to calculate the tan
function tan(x) {
    if (default_angle == "deg") {
        return Math.tan(x * Math.PI / 180);
    }
    return Math.tan(x);
}

//function to calculate the sinh
function sinh(x) {
    if (default_angle == "deg") {
        return Math.sinh(x * Math.PI / 180);
    }
    return Math.sinh(x);
}

//function to calculate the cosh
function cosh(x) {
    if (default_angle == "deg") {
        return Math.cosh(x * Math.PI / 180);
    }
    return Math.cosh(x);
}

//function to calculate the tanh
function tanh(x) {
    if (default_angle == "deg") {
        return Math.tanh(x * Math.PI / 180);
    }
    return Math.tanh(x);
}

//function to calculate the asin
function asin(x) {
    if (default_angle == "deg") {
        return Math.asin(x) * 180 / Math.PI;
    }
    return Math.asin(x);
}

//function to calculate the acos
function acos(x) {
    if (default_angle == "deg") {
        return Math.acos(x) * 180 / Math.PI;
    }
    return Math.acos(x);
}

//function to calculate the atan
function atan(x) {
    if (default_angle == "deg") {
        return Math.atan(x) * 180 / Math.PI;
    }
    return Math.atan(x);
}

//function to calculate the asinh
function asinh(x) {
    if (default_angle == "deg") {
        return Math.asinh(x) * 180 / Math.PI;
    }
    return Math.asinh(x);
}

//function to calculate the acosh
function acosh(x) {
    if (default_angle == "deg") {
        return Math.acosh(x) * 180 / Math.PI;
    }
    return Math.acosh(x);
}

//function to calculate the atanh
function atanh(x) {
    if (default_angle == "deg") {
        return Math.atanh(x) * 180 / Math.PI;
    }
    return Math.atanh(x);
}

//function to calculate the percentage
function percentage(x) {
    return x / 100;
}

