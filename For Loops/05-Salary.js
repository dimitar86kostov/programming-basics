function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= openTabs + 2; i++) {
        let curentTab = input[i];
        if (curentTab === "Facebook") {
salary -= 150;
        }else if (curentTab === "Instagram") {
            salary -= 100;
        }else if (curentTab === 'Reddit') {
            salary -= 50;
        }

    }
if (salary <= 0) {
    console.log("You have lost your salary." );
}else{
    console.log(salary);
}
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg",
"Facebook",
"Facebook",
"Facebook"])

