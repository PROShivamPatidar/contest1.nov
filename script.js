const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log("developer");
}

// 2. Add Data
function addData() {
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  const nonAdmins = data.filter((item) => item.profession !== "admin");
  data.length = 0;
  data.push(...nonAdmins);
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = array1.concat(array2);
  array1.length = 0;
  array1.push(...concatenatedArray);
  console.log(array1);
}

// 5. Average Age
function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);

    // Log the result
    if (isAbove25) {
        console.log("There is at least one person older than 25.");
    } else {
        console.log("No person is older than 25.");
    }
}

// 7. Unique Professions
function uniqueProfessions() {
    const uniqueProfessionsSet = new Set(data.map(person => person.profession));

    const uniqueProfessionsArray = [...uniqueProfessionsSet];


    console.log("Distinct Professions:", uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
    const johnIndex = data.findIndex(person => person.name === "john");

    if (johnIndex !== -1) {
        data[johnIndex].profession = "manager";
    }
    console.log("Updated Profession for John:", data);
}

// 10. Profession Count
function getTotalProfessions() {
    let developerCount = 0;
    let adminCount = 0;


    data.forEach(person => {
        if (person.profession === "developer") {
            developerCount++;
        } else if (person.profession === "admin") {
            adminCount++;
        }
    });

    console.log("Total Developers:", developerCount);
    console.log("Total Admins:", adminCount);
}
