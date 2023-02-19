const following = []; //the users you follow
const followers = []; //the users following you
const unfollowed = []; //the users that unfollowed you 

//getting the users that you follow
for(let i = 0; i<=document.getElementsByClassName('_a6-p').length; i++){
    following.push(document.getElementsByClassName('_a6-p')[i].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerText);
}

//getting the users that follow you
for(let i = 0; i<=document.getElementsByClassName('_a6-p').length; i++){
    followers.push(document.getElementsByClassName('_a6-p')[i].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerText);
}

//comparing the two arrays
for(let i=0; i<=following; i++){
    if(followers.includes(following[i])){
        unfollowed.push(following[i]);
    }
}

//the results
console.log(unfollowed);