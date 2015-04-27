﻿/*!@license
 * Infragistics.Web.ClientUI Chart 15.1.20151.1005
 *
 * Copyright (c) 2011-2015 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery-1.4.4.js
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * infragistics.util.js
 * infragistics.dv.core.js
 * infragistics.geographicmap_core.js
 * infragistics.datasource.js
 * infragistics.dvcommonwidget.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igMap",{options:{width:null,height:null,dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,autoMarginWidth:20,autoMarginHeight:0,crosshairVisibility:"collapsed",crosshairPoint:{x:NaN,y:NaN},plotAreaBackground:null,defaultInteraction:"dragPan",dragModifier:"none",panModifier:"shift",previewRect:null,windowRect:null,zoomable:false,windowScale:1,windowResponse:null,windowRectMinWidth:0,windowPositionHorizontal:0,windowPositionVertical:0,circleMarkerTemplate:null,triangleMarkerTemplate:null,pyramidMarkerTemplate:null,squareMarkerTemplate:null,diamondMarkerTemplate:null,pentagonMarkerTemplate:null,hexagonMarkerTemplate:null,tetragramMarkerTemplate:null,pentagramMarkerTemplate:null,hexagramMarkerTemplate:null,overviewPlusDetailPaneBackgroundImageUri:null,useTiledZooming:false,preferHigherResolutionTiles:false,zoomTileCacheSize:30,backgroundContent:{type:"openStreet",key:null,parameter:null,tilePath:null,imagerySet:"AerialWithLabels",bingUrl:"http://dev.virtualearth.net/REST/v1/Imagery/Metadata/"},series:[{type:null,name:null,dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,remove:false,showTooltip:false,shapeDataSource:null,databaseSource:null,triangulationDataSource:null,legendItemBadgeTemplate:null,legendItemTemplate:null,discreteLegendItemTemplate:null,transitionDuration:0,resolution:1,title:null,brush:null,outline:null,thickness:0,trianglesSource:null,triangleVertexMemberPath1:null,triangleVertexMemberPath2:null,triangleVertexMemberPath3:null,colorScale:null,colorMemberPath:null,visibleFromScale:0,longitudeMemberPath:null,latitudeMemberPath:null,markerType:"none",markerTemplate:null,shapeMemberPath:null,shapeStyleSelector:null,shapeStyle:null,markerBrush:null,markerOutline:null,markerCollisionAvoidance:"none",fillScale:null,fillMemberPath:null,trendLineType:"none",trendLineBrush:null,trendLineThickness:1.5,trendLinePeriod:7,trendLineZIndex:1001,maximumMarkers:400,radiusMemberPath:null,radiusScale:null,labelMemberPath:null,clipSeriesToBounds:null,valueMemberPath:null,unknownValuePlotting:"dontPlot",angleMemberPath:null,useCartesianInterpolation:true,stiffness:.5,negativeBrush:null,splineType:"natural",lowMemberPath:null,highMemberPath:null,openMemberPath:null,closeMemberPath:null,volumeMemberPath:null,ignoreFirst:0,period:0,shortPeriod:0,longPeriod:0,valueResolver:null,shapeFilterResolution:2,useBruteForce:false,progressiveLoad:true,mouseOverEnabled:false,useSquareCutoffStyle:false,heatMinimum:0,heatMaximum:50}],theme:"c"},css:{map:"ui-corner-all ui-widget-content",unsupportedBrowserClass:"ui-chart-non-html5-supported-message ui-helper-clearfix",tooltip:"ui-chart-tooltip ui-widget-content ui-corner-all"},events:{tooltipShowing:"tooltipShowing",tooltipShown:"tooltipShown",tooltipHiding:"tooltipHiding",tooltipHidden:"tooltipHidden",browserNotSupported:"browserNotSupported",seriesCursorMouseMove:null,seriesMouseLeftButtonDown:null,seriesMouseLeftButtonUp:null,seriesMouseMove:null,seriesMouseEnter:null,seriesMouseLeave:null,windowRectChanged:null,gridAreaRectChanged:null,refreshCompleted:null,triangulationStatusChanged:null},_createWidget:function(options,element){this._fixCss();this.dvWidget=new $.ig.dvCommonWidget(this);this.dvWidget._createWidget(options,element,this)},_create:function(){this._fixCss();this.dvWidget._create()},_fixCss:function(){if(this.css.map.indexOf("{0}")>-1){this.css.map=this.css.map.replace("{0}",this.options.theme);this.css.tooltip=this.css.tooltip.replace("{0}",this.options.theme)}},_setOption:function(key,value){this.dvWidget._setOption(key,value)},option:function(){return this.dvWidget.option.apply(this.dvWidget,arguments)},destroy:function(){if(this._chart){this._chart.destroy()}this.dvWidget._destroy(this);$.Widget.prototype.destroy.apply(this,arguments)},id:function(){return this.element[0].id},exportImage:function(width,height){return this.dvWidget._getImage(width,height,this)},styleUpdated:function(){this._chart.styleUpdated();return this},resetZoom:function(){this._chart.resetZoom();return this},addItem:function(item,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].addRow(null,item,true)}},insertItem:function(item,index,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].insertRow(null,item,index,true)}},removeItem:function(index,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].deleteRow(index,true)}},setItem:function(index,item,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].updateRow(index,item,true)}},notifySetItem:function(dataSource,index,newItem,oldItem){this._chart.notifySetItem(dataSource,index,oldItem,newItem);return this},notifyClearItems:function(dataSource){this._chart.notifyClearItems(dataSource);return this},notifyInsertItem:function(dataSource,index,newItem){this._chart.notifyInsertItem(dataSource,index,newItem);return this},notifyRemoveItem:function(dataSource,index,oldItem){this._chart.notifyRemoveItem(dataSource,index,oldItem);return this},scrollIntoView:function(targetName,item){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.scrollIntoView){target.scrollIntoView(item)}return this},scaleValue:function(targetName,unscaledValue){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.scaleValue){return target.scaleValue(unscaledValue)}return 0},unscaleValue:function(targetName,scaledValue){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.unscaleValue){return target.unscaleValue(scaledValue)}return 0},startTiledZoomingIfNecessary:function(){this._chart.startTiledZoomingIfNecessary();return this},endTiledZoomingIfRunning:function(){this._chart.endTiledZoomingIfRunning();return this},clearTileZoomCache:function(){this._chart.clearTileZoomCache();return this},flush:function(){this._chart.flush()},exportVisualData:function(){return this._chart.exportVisualData()},getActualMinimumValue:function(targetName){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.actualMinimumValue){return target.actualMinimumValue()}return 0},getActualMaximumValue:function(targetName){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.actualMaximumValue){return target.actualMaximumValue()}return 0},notifyContainerResized:function(){this._chart.notifyContainerResized()},zoomToGeographic:function(rect){var theRect;if(rect===undefined){rect=this._chart.getGeographicFromZoom()}else{theRect=$.ig.APIFactory.prototype.createRect(rect.left,rect.top,rect.width,rect.height);rect=theRect}this._chart.zoomToGeographic(rect);return this},getGeographicFromZoom:function(rect){var res,ret,theRect;if(rect===undefined){rect=this._chart.windowRect()}else{theRect=$.ig.APIFactory.prototype.createRect(rect.left,rect.top,rect.width,rect.height);rect=theRect}res=this._chart.getGeographicFromZoom(rect);ret={};ret.top=res.top();ret.left=res.left();ret.width=res.width();ret.height=res.height();return ret},getZoomFromGeographic:function(rect){var res,ret,theRect;if(rect===undefined){rect=this._chart.windowRect()}else{theRect=$.ig.APIFactory.prototype.createRect(rect.left,rect.top,rect.width,rect.height);rect=theRect}res=this._chart.getZoomRectFromGeoRect(rect);ret={};ret.top=res.top();ret.left=res.left();ret.width=res.width();ret.height=res.height();return ret},print:function(){this.dvWidget._print()},renderSeries:function(targetName,animate){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.renderSeries){return target.renderSeries(animate)}return this},_initConverter:function(options,callback){var id=options.name||this._containerSourceID,convDataSource=options.triangulationDataSource||options.shapeDataSource;if(this.dataSources===undefined){this.dataSources={}}if(convDataSource instanceof $.ig.TriangulationDataSource||convDataSource instanceof $.ig.ShapeDataSource){this.dataSources[id]=convDataSource.converter();if(convDataSource.isBound()){callback.call(this.dvWidget)}else{convDataSource.settings.id=id;convDataSource.settings.callee=this.dvWidget;convDataSource.settings.callback=callback}}else{if(options.triangulationDataSource){this.dataSources[id]=new $.ig.TriangulationDataSource({id:id,source:options.triangulationDataSource,callback:callback,callee:this.dvWidget}).dataBind().converter()}else{this.dataSources[id]=new $.ig.ShapeDataSource({id:id,shapefileSource:options.shapeDataSource,databaseSource:options.databaseSource,callback:callback,callee:this.dvWidget}).dataBind().converter()}}this.dataSources[id].id=id}});$.extend($.ui.igMap,{version:"15.1.20151.1005"});$.ig.ShapeDataSource=$.ig.ShapeDataSource||Class.extend({settings:{id:null,shapefileSource:null,databaseSource:null,callback:null,callee:null,transformRecord:null,transformPoint:null,transformBounds:null,importCompleted:null},init:function(options){this._uris={};this._isImported=false;this.settings=$.extend(true,{},$.ig.ShapeDataSource.prototype.settings,options);this._converter=new $.ig.ShapefileConverter;this._converter.importCompleted=jQuery.proxy(this._importCompleted,this);return this},_importCompleted:function(){var i,j,k,bounds,currRecord,subShape,point,flatPoint;this._isImported=true;if(this._converter!==null&&typeof this.settings.transformBounds==="function"){bounds={left:this._converter.worldRect().left(),top:this._converter.worldRect().top(),width:this._converter.worldRect().width(),height:this._converter.worldRect().height()};this.settings.transformBounds(bounds);this._converter.worldRect($.ig.APIFactory.prototype.createRect(bounds.left,bounds.top,bounds.width,bounds.height));this._converter.bounds=bounds}if(this._converter!==null&&(typeof this.settings.transformRecord==="function"||typeof this.settings.transformPoint==="function")){for(i=0;i<this._converter.records().count();i++){currRecord=this._converter.records().item(i);if(typeof this.settings.transformPoint==="function"){for(j=0;j<currRecord.points.count();j++){subShape=currRecord.points.item(j);for(k=0;k<subShape.count();k++){point=subShape.item(k);flatPoint={x:point.x(),y:point.y()};this.settings.transformPoint(flatPoint);point.x(flatPoint.x);point.y(flatPoint.y)}}}if(typeof this.settings.transformRecord==="function"){this.settings.transformRecord(currRecord)}}}if(typeof this.settings.importCompleted==="function"){this.settings.importCompleted(this)}if(typeof this.settings.callback==="function"){this.settings.callback.call(this)}},dataBind:function(){if(this.settings.shapefileSource){this._uris.shapefileSource=new $.ig.Uri;this._uris.shapefileSource.value(this.settings.shapefileSource);this._converter.shapefileSource(this._uris.shapefileSource)}if(this.settings.databaseSource){this._uris.databaseSource=new $.ig.Uri;this._uris.databaseSource.value(this.settings.databaseSource);this._converter.databaseSource(this._uris.databaseSource)}return this},isBound:function(){return this._isImported},converter:function(){return this._converter}});$.ig.TriangulationDataSource=$.ig.TriangulationDataSource||Class.extend({settings:{id:null,source:null,triangulationSource:null,callback:null,callee:null},init:function(options){this._uris={};this._isImported=false;this.settings=$.extend(true,{},$.ig.TriangulationDataSource.prototype.settings,options);this._converter=new $.ig.ItfConverter;this._converter.importCompleted=jQuery.proxy(this._importCompleted,this);return this},_importCompleted:function(){this._isImported=true;if(typeof this.settings.callback==="function"){this.settings.callback.call(this)}},dataBind:function(){if(this.settings.source){this._uris.source=new $.ig.Uri;this._uris.source.value(this.settings.source);this._converter.source(this._uris.source)}if(this.settings.triangulationSource){this._uris.triangulationSource=new $.ig.Uri;this._uris.triangulationSource.value(this.settings.triangulationSource);this._converter.source(this._uris.triangulationSource)}return this},isBound:function(){return this._isImported},converter:function(){return this._converter}})})(jQuery);(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$('<div id="__ig_wm__"></div>').appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);