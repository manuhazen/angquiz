(function(){
	angular
	.module("quizApp")
	.controller("quizController", quizController);

	quizController.$inject = ['quizMetrics', 'dataService'];

	function quizController(quizMetrics, dataService){
		vm = this;

		vm.quizMetrics = quizMetrics;
		vm.dataService = dataService;
		vm.questionAnswered = questionAnswered;
		vm.selectAnswer = selectAnswer;
		vm.setActiveQuestion = setActiveQuestion;
		vm.finaliseAnswers = finaliseAnswers;
		vm.error = false;
		vm.finalise = false;
		vm.activeQuestion =  0;
	
		var numQuestionsAnswered = 0;

		function finaliseAnswers(){
			vm.finalise = false;
			numQuestionsAnswered = 0;
			vm.activeQuestion = 0;
			quizMetrics.markQuiz("quiz", false);
			quizMetrics.changeState("results", true);
		}

		function selectAnswer(index){
			dataService.quizQuestions[vm.activeQuestion].selected = index;
		}

		function setActiveQuestion(index){
			if(index === undefined){

				var breakOut = false;
				var quizLength = dataService.quizQuestions.length - 1;

				while(!breakOut) {
					vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
					
					if(vm.activeQuestion === 0){
						vm.error = true;
					}

					if(dataService.quizQuestion[vm.activeQuestion].selected == null){
						breakOut = true;
					}
				}

			} else {
				vm.activeQuestion = index;
			}

		};

		function questionAnswered(){

			var quizLength = dataService.quizQuestions.length;

			if(dataService.quizQuestions[vm.activeQuestion].selected !== null){
				numQuestionsAnswered++;
				if(numQuestionsAnswered >= quizLength){
					//finalize quiz
					for (var i = 0; i < quizLength; i++) {
						if(dataService.quizQuestions[i].selected === null){
							setActiveQuestion(i);
							return;
						}
					}
					vm.error = false;
					vm.finalise = true;
					return;
				}
			}

			vm.setActiveQuestion();
		};
	}


})();