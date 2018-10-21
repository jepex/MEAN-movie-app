db.dropDatabase();

db.movies.save (
  [
       {year:'1999', name:'The Sixth Sense'},
       {year:'2001', name:'Donnie Darko'},
       {year:'1996', name:'Trainspotting'},
       {year:'2007', name:'Zodiac'},
       {year:'1991', name:'The Silence of the Lambs'},

   ]
);

db.series.save(
    [
        {year:'1993', name:'The X-Files', seasons: 'Italy'},
        {year:'2002', name:'The Wire', seasons: 'Brazil'},
        {year:'2016', name:'Westworld', seasons: 'Brazil'},
        {year:'1999', name:'The Sopranos', seasons: 'Germany'},

    ]
);
