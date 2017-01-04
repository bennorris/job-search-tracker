Rails.application.routes.draw do
  root 'application#index'
  post '/new_job' => 'jobs#create'
  patch '/edit_job' => 'jobs#update'
  get '/all_jobs' => 'jobs#show'
  post '/new_contact' => 'contacts#create'
  get '/all_contacts' => 'contacts#show'
  get '/all_companies' => 'companies#show'
  post '/new_company' => 'companies#create'
  get '*path' => 'application#index'

end
