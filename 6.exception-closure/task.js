function parseCount(count) {
    const result = Number.parseFloat(count);

    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }

    return result;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const halfMetr = this.perimeter / 2;
        return Math.round(Math.sqrt(halfMetr * (halfMetr - this.a) * (halfMetr - this.b) * (halfMetr - this.c)) * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}