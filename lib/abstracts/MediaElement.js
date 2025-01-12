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

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var checkArray = checkType.checkArray;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var each = require('async').each

var promiseCallback = require('promisecallback');

var MediaObject = require('./MediaObject');


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * @classdesc
 *  Basic building blocks of the media server, that can be interconnected 
 *  through the API. A {@link module:core/abstracts.MediaElement MediaElement} 
 *  is a module that encapsulates a specific media capability. They can be 
 *  connected to create media pipelines where those capabilities are applied, in
 *     {@link module:core/abstracts.MediaElement MediaElement} objects are 
 *     classified by its supported media type (audio, video, etc.)
 *
 * @abstract
 * @extends module:core/abstracts.MediaObject
 *
 * @constructor module:core/abstracts.MediaElement
 *
 * @fires {@link module:core#event:ElementConnected ElementConnected}
 * @fires {@link module:core#event:ElementDisconnected ElementDisconnected}
 */
function MediaElement(){
  MediaElement.super_.call(this);
};
inherits(MediaElement, MediaObject);


//
// Public methods
//

/**
 * Connects two elements, with the given restrictions, current {@link 
 * module:core/abstracts.MediaElement MediaElement} will start emmit media to 
 * sink element. Connection could take place in the future, when both media 
 * element show capabilities for connecting with the given restrictions
 *
 * @alias module:core/abstracts.MediaElement.connect
 *
 * @param {module:core/abstracts.MediaElement} sink
 *  the target {@link module:core/abstracts.MediaElement MediaElement} that will
 *
 * @param {module:core/complexTypes.MediaType} [mediaType]
 *  the {@link MediaType} of the pads that will be connected
 *
 * @param {external:String} [sourceMediaDescription]
 *  A textual description of the media source. Currently not used, aimed mainly 
 *  for {@link module:core/abstracts.MediaElement#MediaType.DATA} sources
 *
 * @param {external:String} [sinkMediaDescription]
 *  A textual description of the media source. Currently not used, aimed mainly 
 *  for {@link module:core/abstracts.MediaElement#MediaType.DATA} sources
 *
 * @param {module:core/abstracts.MediaElement~connectCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.connect = function(sink, mediaType, sourceMediaDescription, sinkMediaDescription, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  var promise
  if(sink instanceof Array)
  {
    callback = arguments[arguments.length-1] instanceof Function
             ? Array.prototype.pop.call(arguments)
             : undefined;

    var media = sink
    var src = this;
    sink = media[media.length-1]

    // Check if we have enought media components
    if(!media.length)
      throw new SyntaxError('Need at least one media element to connect');

    // Check MediaElements are of the correct type
    checkArray('MediaElement', 'media', media)

    // Generate promise
    promise = new Promise(function(resolve, reject)
    {
      function callback(error, result)
      {
        if(error) return reject(error);

        resolve(result);
      };

      each(media, function(sink, callback)
      {
        src = src.connect(sink, callback);
      },
      callback);
    });

    promise = promiseCallback(promise, callback)
  }
  else
  {
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  callback = arguments[arguments.length-1] instanceof Function
           ? Array.prototype.pop.call(arguments)
           : undefined;

  switch(arguments.length){
    case 1: mediaType = undefined;
    case 2: sourceMediaDescription = undefined;
    case 3: sinkMediaDescription = undefined;
    break;
    case 4: console.log('All optional params are used')
    break;

    default:
      var error = new RangeError('Number of params ('+arguments.length+') not in range [1-4]');
          error.length = arguments.length;
          error.min = 1;
          error.max = 4;

      throw error;
  }

  checkType('MediaElement', 'sink', sink, {required: true});
  checkType('MediaType', 'mediaType', mediaType);
  checkType('String', 'sourceMediaDescription', sourceMediaDescription);
  checkType('String', 'sinkMediaDescription', sinkMediaDescription);

  var params = {
    sink: sink,
    mediaType: mediaType,
    sourceMediaDescription: sourceMediaDescription,
    sinkMediaDescription: sinkMediaDescription
  };

  callback = (callback || noop).bind(this)

    promise = this._invoke(transaction, 'connect', params, callback)
  }

  return disguise(promise, sink)
};
/**
 * @callback module:core/abstracts.MediaElement~connectCallback
 * @param {external:Error} error
 */

/**
 * Disconnects two elements, with the given restrictions, current {@link 
 * module:core/abstracts.MediaElement MediaElement} stops sending media to sink 
 * element. If the previously requested connection didn't took place it is also 
 * removed
 *
 * @alias module:core/abstracts.MediaElement.disconnect
 *
 * @param {module:core/abstracts.MediaElement} sink
 *  the target {@link module:core/abstracts.MediaElement MediaElement} that will
 *
 * @param {module:core/complexTypes.MediaType} [mediaType]
 *  the {@link MediaType} of the pads that will be connected
 *
 * @param {external:String} [sourceMediaDescription]
 *  A textual description of the media source. Currently not used, aimed mainly 
 *  for {@link module:core/abstracts.MediaElement#MediaType.DATA} sources
 *
 * @param {external:String} [sinkMediaDescription]
 *  A textual description of the media source. Currently not used, aimed mainly 
 *  for {@link module:core/abstracts.MediaElement#MediaType.DATA} sources
 *
 * @param {module:core/abstracts.MediaElement~disconnectCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.disconnect = function(sink, mediaType, sourceMediaDescription, sinkMediaDescription, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  callback = arguments[arguments.length-1] instanceof Function
           ? Array.prototype.pop.call(arguments)
           : undefined;

  switch(arguments.length){
    case 1: mediaType = undefined;
    case 2: sourceMediaDescription = undefined;
    case 3: sinkMediaDescription = undefined;
    break;
    case 4: console.log('All optional params are used')
    break;

    default:
      var error = new RangeError('Number of params ('+arguments.length+') not in range [1-4]');
          error.length = arguments.length;
          error.min = 1;
          error.max = 4;

      throw error;
  }

  checkType('MediaElement', 'sink', sink, {required: true});
  checkType('MediaType', 'mediaType', mediaType);
  checkType('String', 'sourceMediaDescription', sourceMediaDescription);
  checkType('String', 'sinkMediaDescription', sinkMediaDescription);

  var params = {
    sink: sink,
    mediaType: mediaType,
    sourceMediaDescription: sourceMediaDescription,
    sinkMediaDescription: sinkMediaDescription
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'disconnect', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~disconnectCallback
 * @param {external:Error} error
 */

/**
 * Returns a string in dot (graphviz) format that represents the gstreamer 
 * elements inside
 *
 * @alias module:core/abstracts.MediaElement.getGstreamerDot
 *
 * @param {module:core/complexTypes.GstreamerDotDetails} [details]
 *  Details of graph
 *
 * @param {module:core/abstracts.MediaElement~getGstreamerDotCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.getGstreamerDot = function(details, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  callback = arguments[arguments.length-1] instanceof Function
           ? Array.prototype.pop.call(arguments)
           : undefined;

  switch(arguments.length){
    case 0: details = undefined;
    break;
    case 1: console.log('All optional params are used')
    break;

    default:
      var error = new RangeError('Number of params ('+arguments.length+') not in range [0-1]');
          error.length = arguments.length;
          error.min = 0;
          error.max = 1;

      throw error;
  }

  checkType('GstreamerDotDetails', 'details', details);

  var params = {
    details: details
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'getGstreamerDot', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~getGstreamerDotCallback
 * @param {external:Error} error
 * @param {external:String} result
 *  The dot graph
 */

/**
 * Returns a list of the connections information of the elements that ere 
 * receiving media from this element.
 *
 * @alias module:core/abstracts.MediaElement.getSinkConnections
 *
 * @param {module:core/complexTypes.MediaType} [mediaType]
 *  One of {@link module:core/abstracts.MediaElement#MediaType.AUDIO}, {@link 
 *  module:core/abstracts.MediaElement#MediaType.VIDEO} or {@link 
 *  module:core/abstracts.MediaElement#MediaType.DATA}
 *
 * @param {external:String} [description]
 *  A textual description of the media source. Currently not used, aimed mainly 
 *  for {@link module:core/abstracts.MediaElement#MediaType.DATA} sources
 *
 * @param {module:core/abstracts.MediaElement~getSinkConnectionsCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.getSinkConnections = function(mediaType, description, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  callback = arguments[arguments.length-1] instanceof Function
           ? Array.prototype.pop.call(arguments)
           : undefined;

  switch(arguments.length){
    case 0: mediaType = undefined;
    case 1: description = undefined;
    break;
    case 2: console.log('All optional params are used')
    break;

    default:
      var error = new RangeError('Number of params ('+arguments.length+') not in range [0-2]');
          error.length = arguments.length;
          error.min = 0;
          error.max = 2;

      throw error;
  }

  checkType('MediaType', 'mediaType', mediaType);
  checkType('String', 'description', description);

  var params = {
    mediaType: mediaType,
    description: description
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'getSinkConnections', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~getSinkConnectionsCallback
 * @param {external:Error} error
 * @param {module:core/complexTypes.ElementConnectionData} result
 *  A list of the connections information that arereceiving media from this 
 *  element. The list will be empty if no sinks are found.
 */

/**
 * Get the connections information of the elements that are sending media to 
 * this element {@link module:core/abstracts.MediaElement MediaElement}
 *
 * @alias module:core/abstracts.MediaElement.getSourceConnections
 *
 * @param {module:core/complexTypes.MediaType} [mediaType]
 *  One of {@link module:core/abstracts.MediaElement#MediaType.AUDIO}, {@link 
 *  module:core/abstracts.MediaElement#MediaType.VIDEO} or {@link 
 *  module:core/abstracts.MediaElement#MediaType.DATA}
 *
 * @param {external:String} [description]
 *  A textual description of the media source. Currently not used, aimed mainly 
 *  for {@link module:core/abstracts.MediaElement#MediaType.DATA} sources
 *
 * @param {module:core/abstracts.MediaElement~getSourceConnectionsCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.getSourceConnections = function(mediaType, description, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  callback = arguments[arguments.length-1] instanceof Function
           ? Array.prototype.pop.call(arguments)
           : undefined;

  switch(arguments.length){
    case 0: mediaType = undefined;
    case 1: description = undefined;
    break;
    case 2: console.log('All optional params are used')
    break;

    default:
      var error = new RangeError('Number of params ('+arguments.length+') not in range [0-2]');
          error.length = arguments.length;
          error.min = 0;
          error.max = 2;

      throw error;
  }

  checkType('MediaType', 'mediaType', mediaType);
  checkType('String', 'description', description);

  var params = {
    mediaType: mediaType,
    description: description
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'getSourceConnections', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~getSourceConnectionsCallback
 * @param {external:Error} error
 * @param {module:core/complexTypes.ElementConnectionData} result
 *  A list of the connections information that are sending media to this 
 *  element. The list will be empty if no sources are found.
 */

/**
 * Sets the type of data for the audio stream. MediaElements that do not support
 *
 * @alias module:core/abstracts.MediaElement.setAudioFormat
 *
 * @param {module:core/complexTypes.AudioCaps} caps
 *  The format for the stream of audio
 *
 * @param {module:core/abstracts.MediaElement~setAudioFormatCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.setAudioFormat = function(caps, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('AudioCaps', 'caps', caps, {required: true});

  var params = {
    caps: caps
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setAudioFormat', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~setAudioFormatCallback
 * @param {external:Error} error
 */

/**
 * Allows change the target bitrate for the media output, if the media is 
 * encoded using VP8 or H264. This method only works if it is called before the 
 * media starts to flow.
 *
 * @alias module:core/abstracts.MediaElement.setOutputBitrate
 *
 * @param {external:Integer} bitrate
 *  Configure the enconding media bitrate in bps
 *
 * @param {module:core/abstracts.MediaElement~setOutputBitrateCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.setOutputBitrate = function(bitrate, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'bitrate', bitrate, {required: true});

  var params = {
    bitrate: bitrate
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setOutputBitrate', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~setOutputBitrateCallback
 * @param {external:Error} error
 */

/**
 * Sets the type of data for the video stream. MediaElements that do not support
 *
 * @alias module:core/abstracts.MediaElement.setVideoFormat
 *
 * @param {module:core/complexTypes.VideoCaps} caps
 *  The format for the stream of video
 *
 * @param {module:core/abstracts.MediaElement~setVideoFormatCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaElement.prototype.setVideoFormat = function(caps, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('VideoCaps', 'caps', caps, {required: true});

  var params = {
    caps: caps
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setVideoFormat', params, callback), this)
};
/**
 * @callback module:core/abstracts.MediaElement~setVideoFormatCallback
 * @param {external:Error} error
 */


/**
 * @alias module:core/abstracts.MediaElement.constructorParams
 */
MediaElement.constructorParams = {
};

/**
 * @alias module:core/abstracts.MediaElement.events
 *
 * @extends module:core/abstracts.MediaObject.events
 */
MediaElement.events = MediaObject.events.concat(['ElementConnected', 'ElementDisconnected']);


/**
 * Checker for {@link core/abstracts.MediaElement}
 *
 * @memberof module:core/abstracts
 *
 * @param {external:String} key
 * @param {module:core/abstracts.MediaElement} value
 */
function checkMediaElement(key, value)
{
  if(!(value instanceof MediaElement))
    throw ChecktypeError(key, MediaElement, value);
};


module.exports = MediaElement;

MediaElement.check = checkMediaElement;
