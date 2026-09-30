export default class HomePage{
    constructor(page){
        this.page = page;
        this.loginButton = page.getByRole('link', {name: 'Login'});
        this.logoutButton = page.getByText('Logout', {exact: true});
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async openHomePage(){
        await this.page.goto('https://www.automationexercise.com/');
    }

    getLogoutText(){
        return this.logoutButton;
    }
}