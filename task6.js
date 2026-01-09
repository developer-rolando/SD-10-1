export function rubricExcellent(p) {

    if (p >= 5 && p < 12) {
        if(p > 8) return "Excellent";
        return "Pass";
    } else if (p >= 0 && p < 5) {
        return "Fail";
    } else {
        return "Enter a valid grade!"
    }
}