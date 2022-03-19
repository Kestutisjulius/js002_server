function sum(a,b) {
    if (typeof a !== 'number'
    || isNaN(a)
    || '' + a === 'NaN'
    || a === Infinity
    || a === -Infinity) {
        return 'ERROR';
    }
    if (typeof b !== 'number'
    || !isFinite(b)) {
        return 'ERROR';
    }

    return a+b;
}

sum(2,3);

