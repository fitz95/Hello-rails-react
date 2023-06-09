Rails.application.routes.draw do
  get 'root/index'
  root 'root#index'
  get '/greetings/random', to: 'greetings#random', as: 'random_greeting'
end
