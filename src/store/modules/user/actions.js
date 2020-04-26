export function addUser(user) {
  return {
    type: 'ADD_USER',
    user,
  };
}

export function removeUser(name){
  return {
    type: 'DELETE_USER',
    name,
  };
}
