export default class LoginPage{
    constructor(page){
        this.emailAddress = page.locator("[data-qa='login-email']");
        this.password = page.getByRole('textbox', {name: 'Password', exact: true});
        this.loginButton = page.getByRole('button', {name: 'Login', exact: true});
    }

    async getEmailField(){
        return await this.emailAddress;
    }

    async login(email, password){
        await this.emailAddress.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}