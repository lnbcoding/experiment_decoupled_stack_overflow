FactoryGirl.define do
    factory :question do
        title "Testing question 123"
        content "This is testing the question content"
    end

    factory :answer do
        title "Answer testing 987"
        content "Answer This is the testing content"
        question_id 1
    end
end