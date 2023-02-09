/// <reference path='fourslash.ts' />

//// f(a = /*1*/, b) { }
//// f(a = a/*2*/, b) { }
//// f(a = a + /*3*/, b) { }
////
//// type A1<K = /*4*/, L> = K
//// type A2<K extends /*5*/, L> = K

verify.completions({
    marker: ["1", "2"],
    excludes: ["a", "b"],
    isNewIdentifierLocation: true,
})
verify.completions({
    marker: ["3"],
    excludes: ["a", "b"],
    isNewIdentifierLocation: false,
})

verify.completions({
    marker: ["4", "5"],
    excludes: ["K", "L"],
})
