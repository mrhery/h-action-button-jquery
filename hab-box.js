function basic_box(obj){
	var title, message;
	if(obj.title !== undefined || obj.title !== ""){
		title = obj.title;
	}else{
		title = "";
	}
	
	if(obj.message !== undefined || obj.message !== ""){
		message = obj.message;
	}else{
		message = "";
	}
	
	var html = `
		<div class="hab-box" style="position: absolute; width: 100%; height: 100%; background-color: rgba(100, 100, 100, 0.9); z-index: 1010; top: 0; left: 0;"></div>
		
		<div class="hab-box" style="position: absolute; width: 400px; height: auto; background-color: white; z-index: 1020; top: 25%; left: 50%; transform: translate(-50%, -50%)">
			<div style="position: absolute; right: 1%; top: 0;">
				<button 
					onclick="close_hab_box('hab-box')"
				>
					X
				</button>
			</div>
			
			<div style="padding: 10px;">
				<strong>`+ title +`</strong>
			</div>
			
			<div style="padding: 10px;">
			`+ message +`
			</div>
			
			<div style="padding: 10px;">
				<button onclick="hab_handler('`+ base64_encode(JSON.stringify(obj)) +`')">
					Confirm
				</button>
				
				<button onclick="close_hab_box('hab-box')">
					X Cancel
				</button>
			</div>
		</div>
	`;
	
	$("body").append(html);
}