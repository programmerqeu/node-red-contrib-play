/**
 * Node
 *
 * LICENSE:    MIT
 *
 * @project    node-red-node-play
 * @package    ChromeExtension
 * @author     André Lademann <vergissberlin@googlemail.com>
 * @copyright  Copyright (c) 2014 andrelademann.de (http://www.andrelademann.de)
 * @license    http://andrelademann.de/license
 * @since      2014-11-27 - 08:53:21 AM
 */
module.exports = function(RED) {
	function PlayNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.on('input', function(msg) {
			msg.payload = msg.payload.toLowerCase();
			node.send(msg);
		});
	}
	RED.nodes.registerType("play",LowerCaseNode);
}
