json.extract! friend, :id, :requestor_id, :receiver_id, :status
requestor = friend.requestor
json.requestor_name "#{requestor.first_name} #{requestor.last_name}"
json.requestor_img requestor.image.url
receiver = friend.receiver
json.receiver_name "#{receiver.first_name} #{receiver.last_name}"
json.receiver_img receiver.image.url
json.mutual_friends requestor.mutual_friends(receiver)
