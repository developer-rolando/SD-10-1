export function rubricPerfect(p) {
    if (p >= 5 && p < 12) {
        if(p == 11) return "Perfect";
        if (p > 8) return "Excellent";
        return "Pass";
    } else if (p >= 0 && p < 5) {
        return "Fail";
    } else {
        return "Enter a valid grade!"
    }
}