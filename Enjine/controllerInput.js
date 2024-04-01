/**
	Class that helps to manage keyboard input.
	Code by Rob Kleffner, 2011
*/

Enjine.KeyboardIds = {
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 80,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40
};

Enjine.GamepadIds = {
    Cross: 0,
    Circle: 1,
    Square: 2,
    Triangle: 3,
    L1: 4,
    R1: 5,
    L2: 6,
    R2: 7,
    Share: 8,
    Options: 9,
    JoyLeft: 10,
    JoyRight: 11,
    Up: 12,
    Down: 13,
    Left: 14,
    Right: 15
}

Enjine.ControllerInput = {
    Pressed: new Array(),
    Controls: new Array(),
    
    Initialize: function() {
        var self = this;
        document.onkeydown = function(event) { self.KeyDownEvent(event); }
        document.onkeyup = function(event) { self.KeyUpEvent(event); }
    },

    RegisterControl: function(controlId, keyboardKey, gamepadBtn) {
        this.Controls[controlId]={k: keyboardKey, g: gamepadBtn}
    },
    
    IsControlActive: function(controlId) {
        if(this.Controls[controlId]){
            var kBtn = false;
            var gBtn = false;
            if(this.Controls[controlId].k != null){
                kBtn = (this.Controls[controlId].k != null) ? this.Pressed[this.Controls[controlId].k] : false;
            }
            if(this.Controls[controlId].g != null){
                const gamepad = navigator.getGamepads()[0];
                if(gamepad != null) gBtn = gamepad.buttons[this.Controls[controlId].g].pressed;
            }
            return kBtn || gBtn;
        }s
        return false;
    },
    
    KeyDownEvent: function(event) {
        this.Pressed[event.keyCode] = true;
	this.PreventScrolling(event);
    },
    
    KeyUpEvent: function(event) {
        this.Pressed[event.keyCode] = false;
	this.PreventScrolling(event);
    },

    PreventScrolling: function(event) {
        // 37: left, 38: up, 39: right, 40: down
        if(event.keyCode >= 37 && event.keyCode <= 40){
            event.preventDefault();
        }
    }
};
