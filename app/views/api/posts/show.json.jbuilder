json.partial! '/api/posts/post', post: @post
json.commentIds @post.comment_ids
json.likeIds @post.like_ids
