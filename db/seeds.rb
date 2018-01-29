require 'faker';

User.destroy_all
Post.destroy_all
Comment.destroy_all
Friend.destroy_all

users = [
  ["Chandler", "Bing", "M", "friendscover.jpg", "chandlerbing.png", Friends],
  ["Joey", "Tribbiani", "M", "friendscover.jpg", "joeytribbiani.png", Friends],
  ["Monica", "Geller", "F", "friendscover.jpg", "monicageller.png", Friends],
  ["Phoebe", "Buffay", "F", "friendscover.jpg", "phoebebuffay.png", Friends],
  ["Rachel", "Green", "F", "friendscover.jpg", "rachelgreen.png", Friends],
  ["Ross", "Geller", "M", "friendscover.jpg", "rossgeller.png", Friends],

  ["Dinesh", "Chugtai", "M", "siliconvalleycover.jpg", "dinesh.png", SiliconValley],
  ["Erlich", "Bachman", "M", "siliconvalleycover.jpg", "erlichbachman.png", SiliconValley],
  ["Gilfoyle", "Starr", "M", "siliconvalleycover.jpg", "gilfoyle.png", SiliconValley],
  ["Jared", "Dunn", "M", "siliconvalleycover.jpg", "jareddunn.png", SiliconValley],
  ["Richard", "Hendricks", "M", "siliconvalleycover.jpg", "richardhendricks.png", SiliconValley],

  ["Chuck", "Norris", "M", "norrisbestcover.jpg", "chuck.jpg", ChuckNorris],

  ["Harry", "Potter", "M", "harrypotterwallpaper.jpg", "harrypotter.png", HarryPotter],
  ["Hermoine", "Granger", "F", "harrypotterwallpaper.jpg", "hermoinegranger.png", HarryPotter],
  ["Ron", "Weasley", "M", "harrypotterwallpaper.jpg", "ronweasley.jpg", HarryPotter],

  ["Ted", "Mosby", "M", "himym-cover.png", "mosby.png", HowIMetYourMother],
  ["Barney", "Stinson", "M", "himym-cover.png", "barney.png", HowIMetYourMother],
  ["Robin", "Scherbatsky", "F", "himym-cover.png", "robinscherbatsky.png", HowIMetYourMother],
  ["Lily", "Aldrin", "F", "himym-cover.png", "lilyaldrin.png", HowIMetYourMother],
  ["Marshall", "Eriksen", "M", "himym-cover.png", "marshalleriksen.png", HowIMetYourMother],

  ["Jerry", "Seinfeld", "M", "seinfeld-cover.png", "jerryseinfeld.png", Seinfeld],
  ["Elaine", "Benes", "F", "seinfeld-cover.png", "elainebenes.png", Seinfeld],
  ["George", "Costanza", "M", "seinfeld-cover.png", "georgecostanza.png", Seinfeld],
  ["Cosmo", "Kramer", "M", "seinfeld-cover.png", "kramer.png", Seinfeld],

  ["Jonathan", "Goldsmith", "M", "mimitw-cover.jpg", "mimitw.png", MostInterestingManInTheWorld],

  ["Demo", "User", "M", "demo-cover.jpg", "demo.jpg", FamilyGuy]
]

users.each do |user|
  u = User.new(
    email: user[0,
    first_name: user[0,
    last_name: user[1],
    gender: user[2],
    password: "starwars",
    birthday: Date.new(1991,12,17)
  )
  u.cover_photo = File.open("app/assets/images/#{user[3]}");
  u.image = File.open("app/assets/images/#{{user[4]}}");
  u.save!

  author_id = user.id
  10.times do
    body = user[6] == ChuckNorris ? Faker::user[6].fact : Faker::user[6].quote
    Post.create(body, author_id)
  end
end

users = User.all

(0...users.length).each do |i|
  (i+1..users.length).each do |j|
    if user[i].cover_photo_file_name == user[j].cover_photo_file_name
      Friend.create(
        requestor_id: user[i].id,
        receiver_id: user[j].id,
        status: 'ACCEPTED'
      )
    end
  end
end

User.where(first_name: ['Jonathan', 'Chuck']).each do |user1|
  users.each do |user2|
    next if ['Jonathan', 'Chuck', 'Demo'].include?(user2.first_name)
    Friend.create(
      requestor_id: user1.id,
      receiver_id: user2.id,
      status: 'ACCEPTED'
    )
  end
end

demo_id = User.where(first_name: 'Demo').id
users.each do |user|
  req_status = rand > .8 ? 'PENDING' : 'ACCEPTED'
  Friend.create(
    requestor_id: user.id,
    receiver_id: demo_id,
    status: req_status
  )
end

# ["LeBron", "James", "M", "lebron-james-dunks-lakers.jpg", "lebron.jpg"],
# ["Odell", "Beckham Jr.", "M", "odell-cover.jpg", "odell.jpg"],
# ["Mats", "Zuccarello", "M", "zucc-cover.jpg", "zucc.jpg"],
# ["Aaron", "Judge", "M", "judge-cover.jpg", "judge.jpg"],
# p1 = Post.create(body: "y'all still think Kobe is better?", author_id: User.first.id)
# p2 = Post.create(body: "R.W.T.W", author_id: User.first.id)
# p3 = Post.create(body: "*insert Kermit meme*", author_id: User.first.id)
# p4 = Post.create(body: "what a game!!", author_id: User.first.id)
# p5 = Post.create(body: "Cavs up", author_id: User.first.id)
# p6 = Post.create(body: "viva la blueshirts!", author_id: User.second.id)
# p7 = Post.create(body: "Winter Classic was awesome", author_id: User.second.id)
# p8 = Post.create(body: "Zuuuuuccccc", author_id: User.second.id)
# p9 = Post.create(body: "Norway -> NYC", author_id: User.second.id)
# p10 = Post.create(body: "I <3 NYR", author_id: User.second.id)
# p11 = Post.create(body: "ALL RISE", author_id: User.third.id)
# p12 = Post.create(body: "court is now in session", author_id: User.third.id)
# p13 = Post.create(body: "*insert judge pun*", author_id: User.third.id)
# p14 = Post.create(body: "GIANCARLO", author_id: User.third.id)
# p15 = Post.create(body: "you get a HR! you get a HR! you get a HR!", author_id: User.third.id)
# p16 = Post.create(body: "GMEN", author_id: User.fourth.id)
# p17 = Post.create(body: "who's throwing me the rock next year", author_id: User.fourth.id)
# p18 = Post.create(body: "inventor of the one handed catch", author_id: User.fourth.id)
# p19 = Post.create(body: "G.O.A.T", author_id: User.fourth.id)
# p20 = Post.create(body: "*Drake lyrics*", author_id: User.fourth.id)
