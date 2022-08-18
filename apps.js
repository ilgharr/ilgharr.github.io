
function hiringRadio(){
    if(document.getElementById('hiring').checked){
        document.getElementById('hiring_input').innerHTML = "<label for='salary_rate'>Salary: </label> <input class='form_input' type='text' id='salary_rate' name='salary_rate' value='Enter dollars and cents 99.99' pattern='^\d*.\d{1,2}$' required>"
    }
    else{
        document.getElementById('hiring_input').innerHTML = ""

    }
}

