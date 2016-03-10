# nativescript-textinputlayout
### Android Material Design TextInputLayout for NativeScript

##### [Android TextInputLayout Documentation](http://developer.android.com/reference/android/support/design/widget/TextInputLayout.html)

----------

### Usage

Add the android support library to your build.gradle's dependencies (and to that of the demo app if you want to run the included demo app)

```
compile "com.android.support:design:$suppotVer"
```


```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:TIL="nativescript-textinputlayout">
    <StackLayout>
        <!--TIL with all possible attrs via bindings-->
        <TIL:TextInputLayout class="demo-text-input-layout"
            hint="{{ hint }}"
            error="{{ error }}"
            errorEnabled="{{ isErrorEnabled }}"
            hintAnimationEnabled="{{ isHintAnimationEnabled }}"
            counterEnabled="{{ isCounterEnabled }}">

            <!--ONE child element can be added, MUST be either TextField or TextView-->
            <TextField text="{{ demoText }}" />
        </TIL:TextInputLayout>

        <!--TIL with just a static hint-->
        <TIL:TextInputLayout hint="Hint Text">
            <TextField text="" />
        </TIL:TextInputLayout>
    </StackLayout>
</Page>
```

#### Attributes

Name | Description | Value Type | Default
-----|-------------|------------|---------
hint | Text that shows up in the hint, and floating label | String | ""
error | Text that will display as error message and make the widget look invalid | String | ""
errorEnabled | Whether or not an error is enabled for the widget.  If no error, it won't pad the bottom so much.  However, if you set the error attr, it auto-sets this property under the hood to true | Boolean | false
hintAnimationEnabled | Whether or not the 'float' action of the label should be animated | Boolean | true
counterEnabled | Whether or not a char counter should display in bottom-right of widget | Boolean | false

#### Demo

<p align="center">
    <img height="700" src="https://raw.githubusercontent.com/bradleygore/nativescript-textinputlayout/master/demo.gif" alt="nativescript-textinputlayout demo"/>
</p>

------------------

### Attributions

[Brad Martin](https://github.com/bradmartin) - I used his {N} plugins as guides for this one, and pestered him when I had questions.

[Nathan Walker](https://github.com/NathanWalker) - I followed his [tutorial](http://developer.telerik.com/featured/creating-nativescript-plugins-in-typescript/) in setting up this plugin.