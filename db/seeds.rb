# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create!(
  email: "LeBron",
  first_name: "LeBron",
  last_name: "James",
  password: "starwars",
  gender: "M",
  profile_pic_url: "lebron.jpg",
  birthday: Date.new(1991,12,17)
)
u2 = User.create!(
  email: "Zucc",
  first_name: "Mats",
  last_name: "Zuccarello",
  password: "starwars",
  gender: "M",
  profile_pic_url: "zucc.jpg",
  birthday: Date.new(1991,12,17)
)
u3 = User.create!(
  email: "Judge",
  first_name: "Aaron",
  last_name: "Judge",
  password: "starwars",
  gender: "M",
  profile_pic_url: "judge.jpg",
  birthday: Date.new(1991,12,17)
)
u4 = User.create!(
  email: "Odell",
  first_name: "Odell",
  last_name: "Beckham Jr.",
  password: "starwars",
  gender: "M",
  profile_pic_url: "odell.jpg",
  birthday: Date.new(1991,12,17)
)

u5 = User.create!(
  email: "demo",
  first_name: "Demo",
  last_name: "User",
  password: "starwars",
  gender: "M",
  profile_pic_url: "",
  birthday: Date.new(1991,12,17)
)

Post.destroy_all

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
