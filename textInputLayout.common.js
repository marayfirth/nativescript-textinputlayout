"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var color_1 = require("tns-core-modules/color");
var TIL = 'TextInputLayout';
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        return _super.call(this) || this;
    }
    return TextInputLayout;
}(view_1.View));
exports.TextInputLayout = TextInputLayout;
exports.errorProperty = new view_1.Property({
    name: "error",
    affectsLayout: true
});
exports.errorProperty.register(TextInputLayout);
exports.hintProperty = new view_1.Property({
    name: "hint",
    affectsLayout: true
});
exports.hintProperty.register(TextInputLayout);
exports.hintAnimationEnabledProperty = new view_1.Property({
    name: "hintAnimationEnabled"
});
exports.hintAnimationEnabledProperty.register(TextInputLayout);
exports.hintTextAppearanceProperty = new view_1.Property({
    name: "hintTextAppearance"
});
exports.hintTextAppearanceProperty.register(TextInputLayout);
exports.counterEnabledProperty = new view_1.Property({
    name: "counterEnabled",
    affectsLayout: true
});
exports.counterEnabledProperty.register(TextInputLayout);
exports.errorEnabledProperty = new view_1.Property({
    name: "errorEnabled",
    affectsLayout: true
});
exports.errorEnabledProperty.register(TextInputLayout);
exports.titleProperty = new view_1.Property({
    name: "title",
    affectsLayout: true
});
exports.titleProperty.register(TextInputLayout);
exports.tintColorProperty = new view_1.Property({
    name: "tintColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.tintColorProperty.register(TextInputLayout);
exports.lineColorProperty = new view_1.Property({
    name: "lineColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.lineColorProperty.register(TextInputLayout);
exports.selectedTitleColorProperty = new view_1.Property({
    name: "selectedTitleColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.selectedTitleColorProperty.register(TextInputLayout);
exports.selectedLineColorProperty = new view_1.Property({
    name: "selectedLineColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.selectedLineColorProperty.register(TextInputLayout);
exports.lineHeightProperty = new view_1.Property({
    name: "lineHeight",
    affectsLayout: true,
    valueConverter: function (v) { return Number(v); }
});
exports.lineHeightProperty.register(TextInputLayout);
exports.selectedLineHeightProperty = new view_1.Property({
    name: "selectedLineHeight",
    affectsLayout: true,
    valueConverter: function (v) { return Number(v); }
});
exports.selectedLineHeightProperty.register(TextInputLayout);
exports.errorColorProperty = new view_1.Property({
    name: "errorColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.errorColorProperty.register(TextInputLayout);
exports.iconColorProperty = new view_1.Property({
    name: "iconColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.iconColorProperty.register(TextInputLayout);
exports.selectedIconColorProperty = new view_1.Property({
    name: "selectedIconColor",
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); }
});
exports.selectedIconColorProperty.register(TextInputLayout);
exports.iconFontProperty = new view_1.Property({
    name: "iconFont",
    affectsLayout: true
});
exports.iconFontProperty.register(TextInputLayout);
exports.iconTextProperty = new view_1.Property({
    name: "iconText",
    affectsLayout: true
});
exports.iconTextProperty.register(TextInputLayout);
exports.iconMarginBottomProperty = new view_1.Property({
    name: "iconMarginBottom",
    affectsLayout: true,
    valueConverter: function (v) { return Number(v); }
});
exports.iconMarginBottomProperty.register(TextInputLayout);
exports.iconMarginLeftProperty = new view_1.Property({
    name: "iconMarginLeft",
    affectsLayout: true,
    valueConverter: function (v) { return Number(v); }
});
exports.iconMarginLeftProperty.register(TextInputLayout);
exports.iconRotationDegreesProperty = new view_1.Property({
    name: "iconRotationDegrees",
    affectsLayout: true,
    valueConverter: function (v) { return Number(v); }
});
exports.iconRotationDegreesProperty.register(TextInputLayout);
