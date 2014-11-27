/**
 * Node
 *
 * LICENSE:    MIT
 *
 * @project    node-red-node-play
 * @package    ChromeExtension
 * @author     André Lademann <andre@programmerq.eu>
 * @copyright  Copyright (c) 2014 programmerq.eu (http://www.programmerq.eu)
 * @license    http://programmerq.eu/license
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
