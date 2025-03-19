let Bottles = 100;
function Sing(Bottles){
    while (Bottles > = 0){
        let current = Bottles
        let currentWord = current === 1? 'bottle':'bottles';
        console.log(`${current} green ${currentWord} standing on the wall,`);
         console.log(`${current} green ${currentWord} standing on the wall,`);

        console.log(" And if one green bottle accidentally fall down");
        Bottles--;

        const nextNum = current - 1;
        let nextPart;

        if (nextNum === 0){
        nextPart = (" There'll be no green bottles standing on the wall");
        }else{
            const nextword = nextNum === 1? 'bottle':'bottles';
            nextPart = `${nextPart} green ${nextword} standing on the wall`;

            console.log(nextPart);
            nextPart = nextNum;

           
        }
    }

}
