/**
 * @Author Angus <angusyoung@mrxcool.com>
 * @Description JavaScript encrypt based on the jjencode
 * @Since 2017/8/3
 */

function Crypt() {
	this.core = require('./lib/jjencode');
}

Crypt.prototype = {
	encode: function (sString) {
		return this.core('_', sString);
	}
};

module.exports = new Crypt();