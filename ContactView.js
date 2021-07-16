function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
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
    if (retrievedProfileList[i].key == redirectid) {
        //console.log('yes')
        validlist =  retrievedProfileList[i];
        }
    }