#pragma strict
var Month : UnityEngine.UI.Dropdown;
var Day : UnityEngine.UI.Dropdown;
var Year : UnityEngine.UI.Dropdown;
	
function Start () {
	Debug.Log(PlayerPrefs.GetFloat("Year"));
	if (PlayerPrefs.GetFloat("Month") != 0 && PlayerPrefs.GetFloat("Day") != 0 && PlayerPrefs.GetFloat("Year") != 0) {
		Application.LoadLevel ("Stats");
	}
}

function Change () {
	if (PlayerPrefs.GetFloat("Month") != 0 && PlayerPrefs.GetFloat("Day") != 0 && PlayerPrefs.GetFloat("Year") != 0) {
		Application.LoadLevel ("Stats");
	}
}


function Months () {
	PlayerPrefs.SetFloat("Month", Month.value);
}

function Days () {
	PlayerPrefs.SetFloat("Day", Day.value);
}

function Years () {
	if (Year.value == 1) {                            //Jesus Christ this is long
		PlayerPrefs.SetFloat("Year", 2016);
	}else if (Year.value == 2) {
		PlayerPrefs.SetFloat("Year", 2015);
	}else if (Year.value == 3) {
		PlayerPrefs.SetFloat("Year", 2014);
	}else if (Year.value == 4) {
		PlayerPrefs.SetFloat("Year", 2013);
	}else if (Year.value == 5) {
		PlayerPrefs.SetFloat("Year", 2012);
	}else if (Year.value == 6) {
		PlayerPrefs.SetFloat("Year", 2011);
	}else if (Year.value == 7) {
		PlayerPrefs.SetFloat("Year", 2010);
	}else if (Year.value == 8) {
		PlayerPrefs.SetFloat("Year", 2009);
	}else if (Year.value == 9) {
		PlayerPrefs.SetFloat("Year", 2008);
	}else if (Year.value == 10) {
		PlayerPrefs.SetFloat("Year", 2007);
	}else if (Year.value == 11) {
		PlayerPrefs.SetFloat("Year", 2006);
	}else if (Year.value == 12) {
		PlayerPrefs.SetFloat("Year", 2005);
	}else if (Year.value == 13) {
		PlayerPrefs.SetFloat("Year", 2004);
	}else if (Year.value == 14) {
		PlayerPrefs.SetFloat("Year", 2003);
	}else if (Year.value == 15) {
		PlayerPrefs.SetFloat("Year", 2002);
	}else if (Year.value == 16) {
		PlayerPrefs.SetFloat("Year", 2001);
	}else if (Year.value == 17) {
		PlayerPrefs.SetFloat("Year", 2000);
	}else if (Year.value == 18) {
		PlayerPrefs.SetFloat("Year", 1999);
	}else if (Year.value == 19) {
		PlayerPrefs.SetFloat("Year", 1998);
	}else if (Year.value == 20) {
		PlayerPrefs.SetFloat("Year", 1997);
	}else if (Year.value == 21) {
		PlayerPrefs.SetFloat("Year", 1996);
	}else if (Year.value == 22) {
		PlayerPrefs.SetFloat("Year", 1995);
	}else if (Year.value == 23) {
		PlayerPrefs.SetFloat("Year", 1994);
	}else if (Year.value == 24) {
		PlayerPrefs.SetFloat("Year", 1993);
	}else if (Year.value == 25) {
		PlayerPrefs.SetFloat("Year", 1992);
	}else if (Year.value == 26) {
		PlayerPrefs.SetFloat("Year", 1991);
	}else if (Year.value == 27) {
		PlayerPrefs.SetFloat("Year", 1990);
	}else if (Year.value == 28) {
		PlayerPrefs.SetFloat("Year", 1989);
	}else if (Year.value == 29) {
		PlayerPrefs.SetFloat("Year", 1988);
	}else if (Year.value == 30) {
		PlayerPrefs.SetFloat("Year", 1987);
	}else if (Year.value == 31) {
		PlayerPrefs.SetFloat("Year", 1986);
	}else if (Year.value == 32) {
		PlayerPrefs.SetFloat("Year", 1985);
	}else if (Year.value == 33) {
		PlayerPrefs.SetFloat("Year", 1984);
	}else if (Year.value == 34) {
		PlayerPrefs.SetFloat("Year", 1983);
	}else if (Year.value == 35) {
		PlayerPrefs.SetFloat("Year", 1982);
	}else if (Year.value == 36) {
		PlayerPrefs.SetFloat("Year", 1981);
	}else if (Year.value == 37) {
		PlayerPrefs.SetFloat("Year", 1980);
	}else if (Year.value == 38) {
		PlayerPrefs.SetFloat("Year", 1979);
	}else if (Year.value == 39) {
		PlayerPrefs.SetFloat("Year", 1978);
	}else if (Year.value == 40) {
		PlayerPrefs.SetFloat("Year", 1977);
	}else if (Year.value == 41) {
		PlayerPrefs.SetFloat("Year", 1976);
	}else if (Year.value == 42) {
		PlayerPrefs.SetFloat("Year", 1975);
	}else if (Year.value == 43) {
		PlayerPrefs.SetFloat("Year", 1974);
	}else if (Year.value == 44) {
		PlayerPrefs.SetFloat("Year", 1973);
	}else if (Year.value == 45) {
		PlayerPrefs.SetFloat("Year", 1972);
	}else if (Year.value == 46) {
		PlayerPrefs.SetFloat("Year", 1971);
	}else if (Year.value == 47) {
		PlayerPrefs.SetFloat("Year", 1970);
	}else if (Year.value == 48) {
		PlayerPrefs.SetFloat("Year", 1969);
	}else if (Year.value == 49) {
		PlayerPrefs.SetFloat("Year", 1968);
	}else if (Year.value == 50) {
		PlayerPrefs.SetFloat("Year", 1967);
	}else if (Year.value == 51) {
		PlayerPrefs.SetFloat("Year", 1966);
	}else if (Year.value == 52) {
		PlayerPrefs.SetFloat("Year", 1965);
	}else if (Year.value == 53) {
		PlayerPrefs.SetFloat("Year", 1964);
	}else if (Year.value == 54) {
		PlayerPrefs.SetFloat("Year", 1963);
	}else if (Year.value == 55) {
		PlayerPrefs.SetFloat("Year", 1962);
	}else if (Year.value == 56) {
		PlayerPrefs.SetFloat("Year", 1961);
	}else if (Year.value == 57) {
		PlayerPrefs.SetFloat("Year", 1960);
	}else if (Year.value == 58) {
		PlayerPrefs.SetFloat("Year", 1959);
	}else if (Year.value == 59) {
		PlayerPrefs.SetFloat("Year", 1958);
	}else if (Year.value == 60) {
		PlayerPrefs.SetFloat("Year", 1957);
	}else if (Year.value == 61) {
		PlayerPrefs.SetFloat("Year", 1956);
	}else if (Year.value == 62) {
		PlayerPrefs.SetFloat("Year", 1955);
	}else if (Year.value == 63) {
		PlayerPrefs.SetFloat("Year", 1954);
	}else if (Year.value == 64) {
		PlayerPrefs.SetFloat("Year", 1953);
	}else if (Year.value == 65) {
		PlayerPrefs.SetFloat("Year", 1952);
	}else if (Year.value == 66) {
		PlayerPrefs.SetFloat("Year", 1951);
	}else if (Year.value == 67) {
		PlayerPrefs.SetFloat("Year", 1950);
	}else if (Year.value == 68) {
		PlayerPrefs.SetFloat("Year", 1949);
	}else if (Year.value == 69) {
		PlayerPrefs.SetFloat("Year", 1948);
	}else if (Year.value == 70) {
		PlayerPrefs.SetFloat("Year", 1947);
	}else if (Year.value == 71) {
		PlayerPrefs.SetFloat("Year", 1946);
	}else if (Year.value == 72) {
		PlayerPrefs.SetFloat("Year", 1945);
	}else if (Year.value == 73) {
		PlayerPrefs.SetFloat("Year", 1944);
	}else if (Year.value == 74) {
		PlayerPrefs.SetFloat("Year", 1943);
	}else if (Year.value == 75) {
		PlayerPrefs.SetFloat("Year", 1942);
	}else if (Year.value == 76) {
		PlayerPrefs.SetFloat("Year", 1941);
	}else if (Year.value == 77) {
		PlayerPrefs.SetFloat("Year", 1940);
	}else if (Year.value == 78) {
		PlayerPrefs.SetFloat("Year", 1939);
	}else if (Year.value == 79) {
		PlayerPrefs.SetFloat("Year", 1938);
	}else if (Year.value == 80) {
		PlayerPrefs.SetFloat("Year", 1937);
	}else if (Year.value == 81) {
		PlayerPrefs.SetFloat("Year", 1936);
	}else if (Year.value == 82) {
		PlayerPrefs.SetFloat("Year", 1935);
	}else if (Year.value == 83) {
		PlayerPrefs.SetFloat("Year", 1934);
	}else if (Year.value == 84) {
		PlayerPrefs.SetFloat("Year", 1933);
	}else if (Year.value == 85) {
		PlayerPrefs.SetFloat("Year", 1932);
	}else if (Year.value == 86) {
		PlayerPrefs.SetFloat("Year", 1931);
	}else if (Year.value == 87) {
		PlayerPrefs.SetFloat("Year", 1930);
	}else if (Year.value == 88) {
		PlayerPrefs.SetFloat("Year", 1929);
	}else if (Year.value == 89) {
		PlayerPrefs.SetFloat("Year", 1928);
	}else if (Year.value == 90) {
		PlayerPrefs.SetFloat("Year", 1927);
	}else if (Year.value == 91) {
		PlayerPrefs.SetFloat("Year", 1926);
	}else if (Year.value == 92) {
		PlayerPrefs.SetFloat("Year", 1925);
	}else if (Year.value == 93) {
		PlayerPrefs.SetFloat("Year", 1924);
	}else if (Year.value == 94) {
		PlayerPrefs.SetFloat("Year", 1923);
	}else if (Year.value == 95) {
		PlayerPrefs.SetFloat("Year", 1922);
	}else if (Year.value == 96) {
		PlayerPrefs.SetFloat("Year", 1921);
	}else if (Year.value == 97) {
		PlayerPrefs.SetFloat("Year", 1920);
	}else if (Year.value == 98) {
		PlayerPrefs.SetFloat("Year", 19191);
	}else if (Year.value == 99) {
		PlayerPrefs.SetFloat("Year", 1918);
	}else if (Year.value == 100) {
		PlayerPrefs.SetFloat("Year", 1917);
	}else if (Year.value == 101) {
		PlayerPrefs.SetFloat("Year", 1916);
	}else if (Year.value == 102) {
		PlayerPrefs.SetFloat("Year", 1915);
	}else if (Year.value == 103) {
		PlayerPrefs.SetFloat("Year", 1914);
	}else if (Year.value == 104) {
		PlayerPrefs.SetFloat("Year", 1913);
	}else if (Year.value == 105) {
		PlayerPrefs.SetFloat("Year", 1912);
	}else if (Year.value == 106) {
		PlayerPrefs.SetFloat("Year", 1911);
	}else if (Year.value == 107) {
		PlayerPrefs.SetFloat("Year", 1910);
	}else if (Year.value == 108) {
		PlayerPrefs.SetFloat("Year", 1909);
	}else if (Year.value == 109) {
		PlayerPrefs.SetFloat("Year", 1908);
	}else if (Year.value == 110) {
		PlayerPrefs.SetFloat("Year", 1907);
	}else if (Year.value == 111) {
		PlayerPrefs.SetFloat("Year", 1906);
	}else if (Year.value == 112) {
		PlayerPrefs.SetFloat("Year", 1905);
	}else if (Year.value == 113) {
		PlayerPrefs.SetFloat("Year", 1904);
	}else if (Year.value == 114) {
		PlayerPrefs.SetFloat("Year", 1903);
	}else if (Year.value == 115) {
		PlayerPrefs.SetFloat("Year", 1902);
	}else if (Year.value == 116) {
		PlayerPrefs.SetFloat("Year", 1901);
	}else if (Year.value == 117) {
		PlayerPrefs.SetFloat("Year", 1900);
	}
}