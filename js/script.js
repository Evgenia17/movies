

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == " " || personalMovieDB.count == null || inNaN(personalMovieDB.count))
        {personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }  
    },

    rememberMyFilms: function () {
        for (let i=0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
    
                  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b; //если все значения хорошие, то записываем в базу данных ...переменная а: значение b    
                console.log('Done');
        } 
        else {
            console.log('Error');
           i--;
        }
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log (personalMovieDB);
        }  
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        }, 


    writeYourGenres: function () {
        for (let i=1; i<2; i++) {
            let genres = prompt(`Введите ваш любимый жанр через запятую`);  
            if (genres === "" || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split (', ');
            }
        }


        //     for (let i=1; i<3; i++) {
        //         const genre = prompt(`Ваш любимый жанр под номером ${i}`);  
                
        //         if (genre == "" || genre == null) {
        //         console.log('вы ввели некорректные данные или не ввели их вовсе');
        //         i--; 
        //     } else {
        //         personalMovieDB.genres [i-1]=genre;  // чтобы запись в массив была на 0
        //         // можно сократить текст: personalMovieDB.genres [i-1]=prompt(`Ваш любимый жанр под номером ${i}`);  
        //     }
            
        // } 
        personalMovieDB.genres.forEach((item, i) => {
        console.log (`Любимый жанр ${i+1} - это ${item}`);  
    });
},

     detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count<30) {
            alert ('Вы классный зритель');
        } else if (personalMovieDB.count >= 30) {
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    }
};
