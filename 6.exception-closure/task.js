function parseCount(input) {
    let parsedInput = Number.parseFloat(input);
    if (isNaN(parsedInput)) {
        throw new Error('Невалидное значение');
    }
    return parsedInput;
}

function validateCount(input) {
    try {
        return parseCount(input);
    }
    catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let halfP = this.perimeter / 2;
        let area = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle (a, b, c);
    }
    catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}