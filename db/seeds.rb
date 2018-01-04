# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(
  email: "brendan",
  first_name: "Brendan",
  last_name: "Higgins",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1991,12,17)
)
u2 = User.create(
  email: "chris",
  first_name: "Chris",
  last_name: "Higgins",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1988,6,2)
)
u3 = User.create(
  email: "kyle",
  first_name: "Kyle",
  last_name: "Higgins",
  password: "starwars",
  gender: "M",
  birthday: Date.new(1993,9,2)
)
u4 = User.create(
  email: "kelsey",
  first_name: "Kelsey",
  last_name: "Higgins",
  password: "starwars",
  gender: "F",
  birthday: Date.new(1992,11,15)
)

Post.destroy_all

p1 = Post.create(body: "first post!", author_id: User.first.id)
p2 = Post.create(body: "venn is awesome", author_id: User.first.id)
p3 = Post.create(body: "what's good", author_id: User.first.id)
p4 = Post.create(body: "hey dude!", author_id: User.second.id)
p5 = Post.create(body: "great night to relax", author_id: User.second.id)
p6 = Post.create(body: "let's go Rangers!", author_id: User.second.id)
p7 = Post.create(body: "flying to Chicago this weekend", author_id: User.third.id)
p8 = Post.create(body: "need Monday to be over already", author_id: User.third.id)
p9 = Post.create(body: "breh", author_id: User.third.id)
p10 = Post.create(body: "can't wait for this weekend!", author_id: User.fourth.id)
p11 = Post.create(body: "TBT", author_id: User.fourth.id)
p12 = Post.create(body: "what a day :)", author_id: User.fourth.id)
