(function(){
	// var halText = [
	// 	[''. ''] // ['input', 'response']
	// ];
	var final_transcript = '';

	if (!('webkitSpeechRecognition' in window)) {
		console.log("No Speech");
	}else{
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		// Default Lang is browser based
		// recognition.lang = select_dialect.value; // Set lang

		recognition.onstart = function() {
			// To do when starts
			// Demo changes icon
		};

		recognition.onresult = function(event) {
			// Create results
			var interim_transcript = '';
		    for (var i = event.resultIndex; i < event.results.length; ++i) {
		      if (event.results[i].isFinal) {
		        final_transcript += event.results[i][0].transcript;
		      } else {
		        interim_transcript += event.results[i][0].transcript;
		      }
		    }

		    if(final_transcript == 'testing') {
		    	console.log("thanks hal");
		    	// Think of way to clear the transcript
		    }

		    // final_transcript = capitalize(final_transcript);
		    // final_span.innerHTML = linebreak(final_transcript);
		    // interim_span.innerHTML = linebreak(interim_transcript);
		    // if (final_transcript || interim_transcript) {
		    //   showButtons('inline-block');
		    // }
		};

		recognition.onerror = function(event) {
			// Throw errors
		};

		recognition.onend = function onend() {
			// Reset details
		};

		recognition.start();
	}

	function matchHal() {
		// Check against input
		// if match give response wav
	}
})();