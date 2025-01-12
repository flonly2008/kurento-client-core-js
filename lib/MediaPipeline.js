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


var Transaction = kurentoClient.TransactionsManager.Transaction;

var MediaObjectCreator  = kurentoClient.MediaObjectCreator;
var TransactionsManager = kurentoClient.TransactionsManager;

var transactionOperation = TransactionsManager.transactionOperation;

var MediaObject = require('./abstracts/MediaObject');


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create a {@link module:core.MediaPipeline MediaPipeline}
 *
 * @classdesc
 *  A pipeline is a container for a collection of {@link 
 *  module:core/abstracts.MediaElement MediaElements} and 
 *  :rom:cls:`MediaMixers<MediaMixer>`. It offers the methods needed to control 
 *  the creation and connection of elements inside a certain pipeline.
 *
 * @extends module:core/abstracts.MediaObject
 *
 * @constructor module:core.MediaPipeline
 */
function MediaPipeline(strict){
  MediaPipeline.super_.call(this);


  var self = this;


  // Transactional API

  var transactionsManager = new TransactionsManager(this, encodeTransaction);

  this.beginTransaction = transactionsManager.beginTransaction.bind(transactionsManager);
  this.endTransaction   = transactionsManager.endTransaction.bind(transactionsManager);
  this.transaction      = transactionsManager.transaction.bind(transactionsManager);


  // Encode commands

  function encodeCreate(transaction, params, callback)
  {
    if(transaction)
      return transactionOperation.call(transaction, 'create', params, callback);

    if(transactionsManager.length)
      return transactionOperation.call(transactionsManager, 'create', params, callback);

    self.emit('_create', undefined, params, callback)
  }

  function encodeRpc(transaction, method, params, callback)
  {
    if(transaction)
      return transactionOperation.call(transaction, method, params, callback);

    if(transactionsManager.length)
      return transactionOperation.call(transactionsManager, method, params, callback);

    self.emit('_rpc', undefined, method, params, callback)
  }

  function encodeTransaction(operations, callback)
  {
    var params =
    {
//      object: self,
      operations: operations
    };

    if(transactionsManager.length)
      return transactionOperation.call(transactionsManager, 'transaction', params, callback);

    self.emit('_transaction', params, callback);
  }

  var describe = this.emit.bind(this, '_describe');


  // Creation of objects

  var mediaObjectCreator = new MediaObjectCreator(this, encodeCreate, encodeRpc,
    encodeTransaction, describe, strict);

  /**
   * Create a new instance of a {module:core/abstract.MediaObject} attached to
   *  this {module:core.MediaPipeline}
   *
   * @param {external:String} type - Type of the
   *  {module:core/abstract.MediaObject}
   * @param {external:String[]} [params]
   * @param {module:core.MediaPipeline~createCallback} callback
   *
   * @return {external:Promise}
   */
  this.create = mediaObjectCreator.create.bind(mediaObjectCreator);
  /**
   * @callback core.MediaPipeline~createCallback
   * @param {external:Error} error
   * @param {module:core/abstract~MediaElement} result
   *  The created MediaElement
   */
};
inherits(MediaPipeline, MediaObject);


//
// Public methods
//

/**
 * Returns a string in dot (graphviz) format that represents the gstreamer 
 * elements inside the pipeline
 *
 * @alias module:core.MediaPipeline.getGstreamerDot
 *
 * @param {module:core/complexTypes.GstreamerDotDetails} [details]
 *  Details of graph
 *
 * @param {module:core.MediaPipeline~getGstreamerDotCallback} [callback]
 *
 * @return {external:Promise}
 */
MediaPipeline.prototype.getGstreamerDot = function(details, callback){
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
 * @callback module:core.MediaPipeline~getGstreamerDotCallback
 * @param {external:Error} error
 * @param {external:String} result
 *  The dot graph
 */


/**
 * Connect the source of a media to the sink of the next one
 *
 * @param {...module:core/abstract~MediaObject} media - A media to be connected
 * @callback {module:MediaPipeline~connectCallback} [callback]
 *
 * @return {external:Promise}
 *
 * @throws {SyntaxError}
 */
MediaPipeline.prototype.connect = function(media, callback){
  // Fix lenght-variable arguments
  if(!(media instanceof Array))
  {
    media = Array.prototype.slice.call(arguments, 0);
    callback = (typeof media[media.length - 1] === 'function')
             ? media.pop()
             : undefined;
  }

  callback = (callback || noop).bind(this)

  // Check if we have enought media components
  if(media.length < 2)
    throw new SyntaxError('Need at least two media elements to connect');

  return media[0].connect(media.slice(1), callback)
};
/**
 * @callback MediaPipeline~connectCallback
 * @param {external:Error} error
 */


/**
 * @alias module:core.MediaPipeline.constructorParams
 */
MediaPipeline.constructorParams = {
};

/**
 * @alias module:core.MediaPipeline.events
 *
 * @extends module:core/abstracts.MediaObject.events
 */
MediaPipeline.events = MediaObject.events;


/**
 * Checker for {@link core.MediaPipeline}
 *
 * @memberof module:core
 *
 * @param {external:String} key
 * @param {module:core.MediaPipeline} value
 */
function checkMediaPipeline(key, value)
{
  if(!(value instanceof MediaPipeline))
    throw ChecktypeError(key, MediaPipeline, value);
};


module.exports = MediaPipeline;

MediaPipeline.check = checkMediaPipeline;
