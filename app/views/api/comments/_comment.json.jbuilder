json.extract! comment, :id, :body, :post_id, :updated_at, :likes
comment_author = comment.author
json.author_id comment_author.id
json.author_fname comment_author.first_name
json.author_lname comment_author.last_name
json.author_pic_url comment_author.image.url
json.image_url asset_path(comment.image.url)
