import {
  AuthService,
  SnackbarService
} from "./chunk-SUVJDTBQ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-YJSIDPBL.js";
import {
  CommonModule,
  Component,
  Router,
  RouterModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-UIRPTLIM.js";

// src/app/models/User.ts
var UserType;
(function(UserType2) {
  UserType2["PERSONAL"] = "PERSONAL";
  UserType2["BUSINESS"] = "BUSINESS";
})(UserType || (UserType = {}));

// src/app/features/auth/register/register.component.ts
var RegisterComponent = class _RegisterComponent {
  fb;
  authService;
  router;
  registerForm;
  isLoading = false;
  errorMessage = "";
  UserType = UserType;
  snackbarService = inject(SnackbarService);
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      userType: [UserType.PERSONAL, [Validators.required]]
    });
  }
  onSubmit() {
    this.registerForm.markAllAsTouched();
    const isFormValid = this.registerForm.valid;
    console.log("Formulario v\xE1lido:", isFormValid);
    console.log("Valores:", this.registerForm.value);
    if (!isFormValid) {
      this.snackbarService.showSnackbar("Data are Missing", "Complete all the required fields", "icons/warning.png");
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    const registerRequest = this.registerForm.value;
    this.authService.register(registerRequest).subscribe({
      next: () => {
        this.snackbarService.showSnackbar("Successful Record", "User created correctly", "icons/success.png");
        this.router.navigate(["/auth/login"]);
      },
      error: (error) => {
        this.isLoading = false;
        console.log("Error recibido:", error);
        const backendMsg = error.error?.detail || error.error?.message || "Registration failed";
        if (backendMsg.includes("Usuario duplicado")) {
          this.snackbarService.showSnackbar("Duplicate Mail", "Email is already in use", "icons/error.png");
        } else if (backendMsg.includes("Username already exists")) {
          this.snackbarService.showSnackbar("Existing User", "Name was already registered", "icons/error.png");
        } else if (backendMsg.includes("blank spaces")) {
          this.snackbarService.showSnackbar("Data are Missing", "Complete all the required fields", "icons/warning.png");
        } else {
          this.snackbarService.showSnackbar("Error", backendMsg, "icons/error.png");
        }
      }
    });
  }
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 39, vars: 1, consts: [[1, "sign-up"], [1, "content"], [1, "login-glass"], [1, "rectangle-27"], [1, "rectangle-26"], [1, "sign-up2"], [1, "sign-up3"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["src", "/assets/icons/user.svg", 1, "icons"], [1, "input-wrapper"], ["type", "text", "id", "firstName", "formControlName", "firstName", "required", "", "placeholder", " "], ["for", "firstName"], ["src", "/assets/icons/user.svg", 1, "icons2"], ["type", "text", "id", "lastName", "formControlName", "lastName", "required", "", "placeholder", " "], ["for", "lastName"], ["src", "/assets/icons/mail.svg", 1, "icons3"], ["type", "email", "id", "email", "formControlName", "email", "required", "", "placeholder", " "], ["for", "email"], ["src", "/assets/icons/lock.svg", 1, "icons4"], ["type", "password", "id", "password", "formControlName", "password", "required", "", "placeholder", " "], ["for", "password"], ["type", "submit", 1, "button"], [1, "text"], [1, "alrady-have-an-account", 3, "click"], ["src", "/assets/img/financello.png", 1, "finacello-jpg"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275text(7, "Sign Up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275element(10, "img", 9);
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275element(12, "input", 11);
      \u0275\u0275elementStart(13, "label", 12);
      \u0275\u0275text(14, "First Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275element(16, "img", 13);
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275element(18, "input", 14);
      \u0275\u0275elementStart(19, "label", 15);
      \u0275\u0275text(20, "Last Name");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 8);
      \u0275\u0275element(22, "img", 16);
      \u0275\u0275elementStart(23, "div", 10);
      \u0275\u0275element(24, "input", 17);
      \u0275\u0275elementStart(25, "label", 18);
      \u0275\u0275text(26, "E-mail");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 8);
      \u0275\u0275element(28, "img", 19);
      \u0275\u0275elementStart(29, "div", 10);
      \u0275\u0275element(30, "input", 20);
      \u0275\u0275elementStart(31, "label", 21);
      \u0275\u0275text(32, "Password");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "button", 22)(34, "span", 23);
      \u0275\u0275text(35, "Register");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "a", 24);
      \u0275\u0275listener("click", function RegisterComponent_Template_a_click_36_listener() {
        return ctx.goToLogin();
      });
      \u0275\u0275text(37, "Alrady have an account?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(38, "img", 25);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.registerForm);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterModule], styles: ['\n\n@font-face {\n  font-family: "PalanquinDark-Bold";\n  src: url(/assets/fonts/PalanquinDark-Bold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "DmSans-Regular";\n  src: url(/assets/fonts/DMSans-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Medium";\n  src: url(/assets/fonts/Poppins-Medium.ttf) format("truetype");\n}\n.sign-up[_ngcontent-%COMP%], \n.sign-up[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.sign-up[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      66.34deg,\n      rgba(122, 170, 170, 1) 0%,\n      rgba(220, 220, 209, 1) 100%);\n  padding: 119px 287px 119px 287px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.content[_ngcontent-%COMP%] {\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 785px;\n  position: relative;\n}\n.login-glass[_ngcontent-%COMP%] {\n  width: 859px;\n  height: 555px;\n  position: absolute;\n  left: 0px;\n  top: 116px;\n  overflow: hidden;\n}\n.rectangle-27[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0.8);\n  width: 456px;\n  height: 456px;\n  position: absolute;\n  left: 89px;\n  top: 49px;\n}\n.rectangle-26[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0.1);\n  border-radius: 20px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.5);\n  border-width: 1px;\n  width: 785px;\n  height: 525px;\n  position: absolute;\n  left: 63px;\n  top: 14px;\n  box-shadow: inset -43.67px 43.67px 43.67px 0px rgba(255, 255, 255, 0.1), inset 43.67px -43.67px 43.67px 0px rgba(165, 165, 165, 0.1);\n  -webkit-backdrop-filter: blur(43.67px);\n  backdrop-filter: blur(43.67px);\n}\n.sign-up2[_ngcontent-%COMP%] {\n  padding: 25px 15px 25px 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  align-items: center;\n  justify-content: center;\n  width: 401px;\n  position: absolute;\n  left: 116px;\n  top: 23px;\n  overflow: visible;\n}\n.sign-up3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      -1.4deg,\n      rgba(122, 170, 170, 1) 0%,\n      rgba(9, 44, 54, 1) 99.98999834060669%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 40px;\n  font-weight: 700;\n  position: relative;\n  align-self: stretch;\n}\n.first-name[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 371px;\n  height: 40px;\n  position: static;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-2[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 156px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.first-name2[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 122px;\n}\n.first-name3[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.icons2[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-22[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 221px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.last-name[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 187px;\n}\n.e-mail[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 371px;\n  height: 40px;\n  position: static;\n}\n.icons3[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-3[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 286px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.e-mail2[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 252px;\n}\n.e-mail3[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.password[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 371px;\n  height: 40px;\n  position: static;\n}\n.icons4[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-32[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 351px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.password2[_ngcontent-%COMP%] {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 317px;\n}\n.password3[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(14, 164, 155, 1) 0%,\n      rgba(5, 62, 59, 1) 100%);\n  border: none;\n  border-radius: 100px;\n  padding: 12px 24px;\n  width: 290px;\n  cursor: pointer;\n  transition: background 0.3s ease, transform 0.2s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-top: 25px;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(20, 180, 170, 1) 0%,\n      rgba(10, 70, 65, 1) 100%);\n  transform: scale(1.05);\n}\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n}\n.text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: relative;\n  width: 460px;\n}\n.alrady-have-an-account[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #000;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.alrady-have-an-account[_ngcontent-%COMP%]:hover {\n  color: #00aaff;\n  transform: scale(1.05);\n}\n.finacello-jpg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      44.41deg,\n      rgba(14, 164, 155, 1) 0%,\n      rgba(9, 44, 54, 1) 100%);\n  border-radius: 20px;\n  border-style: solid;\n  border-color: #dcdcd1;\n  border-width: 1px;\n  width: 785px;\n  height: 785px;\n  position: absolute;\n  left: 561px;\n  top: 0px;\n  box-shadow: 14px 10px 5px 0px rgba(0, 0, 0, 0.25);\n  object-fit: cover;\n  aspect-ratio: 1;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 8px;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #000;\n  background: transparent !important;\n  color: #000;\n  outline: none;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  caret-color: #00aaff;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  transition: background-color 100000s ease-in-out 0s !important;\n  -webkit-text-fill-color: #000 !important;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 12px;\n  font-size: 18px;\n  color: #000;\n  font-family: "DmSans-Regular", sans-serif;\n  pointer-events: none;\n  transition: 0.2s ease all;\n}\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n  top: -10px;\n  left: 8px;\n  font-size: 14px;\n  color: #00aaff;\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: '<div class="sign-up">\r\n    <div class="content">\r\n      <div class="login-glass">\r\n        <div class="rectangle-27"></div>\r\n        <div class="rectangle-26"></div>\r\n        <div class="sign-up2">\r\n          <div class="sign-up3">Sign Up</div>\r\n          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="form">\r\n            <div class="form-group">\r\n              <img class="icons" src="/assets/icons/user.svg" />\r\n              <div class="input-wrapper">\r\n                <input type="text" id="firstName" formControlName="firstName" required placeholder=" " />\r\n                <label for="firstName">First Name</label>\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="icons2" src="/assets/icons/user.svg" />\r\n              <div class="input-wrapper">\r\n                <input type="text" id="lastName" formControlName="lastName" required placeholder=" " />\r\n                <label for="lastName">Last Name</label>\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="icons3" src="/assets/icons/mail.svg" />\r\n              <div class="input-wrapper">\r\n                <input type="email" id="email" formControlName="email" required placeholder=" " />\r\n                <label for="email">E-mail</label>\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <img class="icons4" src="/assets/icons/lock.svg" />\r\n              <div class="input-wrapper">\r\n                <input type="password" id="password" formControlName="password" required placeholder=" " />\r\n                <label for="password">Password</label>\r\n              </div>\r\n            </div>\r\n            <button type="submit" class="button">\r\n              <span class="text">Register</span>\r\n            </button>\r\n          </form>\r\n          <a class="alrady-have-an-account" (click)="goToLogin()">Alrady have an account?</a>\r\n        </div>\r\n      </div>\r\n      <img class="finacello-jpg" src="/assets/img/financello.png" />\r\n    </div>\r\n  </div>\r\n  ', styles: ['/* src/app/features/auth/register/register.component.css */\n@font-face {\n  font-family: "PalanquinDark-Bold";\n  src: url(/assets/fonts/PalanquinDark-Bold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "DmSans-Regular";\n  src: url(/assets/fonts/DMSans-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Medium";\n  src: url(/assets/fonts/Poppins-Medium.ttf) format("truetype");\n}\n.sign-up,\n.sign-up * {\n  box-sizing: border-box;\n}\n.sign-up {\n  background:\n    linear-gradient(\n      66.34deg,\n      rgba(122, 170, 170, 1) 0%,\n      rgba(220, 220, 209, 1) 100%);\n  padding: 119px 287px 119px 287px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.content {\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 785px;\n  position: relative;\n}\n.login-glass {\n  width: 859px;\n  height: 555px;\n  position: absolute;\n  left: 0px;\n  top: 116px;\n  overflow: hidden;\n}\n.rectangle-27 {\n  background: rgba(217, 217, 217, 0.8);\n  width: 456px;\n  height: 456px;\n  position: absolute;\n  left: 89px;\n  top: 49px;\n}\n.rectangle-26 {\n  background: rgba(217, 217, 217, 0.1);\n  border-radius: 20px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.5);\n  border-width: 1px;\n  width: 785px;\n  height: 525px;\n  position: absolute;\n  left: 63px;\n  top: 14px;\n  box-shadow: inset -43.67px 43.67px 43.67px 0px rgba(255, 255, 255, 0.1), inset 43.67px -43.67px 43.67px 0px rgba(165, 165, 165, 0.1);\n  -webkit-backdrop-filter: blur(43.67px);\n  backdrop-filter: blur(43.67px);\n}\n.sign-up2 {\n  padding: 25px 15px 25px 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  align-items: center;\n  justify-content: center;\n  width: 401px;\n  position: absolute;\n  left: 116px;\n  top: 23px;\n  overflow: visible;\n}\n.sign-up3 {\n  background:\n    linear-gradient(\n      -1.4deg,\n      rgba(122, 170, 170, 1) 0%,\n      rgba(9, 44, 54, 1) 99.98999834060669%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 40px;\n  font-weight: 700;\n  position: relative;\n  align-self: stretch;\n}\n.first-name {\n  flex-shrink: 0;\n  width: 371px;\n  height: 40px;\n  position: static;\n}\n.icons {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-2 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 156px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.first-name2 {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 122px;\n}\n.first-name3 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.icons2 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-22 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 221px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.last-name {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 187px;\n}\n.e-mail {\n  flex-shrink: 0;\n  width: 371px;\n  height: 40px;\n  position: static;\n}\n.icons3 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-3 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 286px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.e-mail2 {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 252px;\n}\n.e-mail3 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.password {\n  flex-shrink: 0;\n  width: 371px;\n  height: 40px;\n  position: static;\n}\n.icons4 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 270px;\n  top: 20px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.line-32 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  width: 365px;\n  height: 0px;\n  position: absolute;\n  left: 21px;\n  top: 351px;\n  transform-origin: 0 0;\n  transform: rotate(0.157deg) scale(1, 1);\n}\n.password2 {\n  background: rgba(217, 217, 217, 0);\n  padding: 2px 6px 2px 6px;\n  width: 225px;\n  height: 40px;\n  position: absolute;\n  left: 15px;\n  top: 317px;\n}\n.password3 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.button {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(14, 164, 155, 1) 0%,\n      rgba(5, 62, 59, 1) 100%);\n  border: none;\n  border-radius: 100px;\n  padding: 12px 24px;\n  width: 290px;\n  cursor: pointer;\n  transition: background 0.3s ease, transform 0.2s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-top: 25px;\n}\n.button:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(20, 180, 170, 1) 0%,\n      rgba(10, 70, 65, 1) 100%);\n  transform: scale(1.05);\n}\n.button:active {\n  transform: scale(0.95);\n}\n.button .text {\n  color: white;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n}\n.text {\n  color: #ffffff;\n  text-align: center;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: relative;\n  width: 460px;\n}\n.alrady-have-an-account {\n  background: none;\n  border: none;\n  color: #000;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.alrady-have-an-account:hover {\n  color: #00aaff;\n  transform: scale(1.05);\n}\n.finacello-jpg {\n  background:\n    linear-gradient(\n      44.41deg,\n      rgba(14, 164, 155, 1) 0%,\n      rgba(9, 44, 54, 1) 100%);\n  border-radius: 20px;\n  border-style: solid;\n  border-color: #dcdcd1;\n  border-width: 1px;\n  width: 785px;\n  height: 785px;\n  position: absolute;\n  left: 561px;\n  top: 0px;\n  box-shadow: 14px 10px 5px 0px rgba(0, 0, 0, 0.25);\n  object-fit: cover;\n  aspect-ratio: 1;\n}\n.input-wrapper {\n  position: relative;\n  width: 100%;\n}\ninput {\n  width: 100%;\n  padding: 12px 8px;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #000;\n  background: transparent !important;\n  color: #000;\n  outline: none;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  caret-color: #00aaff;\n}\ninput:-webkit-autofill {\n  transition: background-color 100000s ease-in-out 0s !important;\n  -webkit-text-fill-color: #000 !important;\n}\ninput::placeholder {\n  color: transparent;\n}\nlabel {\n  position: absolute;\n  left: 8px;\n  top: 12px;\n  font-size: 18px;\n  color: #000;\n  font-family: "DmSans-Regular", sans-serif;\n  pointer-events: none;\n  transition: 0.2s ease all;\n}\ninput:focus + label,\ninput:not(:placeholder-shown) + label {\n  top: -10px;\n  left: 8px;\n  font-size: 14px;\n  color: #00aaff;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.form-group {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 16 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-HSX36F2V.js.map
