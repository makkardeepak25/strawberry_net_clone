
function setUser(userID,id){
    localStorage.setItem(userID,id);
}

function getUser(userID){
    console.log("UserId")
  try
  { var userId = localStorage.getItem(userID)
  
   console.log("From LocalJS",userId)
   return userId
    }
    catch {
        return    
    }
}


export {setUser,getUser}