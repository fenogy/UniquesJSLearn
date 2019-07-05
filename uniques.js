function updateUniques()
{
	formObj = document.forms['uniques'];
	textInput = formObj.elements['input'];
	UniquesList = document.getElementById('UniquesList');

	strChars = new String(textInput.value);
	var arrChars = [];
	var totalCount;

	var len = strChars.length;
	for(var i = 0; i < len; i++)
	{
		if(!arrChars[strChars[i]]) {
			arrChars[strChars[i]] = 1;
		} else {
			arrChars[strChars[i]] += 1;
		}
	}
	countChars = arrChars.count;

    //remove existing
	if(UniquesList.hasChildNodes())
	{
    	while(UniquesList.childNodes.length >= 1)
	    {
    	    UniquesList.removeChild(UniquesList.firstChild);
	    }
	}
	
	// Sort the characters by value
	sortedChars = [];
	for(var i in arrChars)
	{
		sortedChars.push(zeroPad(i.charCodeAt(0), 5, '0'));
	}
	sortedChars.sort();

	// List character counts
	var len = sortedChars.length;
	for(i = 0; i < sortedChars.length; i++)
	{
		character = String.fromCharCode(sortedChars[i]);
		if(sortedChars[i] == 10) {
			character = 'LF'
		}
		if(sortedChars[i] == 9) {
			character = 'TAB'
		}
        strToPrint = ' Charactor: \'' + character + '\'' + '    Value: ';
		strToPrint += ' 0x' + parseInt(sortedChars[i].replace(/^0+/,"")).toString(16).toUpperCase();
	    strToPrint += ' Occurences: ' + arrChars[String.fromCharCode(sortedChars[i])] + "\n";
		var details = document.createTextNode(strToPrint);
		UniquesList.appendChild(details);
	}

	UniquesList.appendChild(document.createTextNode(' \n\r    No of Unique characters: ' + strChars.length  ));
}

function zeroPad(n, digits, padChar) {
	n = n.toString();
	while (n.length < digits) {
		n = padChar + n;
	}
	return n;
}