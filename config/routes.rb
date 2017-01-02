Rails.application.routes.draw do
  root 'application#index'
  post '/new_job' => 'jobs#create'
  get '/all_jobs' => 'jobs#show'
  get '*path' => 'application#index'

end
