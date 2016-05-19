(function(){
	angular.module("quizApp")

	.controller('listController', listController);

    listController.$inject = ['quizMetrics', 'dataService'];

	function listController(quizMetrics, dataService){
		var vm = this;

        vm.quizMetrics = quizMetrics;
		vm.data = dataService.turtlesData;
		vm.activeTurtle = {};
        vm.activateQuiz = activateQuiz;
		vm.changeActiveTurtle = changeActiveTurtle;
		vm.search = "";

		function changeActiveTurtle(index){
			vm.activeTurtle = index;
		}

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
	}

	


})();