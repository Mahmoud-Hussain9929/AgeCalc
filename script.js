// script.js
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    document.getElementById('result').textContent = `عمرك هو ${ageYears} سنة و ${ageMonths} شهر و ${ageDays} يوم.`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('ageForm').reset();
    document.getElementById('result').textContent = '';
});
