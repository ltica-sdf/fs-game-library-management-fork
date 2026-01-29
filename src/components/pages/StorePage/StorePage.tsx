import { useState } from "react";
import FeaturedGames from "./FeaturedGames/FeaturedGames";

type ReviewsByGame = { [id: number]: string[] };

function StorePage() {
    const [reviewsByGame, setReviewsByGame] = useState<ReviewsByGame>({});
    return (
        <>
            <h2>Store Page</h2>
            <FeaturedGames 
                reviewsByGame={reviewsByGame}
                setReviewsByGame={setReviewsByGame}
            />
        </>
    );
}

export default StorePage;
