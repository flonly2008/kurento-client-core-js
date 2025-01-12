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

var kurentoClient = require('kurento-client');



/**
 * State of the connection.
 *
 * @typedef core/complexTypes.ConnectionState
 *
 * @type {(DISCONNECTED|CONNECTED)}
 */

/**
 * Checker for {@link core/complexTypes.ConnectionState}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.ConnectionState} value
 */
function checkConnectionState(key, value)
{
  if(typeof value != 'string')
    throw SyntaxError(key+' param should be a String, not '+typeof value);

  if(!value.match('DISCONNECTED|CONNECTED'))
    throw SyntaxError(key+' param is not one of [DISCONNECTED|CONNECTED] ('+value+')');
};


module.exports = checkConnectionState;
