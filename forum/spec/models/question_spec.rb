require 'rails_helper'

RSpec.describe Question, type: :model do
  it "creates new questions with correct fields" do
    Question.create(email:'foo@bar.com',body:'This is foo question')
    expect(Question.first.email).to eq('foo@bar.com')
    expect(Question.first.body).to eq('This is foo question')
  end
end
