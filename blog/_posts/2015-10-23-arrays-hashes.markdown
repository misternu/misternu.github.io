---
layout: post
title:  "Arrays & Hashes"
date:   2015-10-23 00:00:00 -0600
categories: programming
---

When learining to write programs in Ruby, it can become cumbersome to create variables for each and every object that the program creates. In many cases, you wont even know what is going to be stored until runtime. Arrays and hashes allow for you to store objects in collections, and have methods that allow for you to easily access their stored information.


### Arrays
An array stores objects in sequence. A new array can be created with either empty brackets or `Array.new`:

```ruby
array1 = []
array2 = Array.new
```

You can also create an array with objects already inside:

```ruby
array3 = [1, 2, 3, "four", 5.0]
```

There are lots of ways to retrieve things from arrays. The first and most important is indexes. Type the index you are retrieving in brackets after the variable that stores the array. Indexes start at 0.

```ruby
>> array3[2]
=> 3
```

It can also be useful to grab the objects one at a time, and to not leave them behind. This can be achieved with the `pop` and `shift` methods.

```ruby
>> a = array3.pop
=> 5.0
>> b = array3.shift
=> 1
>> array3
=> [2, 3, "four"]
```

The counterparts for these methods are `push` and `unshift`.

```ruby
>> array3.push(b)
=> [2, 3, "four", 1]
>> array3.unshift(a)
=> [5.0, 2, 3, "four", 1]
```

### Hashes

Some collections of information don't have as much of an order to them, and you want to be able to access them using a name instead of a number. That is what hashes are useful for. As with before, you can make a new hash in two ways:

```ruby
hash1 = {}
hash2 = Hash.new
```

Also again, you can instantiate them with contents.</p>

```ruby
hash3 = {"this_number" => 2, "that_number" => 42}
```

And access them with keys (instead of indexes)

```ruby
>> hash3["that_number"]
=> 42
```

You can overwrite keys or write to new keys.

```ruby
>> hash3["this_number"] = 4
=> 4
>> hash3["new_number"] = 8
=> 8
>> hash3
=> {"this_number"=>4, "new_number"=>8, "that_number"=>42}
```

### More Info

That about covers the basics of arrays and hashes. More can be found in the documentation at <a href="http://ruby-doc.org">http://ruby-doc.org</a>
