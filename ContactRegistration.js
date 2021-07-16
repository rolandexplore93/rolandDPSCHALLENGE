//generate random key for each contact stored in the local storage
function getKeys(length) {
    var randomChars = '92973828723769263829749768265123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

document.getElementById('saveit').addEventListener('click', ()=>{
    let fname = document.getElementById('firstname').value;
			let lname = document.getElementById('lastname').value;
			let email = document.getElementById('email').value;
			let phone = document.getElementById('phone').value;
			let job = document.getElementById('job').value;


            
})