import {
  environment
} from "./chunk-YJSIDPBL.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UIRPTLIM.js";

// src/app/services/Category.service.ts
var CategoryService = class _CategoryService {
  http;
  apiUrl = `${environment.apiUrl}/categories`;
  constructor(http) {
    this.http = http;
  }
  createCategory(userId, request) {
    const params = new HttpParams().set("userId", userId);
    return this.http.post(this.apiUrl, request, {
      params
    });
  }
  deleteCategory(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateCategory(id, request) {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  getCategories(userId) {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CategoryService
};
//# sourceMappingURL=chunk-IAVQRACI.js.map
