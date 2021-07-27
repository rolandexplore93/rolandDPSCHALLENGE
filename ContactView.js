function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");

    //console.log(items)
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        console.log(tmp)
        if (tmp[0] === parameterName) ;
        result = decodeURIComponent(tmp[1]);
    }
    return result;
}

    //redirect id from the url
    // NOTE: Each user profile has its key identity
var redirectid = findGetParameter('redirectid');


    //Retrieve contact list from localstorage
var retrievedProfileList = JSON.parse(localStorage.getItem("contactlist"));
    //find the particular contact to show using the redirect id
    //const index = retrievedProfileList.findIndex((user)=> {return user != redirectid});

var validlist = '';
for (var i=0; i < retrievedProfileList.length; i++) {
        //console.log(redirectid)
        //compare the redirect id with each of the object in our get items from localstorage
    if (retrievedProfileList[i].key == redirectid) {
        //console.log('yes')
        //once found, save object inside this varaible
        validlist =  retrievedProfileList[i];
        }
    }


var personfirstname = validlist.firstname;
var personlastname = validlist.lastname;
var personphone = validlist.phoneno;
var personemail = validlist.mail;
var personjob = validlist.work;
var fullname = personfirstname+' '+personlastname;
showFullName = document.getElementById('showFullName').innerHTML += '<div class="userFullName"> ' + fullname + '</div>'
showProfile = document.getElementById('showProfile').innerHTML += '<div class="info-line"> <i class="fas fa-envelope icon-gradient"></i> <p class="email"> ' + personemail + '</p></div>  <div class="info-line"> <i class="fas fa-phone icon-gradient"></i> <p class="phone-number"> ' + personphone + ' </p> </div> <div class="info-line"><i id="occupation" class="fas fa-briefcase icon-gradient"></i> <p class="job"> ' + personjob + '</p>  </div>'
    

