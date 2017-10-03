---
layout: post
title: "Project Euler: Problem 1"
categories: programming math
comments: true
---

### Find the sum of all the multiples of 3 or 5 below 1000

[problem on project euler site](https://projecteuler.net/problem=1)

[my solution on github](https://github.com/misternu/euler_solutions/tree/master/1)

Let's start with the intuitive solution to this problem. Loop over the range 1 to 999, and use a boolean statement to decide if you are going to add that integer to the sum.

```ruby
def reduce_three_and_five(n)
  (1...n).reduce(0) { |m, n| n % 3 == 0 || n % 5 == 0 ? m + n : m }
end
```

The above method takes the range from 1 to n and adds the integer to the sum if it is divisible by 3 or 5. Can you see why this might be wasteful? For just those numbers, it runs almost instantaneously, but what if we increase the range to 10,000,000?

```
       user     system      total        real
   1.160000   0.010000   1.170000 (  1.163298)
```

Our runtime is increasing proportionally to the number of integers that we loop over. This is referred to as **linear time** or **O(n)**. If we find a way to calculate the answer without a loop, the time that it takes will not depend on the size of the loop. This is **constant time** or **O(1)**.

Let's suppose that we only had to add the multiples of three up to 100. We know that

$$ 3 + 6 + 9 + 12 + 15 ... 99 $$

$$ = 3 \times (1 + 2 + 3 + 4 + 5 ... 33) $$

$$ = \sum_{n=1}^{33} 3n $$

$$ = 3 \times \sum_{n=1}^{33} n $$

The sum of a series of multiples of three is equal to 3 times the sum of an equally long integer sequence. It just so happens that we have a formula for the sum of sequential integers.

$$ \frac{n(n+1)}{2} $$

Where $$n$$ is the number of integers to sum. We can use this to make a method that
will return this sum for us.

```ruby
def integer_sum(n)
  n * (n + 1) / 2
end
```

We know from before that if we want the multiples of 3 up to 100, we would multiply 3 times the series of integers up to 33. This can be generalized to

$$ n \times f(m) $$

Where $$n$$ is the number that the series is divisible by, and $$m$$ is the maximum number in that series integer divided by $$n$$, and $$f$$ is the formula from before. In ruby, this becomes

```ruby
def multiples_sum(n, l)
  m = l/n
  n * integer_sum(m)
end
```

We now have a handy method that will give us the sum of multiples of ```n``` up to a maximum ```l```, and in O(1) time. All that is left is to call this three times in our solution method:

```ruby
def math_three_and_five(n)
  multiples_sum(3, n-1) +
  multiples_sum(5, n-1) -
  multiples_sum(15, n-1)
end
```

We add the multiples of three under a number to the multiples of five under a number. Since the multiples of three overlap the multiples of five, we subtract the multiples of fifteen that were duplicated. A quick test shows that this gets the same answer as our reduce method, but without iteration.
