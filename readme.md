# ![Assessment 1][banner]

## Workflow

At first I looked at the data available and look at some examples in the basic chart library. Most of them used .tsv, atleast the ones I looked at, so I decided to go with the dataset of the languages.

#### Explore

Me exploring the code probably looked like a caveman finding a smartphone. I didn't know where to start and what to do. So i started by using an example from the basic chart library and start from there. I changed the data in the .tsv and repaired all the errors from there. Renaming al previous instances of data with the new ones. d.frequency became d.speakers and so on. 

After all that I quickly saw that the x-axis had all the languages messed up so I started looking for a solution there. Eventually increasing the total width of the svg to give the bars more breathing room and so did the languages.

Then I just played arround with the code. What happens when I double this, or what happens if I remove this. Adding some style, not the most incredible stuff, but atleast something.

#### Process

The purpose of this visualisation is to show wich languages are spoken the most and wich are not. Its  a pretty simple idea but not a pointless one. It gives you some interesting result. The languages in the dataset are not languages you hear alot so its fun to see wich language reigns supreme :). The chart uses the following d3 features:

- d3-dsv - parse tab-separated values
- d3-format - number formatting
- d3-scale - position encodings
- d3-array - data processing
- d3-axis - axes

#### Review

In the end I am happy with what I accomplished, but I still find it rather difficult to use. I am rather new in the whole coding aspect. The last time I coded was project:web and I have not finished that yet so... However I do find it rather fun when things work out :), even if its not the greatest.

[banner]: https://cdn.rawgit.com/cmda-fe3/logo/3b150735/banner-assessment-1.svg

[a1]: https://github.com/cmda-fe3/course-17-18/tree/master/assessment-1#description

[data]: https://github.com/cmda-fe3/course-17-18/tree/master/assessment-1#data

[rubric]: https://github.com/cmda-fe3/course-17-18/tree/master/assessment-1#rubric

[fe3]: https://github.com/cmda-fe3

[cmda]: https://github.com/cmda

[pages]: https://pages.github.com

#### License
Released under the GNU General Public License, version 3.
