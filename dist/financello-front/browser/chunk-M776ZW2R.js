import {
  CommonModule,
  Component,
  NgClass,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UIRPTLIM.js";

// src/app/shared/layout/sidebar/sidebar.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = () => ["/dashboard/settings"];
var SidebarComponent = class _SidebarComponent {
  router;
  userInfo;
  activeSection = "home";
  constructor(router) {
    this.router = router;
  }
  sectionRoutes = {
    home: "/dashboard",
    loadfiles: "/dashboard/load-files",
    myfinances: "/dashboard/finances",
    savinggoals: "/dashboard/savinggoals",
    //analytics: '/analytics',
    profile: "/dashboard/profile",
    settings: "/dashboard/settings"
  };
  setActive(section) {
    this.activeSection = section;
    const route = this.sectionRoutes[section];
    if (route) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(["/auth/login"]);
    }
  }
  ngAfterViewInit() {
    const buttons = document.querySelectorAll(".sidebar-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          if (!btn.classList.contains("home-button")) {
            btn.classList.remove("active");
          }
        });
        button.classList.add("active");
      });
    });
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 37, vars: 23, consts: [[1, "sidebar"], [1, "icons-logo"], ["src", "/assets/icons/favicon.png", 1, "cello-3-1"], [1, "financello"], [1, "frame-228"], [1, "links"], [1, "sidebar-button", "home-button", 3, "click", "ngClass"], ["src", "/assets/icons/home.svg", "alt", "home"], [1, "sidebar-button", 3, "click", "ngClass"], ["src", "/assets/icons/file.svg", "alt", "load-files"], ["src", "/assets/icons/my-finances.svg", "alt", "my-finances"], ["src", "/assets/icons/saving-goals.svg", "alt", "savinggoals"], ["src", "/assets/icons/analytics.svg", "alt", "analytics"], [1, "line-6"], [1, "links2"], ["src", "/assets/icons/profile.svg", "alt", "profile"], [1, "sidebar-button", 3, "ngClass", "routerLink"], ["src", "/assets/icons/settings.svg", "alt", "settings"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275text(4, "FINANCELLO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_7_listener() {
        return ctx.setActive("home");
      });
      \u0275\u0275element(8, "img", 7);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "HOME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_11_listener() {
        return ctx.setActive("loadfiles");
      });
      \u0275\u0275element(12, "img", 9);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "LOAD FILES");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_15_listener() {
        return ctx.setActive("myfinances");
      });
      \u0275\u0275element(16, "img", 10);
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "MY FINANCES");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_19_listener() {
        return ctx.setActive("savinggoals");
      });
      \u0275\u0275element(20, "img", 11);
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "SAVING GOALS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 8);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_23_listener() {
        return ctx.setActive("analytics");
      });
      \u0275\u0275element(24, "img", 12);
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "ANALYTICS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(27, "div", 13);
      \u0275\u0275elementStart(28, "div", 14)(29, "div", 8);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_29_listener() {
        return ctx.setActive("profile");
      });
      \u0275\u0275element(30, "img", 15);
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "PROFILE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16);
      \u0275\u0275element(34, "img", 17);
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "SETTINGS");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, ctx.activeSection === "home"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx.activeSection === "load-files"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c0, ctx.activeSection === "my-finances"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c0, ctx.activeSection === "savinggoals"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c0, ctx.activeSection === "analytics"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c0, ctx.activeSection === "profile"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, ctx.activeSection === "settings"))("routerLink", \u0275\u0275pureFunction0(22, _c1));
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink], styles: ['\n\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n.sidebar[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #092c36;\n  width: 260px;\n  height: 1024px;\n  position: relative;\n  overflow: hidden;\n}\n.sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 208px;\n  height: 45px;\n  padding: 10px 15px;\n  border-radius: 10px;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: #ffffff;\n  background-color: transparent;\n  cursor: pointer;\n  transition:\n    background-color 0.3s ease,\n    box-shadow 0.2s ease,\n    color 0.3s ease;\n  outline: none;\n}\n.sidebar-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.sidebar-button[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.sidebar-button.active[_ngcontent-%COMP%] {\n  background-color: #0b6862;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  filter: brightness(0) invert(1);\n  transition: transform 0.2s ease;\n}\n.sidebar-button[_ngcontent-%COMP%]:hover {\n  background-color: #119488;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sidebar-button[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: transparent;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button[_ngcontent-%COMP%]:not(.active):hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sidebar-button.home-button.active[_ngcontent-%COMP%] {\n  background-color: #0b6862;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button.home-button[_ngcontent-%COMP%]:not(.active) {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button.active[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button[_ngcontent-%COMP%]:not(.active):not(.home-button) {\n  background-color: transparent;\n}\n.icons-logo[_ngcontent-%COMP%] {\n  padding: 10px 15px 10px 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 258px;\n  height: 120px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.cello-3-1[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  object-fit: cover;\n  aspect-ratio: 1;\n}\n.financello[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "Cinzel-Bold", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  position: relative;\n  width: 160px;\n  height: 21px;\n}\n.frame-228[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 240px;\n  position: absolute;\n  left: 0px;\n  top: 137px;\n}\n.links[_ngcontent-%COMP%] {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 265px;\n  position: relative;\n  overflow: hidden;\n}\n.home[_ngcontent-%COMP%] {\n  background: #0b6862;\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  right: -2.4%;\n  left: 26.44%;\n  width: 75.96%;\n  bottom: 31.82%;\n  top: 15.91%;\n  height: 52.27%;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.load-files[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  left: 55px;\n  top: 7px;\n  width: 158px;\n  height: 23px;\n}\n.icons2[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.my-finances[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons3[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.saving-goals[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons-piggy-bank-1[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.analytics[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons4[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.line-6[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #0b6862;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0deg) scale(1, 1);\n}\n.links2[_ngcontent-%COMP%] {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n}\n.profile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons5[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.page-link[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons6[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="sidebar">\r
    <div class="icons-logo">\r
      <img class="cello-3-1" src="/assets/icons/favicon.png" />\r
      <div class="financello">FINANCELLO</div>\r
    </div>\r
    <div class="frame-228">\r
      <div class="links">\r
        <div \r
  class="sidebar-button home-button"\r
  [ngClass]="{ 'active': activeSection === 'home' }"\r
  (click)="setActive('home')">\r
  <img src="/assets/icons/home.svg" alt="home" />\r
  <span>HOME</span>\r
</div>\r
\r
<!-- LOAD FILES -->\r
<div \r
  class="sidebar-button" \r
  [ngClass]="{ 'active': activeSection === 'load-files' }"\r
  (click)="setActive('loadfiles')">\r
  <img src="/assets/icons/file.svg" alt="load-files" />\r
  <span>LOAD FILES</span>\r
</div>\r
\r
<!-- MY FINANCES -->\r
<div \r
  class="sidebar-button" \r
  [ngClass]="{ 'active': activeSection === 'my-finances' }"\r
  (click)="setActive('myfinances')">\r
  <img src="/assets/icons/my-finances.svg" alt="my-finances" />\r
  <span>MY FINANCES</span>\r
</div>\r
\r
<!-- SAVING GOALS -->\r
<div \r
  class="sidebar-button" \r
  [ngClass]="{ 'active': activeSection === 'savinggoals' }"\r
  (click)="setActive('savinggoals')">\r
  <img src="/assets/icons/saving-goals.svg" alt="savinggoals" />\r
  <span>SAVING GOALS</span>\r
</div>\r
\r
<!-- ANALYTICS -->\r
<div \r
  class="sidebar-button" \r
  [ngClass]="{ 'active': activeSection === 'analytics' }"\r
  (click)="setActive('analytics')">\r
  <img src="/assets/icons/analytics.svg" alt="analytics" />\r
  <span>ANALYTICS</span>\r
</div>\r
\r
\r
      </div>\r
      <div class="line-6"></div>\r
      <div class="links2">\r
        <!-- PROFILE -->\r
<div \r
class="sidebar-button" \r
[ngClass]="{ 'active': activeSection === 'profile' }"\r
(click)="setActive('profile')">\r
<img src="/assets/icons/profile.svg" alt="profile" />\r
<span>PROFILE</span>\r
</div>\r
\r
<!-- SETTINGS -->\r
<div \r
class="sidebar-button" \r
[ngClass]="{ 'active': activeSection === 'settings' }"\r
[routerLink]="['/dashboard/settings']">\r
<img src="/assets/icons/settings.svg" alt="settings" />\r
\r
<span>SETTINGS</span>\r
</div>\r
      </div>\r
    </div>\r
  </div>\r
  \r
  <script>\r
    const buttons = document.querySelectorAll('.sidebar-button');\r
  \r
    buttons.forEach(button => {\r
      button.addEventListener('click', () => {\r
        buttons.forEach(btn => btn.classList.remove('active'));\r
        button.classList.add('active');\r
      });\r
    });\r
  <\/script>\r
  `, styles: ['/* src/app/shared/layout/sidebar/sidebar.component.css */\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n.sidebar,\n.sidebar * {\n  box-sizing: border-box;\n}\n.sidebar {\n  background: #092c36;\n  width: 260px;\n  height: 1024px;\n  position: relative;\n  overflow: hidden;\n}\n.sidebar-button {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 208px;\n  height: 45px;\n  padding: 10px 15px;\n  border-radius: 10px;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  color: #ffffff;\n  background-color: transparent;\n  cursor: pointer;\n  transition:\n    background-color 0.3s ease,\n    box-shadow 0.2s ease,\n    color 0.3s ease;\n  outline: none;\n}\n.sidebar-button:focus {\n  outline: none;\n  box-shadow: none;\n}\n.sidebar-button:focus-visible {\n  outline: none;\n}\n.sidebar-button.active {\n  background-color: #0b6862;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button img {\n  width: 20px;\n  height: 20px;\n  filter: brightness(0) invert(1);\n  transition: transform 0.2s ease;\n}\n.sidebar-button:hover {\n  background-color: #119488;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button:hover img {\n  transform: scale(1.05);\n}\n.sidebar-button:not(.active):hover {\n  background-color: transparent;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button:not(.active):hover img {\n  transform: scale(1.05);\n}\n.sidebar-button.home-button.active {\n  background-color: #0b6862;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button.home-button:not(.active) {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button.active {\n  box-shadow: inset 0 0 0 1px #58c2b0;\n}\n.sidebar-button:not(.active):not(.home-button) {\n  background-color: transparent;\n}\n.icons-logo {\n  padding: 10px 15px 10px 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 258px;\n  height: 120px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.cello-3-1 {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  object-fit: cover;\n  aspect-ratio: 1;\n}\n.financello {\n  color: #ffffff;\n  text-align: left;\n  font-family: "Cinzel-Bold", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  position: relative;\n  width: 160px;\n  height: 21px;\n}\n.frame-228 {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 240px;\n  position: absolute;\n  left: 0px;\n  top: 137px;\n}\n.links {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 265px;\n  position: relative;\n  overflow: hidden;\n}\n.home {\n  background: #0b6862;\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home2 {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  right: -2.4%;\n  left: 26.44%;\n  width: 75.96%;\n  bottom: 31.82%;\n  top: 15.91%;\n  height: 52.27%;\n}\n.icons {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.load-files {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home3 {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  left: 55px;\n  top: 7px;\n  width: 158px;\n  height: 23px;\n}\n.icons2 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.my-finances {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons3 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.saving-goals {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons-piggy-bank-1 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.analytics {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons4 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.line-6 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #0b6862;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0deg) scale(1, 1);\n}\n.links2 {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n}\n.profile {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons5 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.page-link {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons6 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/layout/sidebar/sidebar.component.ts", lineNumber: 12 });
})();

// src/app/shared/layout/header/header.component.ts
function HeaderComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(4, "Cerrar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Rol: ", (ctx_r1.userInfo == null ? null : ctx_r1.userInfo.role) || "Usuario");
  }
}
var HeaderComponent = class _HeaderComponent {
  router;
  userInfo;
  showMenu = false;
  constructor(router) {
    this.router = router;
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }
  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
  showNotifications() {
    alert("Notificaciones a\xFAn no implementadas.");
  }
  toggleUserMenu() {
    this.showMenu = !this.showMenu;
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 2, consts: [[1, "navbar"], [1, "dashboard"], [1, "user-profile-icon"], [1, "circle", "button-hover", 3, "click"], ["src", "/assets/icons/chart-pie.svg", 1, "chart-pie"], ["src", "/assets/icons/notification.svg", 1, "notification"], [1, "user-dropdown"], [1, "frame-5", "button-hover", 3, "click"], [1, "avatar-user-32"], [1, "rectangle"], [1, "rectangle2"], [1, "jhon-doe"], ["src", "/assets/icons/down.svg", 1, "icons"], ["class", "user-menu", 4, "ngIf"], [1, "user-menu"], [1, "user-role"], [1, "logout-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "DASHBOARD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_4_listener() {
        return ctx.goToDashboard();
      });
      \u0275\u0275element(5, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_6_listener() {
        return ctx.showNotifications();
      });
      \u0275\u0275element(7, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_9_listener() {
        return ctx.toggleUserMenu();
      });
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275element(11, "div", 9)(12, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "img", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, HeaderComponent_div_16_Template, 5, 1, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate((ctx.userInfo == null ? null : ctx.userInfo.firstName) + " " + (ctx.userInfo == null ? null : ctx.userInfo.lastName) || "John Doe");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showMenu);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], styles: ['\n\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n.navbar[_ngcontent-%COMP%], \n.navbar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.navbar[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 15px 15px 0px 0px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  padding: 15px 40px 15px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-between;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: -20px;\n  width: 100%;\n}\n.dashboard[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 167px;\n  height: 38px;\n}\n.user-profile-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 14px;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  position: relative;\n}\n.circle[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 49px;\n  height: 49px;\n  position: relative;\n  overflow: hidden;\n}\n.chart-pie[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.notification[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.frame-5[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 7px 11px 7px 11px;\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-user-32[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n}\n.rectangle[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 14px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 9px;\n  top: 6px;\n}\n.rectangle2[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 48px;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  left: -8px;\n  top: 21px;\n}\n.jhon-doe[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 76px;\n  height: 26px;\n}\n.icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.user-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  right: 0;\n  margin-right: 40px;\n  background: #ffffff;\n  border: 1px solid #bababa;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  width: 135px;\n  z-index: 100;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-family: "PalanquinDark-Regular", sans-serif;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #444;\n  text-align: center;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background-color: #333333;\n  color: #F15B64;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: #1a1a1a;\n}\n.user-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 14px;\n  cursor: pointer;\n}\n.button-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.button-hover[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=header.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="navbar">\r
  <div class="dashboard">DASHBOARD</div>\r
  <div class="user-profile-icon">\r
    <div class="circle button-hover" (click)="goToDashboard()">\r
      <img class="chart-pie" src="/assets/icons/chart-pie.svg" />\r
    </div>\r
    <div class="circle button-hover" (click)="showNotifications()">\r
      <img class="notification" src="/assets/icons/notification.svg" />\r
    </div>\r
    <div class="user-dropdown">\r
      <div class="frame-5 button-hover" (click)="toggleUserMenu()">\r
        <div class="avatar-user-32">\r
          <div class="rectangle"></div>\r
          <div class="rectangle2"></div>\r
        </div>\r
        <div class="jhon-doe">{{ userInfo?.firstName + ' ' + userInfo?.lastName || 'John Doe' }}</div>\r
        <img class="icons" src="/assets/icons/down.svg" />\r
      </div>\r
  \r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="showMenu" class="user-menu">\r
  <div class="user-role">Rol: {{ userInfo?.role || 'Usuario' }}</div>\r
  <button class="logout-btn" (click)="logout()">Cerrar sesi\xF3n</button>\r
</div>`, styles: ['/* src/app/shared/layout/header/header.component.css */\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n.navbar,\n.navbar * {\n  box-sizing: border-box;\n}\n.navbar {\n  background: #e7e7e0;\n  border-radius: 15px 15px 0px 0px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  padding: 15px 40px 15px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-between;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: -20px;\n  width: 100%;\n}\n.dashboard {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 167px;\n  height: 38px;\n}\n.user-profile-icon {\n  display: flex;\n  flex-direction: row;\n  gap: 14px;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  position: relative;\n}\n.circle {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 49px;\n  height: 49px;\n  position: relative;\n  overflow: hidden;\n}\n.chart-pie {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.notification {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.frame-5 {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 7px 11px 7px 11px;\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-user-32 {\n  background: #ffffff;\n  border-radius: 16px;\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n}\n.rectangle {\n  background: #0ea49b;\n  border-radius: 14px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 9px;\n  top: 6px;\n}\n.rectangle2 {\n  background: #0ea49b;\n  border-radius: 48px;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  left: -8px;\n  top: 21px;\n}\n.jhon-doe {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 76px;\n  height: 26px;\n}\n.icons {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n.user-dropdown {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.user-menu {\n  position: absolute;\n  top: 60px;\n  right: 0;\n  margin-right: 40px;\n  background: #ffffff;\n  border: 1px solid #bababa;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  width: 135px;\n  z-index: 100;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-family: "PalanquinDark-Regular", sans-serif;\n}\n.user-role {\n  font-size: 14px;\n  color: #444;\n  text-align: center;\n}\n.logout-btn {\n  background-color: #333333;\n  color: #F15B64;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.logout-btn:hover {\n  background-color: #1a1a1a;\n}\n.user-menu button {\n  background: transparent;\n  border: none;\n  font-size: 14px;\n  cursor: pointer;\n}\n.button-hover {\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.button-hover:hover {\n  transform: scale(1.05);\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/layout/header/header.component.ts", lineNumber: 12 });
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, SidebarComponent, HeaderComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, SidebarComponent, HeaderComponent],
      exports: [SidebarComponent, HeaderComponent]
    }]
  }], null, null);
})();

// src/app/features/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  constructor() {
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 0, consts: [[1, "dashboard-layout"], [1, "sidebar"], [1, "content-area"], [1, "header"], [1, "page-content"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-header", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, SharedModule, SidebarComponent, HeaderComponent, RouterModule, RouterOutlet], styles: ['\n\n@font-face {\n  font-family: "PalanquinDark-Bold";\n  src: url(/assets/fonts/PalanquinDark-Bold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Regular";\n  src: url(/assets/fonts/PalanquinDark-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Cinzel-Bold";\n  src: url(/assets/fonts/Cinzel-Bold.otf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-SemiBold";\n  src: url(/assets/fonts/PalanquinDark-SemiBold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Regular";\n  src: url(/assets/fonts/Poppins-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Medium";\n  src: url(/assets/fonts/Poppins-Medium.ttf) format("truetype");\n}\n@font-face {\n  font-family: "DmSans-Regular";\n  src: url(/assets/fonts/DMSans-Regular.ttf) format("truetype");\n}\n.dashboard-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100%;\n  background-color: #1a1a1a;\n  color: white;\n  flex-shrink: 0;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: #0f4c75;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  overflow-y: auto;\n  background-color: #f5f5f5;\n}\n.us-12-acceso-r-pido-a-datos-clave-desde-el-panel-principal[_ngcontent-%COMP%], \n.us-12-acceso-r-pido-a-datos-clave-desde-el-panel-principal[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.us-12-acceso-r-pido-a-datos-clave-desde-el-panel-principal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  height: 1024px;\n  position: relative;\n}\n.content-true[_ngcontent-%COMP%] {\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 1024px;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #092c36;\n  width: 260px;\n  height: 1024px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  overflow: hidden;\n}\n.icons-logo[_ngcontent-%COMP%] {\n  padding: 10px 15px 10px 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 258px;\n  height: 120px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.cello-3-1[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  object-fit: cover;\n  aspect-ratio: 1;\n}\n.financello[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "Cinzel-Bold", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  position: relative;\n  width: 160px;\n  height: 21px;\n}\n.frame-228[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 240px;\n  position: absolute;\n  left: 0px;\n  top: 137px;\n}\n.links[_ngcontent-%COMP%] {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 265px;\n  position: relative;\n  overflow: hidden;\n}\n.page-link[_ngcontent-%COMP%] {\n  background: #0b6862;\n  border-radius: 10px;\n  border-style: solid;\n  border-color: #0ea49b;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  right: -2.4%;\n  left: 26.44%;\n  width: 75.96%;\n  bottom: 31.82%;\n  top: 15.91%;\n  height: 52.27%;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.page-link2[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  left: 55px;\n  top: 7px;\n  width: 158px;\n  height: 23px;\n}\n.icons2[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.icons3[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.icons-piggy-bank-1[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.page-link3[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons4[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.line-6[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #0b6862;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0deg) scale(1, 1);\n}\n.links2[_ngcontent-%COMP%] {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n}\n.icons5[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.icons6[_ngcontent-%COMP%] {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.navbar[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 15px 0px 0px 0px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  padding: 15px 40px 15px 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 1680px;\n  height: 80px;\n  position: absolute;\n  left: 240px;\n  top: 0px;\n  overflow: hidden;\n}\n.dashboard[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 167px;\n  height: 38px;\n}\n.user-profile-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 14px;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  position: relative;\n}\n.frame-4[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 49px;\n  height: 49px;\n  position: relative;\n  overflow: hidden;\n}\n.icons7[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.frame-2[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 49px;\n  height: 49px;\n  position: relative;\n  overflow: hidden;\n}\n.icons8[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.frame-5[_ngcontent-%COMP%] {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 7px 11px 7px 11px;\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-user-32[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n}\n.rectangle[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 14px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 9px;\n  top: 6px;\n}\n.rectangle2[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 48px;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  left: -8px;\n  top: 21px;\n}\n.jhon-doe[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 76px;\n  height: 26px;\n}\n.icons9[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, SharedModule, RouterModule], template: '<div class="dashboard-layout">\r\n  <app-sidebar class="sidebar"></app-sidebar>\r\n\r\n  <div class="content-area">\r\n    <app-header class="header"></app-header>\r\n\r\n    <div class="page-content">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/features/dashboard/dashboard.component.css */\n@font-face {\n  font-family: "PalanquinDark-Bold";\n  src: url(/assets/fonts/PalanquinDark-Bold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Regular";\n  src: url(/assets/fonts/PalanquinDark-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Cinzel-Bold";\n  src: url(/assets/fonts/Cinzel-Bold.otf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-SemiBold";\n  src: url(/assets/fonts/PalanquinDark-SemiBold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Regular";\n  src: url(/assets/fonts/Poppins-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Medium";\n  src: url(/assets/fonts/Poppins-Medium.ttf) format("truetype");\n}\n@font-face {\n  font-family: "DmSans-Regular";\n  src: url(/assets/fonts/DMSans-Regular.ttf) format("truetype");\n}\n.dashboard-layout {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n.sidebar {\n  width: 250px;\n  height: 100%;\n  background-color: #1a1a1a;\n  color: white;\n  flex-shrink: 0;\n}\n.content-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.header {\n  height: 60px;\n  background-color: #0f4c75;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page-content {\n  flex: 1;\n  padding: 20px;\n  overflow-y: auto;\n  background-color: #f5f5f5;\n}\n.us-12-acceso-r-pido-a-datos-clave-desde-el-panel-principal,\n.us-12-acceso-r-pido-a-datos-clave-desde-el-panel-principal * {\n  box-sizing: border-box;\n}\n.us-12-acceso-r-pido-a-datos-clave-desde-el-panel-principal {\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  height: 1024px;\n  position: relative;\n}\n.content-true {\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 1024px;\n  position: relative;\n}\n.sidebar {\n  background: #092c36;\n  width: 260px;\n  height: 1024px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  overflow: hidden;\n}\n.icons-logo {\n  padding: 10px 15px 10px 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 258px;\n  height: 120px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.cello-3-1 {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  object-fit: cover;\n  aspect-ratio: 1;\n}\n.financello {\n  color: #ffffff;\n  text-align: left;\n  font-family: "Cinzel-Bold", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  position: relative;\n  width: 160px;\n  height: 21px;\n}\n.frame-228 {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 240px;\n  position: absolute;\n  left: 0px;\n  top: 137px;\n}\n.links {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 265px;\n  position: relative;\n  overflow: hidden;\n}\n.page-link {\n  background: #0b6862;\n  border-radius: 10px;\n  border-style: solid;\n  border-color: #0ea49b;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  right: -2.4%;\n  left: 26.44%;\n  width: 75.96%;\n  bottom: 31.82%;\n  top: 15.91%;\n  height: 52.27%;\n}\n.icons {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.page-link2 {\n  border-radius: 10px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.home2 {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  left: 55px;\n  top: 7px;\n  width: 158px;\n  height: 23px;\n}\n.icons2 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.icons3 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.icons-piggy-bank-1 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.page-link3 {\n  border-radius: 10px;\n  flex-shrink: 0;\n  width: 208px;\n  height: 45px;\n  position: relative;\n  overflow: hidden;\n}\n.icons4 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.line-6 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #0b6862;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0deg) scale(1, 1);\n}\n.links2 {\n  padding: 0px 16px 0px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n}\n.icons5 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.icons6 {\n  width: 15.38%;\n  height: 72.73%;\n  position: absolute;\n  right: 79.81%;\n  left: 4.81%;\n  bottom: 13.64%;\n  top: 13.64%;\n  overflow: visible;\n}\n.navbar {\n  background: #e7e7e0;\n  border-radius: 15px 0px 0px 0px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  padding: 15px 40px 15px 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 1680px;\n  height: 80px;\n  position: absolute;\n  left: 240px;\n  top: 0px;\n  overflow: hidden;\n}\n.dashboard {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 167px;\n  height: 38px;\n}\n.user-profile-icon {\n  display: flex;\n  flex-direction: row;\n  gap: 14px;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  position: relative;\n}\n.frame-4 {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 49px;\n  height: 49px;\n  position: relative;\n  overflow: hidden;\n}\n.icons7 {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.frame-2 {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  flex-shrink: 0;\n  width: 49px;\n  height: 49px;\n  position: relative;\n  overflow: hidden;\n}\n.icons8 {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 9px;\n  top: 9px;\n  overflow: visible;\n}\n.frame-5 {\n  background: #e7e7e0;\n  border-radius: 100px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 7px 11px 7px 11px;\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-user-32 {\n  background: #ffffff;\n  border-radius: 16px;\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n}\n.rectangle {\n  background: #0ea49b;\n  border-radius: 14px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 9px;\n  top: 6px;\n}\n.rectangle2 {\n  background: #0ea49b;\n  border-radius: 48px;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  left: -8px;\n  top: 21px;\n}\n.jhon-doe {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative;\n  width: 76px;\n  height: 26px;\n}\n.icons9 {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-M776ZW2R.js.map
