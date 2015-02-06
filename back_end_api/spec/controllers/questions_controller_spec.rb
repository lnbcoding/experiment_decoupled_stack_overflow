require 'rails_helper'

RSpec.describe QuestionsController, :type => :controller do

    before(:each) do
        Question.delete_all
    end

  describe "GET index" do
    let(:question1) { FactoryGirl.create :question }

    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "lists all questions" do
        get :index
        # @questions = JSON.parse(@questions)
        expect(assigns(:questions)).to include(question1)
    end
  end

end
