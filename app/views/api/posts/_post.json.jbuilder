json.extract! post, :id, :body, :author_id, :updated_at, :recipient_id
json.image_url asset_path(post.image.url)
