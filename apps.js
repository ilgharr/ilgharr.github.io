
function hiringRadio(){
    if(document.getElementById('hiring').checked){
        let ptrn = /\d*\.\d{1,2}$/i 
        document.getElementById('hiring_input').innerHTML = "<label for='salary_rate'>Salary: </label> <input class='form_input' type='text' id='salary_rate' name='salary_rate' value='Enter dollars and cents 99.99' pattern=" + ptrn + " required>"
    }
    else{
        document.getElementById('hiring_input').innerHTML = ""

    }
}

