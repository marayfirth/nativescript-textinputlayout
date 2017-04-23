"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textInputLayout_common_1 = require("./textInputLayout.common");
var text_field_1 = require("ui/text-field");
function onTitlePropertyChanged(pcData) {
    var til = pcData.object;
    if (til.ios) {
        til.ios.title = pcData.newValue;
    }
}
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        var _this = _super.call(this) || this;
        text_field_1.TextField.call(_this);
        _this._ios = _this.iconText ? (new SkyFloatingLabelTextField(CGRectMake(0, 0, 100, 50))) : (new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0, 0, 100, 50)));
        return _this;
    }
    Object.defineProperty(TextInputLayout.prototype, "ios", {
        get: function () { return this._ios; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "_nativeView", {
        get: function () { return this._ios; },
        enumerable: true,
        configurable: true
    });
    return TextInputLayout;
}(textInputLayout_common_1.TextInputLayout));
exports.TextInputLayout = TextInputLayout;
