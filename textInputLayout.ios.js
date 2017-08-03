"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textInputLayout_common_1 = require("./textInputLayout.common");
exports.titleProperty = new textInputLayout_common_1.Property({
    name: "title", affectsLayout: true
});
exports.tintColorProperty = new textInputLayout_common_1.Property({
    name: "tintColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.lineColorProperty = new textInputLayout_common_1.Property({
    name: "lineColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.selectedTitleColorProperty = new textInputLayout_common_1.Property({
    name: "selectedTitleColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.selectedLineColorProperty = new textInputLayout_common_1.Property({
    name: "selectedLineColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.lineHeightProperty = new textInputLayout_common_1.Property({
    name: "lineHeight",
    affectsLayout: true,
    valueConverter: function (v) { return parseFloat(v); }
});
exports.selectedLineHeightProperty = new textInputLayout_common_1.Property({
    name: "selectedLineHeight",
    affectsLayout: true,
    valueConverter: function (v) { return parseFloat(v); }
});
exports.errorColorProperty = new textInputLayout_common_1.Property({
    name: "errorColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.iconColorProperty = new textInputLayout_common_1.Property({
    name: "iconColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.selectedIconColorProperty = new textInputLayout_common_1.Property({
    name: "selectedIconColor",
    equalityComparer: textInputLayout_common_1.Color.equals,
    valueConverter: function (v) { return new textInputLayout_common_1.Color(v); }
});
exports.iconFontProperty = new textInputLayout_common_1.Property({
    name: "iconFont",
    affectsLayout: true
});
exports.iconTextProperty = new textInputLayout_common_1.Property({
    name: "iconText",
    affectsLayout: true
});
exports.iconMarginBottomProperty = new textInputLayout_common_1.Property({
    name: "iconMarginBottom",
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); }
});
exports.iconMarginLeftProperty = new textInputLayout_common_1.Property({
    name: "iconMarginLeft",
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); }
});
exports.iconRotationDegreesProperty = new textInputLayout_common_1.Property({
    name: "iconRotationDegrees",
    affectsLayout: true,
    valueConverter: function (v) { return parseFloat(v); }
});
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextInputLayout.prototype.createNativeView = function () {
        return new SkyFloatingLabelTextField(CGRectMake(0, 0, 0, 0));
    };
    TextInputLayout.prototype[textInputLayout_common_1.hintProperty.setNative] = function (value) {
        this.nativeView.placeholder = value;
    };
    TextInputLayout.prototype[textInputLayout_common_1.errorProperty.setNative] = function (value) {
        this.nativeView.errorMessage = value;
    };
    TextInputLayout.prototype[exports.errorColorProperty.setNative] = function (value) {
        this.nativeView.errorColor = value instanceof textInputLayout_common_1.Color ? value.ios : value;
    };
    TextInputLayout.prototype[exports.titleProperty.setNative] = function (value) {
        this.nativeView.title = value;
    };
    TextInputLayout.prototype[exports.selectedTitleColorProperty.setNative] = function (value) {
        this.nativeView.tintColor = value instanceof textInputLayout_common_1.Color ? value.ios : value;
    };
    TextInputLayout.prototype[exports.lineColorProperty.setNative] = function (value) {
        this.nativeView.lineColor = value instanceof textInputLayout_common_1.Color ? value.ios : value;
    };
    TextInputLayout.prototype[exports.selectedLineColorProperty.setNative] = function (value) {
        this.nativeView.selectedLineColor = value instanceof textInputLayout_common_1.Color ? value.ios : value;
    };
    TextInputLayout.prototype[exports.lineHeightProperty.setNative] = function (value) {
        if (!isNaN(value)) {
            this.nativeView.lineHeight = value;
        }
    };
    TextInputLayout.prototype[exports.selectedLineHeightProperty.setNative] = function (value) {
        if (!isNaN(value)) {
            this.nativeView.selectedLineHeight = value;
        }
    };
    TextInputLayout.prototype[exports.iconColorProperty.setNative] = function (value) {
        this.nativeView.iconColor = value instanceof textInputLayout_common_1.Color ? value.ios : value;
    };
    TextInputLayout.prototype[exports.selectedIconColorProperty.setNative] = function (value) {
        this.nativeView.selectedIconColor = value instanceof textInputLayout_common_1.Color ? value.ios : value;
        ;
    };
    TextInputLayout.prototype[exports.iconFontProperty.setNative] = function (value) {
        this.nativeView.iconFont = value;
    };
    TextInputLayout.prototype[exports.iconTextProperty.setNative] = function (value) {
        this.nativeView.iconText = value;
    };
    TextInputLayout.prototype[exports.iconMarginBottomProperty.setNative] = function (value) {
        if (!isNaN(value)) {
            this.nativeView.iconMarginBottom = value;
        }
    };
    TextInputLayout.prototype[exports.iconMarginLeftProperty.setNative] = function (value) {
        if (!isNaN(value)) {
            this.nativeView.iconMarginLeft = value;
        }
    };
    TextInputLayout.prototype[exports.iconRotationDegreesProperty.setNative] = function (value) {
        if (!isNaN(value)) {
            this.nativeView.iconRotationDegrees = value;
        }
    };
    return TextInputLayout;
}(textInputLayout_common_1.TextInputLayout));
exports.TextInputLayout = TextInputLayout;
var TextInputLayoutWithIcon = (function (_super) {
    __extends(TextInputLayoutWithIcon, _super);
    function TextInputLayoutWithIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextInputLayoutWithIcon.prototype.createNativeView = function () {
        return new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0, 0, 0, 0));
    };
    return TextInputLayoutWithIcon;
}(TextInputLayout));
exports.TextInputLayoutWithIcon = TextInputLayoutWithIcon;
exports.errorColorProperty.register(TextInputLayout);
exports.titleProperty.register(TextInputLayout);
exports.tintColorProperty.register(TextInputLayout);
exports.lineColorProperty.register(TextInputLayout);
exports.selectedTitleColorProperty.register(TextInputLayout);
exports.selectedLineColorProperty.register(TextInputLayout);
exports.lineHeightProperty.register(TextInputLayout);
exports.selectedLineHeightProperty.register(TextInputLayout);
exports.iconColorProperty.register(TextInputLayout);
exports.selectedIconColorProperty.register(TextInputLayout);
exports.iconFontProperty.register(TextInputLayout);
exports.iconTextProperty.register(TextInputLayout);
exports.iconMarginBottomProperty.register(TextInputLayout);
exports.iconMarginLeftProperty.register(TextInputLayout);
exports.iconRotationDegreesProperty.register(TextInputLayout);
