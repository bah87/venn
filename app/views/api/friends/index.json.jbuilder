@requests.each do |request|
  json.set! request.id do
    json.partial! 'api/friends/friend', friend: request
  end
end
