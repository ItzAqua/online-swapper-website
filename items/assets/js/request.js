var endpoint = "ws://localhost:69";

function StartConnection() {
  websocket = new WebSocket(endpoint);
  websocket.onopen = function(evt) { Start(evt) };
  websocket.onclose = function(evt) { CloseConnection(evt) };
  websocket.onmessage = function(evt) { Message(evt) };
  websocket.onerror = function(evt) { ShowError(evt) };
}

function Start(evt) {
    alert("[G4] Connection Started")
}

function CloseConnection(evt) {
    alert("[G4] Ended Connection")
}

function Message(evt) {
    alert(evt.data)
}

function ShowError(evt) {
    alert("[G4] Could Not Connect To Client, Have You Installed It?")
}

function Send(message) {
    websocket.send(message);
}