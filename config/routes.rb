Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts
  end

  get '/api/profile/:user_id', to: 'users#show_profile'
  get '/api/feed', to: 'users#show_feed'

  root "static_pages#root"
end
