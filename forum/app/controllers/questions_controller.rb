class QuestionsController < ApplicationController
    def create
        @question = Question.create(question_params)
        Question.last.nil? ? @question.id = 1 : Question.last.id + 1
        
        redirect_to root_path
    end

    def show
        @question = Question.find(params[:id])
        @answers = @question.answers.order(created_at: :desc)
    end

    private

    def question_params
        params.require(:question).permit(:email,:body)
    end
end
