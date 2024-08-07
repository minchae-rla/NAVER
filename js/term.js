const checkE = document.querySelectorAll('input[id="check-e"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkes = document.querySelectorAll('input[name="check"]');
let checkA = document.querySelector('input[id="check-all"]');
let btnNext = document.getElementById('btn-next');

function selectAll(selectAll) {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });
}

function btnActive() {
    btnNext.disabled = false;
}

function btnDisabled() {
    btnNext.disabled = true;
}

function checkEssential() {
    let count = 0;
    checkE.forEach((checkbox) => {
        if (checkbox.checked)
            count++;
    });

    if (checkE.length === count) {
        btnActive();
    } else {
        btnDisabled();
    }
}

function checkAll(){
    let count = 0;
    checkes.forEach((checkbox) =>{
        if(checkbox.checked)
            count++;
    });

    if(count === checkes.length){
        checkA.checked = true;
    }else{
        checkA.checked = false;
    }
}



checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        checkEssential();
        checkAll();
    });
});