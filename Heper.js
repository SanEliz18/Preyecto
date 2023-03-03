class Helper {
    static getUsersFromLocalStorage(){
        let users = [];
        let arrayUsers = JSON.parse( localStorage.getItem('users'));
        if(arrayUsers.length != 0){
            arrayUsers.forEach(userarray => {
                let user2 =  new Alumno(userarray.email, userarray.password);
                users.push(user2);
            });
        }
        return users;

    }
        
}