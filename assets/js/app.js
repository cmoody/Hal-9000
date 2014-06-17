(function(){
	// var halText = [
	// 	[''. ''] // ['input', 'response']
	// ];
	var final_transcript = '';
	//addAudio('hal9000');

	if (!('webkitSpeechRecognition' in window)) {
		console.log("No Speech");
	}else{
		var recognition = new webkitSpeechRecognition();
		var msg = new SpeechSynthesisUtterance();
		var voices = window.speechSynthesis.getVoices();
		recognition.continuous = true; // False causes onend to happen with pause
		recognition.interimResults = true;
		msg.voice = voices[1];
		msg.lang = 'en-US';

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

		    // Work out better way to do this and reset for other commands
		    if(final_transcript == 'open the pod bay doors') {
		    	msg.text = 'I\'m afraid I cant do that dave.';
		    	speechSynthesis.speak(msg);

	    		final_transcript = '';
		    }
		};

		recognition.onerror = function(event) {
			// Throw errors
		};

		recognition.onend = function() {
			// Reset details
		};

		recognition.start();
	}

	function matchHal() {
		// Check against input
		// if match give response wav
	}
})();
