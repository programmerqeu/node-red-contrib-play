/**
 * Node
 *
 * LICENSE:    MIT
 *
 * @project    node-red-contrib-play
 * @package    Programmerq\Nodered\Node\Play
 * @author     André Lademann <andre@programmerq.eu>
 * @copyright  Copyright programmerq.eu (http://www.programmerq.eu)
 * @license    MIT https://opensource.org/licenses/MIT
 * @since      2014-11-27 - 08:53:21 AM
 */

module.exports = function(RED) {
	'use strict';

  var player = require('play-sound')(options = {player: this.type});

	/**
	 * Player options
	 *
	 * ['mplayer', 'afplay', 'mpg123', 'mpg321', 'play'])
	 * @type {*}
	 */
	function PlayNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;

		this.on('input', function(msg) {
			player.play(msg.payload || this.name);
			node.send(msg);
		});
	}

	RED.nodes.registerType('play', PlayNode);
}
