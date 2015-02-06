class QuestionsController < ApplicationController

    after_filter :cors_set_access_control_headers

    def index
        @questions = Question.all
        render json: @questions
    end

    def show
        @question = Question.find(params[:id])
        render json: @question
    end

    private
        def cors_set_access_control_headers
            headers['Access-Control-Allow-Origin'] = '*'
            headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
            headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
            headers['Access-Control-Max-Age'] = "1728000"
        end
end
