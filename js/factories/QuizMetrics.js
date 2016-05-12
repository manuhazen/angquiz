(function(){
	angular
		.module("quizApp")
		.factory("quizMetrics", quizMetrics);

		function quizMetrics(){
			var quizObject = {
				quizActive: false,
				changeState: changeState
			};

			return quizObject;

			function changeState(state){
				quizObject.quizActive = state;
			}
		}
})();