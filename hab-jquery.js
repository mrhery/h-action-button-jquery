/********************************************************************************
 *Hery - Action Button JQuery							*
 *Developed & Designed by Mr Hery						*
 *On Mid June 2018 @ Intelligent Hosting Pte Ltd Development Lab (MY-HQ)	*
 *This simple JS script will allow developer to run script on event of element	*
 *with set of value & parameter parse in element attribute itself.		*
 ********************************************************************************/
 //Updated at25 Aug 2018
 //--Added HUB Handler for confirmation box.
 //asdasdasdsa assdasdqwe123423
 
$(document).ready(function(){
	$(".action-button").on("click", function(){
		var action, command, input, value, exec, vid;
		var confirm, title, message;
		var  param = [];
		command = $(this).attr("data-command");
		input = $(this).attr("data-input");
		value = $(this).attr("data-value");
		action = $(this).attr("data-action");
		confirm = $(this).attr("data-confirm");
		confirmed = false;
		title = $(this).attr("data-confirm-title");
		message = $(this).attr("data-confirm-message");
		var _param = $(this).attr("data-param");
		
		if(_param === undefined){
			param[0] = "";
			_param = "";
		}else{
			param[0] = _param;
		}
		
		if(value === undefined){
			if(input !== undefined){
				vid = "#" + input;
				value = $(vid).val();
				
				if(value === undefined){
					console.log("No input value with id " + input + " were found.");
				}else{
					param[1] = value;
				}
			}else{
				console.log("No input value were found on this event. Please make sure you set data-value or findable data-input.");
			}
		}else{
			param[1] = value;
		}
		
		if(confirm === undefined || confirm === ""){
			confirmed = true;
		}else{
			if(eval(confirm) !== undefined){
				if(typeof eval(confirm) === "function"){
					var obj = `
						{
							"command":	"` + command + `",
							"input":	"` + input + `",
							"value":	"` + value + `",
							"action":	"` + action + `",
							"param":	` + (_param) + `,
							"title":	"`+ title +`",
							"message":	"`+ message +`"
						}
					`;
					
					eval(confirm)(JSON.parse(obj));
				}else{
					console.log("Confirmation box design not found. Make sure the box is in the function named " + confirm);
				}
			}else{
				console.log("Confirmation box design not found. Make sure the box is in the function named " + confirm);
			}
		}
		
		if(confirmed){
			if(action !== undefined){
				if(action === "navigate"){
					var navigate = $(this).attr("data-navigate");
					
					if(navigate !== undefined){
						if($(this).attr("data-target") != undefined){
							if($(this).attr("data-target") == "_blank"){
								window.open(navigate);
							}else if($(this).attr("data-target") == "pop_view"){
								window.open(navigate, "Intelhost Cloud", "width=600,height=500");
							}
						}else{
							window.location = navigate;
						}
					}else{
						console.log("No navigateion value been parsed. Please make sure you have set the data-navigate attribute value.");
					}
				}
			}else{
				if(command !== undefined){
					if(eval(command) !== undefined){
						if(typeof eval(command) === "function"){
							eval(command)(param);
						}else{
							console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
						}
					}else{
						console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
					}
				}else{
					console.log("No command were set. Please set a command function in data-command attribute.");
				}
			}
		}
	});
	
	$(".change-input").on("change", function(){
		var command, input, value, exec, vid;
		var  param = new Array();
		var a = $(this).attr("data-action");
		command = $(this).attr("data-command");
		input = $(this).attr("data-input");
		value = $(this).attr("data-value");
		var _param = $(this).attr("data-param");
		
		if(_param === undefined){
			param[0] = "";
		}else{
			param[0] = _param;
		}
		
		if(value === undefined){
			if(input !== undefined){
				vid = "#" + input;
				value = $(vid).val();
				
				if(value === undefined){
					console.log("No input value with id " + input + " were found.");
				}else{
					param[1] = base64_encode(value);
				}
			}else{
				console.log("No input value were found on this event. Please make sure you set data-value or findable data-input.");
			}
		}else{
			param[1] = base64_encode(value);
		}
		
		if(command !== undefined){
			if(eval(command) !== undefined){
				if(typeof eval(command) === "function"){
					eval(command)(param);
				}else{
					console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
				}
			}else{
				console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
			}
		}else{
			console.log("No command were set. Please set a command function in data-command attribute.");
		}
	});
	
	$(".action-input").on("keyup", function(e){
		var command, input, value, exec, vid;
		var  param = new Array();
		var a = $(this).attr("data-action");
		command = $(this).attr("data-command");
		input = $(this).attr("data-input");
		value = $(this).attr("data-value");
		var _param = $(this).attr("data-param");
		
		if(_param === undefined){
			param[0] = "";
		}else{
			param[0] = _param;
		}
		
		if(value === undefined){
			if(input !== undefined){
				vid = "#" + input;
				value = $(vid).val();
				
				if(value === undefined){
					console.log("No input value with id " + input + " were found.");
				}else{
					param[1] = value;
				}
			}else{
				console.log("No input value were found on this event. Please make sure you set data-value or findable data-input.");
			}
		}else{
			param[1] = value;
		}
		
		switch(a){
			case "keyup":
				if($(this).attr("data-trigger") !== undefined){
					var b = $(this).attr("data-trigger");
				
					if(e.keyCode == b){
						if(command !== undefined){
							if(eval(command) !== undefined){
								if(typeof eval(command) === "function"){
									eval(command)(param);
								}else{
									console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
								}
							}else{
								console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
							}
						}else{
							console.log("No command were set. Please set a command function in data-command attribute.");
						}
					}
				}else{
					console.log("Data trigger not found. Please set the trigger key code.");
				}
			break;
			
			case "change":
				//Not finish yet
			break;
		}
	});
});

function hab_handler(value){
	var str = base64_decode(value);
	var obj = JSON.parse(str);
	var action, command, input, value, exec, vid;
	var confirm, title, message;
	var  param = [];
	command = obj.command;
	input = obj.input;
	value = obj.value;
	action = obj.action;
	var _param = JSON.stringify(obj.param);
	
	if(_param === "undefined"){
		param[0] = "";
		_param = "";
	}else{
		param[0] = _param;
	}
	
	if(value === "undefined"){
		if(input !== "undefined"){
			vid = "#" + input;
			value = $(vid).val();
			
			if(value === "undefined"){
				console.log("No input value with id " + input + " were found.");
			}else{
				param[1] = value;
			}
		}else{
			console.log("No input value were found on this event. Please make sure you set data-value or findable data-input.");
		}
	}else{
		param[1] = value;
	}
	
	if(action !== "undefined"){
		if(action === "navigate"){
			var navigate = $(this).attr("data-navigate");
			
			if(navigate !== "undefined"){
				if($(this).attr("data-target") != "undefined"){
					window.open(navigate);
				}else{
					window.location = navigate;
				}
			}else{
				console.log("No navigateion value been parsed. Please make sure you have set the data-navigate attribute value.");
			}
		}
	}else{
		if(command !== "undefined"){
			if(eval(command) !== "undefined"){
				if(typeof eval(command) === "function"){
					eval(command)(param);
				}else{
					console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
				}
			}else{
				console.log("Data command " + command + " not found. Please make sure the method has been created after these code block.");
			}
		}else{
			console.log("No command were set. Please set a command function in data-command attribute.");
		}
	}
}

function close_hab_box(value){
	$("." + value).remove();
}
