Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts
  end

  get '/api/profile/:user_id', to: 'api/posts#show_profile'
  get '/api/feed', to: 'api/posts#show_feed'
  get '/api/friends', to: 'api/users#get_friends'

  root "static_pages#root"
end
