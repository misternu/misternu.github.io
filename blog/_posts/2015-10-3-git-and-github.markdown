---
layout: post
title:  "Git & Github"
date:   2015-10-3 00:00:00 -0600
categories: vcs
comments: true
---
So you're learning to code. One day, when writing something, you decide to do an expirament. "Oh no," you think, "what if I'm wrong? Better save a backup copy," so you make a duplicate of the file and get on with your business. This keeps happening. Before you know it you have a pile of extra files, some with dates and some without, that you have to manually sort through to find revisions. More and more cruft, no matter how naturally organized you are.

There is a better way! A version control system(VCS), or revision control system (RCS), is software that handles this problem and many others. It remembers every change you made, and in what order. It keeps this information out of the way where you don't have to look at it. But, when you need to, you can change your work back to any revision you have made.

One such popular VCS is called Git. Using Git, you can save batches of work that you do into chunks, called 'commits'. Each commit also has a description that you write, and holds information about the time it was made and who made it. Git can also keep track of concurrent versions of your work, in 'branches'. Each branch has its own history, and the branches can borrow from each other at any point, or even merge into each other.

All of this organization is great when you are working with other people. You can push and pull to each other's git repositories directly, but that gets messy. This problem is solved with a service called [GitHub](http://github.com). [GitHub](http://github.com) hosts a copy of your repository online, so you and other users can put your changes in a centralized place. The site allows for you to ask the group for permission to make changes (pull requests), make comments on each others code, and track known problems with the code (issues).

Now that you know what Git is for, it's time to start learning it. A great place to start is [Git Immersion](http://gitimmersion.com). Have fun!
