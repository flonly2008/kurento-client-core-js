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

var ComplexType = require('./ComplexType');


/**
 * Defines values for parameters of congestion control
 *
 * @constructor module:core/complexTypes.RembParams
 *
 * @property {external:Integer} packetsRecvIntervalTop
 *  Size of the RTP packets history to smooth fraction-lost.
 *  Units: num of packets
 * @property {external:Number} exponentialFactor
 *  Factor used to increase exponentially the next REMB when it is below the 
 *  threshold.
 *  REMB[i+1] = REMB[i] * (1 + exponentialFactor)
 * @property {external:Integer} linealFactorMin
 *  Set the min of the factor used to increase linearly the next REMB when it is
 *  Units: bps (bits per second).
 *  REMB[i+1] = REMB[i] + MIN (linealFactorMin, linealFactor)
 * @property {external:Number} linealFactorGrade
 *  Determine the value of the next linearFactor based on the threshold and the 
 *  current REMB. Taking into account that the frequency of updating is 500ms, 
 *  the default value makes that the last REMB is reached in 60secs.
 *  linealFactor = (REMB - TH) / linealFactorGrade
 * @property {external:Number} decrementFactor
 *  Determine how much is decreased the current REMB when too losses are 
 *  detected.
 *  REMB[i+1] = REMB[i] * decrementFactor
 * @property {external:Number} thresholdFactor
 *  Determine the next threshold (TH) when too losses are detected.
 *  TH[i+1] = REMB[i] * thresholdFactor
 * @property {external:Integer} upLosses
 *  Max fraction-lost to no determine too losses. This value is the denominator 
 *  of the fraction N/256, so the default value is about 4% of losses (12/256)
 * @property {external:Integer} rembOnConnect
 *  REMB propagated upstream when video sending is started in a new connected 
 *  endpoint.
 *    Unit: bps(bits per second)
 */
function RembParams(rembParamsDict){
  if(!(this instanceof RembParams))
    return new RembParams(rembParamsDict)

  rembParamsDict = rembParamsDict || {}

  // Check rembParamsDict has the required fields
  checkType('int', 'rembParamsDict.packetsRecvIntervalTop', rembParamsDict.packetsRecvIntervalTop);
  checkType('float', 'rembParamsDict.exponentialFactor', rembParamsDict.exponentialFactor);
  checkType('int', 'rembParamsDict.linealFactorMin', rembParamsDict.linealFactorMin);
  checkType('float', 'rembParamsDict.linealFactorGrade', rembParamsDict.linealFactorGrade);
  checkType('float', 'rembParamsDict.decrementFactor', rembParamsDict.decrementFactor);
  checkType('float', 'rembParamsDict.thresholdFactor', rembParamsDict.thresholdFactor);
  checkType('int', 'rembParamsDict.upLosses', rembParamsDict.upLosses);
  checkType('int', 'rembParamsDict.rembOnConnect', rembParamsDict.rembOnConnect);

  // Init parent class
  RembParams.super_.call(this, rembParamsDict)

  // Set object properties
  Object.defineProperties(this, {
    packetsRecvIntervalTop: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.packetsRecvIntervalTop
    },
    exponentialFactor: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.exponentialFactor
    },
    linealFactorMin: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.linealFactorMin
    },
    linealFactorGrade: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.linealFactorGrade
    },
    decrementFactor: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.decrementFactor
    },
    thresholdFactor: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.thresholdFactor
    },
    upLosses: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.upLosses
    },
    rembOnConnect: {
      writable: true,
      enumerable: true,
      value: rembParamsDict.rembOnConnect
    }
  })
}
inherits(RembParams, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(RembParams.prototype, {
  __module__: {
    enumerable: true,
    value: "kurento"
  },
  __type__: {
    enumerable: true,
    value: "RembParams"
  }
})

/**
 * Checker for {@link core/complexTypes.RembParams}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.RembParams} value
 */
function checkRembParams(key, value)
{
  if(!(value instanceof RembParams))
    throw ChecktypeError(key, RembParams, value);
};


module.exports = RembParams;

RembParams.check = checkRembParams;
