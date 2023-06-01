import User from './User.class';

class Users {
    constructor() {
        this.users = [];
        var users = this.users
 
        const responseData = window.classDatabase.select("SELECT * FROM users");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        let user = new User(response.data[i].id, response.data[i].email, response.data[i].password, response.data[i].firstname, response.data[i].lastname, response.data[i].id_role, response.data[i].id_site);
                        users.push(user);
                    }
                }
            }
        });
    }

    getUsers() {
        return this.users;
    }

    getUserById(id) {
        const user = this.users.find(function(user) {
            return user.id === id;
        });

        return user;
    }

    getUserByEmail(email) {
        const user = this.users.find(function(user) {
            return user.email === email;
        });

        return user;
    }

    addUser(email, password, firstname, lastname) {
        window.classDatabase.insert("INSERT INTO users (email, password, firstname, lastname) VALUES ('" + email + "', '" + window.classEncryption.encrypt(password) + "', '" + firstname + "', '" + lastname + "')");
        setTimeout(function() {
            const responseData = window.classDatabase.select("SELECT * FROM users WHERE email = '" + email + "'");
            responseData.then(function(response) {
                if (response !== undefined) {
                    if (response.data.length > 0) {
                        let user = new User(response.data[0].id, response.data[0].email, response.data[0].password, response.data[0].firstname, response.data[0].lastname, response.data[0].id_role, response.data[0].id_site);
                        window.classUsers.users.push(user);
                    }
                }
            });
        }, 1000);
    }

    removeUser(id) {
        const user = this.users.find(function(user) {
            return user.id === id;
        });

        const responseData = window.classDatabase.delete("users", user.id);
        responseData.then(function(response) {
            this.users.splice(this.users.indexOf(user), 1);
        });
    }

    updateUser(id, email, password, firstname, lastname) {
        const user = this.users.find(function(user) {
            return user.id === id;
        });

        const responseData = window.classDatabase.update("UPDATE users SET email = '" + email + "', firstname = '" + firstname + "', lastname = '" + lastname + "' WHERE id = " + id);
        responseData.then(function(response) {
            user.email = email;
            user.password = password;
            user.firstname = firstname;
            user.lastname = lastname;
            user.id_role = user.id_role;
            user.id_site = user.id_site;
        });
    }

    login(email, password) {
        let infos = {
            logged: false,
            error: false,
            message: ""
        }

        const user = this.getUserByEmail(email);
        if (user !== undefined) {
            if (window.classEncryption.decrypt(user.password) === password) {
                infos.logged = true;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("isLogged", true);
            } else {
                infos.error = true;
                infos.message = "Mot de passe incorrect.";
            }
        } else {
            infos.error = true;
            infos.message = "Aucun compte associé à cette adresse email.";
        }

        return infos;
    }

    logout() {
        localStorage.setItem("user", JSON.stringify({}));
        localStorage.setItem("isLogged", false);
    }

    register(email, password, firstname, lastname) {
        let infos = {
            registered: false,
            error: false,
            message: ""
        }

        const user = this.getUserByEmail(email);
        if (user === undefined) {
            this.addUser(email, password, firstname, lastname);
            infos.registered = true;
        } else {
            infos.error = true;
            infos.message = "Un compte est déjà associé à cette adresse email.";
        }

        return infos;
    }

    isLogged() {
        return localStorage.getItem("isLogged") === "true";
    }

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    getUserFirstname() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return user.firstname;
        }
    }

    getUserLastname() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return user.lastname;
        }
    }

    getUserEmail() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return user.email;
        }
    }
    
    getUserFullname() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return user.firstname + " " + user.lastname;
        }
    }

    getUserFullnameById(id) {
        const user = this.getUserById(id);
        if (user !== undefined) {
            return user.firstname + " " + user.lastname;
        }
    }

    getSiteId() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return user.id_site;
        }
    }

    getUserId() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return user.id;
        }
    }

    getSiteName() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            return window.classSites.getSite(user.id_site).getName();
        }
    }

    changePassword(oldPassword, newPassword) {
        let infos = {
            changed: false,
            error: false,
            message: ""
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            if (window.classEncryption.decrypt(user.password) === oldPassword) {
                this.updateUser(user.id, user.email, window.classEncryption.encrypt(newPassword), user.firstname, user.lastname);
                infos.changed = true;
            } else {
                infos.error = true;
                infos.message = "Ancien mot de passe incorrect.";
            }
        }

        return infos;
    }

    changeEmail(email) {
        let infos = {
            changed: false,
            error: false,
            message: ""
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            this.updateUser(user.id, email, user.password, user.firstname, user.lastname);
            infos.changed = true;
        }

        return infos;
    }

    changeFirstname(firstname) {
        let infos = {
            changed: false,
            error: false,
            message: ""
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            this.updateUser(user.id, user.email, user.password, firstname, user.lastname);
            infos.changed = true;
        }

        return infos;
    }

    changeLastname(lastname) {
        let infos = {
            changed: false,
            error: false,
            message: ""
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined) {
            this.updateUser(user.id, user.email, user.password, user.firstname, lastname);
            infos.changed = true;
        }

        return infos;
    }
}

export default Users;