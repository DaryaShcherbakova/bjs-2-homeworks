function parseCount (meaning) {
    let result = Number.parseFloat(meaning);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(parseMeaning) {
    try {
        return parseCount(parseMeaning)
    }
    catch (error){
        return error;
    }
}



class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(( (a+ b) < c) || ((a + c) < b) || ((c+b) < a)) {
             throw new Error ("Треугольник с такими сторонами не существует")
        }
    }

      get perimeter() {
        return (this.a + this.b + this.c);
      }

      get area() {
        let p = +(this.a + this.b + this.c) / 2;
        let s = +(Math.sqrt (p * (p - this.a) * (p - this.b) * ( p - this.c))).toFixed(3);
        return s;
      }
  
    }

    function getTriangle(a, b, c) {
        try {
            return new Triangle (a, b, c);
        }
        catch(error){
            return {
                get perimeter() {
                    return "Ошибка! Треугольник не существует";
                },
                get area(){
                    return "Ошибка! Треугольник не существует";
                }
                
            }
        }
    }

