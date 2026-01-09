export function ageCalculator(year, month, day) {
    const now = new Date();
    const birthdate = new Date(year, month - 1, day);

    let edad = now.getFullYear() - birthdate.getFullYear();

    const monthNow = now.getMonth();
    const dayNow = now.getDay();

    birthdate.getMonth > monthNow && birthdate.getDay() >= dayNow ? edad : edad--;

    return edad;
}