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

var RTCStats = require('./RTCStats');


/**
 * RTC codec statistics
 *
 * @constructor module:core/complexTypes.RTCCodec
 *
 * @property {external:int64} payloadType
 *  Payload type as used in RTP encoding.
 * @property {external:String} codec
 *  e.g., video/vp8 or equivalent.
 * @property {external:int64} clockRate
 *  Represents the media sampling rate.
 * @property {external:int64} channels
 *  Use 2 for stereo, missing for most other cases.
 * @property {external:String} parameters
 *  From the SDP description line.

 * @extends module:core.RTCStats
 */
function RTCCodec(rTCCodecDict){
  if(!(this instanceof RTCCodec))
    return new RTCCodec(rTCCodecDict)

  rTCCodecDict = rTCCodecDict || {}

  // Check rTCCodecDict has the required fields
  checkType('int64', 'rTCCodecDict.payloadType', rTCCodecDict.payloadType, {required: true});
  checkType('String', 'rTCCodecDict.codec', rTCCodecDict.codec, {required: true});
  checkType('int64', 'rTCCodecDict.clockRate', rTCCodecDict.clockRate, {required: true});
  checkType('int64', 'rTCCodecDict.channels', rTCCodecDict.channels, {required: true});
  checkType('String', 'rTCCodecDict.parameters', rTCCodecDict.parameters, {required: true});

  // Init parent class
  RTCCodec.super_.call(this, rTCCodecDict)

  // Set object properties
  Object.defineProperties(this, {
    payloadType: {
      writable: true,
      enumerable: true,
      value: rTCCodecDict.payloadType
    },
    codec: {
      writable: true,
      enumerable: true,
      value: rTCCodecDict.codec
    },
    clockRate: {
      writable: true,
      enumerable: true,
      value: rTCCodecDict.clockRate
    },
    channels: {
      writable: true,
      enumerable: true,
      value: rTCCodecDict.channels
    },
    parameters: {
      writable: true,
      enumerable: true,
      value: rTCCodecDict.parameters
    }
  })
}
inherits(RTCCodec, RTCStats)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(RTCCodec.prototype, {
  __module__: {
    enumerable: true,
    value: "kurento"
  },
  __type__: {
    enumerable: true,
    value: "RTCCodec"
  }
})

/**
 * Checker for {@link core/complexTypes.RTCCodec}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.RTCCodec} value
 */
function checkRTCCodec(key, value)
{
  if(!(value instanceof RTCCodec))
    throw ChecktypeError(key, RTCCodec, value);
};


module.exports = RTCCodec;

RTCCodec.check = checkRTCCodec;
