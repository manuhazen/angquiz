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
		vm.activeQuestion =  0;
	
		var numQuestionsAnswered = 0;

		function selectAnswer(index){
			dataService.quizQuestions[vm.activeQuestion].selected = index;
		}

		function setActiveQuestion(index){
			if(index === undefined){

				var breakOut = false;
				var quizLength = dataService.quizQuestions.length - 1;

				while(!breakOut) {
					vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
					
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
				}
			}

			vm.setActiveQuestion();
		};
	}


})();