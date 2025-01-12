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
 * A dictionary that represents the stats gathered.
 *
 * @constructor module:core/complexTypes.Stats
 *
 * @property {external:String} id
 *  A unique id that is associated with the object that was inspected to produce
 * @property {module:core/complexTypes.StatsType} type
 *  The type of this object.
 * @property {external:double} timestamp
 *  The timestamp associated with this object. The time is relative to the UNIX 
 *  epoch (Jan 1, 1970, UTC).
 */
function Stats(statsDict){
  if(!(this instanceof Stats))
    return new Stats(statsDict)

  statsDict = statsDict || {}

  // Check statsDict has the required fields
  checkType('String', 'statsDict.id', statsDict.id, {required: true});
  checkType('StatsType', 'statsDict.type', statsDict.type, {required: true});
  checkType('double', 'statsDict.timestamp', statsDict.timestamp, {required: true});

  // Init parent class
  Stats.super_.call(this, statsDict)

  // Set object properties
  Object.defineProperties(this, {
    id: {
      writable: true,
      enumerable: true,
      value: statsDict.id
    },
    type: {
      writable: true,
      enumerable: true,
      value: statsDict.type
    },
    timestamp: {
      writable: true,
      enumerable: true,
      value: statsDict.timestamp
    }
  })
}
inherits(Stats, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(Stats.prototype, {
  __module__: {
    enumerable: true,
    value: "kurento"
  },
  __type__: {
    enumerable: true,
    value: "Stats"
  }
})

/**
 * Checker for {@link core/complexTypes.Stats}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.Stats} value
 */
function checkStats(key, value)
{
  if(!(value instanceof Stats))
    throw ChecktypeError(key, Stats, value);
};


module.exports = Stats;

Stats.check = checkStats;
