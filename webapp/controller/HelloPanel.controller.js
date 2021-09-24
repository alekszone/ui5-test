sap.ui.define( [
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast", 
    "sap/ui/core/Fragment"

],function (Controller, MessageToast, Fragment) {
    "use strict";
    
    return Controller.extend("test.controller.HelloPanel", {

      onShowHello: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var oRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [oRecipient]);
        MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
          this.getOwnerComponent().openHelloDialog();
      }

    });
  }
);
