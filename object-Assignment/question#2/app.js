var obj = {
    name:"Hassan Raza",
    email:"hraza66789@gmail.com",
    password:"123456",
    age:"18",
    gender:"male",
    city:"Karachi",
    country:"Pakistan"
}
// document.write((Boolean(obj.age)) + " " + (Boolean(obj.country))+ " " +(Boolean(obj.FirstName)) + " " + (Boolean(obj.LastName)));
document.write("Does Age property exist in object? " + Boolean(obj.age) + "<br>");
document.write("Does country property exist in object? " + Boolean(obj.country) + "<br>");
document.write("Does firstname property exist in object? " + Boolean(obj.FirstName) + "<br>");
document.write("Does lastname property exist in object? " + Boolean(obj.LastName) + "<br>");