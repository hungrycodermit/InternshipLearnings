var text = 'hello';
//string methods: slice()[s], substring(), substr()
var textInput = '   hello blank there Blank hey there BLANK is here   ';
console.log(textInput.replace(/blank/ig, '*').trim());
