---
layout: post
title:  "Iteration in JavaScript vs Ruby"
date:   2015-11-16 00:00:00 -0600
categories: vcs
---

Now that we are working in JavaScript, we still have to iterate over arrays and dictionaries. But, we don't have any of those useful convenience methods anymore. So, as primitive as it sounds, we are just going to have to count.

Instead of using each, if I want to act on the contents of an array, I can do this:

```javascript
var array = [1,2,3];
for (var i = 0; i < array.length; i++) {
  //do stuff with array[i]
}
```

We are getting the same functionality as `.each` from ruby, but we just have to be more explicit about how that is happening. Because we are forced to always be more aware of how the iterations are happening, it is necessary to be aware of what data structures are used, so that things don't become needlessly complicated.
