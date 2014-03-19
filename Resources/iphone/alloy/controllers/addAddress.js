function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addAddress";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addAddress = Ti.UI.createView({
        backgroundColor: "#800",
        height: "50dp",
        top: 0,
        id: "addAddress"
    });
    $.__views.addAddress && $.addTopLevelView($.__views.addAddress);
    $.__views.textField = Ti.UI.createTextField({
        height: "40dp",
        top: "5dp",
        left: "5dp",
        right: "50dp",
        style: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "#fff",
        paddingLeft: "5dp",
        id: "textField",
        hintText: "Enter an address"
    });
    $.__views.addAddress.add($.__views.textField);
    $.__views.button = Ti.UI.createButton({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        top: "5dp",
        height: "40dp",
        width: "40dp",
        right: "5dp",
        id: "button",
        title: "+"
    });
    $.__views.addAddress.add($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var geo = require("geo");
    $.button.addEventListener("click", function() {
        $.textField.blur();
        geo.forwardGeocode($.textField.value, function(geodata) {
            $.trigger("addAnnotation", {
                geodata: geodata
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;