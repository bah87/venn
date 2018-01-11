json.extract! post, :id, :body, :author_id, :updated_at, :recipient_id
author = post.author
json.author_name "#{author.first_name} #{author.last_name}"
json.author_img author.image.url
json.author_cover_img author.cover_photo.url
json.image_url asset_path(post.image.url)

if post.recipient_id
  recipient = User.find(post.recipient_id)
  json.recipient_img recipient.image.url
  json.recipient_cover_img recipient.cover_photo.url
end
