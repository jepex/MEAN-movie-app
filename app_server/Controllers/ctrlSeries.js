
const winnerlist = function(req, res){
    res.render('series',{
        winners:
            [
                {year:'1993', name:'The X-Files', seasons: '11'},
                {year:'2002', name:'The Wire', seasons: '5'},
                {year:'2016', name:'Westworld', seasons: '2'},
                {year:'1999', name:'The Sopranos', seasons: '6'},

            ]});
};
module.exports = {
     winnerlist
};
