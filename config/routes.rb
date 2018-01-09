Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts
  end

  get '/api/profile/:user_id', to: 'api/posts#show_profile'
  get '/api/feed', to: 'api/posts#show_feed'
  get '/api/friends', to: 'api/users#get_friends'
  patch 'api/users/images/:user_id', to: 'api/users#update_user_photo'
  delete 'api/posts/images/:post_id', to: 'api/posts#delete_post_photo'

  root "static_pages#root"
end
