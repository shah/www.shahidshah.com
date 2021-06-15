 function containsNonLatinCodepoints(s) {
    if( /[^\x00-\x7F\®\©\™\°]/.test(s))
    return false;
    else
    return true;
}