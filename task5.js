export function rubricPassFail(p) {
    if(p >= 5 && p < 12){
        return "Pass";
    }else if(p >= 0 && p < 5){
        return "Fail";
    }else{
        return "Enter a valid grade!"
    }

    
}