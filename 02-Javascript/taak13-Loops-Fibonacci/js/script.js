a = 0, b = 1, f = 1;
for(f = 1; f < 88; f++) {
    f = a + b;
    a = b;
    b = f;
    console.log(f)
}


