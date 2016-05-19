(function(){
	angular
		.module("quizApp")
		.controller("resultsController", resultsController);

		resultsController.$inject = ['quizMetrics']

		function resultsController(quizMetrics){
			var vm = this;

			vm.quizMetrics = quizMetrics;
		}
})();