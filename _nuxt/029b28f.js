(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{346:function(e,t,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("2022f212",content,!0,{sourceMap:!1})},357:function(e,t,r){e.exports=r.p+"img/logo.e1dd273.png"},358:function(e,t,r){"use strict";r(346)},359:function(e,t,r){var n=r(64)(!1);n.push([e.i,".container-header[data-v-6e386735]{display:flex;justify-content:center;align-items:center;grid-gap:20px;gap:20px}.container-header img[data-v-6e386735]{width:100px;height:100px}.container-header h1[data-v-6e386735]{border-left:4px solid #00f;padding-left:10px}",""]),e.exports=n},365:function(e,t,r){"use strict";r.r(t);var n=r(548),o={data:function(){return{darkMode:!1}},methods:{toggleDarkMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.darkMode=!this.darkMode}},computed:{switchLabel:function(){return this.darkMode?"light":"dark"}}},l=(r(358),r(76)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-header mt-5"},[t("img",{attrs:{src:r(357),alt:"logo de simply-site"}}),e._v(" "),t("h1",[e._v("Simply-Site")]),e._v(" "),t(n.a,{attrs:{value:e.darkMode,label:"toggle ".concat(e.switchLabel," mode")},on:{change:e.toggleDarkMode}})],1)}),[],!1,null,"6e386735",null);t.default=component.exports},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={errorMessageLogin:"Le mot de passe et/ou l'email ne correspondent pas, veuillez recommencer.",successMessagePassword:"Nous avons bien reçu votre demande, vous allez recevoir un email contenant les instructions à suivre",errorMessageEmail:"Nous ne trouvons pas votre adresse dans notre base de données, veuillez recommencer",successMessageInscription:"Votre inscription a bien été prise en compte, vous allez être redirigé vers la page de connexion",successMessageContact:"Votre message a bien été envoyé, vous allez être redirigé vers la page mon compte",errorSamePassword:"Veuillez reconfirmer votre mot de passe",successMessageAddedSite:"Votre site a bien été enregistré dans la base de donnée"}},370:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n,o=r(11),l=(r(31),n={emailRules:[function(e){return!!e||"Ce champ email est obligatoire"},function(e){return/.+@.+\..+/.test(e)||"Votre email n'est pas valide"}],passwordRules:[function(e){return!!e||"Ce champ password est obligatoire"}],pwdConfirm:[function(e){return!!e||"Le champ de confirmation du mot de passe est obligatoire"}]},Object(o.a)(n,"emailRules",[function(e){return!!e||"Ce champ email est obligatoire"},function(e){return/.+@.+\..+/.test(e)||"Votre email n'est pas valide"}]),Object(o.a)(n,"nameRules",[function(e){return!!e||"Le champ nom est obligatoire"},function(e){return/^[A-Za-z]+$/.test(e)||"Ce champ ne peut contenir de caractères numériques"}]),Object(o.a)(n,"firstNameRules",[function(e){return!!e||"Le champ prénom est obligatoire"},function(e){return/^[A-Za-z]+$/.test(e)||"Ce champ ne peut contenir de caractères numériques"}]),Object(o.a)(n,"messsageRules",[function(e){return!!e||"Ce champ message est obligatoire"}]),n)},437:function(e){e.exports=JSON.parse('[{"id":1,"name":"Doe","firstname":"John","email":"test@test.com","phoneNumber":1122334455,"password":"test","idVeictor":"2139345"},{"id":2,"name":"test","firstname":"user","email":"user@test.com","phoneNumber":1122334455,"password":"user","idVeictor":"2200000"}]')},539:function(e,t,r){"use strict";r.r(t);var n=r(529),o=r(533),l=r(528),c=(r(110),r(66),r(369)),m=r(437),d=r(370),f={data:function(){return{valid:!0,emailRules:d.a.emailRules,userEmail:null,confirmationEmailSend:!1,messageConfirmationEmailSend:c.a.successMessagePassword,errorSubmitEmail:!1,errorMessageEmail:c.a.errorMessageEmail}},methods:{checkMailUser:function(){this.$refs.form.validate()&&this.getUserMailFromDataJson()},getUserMailFromDataJson:function(){var e=this;this.userEmail===m[0].email?(this.confirmationEmailSend=!0,setTimeout((function(){e.confirmationEmailSend=!1,e.$router.push({path:"/login"})}),3e3)):(this.errorSubmitEmail=!0,setTimeout((function(){e.errorSubmitEmail=!1}),3e3))}}},v=r(76),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t("Header"),e._v(" "),t("h2",{staticClass:"text-center mb-7 mt-10"},[e._v("Vous avez oublié votre mot de passe ?")]),e._v(" "),t("p",{staticClass:"text-justify"},[e._v("\n    Saisissez votre adresse e-mail dans le champ ci- dessous. Un mail vous\n    sera envoyé.\n  ")]),e._v(" "),t(o.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(l.a,{attrs:{"prepend-inner-icon":"mdi-email",placeholder:"Saisissez votre email",rules:e.emailRules,label:"Votre email",required:"",clearable:""},model:{value:e.userEmail,callback:function(t){e.userEmail="string"==typeof t?t.trim():t},expression:"userEmail"}}),e._v(" "),t("div",{staticClass:"text-center mt-2"},[t(n.a,{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.checkMailUser}},[e._v("\n        Valider\n      ")])],1),e._v(" "),e.confirmationEmailSend?t("div",{staticClass:"green white--text mt-3 pa-2 rounded text-center"},[e._v("\n      "+e._s(e.messageConfirmationEmailSend)+"\n    ")]):e._e(),e._v(" "),e.errorSubmitEmail?t("div",{staticClass:"red white--text mt-3 pa-2 rounded text-center"},[e._v("\n      "+e._s(e.errorMessageEmail)+"\n    ")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:r(365).default})}}]);