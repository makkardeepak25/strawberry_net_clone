
function setUser(userID,id){

    localStorage.setItem(userID,JSON.stringify(id));
}

function getUser(userID){
  
  try
    { 
      var userId = localStorage.getItem(userID)
    

        return JSON.parse(userId)
    }
catch 
    {
        return    
    }
}


function removeUser(){
  localStorage.removeItem('userId');
}

export {setUser,getUser,removeUser}