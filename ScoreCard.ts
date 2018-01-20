class ScoreCards {
    constructor(public runs: number, public balls:number) { }

    addScore(runs:number, balls:number){
        this.runs = runs + this.runs;
        this.balls = balls + this.balls;
        return;
    }

    getScore() {
        return {runs : this.runs , balls : this.balls}
    }

    logScore() {
        console.log(`runs : ${this.runs} balls :${this.balls}`);
    }
}



console.log(new ScoreCards(30, 30).logScore());

class FullScoreCards extends ScoreCards {
    constructor(
        public runs: number, public balls: number,
        public fours:number , public sixes: number
    ) {
        super(runs, balls)
    }

    addFullScoreCard(runs: number , balls: number , fours: number , sixes: number) {
        super.addScore(runs, balls);
        this.fours = this.fours + fours;
        this.sixes = this.sixes + sixes;
        return;
    }

    getFullScoreCard() {
        var runsAndBalls = super.getScore();
        return {...runsAndBalls , fours: this.fours , sixes: this.sixes}
    }

    logFullScoreCard() {
        console.log(`
        RUNS: ${this.runs},
        BALLS: ${this.balls},
        FOURS: ${this.fours},
        SIXES: ${this.sixes}
        `);
    }

}

console.log(new FullScoreCards(303, 102, 20 , 10).logFullScoreCard());
