"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textInputLayout_common_1 = require("./textInputLayout.common");
var view_1 = require("tns-core-modules/ui/core/view");
var text_view_1 = require("tns-core-modules/ui/text-view");
var text_field_1 = require("tns-core-modules/ui/text-field");
function getStyleResourceId(context, name) {
    return context.getResources().getIdentifier(name, 'style', context.getPackageName());
}
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TextInputLayout.prototype, "childLoaded", {
        get: function () { return this._childLoaded; },
        set: function (val) { this._childLoaded = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "android", {
        get: function () { return this._android; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "_nativeView", {
        get: function () { return this._android; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "textField", {
        get: function () { return this._textField; },
        set: function (tf) {
            var old = this._textField;
            if (this._textField) {
                this._removeView(this._textField);
            }
            this._textField = tf;
            if (this._textField) {
                this._addView(tf);
            }
            this._onTextFieldChanged(old, tf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "_childrenCount", {
        get: function () {
            if (this._textField) {
                return 1;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    TextInputLayout.prototype[textInputLayout_common_1.hintProperty.setNative] = function (value) {
        if (this.android) {
            this.android.setHint(value);
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.hintAnimationEnabledProperty.setNative] = function (value) {
        if (this.android) {
            this.android.setHintAnimationEnabled(value);
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.hintTextAppearanceProperty.setNative] = function (value) {
        if (value && this.android) {
            this.android.setHintTextAppearance(getStyleResourceId(this._context, value));
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.errorEnabledProperty.setNative] = function (value) {
        if (this.android) {
            if (!value && (this.error || '').length > 0) {
                this.error = '';
            }
            this.android.setErrorEnabled(value);
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.errorProperty.setNative] = function (value) {
        if (this.android && this.childLoaded) {
            this.android.setError(value || '');
            if ((value || '').length > 0) {
                this.errorEnabled = true;
            }
        }
    };
    TextInputLayout.prototype[textInputLayout_common_1.counterEnabledProperty.setNative] = function (value) {
        if (this.android) {
            this.android.setCounterEnabled(value);
        }
    };
    TextInputLayout.prototype._createUI = function () {
        this._android = new android.support.design.widget.TextInputLayout(this._context);
    };
    TextInputLayout.prototype._addChildFromBuilder = function (name, child) {
        if (!(child instanceof text_view_1.TextView || child instanceof text_field_1.TextField)) {
            throw new Error('TextInputLayout may only have a <TextView> or <TextField> as a child');
        }
        this.textField = child;
    };
    TextInputLayout.prototype._eachChildView = function (callback) {
        if (this._textField) {
            callback(this._textField);
        }
    };
    TextInputLayout.prototype._onTextFieldChanged = function (oldChild, newChild) {
        this.childLoaded = false;
        function onChildLoaded() {
            if (!this.android) {
                this._createUI();
            }
            var layoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT), existingEditText = this.android.getEditText();
            if (existingEditText) {
                if (existingEditText !== this.textField.android) {
                    this.android.removeView(this.android.getEditText());
                    this.android.addView(this.textField.android, 0, layoutParams);
                }
            }
            else {
                this.android.addView(this.textField.android, 0, layoutParams);
            }
            this.childLoaded = true;
            this.android.setErrorEnabled(this.errorEnabled);
            this.android.setError(this.error);
            this.textField.off(view_1.View.loadedEvent, onChildLoaded);
            this.textField.on(view_1.View.unloadedEvent, onChildUnloaded, this);
            var txtValue = this.textField.android.getText();
            this.textField.android.setText('');
            this.textField.android.setText(txtValue);
            this.android.drawableStateChanged();
        }
        function onChildUnloaded() {
            this.childLoaded = false;
            this.textField.off(view_1.View.unloadedEvent, onChildUnloaded);
            this.textField.on(view_1.View.loadedEvent, onChildLoaded, this);
        }
        if (this.textField) {
            this.textField.on(view_1.View.loadedEvent, onChildLoaded, this);
        }
    };
    return TextInputLayout;
}(textInputLayout_common_1.TextInputLayout));
exports.TextInputLayout = TextInputLayout;
