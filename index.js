const loader = function(source, inputSourceMap) {
	this.callback(null, source || undefined, inputSourceMap || undefined);
}
module.exports = loader;