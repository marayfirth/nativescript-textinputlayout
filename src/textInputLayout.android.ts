declare namespace android {
    namespace support {
        namespace design {
            namespace widget {
                class TextInputLayout {
                    constructor(context: any);
                    setHint(hint: string): void;
                    setError(error: string): void;
                    setHintAnimationEnabled(value: boolean): void;
                    setHintTextAppearance(resourceId: number): void;
                    setErrorTextAppearance(resourceId: number): void;
                    setErrorEnabled(enabled: boolean): void;
                    setCounterEnabled(enabled: boolean): void;
                    addView(child, index: number, params): void;
                    removeView(child): void;
                    getEditText(): any;
                }
            }
        }
    }
}

declare namespace com{
    namespace google {
        namespace android {
            namespace material {
                namespace textfield {
                    class TextInputLayout {
                        constructor(context: any);
                    }
                }
            }
        }
    }
}

import { TextInputLayout as CommonTextInputLayout, hintProperty, errorProperty, Property } from './textInputLayout.common';

import { View, booleanConverter } from "tns-core-modules/ui/core/view";
import { TextView } from 'tns-core-modules/ui/text-view';
import { TextField } from 'tns-core-modules/ui/text-field';

function getStyleResourceId(context: any, name: string) {
    if (!context || (name || '').length === 0) {
        return null;
    }
    return context.getResources().getIdentifier(name, 'style', context.getPackageName());
}

/*** android-only properties ***/
export const hintAnimationEnabledProperty = new Property<TextInputLayout, boolean>({
    name: "hintAnimationEnabled", valueConverter: booleanConverter
});

export const hintTextAppearanceProperty = new Property<TextInputLayout, string>({
    name: "hintTextAppearance"
});

export const counterEnabledProperty = new Property<TextInputLayout, boolean>({
    name: "counterEnabled", affectsLayout: true, valueConverter: booleanConverter
});

export const errorTextAppearanceProperty = new Property<TextInputLayout, string>({
    name: "errorTextAppearance"
});

export const errorEnabledProperty = new Property<TextInputLayout, boolean>({
    name: "errorEnabled", affectsLayout: true, valueConverter: booleanConverter
});

export class TextInputLayout extends CommonTextInputLayout {
    nativeView: android.support.design.widget.TextInputLayout;

    private _textField: TextField | TextView;

    get textField(): TextField | TextView { return this._textField; }
    set textField(tf: TextField | TextView) {
        const old = this._textField;
        if (old) {
            this._removeView(old);
        }

        this._textField = tf;
        if (tf) {
            this._addView(tf);
        }

        this.setupTextView();
    }

    get _childrenCount(): number {
        return this._textField ? 1 : 0;
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

    public eachChildView(callback: (child: View) => boolean) {
        if (this._textField) {
            callback(this._textField);
        }
    }

    public createNativeView() {
        return new com.google.android.material.textfield.TextInputLayout(this._context);
    }

    public onLoaded(): void {
        super.onLoaded();
        this.setupTextView();
    }

    private setupTextView() {
        if (!this.isLoaded) {
            return;
        }

        const textField = this._textField;
        const nativeView = this.nativeView;
        const layoutParams = new (<any>android).widget.LinearLayout.LayoutParams(
            (<any>android).widget.LinearLayout.LayoutParams.MATCH_PARENT,
            (<any>android).widget.LinearLayout.LayoutParams.WRAP_CONTENT);

        const current = nativeView.getEditText();
        const nativeTextField = textField.nativeView;
        if (current !== nativeTextField) {
            if (current) {
                nativeView.removeView(current);
            }
            
            nativeView.addView(nativeTextField, 0, layoutParams);
        }

        // sometimes hint text isn't immediately triggered to move when navigating back to a prior view.
        // this triggers it via brute force :(
        const txtValue = textField.nativeView.getText();
        nativeTextField.setText('');
        nativeTextField.setText(txtValue);
    }

    [hintProperty.setNative](value: string) {
        this.nativeView.setHint(value);
    }

    [hintAnimationEnabledProperty.setNative](value: boolean) {
        this.nativeView.setHintAnimationEnabled(value);
    }

    [hintTextAppearanceProperty.setNative](value: string) {
        const resourceId = getStyleResourceId(this._context, value);
        if (value && resourceId) {
            this.nativeView.setHintTextAppearance(resourceId);
        }
    }

    [errorTextAppearanceProperty.setNative](value: string) {
        const resourceId = getStyleResourceId(this._context, value);
        if (value && resourceId) {
            this.nativeView.setErrorTextAppearance(resourceId);
        }
    }

    [errorEnabledProperty.setNative](value: boolean) {
        if (!value && (this.error || '').length > 0) {
            this.error = '';
        }
        this.nativeView.setErrorEnabled(value);
    }

    [errorProperty.setNative](value: string) {
        // NOTE: Android natively sets errorEnabled to true if this is not null
        this.nativeView.setError(value || '');
        if ((value || '').length > 0) {
            this.errorEnabled = true;
        }
    }

    [counterEnabledProperty.setNative](value: boolean) {
        this.nativeView.setCounterEnabled(value);
    }
}

hintAnimationEnabledProperty.register(TextInputLayout);
hintTextAppearanceProperty.register(TextInputLayout);
errorTextAppearanceProperty.register(TextInputLayout);
counterEnabledProperty.register(TextInputLayout);
errorEnabledProperty.register(TextInputLayout);