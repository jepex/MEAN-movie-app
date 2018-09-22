
const movielist= function(req, res){
    res.render('movie',{
        movies:
        [
            {year:'1999', name:'The Sixth Sense'},
            {year:'2001', name:'Donnie Darko'},
            {year:'1996', name:'Trainspotting'},
            {year:'2007', name:'Zodiac'},
            {year:'1991', name:'The Silence of the Lambs'},

        ]});
};
module.exports = {
    movielist
};