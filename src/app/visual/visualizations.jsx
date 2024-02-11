"use client"
// pages/index.js
import SankeyDiagram from './basic_sankey';

//TODO prune tree so width is reasonable
//TODO add links to link click

export default function Page ({data}) {
  return (
    <div>
      <h1>Sankey Diagram Example</h1>
      <SankeyDiagram data={data} />
    </div>
  );
};

