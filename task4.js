

export class FriendAge {
    name;
    year;
    month;
    day;
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    ageCalculator(year, month, day) {
        const now = new Date();
        const birthdate = new Date(year, month - 1, day);

        let edad = now.getFullYear() - birthdate.getFullYear();

        const monthNow = now.getMonth();
        const dayNow = now.getDay();

        birthdate.getMonth > monthNow && birthdate.getDay() >= dayNow ? edad : edad--;

        return edad;
    }

    returnAge() {
        const age = this.ageCalculator(this.year, this.month, this.day);
        
        return `${this.name} is ${age} today!`;
    }
}