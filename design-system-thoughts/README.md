# Thoughts On Systemizing Style Using SCSS

Recently, we got a task that we are expected to submit the final end product as quick as possible. And we all know how things will end when project is going to be simply 'result oriented'. 

Repeated code snippet... lack of design of the functionality... 😩

Then I have bunch of SCSS code that can be eliminated if we can plan ahead with the designer or, just a complete product design.

But I am not the fortunate one.

Yet, I just have few mixin in my head I can get off with.

```scss
@mixin flex-box($attribute: "", $value: "") {
    display: flex;

    #{$attribute}: #{$value};
}
```

There are many places I need the power of flexbox, so I want to create a mixin to eliminate the redundant code.

But I was stuck at should I this:

```scss
@mixin flex-center-v {
    @include flex-box('align-items', 'center');
}
```

then

```scss
.d-flex-center-v {
    @include flex-center-v();
}
```

or should I just simply this?
```scss
.d-flex-center-v-another {
    @include flex-box('align-items', 'center');
}
```

... I don't know...

and this kind of 'I don't know' is really tormenting😭😭😭

I hope I will have the answer as soon as possible...

## Using gulp again...

The key is... pretty much just a simple js program which you run with `gulp`.

Yeah, open the terminal within the project folder then run `gulp`, and I hope the `gulpfile.js` is already in the project.

Because I only want to compile scss to css... so the test is all about scss.

and...

well, all I want to know right now is that stupid question, which one is better...😩😩😩