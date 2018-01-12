json.user do
  json.extract! user, :id, :email, :first_name, :last_name, :birthday
  json.profile_pic_url asset_path(user.image.url)
  json.cover_photo_url asset_path(user.cover_photo.url)
end

json.requests do
  json.friend_requests user.all_friend_requests
end
