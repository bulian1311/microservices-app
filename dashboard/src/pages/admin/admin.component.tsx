import React from "react";
import ColumnList from "../../components/column-list/column-list.component";
import { Container } from "../../components/_layout/container/container.styles";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import useStore from "../../hooks/use-store.hook";
//import { io as socketIOClient } from "socket.io-client";

const Admin = () => {
  const { columnStore } = useStore();

  const onDragEnd: OnDragEndResponder = (result) => {
    columnStore.onDropStart(result);
  };

  // const [response, setResponse] = React.useState("");

  // React.useEffect(() => {
  //   const socket = socketIOClient("http://127.0.0.1:4000");

  //   socket.on("connect", () => {
  //     socket
  //       .emit("authenticate", {
  //         token:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTU5OTc0MDU2MH0.TbnjnqYEGDkCCsplrZEzkOs7mwrTJJam31UGM8eR2OU",
  //       })
  //       .on("authenticated", () => {
  //         socket.on("qqq", (data: any) => {
  //           setResponse(data);
  //         });
  //       })
  //       .on("unauthorized", (msg: any) => {
  //         console.error(`unauthorized: ${JSON.stringify(msg.data)}`);
  //       });
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <h1>{"response"}</h1>
        <ColumnList />
      </Container>
    </DragDropContext>
  );
};

export default Admin;
