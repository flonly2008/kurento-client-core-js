/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ElementStats = require('./ElementStats');


/**
 * A dictionary that represents the stats gathered in the endpoint element.
 *
 * @constructor module:core/complexTypes.EndpointStats
 *
 * @property {external:double} audioE2ELatency
 *  End-to-end audio latency measured in nano seconds
 * @property {external:double} videoE2ELatency
 *  End-to-end video latency measured in nano seconds

 * @extends module:core.ElementStats
 */
function EndpointStats(endpointStatsDict){
  if(!(this instanceof EndpointStats))
    return new EndpointStats(endpointStatsDict)

  endpointStatsDict = endpointStatsDict || {}

  // Check endpointStatsDict has the required fields
  checkType('double', 'endpointStatsDict.audioE2ELatency', endpointStatsDict.audioE2ELatency, {required: true});
  checkType('double', 'endpointStatsDict.videoE2ELatency', endpointStatsDict.videoE2ELatency, {required: true});

  // Init parent class
  EndpointStats.super_.call(this, endpointStatsDict)

  // Set object properties
  Object.defineProperties(this, {
    audioE2ELatency: {
      writable: true,
      enumerable: true,
      value: endpointStatsDict.audioE2ELatency
    },
    videoE2ELatency: {
      writable: true,
      enumerable: true,
      value: endpointStatsDict.videoE2ELatency
    }
  })
}
inherits(EndpointStats, ElementStats)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(EndpointStats.prototype, {
  __module__: {
    enumerable: true,
    value: "kurento"
  },
  __type__: {
    enumerable: true,
    value: "EndpointStats"
  }
})

/**
 * Checker for {@link core/complexTypes.EndpointStats}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.EndpointStats} value
 */
function checkEndpointStats(key, value)
{
  if(!(value instanceof EndpointStats))
    throw ChecktypeError(key, EndpointStats, value);
};


module.exports = EndpointStats;

EndpointStats.check = checkEndpointStats;
