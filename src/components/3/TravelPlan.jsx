import React, { useState } from "react";
import { initialTravelPlan } from "./places";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    console.log("handle click", parentId, childId);
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
       [parentId]:nextParent
    });
  };

  return (
    <div>
      <h1>Place to visited</h1>
      <ol>
        {planetIds.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            placesById={plan}
            onComplete={handleComplete}
            parentId={0}
          ></PlaceTree>
        ))}
      </ol>
    </div>
  );
}
