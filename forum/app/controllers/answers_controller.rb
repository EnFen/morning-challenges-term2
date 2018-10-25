class AnswersController < ApplicationController
    def create
        @answer = Answer.create(answer_params)
        question = Question.find(@answer.question_id)
        
        # redirect_to question_path(@answer.question_id)
        redirect_to question
    end



    private
    def answer_params
        params.require(:answer).permit(:question_id,:email,:body)
    end
end
