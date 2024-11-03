package P06_SOLID.p04_InterfaceSegregation.p02_identity;

import P06_SOLID.p04_InterfaceSegregation.p02_identity.interfaces.Account;


public class AccountController {
    private final Account manager;

    public AccountController(Account manager) {
        this.manager = manager;
    }

    public void changePassword(String oldPass, String newPass) {
        this.manager.changePassword(oldPass, newPass);
    }
}