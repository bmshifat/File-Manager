/*! initial.js 0.2.0 - https://github.com/judesfernando/initial.js */ 
// ADDED toString() to support also numbers
!function(e){var t=function(e,t){var a,n=e.charCodeAt(t);return n>=55296&&n<=56319&&e.length>t+1&&(a=e.charCodeAt(t+1))>=56320&&a<=57343?e.substring(t,t+2):e[t]};e.fn.initial=function(a){var n,i=["#1abc9c","#16a085","#f1c40f","#f39c12","#2ecc71","#27ae60","#e67e22","#d35400","#3498db","#2980b9","#e74c3c","#c0392b","#9b59b6","#8e44ad","#bdc3c7","#34495e","#2c3e50","#95a5a6","#7f8c8d","#ec87bf","#d870ad","#f69785","#9ba37e","#b49255","#b49255","#a94136"];return this.each(function(){var o=e(this),r=e.extend({name:"Name",color:null,seed:0,charCount:1,textColor:"#ffffff",height:100,width:100,fontSize:60,fontWeight:400,fontFamily:"HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif",radius:0},a),c=function(e,a,n){for(var i,o="",r=0,c=0,d=e.length;r<d;)i=t(e,r),c>=a&&c<n&&(o+=i),r+=i.length,c+=1;return o}((r=e.extend(r,o.data())).name.toString(),0,r.charCount).toUpperCase(),d=e('<text text-anchor="middle"></text>').attr({y:"50%",x:"50%",dy:"0.35em","pointer-events":"auto",fill:r.textColor,"font-family":r.fontFamily}).html(c).css({"font-weight":r.fontWeight,"font-size":r.fontSize+"px"});if(null==r.color){var h=Math.floor((c.charCodeAt(0)+r.seed)%i.length);n=i[h]}else n=r.color;var f=e("<svg></svg>").attr({xmlns:"http://www.w3.org/2000/svg","pointer-events":"none",width:r.width,height:r.height}).css({"background-color":n,width:r.width+"px",height:r.height+"px","border-radius":r.radius+"px","-moz-border-radius":r.radius+"px"});f.append(d);var l=window.btoa(unescape(encodeURIComponent(e("<div>").append(f.clone()).html())));o.attr("src","data:image/svg+xml;base64,"+l)})}}(jQuery);
/*! cropit - v0.5.1 <https://github.com/scottcheng/cropit> */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?exports.cropit=t(require("jquery")):e.cropit=t(e.jQuery)}(this,function(e){return function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){function o(e){return e&&e.__esModule?e:{"default":e}}var n=Array.prototype.slice,a=i(1),s=o(a),r=i(2),h=o(r),m=i(4),l=i(6),d=function(e,t){return e.each(function(){var e=s["default"].data(this,m.PLUGIN_KEY);e&&t(e)})},u=function(e,t,i){var o=e.first().data(m.PLUGIN_KEY);return o&&s["default"].isFunction(o[t])?o[t](i):null},g={init:function(e){return this.each(function(){if(!s["default"].data(this,m.PLUGIN_KEY)){var t=new h["default"](s["default"],this,e);s["default"].data(this,m.PLUGIN_KEY,t)}})},destroy:function(){return this.each(function(){s["default"].removeData(this,m.PLUGIN_KEY)})},isZoomable:function(){return u(this,"isZoomable")},"export":function(e){return u(this,"getCroppedImageData",e)}},p=function(e,t){return d(e,function(e){e[t]()})},f=function(e,t,i){if((0,l.exists)(i))return d(e,function(e){e[t]=i});var o=e.first().data(m.PLUGIN_KEY);return o[t]};s["default"].fn.cropit=function(e){return g[e]?g[e].apply(this,Array.prototype.slice.call(arguments,1)):["imageState","imageSrc","offset","previewSize","imageSize","zoom","initialZoom","exportZoom","minZoom","maxZoom"].indexOf(e)>=0?f.apply(void 0,[this].concat(n.call(arguments))):["rotateCW","rotateCCW","disable","reenable"].indexOf(e)>=0?p.apply(void 0,[this].concat(n.call(arguments))):g.init.apply(this,arguments)}},function(t,i){t.exports=e},function(e,t,i){function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),s=i(1),r=o(s),h=i(3),m=o(h),l=i(4),d=i(5),u=i(6),g=function(){function e(t,i,o){n(this,e),this.$el=(0,r["default"])(i);var a=(0,d.loadDefaults)(this.$el);this.options=r["default"].extend({},a,o),this.init()}return a(e,[{key:"init",value:function(){var e=this;this.image=new Image,this.preImage=new Image,this.image.onload=this.onImageLoaded.bind(this),this.preImage.onload=this.onPreImageLoaded.bind(this),this.image.onerror=this.preImage.onerror=function(){e.onImageError.call(e,l.ERRORS.IMAGE_FAILED_TO_LOAD)},this.$preview=this.options.$preview.css("position","relative"),this.$fileInput=this.options.$fileInput.attr({accept:"image/*"}),this.$zoomSlider=this.options.$zoomSlider.attr({min:0,max:1,step:.01}),this.previewSize={width:this.options.width||this.$preview.width(),height:this.options.height||this.$preview.height()},this.$image=(0,r["default"])("<img />").addClass(l.CLASS_NAMES.PREVIEW_IMAGE).attr("alt","").css({transformOrigin:"top left",webkitTransformOrigin:"top left",willChange:"transform"}),this.$imageContainer=(0,r["default"])("<div />").addClass(l.CLASS_NAMES.PREVIEW_IMAGE_CONTAINER).css({position:"absolute",overflow:"hidden",left:0,top:0,width:"100%",height:"100%"}).append(this.$image),this.$preview.append(this.$imageContainer),this.options.imageBackground&&(r["default"].isArray(this.options.imageBackgroundBorderWidth)?this.bgBorderWidthArray=this.options.imageBackgroundBorderWidth:this.bgBorderWidthArray=[0,1,2,3].map(function(){return e.options.imageBackgroundBorderWidth}),this.$bg=(0,r["default"])("<img />").addClass(l.CLASS_NAMES.PREVIEW_BACKGROUND).attr("alt","").css({position:"relative",left:this.bgBorderWidthArray[3],top:this.bgBorderWidthArray[0],transformOrigin:"top left",webkitTransformOrigin:"top left",willChange:"transform"}),this.$bgContainer=(0,r["default"])("<div />").addClass(l.CLASS_NAMES.PREVIEW_BACKGROUND_CONTAINER).css({position:"absolute",zIndex:0,top:-this.bgBorderWidthArray[0],right:-this.bgBorderWidthArray[1],bottom:-this.bgBorderWidthArray[2],left:-this.bgBorderWidthArray[3]}).append(this.$bg),this.bgBorderWidthArray[0]>0&&this.$bgContainer.css("overflow","hidden"),this.$preview.prepend(this.$bgContainer)),this.initialZoom=this.options.initialZoom,this.imageLoaded=!1,this.moveContinue=!1,this.zoomer=new m["default"],this.options.allowDragNDrop&&r["default"].event.props.push("dataTransfer"),this.bindListeners(),this.options.imageState&&this.options.imageState.src&&this.loadImage(this.options.imageState.src)}},{key:"bindListeners",value:function(){this.$fileInput.on("change.cropit",this.onFileChange.bind(this)),this.$imageContainer.on(l.EVENTS.PREVIEW,this.onPreviewEvent.bind(this)),this.$zoomSlider.on(l.EVENTS.ZOOM_INPUT,this.onZoomSliderChange.bind(this)),this.options.allowDragNDrop&&(this.$imageContainer.on("dragover.cropit dragleave.cropit",this.onDragOver.bind(this)),this.$imageContainer.on("drop.cropit",this.onDrop.bind(this)))}},{key:"unbindListeners",value:function(){this.$fileInput.off("change.cropit"),this.$imageContainer.off(l.EVENTS.PREVIEW),this.$imageContainer.off("dragover.cropit dragleave.cropit drop.cropit"),this.$zoomSlider.off(l.EVENTS.ZOOM_INPUT)}},{key:"onFileChange",value:function(e){this.options.onFileChange(e),this.$fileInput.get(0).files&&this.loadFile(this.$fileInput.get(0).files[0])}},{key:"loadFile",value:function(e){var t=new FileReader;e&&e.type.match("image")?(t.readAsDataURL(e),t.onload=this.onFileReaderLoaded.bind(this),t.onerror=this.onFileReaderError.bind(this)):e&&this.onFileReaderError()}},{key:"onFileReaderLoaded",value:function(e){this.loadImage(e.target.result)}},{key:"onFileReaderError",value:function(){this.options.onFileReaderError()}},{key:"onDragOver",value:function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy",this.$preview.toggleClass(l.CLASS_NAMES.DRAG_HOVERED,"dragover"===e.type)}},{key:"onDrop",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var i=Array.prototype.slice.call(e.dataTransfer.files,0);i.some(function(e){return e.type.match("image")?(t.loadFile(e),!0):!1}),this.$preview.removeClass(l.CLASS_NAMES.DRAG_HOVERED)}},{key:"loadImage",value:function(e){var t=this;if(e)if(this.options.onImageLoading(),this.setImageLoadingClass(),0===e.indexOf("data"))this.preImage.src=e;else{var i=new XMLHttpRequest;i.onload=function(e){return e.target.status>=300?void t.onImageError.call(t,l.ERRORS.IMAGE_FAILED_TO_LOAD):void t.loadFile(e.target.response)},i.open("GET",e),i.responseType="blob",i.send()}}},{key:"onPreImageLoaded",value:function(){return this.shouldRejectImage({imageWidth:this.preImage.width,imageHeight:this.preImage.height,previewSize:this.previewSize,maxZoom:this.options.maxZoom,exportZoom:this.options.exportZoom,smallImage:this.options.smallImage})?(this.onImageError(l.ERRORS.SMALL_IMAGE),void(this.image.src&&this.setImageLoadedClass())):void(this.image.src=this.preImage.src)}},{key:"onImageLoaded",value:function(){this.rotation=0,this.setupZoomer(this.options.imageState&&this.options.imageState.zoom||this._initialZoom),this.options.imageState&&this.options.imageState.offset?this.offset=this.options.imageState.offset:this.centerImage(),this.options.imageState={},this.$image.attr("src",this.image.src),this.options.imageBackground&&this.$bg.attr("src",this.image.src),this.setImageLoadedClass(),this.imageLoaded=!0,this.options.onImageLoaded()}},{key:"onImageError",value:function(){this.options.onImageError.apply(this,arguments),this.removeImageLoadingClass()}},{key:"setImageLoadingClass",value:function(){this.$preview.removeClass(l.CLASS_NAMES.IMAGE_LOADED).addClass(l.CLASS_NAMES.IMAGE_LOADING)}},{key:"setImageLoadedClass",value:function(){this.$preview.removeClass(l.CLASS_NAMES.IMAGE_LOADING).addClass(l.CLASS_NAMES.IMAGE_LOADED)}},{key:"removeImageLoadingClass",value:function(){this.$preview.removeClass(l.CLASS_NAMES.IMAGE_LOADING)}},{key:"getEventPosition",value:function(e){return e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches[0]&&(e=e.originalEvent.touches[0]),e.clientX&&e.clientY?{x:e.clientX,y:e.clientY}:void 0}},{key:"onPreviewEvent",value:function(e){return this.imageLoaded?(this.moveContinue=!1,this.$imageContainer.off(l.EVENTS.PREVIEW_MOVE),"mousedown"===e.type||"touchstart"===e.type?(this.origin=this.getEventPosition(e),this.moveContinue=!0,this.$imageContainer.on(l.EVENTS.PREVIEW_MOVE,this.onMove.bind(this))):(0,r["default"])(document.body).focus(),e.stopPropagation(),!1):void 0}},{key:"onMove",value:function(e){var t=this.getEventPosition(e);return this.moveContinue&&t&&(this.offset={x:this.offset.x+t.x-this.origin.x,y:this.offset.y+t.y-this.origin.y}),this.origin=t,e.stopPropagation(),!1}},{key:"fixOffset",value:function(e){if(!this.imageLoaded)return e;var t={x:e.x,y:e.y};return this.options.freeMove||(this.imageWidth*this.zoom>=this.previewSize.width?t.x=Math.min(0,Math.max(t.x,this.previewSize.width-this.imageWidth*this.zoom)):t.x=Math.max(0,Math.min(t.x,this.previewSize.width-this.imageWidth*this.zoom)),this.imageHeight*this.zoom>=this.previewSize.height?t.y=Math.min(0,Math.max(t.y,this.previewSize.height-this.imageHeight*this.zoom)):t.y=Math.max(0,Math.min(t.y,this.previewSize.height-this.imageHeight*this.zoom))),t.x=(0,u.round)(t.x),t.y=(0,u.round)(t.y),t}},{key:"centerImage",value:function(){this.image.width&&this.image.height&&this.zoom&&(this.offset={x:(this.previewSize.width-this.imageWidth*this.zoom)/2,y:(this.previewSize.height-this.imageHeight*this.zoom)/2})}},{key:"onZoomSliderChange",value:function(){if(this.imageLoaded){this.zoomSliderPos=Number(this.$zoomSlider.val());var e=this.zoomer.getZoom(this.zoomSliderPos);e!==this.zoom&&(this.zoom=e)}}},{key:"enableZoomSlider",value:function(){this.$zoomSlider.removeAttr("disabled"),this.options.onZoomEnabled()}},{key:"disableZoomSlider",value:function(){this.$zoomSlider.attr("disabled",!0),this.options.onZoomDisabled()}},{key:"setupZoomer",value:function(e){this.zoomer.setup({imageSize:this.imageSize,previewSize:this.previewSize,exportZoom:this.options.exportZoom,maxZoom:this.options.maxZoom,minZoom:this.options.minZoom,smallImage:this.options.smallImage}),this.zoom=(0,u.exists)(e)?e:this._zoom,this.isZoomable()?this.enableZoomSlider():this.disableZoomSlider()}},{key:"fixZoom",value:function(e){return this.zoomer.fixZoom(e)}},{key:"isZoomable",value:function(){return this.zoomer.isZoomable()}},{key:"renderImage",value:function(){var e="\n      translate("+this.rotatedOffset.x+"px, "+this.rotatedOffset.y+"px)\n      scale("+this.zoom+")\n      rotate("+this.rotation+"deg)";this.$image.css({transform:e,webkitTransform:e}),this.options.imageBackground&&this.$bg.css({transform:e,webkitTransform:e})}},{key:"rotateCW",value:function(){this.shouldRejectImage({imageWidth:this.image.height,imageHeight:this.image.width,previewSize:this.previewSize,maxZoom:this.options.maxZoom,exportZoom:this.options.exportZoom,smallImage:this.options.smallImage})?this.rotation=(this.rotation+180)%360:this.rotation=(this.rotation+90)%360}},{key:"rotateCCW",value:function(){this.shouldRejectImage({imageWidth:this.image.height,imageHeight:this.image.width,previewSize:this.previewSize,maxZoom:this.options.maxZoom,exportZoom:this.options.exportZoom,smallImage:this.options.smallImage})?this.rotation=(this.rotation+180)%360:this.rotation=(this.rotation+270)%360}},{key:"shouldRejectImage",value:function(e){var t=e.imageWidth,i=e.imageHeight,o=e.previewSize,n=e.maxZoom,a=e.exportZoom,s=e.smallImage;return"reject"!==s?!1:t*n<o.width*a||i*n<o.height*a}},{key:"getCroppedImageData",value:function(e){if(this.image.src){var t={type:"image/png",quality:.75,originalSize:!1,fillBg:"#fff"};e=r["default"].extend({},t,e);var i=e.originalSize?1/this.zoom:this.options.exportZoom,o={width:this.zoom*i*this.image.width,height:this.zoom*i*this.image.height},n=(0,r["default"])("<canvas />").attr({width:this.previewSize.width*i,height:this.previewSize.height*i}).get(0),a=n.getContext("2d");return"image/jpeg"===e.type&&(a.fillStyle=e.fillBg,a.fillRect(0,0,n.width,n.height)),a.translate(this.rotatedOffset.x*i,this.rotatedOffset.y*i),a.rotate(this.rotation*Math.PI/180),a.drawImage(this.image,0,0,o.width,o.height),n.toDataURL(e.type,e.quality)}}},{key:"disable",value:function(){this.unbindListeners(),this.disableZoomSlider(),this.$el.addClass(l.CLASS_NAMES.DISABLED)}},{key:"reenable",value:function(){this.bindListeners(),this.enableZoomSlider(),this.$el.removeClass(l.CLASS_NAMES.DISABLED)}},{key:"$",value:function(e){return this.$el?this.$el.find(e):null}},{key:"offset",set:function(e){e&&(0,u.exists)(e.x)&&(0,u.exists)(e.y)&&(this._offset=this.fixOffset(e),this.renderImage(),this.options.onOffsetChange(e))},get:function(){return this._offset}},{key:"zoom",set:function(e){if(e=this.fixZoom(e),this.imageLoaded){var t=this.zoom,i=this.previewSize.width/2-(this.previewSize.width/2-this.offset.x)*e/t,o=this.previewSize.height/2-(this.previewSize.height/2-this.offset.y)*e/t;this._zoom=e,this.offset={x:i,y:o}}else this._zoom=e;this.zoomSliderPos=this.zoomer.getSliderPos(this.zoom),this.$zoomSlider.val(this.zoomSliderPos),this.options.onZoomChange(e)},get:function(){return this._zoom}},{key:"rotatedOffset",get:function(){return{x:this.offset.x+(90===this.rotation?this.image.height*this.zoom:0)+(180===this.rotation?this.image.width*this.zoom:0),y:this.offset.y+(180===this.rotation?this.image.height*this.zoom:0)+(270===this.rotation?this.image.width*this.zoom:0)}}},{key:"rotation",set:function(e){this._rotation=e,this.imageLoaded&&this.setupZoomer()},get:function(){return this._rotation}},{key:"imageState",get:function(){return{src:this.image.src,offset:this.offset,zoom:this.zoom}}},{key:"imageSrc",get:function(){return this.image.src},set:function(e){this.loadImage(e)}},{key:"imageWidth",get:function(){return this.rotation%180===0?this.image.width:this.image.height}},{key:"imageHeight",get:function(){return this.rotation%180===0?this.image.height:this.image.width}},{key:"imageSize",get:function(){return{width:this.imageWidth,height:this.imageHeight}}},{key:"initialZoom",get:function(){return this.options.initialZoom},set:function(e){this.options.initialZoom=e,"min"===e?this._initialZoom=0:"image"===e?this._initialZoom=1:this._initialZoom=0}},{key:"exportZoom",get:function(){return this.options.exportZoom},set:function(e){this.options.exportZoom=e,this.setupZoomer()}},{key:"minZoom",get:function(){return this.options.minZoom},set:function(e){this.options.minZoom=e,this.setupZoomer()}},{key:"maxZoom",get:function(){return this.options.maxZoom},set:function(e){this.options.maxZoom=e,this.setupZoomer()}},{key:"previewSize",get:function(){return this._previewSize},set:function(e){!e||e.width<=0||e.height<=0||(this._previewSize={width:e.width,height:e.height},this.$preview.css({width:this.previewSize.width,height:this.previewSize.height}),this.imageLoaded&&this.setupZoomer())}}]),e}();t["default"]=g,e.exports=t["default"]},function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),n=function(){function e(){i(this,e),this.minZoom=this.maxZoom=1}return o(e,[{key:"setup",value:function(e){var t=e.imageSize,i=e.previewSize,o=e.exportZoom,n=e.maxZoom,a=e.minZoom,s=e.smallImage,r=i.width/t.width,h=i.height/t.height;"fit"===a?this.minZoom=Math.min(r,h):this.minZoom=Math.max(r,h),"allow"===s&&(this.minZoom=Math.min(this.minZoom,1)),this.maxZoom=Math.max(this.minZoom,n/o)}},{key:"getZoom",value:function(e){return this.minZoom&&this.maxZoom?e*(this.maxZoom-this.minZoom)+this.minZoom:null}},{key:"getSliderPos",value:function(e){return this.minZoom&&this.maxZoom?this.minZoom===this.maxZoom?0:(e-this.minZoom)/(this.maxZoom-this.minZoom):null}},{key:"isZoomable",value:function(){return this.minZoom&&this.maxZoom?this.minZoom!==this.maxZoom:null}},{key:"fixZoom",value:function(e){return Math.max(this.minZoom,Math.min(this.maxZoom,e))}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i="cropit";t.PLUGIN_KEY=i;var o={PREVIEW:"cropit-preview",PREVIEW_IMAGE_CONTAINER:"cropit-preview-image-container",PREVIEW_IMAGE:"cropit-preview-image",PREVIEW_BACKGROUND_CONTAINER:"cropit-preview-background-container",PREVIEW_BACKGROUND:"cropit-preview-background",FILE_INPUT:"cropit-image-input",ZOOM_SLIDER:"cropit-image-zoom-input",DRAG_HOVERED:"cropit-drag-hovered",IMAGE_LOADING:"cropit-image-loading",IMAGE_LOADED:"cropit-image-loaded",DISABLED:"cropit-disabled"};t.CLASS_NAMES=o;var n={IMAGE_FAILED_TO_LOAD:{code:0,message:"Image failed to load."},SMALL_IMAGE:{code:1,message:"Image is too small."}};t.ERRORS=n;var a=function(e){return e.map(function(e){return""+e+".cropit"}).join(" ")},s={PREVIEW:a(["mousedown","mouseup","mouseleave","touchstart","touchend","touchcancel","touchleave"]),PREVIEW_MOVE:a(["mousemove","touchmove"]),ZOOM_INPUT:a(["mousemove","touchmove","change"])};t.EVENTS=s},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var o=i(4),n={elements:[{name:"$preview",description:"The HTML element that displays image preview.",defaultSelector:"."+o.CLASS_NAMES.PREVIEW},{name:"$fileInput",description:"File input element.",defaultSelector:"input."+o.CLASS_NAMES.FILE_INPUT},{name:"$zoomSlider",description:"Range input element that controls image zoom.",defaultSelector:"input."+o.CLASS_NAMES.ZOOM_SLIDER}].map(function(e){return e.type="jQuery element",e["default"]="$imageCropper.find('"+e.defaultSelector+"')",e}),values:[{name:"width",type:"number",description:"Width of image preview in pixels. If set, it will override the CSS property.","default":null},{name:"height",type:"number",description:"Height of image preview in pixels. If set, it will override the CSS property.","default":null},{name:"imageBackground",type:"boolean",description:"Whether or not to display the background image beyond the preview area.","default":!1},{name:"imageBackgroundBorderWidth",type:"array or number",description:"Width of background image border in pixels.\n        The four array elements specify the width of background image width on the top, right, bottom, left side respectively.\n        The background image beyond the width will be hidden.\n        If specified as a number, border with uniform width on all sides will be applied.","default":[0,0,0,0]},{name:"exportZoom",type:"number",description:"The ratio between the desired image size to export and the preview size.\n        For example, if the preview size is `300px * 200px`, and `exportZoom = 2`, then\n        the exported image size will be `600px * 400px`.\n        This also affects the maximum zoom level, since the exported image cannot be zoomed to larger than its original size.","default":1},{name:"allowDragNDrop",type:"boolean",description:"When set to true, you can load an image by dragging it from local file browser onto the preview area.","default":!0},{name:"minZoom",type:"string",description:"This options decides the minimal zoom level of the image.\n        If set to `'fill'`, the image has to fill the preview area, i.e. both width and height must not go smaller than the preview area.\n        If set to `'fit'`, the image can shrink further to fit the preview area, i.e. at least one of its edges must not go smaller than the preview area.","default":"fill"},{name:"maxZoom",type:"number",description:"Determines how big the image can be zoomed. E.g. if set to 1.5, the image can be zoomed to 150% of its original size.","default":1},{name:"initialZoom",type:"string",description:"Determines the zoom when an image is loaded.\n        When set to `'min'`, image is zoomed to the smallest when loaded.\n        When set to `'image'`, image is zoomed to 100% when loaded.","default":"min"},{name:"freeMove",type:"boolean",description:"When set to true, you can freely move the image instead of being bound to the container borders","default":!1},{name:"smallImage",type:"string",description:"When set to `'reject'`, `onImageError` would be called when cropit loads an image that is smaller than the container.\n        When set to `'allow'`, images smaller than the container can be zoomed down to its original size, overiding `minZoom` option.\n        When set to `'stretch'`, the minimum zoom of small images would follow `minZoom` option.","default":"reject"}],callbacks:[{name:"onFileChange",description:"Called when user selects a file in the select file input.",params:[{name:"event",type:"object",description:"File change event object"}]},{name:"onFileReaderError",description:"Called when `FileReader` encounters an error while loading the image file."},{name:"onImageLoading",description:"Called when image starts to be loaded."},{name:"onImageLoaded",description:"Called when image is loaded."},{name:"onImageError",description:"Called when image cannot be loaded.",params:[{name:"error",type:"object",description:"Error object."},{name:"error.code",type:"number",description:"Error code. `0` means generic image loading failure. `1` means image is too small."},{name:"error.message",type:"string",description:"A message explaining the error."}]},{name:"onZoomEnabled",description:"Called when image the zoom slider is enabled."},{name:"onZoomDisabled",description:"Called when image the zoom slider is disabled."},{name:"onZoomChange",description:"Called when zoom changes.",params:[{name:"zoom",type:"number",description:"New zoom."}]},{name:"onOffsetChange",description:"Called when image offset changes.",params:[{name:"offset",type:"object",description:"New offset, with `x` and `y` values."}]}].map(function(e){return e.type="function",e})},a=function(e){var t={};return e&&n.elements.forEach(function(i){t[i.name]=e.find(i.defaultSelector)}),n.values.forEach(function(e){t[e.name]=e["default"]}),n.callbacks.forEach(function(e){t[e.name]=function(){}}),t};t.loadDefaults=a,t["default"]=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return"undefined"!=typeof e};t.exists=i;var o=function(e){return+(Math.round(100*e)+"e-2")};t.round=o}])});

/*! BM avatar setup */
function Avatars(avaimg, username) {
	var $avaResponse, $btnRemove, $updated, $btnUpload, $btnUpdate, $avatarPanel, $cropPreview, $slider, $uploader, $btnUploader, imageData, imageName;

	$avaResponse = $('.avatar-response');
	$btnRemove = $('.remove-avatar');
	$updated = $('<i class="fa fa-check-circle fa-lg pull-left text-success"></i>');
	$updatedWrap = $('.updated');
	$btnUpload = $('.uppa');
	$btnUpdate = $('.export');
	$avatarPanel = $('.avatar-panel');
	$cropPreview = $('.cropit-preview');
	$slider = $('.slider');
	$uploader = $('.cropit-image-input');
	$btnUploader = $('.uppa');

	var attr = $(avaimg).attr('src');

	// hide default thumb and init cropit with current avatar
	if (typeof attr !== typeof undefined && attr !== false) {
		$avatarPanel.find('.avadefault').addClass('hidden');
		$avatarPanel.cropit({
			imageState: { 
				src: $(avaimg).attr('src')
			},
			allowDragNDrop: false
		});
	// hide cropit panel and leave default
	} else {
		$cropPreview.addClass('hidden');
		$slider.addClass('hidden');
		$btnRemove.addClass('hidden');
	}

	// Upload new image
    $btnUploader.on('click', function(){
    	// remove checked mark
		$updatedWrap.html('');
		// init cropit
		$avatarPanel.cropit({
			allowDragNDrop: false
		});
		// trigger uploader
		$uploader.click();
    });

    // Change image input
    $uploader.on('change', function(){
     	$btnUpdate.removeClass('hidden');
		// hide default
		$avatarPanel.find('.avadefault').addClass('hidden');
		// show cropit panel
		$cropPreview.removeClass('hidden');
		$slider.removeClass('hidden');
		$btnRemove.removeClass('hidden');
    });

    // Remove current avatar
    $btnRemove.on('click', function(){
    	// hide button and checked mark
    	$(this).addClass('hidden');
      	$updatedWrap.html('');

		$cropPreview.addClass('hidden');
		$('.cropit-preview-image').attr('src','');
    	$btnUpdate.removeClass('hidden');
    	$avatarPanel.find('.avadefault').removeClass('hidden');
	});

    // Save new avatar
    $(document).on('click', '.export', function(){
     	var d = new Date();
     	var randy = d.getTime();
      	var sendData;
      	var imageData = false;

      	if ($('.cropit-preview-image').attr('src') !== '') {
	    	imageData = $avatarPanel.cropit('export');
    	}
        imageName = $('.image-name').val();

		if (imageData == false) {
			// reset avatar and delete old image
			$('.avatar').attr('src', '').data('name', username).addClass('avadefault').initial({fontWeight:200, seed:13});
			sendData = { imgData: 0, imgName: imageName }
		} else {
			sendData = { imgData: imageData, imgName: imageName }
		}
        $.ajax({
            method: "POST",
            url: "BM-Admin/ajax/avatar.php",
            data: sendData
        })
        .done(function( msg ) {
        	$updatedWrap.html($updated);
	        $btnUpdate.addClass('hidden');
			// check if response is imge
	        if (msg.match(/\.(png)$/) != null) {
	            $('.avatar').attr('src', msg + '?' + randy);
	            $avatarPanel.cropit('imageSrc', msg + '?' + randy);
	       	} else {
	       		// print message
	       		$avaResponse.html(msg);
	       	}
        })
        .fail(function() {
        	$avaResponse.html('<div class="alert alert-danger" role="alert">Error saving avatar</div>');
        });
    });
}

// init default avatars
$(document).ready(function(){
    $('.avadefault').initial({fontWeight:200, seed:13});
});
