"use client"

import { Avatar, Card, CardHeader } from "@mui/material";

export default function CommentSection(props: { comments: any }) {
  let comments = props.comments;

  return (
    <>
      <h1 className='font-big-shoulders-display text-2xl pb-3 flex text-gray-700 items-center justify-center pt-24'>Comment Section</h1>


      <ol className="relative border-l border-purple ml-8 mt-8">
        {comments?.map((exp: any, index: number) => (
          <Card key={index}>
            <CardHeader
              avatar={
                exp.Author.image ? <Avatar aria-label="user" src={exp.Author.image} /> : <Avatar aria-label="user"> {exp.Author.name.substring(0, 1)} </Avatar>
              }
              //TODO make report button
              title={exp.Author.name}
              subheader={(new Date(exp.createdAt)).toLocaleDateString("en-US")}
            />
            <p className="pt-3 pl-14" >{exp.content} </p>
          </Card>
        ))}
      </ol>
    </>
  )

}