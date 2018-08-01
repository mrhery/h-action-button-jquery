# Action Button JQuery
**Introduction**
H-Action Button Jquery (HAB-JQuery) is a small JavaScript code to manage send multiple data from an event (click, change, keyup etc..). Sounds simple, of course, because developer can do thierself using JQuery. But HAB-JQuery has set up the class name to be use and some HTML attribute to link multiple data/value to a single function.

**Example**
Let say I have a `function` named `a()` and a button.

```
<button>
   Submit
</button>

function a(){
  //do something
}
```

What I wanna do is, whenever I click that button, it runs the function. In classic way, we may put `onclick="a()"` attribute in the button tag, but it is not a best practice. In JQuery, you may do like this:
```
$(button).on("click", function(){
  a();
});
```
The problem is, how if the button has it's own value and it's related form input. An alternate way, you may use my HAB JS. Let's see example below:

**1. Basic Usage**
To make the button accessible and functioning with HAB, you have to put the `class` name with `action-button`. By default, HAB with read `onclick` event on this `class` name.

To link a function to this button, we may put `data-command="function_name"` attribute in the `button` tag. Send single value using `data-value="value_here"` attribute and if you have many data/value, you may send a JSON in `data-param='{"json" : "data"}'` attribute in the `button` tag.
```
<button class="action-button" data-command="myFunction" data-value="Hello" data-param='{"word" : "world!"}'>
  Submit
</button>
```
Now we may create our `myFunction` (there is many way to create function with in JQuery or so on, but I ll use naked JS as example).

HAB will send `data-value` and `data-param` in an `array` value. (Format: `array(json: data-param, string: data-value)`)
```
function myFunction(value){       //value is an array
  var obj = JSON.parse(value[0]); //convert data-param into JS object
  var val = value[1];             //Assign data-value to JS variable
  
  //Do something here
  alert(val + " " + obj.word);
}
```

**2. Action Button with Input Value**
If you wanna make the value sent from and `input` field, here's some example:

You may put `data-input="input_id"` attribute in `button` tag.
```
<input type="text" id="myVal" />
<button class="action-button" data-input="myVal" data-param='{"param" : "goes here"}' data-command="myFunction">
  Send
</button>
```
The `data-input` value will be the value of the second `array` index as `array(json: data-param, string: data-input from input value)`.
```
function myFunction(value){       //value is an array
  var obj = JSON.parse(value[0]); //convert data-param into JS object
  var val = value[1];             //Assign data-value to JS variable
  
  //Do something here
  alert(val);
}
```

**3. Working with text `OnChange` and `OnKeyUp` event.**
Sorry, I haven't finish develop yet :P
