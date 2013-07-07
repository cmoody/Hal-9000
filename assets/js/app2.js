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
		recognition.continuous = true;
		recognition.interimResults = true;

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
		    	addAudio('cantdo');

	    		final_transcript = '';
		    }
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

	function addAudio(wav) {
		var audioTag = document.createElement("audio");
	    audioTag.src = 'assets/audio/' + wav + '.wav';
	    audioTag.loop = false;

	    audioTag.addEventListener("ended", function() { document.body.removeChild(audioTag); }, true);

	    document.body.appendChild(audioTag);
		audioTag.play();
	}
})();