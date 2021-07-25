function User(name, gen, address, education, profession) {
    this.name = name;
    this.gender = gen;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var users = [];
var Name = document.getElementById("name");
var add = document.getElementById("address");
var edu = document.getElementById("education");
var proff = document.getElementById("profession");
var gender;

function pushing() {
    if (document.getElementById("m").checked) {
        gender = document.getElementById("m");
    }
    else if (document.getElementById("f").checked) {
        gender = document.getElementById("f");
    }
    else {
        alert("Please select gender");
    }

    users.push(new User(Name.value, gender.value, add.value, edu.value, proff.value))
    console.log(users);
}
function getData() {
    for (i = users.length - 1; i < users.length; i++) {
        var table = document.getElementById("record");
        var tableRow = table.appendChild(document.createElement("tr"))
        for (var key in users[i]) {
            var tableData = tableRow.appendChild(document.createElement("td"));
            tableData.innerText = users[i][key];
        }
    }
}