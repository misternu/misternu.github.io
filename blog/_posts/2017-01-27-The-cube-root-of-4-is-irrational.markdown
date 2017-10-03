---
layout: post
title:  "The cube root of four is irrational"
date:   2017-01-27 00:00:00 -0600
categories: math
comments: true
---

A proof by contradiction is one in which you assume that something is true, and show that the conclusions are contradictory, and so the assumtion must be false. Since we are trying to prove that it is *irrational*, we will assume that it is *rational*, and work from there to find something fishy.

$$ \sqrt[3]{4} = \frac{a}{b} $$

The square root of 4 is assumed to be equal to the ratio between a whole number $$a$$ and a whole number $$b$$, having no common factors besides one (reduced to lowest terms). Using algebra, we can conclude that $$b$$ cubed is equal to $$a$$ cubed divided by four:

$$
  4 = \left ( \frac{a}{b} \right )^3 \qquad
  4 = \frac{a^3}{b^3} \qquad
  b^3 = \frac{a^3}{4}
$$

We know that $$a$$ and $$b$$ are whole numbers, so their cubes are also whole numbers. So the cube of $$a$$ is evenly divisible by four, and therefore also by two, so it is an even number. $$a$$ cannot be odd, if its cube is even, so it is even. But we assumed that $$a$$ and $$b$$ have no common factors, so $$b$$ must be odd. Knowing this, lets break up our equation:

$$ b^3 = a * a * a * \frac{1}{4} $$

Let $$x$$ be $$a$$ divided by two. Simplify.

$$
  x = \frac{a}{2} \qquad
  b^3 = \frac{a}{2} * \frac{a}{2} * a \qquad
  b^3 = x^2 * a
$$

Since $$b$$ is odd and so is its cube, the prime factorization of the left hand side must contain no twos. But the product on the right includes the even number $$a$$, and so the prime factorization must contain at least one two. Prime factorizations of equal numbers are identical, so the same number must and must not have a factor of two. This is absurd, therefore, our assumption is false. The cube root of four must be irrational.
