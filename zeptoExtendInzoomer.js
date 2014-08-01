/**
 * @author Administrator
 */
(function($){
	$.extend($.fn,{
		test:function(){
			// console.log("extend test");
		},
		outerWidth:function(includeMargin){
			// console.dir(this[0]);
			return includeMargin?this[0].offsetWidth+parseInt(this.css("marginLeft"))+parseInt(this.css("marginRight")):this[0].offsetWidth;
		},
		outerHeight:function(includeMargin){
			// console.dir(this[0]);
			return includeMargin?this[0].offsetHeight+parseInt(this.css("marginTop"))+parseInt(this.css("marginBottom")):this[0].offsetHeight;
		}		
	});
})(Zepto);
