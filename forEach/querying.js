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

    //console.log(user(users));

    var posts = [
        {"id": 1, "title": "New repeated"},
        {"id": 1, "title": "New post"},
        
        {"id": 2, "title": "Old post"}
    ];

    var comment = {
        "postId": 1, "content": "Great post"
    };

    function postForComment(post, comment) {
        return posts.find(function(post){
            return post.id === comment.postId
        })
    };

    //console.log(postForComment(posts, comment));

    // only the first result

    var profiles = [
        { id: 1, admin: false },
        { id: 2, admin: false },
        { id: 3, admin: true }
    ];

    var admin;
    var getAdmin = (profiles) => {
        return profiles.find(function(profile) {
            return profile.admin === true
            // if(profile.admin === true ) {
            //     return true
            // }            
           }
        )
    }

    admin = getAdmin(profiles);    
    //console.log(admin);

    var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
    ];

    var account;

    var getAccount = (accounts) => {
        return accounts.find(function (account) {
            return account.balance === 12
        });
    };
    account = getAccount(accounts);

    //console.log(account);


















})();