require 'faker';

User.destroy_all
Post.destroy_all
Comment.destroy_all
Friend.destroy_all

users = [
  ["Chandler", "Bing", "M", "friendscover.jpg", "chandlerbing.png", "Faker::Friends"],
  ["Joey", "Tribbiani", "M", "friendscover.jpg", "joeytribbiani.png", "Faker::Friends"],
  ["Monica", "Geller", "F", "friendscover.jpg", "monicageller.png", "Faker::Friends"],
  ["Phoebe", "Buffay", "F", "friendscover.jpg", "phoebebuffay.png", "Faker::Friends"],
  ["Rachel", "Green", "F", "friendscover.jpg", "rachelgreen.png", "Faker::Friends"],
  ["Ross", "Geller", "M", "friendscover.jpg", "rossgeller.png", "Faker::Friends"],

  ["Dinesh", "Chugtai", "M", "siliconvalleycover.jpg", "dinesh.png", "Faker::SiliconValley"],
  ["Erlich", "Bachman", "M", "siliconvalleycover.jpg", "erlichbachman.png", "Faker::SiliconValley"],
  ["Gilfoyle", "Starr", "M", "siliconvalleycover.jpg", "gilfoyle.png", "Faker::SiliconValley"],
  ["Jared", "Dunn", "M", "siliconvalleycover.jpg", "jareddunn.png", "Faker::SiliconValley"],
  ["Richard", "Hendricks", "M", "siliconvalleycover.jpg", "richardhendricks.png", "Faker::SiliconValley"],

  ["Chuck", "Norris", "M", "norrisbestcover.jpg", "chuck.jpg", "Faker::ChuckNorris"],

  ["Harry", "Potter", "M", "harrypotterwallpaper.jpg", "harrypotter.png", "Faker::HarryPotter"],
  ["Hermoine", "Granger", "F", "harrypotterwallpaper.jpg", "hermoinegranger.png", "Faker::HarryPotter"],
  ["Ron", "Weasley", "M", "harrypotterwallpaper.jpg", "ronweasley.jpg", "Faker::HarryPotter"],

  ["Ted", "Mosby", "M", "himym-cover.png", "mosby.png", "Faker::HowIMetYourMother"],
  ["Barney", "Stinson", "M", "himym-cover.png", "barney.png", "Faker::HowIMetYourMother"],
  ["Robin", "Scherbatsky", "F", "himym-cover.png", "robinscherbatsky.png", "Faker::HowIMetYourMother"],
  ["Lily", "Aldrin", "F", "himym-cover.png", "lilyaldrin.png", "Faker::HowIMetYourMother"],
  ["Marshall", "Eriksen", "M", "himym-cover.png", "marshalleriksen.png", "Faker::HowIMetYourMother"],

  ["Jerry", "Seinfeld", "M", "seinfeld-cover.png", "jerryseinfeld.png", "Faker::Seinfeld"],
  ["Elaine", "Benes", "F", "seinfeld-cover.png", "elainebenes.png", "Faker::Seinfeld"],
  ["George", "Costanza", "M", "seinfeld-cover.png", "georgecostanza.png", "Faker::Seinfeld"],
  ["Cosmo", "Kramer", "M", "seinfeld-cover.png", "kramer.png", "Faker::Seinfeld"],

  ["Jonathan", "Goldsmith", "M", "mimitw-cover.jpg", "mimitw.png", "Faker::MostInterestingManInTheWorld"],

  ["Demo", "User", "M", "demo-cover.jpg", "demo.jpg", "Faker::Hacker"]
]

post_samples = []

users.each do |user|
  u = User.new(
    email: user[0],
    first_name: user[0],
    last_name: user[1],
    gender: user[2],
    password: "starwars",
    birthday: Date.new(1991,12,17)
  )
  u.cover_photo = File.open("app/assets/images/#{user[3]}");
  u.image = File.open("app/assets/images/#{user[4]}");
  u.save!

  10.times do
    if user[0] == "Chuck"
      body = Kernel.const_get(user[5]).unique.fact
    elsif user[0] == "Demo"
      body = Kernel.const_get(user[5]).unique.say_something_smart
    else
      body = Kernel.const_get(user[5]).quote
    end
    post_samples.push(body)
    Post.create(
      body: body,
      author_id: u.id
    )
  end
end

users = User.all

(0...users.length-1).each do |i|
  (i+1...users.length).each do |j|
    if users[i].cover_photo_file_name == users[j].cover_photo_file_name
      unless users[i].id == users[j].id
        Friend.create(
          requestor_id: users[i].id,
          receiver_id: users[j].id,
          status: 'ACCEPTED'
        )
      end
    end
  end
end

User.where(first_name: ['Jonathan', 'Chuck']).each do |user1|
  users.each do |user2|
    next if ['Jonathan', 'Chuck', 'Demo'].include?(user2.first_name)
    unless user1.id == user2.id
      Friend.create(
        requestor_id: user1.id,
        receiver_id: user2.id,
        status: 'ACCEPTED'
      )
    end
  end
end

demo_id = User.where(first_name: 'Demo').first.id
users[0..-2].each do |user|
  req_status = rand > 0.8 ? 'PENDING' : 'ACCEPTED'
  unless user.id == demo_id
    Friend.create(
      requestor_id: user.id,
      receiver_id: demo_id,
      status: req_status
    )
  end
end

posts = Post.all
users = User.all

posts.each do |post|
  users.each do |user|
    if rand > 0.9
      Comment.create!(body: post_samples.sample, post_id: post.id, author_id: user.id)
    elsif rand > 0.8
      Like.create!(liker_id: user.id, likeable_type: 'Post', likeable_id: post.id)
    end
  end
end

comments = Comment.all

comments.each do |comment|
  users.each do |user|
    if rand > 0.9
      Like.create!(liker_id: user.id, likeable_type: 'Comment', likeable_id: comment.id)
    end
  end
end
