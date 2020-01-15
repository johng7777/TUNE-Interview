## Synopsis

This is the code that produces Profiles for user.json and logs.json for the TUNE interview project that remains reasonably close to the project spec.

## Install

If you clone the site and run:

* npm install

* npm start

The site should come up

## Explanation

This was a very fun project. Thank you for the opportunity. I'm very sorry it is probably considered late, but I'm adamant to do it "right" with a reasonable cutoff short of perfection as opposed to "slopping it together"

I felt it is time to get this into you. Hopefully I'm still qualified to interview. Its been a very busy 3 weeks, nevertheless, I was able to get a considerable portion of 'react' development under my belt. I've never programmed in React before, so that added some challenges, but good ones!

Some code is not used. I wanted you to see how I create large scoped trees (like Util) and SimplePubSub. I was going to move in that direction, but realized React handles that for this project.

In same line as above statement, I created a scope of components, both visible and invisible, general, and specific to the TUNE project, so you would see how I think. In general, I code that way, trying to create a scope large enough so that if the project were to expand, it would be easy to build both general and specific components and utilities.

I divide components into visible and invisible. Visible might be a paging widget, for example. Invisible might be a routing class, broker that works ajax calls to a REST api, or a pub sub class that serves as a generic messaging system. My goal is to separate out that which is specific for this project with things that any part of the company can use. 

## Known issues

* I purposely left some console.log statements in so you could easily see the object transformations from the json files to usable objects

* The Name is not perfectly centered to the image

* When an image cannot be accessed, whether not found or 'forbidden', the first letter is displayed, but it is not a perfect circle due to the missing image icon.

* Sort has been started, but not implemented - Time Constraint

* No unit tests - didn't feel time was warranted

* I tried to show some cleanup capabalities.. when user.json and logs.json is consumed, my intent is to delete all the data and free up memory. I have not tested whether that actually happens or not

* No paging widget is created. All data displays on the first page. This is something I would immediately consider as a practical necessity, were this a real company project. If I built a paging widget, I would place it into the general components area so it could be used by any project in the future.

* Normally I would have considered mobile devices and at least created scope to handle such. I did not do that for lack of time.

* Data Storage: I simply pulled in both files and used in-memory operations. If this were a production project, I would have considered caching and data storage.

* Also, for the avatar with initials only, I would probably work out a caching ability, but for this project, simply found a website that has the capability already.

* For the date, since we were working with a simple graph, I simply converted all dates in the end to epoch int and used that to build it. Prior to that conversion, I created an easily sortable array by days. In this use case, it wasn't necessary to keep it, so it was transformed to epoch

* Revenue: Total Revenue came back as a strange 'float'. I didn't take the time to investigate why. I simply rounded it to a digit. However, on a real project, I would try to understand why 2 sig digits added together creates a result of floats to several more sig figs. Also, I didn't go through to calculate the results of the Revenue to make sure they were accurate... the graph looks "cool" .. so I'll go with that. IF this were production, I would definitely have unit tests to verify the totals of all values were matching the what they should.

* The bottom alignment of the figures is more vertically "centered" rather than bottom justified aligning with bottom of graph. I felt it was aesthetically okay, so left it. Just wanted you to know I was aware.

* I'm aware the title of the graph with the date range is missing. That should be trivial. I had something basic, but it wasn't aesthetically good, so I left if off. Would likely take a short time to fix that if this were a real project.