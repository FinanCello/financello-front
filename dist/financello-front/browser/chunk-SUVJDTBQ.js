import {
  environment
} from "./chunk-YJSIDPBL.js";
import {
  HttpClient,
  Injectable,
  Subject,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-UIRPTLIM.js";

// src/app/shared/snackbar/snackbar.service.ts
var SnackbarService = class _SnackbarService {
  snackbarSubject = new Subject();
  snackbarState$ = this.snackbarSubject.asObservable();
  showSnackbar(title, message, icon = "", showUndo = false) {
    this.snackbarSubject.next({ title, message, icon, showUndo });
  }
  static \u0275fac = function SnackbarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SnackbarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SnackbarService, factory: _SnackbarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SnackbarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Auth.service.ts
var AuthService = class _AuthService {
  apiUrl = `${environment.apiUrl}/auth`;
  http = inject(HttpClient);
  constructor() {
  }
  register(request) {
    return this.http.post(`${this.apiUrl}/register`, request);
  }
  login(request) {
    return this.http.post(`${this.apiUrl}/login`, request);
  }
  getUserProfile(userId) {
    return this.http.get(`${this.apiUrl}/profile/${userId}`);
  }
  updateUserProfile(userId, request) {
    return this.http.put(`${this.apiUrl}/profile/${userId}`, request);
  }
  getAllUsers() {
    return this.http.get(`${environment.apiUrl}/users`);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SnackbarService,
  AuthService
};
//# sourceMappingURL=chunk-SUVJDTBQ.js.map
