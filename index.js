//Contacts can be searched using the search input on INDEX HOME
function searchByKeyword(){
        let input = document.getElementById('search-keyword').value;
        input = input.toLowerCase();
        let x = document.getElementsByClassName('contact-profile');

        for (i = 0; i < x.length; i++){
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display=""; 
        }
    }
}

//Contacts retrieved from the local storage and stored on the contact list page (our index page)

var retrievedList = JSON.parse(localStorage.getItem("contactlist"));
			// console.log(retrievedList)

for (var i = 0; i < retrievedList.length; i++) {
        // console.log(retrievedList[i].firstname)
    var fname = retrievedList[i].firstname;
    var lname = retrievedList[i].lastname;
    var fullname = fname +' '+lname;				
    var email = retrievedList[i].mail;
    var work = retrievedList[i].work;
    var phoneno = retrievedList[i].phoneno;
    var keyid = retrievedList[i].key;

    // console.log(keyid)

    
showlist = document.getElementById('showlist').innerHTML += 
'<div class="contact-profile"> <div class="contact-details"> <p class="name">' 
    + fullname + '</p> <p class="email-address">' 
    + email + '</p> </div>     <div class="contact-extra"> <a href="#!" onclick="redirectFunc('+keyid+')"> <i class="fas fa-user-circle view-userprofile"></i></a> <i class="fas fa-window-close delete-userprofile" onclick="return deleteList('+keyid+', \''+ fname + '\', \''+ lname + '\')"></i></div>  </div>  <hr>';
}

//When clicked on userview icon, it redirects to the view user profile page
function redirectFunc(id){
    window.location = './ContactView.html?redirectid=' + id;
}

function deleteList(parameter, fname, sname){
    let str = parameter;
    let isconfirm = confirm('Are you sure you want to remove ' +fname+ ' '+sname+' contact?');
    if(isconfirm == true){
        var fetchList = JSON.parse(localStorage.getItem("contactlist"));

        const index = fetchList.findIndex((user)=> {return user.key == parameter});
        console.log(index)
        fetchList.splice(index, 1);
        //Save the getLocalStorage back to local storage
        localStorage.setItem('contactlist', JSON.stringify(fetchList));
        
        location.reload();
        
    }else{
        location.reload();
    }
}