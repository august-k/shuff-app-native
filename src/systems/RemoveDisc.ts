const RemoveDisc = (entities, { touches }) => {
  let world = entities["physics"].world;

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      console.log("remove-disc");
      // Matter.World.remove(world, disc);
    });

  return entities;
};

export default RemoveDisc;
