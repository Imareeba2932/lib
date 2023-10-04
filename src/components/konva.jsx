import React from "react";
import { Circle, Image, Layer, Line, Rect, Stage, Text } from "react-konva";
import useImage from "use-image";

const LoadImage = ({source}) => {
    const [image] = useImage('/logo192.png');
    return <Image draggable image={image} />
}

const MemeImage = ({source}) => {
    const [image] = useImage('/meme.jpg');
    return <Image draggable image={image} />
}

const MemeCreator = () => {
  return (
    <div>
      <div className="container py-5">
        <h1>Meme Creator</h1>
        <hr />

        <Stage width={600} height={400}>
          <Layer>
            <Rect x={0} y={0} width={100} height={100} fill="red" />
            <Rect
              x={50}
              y={50}
              width={100}
              height={200}
              fill="green"
              stroke={"yellow"}
              strokeWidth={4}
            />
            <Circle x={200} y={100} radius={50} fill="black" stroke={"red"} draggable />

            {/* <Rect x={200} y={200} width={100} height={100} stroke={"red"} /> */}

            <Line x={200} y={200} points={[0, 0, 100, 100, 100, 0, 0, 100]} stroke={"blue"} tension={0.2} closed />
            
            <LoadImage />
          
          </Layer>
        </Stage>
        <Stage width={800} height={600}>
            <Layer>
                <MemeImage />
                <Text
                    text="JavaScript"
                    fontSize={50}
                    x={300}
                    y={50}
                />
                <Text
                    text="React"
                    fontSize={50}
                    x={300}
                    y={300}
                />
            </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default MemeCreator;