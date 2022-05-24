import StoryCard from "./StoryCard"

    const topstories = [
        {
        name: "Pokemons.dk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof",
        },
        {
        name: "Pokemons.dk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof",
        },        
        {
        name: "Pokemons.dk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof",
        }, 
        {
        name: "Pokemons.dk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof",
        },
        {
        name: "Pokemons.dk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof",
        },      
    ]

function Topstories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
        {topstories.map(story => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
    )
    
}
export default Topstories;