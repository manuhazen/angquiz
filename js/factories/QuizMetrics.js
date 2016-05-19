(function(){
	angular
		.module("quizApp")
		.factory("quizMetrics", quizMetrics);

		quizMetrics.$inject = ['dataService']

		function quizMetrics(dataService){
			var quizObject = {
				quizActive: false,
				resultsActive: false,
				changeState: changeState,
				correctAnswers: [],
				markQuiz: markQuiz,
				numCorrect: 0,
			};

			return quizObject;

			function changeState(metric, state){
			if(metric === "quiz"){
				quizObject.quizActive = state;
			} else if(metric === "results") {
				quizObject.resultsActive = state;
			} else {
				return false;
				}
			}

			function markQuiz(){
				quizObject.correctAnswers = dataService.correctAnswers;
				for (var i = 0; i < dataService.quizQuestions.length; i++) {
					if(dataService.quizQuestions[i].selected === dataService.correctAnswers){
						dataService.quizQuestions[i].correct = true;
						quizObj.numCorrect ++;
					} else {
						dataService.quizQuestions[i].correct = false;
					}
				}
			}
		}
})();