import React from 'react';
import { FixedSizeList } from "react-window";
import { useEffect, useState } from 'react';
import faker from "faker";


export default function Visualize() {
    const bigList = [...Array(100)].map(() => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar()
    }));

    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex" } }}>
          <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
          <p>{bigList[index].name} - {bigList[index].email}</p>
        </div>
    );

    return (
        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}>
          {renderRow}
        </FixedSizeList>
    );
}