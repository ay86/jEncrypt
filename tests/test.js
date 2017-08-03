/**
 * @Author Angus <angusyoung@mrxcool.com>
 * @Description Test
 * @Since 2017/8/3
 */

require('console-colors-node');
var JE = require('../index');

var sJsString = 'alert(\'hello world!\');';
console.log('source:', sJsString);

console.log('encode:\n', JE.encode(sJsString).cyan);

console.log('\ncopy the code run it on browers'.red.bgYellow.bold + '\n');