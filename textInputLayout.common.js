"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var dependency_observable_1 = require("ui/core/dependency-observable");
var proxy_1 = require("ui/core/proxy");
var TIL = 'TextInputLayout';
var errorProperty = new dependency_observable_1.Property("error", TIL, new proxy_1.PropertyMetadata('', dependency_observable_1.PropertyMetadataSettings.None));
var hintProperty = new dependency_observable_1.Property("hint", TIL, new proxy_1.PropertyMetadata('', dependency_observable_1.PropertyMetadataSettings.None));
var hintAnimationEnabledProperty = new dependency_observable_1.Property("hintAnimationEnabled", TIL, new proxy_1.PropertyMetadata(true, dependency_observable_1.PropertyMetadataSettings.None));
var hintTextAppearanceProperty = new dependency_observable_1.Property("hintTextAppearance", TIL, new proxy_1.PropertyMetadata(undefined));
var counterEnabledProperty = new dependency_observable_1.Property("counterEnabled", TIL, new proxy_1.PropertyMetadata(false, dependency_observable_1.PropertyMetadataSettings.AffectsLayout));
var errorEnabledProperty = new dependency_observable_1.Property("errorEnabled", TIL, new proxy_1.PropertyMetadata(true, dependency_observable_1.PropertyMetadataSettings.AffectsLayout));
var titleProperty = new dependency_observable_1.Property("title", TIL, new proxy_1.PropertyMetadata(false, dependency_observable_1.PropertyMetadataSettings.AffectsLayout));
var iconTextProperty = new dependency_observable_1.Property("iconText", TIL, new proxy_1.PropertyMetadata(true, dependency_observable_1.PropertyMetadataSettings.AffectsLayout));
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TextInputLayout.prototype, "counterEnabled", {
        get: function () { return this._getValue(counterEnabledProperty); },
        set: function (value) { this._setValue(counterEnabledProperty, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "errorEnabled", {
        get: function () { return this._getValue(errorEnabledProperty); },
        set: function (value) { this._setValue(errorEnabledProperty, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "error", {
        get: function () { return this._getValue(errorProperty); },
        set: function (val) { this._setValue(errorProperty, val + ''); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "hintAnimationEnabled", {
        get: function () { return this._getValue(hintAnimationEnabledProperty); },
        set: function (value) { this._setValue(hintAnimationEnabledProperty, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "hintTextAppearance", {
        get: function () { return this._getValue(hintTextAppearanceProperty); },
        set: function (value) { this._setValue(hintTextAppearanceProperty, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "hint", {
        get: function () { return this._getValue(hintProperty); },
        set: function (value) { this._setValue(hintProperty, value + ''); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "title", {
        get: function () { return this._getValue(titleProperty); },
        set: function (value) { this._setValue(titleProperty, value + ''); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "iconText", {
        get: function () { return this._getValue(titleProperty); },
        set: function (value) { this._setValue(iconTextProperty, value + ''); },
        enumerable: true,
        configurable: true
    });
    return TextInputLayout;
}(view_1.View));
TextInputLayout.errorProperty = errorProperty;
TextInputLayout.hintProperty = hintProperty;
TextInputLayout.counterEnabledProperty = counterEnabledProperty;
TextInputLayout.hintAnimationEnabledProperty = hintAnimationEnabledProperty;
TextInputLayout.hintTextAppearanceProperty = hintTextAppearanceProperty;
TextInputLayout.errorEnabledProperty = errorEnabledProperty;
TextInputLayout.titleProperty = titleProperty;
TextInputLayout.iconTextProperty = iconTextProperty;
exports.TextInputLayout = TextInputLayout;
