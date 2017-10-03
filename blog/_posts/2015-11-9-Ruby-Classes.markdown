---
layout: post
title:  "Ruby Classes"
date:   2015-11-9 00:00:00 -0600
categories: programming
comments: true
---

Working with variables, arrays, and hashes is great... but. Sometimes, you are going to be using a data structure so many times in your program that it saves time to create a custom one. You can think of these custom classes as blueprints for new objects, that can be used again and again.

The syntax is simple:

```ruby
class ClassName
  def initialize(argument)

  end
end
```

Every class should define a method called `initialize`. This method is called when the object is created with `ClassName.new`. One of the most important things you can do in an initialize method is to set the instance variables. Lets try that now in a new class called Jar.

```ruby
class Jar
  def initialize(item, quantity)
    @item = item
    @quantity = quantity
  end
end
```

The `@` at the beginning of a variable indicates that it is an instance variable. Instance variables are available from inside each instance of the class. By storing those two values in instance variables, we get to keep them for longer than the execution of `initialize`.

```ruby
class Jar
  def initialize(item, quantity)
    @item = item
    @quantity = quantity
  end

  def add_one
    @quantity += 1
  end
end
```

I added a method `add_one` to the class. We can call that on an instance of the class to increase its stored number of items by one. But how do we get that item?

```ruby
marbles = Jar.new("marbles", 8)
marbles.add_one
p marbles.quantity
```

When we try to access the instance variable from the outside it doesn't work. It should have said 9, but we get a `NoMethodError`. For that, we will need to either make a method that returns the variable manually, or learn about accessors. A subject for next time? I will leave it at that for now, thanks for reading!
