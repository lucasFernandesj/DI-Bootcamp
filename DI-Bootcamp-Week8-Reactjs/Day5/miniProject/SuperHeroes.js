
class SuperHeroes extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            topScore: 0,
            heroArr: []
        }
    }
    updateScore = (n) => {
       
        let hero = SuperHeroes.superheroes;
        hero.sort(() => 0.5 - Math.random());
        if (heroArr.includes(n)) {
            this.setState({score:0});
            this.setState({ heroArr:[]});
            

        } else {
            heroArr.push(n);
            hero[n].clicked = true;
            let nowScore = this.state.score
            this.setState({ score : nowScore+1});
                        
        }
        if (topScore < nowScore) {
            this.setState({ topScore: nowScore });
        }
    }

    render() {
        
        return (
            <>
                <div className='header'>
                    <h1>Memory Game</h1>
                    <p>Click on each image only once</p>
                    <h3>Your  score:  {this.state.score} _________  Top score :  {this.state.topScore}</h3>
                </div>
                <div className={'wraper'}>


                    {
                        SuperHeroes.superheroes.map(item => {
                            return (
                                <div key={item.id} onClick={() => this.updateScore(item.id)}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{item.occupation}</p>
                                </div>
                            )
                        })

                    }

                </div>
            </>
        )
    }
}

export default SuperHeroes;