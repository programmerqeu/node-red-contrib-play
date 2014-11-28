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
	'use strict';

	/**
	 * Player options
	 *
	 * ['mplayer', 'afplay', 'mpg123', 'mpg321', 'play'])
	 * @type {*}
	 */

	function PlayNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		var options, player = require('play-sound')(options = {player: this.type});

		this.on('input', function(msg) {
			player.play(msg.payload|| this.file);
			node.send(msg);
		});
	}
	RED.nodes.registerType("play",PlayNode);
}
