json.extract! user, :id, :email, :first_name, :last_name, :birthday, :profile_pic_url
json.profile_pic_url asset_path(user.image.url)
json.cover_photo_url asset_path(user.cover_photo.url)
