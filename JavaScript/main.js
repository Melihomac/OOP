// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw")
        }
    }
}

const circle = createCircle(1);
circle.draw();

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw")
    }
}

const another = new Circle(1); // new diyerek obje yaratıyoruz çünkü yukarıda this kelimesi global değil bizim bahsettiğimiz yeri işaret etmesi gerek.

// Primitive and Reference Types

let x = { value: 10 };
let y = x;

x.value = 20;
console.log(x, y); // x=20, y=20 Object olduğu için (reference type). Eğer x=10; diyip primitive tanımlasaydım x=20, y=10 olacaktı.
// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // Çıktı 10 Çünkü primitive type değişkenin değerine bakıp bize sonucu verir.

let numberReference = { value: 10 };

function increase(numberReference) {
    numberReference.value++;
}

increase(numberReference);
console.log(numberReference); // Çıktı 11 Çünkü Object reference type reference değerini alır ve onu uygular.

// Value Type: Number, String, Boolean, null
// Reference Type: Object, Function, Array

// ---------------

// Object işlemleri For ve if loop

function CircleConstructor(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw")
    }
}

const circleConstructor = new Circle(10);

for (let key in circle) {
    console.log(key, circle[key]);
}

if ('radius' in circle)
    console.log("Radius is in Circle");


// Abstraction

function CircleAbstraction(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function (factor) {
        //...
    }
    this.draw = function () {
        computeOptimumLocation(0.1); //Yukarda genel olarak tanıttık artık burada çağırıp reference değerini verip kullanabiliriz. İllaki en dışarda çağırıp obje yaratmamıza gerek yok.
        console.log("Draw")
    }
}

const circleAbstraction = new Circle(10);

// Getter Setter işlemleri

function CircleGetSet(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    this.draw = function () {
        console.log("Draw")
    }
    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            defaultLocation = value;
        }
    })
}

const circleGetSet = new Circle(10);
circle.draw();
