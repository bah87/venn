@comments.each do |comment|
  json.set! post.id do
    json.partial! 'api/comments/comment', comment: comment
  end
end
