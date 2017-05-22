


function submitForm () {
$('.js-form').submit(function(e){
	e.preventDefault();
	calcCountWords();
	uniqueWordCount();
	averageWordLength();
	$('dl').removeClass('hidden');
	});
}


function getText() {
	var text = $('#textArea').val();
	return text; 
}


function calcCountWords () {
	var text = getText();
	var textArr = text.split(/[\s,\(\)]+/g);
	var length = textArr.length;
	$(".js-wordCount").text(length);
}

function uniqueWordCount () {
	var text = getText();
	var textArr = text.split(/[\s,\(\)]+/g);
	var uniqueWordsArr = [];
	for (var i = 0; i < textArr.length; i++) {
		if (uniqueWordsArr.indexOf(textArr[i]) === -1){
			uniqueWordsArr.push(textArr[i]);
		}
	}
	$('.js-uniqueWordCount').text(uniqueWordsArr.length);
}

function averageWordLength () {
	var text = getText();
	var textArr = text.split(/[\s,\(\)]+/g);
	var count = 0;
	for (var i = 0; i < textArr.length; i++) {
		var length = textArr[i].length;
		count += length;
	}
	var average = count / textArr.length;
	$('.js-averageWordLength').text(average + " characters");
	}




$(function() {
  submitForm();
});
