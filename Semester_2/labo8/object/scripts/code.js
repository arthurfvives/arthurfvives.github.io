const setup = () => {
    let student = {};
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date(2000,1,1);
    student.eyeColor = "blue";

    console.log(student.firstName);

    let student1 = {
        firstName: "John",
        lastName: "Doe",
        age: new Date(2000,0,1, 0, 10, 30),
        eyeColor: "blue"
    }
    console.log(student1.firstName);

    let text = JSON.stringify(student1);
    console.log(text);


    //uitbreiding
    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    }

    console.log(student2.address.zipCode);

    let tekst = JSON.stringify(student);
    console.log (tekst);

    tekst = JSON.stringify(student2);
    console.log (tekst);

    //json
    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log (tekst);
// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst);
    console.log ("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log (tekst);
}
window.addEventListener("load", setup);