function Draggable(options){
	var options = options||{};
	console.log(options);
	var tag = options.dragTag||"LI";
	tag = tag.toUpperCase();
	var $dest = $(options.destId);
	$dest.each(function(){
		$(this).css("min-height","335px");
	});
	$dest.on("dragover", function(ev) {
		ev.preventDefault();
	});
	$dest.on("drop", function(ev) {
		ev.preventDefault();
		var df = ev.originalEvent.dataTransfer;
		var data = df.getData("Text");
		var el = ev.target;
		var ctx = $(this).get(0);
		do {
			var litem = document.createElement('li');
			var item = $(litem);
			var html = "<input type='text' />";//example code
			$(item).html(html);
			if ($(this).children().length>0){
				if(tag === '' || el.nodeName == tag){
					if (el.nextElementSibling){
						el.parentNode.insertBefore($(item).get(0),el.nextElementSibling);
					}else{
						ctx.appendChild($(item).get(0));
					}
				}
			}else{
				ctx.appendChild($(item).get(0));
			}
			$.mobile.pageContainer.trigger("create");
		}
		while(el !== ctx && (el = el.parentNode)); 
	});
	$dest.sortable();// jquery ui sortable
	return (function(){
		
	})(options);
}