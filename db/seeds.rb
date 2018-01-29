require 'faker';

User.destroy_all
Post.destroy_all
Comment.destroy_all
Friend.destroy_all

users = [
  ["Chandler", "Bing", "M", "friendscover.jpg", "chandlerbing.png"],
  ["Joey", "Tribbiani", "M", "friendscover.jpg", "joeytribbiani.png"],
  ["Monica", "Geller", "F", "friendscover.jpg", "monicageller.png"],
  ["Phoebe", "Buffay", "F", "friendscover.jpg", "phoebebuffay.png"],
  ["Rachel", "Green", "F", "friendscover.jpg", "rachelgreen.png"],
  ["Ross", "Geller", "M", "friendscover.jpg", "rossgeller.png"],

  ["Dinesh", "Chugtai", "M", "siliconvalleycover.jpg", "dinesh.png"],
  ["Erlich", "Bachman", "M", "siliconvalleycover.jpg", "erlichbachman.png"],
  ["Gilfoyle", "Starr", "M", "siliconvalleycover.jpg", "gilfoyle.png"],
  ["Jared", "Dunn", "M", "siliconvalleycover.jpg", "jareddunn.png"],
  ["Richard", "Hendricks", "M", "siliconvalleycover.jpg", "richardhendricks.png"],

  ["Chuck", "Norris", "M", "norrisbestcover.jpg", "chuck.jpg"],

  ["Harry", "Potter", "M", "harrypotterwallpaper.jpg", "harrypotter.png"],
  ["Hermoine", "Granger", "F", "harrypotterwallpaper.jpg", "hermoinegranger.png"],
  ["Ron", "Weasley", "M", "harrypotterwallpaper.jpg", "ronweasley.jpg"],

  ["Ted", "Mosby", "M", "himym-cover.png", "mosby.png"],
  ["Barney", "Stinson", "M", "himym-cover.png", "barney.png"],
  ["Robin", "Scherbatsky", "F", "himym-cover.png", "robinscherbatsky.png"],
  ["Lily", "Aldrin", "F", "himym-cover.png", "lilyaldrin.png"],
  ["Marshall", "Eriksen", "M", "himym-cover.png", "marshalleriksen.png"],

  ["Jerry", "Seinfeld", "M", "seinfeld-cover.png", "jerryseinfeld.png"],
  ["Elaine", "Benes", "F", "seinfeld-cover.png", "elainebenes.png"],
  ["George", "Costanza", "M", "seinfeld-cover.png", "georgecostanza.png"],
  ["Cosmo", "Kramer", "M", "seinfeld-cover.png", "kramer.png"],
]

u1 = User.new(
  email: "Chandler",
  first_name: "Chandler",
  last_name: "Bing",
  gender: "M"
)


u1 = User.create!(
  email: "LeBron",
  first_name: "LeBron",
  last_name: "James",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u1.cover_photo = File.open('app/assets/images/lebron-james-dunks-lakers.jpg');
u1.image = File.open('app/assets/images/lebron.jpg');
u1.save!
u2 = User.create!(
  email: "Zucc",
  first_name: "Mats",
  last_name: "Zuccarello",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u2.cover_photo = File.open('app/assets/images/zucc-cover.jpg');
u2.image = File.open('app/assets/images/zucc.jpg');
u2.save!
u3 = User.create!(
  email: "Judge",
  first_name: "Aaron",
  last_name: "Judge",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u3.cover_photo = File.open('app/assets/images/judge-cover.jpg');
u3.image = File.open('app/assets/images/judge.jpg');
u3.save!
u4 = User.create!(
  email: "Odell",
  first_name: "Odell",
  last_name: "Beckham Jr.",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u4.cover_photo = File.open('app/assets/images/odell-cover.jpg');
u4.image = File.open('app/assets/images/odell.jpg');
u4.save!

u5 = User.create!(
  email: "demo",
  first_name: "Demo",
  last_name: "User",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u5.cover_photo = File.open('app/assets/images/demo-cover.jpg');
u5.image = File.open('app/assets/images/demo.jpg');
u5.save!

u6 = User.create!(
  email: "Barney",
  first_name: "Barney",
  last_name: "Stinson",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u6.cover_photo = File.open('app/assets/images/himym-cover.png');
u6.image = File.open('app/assets/images/barney.png');
u6.save!

Post.destroy_all

p21 = Post.create(body: Faker::HowIMetYourMother.quote, author_id: User.fifth.id)
p22 = Post.create(body: Faker::HowIMetYourMother.quote, author_id: User.fifth.id)
p23 = Post.create(body: Faker::HowIMetYourMother.quote, author_id: User.fifth.id)
p24 = Post.create(body: Faker::HowIMetYourMother.quote, author_id: User.fifth.id)


p1 = Post.create(body: "y'all still think Kobe is better?", author_id: User.first.id)
p2 = Post.create(body: "R.W.T.W", author_id: User.first.id)
p3 = Post.create(body: "*insert Kermit meme*", author_id: User.first.id)
p4 = Post.create(body: "what a game!!", author_id: User.first.id)
p5 = Post.create(body: "Cavs up", author_id: User.first.id)
p6 = Post.create(body: "viva la blueshirts!", author_id: User.second.id)
p7 = Post.create(body: "Winter Classic was awesome", author_id: User.second.id)
p8 = Post.create(body: "Zuuuuuccccc", author_id: User.second.id)
p9 = Post.create(body: "Norway -> NYC", author_id: User.second.id)
p10 = Post.create(body: "I <3 NYR", author_id: User.second.id)
p11 = Post.create(body: "ALL RISE", author_id: User.third.id)
p12 = Post.create(body: "court is now in session", author_id: User.third.id)
p13 = Post.create(body: "*insert judge pun*", author_id: User.third.id)
p14 = Post.create(body: "GIANCARLO", author_id: User.third.id)
p15 = Post.create(body: "you get a HR! you get a HR! you get a HR!", author_id: User.third.id)
p16 = Post.create(body: "GMEN", author_id: User.fourth.id)
p17 = Post.create(body: "who's throwing me the rock next year", author_id: User.fourth.id)
p18 = Post.create(body: "inventor of the one handed catch", author_id: User.fourth.id)
p19 = Post.create(body: "G.O.A.T", author_id: User.fourth.id)
p20 = Post.create(body: "*Drake lyrics*", author_id: User.fourth.id)
