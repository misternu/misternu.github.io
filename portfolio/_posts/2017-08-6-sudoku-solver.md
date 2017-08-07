---
layout: portfolio-post
title:  "Sudoku Solver"
date:   2017-08-6 00:00:00 -0600
thumbnail: imgs/sudoku.gif
summary: "A sudoku solver written in ruby, with a fast runtime"
---
[Click here for github repo](http://github.com/misternu/sudoku)

In the on-site portion of Dev Bootcamp, the first group project is to create a sudoku solving progam. Not all teams solve it. That's okay, because the task is really about teamwork and the technical issues around sharing a codebase, not about the algorithm itself. My team managed to solve it, but I felt unsatisfied with the runtime of the program, so I made a few on my own.

Ruby is a language made for happy developers, not exactly for fast runtimes. But some of the more commonly used Enumerable methods have been highly optimized under the hood. This solution uses two of these helpers (each, reject), and I avoid using destructive methods wherever possible. This is because, in many cases, changing an array costs more time than making a new one.

The solution avoids recomputing information that was already obtained by an ancestor in the recursive tree. When a number has been eliminated from a particular square of the board, all children of that node will not take time to reconsider the possibility of it being there.

Fill in squares as long as you can with simple deduction. Then, the square with the least number of possibilities is recursively guessed. If a node discovers that it is invalid or unsolvable, it returns nil. If it has been filled in, it returns the complete board string (either to its parent or the original solve call). The board is always represented by strings so that we don't spend time switching between data representations.

The output of the program run on 15 puzzles (including some with multiple solutions), with a benchmark time of 0.03 seconds:

```
> ruby runner.rb
145892673893176425276435819519247386762583194384961752957614238438729561621358947
475936281932851764681274359517492836349768125268315497153687942794523618826149573
293541687718296453654738912972813564846952371531467298369174825125389746487625139
783426915946518327521379846658197234279643581134852769365984172417235698892761453
648732915275189463319564827486325791927618354531947682864271539752893146193456278
732689145846571329159324678413968257278135496695247831384756912521893764967412583
239517864574268319168439275792846153381975426456123987843651792925784631617392548
396245781178369524524817396287951643931486275465723918712638459659174832843592167
693875412145632798782194356357421869816957234429368175274519683968743521531286947
387419526259763418641528379716285943594631782823974165472396851135842697968157234
382619475594738621176425938863941752457263189921857364738594216245176893619382547
926513784815247639374869521648125973791438265253976148437691852569382417182754396
397648152814253769652179843479861325583924671261537984946712538728395416135486297
187234569423659871659187243795821634836495712214763985561948327348572196972316458
129578634473269158658134792936812475815746329742953816291487563387695241564321987
  0.030000   0.000000   0.030000 (  0.030455)
```
