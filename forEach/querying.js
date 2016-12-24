(function () {

	var users = [
        {"name": "John"},
        {"name": "Jill"},
        {"name": "Alex"}
    ];

    var user;

    user = (users) => {
        return users.find((user) => {
            if (user.name === 'Alex'){
                return true
            }
            //return user.name === 'Alex'
        });
    };

    console.log(user(users));

})();