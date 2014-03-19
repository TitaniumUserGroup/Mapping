function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.addAddress = Alloy.createController("addAddress", {
        id: "addAddress",
        __parentSymbol: $.__views.index
    });
    $.__views.addAddress.setParent($.__views.index);
    $.__views.map = Alloy.createController("map", {
        id: "map",
        __parentSymbol: $.__views.index
    });
    $.__views.map.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.addAddress.on("addAnnotation", function(e) {
        $.map.addAnnotation(e.geodata);
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;