/**
	Just create the global mario object and define control ID's.
	Code by Rob Kleffner, 2011
*/

var Mario = {
	Controls: {
		Left: 0,
		Right: 1,
		Up: 2,
		Down: 3,
		Jump: 4,
		Shoot: 5,
		Start: 6
	}
};

Enjine.ControllerInput.RegisterControl(Mario.Controls.Left, Enjine.KeyboardIds.Left, Enjine.GamepadIds.Left)
Enjine.ControllerInput.RegisterControl(Mario.Controls.Right, Enjine.KeyboardIds.Right, Enjine.GamepadIds.Right)
Enjine.ControllerInput.RegisterControl(Mario.Controls.Up, Enjine.KeyboardIds.Up, Enjine.GamepadIds.Up)
Enjine.ControllerInput.RegisterControl(Mario.Controls.Down, Enjine.KeyboardIds.Down, Enjine.GamepadIds.Down)


Enjine.ControllerInput.RegisterControl(Mario.Controls.Jump, Enjine.KeyboardIds.S, Enjine.GamepadIds.Cross)
Enjine.ControllerInput.RegisterControl(Mario.Controls.Shoot, Enjine.KeyboardIds.A, Enjine.GamepadIds.R2)
Enjine.ControllerInput.RegisterControl(Mario.Controls.Start, Enjine.KeyboardIds.S, Enjine.GamepadIds.Cross)

