// pages/index.js
import { getExperiencesFromTitle } from '../../../lib/calls';
import Visualization from './visualizations'

function equalLists(list1, list2) {
  if (list1.length !== list2.length) {
      return false; // If lengths are different, lists are not equal
  }

  for (let i = 0; i < list1.length; i++) {
      if (list1[i] !== list2[i]) {
          return false; // If any corresponding elements are different, lists are not equal
      }
  }

  return true; // If all corresponding elements are the same, lists are equal
}

function indexOfCareer(retData, career){
  if(!retData["nodes"].some(entry => entry["name"] === career)){
    retData.nodes.push({id: retData.nodes.length, name: career})
    return retData.nodes.length - 1
  }
  else{
    return retData["nodes"].findIndex(entry => entry["name"] === career)
  }

}

export default async function Page() {
  const sankeyData = {
    nodes: [
      { "node": 0, "name": "node0" },
      { "node": 1, "name": "node1" },
      { "node": 2, "name": "node2" },
      { "node": 3, "name": "node3" },
    ],
    links: [
      { source: 0, target: 1, value: 1 },
      { source: 1, target: 2, value: 2 },
      { source: 3, target: 1, value: 2 }
    ]
  };
  //TODO implement!!



  function mongoDataToSankeyData(mongo, title) {
    var retData = {
      nodes: [],
      links: []
    }
    for (var key = 0; key < mongo.length; key++) {
      const userExp = mongo[key]["Experiences"];
      const titleIndex = userExp.findIndex(experience => experience.title === title);
      
      for (var i = 0; i < userExp.length -1; i++) {
        const career1 = userExp[i]["title"]
        const career2 = userExp[i+1]["title"]
          // see if node exists. If not create it
          // source: ci1, target: ci2, names: [career1, career2], value: value+1
          const careerIndex1 = indexOfCareer(retData, career1)
          const careerIndex2 = indexOfCareer(retData, career2)
          // create/increment link between 2 careers
          //TODO dataclean user form input to all lowercase
          if(!retData.links.some(link => equalLists(link.names, [career1, career2]))){
            // add the link 
            retData.links.push({ source: careerIndex1, target: careerIndex2, names: [career1, career2], value: 1 })
          } 
          else {
            const linkIndex = retData.links.findIndex(link => equalLists(link.names, [career1, career2]))
            retData.links[linkIndex].value += 1
          }
      }
    }
    console.log(retData)
    return retData
  }
      
      
  const exps = await getExperiencesFromTitle("marketer");
  const sData = mongoDataToSankeyData(exps, "marketer")



  return (
   
      <Visualization data={sData}/>
 
  );
};

