let text = 'hello';

//string methods: slice()[s], substring(), substr()

let textInput = '   hello blank there Blank hey there BLANK is here   ';

console.log(textInput.replace(/blank/ig, '*').trim());