
/* 
models: (bchars_*)
a:
@ @
 @
@ @

b:
 {
{{{
 {

c:
  %
 %
  %

 [[
[
 [[

 <>
<>
 <>
 
defaults:
y = 10; 
xoffset = 0; 
delay = 0;
spd = 1; // 1 = norm
arr = bchars_a;
moves = [0,2,1,1];

bulletrtn = 'left';
s_interval = 9;
s_num = 1;
stages = null; // { s0: 0, s1: 1, s2: 0, s3: 1, s4: 0 }
bchar = '$';
bspd = 3;
 */

// arr, moves s_interval, s_num
let models1 = [

{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},
{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},
{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},
{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},

];


// timecnt, modelindex, y, movesoverride, optsoverride, (last 2 optional)
// movesoverride: can be array string or moveslist index
// optsoverride: object of ship options (stringify, or escape props in double quotes)
let seq1 = 
"0,0,10,,,-\
4,0,28,,,-\
7,1,35,,,-\
10,1,12,,,-\
12,0,20,,,-\
15,0,40,,,-\
18,2,12,,,-\
21,1,28,,,-\
24,0,20,,,-\
26,1,30,,,";

badsGen(bads, seq1, models1);