Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts do
      resources :comments, on: :member, only: :index
    end
    resources :comments, only: [:create, :update, :show, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  get '/api/profile/:user_id', to: 'api/posts#show_profile'
  get '/api/feed', to: 'api/posts#show_feed'
  patch 'api/users/images/:user_id', to: 'api/users#update_user_photo'
  delete 'api/posts/images/:post_id', to: 'api/posts#delete_post_photo'
  post '/api/friend_requests/:receiver_id', to: 'api/friends#request_friend'
  patch '/api/friend_requests/:requestor_id', to: 'api/friends#accept_friend'
  delete '/api/friend_requests/:requestor_id', to: 'api/friends#reject_friend'
  get '/api/all_requests', to: 'api/friends#all_requests'
  get '/api/friends', to: 'api/users#get_friends'
  get '/api/search_users', to: 'api/users#search'
  # post '/api/like_post', to: 'api/likes#like_post'
  # post '/api/like_comment', to: 'api/likes#like_comment'

  root "static_pages#root"
end
