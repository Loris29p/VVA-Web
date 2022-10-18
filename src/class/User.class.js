class User {
    constructor() {}

    login(email, password) {
        let infos = {
            connected: false,
            error: false,
            message: ""
        }

        const responseData = window.classDatabase.select("SELECT * FROM users WHERE email='" + email + "'");
        responseData.then(function(response) {
            response = response;
            if (response !== undefined) {
                if (response.data.length > 0) {
                    if (window.classEncryption.decrypt(response.data[0].password) === password) {
                        localStorage.setItem("user", JSON.stringify(response.data[0]));
                        localStorage.setItem("isLogged", "true");
                        infos.connected = true;
                    } else {
                        infos.error = true;
                        infos.message = "Mot de passe incorrect. Réessayez ou cliquez sur 'Mot de passe oublié' pour le réinitialiser.";
                    }
                } else {
                    infos.error = true;
                    infos.message = "Aucun compte n'est associé à cette adresse email.";
                }
            } else {
                infos.error = true;
                infos.message = "Une erreur est survenue.";
            }
        });

        return infos;
    }

    logout() {
        localStorage.setItem("isLogged", "false");
        localStorage.setItem("user", JSON.stringify({}));
    }

    register(firstname, lastname, email, password) {
        let infos = {
            registered: false,
            error: false,
            message: ""
        }

        const responseData = window.classDatabase.select("SELECT * FROM users WHERE email='" + email + "'");
        responseData.then(function(response) {
            response = response;
            if (response !== undefined) {
                if (response.data.length > 0) {
                    infos.error = true;
                    infos.message = "Un compte est déjà associé à cette adresse email.";
                } else {
                    const responseData = window.classDatabase.insert("INSERT INTO users (email, password, firstname, lastname) VALUES ('" + email + "', '" + window.classEncryption.encrypt(password) + "', '" + firstname + "', '" + lastname + "')");
                    responseData.then(function(response) {
                        response = response;
                        if (response !== undefined) {
                            if (response.error === false) {
                                infos.registered = true;
                            } else {
                                infos.error = true;
                                infos.message = "Une erreur est survenue.";
                            }
                        } else {
                            infos.error = true;
                            infos.message = "Une erreur est survenue.";
                        }
                    });
                }
            } else {
                infos.error = true;
                infos.message = "Une erreur est survenue.";
            }
        });

        return infos;
    }
}

export default User;