declare var android: any;

import {PropertyChangeData} from "tns-core-modules/ui/core/dependency-observable";
import {
    TextInputLayout as CommonTextInputLayout,
    hintProperty,
    hintAnimationEnabledProperty,
    hintTextAppearanceProperty,
    errorEnabledProperty,
    errorProperty,
    counterEnabledProperty
} from './textInputLayout.common';
import {View} from "tns-core-modules/ui/core/view";
import {TextView} from 'tns-core-modules/ui/text-view';
import {TextField} from 'tns-core-modules/ui/text-field';

function getStyleResourceId(context: any, name: string) {
    if (!context || (name || '').length === 0) {
        return null;
    }
    return context.getResources().getIdentifier(name, 'style', context.getPackageName());
}

export class TextInputLayout extends CommonTextInputLayout {
    _android: any;
    _childLoaded: boolean;

    nativeView: any;

    public hintAnimationEnabled ?: boolean;
    public hintTextAppearance ?: string;
    public counterEnabled ?: boolean;
    public errorEnabled ?: boolean;

    get childLoaded() { return this._childLoaded; }
    set childLoaded(val: boolean) { this._childLoaded = val; }

    get android() { return this._android; }
    get _nativeView() { return this._android; }

    private _textField: TextField | TextView;

    get textField(): TextField | TextView { return this._textField; }
    set textField(tf: TextField | TextView) {
        let old: View = this._textField;
        if (this._textField) {
            this._removeView(this._textField);
        }

        this._textField = tf;

        if (this._textField) {
            this._addView(tf);
        }

        this._onTextFieldChanged(old, tf);
    }

    get _childrenCount(): number {
        if (this._textField) {
            return 1;
        }

        return 0;
    }

    [hintProperty.setNative](value: string) {
        if (this.android) {
            this.android.setHint(value);
        }
    }

    [hintAnimationEnabledProperty.setNative](value: boolean) {
        if (this.android) {
            this.android.setHintAnimationEnabled(value);
        }
    }

    [hintTextAppearanceProperty.setNative](value: string) {
        let resourceId = getStyleResourceId(this._context, value);
        if (value && this.android && resourceId) {
            this.android.setHintTextAppearance(resourceId);
        }
    }

    [errorEnabledProperty.setNative](value: boolean) {
        if (this.android) {
            if (!value && (this.error ||'').length > 0) {
                this.error = '';
            }
            this.android.setErrorEnabled(value);
        }
    }

    [errorProperty.setNative](value: string) {
        // NOTE: Android natively sets errorEnabled to true if this is not null
        if (this.android && this.childLoaded) {
            this.android.setError(value || '');
            if ((value||'').length > 0) {
                this.errorEnabled = true;
            }
        }
    }

    [counterEnabledProperty.setNative](value: boolean) {
        if (this.android) {
            this.android.setCounterEnabled(value);
        }
    }

    constructor() {
        super();
    }

    public createNativeView() {
        this._createUI();
        return this.android;
    }

    public initNativeView() {
        console.log('hit INIT NATIVE VIEW');
        super.initNativeView();
    }

    _createUI() {
        this._android = new android.support.design.widget.TextInputLayout(this._context);
    }

    /**
     * Callback that gets called when a child element is added.
     * The TextInputLayout can only accept TextView or TextField, so do appropriate checking here.
     */
    public _addChildFromBuilder(name: string, child: TextField | TextView): void {
        if (!(child instanceof TextView || child instanceof TextField)) {
            throw new Error('TextInputLayout may only have a <TextView> or <TextField> as a child');
        }

        this.textField = child;
    }

    public _eachChildView(callback: (child: View) => boolean) {
        if (this._textField) {
            callback(this._textField);
        }
    }

    /**
     * Callback that gets called when a child element is added.
     * The TextInputLayout can only accept TextView or TextField, so do appropriate checking here.
     */
    _onTextFieldChanged(oldChild: View, newChild: TextView | TextField): void {

        this.childLoaded = false;

        //some properties cannot be added until after the child text element has loaded
        function onChildLoaded() {
            // let layoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT, 0);
            
            //Need this for when navigating back to a historical view
            if (!this.android) { this._createUI(); }

            let layoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT),
                existingEditText = this.android.getEditText();

            if (existingEditText) {
                if (existingEditText !== this.textField.android) {
                    this.android.removeView(this.android.getEditText())
                    this.android.addView(this.textField.android, 0, layoutParams);
                }
            } else {
                this.android.addView(this.textField.android, 0, layoutParams);
            }

            this.childLoaded = true;

            this.android.setErrorEnabled(this.errorEnabled);
            this.android.setError(this.error);
            this.textField.removeEventListener(View.loadedEvent, onChildLoaded);
            this.textField.addEventListener(View.unloadedEvent, onChildUnloaded, this);

            // sometimes hint text isn't immediately triggered to move when navigating back to a prior view.
            // this triggers it via brute force :(
            let txtValue = this.textField.android.getText();

            this.textField.android.setText('');
            this.textField.android.setText(txtValue);
            this.android.drawableStateChanged();
        }

        function onChildUnloaded() {
            this.childLoaded = false;
            this.textField.removeEventListener(View.unloadedEvent, onChildUnloaded);
            this.textField.addEventListener(View.loadedEvent, onChildLoaded, this);
        }

        if (this.textField) {
            this.textField.addEventListener(View.loadedEvent, onChildLoaded, this);
        }
    }
}

hintProperty.register(TextInputLayout);
errorProperty.register(TextInputLayout);
