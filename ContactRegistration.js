//generate random key for each contact stored in the local storage
function getKeys(length) {
    var randomChars = '92973828723769263829749768265123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

//Add a command to the SAVE button to receive user info when they fill the registration
document.getElementById('saveit').addEventListener('click', ()=>{
    let fname = document.getElementById('firstname').value;
			let lname = document.getElementById('lastname').value;
			let email = document.getElementById('email').value;
			let phone = document.getElementById('phone').value;
			let job = document.getElementById('job').value;

        
            
        if(err == ''){
            var listKey = getKeys(6);
                //continue
                //new contacts
            var contact = {
                key: listKey, firstname: fname, lastname: lname, mail: email, work:job, phoneno: phone,
            }	
            
                    //check if we have anything in our contact list on our localstorage
            var valuecheck = localStorage.getItem('contactlist');
            if(valuecheck === null){
                    //create new list
                var contactArray = [];
                    //push new conatact object to the array
                contactArray.push(contact);
                    //create the fist contact with the contactlist key in locastorage
                localStorage.setItem('contactlist', JSON.stringify(contactArray));
                
                document.getElementById('showerr').innerHTML = '<div>Your Information has been saved successfully. Redirecting...</div>';
                    //redirect to INDEX HOME page to show lists
                window.location.href = "index.html";
                
            }else{
                    //fetch the old contact(s) and push the new contact with it
                var list = JSON.parse(localStorage.getItem('contactlist'));			
                    //push that contact object to the conatct array of list from localstorage
                list.push(contact);	
                    //save the whole array back in the local storage
                localStorage.setItem('contactlist', JSON.stringify(list));
                
                document.getElementById('showerr').innerHTML = '<div>Successfully Added. Redirecting</div>';
                    //redirect to INDEX HOME page to show lists
                window.location.href = "index.html";
            }				
        }else{
            document.getElementById('showerr').innerHTML = '<ul>Error occured <br>'+err+'</ul>';
            
        }



})