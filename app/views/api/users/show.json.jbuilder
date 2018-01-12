# json.partial! "api/users/user", user: @user

json.currentUser do
  json.partial! 'api/users/user', user: @user
end

json.requests do
  @user.all_friend_requests.each do |request|
    json.set! request.id do
      json.partial! 'api/friends/friend', friend: request
    end
  end
end
