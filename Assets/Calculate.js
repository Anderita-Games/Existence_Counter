#pragma strict
var Year : UnityEngine.UI.Text;
var Month : UnityEngine.UI.Text;
var Day : UnityEngine.UI.Text;
var Hours : UnityEngine.UI.Text;
var Minutes : UnityEngine.UI.Text;
var Seconds : UnityEngine.UI.Text;

var Year2 = parseFloat(System.DateTime.UtcNow.ToString("yyyy"));
var Month2 = parseFloat(System.DateTime.UtcNow.ToString("MM"));
var Day2 = parseFloat(System.DateTime.UtcNow.ToString("dd"));
var Hours2 = parseFloat(System.DateTime.UtcNow.ToString("HH"));
var Minutes2 = parseFloat(System.DateTime.UtcNow.ToString("mm"));
var Seconds2 = parseFloat(System.DateTime.UtcNow.ToString("ss"));

function Start () {
	
	while (1 > 0) {
		yield WaitForSeconds (1);
		Application.LoadLevel ("Stats");
	}
}

function Update () {
	Debug.Log(System.DateTime.UtcNow.ToString("ss"));
	var Seconds3 = ((((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) * -86400 + (Hours2 * 120) + (Minutes2 * 60) + Seconds2);
	
	Year.text = Mathf.Abs(PlayerPrefs.GetFloat("Year") - Year2 + ((PlayerPrefs.GetFloat("Month") - Month2) / 12) + ((PlayerPrefs.GetFloat("Day") - Day2) / 365)) + " Years";
	
	Month.text = Mathf.Abs(((PlayerPrefs.GetFloat("Year") - Year2) * 12) + (PlayerPrefs.GetFloat("Month") - Month2) + ((PlayerPrefs.GetFloat("Day") - Day2) / 30)) + " Months";
	
	Day.text = Mathf.Abs(((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) + " Days";
	
	Hours.text = Mathf.Abs((((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) * 24 + Hours2) + " Hours";
	
	Minutes.text = Mathf.Abs((((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) * 1440 + (Hours2 * 60) + Minutes2) + " Minutes";
	
	Seconds.text = Seconds3.ToString("n0") + " Seconds";
}

function Reset () {
	PlayerPrefs.DeleteAll();
	Application.LoadLevel ("MainMenu");
}

