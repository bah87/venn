json.extract! post, :id, :body, :author_id, :updated_at, :recipient_id
author = post.author
json.author_name "#{author.first_name} #{author.last_name}"
json.author_img author.image.url
json.author_cover_img author.cover_photo.url
json.image_url asset_path(post.image.url)
