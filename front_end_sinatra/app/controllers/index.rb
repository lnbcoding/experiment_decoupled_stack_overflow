get '/' do
    redirect '/questions'
end

get '/questions' do
    erb :index
end

get '/questions/:id' do
    erb :show
end
