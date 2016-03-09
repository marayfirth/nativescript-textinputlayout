/**
 * TextInputLayout Class
 *      Acts as a wrapper around <TextField> or <TextView> components
 *      Implements functionality outline in android's TextInputLayout component
 */

declare module 'textInputLayout' {
    import {LayoutBase} from "ui/layouts/layout-base";
    import {Property} from "ui/core/dependency-observable";

    export class TextInputLayout extends LayoutBase {
        public static counterEnabledProperty: Property;
        public static errorEnabledProperty: Property;
        public static errorProperty: Property;
        public static hintAnimationEnabledProperty: Property;
        public static hintTextAppearanceProperty: Property;
        public static hintProperty: Property;

        /**
         * Native [android TextInputLayout](http://developer.android.com/reference/android/support/design/widget/TextInputLayout.html)
         */
        android: any;
    }
}