"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textInputLayout_common_1 = require("./textInputLayout.common");
var text_field_1 = require("tns-core-modules/ui/text-field");
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        var _this = _super.call(this) || this;
        _this._ios = new SkyFloatingLabelTextField(CGRectMake(0, 0, 0, 0));
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
    TextInputLayout.prototype[textInputLayout_common_1.hintProperty.setNative] = function (value) {
        if (this.ios) {
            this.ios.placeholder = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.errorProperty.setNative] = function (value) {
        if (this.ios) {
            this.ios.errorMessage = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.errorColorProperty.setNative] = function (value) {
        if (this.ios && value.ios) {
            this.ios.errorColor = value.ios;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.titleProperty.setNative] = function (value) {
        if (this.ios) {
            this.ios.title = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.selectedTitleColorProperty.setNative] = function (value) {
        if (this.ios && value.ios) {
            this.ios.tintColor = value.ios;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.lineColorProperty.setNative] = function (value) {
        if (this.ios && value.ios) {
            this.ios.lineColor = value.ios;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.selectedLineColorProperty.setNative] = function (value) {
        if (this.ios && value.ios) {
            this.ios.selectedLineColor = value.ios;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.lineHeightProperty.setNative] = function (value) {
        if (this.ios && !isNaN(value)) {
            this.ios.lineHeight = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.selectedLineHeightProperty.setNative] = function (value) {
        if (this.ios && !isNaN(value)) {
            this.ios.selectedLineHeight = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.iconColorProperty.setNative] = function (value) {
        if (this.ios && value.ios) {
            this.ios.iconColor = value.ios;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.selectedIconColorProperty.setNative] = function (value) {
        if (this.ios && value.ios) {
            this.ios.selectedIconColor = value.ios;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.iconFontProperty.setNative] = function (value) {
        if (this.ios) {
            if (value instanceof UIFont) {
                this.ios.iconFont = value;
            }
            else {
                console.warn('TIL:iconFont can only be set to an instance of UIFont');
            }
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.iconTextProperty.setNative] = function (value) {
        if (this.ios) {
            this.ios.iconText = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.iconMarginBottomProperty.setNative] = function (value) {
        if (this.ios && !isNaN(value)) {
            this.ios.iconMarginBottom = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.iconMarginLeftProperty.setNative] = function (value) {
        if (this.ios && !isNaN(value)) {
            this.ios.iconMarginLeft = value;
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.iconRotationDegreesProperty.setNative] = function (value) {
        if (this.ios && !isNaN(value)) {
            this.ios.iconRotationDegrees = value;
        }
    };
    return TextInputLayout;
}(text_field_1.TextField));
exports.TextInputLayout = TextInputLayout;
var TextInputLayoutWithIcon = (function (_super) {
    __extends(TextInputLayoutWithIcon, _super);
    function TextInputLayoutWithIcon() {
        var _this = _super.call(this) || this;
        _this._ios = new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0, 0, 0, 0));
        return _this;
    }
    return TextInputLayoutWithIcon;
}(TextInputLayout));
exports.TextInputLayoutWithIcon = TextInputLayoutWithIcon;
textInputLayout_common_1.hintProperty.register(TextInputLayout);
textInputLayout_common_1.errorProperty.register(TextInputLayout);
textInputLayout_common_1.errorColorProperty.register(TextInputLayout);
textInputLayout_common_1.titleProperty.register(TextInputLayout);
textInputLayout_common_1.selectedTitleColorProperty.register(TextInputLayout);
textInputLayout_common_1.tintColorProperty.register(TextInputLayout);
textInputLayout_common_1.lineColorProperty.register(TextInputLayout);
textInputLayout_common_1.selectedLineColorProperty.register(TextInputLayout);
textInputLayout_common_1.lineHeightProperty.register(TextInputLayout);
textInputLayout_common_1.selectedLineHeightProperty.register(TextInputLayout);
textInputLayout_common_1.iconColorProperty.register(TextInputLayout);
textInputLayout_common_1.selectedIconColorProperty.register(TextInputLayout);
textInputLayout_common_1.iconFontProperty.register(TextInputLayout);
textInputLayout_common_1.iconTextProperty.register(TextInputLayout);
textInputLayout_common_1.iconMarginBottomProperty.register(TextInputLayout);
textInputLayout_common_1.iconMarginLeftProperty.register(TextInputLayout);
textInputLayout_common_1.iconRotationDegreesProperty.register(TextInputLayout);
