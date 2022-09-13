var str = 'acdaecad';
var obj = {};
for (var i = 0;i<str.length;i++){
    if (obj[str.charAt(i)]){
        obj[str.charAt(i)]++;
    }
    else {
        obj[str.charAt(i)] = 1;
    }
}
console.log(str.charAt(1))
