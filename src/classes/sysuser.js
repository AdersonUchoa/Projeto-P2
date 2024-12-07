module.exports = class Sysuser {
    constructor(name, login_email, password, user_type) {
        this.name = name;
        this.login_email = login_email;
        this.password = password;
        this.user_type = user_type;
    }
}
